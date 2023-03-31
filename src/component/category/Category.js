import React from 'react';
import "./category.css"

const Category = () => {
    return (
        <div id="category">
            <div className="container">
                <div className="d-flex">
                    <h6 className="name_of m-3">Главная</h6>
                    <div className="turbo"/>
                    <h6 className="name_of m-3">Название категории</h6>
                    <div className="turbo"/>
                    <h6 className="name_of m-3">PHP</h6>
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="consecrate">Lorem ipsum dolor sit <br/> amet consectetur</h4>
                    <div className="mt-2">
                        <div className="minim"/>
                        <button className="btn_one">Оставить заявку</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Category;