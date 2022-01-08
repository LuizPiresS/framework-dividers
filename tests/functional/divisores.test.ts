import supertest from 'supertest'
import { SetupServer } from '../../src/server'
const server = new SetupServer()
server.init()
const app = server.getApp()

describe('Divisores functional tests', () => {
  beforeAll(() => {

  })
  it('é esperado que dado um determinado número seja retornado seus divisores e destes quais são números primos ', async () => {
    const { body, status } = await supertest(app).post('/dividers')
      .send({ entrada: 45 })
      .set('Accept', 'application/json')

    expect(status).toBe(200)
    expect(body).toEqual({
      entrada: 45,
      divisores: [1, 3, 5, 9, 15, 45],
      divisoresPrimos: [3, 5]
    })
  })
})
