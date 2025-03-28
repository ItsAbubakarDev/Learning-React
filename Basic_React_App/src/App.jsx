import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title.jsx'
import Product from './Product.jsx'
import Button from './Button.jsx'

function App() {
  return (
    <div>
      <Product title="Phone" price = {35000}></Product>
      <Product title="Laptop"></Product>
      <Product title="Tablet"></Product>
      <Button></Button>
    </div>
    
   );
}

export default App
