import './style.css';

const App = () => {
  return (
    <>
      <h1>Live Coding!</h1>
      <div className="card">
        <input readOnly className="display" placeholder="Zadaj číslo" />
        <br />
        <br />
        <div className="keyboard"></div>
      </div>
    </>
  );
};

export default App;
