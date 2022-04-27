import Image from "next/image"
import BoxService from "./boxService"

export default function Info(){
    return(
        <>
        <section className="info">
    <div className="services">
        <BoxService image={"/icon/shipping.svg"} w={101} h={67} service={"Free Shipping"} explain={"Free and fast Shipping for all product. "} />
        
        <BoxService image={"/icon/refund.svg"} w={70} h={79} service={"100% Refund"} explain={"we will refund your paid if the product had any problem"} />
        
        <BoxService image={"/icon/support.svg"} w={69} h={89} service={"Support 24/7"} explain={"customer service in 24 hours in every day on a week"} />
        
    </div>
    <h1>Latest news</h1>
    <div className="sponsor">
        <div className="box-sponsor">
            <div className="img-sponsor">
                <img src="/image/Nike_logo_emblem_logotype 1.png" alt=""/>
            </div>
            <div className="text">
                <h3>Fashion Industry</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    
        <div className="box-sponsor">
            <div className="img-sponsor">
                <img src="/image/bank-jatim-logo.png" alt=""/>
            </div>
            <div className="text">
                <h3> New Bank </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            
        </div>
    
        <div className="box-sponsor">
            <div className="img-sponsor">
                <img src="/image/kronos-logo-1-1 1.png" alt=""/>
            </div>
            <div className="text">
                <h3>HR Community</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            
        </div>
    </div>
    <h1>featured product</h1>
    <div className="newproduct">
        <div className="product">
             <div className="img-product">
            <img src="/image/nike-img-removebg-preview.png" alt=""/>
            </div>
            <div className="product-detail">
                <h3>Blue Swade Nike Sneakers</h3>
                <img src="/image/rate.svg" alt=""/>
               <span><h4>$349</h4> <s>$399</s></span> 
            </div>
        </div>
        <div className="product">
            <div className="img-product">
           <img src="/image/vans-img.png" alt=""/>
           </div>
           <div className="product-detail">
               <h3>Old Scholl Red Vans Sneakers</h3>
               <img src="/image/rate.svg" alt=""/>
             <span><h4>$249</h4> <s>$299</s></span>  
           </div>
       </div>
       <div className="product">
        <div className="img-product">
       <img src="/image/adidas-img.png" alt=""/>
       </div>
       <div className="product-detail">
           <h3>White Snow Adidas Sneakers</h3>
           <img src="/image/rate.svg" alt=""/>
          <span><h4>$449</h4> <s>$599</s></span> 
       </div>
   </div>
    </div>

    <div className="form-search">
        <form action="" className="form">
            <input type="text" className="input-search" placeholder="Cari apa yang kamu inginkan.."/>
            <button className="btn-search">Search</button>
        </form>
    </div>
</section>
        </>
    )
}