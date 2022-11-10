import React, {useState} from "react";
import App from "../../App";



function BreedList(props){
  let dogBreeds = props.dogBreeds
  console.log(dogBreeds)
  const [breeds, setBreeds] = useState()

  const HandleBreedList = (e) => {
    e.preventDefault()
    
    setBreeds(dogBreeds?.map((breed,id) => {
      console.log(breed)
      return(<p key={id}>{breed}</p>)
    }))
    // dogBreeds.map((breed) => console.log(breed))
    // console.log('dogBreeds')
    // console.log(dogBreeds)
  }
  

  return (
    <div>
       <button onClick={HandleBreedList}>Show Breeds</button>
       {breeds}
    </div>
   
  )
}

export default BreedList