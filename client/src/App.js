import './App.css';
//imports App.css
import React from 'react';
//imports React
import TabManager from './Components/TabManager.js';
//imports TabMananger from the Components folder


function App() {
  return (
    <div>     
      <header>
        <h1 id="title">Sylvania Northview HS Tutoring</h1>
        <TabManager/>
     
      </header>
      <body>
      </body>
    </div>
  )
}
export default App;