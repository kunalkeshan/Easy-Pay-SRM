import NextAuth from 'next-auth';

export const authOptions = {
	// Configure one or more authentication providers
	// TODO: https://next-auth.js.org/getting-started/example#deploying-to-production
	providers: [],
};

export default NextAuth(authOptions);
