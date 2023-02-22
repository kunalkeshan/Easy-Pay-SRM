import Intro from '@/components/landing/Intro';
import PublicLayout from '@/layouts/PublicLayout';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Easy Pay SRM</title>
			</Head>
			<PublicLayout>
				<Intro />
			</PublicLayout>
		</>
	);
}
