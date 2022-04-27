import Link from "next/link";

export default function PopupThree(){
    return(
        <section className="popup-two active" id="popup">
        <div className="cancel" >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4617 22.3335L13.0561 20.7858L4.60392 12.3335H22.5728V10.1113H4.60392L13.0328 1.68244L11.4617 0.111328C7.39392 4.17911 4.24392 7.32911 0.350586 11.2224C4.75725 15.6291 1.64614 12.518 11.4617 22.3335Z" fill="#40BFFF"/>
                </svg>                 
        </div>
        <div className="container">
            <div className="title">
            <h2>Make Payment</h2>
            </div>
            <div className="steps">
                <img src="/image/step-3.svg" alt=""/>
            </div>
            <div className="boxs-success">
                <img src="/image/success-icon.svg" alt=""/>
                <p>Success</p>
            </div>
            <Link href={"/cart"} >
                <button className="btn-cmplt">
                Complete
                </button>
            </Link>
            
        </div>
           
    </section>
    )
}