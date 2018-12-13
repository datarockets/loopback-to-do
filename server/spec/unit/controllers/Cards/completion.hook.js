import { before } from 'hooks'

before("Card Completion Collection > POST", (transaction) => {
  transaction.skip = true
})

before("Card Completion Collection > DELETE", (transaction) => {
  transaction.skip = true
})
