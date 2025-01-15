import express, { Application } from 'express';
import userController from './controllers/userController';
class App {
  public app: Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    // Adicione suas rotas aqui, por exemplo:
    this.app.use("/users", userController.router);

  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

export default new App().listen();
