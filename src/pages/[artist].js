import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import path from 'path';
import fs from 'fs/promises';
import styles from '../styles/artistDetail.module.css';

const BackArrow = () => (
  <Link href="/">
    <p className={styles.backArrow}>&larr; Revenir en arrière</p>
  </Link>
);

const ArtistDetail = ({ artistInfo, youtubeVideoId, note }) => {
  const router = useRouter();
  const { artist } = router.query;

  if (!artistInfo) {
    return <div>Chargement...</div>;
  }

  const handleDelete = async (id) => {
    try {
      const deleteUrl = `/api/deleteSong/${id}`;
      const response = await axios.delete(deleteUrl);
  
      if (response.status === 200) {
        console.log('Élément supprimé avec succès de la base de données');
        router.push('/');
      } else {
        console.error('Erreur lors de la suppression de l\'élément de la base de données');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'élément de la base de données :', error);
    }
  };

  const handleEdit = async () => {
    const updatedArtistInfo = {
      // Define the updated artist information here (e.g., genre, trackName, etc.)
    };

    try {
      const response = await axios.put(`/api/artists/${artist}`, updatedArtistInfo); // Replace with your edit API endpoint
      console.log('Edit response:', response.data);
      // Handle success or show a success message
    } catch (error) {
      console.error('Error editing artist:', error);
      // Handle error or show an error message
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backArrowWrapper}>
        <BackArrow />
      </div>
      {artistInfo ? (
        <div className={styles.artistInfo}>
          <h1 className={styles.artistName}>{artist}</h1>
          <p className={styles.genre}>Genre de musique : {artistInfo.genre}</p>
          <p className={styles.trackName}>Titre de la  musique : {artistInfo.trackName}</p>
          <p className={styles.playcount}>Nombre d'écoutes de la musique : {artistInfo.playcount}</p>
          {note ? ( // Vérifier si la note existe
            <p className={styles.genre}>Note : {note}</p>
          ) : null}
          {youtubeVideoId ? (
            <div className={styles.youtubeVideo}>
              <h2 className={styles.videoTitle}>Clip vidéo :</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className={styles.editDeleteButtons}>
                <Link href={`/edit/${artist}`} passHref>
                  <p className={styles.modifier}>Notez ce son</p>
                </Link>
                <button onClick={() => handleDelete(artistInfo.id)} className={styles.deleteButton}>
                  Supprimer
                </button>
              </div>
            </div>
          ) : (
            <p className={styles.noVideo}>Aucun clip vidéo trouvé pour la dernière musique.</p>
          )}
        </div>
      ) : (
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Artiste introuvable</h1>
          <p className={styles.notFoundText}>L'artiste que vous recherchez n'a pas été trouvé dans la base de données.</p>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const artist = params.artist;
    const lastFmApiKey = 'ca8673c717fa807009a9e33e0c0fbec9'; // Remplacez par votre clé API Last.fm
    const youtubeApiKey = 'AIzaSyCZ2tY_LM_kpXyURG6x2T4AYU9B9aYl4Lg'; // Remplacez par votre clé API YouTube

    // Appel à l'API Last.fm pour obtenir les informations de l'artiste
    const artistInfoUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
      artist
    )}&api_key=${lastFmApiKey}&format=json`;

    const artistResponse = await axios.get(artistInfoUrl);
    const artistData = artistResponse.data;

    if (artistData && artistData.artist) {
      const genre = artistData.artist.tags.tag.length > 0 ? artistData.artist.tags.tag[0].name : '';

      // Récupérer les données de la base de données
      const dbFilePath = path.join(process.cwd(), 'db.json');
      const jsonData = await fs.readFile(dbFilePath, 'utf8');
      const data = JSON.parse(jsonData);

      // Vérifier si data.searchs est un tableau avant d'utiliser la méthode find
      if (Array.isArray(data.searchs)) {
        // Trouver l'artiste correspondant dans les données de la base de données
        const artistInfo = data.searchs.find(item => item.artist === artist);

        // Rechercher la dernière vidéo YouTube correspondant au titre de la chanson dans la base de données
        const trackName = artistInfo.trackName; // Récupérer le titre de la chanson depuis la base de données
        const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          `${artist} ${trackName}`
        )}&key=${youtubeApiKey}`;

        const youtubeSearchResponse = await axios.get(youtubeSearchUrl);
        const youtubeSearchData = youtubeSearchResponse.data;
        let youtubeVideoId = '';

        if (
          youtubeSearchData &&
          youtubeSearchData.items &&
          youtubeSearchData.items.length > 0
        ) {
          // Trouver la première vidéo YouTube qui correspond au titre de la chanson
          youtubeVideoId = youtubeSearchData.items[0].id.videoId;
        }

        // Récupérer la note de l'artiste s'il en a une
        let note = '';
        if (artistInfo && 'note' in artistInfo) {
          note = artistInfo.note;
        }

        return {
          props: {
            artistInfo: {
              genre: genre,
              listeners: artistData.artist.stats.listeners,
              trackName: trackName,
              playcount: artistData.artist.stats.playcount,
              id: artistInfo.id,
            },
            youtubeVideoId: youtubeVideoId,
            note: note, // Passer la note à la page
          },
        };
      } else {
        console.error('Data in db.json is not in the correct format.');
        return {
          props: {
            artistInfo: null,
            youtubeVideoId: '',
            note: '', // Par défaut, note est vide
          },
        };
      }
    } else {
      return {
        props: {
          artistInfo: null,
          youtubeVideoId: '',
          note: '', // Par défaut, note est vide
        },
      };
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'artiste :', error);
    return {
      props: {
        artistInfo: null,
        youtubeVideoId: '',
        note: '', // Par défaut, note est vide
      },
    };
  }
}

export default ArtistDetail;
