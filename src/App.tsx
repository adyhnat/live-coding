import bartLogo from '/logo/logo-symbol_RGB.svg';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    setSum(count + Number(inputValue || 0));
  }, [count]);

  return (
    <>
      <div>
        <img src={bartLogo} />
      </div>
      <h1>Live Coding!</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>+</button>
        <br />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Zadaj číslo"
          style={{ marginTop: '10px', padding: '5px' }}
        />
        <p>
          <b>Súčet:</b> {sum}
        </p>
      </div>
    </>
  );
}

export default App;
