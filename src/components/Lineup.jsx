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
                            <Acor
                                title = '24:00 | Rubén Albarrán (Café Tacvba)'
                                root = 'src/img/artistas/Ruben.jpg'
                                alt = ' Rubén Albarrán'
                                defaultContent = 'Rubén Albarrán, líder de Café Tacvba, es un faro musical con presencia escénica única. Su capacidad de reinventarse
                                en cada álbum y su voz multifacética, desde arrullos cristalinos hasta gruñidos intensos, lo hacen excepcional. En vivo, mezcla humor,
                                baile, orgullo nativo y mística del rock latino.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '17:00 | Dave Grohl (Foo Fighters)'
                                root = 'src/img/artistas/Dave.jpg'
                                alt = 'Dave Grohl'
                                defaultContent = 'Dave Grohl, líder reconocido tanto por su nombre como por su banda, es conocido por su versatilidad musical. Desde
                                Nirvana hasta Foo Fighters, demuestra ser un camaleón en el escenario. Aún más notable, mantiene su reputación como el chico más amigable
                                del rock.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '20:00 | Serj Tankian (System of a Down)'
                                root = 'src/img/artistas/Serj.jpg'
                                alt = 'Serj Tankian'
                                defaultContent = 'Serj Tankian de System of a Down es conocido por su intensidad gutural en canciones como "Chop Suey!" y "B.Y.O.B.", equilibrando
                                con melodías suaves. Esta dualidad refleja su comentario político y social, arrullando a los fans antes de confrontar realidades injustas.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '19:00 | Liam Gallagher (Oasis)'
                                root = 'src/img/artistas/Liam.jpg'
                                alt = 'Liam Gallagher'
                                defaultContent = 'Liam Gallagher fue sin duda descarado al declarar "esta noche soy una estrella del rock and roll" en el debut de Oasis,
                                Definitely Maybe (1994). Su entrega definió los años 90, siendo su arrogancia en y fuera del escenario el espíritu animal del britpop.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '18:00 | Paul McCartney (The Beatles)'
                                root = 'src/img/artistas/Paul.jpg'
                                alt = 'Paul McCartney '
                                defaultContent = 'El estereotipo de que Paul McCartney era el Beatle más pop y John Lennon el rocker no cuenta toda la historia. Paul
                                lideró en baladas y también en temas de rock como "A Hard Day’s Night", "Helter Skelter" y "Back in the USSR".'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '17:00 | Gwen Stefani (No Doubt)'
                                root = 'src/img/artistas/Gwen.jpg'
                                alt = 'Gwen Stefani'
                                defaultContent = 'Gwen Stefani va más allá de ser solo una estrella pop; es más una figura de rock que de alfombra roja. Su presencia
                                en el escenario y su voz elástica fusionan vulnerabilidad, ira, feminidad y vanguardia, junto con su estética ska punk icónica, haciéndola
                                un modelo perdurable globalmente.'
                            />


                        </li>
                    </ul>
                </div>

                <div className="escenario bg-amarillo">
                    <p className="nombre-escenario text-white">Jukebox</p>

                    <ul className="calendario">
                        <li>
                            <Acor
                                title = '24:00 | Twenty One Pilots'
                                root = 'src/img/artistas/Twenty.jpg'
                                alt = 'Twenty One Pilots'
                                defaultContent = 'Es un dúo musical estadounidense de Columbus, Ohio, formado en 2009 por Tyler Joseph con Nick Thomas y Chris Salih, quienes
                                 se retiraron en 2011. Alcanzaron fama en 2010 con lanzamientos independientes y tours. Actualmente, la banda está compuesta por Tyler Joseph
                                 y el baterista Josh Dun.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '22:00 | Depeche Mode'
                                root = 'src/img/artistas/Depeche.jpg'
                                alt = 'Depeche Mode'
                                defaultContent = 'Considerado el mejor en su género, este grupo synthpop surgió en 1981 como líder del movimiento New Romantic. Evolucionaron
                                 hacia un sonido más duro con samplers, alcanzando su cúspide artística con los álbumes Violator y Songs of Faith and Devotion en los años 90,
                                 consolidándose como un grupo de calidad con letras oscuras cautivadoras.'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '20:00 | The Chainsmokers'
                                root = 'src/img/artistas/Chainsmokers.jpg'
                                alt = 'The Chainsmokers'
                                defaultContent = 'Formados en 2012, The Chainsmokers ganaron reconocimiento en 2014 con "Selfie", llegando al top 20 global. Han ganado un Grammy,
                                dos American Music Awards, siete Billboard y nueve iHeartRadio Music Awards. En 2019, Forbes los nombró los DJs mejor pagados del mundo, destronando
                                a Calvin Harris tras 6 años..'
                            />
                        </li>
                        <li>
                            <Acor
                                title = '19:00 | Disclosure'
                                root = 'src/img/artistas/Disclosure.jpg'
                                alt = 'Disclosure'
                                defaultContent = 'Disclosure es un dúo británico de música electrónica, conocido por su enfoque en deep house y garage house. Conformado por los
                                hermanos Guy y Howard Lawrence, su álbum "Settle" (2013) captura el sonido garage contemporáneo con éxitos como "Latch" y "White Noise", consolidándolos
                                como innovadores en la música electrónica.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '18:00 | Marshmello'
                                root = 'src/img/artistas/Marsh.jpg'
                                alt = 'Marshmello'
                                defaultContent = 'Marshmello es un DJ y productor de Future Bass, Trap y Electro House. Ganó fama remixando canciones de Jack Ü y Zedd. Su tema
                                "Alone" llegó al Billboard Hot 100. Ha colaborado con Ookay, Jauz, Slushii y Omar Linx. A pesar de su anonimato, ha recibido múltiples reconocimientos
                                internacionales desde su debut en 2015.'
                            />

                        </li>
                        <li>
                            <Acor
                                title = '17:00 | The Chemical Brothers'
                                root = 'src/img/artistas/Chemical.jpg'
                                alt = 'The Chemical Brothers'
                                defaultContent = 'The Chemical Brothers, dúo inglés de música electrónica formado por Tom Rowlands y Ed Simons, se conocieron en la universidad. Su influencia
                                 ecléctica y su contribución al big beat junto con otros como The Prodigy y Fatboy Slim han sido fundamentales en la electrónica, destacándose por mejorar estilos
                                 existentes.'
                            />

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Lineup;
