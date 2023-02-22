import React from 'react';
import Image from 'next/image';

const Intro = () => {
	return (
		<section className='mt-10 flex w-full justify-center py-4 px-8'>
			<div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row'>
				<div className='flex w-full flex-col justify-center p-5 md:w-1/2'>
					<h1 className='font-primary text-6xl font-semibold'>
						<span className='whitespace-normal text-secondary md:whitespace-nowrap'>
							The hassle-free
						</span>{' '}
						<span className='whitespace-normal text-primary md:whitespace-nowrap'>
							way to pay
						</span>{' '}
					</h1>
					<h4 className='mt-4 text-2xl'>
						Meet new payment platform for transactions in and around
						the campus.
					</h4>
					<button className='btn mt-8 w-full md:w-fit'>
						Register now
					</button>
				</div>
				<div className='flex w-full items-center justify-center md:w-1/2'>
					<div className='w-full max-w-[16rem] animate-float drop-shadow-2xl'>
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
		</section>
	);
};

export default Intro;
