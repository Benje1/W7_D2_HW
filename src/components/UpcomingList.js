import React, {useState} from "react";
import Upcoming from "./upcoming";

const UpcomingList = ({UpcomingFilmsList}) => {

    const filmNodes = UpcomingFilmsList.map( UpcomingFilms => {
        return(
        <Upcoming name={UpcomingFilms.name} key={UpcomingFilms.id}>{UpcomingFilms.url}</Upcoming>
    )})
    
    return (
    <>
        {filmNodes}
    </>)
}

export default UpcomingList;