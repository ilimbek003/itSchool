import React from 'react';
import "./Catalog.css"
import img from '../../img/Group 12.svg'

const Catalog = () => {
    return (
        <div id="catalog">
            <div className="troupe">
                <div className="container">
                    <h1 className="ipsum">Lorem ipsum
                        <span className="sit">dolor sit amet</span>
                        <br/>
                        consectetur adipiscing
                    </h1>
                    <div className="">
                        <div className="d-flex justify-content-between align-content-center flex-wrap mt-5">
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-content-center flex-wrap  mt-5">
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                            <div>
                                <div className="circle-one">
                                    <img className="ween" src={img} alt="img"/>
                                </div>
                                <h4 className="vel-one mt-3">Quis autem vel eum iure <br/> reprehenderit qui</h4>
                                <p className="set-ut">Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                    voluptatem accusantium doloremque laudantium
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;