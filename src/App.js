import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Register from "./pages/Login/Register/Register";
import Login from "./pages/Login/Login/Login";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import InventoryDetail from "./pages/InventoryDetail/InventoryDetail";
import ManageInventories from "./pages/ManageInventories/ManageInventories";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageinventories"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
