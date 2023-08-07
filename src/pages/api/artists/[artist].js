import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { artist } = req.query;
      const { note } = req.body;

      // Charger les données actuelles depuis le fichier db.json
      const filePath = path.join(process.cwd(), 'db.json');
      const jsonData = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(jsonData);

      // Trouver l'artiste correspondant dans les données de la base de données
      const artistIndex = data.searchs.findIndex((item) => item.artist === artist);

      if (artistIndex !== -1) {
        // Mettre à jour la note de l'artiste
        data.searchs[artistIndex].note = note;

        // Enregistrer les données mises à jour dans db.json
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

        res.status(200).json({ message: 'Note de l\'artiste mise à jour avec succès' });
      } else {
        res.status(404).json({ error: 'Artiste non trouvé dans la base de données' });
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la note de l\'artiste :', error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour de la note de l\'artiste' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
