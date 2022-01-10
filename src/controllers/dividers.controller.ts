import { Controller, Post } from '@overnightjs/core'
import { Response, Request } from 'express'
import { DividersService } from '../services/dividers.service'
import logger from '../logger'

@Controller('dividers')
export class DividersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private service: DividersService) {}
  @Post('')
  public async calculateDividers (req: Request, res: Response): Promise<void> {
    try {
      logger.info(`input received: ${JSON.stringify(req.body)}`)
      res.send(await this.service.calculateDividers(+req.body.entrada)).status(200)
    } catch (error) {
      logger.error(`Something went wrong: ${error}`)
      res.status(500).send({ error: 'Something went wrong' })
    }
  }
}
