import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default PublicLayout;
