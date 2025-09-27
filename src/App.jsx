import { useState } from 'react'
import './App.css'
import Card from './components/card/Card'


const DATA = [
  {
    url_img: "https://www.pistepistachos.com/_img/productos-pistacho-cascara.jpg",
    title: "Pistacho",
    description: "Con la sal justa y necesaria. El snack perfecto para el picoteo con amigos.",
    price: "$1000 - $5000"
  },
  {
    url_img: "https://img.freepik.com/fotos-premium/close-up-nueces-cascara-mercado-agricultores-turquia_501761-1643.jpg",
    title: "Nueces",
    description: "Con la sal justa y necesaria. El snack perfecto para el picoteo con amigos.",
    price: "$1000 - $5000"
  }
]

function App() {

  const [products, setProducts] = useState(DATA)

  return (
    <>
      {
        products.map((elem) =>
          <Card key={elem.title} img={elem.url_img} title={elem.title} description={elem.description} price={elem.price} />)
      }
    </>
  )
}

export default App
