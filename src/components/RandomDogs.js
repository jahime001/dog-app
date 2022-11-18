
import { getSuggestedQuery } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";




function RandomDogs(props) {
    let dogSearch = props.dogSearch
    const [dogImage, setDogImage] = useState()
    const [query, setQuery] = useState('')

    async function getBreed() {
        const random = await axios.get(`https://dog.ceo/api/breed/${query}/images/random`)
        setDogImage(random.data.message)
        console.log(dogImage)
    }



    return (
        <>
            <form>
                <input type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <button onClick={getBreed}>Random-Image</button>
            <img src={dogImage} alt="" />
        </>

    )
}


export default RandomDogs