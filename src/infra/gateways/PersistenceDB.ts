import UserDB from "../adapters/db/model/UserDB";


export interface PersistenceDB {
    
    saveUser(name: string, email: string, password: string): Promise<UserDB>;

    getUser(email: string): Promise<UserDB | null>;

    updateUser(email: string, name: string, password: string): Promise<void>;

    deleteUser(email: string): Promise<void>;

}
