import React from 'react';
import "./course.css"
import rectangle from "../../img/Rectangle 17.svg"
import rectangleOne from "../../img/Rectangle 18.svg"
import rectangleO from "../../img/Rectangle 19.svg"
import rectangleN from "../../img/Rectangle 27.svg"
import rectangleE from "../../img/Rectangle 26.svg"
import {Link} from "react-router-dom";

const Course = () => {
    return (
        <div id="course">
            <div className="container">
                <div className="d-flex justify-content-between classes flex-wrap">
                    <div className="d-flex flex-wrap">
                        <div className="blockes-two">
                            <img className="rectangle0" src={rectangle} alt="Rectangle "/>
                            <p className="rename mt-2">Старт курса 15 октября</p>
                            <h2 className="name mt-4">Основы программирования</h2>
                            <p className="manes mt-4">Сed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam,
                                <br/> quis nostrud exercitation
                            </p>
                            <div className="mt-4">
                                <button className="ton">записаться</button>
                                <Link to="/catalog">
                                    <button className="ton-one">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <div className="blockes-two">
                            <img className="rectangle0" src={rectangleOne} alt="Rectangle "/>
                            <p className="rename mt-2">Старт курса 15 октября</p>
                            <h2 className="name mt-4">Основы программирования</h2>
                            <p className="manes mt-4">Сed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam,
                                <br/> quis nostrud exercitation
                            </p>
                            <div className="mt-4">
                                <button className="ton">записаться</button>
                                <Link to="/catalog">
                                    <button className="ton-one">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <div className="blockes-two">
                            <img className="rectangle0" src={rectangleO} alt="Rectangle "/>
                            <p className="rename mt-2">Старт курса 15 октября</p>
                            <h2 className="name mt-4">Основы программирования</h2>
                            <p className="manes mt-4">Сed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam,
                                <br/> quis nostrud exercitation
                            </p>
                            <div className="mt-4">
                                <button className="ton">записаться</button>
                                <Link to="/catalog">
                                    <button className="ton-one">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap mt-5">
                        <div className="blockes-two">
                            <img className="rectangle0" src={rectangleN} alt="Rectangle "/>
                            <p className="rename mt-2">Старт курса 15 октября</p>
                            <h2 className="name mt-4">Основы программирования</h2>
                            <p className="manes mt-4">Сed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam,
                                <br/> quis nostrud exercitation
                            </p>
                            <div className="mt-4">
                                <button className="ton">записаться</button>
                                <Link to="/catalog">
                                    <button className="ton-one">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <div className="blockes-two">
                            <img className="rectangle0" src={rectangleE} alt="Rectangle "/>
                            <p className="rename mt-2">Старт курса 15 октября</p>
                            <h2 className="name mt-4">Основы программирования</h2>
                            <p className="manes mt-4">Сed do eiusmod tempor incididunt ut labore et <br/>
                                dolore magna aliqua. Ut enim ad minim veniam,
                                <br/> quis nostrud exercitation
                            </p>
                            <div className="mt-4">
                                <button className="ton">записаться</button>
                                <Link to="/catalog">
                                    <button className="ton-one">Подробнее</button>
                                </Link>
                            </div>
                        </div>
                        <div className="names-two">
                            <h1 className="euo ">У вас есть <br/> дополнительные <br/> вопросы?</h1>
                            <p className="pro">Оставьте вои контакты, мы перезвоним</p>
                            <input className="inputs" type="text" placeholder="Введите Ваше имя"/>
                            <input className="inputs" type="text" placeholder="Введите номер телефона"/>
                            <br/>
                            <button className="but-two-one">перезвоните мне</button>
                            <p className="sideshow">Мы перезвоним в течении дня</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="words-one">
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

export default Course;