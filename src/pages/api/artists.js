import fs from 'fs/promises';
import path from 'path';

const dbFilePath = path.join(process.cwd(), 'db.json');

const getArtists = async (req, res) => {
  try {
    // Lire le contenu de la base de données depuis le fichier JSON
    const jsonData = await fs.readFile(dbFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Vérifier si data.searchs est un tableau avant de renvoyer les artistes
    if (Array.isArray(data.searchs)) {
      // Récupérer la liste des artistes en parcourant les éléments du tableau
      const artists = data.searchs.map(item => item.artist);
      return res.status(200).json(artists);
    } else {
      console.error('Data in db.json is not in the correct format.');
      return res.status(500).json({ error: 'Server error' });
    }
  } catch (error) {
    console.error('Error getting artists:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

