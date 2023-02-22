import React from 'react';
import Cards from '../reusable/Cards';

const data = [
	{
		head: 'Easy To use',
		para: 'We will make the payment with RFID',
	},
	{
		head: 'Protected Payment',
		para: 'Payments are authenticated with password',
	},
	{
		head: 'Around the campus',
		para: 'Use the system in and around the campus',
	},
];

const About = () => {
	const dataItems = data.map((item, index) => {
		return <Cards key={index} {...item} />;
	});

	return (
		<section
			className='mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 place-items-center gap-8 py-4 px-8'
			id='about'
		>
			<h1 className='text-3xl md:text-6xl'>
				<span className='text-secondary'>Why</span>{' '}
				<span className='text-primary'>choose us?</span>
			</h1>
			<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-3'>
				{dataItems}
			</div>
		</section>
	);
};

export default About;
