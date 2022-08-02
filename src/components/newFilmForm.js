import React, {useState} from "react";

const FilmForm = ({onFilmSubmit}) =>{

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value)
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        const urlToSubmit = url.trim();
        const nameToSubmit = name.trim();
        if (!urlToSubmit || !nameToSubmit){
            return
        }

        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        })

        setName("")
        setUrl("")
    }

    return(
        <>
        <form className="film-form" onSubmit={handleSubmitForm}>
            <input type='text' placeholder="Enter film name" value={name} onChange={handleNameChange}/>
            <input type='text' placeholder="Enter URL" value={url} onChange={handleUrlChange}/>
            <input type='submit' value='post' />

        </form>
        </>
    )


}

export default FilmForm