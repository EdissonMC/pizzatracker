// import logo from './logo.svg';
import "./App.css";

import React, {
  // useEffect,

  useState,
} from "react";

function App() {
  const [pizza, setPizza] = useState([
    
  ]);

  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Aceitunas",
      price: 3000,
    },
    {
      id: 2,
      name: "Aguacate",
      price: 3000,
    },
    {
      id: 3,
      name: "Cebolla",
      price: 3000,
    },
    {
      id: 4,
      name: "Cerdo",
      price: 3000,
    },
    {
      id: 5,
      name: "Champiñones",
      price: 3000,
    },
    {
      id: 6,
      name: "Espinaca",
      price: 3000,
    },
    {
      id: 7,
      name: "Jamón",
      price: 3000,
    },
    {
      id: 8,
      name: "Maiz",
      price: 3000,
    },
    {
      id: 9,
      name: "Pepperoni",
      price: 4500,
    },
    {
      id: 10,
      name: "Pimientos",
      price: 3000,
    },
    {
      id: 11,
      name: "Pollo",
      price: 5000,
    },
    {
      id: 12,
      name: "Piña",
      price: 3000,
    },
    {
      id: 13,
      name: "Res",
      price: 3000,
    },
    {
      id: 14,
      name: "Tomate",
      price: 3000,
    },
    {
      id: 15,
      name: "Ternera",
      price: 3000,
    },
  ]);

  const[total, setTotal] =useState(10000)




  function handleIngredient(e) {
    console.log("ingredientes" + e.target.id);

    let addIngredient = ingredients.find(ingredient => ingredient.id == e.target.id); 

    console.log(addIngredient)

    setTotal(total + addIngredient.price)

    setPizza((currentPizza) => [
      ...currentPizza,
      addIngredient
    ]);

    
  }

  return (
    <div className="App">
      <h1>Pizza Mario Bross</h1>

      <div className="scrollmenu">
        {ingredients.map(function (data, i) {
          return (
            <a
              href="#contact"
              id={data.id}
              onClick={handleIngredient}
              key={data.name}
            >
              {" "}
              {data.name} +
            </a>
          );
        })}
      </div>

      <div className="detail-section">
        <h1>Base $10000</h1>
        { 
         
        pizza.map(function (data, i) {

                    
          return (
            <div>
                <h1  key={data.name + Math.floor(Math.random() * 1000)}>{data.name} : ${data.price}</h1>
                
                
          </div>
        )
          ;
        })}
      </div>

      <div className="price-section">
                  <h1>Total   $ {total}</h1>
        </div>
      <br />
      <br />
      <br />
      <br />
      

      <div className="next-section"></div>
    </div>
  );
}

export default App;
