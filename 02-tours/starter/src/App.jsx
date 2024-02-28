import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, SetIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

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
  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={fetchTours}>
refresh
        </button>
      </div>
    </main>
  }

  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  )
};

export default App;
