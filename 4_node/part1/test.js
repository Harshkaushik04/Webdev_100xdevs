const fs = require('fs/promises');

async function readJson() {
  try {
    const data = await fs.readFile('file.json', 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Error:', err);
  }
}

readJson();
