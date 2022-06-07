import React from 'react';
import './App.css';

function App() {
  const [state, setState] = React.useState('idle')
  const [data, setData] = React.useState()

  React.useEffect(() => {
    setState('loading')
    window.fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum', {}).then(res => {
      if (res.ok) {
        res.json().then(d => setData(d && d.length ? d[0] : undefined))
        setState('idle')
      } else {
        setState('error')
      }
    }).catch(e => {
      console.log(e)
      setState('error')
    })
  }, [])

  return (
    <div className="App">
      {state === 'loading' ? (
        <p>fetching data...</p>
      ) : state === 'error' ? (
        <p>something went wrong :(</p>
      ) : data ? (
        <div className="infos">
          <img alt="symbol" src={data.image} className="logo" />
          <p className="title">{data.name}</p>
          <p className="price">current price:<br /><span>${data.current_price}</span></p>
          <p className="date">last update: {new Date(data.last_updated).toLocaleString()}</p>
          <p className="req">Obtained from CoinGecko API v3</p>
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default App;
