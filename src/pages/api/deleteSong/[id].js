import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    if (req.method !== 'DELETE') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { id } = req.query;

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

    // Suppression de l'artiste
    data.searchs.splice(artistIndex, 1);

    // Enregistrement des données mises à jour dans db.json
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    res.status(200).json({ message: 'Artiste supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'artiste:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'artiste' });
  }
}

