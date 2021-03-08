import * as express from "express";
import { AccountsController } from "./controllers/accountsController";

class App {

    public app: express.Application;
    public userRoute: AccountsController = new AccountsController();
    
    constructor() {
        this.app = express();
        this.config();        
        this.userRoute.routes(this.app);
    }

    private config(): void{
        this.app.use(express.json());
    }

}

export default new App().app;