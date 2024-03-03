import {useState} from 'react';
import data from './data.js';

const App = () => {
const [questions, setQuestions] = useState(data)
return ( <main>
  <Questions questions = {questions} />
</main>
)
}



export default App;
