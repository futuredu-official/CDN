function Div_result(props) {
	return (
		<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0 px-[360px] 
					border border-gray-100 shadow rounded-lg
					md:px-0">
			<p class="w-full text-start text-lg font-normal text-gray-900 lg:text-sm">
				- 라이센스 키: {props.license_key}
			</p>
			<p class="w-full text-start text-start text-lg font-normal text-gray-900 lg:text-sm">
				- 만료일: {props.expired_date}
			</p>
		</div>
	)
}