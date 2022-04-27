import CartComponent from "../component/organism/cart"
import CheckOut from "../component/organism/checkout"
import Footer from "../component/organism/footer"
import Header from "../component/organism/header"
import Navbar from "../component/organism/navbar"


export default function Cart(){
    return(
        <>
        
       <Header/>
        <Navbar/>
        <CartComponent />
        <CheckOut/>
        <Footer/>
        </>
    )
}