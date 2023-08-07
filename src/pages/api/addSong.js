import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { artist, trackName, playcount, listeners, url, genre } = req.body; // Ajouter le genre ici

      // Charger les données actuelles depuis le fichier db.json
      const filePath = path.join(process.cwd(), 'db.json');
      const jsonData = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(jsonData);

      // Vérifier si un élément avec le même trackName existe déjà
      const existingItem = data.searchs.find(item => item.trackName === trackName);

      if (existingItem) {
        // Si un élément avec le même trackName existe déjà, renvoyer un message d'erreur
        res.status(409).json({ error: 'Une musique avec le même titre existe déjà dans la base de données' });
        return;
      }

      // Générer un nouvel identifiant unique pour l'élément
      const newId = Date.now().toString();

      // Ajouter le nouvel élément à la liste des résultats de recherche
      data.searchs.push({
        id: newId,
        artist: artist,
        trackName: trackName,
        playcount: playcount,
        listeners: listeners,
        url: url,
        genre: genre, // Ajouter le genre ici
      });

      // Enregistrer les données mises à jour dans db.json
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

      res.status(200).json({ message: 'Résultats de recherche ajoutés avec succès à la base de données' });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement des résultats de recherche dans la base de données:', error);
      res.status(500).json({ error: 'Erreur lors de l\'enregistrement des résultats de recherche' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
