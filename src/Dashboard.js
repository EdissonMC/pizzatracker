import { useState, useEffect } from "react";

import Modal from "react-modal";

export default function Dashboard() {
  const [listpizzas, setListpizzas] = useState([]);
  const [prueba, setPrueba] = useState("");
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
                <td>{data.base.tipo} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
