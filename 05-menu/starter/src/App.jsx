import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all',...tempSet]
// console.log(tempItems); same as below code

const allCategories = ['all',...new Set(menu.map((item) => item.category))]

const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
  const [categories, newCategories] = useState(allCategories)
  console.log(categories);
	return (
		<main>
			<section className="menu">
				<Title text="our menu" />
        <Categories categories={categories}/>		
				<Menu items={menuItems} />
      	</section>
		</main>
	);
};
export default App;
