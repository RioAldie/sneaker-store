import Image from "next/image"

export default function Navbar(){
    return(
        <>
        <nav>
            <div className="box-logo">
               <Image src="/icon/icon.svg" width={44} height={44}/>
                <p>Andoran Ltd.</p>                
            </div>
            <div className="box-nav">
                <ul>
                    <li>HOME</li>
                    <li>BAGS</li>
                    <li>SNEAKERS</li>
                    <li>BELT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
        </>
    )
}