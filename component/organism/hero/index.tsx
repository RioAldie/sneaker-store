import Image from "next/image";
import CardOffer from "./cardOffer";

export default function Hero(){
    return(
        <>
        <section className="Hero">
            <div className="hero-offer">
                <Image src="/image/Offer-Banner.png" width={1500} height={654}/>
            </div>
            <div className="container-offer">
                <CardOffer name={"FS-quilted maxi cross bag"} image={"/image/image-Product-1.png"} disc={"24% Off"} Price={"$299,43"} />
                <CardOffer name={" FS-Nike Air Max 470 Premium "} image={"/image/image-Product-2.png"} disc={"24% Off"} Price={"$399,43"} />
                <CardOffer name={"FS-Nike Air Max 270 Red"} image={"/image/image-Product-3.png"} disc={"24% Off"} Price={"$199,43"} />
            </div>
        </section>
        </>
    )
}