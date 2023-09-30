import React from "react";
import './style.css';
import Header from "./Header";
import BaristaImg from "./BaristaImg";
import Recipes from "./Recipes";

export default function Home () {
    return(
        <>
            <Header/>
            <BaristaImg/>
            <Recipes/>
        </>
)};