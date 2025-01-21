import User from "../domain/User";
import { PersistenceDB } from "../../infra/gateways/PersistenceUser";


export default class CreateUser {

    persist: PersistenceDB;

    constructor(persist: PersistenceDB) {
        this.persist = persist;
    }

   async execute(name: string, email: string, password: string): Promise<{id_publico: string, name: string, email: string}> {
        const user = new User(name, email, password);
        const UserDB = await this.persist.saveUser(user.getName(), user.getEmail(), user.getPassword()); 
         
        return {
            id_publico: UserDB.id_publico || '',
            name: UserDB.name || '',
            email: UserDB.email || ''
        };
    }

};  


