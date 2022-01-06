import { Application } from 'express';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { DivisoresController } from './controllers/divisores.controller';

// eslint-disable-next-line import/prefer-default-export
export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  public getApp(): Application {
    return this.app;
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const divisoresController = new DivisoresController();
    this.addControllers([divisoresController]);
  }
}
