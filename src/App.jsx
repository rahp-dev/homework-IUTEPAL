import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Databases from "./views/Databases";
import Entity from "./views/Entity";
import Relations from "./views/Relations";
import Cardinalidad from "./views/Cardinalidad";
import ModelER from "./views/ModelER";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route index element={<Databases />}></Route>
        <Route path="/entidad" element={<Entity />}></Route>
        <Route path="/relacion" element={<Relations />}></Route>
        <Route path="/cardinalidad" element={<Cardinalidad />}></Route>
        <Route path="/modelo-er" element={<ModelER />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
