import { useState, useEffect } from "react";

import Modal from "react-modal";

export default function Dashboard() {
  const [listpizzas, setListpizzas] = useState([]);
  const [prueba, setPrueba] = useState("");


  const [modalIsOpen, setIsOpen] = useState(false);
  const [labelModal, setLabelModal] = useState("PROCESANDO ORDEN");
  
  const [ingredientesDetail, setIngredientesDetail ]=useState([])

  function openModal(id_pizza) {
    // console.log(id_pizza)
    var id_detail=id_pizza;

    var detailPizza= listpizzas.find((item)=>{
     return item.id===id_detail
    })

    console.log(detailPizza)

    setIngredientesDetail(detailPizza.ingredients)

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    fetch("http://localhost:5000/pizzas")
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setListpizzas(data);
        setPrueba("esta es una prueba");
      });
  }, []);

  // function requestListPizzas(){

  // }

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
    <main style={{ padding: "1rem 0" }}>
      <h2>Panel Pizzas Vendidas</h2>

      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Pizza</th>
          </tr>

          {listpizzas.map(function (data, i) {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td><a href="#" onClick={openModal.bind(this, data.id)}>{data.base.tipo}</a> </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
       <h1>PIZZA</h1>
       {ingredientesDetail.map(function (data, i) {
            return (
             <div>
             <h2>{data.name}</h2>
              </div>
            );
          })}
        
      </Modal>



    </main>
  );
}
