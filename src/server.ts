import { Application } from 'express'
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import { DividersController } from './controllers/dividers.controller'
import { DividersService } from './services/dividers.service'
import * as http from 'http'
import logger from './logger'
export class SetupServer extends Server {
  private server?: http.Server;
  constructor (private port = 3000) {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()
  }

  public getApp (): Application {
    return this.app
  }

  private setupExpress (): void {
    this.app.use(bodyParser.json())
    this.setupControllers()
  }

  private setupControllers (): void {
    const divisoresController = new DividersController(new DividersService())
    this.addControllers([divisoresController])
  }

  public start (): void {
    this.server = this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port)
    })
  }

  public async close (): Promise<void> {
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close((err) => {
          if (err) {
            return reject(err)
          }
          resolve(true)
        })
      })
    }
  }
}
