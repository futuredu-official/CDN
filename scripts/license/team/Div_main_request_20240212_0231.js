function Div_main_request(props) {
	function Div_request(props) {
		return (
			<div class="flex flex-col justify-center items-center w-full px-[360px] space-y-4 md:px-0">
				<div class="flex flex-row justify-start items-center w-full">
					<p class="text-md font-extrabold underline">소속 신청</p>
				</div>

				<span class="font-[500] text-[14px] w-full text-start">
					소속
				</span>

				<select multiple id="sel_affiliation"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
					<option value="3f2c9e60-0e27-4468-8df1-35c323ae26bd" selected >세종과학예술영재학교</option>
					<option value="9f4c754d-f7fa-4e5c-9d2f-59834aac47c5">광주과학고등학교</option>
					<option value="074b5df1-4fcd-483d-b54f-77dc4fc6c78c">인천과학예술영재학교</option>
				</select>

				<span class="font-[500] text-[14px] w-full text-start">
					이름 (본인 확인을 위해 본명으로 입력해주세요.)
				</span>

				<input type="text" id="txt_name" name="txt_name" value={props.name}
						class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 
								block flex-1 min-w-0 w-full text-sm p-2.5
								focus:ring-blue-500 focus:border-blue-500" 
						placeholder="이름" />
	
				<div id="div_result" class="hidden"></div>
	
				<div id="div_button">
					<Div_btn_submit />
				</div>
			</div>
		)
	}

	return (
		<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
			<Div_header title={"기관 계정으로 등록"} />
		
			<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
				<p class="text-lg font-normal text-gray-500 lg:text-md pb-4">
					귀하의 소속 기관이 이미 FuturEdu 서비스를 선택했다면, 기관 회원으로 전환하여 FuturEdu의 서비스를 경험해 보세요.<br/>
					신청 접수 후 1영업일 이내에 관리자가 귀하의 요청을 검토하고, 기관 회원으로의 전환을 완료해 드릴 예정입니다.
				</p>
			</div>

			<Div_request name={props.data.status.name} />
			<Div_main_log_personal log={props.data.log} />
		</div>
	)
}