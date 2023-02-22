import React from 'react';
import Head from 'next/head';
import PublicLayout from '@/layouts/PublicLayout';

const StudentRegisterPage = () => {
	return (
		<>
			<Head>
				<title>Student Registration</title>
			</Head>
			<PublicLayout>
				<section className='mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-8 py-4 px-8 md:grid-cols-2'>
					<div className='w-full'>
						<h1 className='font-primary text-3xl font-medium md:text-6xl'>
							<span className='text-secondary'>
								Join the hassle-free
							</span>{' '}
							<span className='text-primary'>
								payment system for students
							</span>
						</h1>
						<p className='mt-4 text-lg md:text-2xl'>
							Sign up for Easypay SRM to make purchases at
							affiliated stores without worrying about carrying
							cash or cards.
						</p>
					</div>
					<div className='flex w-full items-center justify-center'>
						<form className='grid w-full grid-cols-1 gap-6 px-4'>
							<input
								type='text'
								required
								className='input'
								placeholder='Name'
							/>
							<input
								type='email'
								required
								className='input'
								placeholder='College email'
							/>
							<input
								type='number'
								required
								className='input'
								placeholder='Phone no.'
							/>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
								<input
									type='text'
									required
									className='input'
									placeholder='Branch'
								/>
								<input
									type='text'
									required
									className='input'
									placeholder='Register Number'
								/>
							</div>
							<input
								type='password'
								required
								className='input'
								placeholder='Password'
							/>
							<button
								type='submit'
								className='btn w-full md:w-fit'
							>
								Register
							</button>
						</form>
					</div>
				</section>
			</PublicLayout>
		</>
	);
};

export default StudentRegisterPage;
