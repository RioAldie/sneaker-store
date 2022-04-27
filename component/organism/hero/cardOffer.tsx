interface CardOfferProps{
    name: String,
    image: String,
    disc: String,
    Price: String
}
export default function CardOffer(props: CardOfferProps){

    const { name, image, disc, Price } = props;
    return(
        <>
            <div className="card-offer">
                    <p className="name-product">
                        {name}
                    </p>
                    <img src={`${image}`} alt=""/>
                    <p className="disc">{disc}</p>
                    <div className="price">
                        {Price}
                    </div>
            </div>
        </>
    )
}