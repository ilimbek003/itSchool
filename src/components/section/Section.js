import React from 'react';
import "./section.css"
import vector from "../../img/Vector (7).svg"
import image from "../../img/вфцвфцвфцвцфв 1.svg"
import vec from "../../img/Vector 1.svg"

const Section = () => {
    return (
        <div id="section">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="">
                        <h5 className="diu">НЕСКОЛЬКО СЛОВ О НАШИХ КУРСАХ</h5>
                        <h2 className="dolor">Neque porro <br/> quisquam estqui <br/> dolorem</h2>
                        <p className="project-one">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/>
                            accusantium <span className="nwe">doloremque laudantium</span>, totam rem aperiam,
                            eaque <br/>
                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br/>
                            dicta sunt explicabo. <span className="nwe">Nemo enim ipsam</span> voluptatem quia voluptas
                            sit <br/>
                            aspernatur <span className="nwe">aut odit aut fugit, sed quia</span>
                        </p>
                        <div className="">
                            <div className="d-flex">
                                <img src={vector} alt="vector"/>
                                <h3 className="project-one m-1">Ret quasi architecto beatae</h3>
                                <h3 className="project-one m-1"><span
                                    className="vitae">vitae dicta sunt explicabo.</span> Nemo</h3>
                            </div>
                            <h3 className="project-one one">
                                <br/>
                                enim ipsam voluptatem quia voluptas
                                sit aspernatur aut <br/>
                                odit aut fugit, sed quia
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="block_three">
                                <h2 className="code">Хочешь понимать весь код? <br/>Читай ниже!</h2>
                                <img className="images-twos" src={image} alt="image"/>
                            </div>
                            <img className="auto" src={vec} alt="vec"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="words">
                <div className="d-flex justify-content-between align-content-center">
                    <h5 className="comm">Методика обучения</h5>
                    <h5 className="links">//</h5>
                    <h5 className="comm">Методика обучения</h5>
                    <h5 className="links">//</h5>
                    <h5 className="comm">Методика обучения</h5>
                    <h5 className="links">//</h5>
                    <h5 className="comm">Методика обучения</h5>
                    <h5 className="links">//</h5>
                    <h5 className="comm">Методика обучения</h5>
                    <h5 className="links">//</h5>
                </div>
            </div>
        </div>
    );
};

export default Section;