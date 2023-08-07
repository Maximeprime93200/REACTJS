import { useState } from 'react';
import Link from 'next/link';
import AddSong from './addSong';
import axios from 'axios';
import styles from '../styles/musicList.module.css'

const Home = ({ searchResults }) => {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredData = searchResults.filter(
    item =>
      item.genre.toLowerCase().includes(filterText.toLowerCase()) &&
      (!filterCategory || item.categorie === filterCategory)
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleAddSuccess = () => {
    window.location.reload();
  };

  const handleDelete = async (id) => {
    try {
      // Faites un appel API pour supprimer l'élément de la base de données en utilisant l'ID
      const deleteUrl = `/api/deleteSong/${id}`;
      const response = await axios.delete(deleteUrl);

      if (response.status === 200) {
        console.log('Élément supprimé avec succès de la base de données');
        // Rafraîchir la page après la suppression réussie
        window.location.reload();
      } else {
        console.error('Erreur lors de la suppression de l\'élément de la base de données');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'élément de la base de données :', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.filterForm}>
        <input
          type="text"
          placeholder="Filtrer par style de musique"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className={styles.filterInput}
        />
        <button type="submit" className={styles.filterButton}>Rechercher</button>
      </form>
      <AddSong onAddSuccess={handleAddSuccess} />
      <div className={styles.container}>
      <ul className={styles.musicList}>
        {filteredData.map(item => (
          <li key={item.id} className={styles.musicItem}>
            <div className={styles.musicItemWrapper}>
              <Link href={`/${encodeURIComponent(item.artist)}`} className={styles.artistLink}>
                <p className={styles.artistName}>{item.artist}</p>
              </Link>
              <p className={styles.trackName}>Titre : {item.trackName}</p>
              <p className={styles.playcount}>Nombre d'écoutes : {item.playcount}</p>
              <p className={styles.listeners}>Nombre d'auditeurs uniques : {item.listeners}</p>
              <p className={styles.genre}>Genre de musique : {item.genre}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.artistLink}>
                Lien vers la page LastFM
              </a>
              <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export async function getServerSideProps() {
  try {
    const filePath = require('path').join(process.cwd(), 'db.json');
    const jsonData = await require('fs').promises.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    return {
      props: {
        searchResults: data.searchs || [],
      },
    };
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des résultats de recherche depuis la base de données:',
      error
    );
    return {
      props: {
        searchResults: [],
      },
    };
  }
}

export default Home;
