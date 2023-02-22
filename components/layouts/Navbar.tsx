import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	const navOptions = [
		{
			page: 'Home',
			url: '/',
		},
		{
			page: 'Features',
			url: '/#features',
		},
	];

	return (
		<nav className='w-full py-4 px-8 font-secondary'>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between'>
				<Link href='/' className='text-3xl font-semibold'>
					easypay
				</Link>
				<ul className='flex gap-8 font-primary'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='transition-all duration-300 hover:font-semibold'
						>
							<Link href={option.url}>{option.page}</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center gap-4'>
					<button className='btn'>Login</button>
					<button className='btn border-none border-primary hover:!border hover:!bg-transparent hover:text-primary'>
						Register now
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
