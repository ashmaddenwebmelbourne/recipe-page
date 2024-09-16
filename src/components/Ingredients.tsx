const Ingredients = () => {
	const ingredients: string[] = [
		'2-3 large eggs',
		'Salt, to taste',
		'1 tablespoon of butter or oil',
		'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
	];

	return (
		<section className='pb-6 border-b border-stone-150'>
			<h2 className='text-[1.75rem] font-young-serif text-brown-800 mb-6'>Ingredients</h2>
			<ul className='font-outfit list-disc list-inside marker:text-brown-800 flex flex-col gap-2'>
				{ingredients.map((ingredient, index) => {
					return (
						<div key={index} className='flex gap-4'>
							<li className='ml-2'></li>
							<span className='text-stone-600'>{ingredient}</span>
						</div>
					);
				})}
			</ul>
		</section>
	);
};

export default Ingredients;
