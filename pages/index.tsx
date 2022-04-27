
import Footer from '../component/organism/footer';
import Header from '../component/organism/header';
import Hero from '../component/organism/hero';
import Info from '../component/organism/info';
import Navbar from '../component/organism/navbar';
import SecondHero from '../component/organism/second-hero';


export default function Home(){
  return( <>
<Header/>
<Navbar/>
<Hero />
<SecondHero/>
<Info/>
<Footer />
</>
  );
}


