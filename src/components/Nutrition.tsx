const Nutrition = () => {
	const nutrition: { label: string; value: string }[] = [
		{ label: 'Calories', value: '277kcal' },
		{ label: 'Carbs', value: '0g' },
		{ label: 'Protein', value: '20g' },
		{ label: 'Fat', value: '22g' },
	];

	return (
		<section className='mb-8 tablet:mb-0'>
			<h2 className='text-[1.75rem] font-young-serif text-brown-800 mb-6'>Nutrition</h2>
			<p className='font-outfit text-stone-600 mb-6'>
				The table below shows nutritional values per serving without the additional fillings.
			</p>
			<div className='flex flex-col gap-2'>
				{nutrition.map((item: { label: string; value: string }, index: number) => {
					return (
						<div key={index} className='flex pb-2 border-b border-stone-150'>
							<div className='w-full'>
								<p className='font-outfit text-stone-600 pl-6'>{item.label}</p>
							</div>
							<div className='w-full'>
								<strong className='font-outfit text-brown-800'>{item.value}</strong>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Nutrition;
