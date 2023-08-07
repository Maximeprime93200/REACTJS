import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/editArtist.module.css';

const EditArtist = ({ artistInfo }) => {
  const router = useRouter();
  const { artist } = router.query;

  const [note, setNote] = useState('');

  useEffect(() => {
    if (artistInfo) {
      setNote(artistInfo.note || '');
    }
  }, [artistInfo]);

  const handleEdit = async () => {
    const updatedArtistInfo = {
      note: note,
    };

    try {
      const response = await axios.put(`/api/artists/${artist}`, updatedArtistInfo);
      console.log('Edit response:', response.data);
      router.push(`/${artist}`);
    } catch (error) {
      console.error('Error editing artist:', error);
    }
  };

  return (
    


    <div className={styles.container}>
      <h1 className={styles.title}>Modifier les informations de l'artiste</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="note" className={styles.label}>
            Note :
          </label>
          <input
            type="number"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={styles.input}
            min="0"
            max="10"
          />
        </div>
        <div className={styles.formGroup}>
          <button type="button" onClick={handleEdit} className={styles.saveButton}>
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  );
};



export default EditArtist;
