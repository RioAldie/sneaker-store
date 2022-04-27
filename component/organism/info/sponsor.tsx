import Image from 'next/image';

interface SponsorProps{
    image: String,
    w: number,
    h: number,
    sponsor: String,
    text: String 
}
export default function Sponsor(props: SponsorProps){
    const { image,w,h,sponsor,text} = props;
    return(
        <div className="box-sponsor">
            <div className="img-sponsor">
                <Image src={`${image}`} alt="" width={w} height={h} />
            </div>
            <div className="text">
                <h3>{sponsor}</h3>
                <p>{text} </p>
            </div>
        </div>
    )
}