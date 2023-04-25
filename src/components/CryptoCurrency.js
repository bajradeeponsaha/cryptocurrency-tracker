import React from 'react'
import '../styles/CryptoCurrency.css'

const CryptoCurrency = ({name, image, symbol, price, priceChange, volume, marketcap}) => {
  return (
    <div className='containerCrypto'>
        <div className="rowCrypto">
            <div className="crypto">
                <img 
                    src={image}
                    alt={`${name} Symbol`}
                />
                <h1>{name}</h1>
                <p className="cryptoSymbol">{symbol}</p>
            </div>
            <div className="dataCrypto">
                <div className="cryptoPrice">
                    <p>₹{price.toLocaleString()}</p>
                </div>
                
                {/* <div className='gap'></div> */}
                <div className="cryptoVolume">
                    <p>₹{volume.toLocaleString()}</p>
                </div>
                
                {
                    priceChange < 0 ? (
                        <p className="red percentCrypto">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="green percentCrypto">{priceChange.toFixed(2)}%</p>
                    )
                }
                <p className="marketcapCrypto">
                    Mkt Cap: ₹{marketcap.toLocaleString()}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default CryptoCurrency
