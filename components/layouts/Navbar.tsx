import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
	const [open, setOpen] = useState(false);
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
		<nav className='relative z-50 w-full py-4 px-8 font-secondary'>
			<div className='z-10 mx-auto flex w-full max-w-6xl items-center justify-between bg-[#f2f2f2]'>
				<Link href='/' className='text-3xl font-semibold'>
					easypay
				</Link>
				<ul className='hidden gap-8 font-primary md:flex'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='transition-all duration-300 hover:font-semibold'
						>
							<Link href={option.url}>{option.page}</Link>
						</li>
					))}
				</ul>
				<div className='hidden items-center gap-4 md:flex'>
					<button className='btn'>Login</button>
					<button className='btn border-none border-primary hover:!border hover:!bg-transparent hover:text-primary'>
						Register now
					</button>
				</div>
				<button
					onClick={() => setOpen(!open)}
					className='block rounded-xl p-1 text-2xl font-bold md:hidden'
				>
					{!open ? <RxHamburgerMenu /> : <GrClose />}
				</button>
			</div>
			<div
				className={`${
					open ? 'top-20' : '-top-[500%]'
				} absolute -z-10 block bg-[#f2f2f2] transition-all duration-300 md:hidden`}
			>
				<ul className='flex flex-col gap-4 font-primary text-lg'>
					{navOptions.map((option, index) => (
						<li key={index} className='active:font-semibold'>
							<Link href={option.url}>{option.page}</Link>
						</li>
					))}
				</ul>
				<div className='mt-4 flex w-full items-center gap-4'>
					<button className='btn w-full'>Login</button>
					<button className='btn w-full whitespace-nowrap border-none border-primary hover:!border hover:!bg-transparent hover:text-primary'>
						Register now
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
