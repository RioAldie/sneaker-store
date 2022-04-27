export default function Sidebar(){
    return(
        <>
        <section className="sidebar">
        <div className="container">
            <div className="box">
                <h3>Brand</h3>
                <ul>
                    <li>Nike <span>43</span></li>
                    <li>Adidas <span>3</span></li>
                    <li>New Balance <span>1</span></li>
                    <li>Vans <span>9</span></li>
                    <li>Puma <span>13</span></li>
                    <li>All Stars <span>8</span></li>
                </ul>
            </div>
            <div className="box">
                <h3>Filter</h3>
                <div className="filter">
                    <div className="range-price">
                        <form action="" className="form-range">
                            <label htmlFor="price" className="price">Price</label>
                            <input type="range" name="price"/>
                        </form>
                        
                    </div>
                    <div className="colors">
                        <h3>Color</h3>
                        <ul>
                            <li><span className=" color "></span></li>
                            <li><span className=" color "></span></li>
                            <li><span className=" color "></span></li>
                            <li><span className=" color active"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box">
                <h3>Kategori</h3>
                <ul>
                    <li>Limited <span>22</span></li>
                    <li>Premium <span>8</span></li>
                    <li>Hot <span>1</span></li>
                    <li>Promo <span>6</span></li>
                </ul>
            </div>
        </div>
    </section>
    </>
    )
}