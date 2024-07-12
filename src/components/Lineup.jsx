const Lineup = () => {
    return (
        <section id="lineup" className="lineup py-11 text-white">
            <h3>Line Up</h3>

            <p className="dia my-7 ">Viernes 21</p>
            <div className="escenarios-contenedor">
                <div className="escenario bg-amarillo">
                    <p className="nombre-escenario text-white">Jukebox</p>

                    <ul className="calendario">
                        <li>
                            24:00 | <span>Freddie Mercury (Queen)</span>
                        </li>
                        <li>
                            22:00 | <span>Kurt Cobain (Nirvana)</span>
                        </li>
                        <li>
                            20:00 | <span>Mick Jagger (The Rolling Stones)</span>
                        </li>
                        <li>
                            19:00 | <span>Mick Jagger (The Rolling Stones)</span>
                        </li>
                        <li>
                            18:00 | <span>Zack de la Rocha</span>
                        </li>
                        <li>
                            17:00 | <span>ARTBAT</span>
                        </li>
                    </ul>
                </div>

                <div className="escenario bg-verde">
                    <p className="nombre-escenario text-white">Jamboree</p>

                    <ul className="calendario">
                        <li>
                            24:00 | <span>David Guetta</span>
                        </li>
                        <li>
                            22:00 | <span>Calvin Harris</span>
                        </li>
                        <li>
                            20:00 | <span>Martin Garrix</span>
                        </li>
                        <li>
                            19:00 | <span>Armin Van Buuren</span>
                        </li>
                        <li>
                            18:00 | <span>Daft Punk</span>
                        </li>
                        <li>
                            17:00 | <span>Jonas Blue</span>
                        </li>
                    </ul>
                </div>
            </div>


            <p className="dia my-7">Sábado 22</p>
            <div className="escenarios-contenedor contenedor">
                <div className="escenario bg-verde">
                    <p className="nombre-escenario text-white">Jamboree</p>

                    <ul className="calendario">
                        <li>
                            24:00 | <span>Reinier Zonneveld</span>
                        </li>
                        <li>
                            22:00 | <span>Eric Prydz</span>
                        </li>
                        <li>
                            20:00 | <span>Deadmau5</span>
                        </li>
                        <li>
                            19:00 | <span>Joris Voorn</span>
                        </li>
                        <li>
                            18:00 | <span>Nina Kraviz</span>
                        </li>
                        <li>
                            17:00 | <span>Argy</span>
                        </li>
                    </ul>
                </div>

                <div className="escenario bg-amarillo">
                    <p className="nombre-escenario text-white">Jukebox</p>

                    <ul className="calendario">
                        <li>
                            24:00 | <span>Armin Van Buuren</span>
                        </li>
                        <li>
                            22:00 | <span>Calvin Harris</span>
                        </li>
                        <li>
                            20:00 | <span>Hardwell</span>
                        </li>
                        <li>
                            19:00 | <span>Above & Beyond</span>
                        </li>
                        <li>
                            18:00 | <span>Diplo</span>
                        </li>
                        <li>
                            17:00 | <span>Steve Angello</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Lineup;
