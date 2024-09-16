import React from 'react';

const instructions: { label: string; description: string }[] = [
	{
		label: 'Beat the eggs:',
		description:
			'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
	},
	{
		label: 'Heat the Pan:',
		description: 'Place a non-stick frying pan over medium heat and add butter or oil.',
	},
	{
		label: 'Cook the omelette:',
		description:
			'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
	},
	{
		label: 'Add fillings (optional):',
		description:
			'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
	},
	{
		label: 'Fold and serve:',
		description:
			'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
	},
	{
		label: 'Enjoy:',
		description: 'Serve hot, with additional salt and pepper if needed.',
	},
];

const Instructions: React.FC = () => {
	return (
		<section className='pb-6 border-b border-stone-150'>
			<h2 className='text-[1.75rem] font-young-serif text-brown-800 mb-6'>Instructions</h2>
			<ol className='font-outfit list-decimal list-inside marker:text-brown-800 [&_li]:marker:font-extrabold marker:font-sans flex flex-col gap-2'>
				{instructions.map((instruction: { label: string; description: string }, index: number) => (
					<div key={index} className='flex gap-4'>
						<li className='ml-2'></li>
						<span className='text-stone-600 ml-2'>
							<strong>{instruction.label}</strong> {instruction.description}
						</span>
					</div>
				))}
			</ol>
		</section>
	);
};

export default Instructions;
