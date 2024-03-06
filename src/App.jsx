import React from 'react';
import { useState } from 'react';

const user = {
  name: 'ume boshi',
  message: 'hukuzatukaiki',
}


export default function App() {
  return (
    <>
       
      <h1 className="app-title">Hello client render</h1>
      <p>main main main main main</p>
      <Counter />
      <Profile />
      <AboutPage />
    </>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked me {count} times
    </button>
  );
}

function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button onClick={handleClick}>open</button>
      {
        isOpen &&
        <h1>About</h1>
      }
    </>
  )
}

function Profile() {
  let content;
  if (isLoggedIn) {
    content = <UserPage />
  } else {
    content = <LoginPage />
  }
  return (
    <div>
      <h1 style={{ color: 'red'}}>{user.name}</h1>
      {content}
    </div>
  )
}

let isLoggedIn = true;

function UserPage() {
  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.message}</li>
    </ul>
  )
}
