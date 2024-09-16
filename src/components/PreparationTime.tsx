const PreparationTime = () => {
	const preparationTimeSteps: { label: string; time: string }[] = [
		{
			label: 'Total',
			time: 'Approximately 10 minutes',
		},
		{
			label: 'Preparation',
			time: '5 minutes',
		},
		{
			label: 'Cooking',
			time: '5 minutes',
		},
	];

	return (
		<section className='flex flex-col gap-4 p-6 bg-rose-50 rounded-xl'>
			<strong className='text-xl text-rose-800'>Preparation Time</strong>
			<ul className='font-outfit flex flex-col gap-2 list-disc list-inside marker:text-rose-800'>
				{preparationTimeSteps.map((step: { label: string; time: string }, index: number) => {
					return (
						<div key={index} className='flex gap-4'>
							<li className='ml-2'></li>
							<span className='text-stone-600 text-left'>
								<strong>{step.label}</strong> {step.time}
							</span>
						</div>
					);
				})}
			</ul>
		</section>
	);
};

export default PreparationTime;
