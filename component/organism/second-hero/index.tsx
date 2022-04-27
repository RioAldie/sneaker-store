import Image from "next/image";

export default function SecondHero(){
    return(
        <>
        <section className="second-hero">
            <div className="box-hero">
                <div className="card-hero">
                    <div className="title">
                    <p>Adidas Men Running
                        Sneakers</p>
                </div>
                <div className="subtitle">
                    <p>Performance and design. Taken right to the edge.</p>
                </div>
                <div className="link">
                    <a href="">SHOP NOW</a>
                </div>
                </div>
                
            </div>
            <div className="box-hero">
                <img src="/image/shoes-shoe-png-transparent-shoe-images-pluspng-17.png" alt="" />
            </div>
        </section>
        </>
    )
}