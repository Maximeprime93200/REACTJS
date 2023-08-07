import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/musicAdd.module.css';

const AddSong = ({ onAddSuccess }) => {
  const [artist, setArtist] = useState('');
  const [latestTrack, setLatestTrack] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = 'ca8673c717fa807009a9e33e0c0fbec9';

      // Obtenir les informations de l'artiste pour récupérer le genre de musique
      const artistInfoUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
        artist
      )}&api_key=${apiKey}&format=json`;

      const artistResponse = await axios.get(artistInfoUrl);
      const artistData = artistResponse.data;

      if (artistData && artistData.artist) {
        // Récupérer le genre de musique à partir des informations de l'artiste
        const genre = artistData.artist.tags.tag.length > 0 ? artistData.artist.tags.tag[0].name : '';

        // Obtenir la dernière musique de l'artiste
        const tracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${encodeURIComponent(
          artist
        )}&api_key=${apiKey}&format=json&limit=1`;

        const response = await axios.get(tracksUrl);
        const data = response.data;

        if (data && data.toptracks && data.toptracks.track && data.toptracks.track.length > 0) {
          const track = data.toptracks.track[0];
          const trackName = track.name;
          const playcount = track.playcount;
          const listeners = track.listeners;
          const url = track.url;

          // Enregistrer les résultats de recherche dans la base de données via l'API
          try {
            const result = await axios.post('/api/addSong', {
              artist: artist,
              trackName: trackName,
              playcount: playcount,
              listeners: listeners,
              url: url,
              genre: genre,
            });

            if (result.status === 200) {
              console.log('Résultats de recherche ajoutés avec succès à la base de données');
              setLatestTrack({
                artist: artist,
                trackName: trackName,
                playcount: playcount,
                listeners: listeners,
                url: url,
                genre: genre,
              });
              onAddSuccess();
            } else if (result.status === 409) {
              console.error('Une musique avec le même titre existe déjà dans la base de données');
              // Gérer l'affichage d'un message d'erreur à l'utilisateur ici si nécessaire
            } else {
              console.error('Erreur lors de l\'enregistrement des résultats de recherche dans la base de données');
            }
          } catch (error) {
            console.error('Erreur lors de l\'enregistrement des résultats de recherche dans la base de données:', error);
          }
        } else {
          setLatestTrack(null);
        }
      } else {
        setLatestTrack(null);
      }
    } catch (error) {
      console.error('Erreur lors de la recherche de la dernière musique de l\'artiste :', error);
      setLatestTrack(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.addSongForm}>
        <h1>Rechercher la dernière musique d'un artiste</h1>
        <input
          type="text"
          placeholder="Entrez le nom de l'artiste"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className={styles.artistInput} // Appliquer la classe CSS pour l'input
        />
        <button onClick={handleSearch} className={styles.addButton}>Rechercher</button>
      </div>
    </div>
  );
};

export default AddSong;
