import React, {useState} from 'react';
import './content.css'
import vector1 from "../../img/Vector.png"
import vector from '../../img/Vectors.svg'
import reboot from "../../img/refresh-line.svg"
import data from "../../data/data";
import img from "../../img/image.svg";

const Content = () => {
    const [selected, setSelected] = useState(null)
    const [show, setShow] = useState(false);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    const click = () => {
        if (show === true) {
            return setShow(false)
        }
        setShow(true)
    }


    return (
        <div id="content">
            <div className="container">
                <h1 className="states-one">Содержимое курса</h1>
                <div className="d-flex justify-content-between flex-wrap">
                    <div>
                        <div className={show ? 'contend etc ' : 'contend'}>
                            {
                                data.map((el, i, idx) => (

                                    <div>
                                        <div className="blocs d-flex justify-content-between align-content-center mt-3"
                                             onClick={() => toggle(i)}>
                                            <h4 className="arty mt-3 m-3" key={idx.id}>{el.question}</h4>
                                            <div className="mt-2 magic">
                                                {
                                                    selected === i ?
                                                        <img className="magic" src={vector1} alt=""/> :
                                                        <img className="magic" src={vector} alt=""/>

                                                }
                                            </div>
                                        </div>
                                        <div className={
                                            selected === i ? 'content show ' : 'content'
                                        }>
                                            <p className="plain-one">{el.answer}</p>
                                            <ul>
                                                <li className="plain">{el.answer1}</li>
                                                <li className="plain">{el.answer2}</li>
                                                <li className="plain">{el.answer3}</li>
                                                <li className="plain">{el.answer4}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div onClick={() => click(true)}>
                            <div className="d-flex">
                                <img className={show ? "boot tools" : "boot"} src={reboot} alt=""/>
                                <p onClick={() => click(true)} className="retry mt-3 m-3">Показать ещё 7 занятий</p>
                            </div>
                        </div>
                    </div>

                    <div className="names-two mt-3">
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
    );
};

export default Content;