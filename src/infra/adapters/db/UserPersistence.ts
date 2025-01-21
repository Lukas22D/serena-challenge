import UserDB from "./model/UserDB";
import { PersistenceDB } from "../../gateways/PersistenceDB";
import dataSource from "./data-source";

export default new class UserPersistence implements PersistenceDB {

    userRepository: any;

    constructor() {
        this.userRepository = dataSource.getRepository(UserDB);
    }

    static async initialize() {
        try {
            await dataSource.initialize();
            console.log("Database connection established!");
        } catch (error) {
            console.error("Error during DataSource initialization", error);
            throw error; 
        }
    }

    static async destroy() {
        try {
            await dataSource.destroy();  // Fecha a conexão com o banco
            console.log("Database connection closed!");
        } catch (error) {
            console.error("Error during DataSource destruction", error);
        }
    }

    async saveUser(name: string, email: string, password: string): Promise<UserDB> {
        const user = new UserDB();
        user.name = name;
        user.email = email;
        user.password = password;
        return await this.userRepository.save(user); 
    }

    async getUser(email: string): Promise<UserDB | null> {
        return await UserDB.findUserByEmail(email);
    }
    

    async updateUser(email: string, name: string, password: string): Promise<void> {
        const user = await this.getUser(email);
        if (user) {
            user.name = name;
            user.password = password;
            await this.userRepository.save(user);
        }
    }

    async deleteUser(email: string): Promise<void> {
        const user = await this.getUser(email);
        if (user) {
            await this.userRepository.remove(user);
        }
    }
}
