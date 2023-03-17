import axios from "axios";
import {} from "miragejs";
import { useState, useEffect } from "react";


function App() {
const [products,setProducts] = useState([]);

useEffect(() => {
  fetch("api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      console.log(products);
  }, [])
 


  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export default App;
