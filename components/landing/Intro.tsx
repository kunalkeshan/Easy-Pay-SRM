import React from 'react';
import Image from 'next/image';

const Intro = () => {
	return (
		<section className='mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-8 py-4 px-8 md:grid-cols-2'>
			<div className='flex w-full flex-col justify-center p-5'>
				<h1 className='font-primary text-3xl font-semibold md:text-6xl'>
					<span className='whitespace-normal text-secondary md:whitespace-nowrap'>
						The hassle-free
					</span>{' '}
					<span className='whitespace-normal text-primary md:whitespace-nowrap'>
						way to pay
					</span>
				</h1>
				<h4 className='mt-4 text-lg md:text-2xl'>
					Meet new payment platform for transactions in and around the
					campus.
				</h4>
				<button className='btn mt-8 w-full md:w-fit'>
					Register now
				</button>
			</div>
			<div className='flex w-full items-center justify-center'>
				<div className='w-full max-w-[16rem] animate-float drop-shadow-2xl'>
					<Image
						src='/assets/srm-id-card.png'
						alt='id-card'
						width={300}
						height={300}
						className='h-auto w-full object-contain transition-all duration-300 hover:translate-x-2 hover:-skew-x-3'
					/>
				</div>
			</div>
		</section>
	);
};

export default Intro;
