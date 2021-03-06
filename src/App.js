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
import AddInventory from "./pages/AddInventory/AddInventory";
import MyInventories from "./pages/MyInventories/MyInventories";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Blogs from "./pages/Blogs/Blogs";
// import HeaderMain from "./pages/Shared/HeaderMain/HeaderMain";

function App() {
  return (
    <div className="app">
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
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myinventories"
          element={
            <RequireAuth>
              <MyInventories></MyInventories>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
