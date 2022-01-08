import { ResponseDividersDTO } from '../controllers/dtos/response/response-dividers.dto'
import { DividerInterface } from '../interfaces/dividers.interface'
import logger from '../logger'
export class DividersService implements DividerInterface {
  public async calculateDividers (input: number): Promise<ResponseDividersDTO> {
    logger.info('Iniciando calculateDividers')
    const dividers: number[] = this.dividers(input)
    const primeDivider: number[] = this.primeDividers(dividers)
    logger.info('Finalizando calculateDividers')

    return {
      entrada: input,
      divisores: dividers,
      divisoresPrimos: primeDivider
    }
  }

  private dividers (input: number): number[] {
    logger.info('Calculando os divisores')
    const dividerResult = []
    for (let divider = 1; divider <= input; divider++) {
      if (input % divider === 0) {
        dividerResult.push(divider)
      }
    }
    return dividerResult
  }

  private primeDividers (entradas: number[] = [45]): number[] {
    logger.info('validando quais dentre os divisores são números primos')
    const primeNumbers: number[] = []
    let divisor = 2
    entradas.forEach((input) => {
      if (input !== 1) {
        while (input % divisor !== 0) { divisor++ }
        if (input === divisor) {
          primeNumbers.push(input)
        }
      }
      divisor = 2
    })

    return primeNumbers
  }
}
