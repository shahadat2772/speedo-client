import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Register from "./pages/Login/Register/Register";
import Login from "./pages/Login/Login/Login";
import { Toaster } from "react-hot-toast";
import Inventory from "./pages/Inventory/Inventory";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
