function Div_main_institution(props) {
	function Div_info(props) {
		return (
			<div class="flex flex-col justify-center items-center w-full px-[360px] space-y-2
						md:px-0">
				<p class="font-[500] text-[14px] w-full text-start">
					<span class="font-extrabold">소속:</span> {props.data.status.team}
				</p>

				<p class="font-[500] text-[14px] w-full text-start">
					<span class="font-extrabold">이름 (본인 확인용):</span> {props.data.status.name}
				</p>

				<p class="font-[500] text-[14px] w-full text-start">
					<span class="font-extrabold">신청일시:</span> {props.data.log['0'].created_at}
				</p>

				<p class="font-[500] text-[14px] w-full text-start">
					<span class="font-extrabold">처리일시:</span> {props.data.log['0'].updated_at}
				</p>
			</div>
		)
	}


	return (
		<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
			<Div_header title={"기관 계정으로 등록"} />
		
			<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
				<p class="text-lg font-normal text-gray-900 lg:text-md pb-4">
					"귀하는 기관 회원으로 등록되었습니다."
				</p>
			</div>

			<Div_info data={props.data} />
			<Div_main_log_personal log={props.data.log} />
		</div>
	)
}
