import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, SetIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    SetIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
      
    }
    SetIsLoading(false)
  }
useEffect(() => {
  fetchTours()
}, [])

if(isLoading) {
  return (
    <main>
      <Loading />
    </main>
  )
  }
  // Todo

  return (
  <main>
    <Tours tours={tours}/>
  </main>
  )
};

export default App;