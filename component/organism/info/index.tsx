import BoxService from "./boxService";
import Sponsor from "./sponsor";
import Newproduct from "./newproduct";
import Search from "../../atoms/search";

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
        <Sponsor image={"/image/Nike_logo_emblem_logotype.png"} w={146} h={53} sponsor={"Fashion Industry"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
        
        <Sponsor image={"/image/bank-jatim-logo.png"} w={224} h={52} sponsor={" New Bank"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
        
        <Sponsor image={"/image/kronos-logo.png"} w={154} h={83} sponsor={"HR Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
  
    </div>
    <h1>featured product</h1>
    <div className="newproduct">
        <Newproduct image={'/image/nike-img-removebg-preview.png'} w={154} h={154} name={'Blue Swade Nike Sneakers'} price={'$349'} anchor={'$399'} />
        <Newproduct image={'/image/vans-img.png'} w={154} h={154} name={'Old Scholl Red Vans Sneakers'} price={'$249'} anchor={'$299'} />
        <Newproduct image={'/image/adidas-img.png'} w={154} h={154} name={'White Snow Adidas Sneakers'} price={'$449'} anchor={'$599'} />
    </div>

    <Search />
</section>
        </>
    )
}