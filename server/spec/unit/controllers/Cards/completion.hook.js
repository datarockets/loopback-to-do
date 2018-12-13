import { before } from 'hooks'

before("Card Completion Collection > POST", (transaction) => {
  transaction.skip = true
})
