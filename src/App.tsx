import React from 'react';
import RecipeTitle from './components/RecipeTitle';
import Description from './components/Description';
import PreparationTime from './components/PreparationTime';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';
import recipeImage from './assets/images/image-omelette.jpeg';
import './App.css';

const App: React.FC = () => {
	return (
		<main className='bg-white max-w-[736px] mx-auto tablet:px-10 tablet:py-10 tablet:my-32 tablet:rounded-3xl'>
			<div>
				<img
					className='mb-8 tablet:rounded-xl max-h-[300px] object-cover w-full'
					src={recipeImage}
					alt='A delicious omelette'
				/>
				<div className='px-8 tablet:px-0 flex flex-col gap-8'>
					<RecipeTitle />
					<Description />
					<PreparationTime />
					<Ingredients />
					<Instructions />
					<Nutrition />
				</div>
			</div>
		</main>
	);
};

export default App;
