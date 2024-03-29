import { useState } from "react";
import data from "./data.js";
import Questions from "./Questions.jsx";

const App = () => {
	const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    console.log(id);
  }
	return (
		<main>
			<Questions questions={questions} />
		</main>
	);
};

export default App;
