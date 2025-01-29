function Div_heading(props) {
	return (
		<h2 class="flex flex-row justify-start items-center mb-2 text-xl font-semibold text-gray-900 px-2 py-4 rounded-lg border-2 border-gray-200 shadow cursor-pointer
				   hover:bg-blue-100"
			onClick={props.function}>
			<img src="https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/heading.svg" class="flex-shrink-0 mr-2 size-5" />
			{props.title}
		</h2>
	)
}