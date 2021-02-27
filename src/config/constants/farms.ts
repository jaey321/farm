import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KRABBYPATTY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x82494477C78cbe579d04573fF56250DD2B8B9132',
    },
    tokenSymbol: 'KRABBYPATTY',
    tokenAddresses: {
      97: '',
      56: '0x82494477C78cbe579d04573fF56250DD2B8B9132',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'KRABBYPATTY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x82494477C78cbe579d04573fF56250DD2B8B9132',
    },
    tokenSymbol: 'KRABBYPATTY',
    tokenAddresses: {
      97: '',
      56: '0x82494477C78cbe579d04573fF56250DD2B8B9132',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms
