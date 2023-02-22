import React from 'react';

import Cards from '../layouts/Cards';


	const data = [{
		id: 0,
		head: 'Purchase on credit',
		para: 'Payment is done from the srm website. The money will be deducted from the initial credit of the site.',
	},
		{
			id: 1,
			head: 'Authentication through mobile',
			para: 'The user recieves an otp to confirm the transaction. Once the verification is done, the money will be deducted from the account.'
		},
		
		{
		id: 2,
		head: 'Pay later',
		para: 'All the credited funds should be paid by the student at the end of every month.',
	  }, {
		id: 3,
		head: 'Track transactions',
		para: 'Track all the transactions done through theb website',
		}, {
		id: 4,
		head: 'Easy payments in and around the campus',
		para:'Payments can be made in the stores in and around the whole campus'
	  }];


const StudentFeatures = () => {
	const dataItems = data.map(item => {
		return <Cards key={item.id} head={item.head} para={item.para} />
	})

	return (
		<div id='features'>
			<div className='flex flex-col items-center'>
			<h1 className='text-7xl m-6 text-blue-900'> Features</h1>
			<div className='flex flex-col items-start border-solid '>
				{dataItems}
			</div>
		</div>
		</div>
	)
};
export default StudentFeatures;
