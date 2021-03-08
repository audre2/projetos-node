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

        const url = 'https://00d5213a-d6cc-4d6b-84c1-3d300814d5ab.mock.pstmn.io/accounts'

        const res = await fetch(url);
        const data = await res.json();

        return data;
    } 
}