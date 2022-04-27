import Link from "next/link";

export default function PopupOne(){
    return(
        <section className="popup active" id="popup">
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
                <img src="/image/Stepper.svg" alt=""/>
            </div>
            <div className="boxs">
                <div className="form">
                    <input className="input-t" type="text" placeholder="Masukan Nama" name="name"/>
                    <input className="input-t" type="email" placeholder="Masukan Email" name="email"/>
                    <div className="select">
                        <p>Select Payment Method:</p>
                        <div className="option">
                            <label htmlFor="paypal">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0619 7.41573L10.0644 7.41673C10.1169 7.19523 10.3078 7.03223 10.5466 7.03223H17.3494C17.358 7.03223 17.3666 7.02873 17.3752 7.02923C17.2302 4.63973 15.2059 3.53223 13.4198 3.53223H6.61708C6.37773 3.53223 6.18686 3.69973 6.13485 3.92073L6.13232 3.91973L3.15864 17.4387L3.1652 17.4392C3.15813 17.4712 3.14551 17.5017 3.14551 17.5362C3.14551 17.8127 3.37122 18.0317 3.65046 18.0317H7.72596L10.0619 7.41573Z" fill="#1565C0"/>
                                    <path d="M17.3767 7.0293C17.4035 7.4673 17.3742 7.9438 17.2611 8.4703C16.6142 11.4678 14.2758 13.0278 11.3859 13.0278C11.3859 13.0278 9.63374 13.0278 9.20806 13.0278C8.94498 13.0278 8.82076 13.1808 8.7637 13.2978L7.88508 17.3223L7.73107 18.0368H7.72804L7.09028 20.9348L7.09684 20.9353C7.08977 20.9673 7.07715 20.9978 7.07715 21.0323C7.07715 21.3088 7.30286 21.5323 7.5821 21.5323H11.2849L11.2915 21.5273C11.5298 21.5238 11.7192 21.3553 11.7687 21.1333L11.7778 21.1258L12.6928 16.9178C12.6928 16.9178 12.7564 16.5163 13.1826 16.5163C13.6088 16.5163 15.2923 16.5163 15.2923 16.5163C18.1821 16.5163 20.5443 14.9633 21.1917 11.9653C21.9198 8.5853 19.4849 7.0418 17.3767 7.0293Z" fill="#039BE5"/>
                                    <path d="M10.5477 7.03198C10.3084 7.03198 10.1175 7.19498 10.0655 7.41648L10.063 7.41548L8.7627 13.298C8.81976 13.181 8.94397 13.028 9.20706 13.028C9.63324 13.028 11.3455 13.028 11.3455 13.028C14.2354 13.028 16.6132 11.468 17.2601 8.47048C17.3737 7.94398 17.4025 7.46748 17.3757 7.02948C17.3676 7.02848 17.3586 7.03198 17.3505 7.03198H10.5477Z" fill="#283593"/>
                                    </svg>
                                <h3>Paypal</h3>
                                 
                                </label>
                            <input type="radio" name="payment" id="paypal"/>
                        </div>
                        <div className="option">
                            <label htmlFor="cc">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8278 5.78223H3.64941V19.2822H21.8278V5.78223Z" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.64941 10.2822H21.8278" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h3>Credit Card</h3></label>
                            <input type="radio" name="payment" id="cc"/>
                        </div>
                        <div className="option">
                            <label htmlFor="cc">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.64941 6.90723L12.7386 3.53223L21.8278 6.90723" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.64941 21.5322H21.8278" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.7383 17.0322V10.2822" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.5557 17.0322V10.2822" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.92188 17.0322V10.2822" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    
                                    <h3>Bank Transfer</h3></label>
                            <input type="radio" name="payment" id="cc"/>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <input className="input-t" type="text" placeholder="Masukan Nama Lengkap" name="fullname"/>
                    <input className="input-t" type="number" placeholder="Masukan Nomor Telepon" name="fullname"/>
            <textarea name="alamat" id="alamat" cols={30} rows={10} placeholder="Masukan Alamat"></textarea>
                </div>
            </div>
                
                    <Link  href={"/popup-two"}>
                        <button className="btn-payment"  >
                         Go to Payment
                          </button>  
                    </Link>
                     
                
        </div>
           
    </section>
    )
}