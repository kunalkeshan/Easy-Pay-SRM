import React from 'react';
import Cards from '../layouts/Cards';


	const data = [{
		id: 0,
		head: 'Easy To use',
		para: 'We will make the payment with RFID',
	  }, {
		id: 1,
		head: 'Protected Payment',
		para: 'Payments are authenticated with password',
	  }, {
		id: 2,
		head: 'Around the campus',
		para: 'Use the system in and around the campus',
	  }];


const RetailFeatures = () => {

	const dataItems = data.map(item => {
		return <Cards key={item.id} head={item.head} para={item.para} />
	})

	


	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-7xl m-6'> <span className='text-blue-900'>Why</span> <span className='text-yellow-500'>choose us</span>  </h1>
			<div className='flex flex-row items-center '>
				{dataItems}
			</div>
		</div>
	)
};

export default RetailFeatures;
