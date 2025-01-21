import UserDB from "../adapters/db/model/UserDB";


export interface PersistenceUser {
    //CRUD
    create(user: UserDB): Promise<UserDB | null> ;

    update(user: UserDB): Promise<UserDB | null> ;

    delete(id: string): Promise<void>;

    getById(id: number): Promise<UserDB | null> ;

    getByEmail(email: string): Promise<UserDB | null> ;

}