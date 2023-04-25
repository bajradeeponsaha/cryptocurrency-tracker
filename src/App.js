import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CryptoCurrency from './components/CryptoCurrency.js'
import './App.css'

const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

function App() {

  const [cryptos, setCrypto] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(api).then(res => {
      setCrypto(res.data)
    }).catch(err => console.log(err))
  }, [])

  const handleChange = e =>{
    setSearch(e.target.value)
  }

  //filtering data of crypto and displaying it
  const filteredCrypto = cryptos.filter(crypto => 
    crypto.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="cryptocurrency">
      <div className="searchCrypto">
        <h1 className="textCrypto">Search Cryptocurrency</h1>
          <form>
            <input type="text" className="inputCrypto" placeholder='Search....' onChange={handleChange}/>
          </form>
      </div>
      {filteredCrypto.map(crypto => {
        return (
          <CryptoCurrency 
            key={crypto.id} 
            name={crypto.name} 
            image={crypto.image}
            symbol={crypto.symbol} 
            volume={crypto.total_volume}
            price={crypto.current_price}
            priceChange={crypto.price_change_percentage_24h}
            marketcap={crypto.market_cap}
            />
        )
      })

      }
      
    </div>
  );
}

export default App;
