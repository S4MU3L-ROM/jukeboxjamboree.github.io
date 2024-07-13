import Acor from "./Acordion.jsx";

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
                            <Acor
                                title = '24:00 | Freddie Mercury (Queen)'
                                root = 'src/img/artistas/Freddy.jpg'
                                alt = 'Freddie Mercury'
                                defaultContent = 'Desde sus humildes comienzos en Zanzíbar hasta convertirse en un ícono global, la carrera de Freddie Mercury
                                es un viaje asombroso a través de la música y el espectáculo. Con su voz excepcionalmente poderosa  y su habilidad para escribir
                                letras que tocan el corazón, Mercury catapultó a Queen a la fama mundial en la década de 1970.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '22:00 | Kurt Cobain (Nirvana)'
                                root = 'src/img/artistas/Kurt.jpg'
                                alt = 'Kurt Cobain'
                                defaultContent = 'A medida que el rock se liberaba de los excesos glam de los años 80, Cobain destacó con su presencia
                                escénica en Nirvana. Su estilo espartano definió un liderazgo centrado en la pasión por la música, no por la fama. Se
                                convirtió en un ícono generacional buscando identidad.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '20:00 | David Bowie'
                                root = 'src/img/artistas/David.jpg'
                                alt = 'David Bowie'
                                defaultContent = 'Bowie, figura clave en la música durante cinco décadas, destacó como innovador,
                                especialmente en los años 70. Su voz peculiar y la profundidad intelectual de su obra lo consolidaron
                                como un ícono indiscutible de la música popular.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '19:00 | Mick Jagger (The Rolling Stones)'
                                root = 'src/img/artistas/Mick.jpg'
                                alt = 'Mick Jagger'
                                defaultContent = 'Nadie rivaliza con Jagger en movimiento, voz, imagen, moda o carisma. Como líder
                                de la banda de rock más grande, ha guiado a los Rolling Stones durante más de medio siglo, desde
                                su debut en 1964 hasta su Sixty Tour de 2022, celebrando su 80 cumpleaños el 26 de julio.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '18:00 | Robert Plant (Led Zeppelin)'
                                root = 'src/img/artistas/Robert.jpg'
                                alt = 'Robert Plant'
                                defaultContent = 'Robert Plant, líder y pionero, adoptó el Delta blues para influir en el rock británico
                                de los 60 y 70. Con voz poderosa y distintiva, definió el estándar de cómo lucir y sonar como un ícono
                                del rock, elevando Led Zeppelin con delicadeza y pasión, dejando una marca perdurable en la música moderna.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '17:00 | Zack de la Rocha (RATM)'
                                root = 'src/img/artistas/Zack.jpg'
                                alt = 'Zack de la Rocha'
                                defaultContent = '“Así tenga que arrastrarme por este escenario, vamos a tocar para todos ustedes esta noche. Llegamos demasiado lejos”,
                                declaró De la Rocha, cuya política y presencia en vivo con Rage reflejan riesgo. Su valentía y voz, junto a la intensidad instrumental,
                                lo establecen como vocalista principal de renombre.'
                            />

                        </li>
                    </ul>
                </div>

                <div className="escenario bg-verde">
                    <p className="nombre-escenario text-white">Jamboree</p>

                    <ul className="calendario">
                        <li>
                            <Acor
                                title = '24:00 | David Guetta'
                                root = 'src/img/artistas/Guetta.jpg'
                                alt = 'David Guetta'
                                defaultContent = 'Es un DJ francés especializado en house. Sus primeros éxitos europeos
                                fueron "Money" y "Just a Little More Love", pero alcanzó el #1 en las listas dance europeas
                                en 2005 con "The World Is Mine". Ganó mayor fama por protagonizar un anuncio de gomina de LOréal.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '22:00 | Calvin Harris'
                                root = 'src/img/artistas/Calvin.jpg'
                                alt = 'Calvin Harris'
                                defaultContent = 'Calvin Harris, cuyo nombre real es Adam Richard Wiles, ha dejado una marca notable
                                en la música electrónica y pop. Descubierto en Myspace, firmó con EMI en 2006. Su habilidad para mezclar
                                ritmos contagiosos y melodías pegajosas lo mantiene en la cima. Su próximo disco promete más éxitos en las pistas de baile.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '20:00 | Martin Garrix'
                                root = 'src/img/artistas/Martin.jpg'
                                alt = 'Martin Garrix'
                                defaultContent = 'Es un DJ y productor neerlandés, fundador de STMPD RCRDS. Entró al Top 100 DJs de
                                DJ Magazine directamente en el puesto 40. Desde entonces, alcanzó el 4° lugar en 2014, el 3° en 2015,
                                y fue nombrado el mejor DJ del mundo en 2016, 2017 y 2018, ocupando el primer lugar.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '19:00 | Armin Van Buuren'
                                root = 'src/img/artistas/Armin.jpg'
                                alt = 'Armin Van Buuren'
                                defaultContent = 'Es un destacado DJ y productor de música trance, considerado actualmente el
                                mejor del mundo. Votado en el prestigioso ranking de DJ Magazine, fue nombrado DJ número 1 del
                                Mundo en 2007, 2008, 2009 y 2010, siendo el único en lograrlo cuatro veces consecutivas hasta la fecha.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '18:00 | Daft Punk'
                                root = 'src/img/artistas/Daft.jpg'
                                alt = 'Daft Punk'
                                defaultContent = 'Daft Punk fue un dúo francés de música electrónica formado por Thomas Bangalter y Guy-Manuel
                                 de Homem-Christo en París. Su estilo combinó house, disco, balada rock, funk, techno y synthpop, dejando una
                                 huella distintiva en la música electrónica.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '17:00 | Jonas Blue'
                                root = 'src/img/artistas/Jonas.jpg'
                                alt = 'Jonas Blue'
                                defaultContent = 'Es un compositor, productor y DJ británico. Su versión de "Fast Car" junto a Dakota lanzó su
                                carrera en 2016, alcanzando el top 10 en más de doce países. También tuvo éxito con "Perfect Strangers" y "By
                                Your Side" con Raye en Europa y Oceanía ese mismo año.'
                            />
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
                            24:00 | Reinier Zonneveld
                        </li>
                        <li>
                            22:00 | Eric Prydz
                        </li>
                        <li>
                            20:00 | Deadmau5
                        </li>
                        <li>
                            19:00 | Joris Voorn
                        </li>
                        <li>
                            18:00 | Nina Kraviz
                        </li>
                        <li>
                            17:00 | Argy
                        </li>
                    </ul>
                </div>

                <div className="escenario bg-amarillo">
                    <p className="nombre-escenario text-white">Jukebox</p>

                    <ul className="calendario">
                        <li>
                            24:00 | Armin Van Buuren
                        </li>
                        <li>
                            22:00 | Calvin Harris
                        </li>
                        <li>
                            20:00 | Hardwell
                        </li>
                        <li>
                            19:00 | Above & Beyond
                        </li>
                        <li>
                            18:00 | Diplo
                        </li>
                        <li>
                            17:00 | Steve Angello
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Lineup;
