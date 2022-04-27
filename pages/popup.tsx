
import CartComponent from "../component/organism/cart";
import CheckOut from "../component/organism/checkout";
import Footer from "../component/organism/footer";
import Header from "../component/organism/header";
import Navbar from "../component/organism/navbar";
import PopupOne from "../component/organism/popup";


export default function Popup(){

    return(
        <>
          <div className="disable" id="disable">
        </div>
       <Header/>
        <Navbar/>
        <CartComponent />
        <CheckOut/>
       <PopupOne/>
       <Footer/>
        </>
    )
    
}





