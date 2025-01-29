function Div_header(props) {
	return (
		<h2 class="text-4xl font-extrabold">
			<span class="underline underline-offset-3 decoration-8 decoration-blue-400">{props.title}</span>
			{
				props.subtitle != null
				?	<span class="ml-4 text-xl font-normal">{props.subtitle}</span>
				:	""
			}
		</h2>
	)
}