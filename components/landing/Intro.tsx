import React from 'react';
import Image from 'next/image'


const Intro = () => {
	return (
		<div className="flex">
			<div className="w-1/2 flex flex-col p-5  justify-center">
				<h1 className='text-7xl m-6'> <span className='text-blue-900'>The hassle-free</span> <span className='text-yellow-500'>way to pay</span>  </h1>
				<h4 className='text-2xl m-6'>Meet new payment platform for transactions in and around the campus.</h4>
				<button>Register now</button>
			</div>
			<div className='w-1/2 flex justify-center'>

				<Image
					src="/assets/srm-id-card.png"
					sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
					alt="id-card"
					width={300}
					height={300}
					
				/>

			</div>

		</div>

	)
};

export default Intro;
