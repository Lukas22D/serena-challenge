import UserDB from "../infra/adapters/db/model/UserDB";
import User from "../application/domain/User";
import dataSource from "../infra/adapters/db/data-source";

// Conectando-se ao banco de dados antes de todos os testes
beforeAll(async () => {
  try {
    await dataSource.initialize();
    console.log('DataSource initialized');
  } catch (error) {
    console.error('Error during DataSource initialization:', error);
    throw error;
  }
});

// Fechando a conexão após os testes
afterAll(async () => {
  try {
    // Verificar se a conexão foi estabelecida antes de destruir
    if (dataSource.isInitialized) {
      await dataSource.destroy();
      console.log('DataSource destroyed');
    } else {
      console.log('DataSource was not initialized');
    }
  } catch (error) {
    console.error('Error during DataSource destruction:', error);
  }
});

it("should throw an error if the password is less than 8 characters", () => {
  expect(() => {
    new User("John Does", "blabla@gmail.com", "123456");
  }).toThrow("Password must be at least 8 characters long");
});

it("should throw an error if the name is less than 3 characters", () => {
  expect(() => {
    new User("Jo", "blabla@gmail.com", "12345678");
  }).toThrow("Name must be at least 3 characters long");  
});

it("should throw an error if the email is invalid", () => {
  expect(() => {
    new User("John Doe", "blabla", "12345678");
  }).toThrow("Invalid email");
});

it("should create a user and save it in the database", async () => {
  const user = new UserDB();
  user.name = "John Doe";
  user.email = "dfkd@gmail.com";
  user.password = "12345678";
  
  // Aguarde a operação de salvar
  await user.save();
  
  // Verifique se o usuário foi salvo corretamente
  expect(user).toHaveProperty("id");
});
