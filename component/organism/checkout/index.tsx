import Link from "next/link";

export default function CheckOut(){
    return(
        <>
        <section className="checkout">
        <form className="voucher">
            <input type="text" placeholder="Masukan Kode Voucher "/>
            <button className="btn-redeem">
                Redeem
            </button>
        </form>
        <div className="checkout-card">
            <div className="box">
                <h4>Subtotal: </h4>
                <h4>1000$</h4>
            </div>
            <div className="box">
                <h4>Shipping: </h4>
                <h4>20$</h4>
            </div>
            <div className="box">
                <h4>Coupon: </h4>
                <h4>No</h4>
            </div>
            <div className="total">
                <h3>
                    total
                </h3>
                <h3>
                    1188$
                </h3>
            </div>
            <Link href={"/popup"}>
             <button className="btn-checkout">
                Check Out
            </button>
            </Link>
           
        </div>
    </section>
        </>
    )
}