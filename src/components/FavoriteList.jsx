import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Character from "./Character";
import Empty from "./Empty";

const FavoriteList = (props) => {
    const { favoriteCharacters } = props;

    return(
        
    );

};

//native react-redux functions vs hoots: UseSelect & UseDispatch
const mapStateToprops = (state) => {
    return{
        favoriteCharacters: state.favoriteCharacters,
    };
}
export default connect(mapStateToprops, null)(FavoriteList);
