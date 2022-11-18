import React, { useState, useEffect } from "react";
import axios from 'axios';
import BreedList from "./components/BreedList/BreedList.js";
import Tester from "./components/BreedList/test";
import RandomDogs from "./components/RandomDogs.js";

const url = 'https://dog.ceo/api/breeds/list'

function App(props) {
  const [dogBreeds, setDogBreeds] = useState([])
  // const [dogImage, setDogImage] = useState()
  // const [dogSearch, setDogSearch] = useState()

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setDogBreeds(res.data.message)
      })
  }, [])

  // async function getBreed(){
  //   const random = await axios.get('https://dog.ceo/api/breed/akita/images/random')
  //   setDogImage(random.data.message)
  //   console.log(dogImage)
  // }

  // const breedListOut = dogBreeds.map((breed) => <p key={breed}>{breed}</p>)

  return (
    <div>
      <BreedList dogBreeds={dogBreeds} />
      <RandomDogs />
    </div>

  );
}


export default App;
