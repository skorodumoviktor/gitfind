import { useQuery } from '@apollo/client'
import {
  ExchangeRatesData,
  ExchangeRatesVars,
  EXCHANGE_RATES,
} from './graphql/queries'

export function App() {
  const { loading, error, data } = useQuery<
    ExchangeRatesData,
    ExchangeRatesVars
  >(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>Empty data</p>

  return (
    <>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </>
  )
}
