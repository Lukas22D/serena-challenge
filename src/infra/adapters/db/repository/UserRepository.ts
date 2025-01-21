import { PersistenceUser } from "../../../gateways/PersistenceUser";
import dataSource from "../data-source";
import UserDB from "../model/UserDB";

export class UserRepository implements PersistenceUser{

    repository = dataSource.getRepository(UserDB);

    async create(user: UserDB): Promise<UserDB | null> {
        return await this.repository.save(user);
    }
    async update(user: UserDB): Promise<UserDB | null> {
        return await this.repository.save(user);
    }
    async delete(id: string): Promise<void> {
        this.repository.delete(id);
    }
    async getById(id: number): Promise<UserDB | null> {
        return await this.repository.findOneBy({
            id: id
        });
    }
    async getByEmail(email: string): Promise<UserDB | null> {
        return await this.repository.findOneBy({
            email: email
        });
    }
}
