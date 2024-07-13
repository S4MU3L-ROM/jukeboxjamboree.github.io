import Header from './components/Header';
import Video from './components/Video';
import AboutFestival from './components/AboutFestival';
import Lineup from './components/Lineup';
import Galeria from './components/Galeria';
import Boletos from './components/Boletos';
import Acor from "./components/Acordion.jsx";
import Footer from "./components/Footer.jsx";
import {NextUIProvider} from "@nextui-org/react";

const App = () => {
    return (
        <NextUIProvider>
            <div className="bg-purple-light">
                <Header />
                <Video />
                <AboutFestival />
                <Lineup />
                <Galeria id="galeria" />
                <Boletos/>
                <Acor/>
                <Footer/>
            </div>
        </NextUIProvider>
    );
}

export default App;
