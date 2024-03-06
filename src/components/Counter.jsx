import { useState } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="counter"
    >
      Clicked me {count} times
    </button>
  );
}

export { Counter }
