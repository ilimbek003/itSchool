import React, {useState} from 'react';
import "./footer.css"
import img from "../../img/Rectangle 39.png"
import imgOne from "../../img/Rectangle 40.png"
import Rectangle from "../../img/Rectangle 14.svg"
import RectangleOne from "../../img/Rectangle 15.svg"
import RectangleTwo from "../../img/Rectangle 16.svg"
import Modal from "../../modal/modal";



const Footer = () => {
    const [modalActive , setModalActive] = useState(true)


    return (
        <div id="footer">
            <div className="container">
                <h1 className="logos_one">Наши студенты делятся
                    <br/>
                    своими
                    <span className="block"> впечатлениями </span>
                    о
                    <br/>
                    наших курсах
                </h1>
                <div className="d-flex justify-content-between flex-wrap">
                    <img onClick={() => setModalActive(true)} className="Rectangle_one mt-5" src={Rectangle} alt="Rectangle"/>
                    <img onClick={() => setModalActive(true)}  className="Rectangle_one mt-5" src={RectangleOne} alt="Rectangle"/>
                    <img onClick={() => setModalActive(true)}  className="Rectangle_one mt-5" src={RectangleTwo} alt="Rectangle"/>
                <Modal active={modalActive} setActive={setModalActive}/>
                </div>
                <div>
                    <h1 className="contact">Контакты</h1>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div>
                            <div className="d-flex mt-5">
                                <i className="fas fa-phone mt-1"></i>
                                <a className="tel" href="tel:+996 (559) 18 00 33">+996 (559) 18 00 33</a>
                            </div>
                            <div className="d-flex mt-5">
                                <i className="fas fa-envelope"></i>
                                <a className="email" href="mailto:abc@example.com">mail@mail.ru</a>
                            </div>
                            <div className="d-flex mt-5">
                                <i className="fas fa-location-dot mt-1"></i>
                                <p className="map">ул. Ю. Абдрахманова 199 <br/>БЦ “Sky” 2 этаж, 209 каб</p>
                            </div>
                            <div className="mt-5">
                                <p className="online">Пишите мы онлайн</p>
                                <div className="d-flex mt-4">
                                    <div className="fas-one">
                                        <i className="fab  fa-telegram"></i>
                                    </div>
                                    <div className="fas-one">
                                        <i className="fab  fa-facebook-square fuse"></i>
                                    </div>
                                    <div className="fas-one">
                                        <i className='fab fa-whatsapp'></i>
                                    </div>
                                    <div className="fas-one">
                                        <i className="fab  fa-instagram"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="once mt-5">Приезжайте к нам в офис</h6>
                            <img className="mt-3" src={img} alt="img"/>
                            <br/>
                            <img className="mt-4" src={imgOne} alt="imgOne"/>
                        </div>
                        <div>
                            <h6 className="once mt-5">Как к нам добраться</h6>
                            <iframe className="iframe mt-3"
                                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1462.0206174516934!2d74.67512453231814!3d42.871973803617564!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1677735376445!5m2!1sru!2skg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blockers">
                <div className="container  d-flex justify-content-between">
                    <h6 className="text_two">Политика конфиденциальности</h6>
                    <h6 className="text_two_tree">2021 Все права защищены</h6>
                </div>
            </div>

        </div>

    );
};

export default Footer;