import React, {useState} from 'react';
import "./block.css"
import Slider from "react-slick";
import rec from "../../img/Rectangle 2864.svg"
import vec from "../../img/Rectangle 2865.svg"
import recOne from "../../img/Rectangle 2866.svg"
import vec1 from "../../img/Rectangle 2867.svg"
import vec2 from "../../img/Rectangle 2868.png"
import img from "../../img/image.svg"

const Block = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const [show, setShow] = useState(false);
    const click = () => {
        if (show === true) {
            return setShow(false)
        }
        setShow(true)
    }

    return (
        <div id="block">
            <div className="container">
                <h1 className="sit_cass">Lorem ipsum dolor sit</h1>
                <p className={show ? "anim cat" : "anim"}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br/>
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <br/>
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br/>
                    aut odit aut fugit, sed quia
                </p>
                <div onClick={() => click(true)}>
                    <img className="valid" src={img} alt="img"/>
                </div>

                <div className="laugh">
                    <Slider {...settings} >
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={rec} alt=""/>
                                <img className="rec-all mt-5" src={recOne} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="all_erc mt-3" src={vec} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={vec1} alt=""/>
                                <img className="rec-all mt-5" src={vec2} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={rec} alt=""/>
                                <img className="rec-all mt-5" src={recOne} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="all_erc mt-3" src={vec} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={vec1} alt=""/>
                                <img className="rec-all mt-5" src={vec2} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={rec} alt=""/>
                                <img className="rec-all mt-5" src={recOne} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="all_erc mt-3" src={vec} alt=""/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="rec-all mt-3" src={rec} alt=""/>
                                <img className="rec-all mt-5" src={recOne} alt=""/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="keep  ">
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

export default Block;