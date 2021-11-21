// import logo from './logo.svg';
import "./App.css";

import React, {
  // useEffect,

  useState,
} from "react";

import {orderedPizzas} from "./pizzasDB"


function Home() {
  const [pizza, setPizza] = useState([]);

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

  const [total, setTotal] = useState(10000);



  function handleAddIngredient(e) {
    // Encontrando la informacion de ingrediente a añadir
    let addIngredient = {
      ...ingredients.find((ingredient) => ingredient.id == e.target.id),
    };

    // Generando un id para la interfaz
    addIngredient.id_ui =
      Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) * 100;

    // Actualizando el precio de la pizz
    setTotal(total + addIngredient.price);

    // Actualizando el estado de la pizza con el nuevo ingrediente
    setPizza((currentPizza) => [...currentPizza, addIngredient]);
  }




  function handleRemoveIngredient(e) {
    // Recuperando el valor del ingrediente a remover
    let removeIngredient = {
      ...pizza.find((ingredient) => ingredient.id_ui == e.target.id),
    };

    // Actualizando el precio
    setTotal(total - removeIngredient.price);

    // Actualizando el estado de la pizza
    setPizza((currentPizza) => [
      ...currentPizza.filter(function (item) {
        return item.id_ui != e.target.id;
      }),
    ]);
  }

  function handleSendOrder(){
    console.log("sending order")

    orderedPizzas.push(pizza)
    console.log(pizza)

    
    // console.log(orderedPizzas)
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
              onClick={handleAddIngredient}
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
        {pizza.map(function (data, i) {
          return (
            <h1 id={data.id_ui} key={data.name + data.id_ui}>
              {data.name} : ${data.price}
              <button id={data.id_ui} onClick={handleRemoveIngredient}>
                X
              </button>{" "}
            </h1>
          );
        })}
      </div>

      <div className="price-section">
        <h1>Total $ {total}  <button onClick={handleSendOrder}>Pagar</button></h1>
       
      </div>
      

      <div className="next-section"></div>
    </div>
  );
}

export default Home;
