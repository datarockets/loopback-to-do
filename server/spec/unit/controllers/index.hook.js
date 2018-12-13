import { beforeAll, afterAll } from 'hooks'
import db from '../../../src/models'

beforeAll((transactions, done) => {
  db.cleanUp().then(() => done())
})

afterAll((transactions, done) => {
  db.cleanUp().then(() => done())
})
