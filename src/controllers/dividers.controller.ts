import { Controller, Post } from '@overnightjs/core'
import { Response, Request } from 'express'
import { DividersService } from '../services/dividers.service'

@Controller('dividers')
export class DividersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private service: DividersService) {}
  @Post('')
  public async calculateDividers (req: Request, res: Response): Promise<void> {
    res.send(await this.service.calculateDividers(+req.body.entrada))
    console.log()
  }
}
