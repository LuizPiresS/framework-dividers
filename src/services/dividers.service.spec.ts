import { DividersService } from './dividers.service'
describe('DividersService', () => {
  it('should returns the divisors of a given number', async () => {
    const dividerService = new DividersService()
    const result = await dividerService.calculateDividers(45)
    expect(result.entrada).toBe(45)
    expect(result.divisores).toEqual([1, 3, 5, 9, 15, 45])
    expect(result.divisoresPrimos).toEqual([3, 5])
  })
})
