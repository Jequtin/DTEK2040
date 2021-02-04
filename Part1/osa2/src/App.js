import React, { useState } from 'react';
import './App.css';

function App() {

  const [hyvaCount, setHyvaCount] = useState(0);
  const [neutraaliCount, setNeutraaliCount] = useState(0);
  const [huonoCount, setHuonoCount] = useState(0);

  const Statistiikka = () => {
    if (hyvaCount === 0 && neutraaliCount === 0 && huonoCount === 0) {
      return (
        <p>ei vielä palautetta</p>
      )
    }
    else {
      return (
        <div>
          <table class="center">
            <tbody>
              <tr>
                <th>hyvä</th>
                <th>{hyvaCount}</th>
              </tr>
              <tr>
                <th>neutraali</th>
                <th>{neutraaliCount}</th>
              </tr>
              <tr>
                <th>huono</th>
                <th>{huonoCount}</th>
              </tr>
              <tr>
                <th>keskiarvo</th>
                <th>{(hyvaCount - huonoCount) / (hyvaCount + neutraaliCount + huonoCount)}</th>
              </tr>
              <tr>
                <th>positiivisia</th>
                <th>{hyvaCount / (hyvaCount + neutraaliCount + huonoCount) * 100}%</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <h1 className="App-header">
        Anna palautetta
      </h1>
      <div>
        <button onClick={() => setHyvaCount(hyvaCount + 1)}>hyvä</button>
        <button onClick={() => setNeutraaliCount(neutraaliCount + 1)}>neutraali</button>
        <button onClick={() => setHuonoCount(huonoCount + 1)}>huono</button>
      </div>
      <h1 className="App-header">
        Statistiikka
      </h1>
      <Statistiikka />
    </div>
  );
}

export default App;