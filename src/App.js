import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  

import Home from './Home'
import Dashboard from './Dashboard'


function App() {


    return (
       
         
           


        <BrowserRouter>
            
            <Routes>
                    <Route path="/" element={<Home />} />
                 


                    <Route path="dashboard" element={<Dashboard />} />


                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                            <p>Pagina no encontrada!</p>
                            </main>
                        }
                        />
                    
            
            </Routes>
               

            
        </BrowserRouter>


       
       
    )

}

export default App;
