export default function CartComponent(){
    return(
        <>
        <section className="cart">
        <div className="header-cart">
            <h2 className="name">product</h2>
            <h2 className="price">price</h2>
            <h2 className="quantity">quantity</h2>
            <h2 className="unit-price">unit price</h2>
        </div>
        <div className="product-cart">
            <div className="delete">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.62487 0.739333L8.86572 0.0322266L0.515107 7.8104L1.27425 8.51751L9.62487 0.739333Z" fill="#FF4252"/>
                    <path d="M8.86585 8.51765L9.625 7.81055L1.27438 0.0323724L0.515237 0.739479L8.86585 8.51765Z" fill="#FF4252"/>
                    </svg>                    
            </div>
            <div className="box">
                <div className="img-product">
                    <img src="/image/adidas-img.png" alt="Adidas"/>
                </div>
                <p>Adidas White Running Man</p>
            </div>
            <h3>$900</h3>
            <h3>2</h3>
            <h3>$450</h3>
        </div>
        <div className="product-cart">
            <div className="delete">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.62487 0.739333L8.86572 0.0322266L0.515107 7.8104L1.27425 8.51751L9.62487 0.739333Z" fill="#FF4252"/>
                    <path d="M8.86585 8.51765L9.625 7.81055L1.27438 0.0323724L0.515237 0.739479L8.86585 8.51765Z" fill="#FF4252"/>
                    </svg>                    
            </div>
            <div className="box">
                <div className="img-product">
                    <img src="/image/nike-img-removebg-preview.png" alt="Adidas"/>
                </div>
                <p>Nike Air 2019 </p>
            </div>
            <h3>$999</h3>
            <h3>2</h3>
            <h3>$490</h3>
        </div>
        <div className="product-cart">
            <div className="delete">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.62487 0.739333L8.86572 0.0322266L0.515107 7.8104L1.27425 8.51751L9.62487 0.739333Z" fill="#FF4252"/>
                    <path d="M8.86585 8.51765L9.625 7.81055L1.27438 0.0323724L0.515237 0.739479L8.86585 8.51765Z" fill="#FF4252"/>
                    </svg>                    
            </div>
            <div className="box">
                <div className="img-product">
                    <img src="/image/vans-img.png" alt="Adidas"/>
                </div>
                <p>Classic Old Scholl Vans</p>
            </div>
            <h3>$400</h3>
            <h3>1</h3>
            <h3>$400</h3>
        </div>
    </section>
        </>
    )
}