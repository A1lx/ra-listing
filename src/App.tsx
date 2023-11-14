import './App.css'
import { Listing } from './components/Listing';
import {useState} from "react";



function App() {

  let [offers, setOffersList] = useState(getData);

  function getData() {
    fetch('./components/data/etsy.json').then(async response => {
      const data = await response.json();
      setOffersList(data);
    })
  }


  return (
    <>
      {console.log(offers)}
      {console.log(setOffersList)}
    </>
  )
}

export default App