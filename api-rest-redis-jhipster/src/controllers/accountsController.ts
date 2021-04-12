import { Request, Response } from "express";
import { AccountsService } from "../services/accountsService";
import { RedisService } from "../services/redisService";

export class AccountsController {

    private accountsService: AccountsService = new AccountsService();
    private redisService: RedisService = new RedisService();

    public routes(app): void {

        app.route('/test')
            //Buscar todas as accounts
            .post(async (req: Request, res: Response) => {
                console.log("POST test");
                try {
                    this.redisService.setKeyRedis(req.headers["x-auth-token"])
                    res.status(200).send({ message: 'Ok' });
                } catch (err) {
                    res.status(500).send({ message: err.message });
                }
            });

        app.route('/accounts')
            //Buscar todas as accounts
            .get(async (req: Request, res: Response) => {
                console.log("GET accounts");
                try {
                    const token = await this.redisService.validateToken(req.headers["x-auth-token"])
                    console.log("token: ", token);
                    if (token == -1) {
                        res.status(401).send({ message: 'Token não é valido' });
                    } else {
                        const accounts = await this.accountsService.getTeste2(req);

                        if (Object.keys(accounts).length === 0) {
                            res.status(404).send({ message: 'Não foi encontrado nenhum usuário' });
                        } else {
                            res.send(accounts);
                        }
                    }
                } catch (err) {
                    res.status(500).send({ message: err.message });
                }
            });

    }
}