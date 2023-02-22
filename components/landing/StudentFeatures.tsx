import React from 'react';

import Cards from '../reusable/Cards';

const data = [
	{
		id: 0,
		head: 'Purchase on credit',
		para: 'Payment is done from the srm website. The money will be deducted from the initial credit of the site.',
	},
	{
		id: 1,
		head: 'Authentication through mobile',
		para: 'The user recieves an otp to confirm the transaction. Once the verification is done, the money will be deducted from the account.',
	},

	{
		id: 2,
		head: 'Pay later',
		para: 'All the credited funds should be paid by the student at the end of every month.',
	},
	{
		id: 3,
		head: 'Track transactions',
		para: 'Track all the transactions done through theb website',
	},
	{
		id: 4,
		head: 'Easy payments in and around the campus',
		para: 'Payments can be made in the stores in and around the whole campus',
	},
];

const StudentFeatures = () => {
	const dataItems = data.map((item) => {
		return <Cards key={item.id} head={item.head} para={item.para} />;
	});

	return (
		<section
			className='mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 place-items-center gap-8 py-4 px-8'
			id='features'
		>
			<h1 className='text-3xl md:text-6xl'>
				<span className='text-secondary'>Student</span>{' '}
				<span className='text-primary'>Privileges</span>
			</h1>
			<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-3'>
				{dataItems}
			</div>
		</section>
	);
};
export default StudentFeatures;
