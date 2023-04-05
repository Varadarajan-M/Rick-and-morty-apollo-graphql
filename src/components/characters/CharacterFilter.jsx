const CharacterFilter = ({
	appliedFilters,
	onFilterClick,
	type,
	values,
	filterClass,
	typeClass,
}) => {
	return (
		<section>
			<h4 className={typeClass}>{type}</h4>
			<div>
				{values.map((item) => (
					<span
						key={item.value}
						onClick={() => onFilterClick(item)}
						className={`${filterClass} ${
							appliedFilters[type.toLowerCase()] === item.value ? 'active' : ''
						}`}
					>
						{item.value}
					</span>
				))}
			</div>
		</section>
	);
};

export default CharacterFilter;
