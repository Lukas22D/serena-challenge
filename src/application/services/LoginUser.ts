import { PersistenceDB } from "../../infra/gateways/PersistenceUser";
import { UserPersistence
    
 } from "../../infra/adapters/db/UserPersistence";
export default new class LoginUser {

    persist: PersistenceDB;

    constructor() {
        this.persist = new UserPersistence();
    }

   async  execute(email: string, password: string): Promise<{acess_token: string}> {
   }

};