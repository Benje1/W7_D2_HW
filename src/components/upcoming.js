import React, {useState} from "react";

const Upcoming = ({name, children}) => {

    return(<>
    <ul>
        <a href={children}>{name}</a>
        </ul>
    </>)
}

export default Upcoming

