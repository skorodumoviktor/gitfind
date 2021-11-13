import { gql } from '@apollo/client'

type ExchangeRate = {
  currency: string
  rate: string
}
export type ExchangeRatesData = {
  rates: ExchangeRate[]
}
export type ExchangeRatesVars = unknown
export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
