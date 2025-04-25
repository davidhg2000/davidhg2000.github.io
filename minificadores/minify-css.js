import fs from 'fs';

const input = './style.css';
const output = './style.min.css';

fs.readFile(input, 'utf8', (err, css) => {
    if (err) throw err;
    const minified = css
        .replace(/\/\*[\s\S]*?\*\//g, '') // comentarios
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .replace(/;}/g, '}');
    fs.writeFile(output, minified, err => {
        if (err) throw err;
        console.log(' CSS minificado.');
    });
});