import fs from 'fs';

const input = './index.html';
const output = './index.min.html';

fs.readFile(input, 'utf8', (err, html) => {
    if (err) throw err;
    const minified = html
        .replace(/<!--[\s\S]*?-->/g, '') // Quita comentarios
        .replace(/\n/g, '')              // Quita saltos de línea
        .replace(/\s{2,}/g, ' ')         // Espacios múltiples
        .replace(/>\s+</g, '><');        // Espacios entre etiquetas
    fs.writeFile(output, minified, err => {
        if (err) throw err;
        console.log('✅ HTML minificado.');
    });
});