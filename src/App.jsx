import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from "./Components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import ProductJsonServer from "./Components/Product using_json-server";
import AddProduct from "./Components/AddProduct";
import View_Product from "./Components/View_Product";
import Update from "./Components/Update";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/" element={<ProductJsonServer/>} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/productDetails/:id" element={<View_Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
