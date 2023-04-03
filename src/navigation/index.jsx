import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import Payments from "../pages/Payments";



const Navigation =()=>{
return(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/" element={<Cart/>}/>
        <Route path="/" element={<Menu/>}/>
        <Route path="/" element={<Payments/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default Navigation;