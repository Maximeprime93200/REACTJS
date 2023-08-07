import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Chemin du fichier db.json
    const filePath = path.join(process.cwd(), 'db.json');

    // Lecture du contenu du fichier db.json
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Récupération des résultats depuis la clé "searchs" de db.json
    const searchResults = data.searchs || [];

    // Renvoyer les résultats au format JSON
    res.status(200).json({ searchs: searchResults });
  } catch (error) {
    console.error('Erreur lors de la récupération des résultats de recherche depuis la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des résultats de recherche depuis la base de données' });
  }
}
