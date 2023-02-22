import React from 'react';
import Image from 'next/image';

const Intro = () => {
	return (
		<div className='flex min-h-screen w-full'>
			<div className='flex w-1/2 flex-col justify-center p-5'>
				<h1 className='m-6 text-7xl'>
					{' '}
					<span className='text-blue-900'>The hassle-free</span>{' '}
					<span className='text-yellow-500'>way to pay</span>{' '}
				</h1>
				<h4 className='m-6 text-2xl'>
					Meet new payment platform for transactions in and around the
					campus.
				</h4>
				<button>Register now</button>
			</div>
			<div className='flex w-1/2 justify-center'>
				<div className='w-full max-w-sm'>
					<Image
						src='/assets/srm-id-card.png'
						alt='id-card'
						width={300}
						height={300}
						className='h-auto w-full object-contain'
					/>
				</div>
			</div>
		</div>
	);
};

export default Intro;
