import {Request, Response} from "express";
import { AccountsService } from "../services/accountsService";

export class AccountsController {      

    private accountsService: AccountsService = new AccountsService(); 
    
    public routes(app): void {   
        
        app.route('/accounts')
        //Buscar todas as accounts
        .get(async (req: Request, res: Response) => {
            console.log("GET accounts"); 
            try {
                const accounts = await this.accountsService.getTeste2(req);
    
                if (Object.keys(accounts).length === 0) {
                  res.status(404).send({ message: 'Não foi encontrado nenhum usuário'});
                } else {
                  res.send(accounts);
                }
            } catch (err) {
                res.status(500).send({ message: err.message });
            }
        })
        
    }
}

