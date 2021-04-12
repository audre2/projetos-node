import {Request, Response} from "express";
import fetch from "node-fetch";

export class AccountsService {

    public getTeste(req: Request) {
        const text = [{ "firstName":"John" , "lastName":"Doe" },
        { "firstName":"Anna" , "lastName":"Smith" },
        { "firstName":"Peter" , "lastName":"Jones" }];
        return text;
    } 

    public async getTeste2(req: Request) {

        const url = 'https://ab0ca87a-b354-449e-9eb0-58286745dd60.mock.pstmn.io/accounts'

        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            throw new Error('Erro de conexão');
        }

        
    } 
}