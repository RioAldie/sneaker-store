export default function Navbar(){
    return(
        <>
        <nav>
            <div className="box-logo">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.00244141" width="44" height="44" rx="16" fill="#40BFFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0619 20.274C32.0165 21.2286 32.0165 22.7763 31.0619 23.7309L23.7285 31.0643C22.7739 32.0189 21.2262 32.0189 20.2716 31.0643L12.9382 23.7309C11.9836 22.7763 11.9836 21.2286 12.9382 20.274L20.2716 12.9406C21.2262 11.986 22.7739 11.986 23.7285 12.9406L31.0619 20.274ZM22.0001 18.1261L18.1237 22.0024L22.0001 25.8788L25.8764 22.0024L22.0001 18.1261Z" fill="white"/>
                    </svg>
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