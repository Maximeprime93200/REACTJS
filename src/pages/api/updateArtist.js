// pages/api/updateArtist.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    if (req.method !== 'PUT') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { id } = req.query;
    const { artist, trackName, /* Ajoutez les autres champs ici */ } = req.body;

    // Chemin du fichier db.json
    const filePath = path.join(process.cwd(), 'db.json');

    // Lecture du contenu du fichier db.json
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Recherche de l'artiste par ID dans les données
    const artistIndex = data.searchs.findIndex((item) => item.id === id);
    if (artistIndex === -1) {
      return res.status(404).json({ error: 'Artiste non trouvé' });
    }

    // Mise à jour des champs de l'artiste
    data.searchs[artistIndex] = {
      ...data.searchs[artistIndex],
      artist,
      trackName,
      /* Ajoutez les autres champs mis à jour ici */
    };

    // Enregistrement des données mises à jour dans db.json
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    res.status(200).json({ message: 'Artiste mis à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'artiste:', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'artiste' });
  }
}
