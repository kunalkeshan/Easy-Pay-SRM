import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import Headroom from 'react-headroom';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Headroom>
				<Navbar />
			</Headroom>
			<main className='h-full w-full'>{children}</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
