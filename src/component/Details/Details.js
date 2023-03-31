import React from 'react';
import './details.css'
import omg from "../../img/Group11.svg"
import omgOne from "../../img/Group121.png"
import omgTwo from "../../img/Group13.png"

const Details = () => {
    return (
        <div id="details">
            <div className="container">
                <h1 className="details-one">Детали</h1>
                <p className="elite">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor incididunt</p>
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex justify-content-center align-content-center">
                        <div className="consecrate ">
                            <img className="omg" src={omg} alt=""/>
                        </div>
                        <div className="mt-4 m-4">
                            <h6 className="episode">Продолжительность курса</h6>
                            <h6 className="months">3 месяца</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-content-center">
                        <div className="consecrate ">
                            <img className="omg" src={omgOne} alt="omg"/>
                        </div>
                        <div className="mt-4 m-4">
                            <h6 className="episode">График обучения</h6>
                            <h6 className="months">8 часов в день</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-content-center">
                        <div className="consecrate ">
                            <img className="omg" src={omgTwo} alt="omg"/>
                        </div>
                        <div className="mt-4 m-4">
                            <h6 className="episode">Тип обучения</h6>
                            <h6 className="months">онлайн, офлайн</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;