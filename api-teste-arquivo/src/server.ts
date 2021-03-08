import * as express from "express";
import * as fs from "fs";

const app = express();
const PORT = 3000;

const lerArquivo = async() => {
    const Obj = { 
        a: "z", 
        e: "3", 
        o: "x",
        b: "y",
        s: "6",
        l: "7",
        t: "h",
        i: "1",
        z: "a",
        x: "o",
        y: "b",
        1: "i",
        h: "t"
    };
    const Obj2 = { 
        z: "a", 
        3: "e", 
        x: "o",
        y: "b",
        6: "s",
        7: "l",
        h: "t",
        1: "i",
        a: "z",
        o: "x",
        b: "y",
        i: "1",
        t: "h"
    }; 
    try {
        const arquivo = await fs.readFileSync( __dirname + '/file.txt', 'utf8');
        var RE = new RegExp(Object.keys(Obj).join("|"), "gi"); 

        // //criptografar  
        // const newFile = arquivo.toLowerCase().replace(RE, (x) => {
        //     return Obj[x]; 
        // });
        //descriptografar
        const newFile = arquivo.toLowerCase().replace(RE, (x) => {
            return Obj2[x]; 
        });
        console.log(newFile);
    } catch (err) {
        console.log(`Falha em ler algum arquivo ${err.message}`);
    }
}

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
    lerArquivo();
})