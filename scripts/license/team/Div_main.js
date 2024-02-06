function Div_main() {
	return (
		<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
			<Div_header title={"서류평가 시스템"} subtitle={"라이센스 키 확인"} />
		
			<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
				<p class="text-lg font-normal text-gray-500 lg:text-md pb-4">
					서류평가 시스템을 처음 실행할 때 나타나는 시리얼 코드를 입력하여 주세요.<br/><br/>
					시리얼 코드는 서류평가 시스템을 구매한 기관 회원에게만 제공됩니다.<br/>
					해당 계정이 기관 계정으로 등록되어 있지 않으면, 기관 등록을 진행해주세요.
				</p>
			</div>

			<div class="flex flex-col justify-center items-center px-[360px] space-y-4 md:px-0">
				<input type="text" id="txt_serial_code" name="txt_serial_code"
						class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 
								block flex-1 min-w-0 w-full text-sm p-2.5
								focus:ring-blue-500 focus:border-blue-500" 
						placeholder="Serial Code" />
	
				<div id="div_result" class="hidden"></div>
	
				<div id="div_button">
					<Div_btn_submit />
				</div>
			</div>
		</div>
	)
}