import { useEffect, useState } from 'react';

const LOAD_TIME = 15000;

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count < LOAD_TIME) {
        setCount(count + 50);
      }
    }, 50);
  }, [count]);
  return (
    <div className="App">
      {count < LOAD_TIME ? `Loading... ${count}` : 'App B'}
    </div>
  );
}

export default App;
