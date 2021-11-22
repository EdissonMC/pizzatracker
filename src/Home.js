// import logo from './logo.svg';
import "./Home.css";

import React, {
  // useEffect,

  useState,
} from "react";
import Modal from "react-modal";

// import {orderedPizzas} from "./pizzasDB"

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [labelModal, setLabelModal] = useState("PROCESANDO ORDEN");
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  function handleSendOrder() {
    console.log("sending order");

    // ingredients.map((item)=>{
    //   console.log(typeof(item.name))
    // })

    // orderedPizzas.push(pizza)
    console.log(pizza);
    setIsOpen(true);

    var finalPizza = {
      base: {
        tipo: "tradicional",
      },
      ingredients: pizza,
    };

    var delayInMilliseconds = 2000; //1 second

    fetch("http://localhost:5000/pizzas", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalPizza),
    })
      .then((res) => res.json())
      .then(function (res) {
        // alert("ORDEN ENVIADA");
        console.log(res);
        // Reset Pizza order
        setPizza([]);

        setTimeout(function () {
          setIsOpen(false);
        }, delayInMilliseconds);
      });

    // console.log(orderedPizzas)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#modal_root");

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

      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="loader"></div>
        <h1>{labelModal}</h1>
        {/* <button onClick={closeModal}>Cerrar</button> */}
      </Modal>

      <div className="price-section">
        <h1>
          Total $ {total} <button onClick={handleSendOrder}>Pagar</button>
        </h1>
      </div>

      <div className="next-section"></div>
    </div>
  );
}

export default Home;
