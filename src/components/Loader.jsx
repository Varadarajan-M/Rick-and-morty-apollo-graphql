const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div className='lds-dual-ring'></div>;
		</div>
	);
};
export default Loader;
