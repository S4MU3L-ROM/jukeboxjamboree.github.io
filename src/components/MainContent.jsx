import Video from "./Video.jsx";
import AboutFestival from "./AboutFestival.jsx";
import Lineup from "./Lineup.jsx";
import Galeria from "./Galeria.jsx";
import Boletos from "./Boletos.jsx";
import Acor from "./Acordion.jsx";
import Footer from "./Footer.jsx";
import React from "react";

const MainContent = () => {
    return (
        <div className="bg-purple-light">
            <Video />
            <AboutFestival />
            <Lineup />
            <Galeria id="galeria" />
            <Boletos />
            <Acor />
            <Footer />
        </div>
    );
}

export default MainContent;