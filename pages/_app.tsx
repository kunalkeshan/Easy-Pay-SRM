import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Montserrat, Source_Sans_Pro } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	variable: '--font-montserrat',
});

const sourceSansPro = Source_Sans_Pro({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600', '700', '900'],
	style: ['normal', 'italic'],
	variable: '--font-sourceSansPro',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${montserrat.variable} ${sourceSansPro.variable} font-secondary min-h-screen w-full`}
		>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</main>
	);
}
