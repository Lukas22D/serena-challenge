import CreateUser from "../application/services/CreateUser";
import UserPersistence from "../infra/adapters/db/UserPersistence";
import dataSource from "../infra/adapters/db/data-source";

const createUser = new CreateUser(UserPersistence);

beforeAll(async () => {
    // Inicializando a DataSource antes dos testes
    await dataSource.initialize();
  });
  
  afterAll(async () => {
    // Fechar a conexão depois dos testes
    await dataSource.destroy();
  });
  

it("Create User", async () => {
    const userData = {
        name: "Cleiton",
        email: "cleiton@gmail.com",
        password: "12345678"
    }

    const user = await createUser.execute(userData.name, userData.email, userData.password);
});