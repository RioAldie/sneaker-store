import Image from "next/image"

interface BoxServiceProps{
    image: String,
    w: number,
    h: number,
    service: String,
    explain: String
}
export default function BoxService(props: BoxServiceProps){

    const {image, w, h, service, explain } = props;
    return(
        <div className="box-service">
            <Image src={`${image}`} width={w} height={h}/>
            <h3>{service}</h3>
            <p>{explain} </p>
        </div>
    )
}