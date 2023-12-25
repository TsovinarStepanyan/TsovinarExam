import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './App.scss'

export default function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    axios('https://fakestoreapi.com/products?_limit=20')
    .then(res => setProducts(res.data))
    
    
  }, [])
  const addBasket = (elm) =>{
    setBasket([...basket, elm.title])
  }

  const deleteBasket = (elm) =>{
    const index= basket.indexOf(elm)
    setBasket(basket.toSpliced(index, 1))
  }

  return (
    <div className='div'>
      <div className='Products'>
        <h1>Products</h1>
        {
          
          products.map(elm => 
          <li key={elm.id}>{elm.title}
            <button onClick={()=> addBasket(elm)}>Add to the basket</button>
          </li>)
        }
      </div>
      <div className='Basket'>
       <h1>Basket</h1>
        {
          
          basket.map(elm => 
          <li key={elm}>
            {elm}
            <button onClick={() => deleteBasket(elm)}>Delete</button>
          </li>)
        }
      </div>
    </div>
  )
}
