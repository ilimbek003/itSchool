import React from 'react';
import Category from "../component/category/Category";
import About from "../component/About/About";
import Details from "../component/Details/Details";
import Content from "../component/content/Content";
import Block from "../component/block/block";
const Import = () => {
    return (
        <div>
            <Category/>
            <About/>
            <Details/>
            <Content/>
            <Block/>
        </div>
    );
};

export default Import;