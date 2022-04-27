import Body from "../component/organism/body";
import Footer from "../component/organism/footer";
import Header from "../component/organism/header";
import History from "../component/organism/history";
import Navbar from "../component/organism/navbar";
import Sidebar from "../component/organism/sidebar";

export default function Store(){
    return(
        <>
            <Header/>
            <Navbar/>
            <Sidebar/>
            <History/>
            <Body/>
            <Footer/>
        </>
    );
}