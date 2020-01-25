import React from "react";
import Component from "./index";
import {Consumer} from '../../store';
const index = (props) => {
    let {navigation} = props;
    return (
        <Consumer>
            {
                ({dispatch, id, user}) => (
                    <Component
                        id={id} user={user}
                        dispatch={dispatch}
                        navigation={navigation}
                    />
                )
            }
        </Consumer>
    )
};

export default index