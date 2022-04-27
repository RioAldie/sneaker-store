import Link from "next/link";
import Image from "next/image";

interface NewproductProps{
    image: String,
    w: number,
    h: number,
    name: String,
    price: String,
    anchor: String

}
export default function Newproduct(props: NewproductProps){

    const {image,w,h,name,price,anchor} = props;
    return(
        <Link href={"/detail"}>
            <div className="product">
                <div className="img-product">
                <Image src={`${image}`} height={h} width={w} alt=""/>
                </div>
                <div className="product-detail">
                    <h3>{name}</h3>
                    <img src="/icon/rate.svg" alt=""/>
                <span><h4>{price}</h4> <s>{anchor} </s></span> 
                </div>
            </div>
        </Link>
        
    )
}