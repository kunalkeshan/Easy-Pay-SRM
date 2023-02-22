interface Props {
	head: string;
	para: string;
}
export default function Cards(props: Props) {
	return (
		<div className='group rounded-xl border border-secondary px-4 py-8 transition-all duration-300 hover:bg-secondary'>
			<div className='border-black'>
				<h1 className='font-primary text-2xl font-medium text-primary md:text-4xl'>
					{props.head}
				</h1>
				<p className='mt-6 text-base text-black transition-all duration-300 group-hover:text-white md:text-xl'>
					{props.para}
				</p>
			</div>
		</div>
	);
}
