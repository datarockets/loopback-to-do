import { beforeAll, afterAll } from 'hooks'
import db from '../../../src/models'

beforeAll(function (transactions, done) {
  db.cleanUp().then(() => done())
})

afterAll(function (transactions, done) {
  db.cleanUp().then(() => done())
})
