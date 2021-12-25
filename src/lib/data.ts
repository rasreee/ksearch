export const topics = [
  'associated token account',
  'program derived address',
  'decentralized identity / did',
  'anchor',
  'spl token',
  'big table',
  'wallet',
  'nft',
  'solana name service',
  'staking',
  'lending / borrowing',
  'program deployment',
  'dao',
  'exchange',
  'sdk',
  'game',
  'token program',
  'system program',
  'rent',
  'transaction',
  'token swap program',
  'token program',
  'amm',
  'proof of history',
  'phantom',
  'program development',
  'full-stack solana development',
  'dapp',
  'solana runtime',
  'cross-program invocations',
  'program signed accounts'
]

export type Data = { id: string; type: string; title: string }

import { v4 as uuidV4 } from 'uuid'

export const allData: Data[] = topics.map((topic) => ({
  id: uuidV4(),
  type: topic,
  title: topic
}))

export const findDataByQuery = async (query: string): Promise<Data[]> => {
  let hits = [] as Data[]

  if (query.length) {
    const a = query.toLowerCase()

    hits = allData.filter((item) => {
      const b = item.title.toLowerCase().slice(0, query.length)

      return a === b
    })
  }

  return hits
}
