
import CartComponent from "../component/organism/cart";
import CheckOut from "../component/organism/checkout";
import Footer from "../component/organism/footer";
import Header from "../component/organism/header";
import Navbar from "../component/organism/navbar";
import PopupTwo from "../component/organism/popup-two";


export default function PopUpTwo(){

    return(
        <>
          <div className="disable" id="disable">
        </div>
       <Header/>
        <Navbar/>
        <CartComponent />
        <CheckOut/>
       <PopupTwo/>
       <Footer/>
        </>
    )
    
}





