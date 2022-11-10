import React, {useState, useEffect} from "react";
import axios from 'axios';
import BreedList from "./components/BreedList/BreedList.js";
import Tester from "./components/BreedList/test";

const url = 'https://dog.ceo/api/breeds/list'

function App(props){
const [dogBreeds, setDogBreeds] = useState([])
const [dogImage, setDogImage] = useState([])

// useEffect(() => {
//   axios.get(url)
//   .then((res) => {
//     setDogBreeds(res.data.message)
//   })
// },[])

useEffect(() => {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then((res) => {
    setDogImage(res.data.message)
    console.log(dogImage)
  })
},[])
  
  // const breedListOut = dogBreeds.map((breed) => <p key={breed}>{breed}</p>)

  return (
    <div>
    <BreedList dogBreeds = {dogBreeds}/>
    </div>
    
  );
}


export default App;
