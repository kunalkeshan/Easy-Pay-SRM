import Intro from '@/components/landing/Intro';
import RetailFeatures from '@/components/landing/RetailFeatures';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<Intro />
				<RetailFeatures/>
			</Head>
		</>
	);
}
