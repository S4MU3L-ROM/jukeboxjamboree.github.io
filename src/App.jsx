import Header from './components/Header';
import Video from './components/Video';
import AboutFestival from './components/AboutFestival';
import Lineup from './components/Lineup';
import Galeria from './components/Galeria';
import Boletos from './components/Boletos';
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className="bg-purple-light">
            <Header />
            <Video />
            <AboutFestival />
            <Lineup />
            <Galeria id="galeria" />
            <Boletos/>
            <Footer/>
        </div>
    );
}

export default App;
