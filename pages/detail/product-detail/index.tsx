import Image from "next/image";


export default function ProductDetail(){
    return(
        <div className="detail">
                <div className="img">
                    <img src="/image/image-Product-3.png" alt=""/>
                </div>
                <div className="box">
                    <h3>Nike Airmax Red 3</h3>
                    <div className="box-detail">
                        <div className="price">
                            <span className="r-p">$299,43</span>
                            <span className="f-p"><s>$599,43</s></span>
                            <span className="discount">24% Off</span>
                        </div>
                        <div className="pro-detail">
                            <span className="details">
                                <h4>Avalibility: </h4>
                                <h5>In Stock</h5>
                            </span>
                            <span className="details">
                                <h4>Category:</h4>
                                <h5>Sneakers</h5>
                            </span>
                            <span className="shipping">
                               <Image src={"/icon/shipping.svg"} width={40} height={67}/>
                                <h4>Free Shipping</h4>
                            </span>
                        </div>
                    </div>
                    <div className="colors">
                        <h4> Select Color : </h4>
                      
                    </div>
                    <div className="sizes">
                        <h4> Chose your Size :</h4>
                        <select name="" id="">
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                        </select>
                    </div>
                    <div className="box-addcart">
                    <div className="jumlah">
                        <span className="btn-jumlah">+</span>
                        <span className="value-jumlah">2</span>
                        <span className="btn-jumlah">-</span>
                    </div>
                    <div className="add">
                        <Image src={'/icon/Cart.svg'} width={25} height={25}></Image>
                        <p>Add to Cart</p>                        
                    </div>
                    </div>
                </div>
            
            </div>
    )
             
}