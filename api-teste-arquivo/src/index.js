const express = require('express');
const fs = require('fs').promises;
const app = express();

const PORT = 3000;
global.fileName = './arquivo/leitura.txt';

app.listen(PORT, async () => {

    const replaceAll = (text, obj) => {
        return [...text].map(each => {
            for (const o in obj){
                (each == o) ? each = obj[o] : o;
            }
            return each;
        }).join('');
    };   

    try {
        const arquivo = await fs.readFile(global.fileName, 'utf8');
        const cript = {
            'a' : '%',
            'e' : '@',
            'o' : '&',
            'u': '=',
            'i': '+',
            'b': '¢',
            'c': '#',
            's': '-',
            'l': '*',
            'n': '('
        };
        const decript = {
            '%' : 'a',
            '@' : 'e',
            '&' : 'o',
            '=': 'u',
            '+': 'i',
            '#': 'c',
            '¢': 'b',
            '-': 's',
            '*': 'l',
            '(': 'n'
        };
        const newFile = replaceAll(arquivo, decript);
        await fs.writeFile('./arquivo/gravado.txt', newFile);
    } catch (err) {
        console.log(err);
    }
})