import Footer from "../../component/organism/footer";
import Header from "../../component/organism/header";
import Navbar from "../../component/organism/navbar";
import ProductDetail from "./product-detail";
import Image from "next/image";

export default function Detail(){
    return(
        <>
        <Header/>
        <Navbar/>
       
         <section className="body-product">
            <ProductDetail />
            <div className="share">
                <div className="btn-share-fb">
                    <Image src={'/icon/facebook.svg'} width={28} height={19}/>
                 
                        
                    <p>Share on facebook</p>
                </div>
                <div className="btn-share-tw">
                <Image src={'/icon/twitter.svg'} width={28} height={16}/>
                                      
                    <p>Share on twitter</p>
                </div>
            </div>
            <div className="information">
                <h2>Product Information</h2>
                <span className="strip"></span>
                <div className="product-info">
                    <p>
                        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                    </p>
                    <p>
                        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                    </p>
                    <p>
                        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                    </p>
                </div>
            </div>
        </section>
    <Footer/>
        </>
    )
}