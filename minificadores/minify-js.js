import fs from 'fs';

const input = '../script.js';
const output = '../script/script.min.js';

fs.readFile(input, 'utf8', (err, js) => {
    if (err) throw err;
    const minified = js
        .replace(/\/\/[^\n]*/g, '')         // Comentarios de línea
        .replace(/\/\*[\s\S]*?\*\//g, '')   // Comentarios multilinea
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}():;,=+\-*/<>])\s*/g, '$1');
    fs.writeFile(output, minified, err => {
        if (err) throw err;
        console.log(' JS minificado.');
    });
});