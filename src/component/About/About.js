import React from 'react';
import "./About.css"
import vector from "../../img/Vector (7).svg";

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <h1 className="the">О курсе</h1>
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="ist">Sed ut perspiciatis <span
                            className="under">unde omnis iste natus error</span> sit voluptatem accusantium
                            doloremque <br/>
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br/>
                            architecto <span className="under">beatae vitae</span> dicta sunt explicabo. <span
                                className="under-one">
                              Nemo enim ipsam voluptatem quia voluptas <br/> sit
                            aspernatur aut odit aut fugit, <span className="under">sed quia consequuntur magni</span>
                            </span> dolores eos qui ratione <br/>
                            voluptatem sequi nesciunt.</p>
                        <div className="d-flex">
                            <img src={vector} alt="vector"/>
                            <p className="ist-one mt-2 m-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet,</p>
                        </div>
                        <p className="ist">consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                            ut labore et <br/>
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum <br/>
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi <br/>
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam <br/>
                            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                            pariatur <br/>
                        </p>
                    </div>
                    <div className="d-flex">
                        <div className='lines0'/>
                        <div>
                            <h1 className="number mt-2">+125</h1>
                            <h6 className="string ">Sed ut perspiciatis unde omnis </h6>
                            <h1 className="number mt-4">+200</h1>
                            <h6 className="string">Iste natus error sit voluptatem accusantium </h6>
                            <h1 className="number mt-4">+9</h1>
                            <h6 className="string">Fdoloremque laudantium, totam rem aperiam, </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;