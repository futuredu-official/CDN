function Div_main(props) {
	let data_accepted = Object.values(props.log).filter(it => it.active == 1)
	let data_rejected = Object.values(props.log).filter(it => it.active == 0)

	const accepted_List = Object.keys(data_accepted).map((btn_data) =>
		<tr class="bg-white border-b">
			<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
				<div class="flex flex-col justify-center items-center w-full">
					<div class="flex flex-col justify-center items-start w-full">
						<p class="text-xs">소속기관: {data_accepted[btn_data].team}</p>
						<p class="text-xs">신청일시: {data_accepted[btn_data].created_at}</p>
						<p class="text-xs">만료일시: {data_accepted[btn_data].expired_at + " 23:59:59"}</p>
						<p class="text-xs">MAC Address: {data_accepted[btn_data].mac_address}</p>
					</div>
					<article class="flex flex-wrap justify-center items-center w-full">
						<p class="bg-green-100 text-xs text-green-900 py-1 w-fit text-ellipsis">
							{data_accepted[btn_data].license_key}
						</p>
					</article>
				</div>
			</th>
		</tr>
	)

	const rejected_List = Object.keys(data_rejected).map((btn_data) =>
		<tr class="bg-white border-b">
			<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">

				<div class="flex flex-col justify-center items-start w-full">
					<p class="text-xs">소속기관: {data_rejected[btn_data].team}</p>
					<p class="text-xs">신청일시: {data_rejected[btn_data].created_at}</p>
				</div>
				<div class="flex flex-row justify-center items-center w-full">
					<p class="bg-red-100 text-red-900 px-2 py-1 rounded-xl cursor-pointer"
					   onClick={() => alert("입력한 시리얼 코드: " + data_rejected[btn_data].serial_code)}>
						{data_rejected[btn_data].status}
					</p>
				</div>
			</th>
		</tr>
	)

	return (
		<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
			<Div_header title={"진학지도 시스템"} subtitle={"라이센스 키 확인"} />
		
			<div class="flex flex-row justify-between items-center w-full p-4 border border-gray-300 rounded-xl">
				<div class="flex flex-col justify-center items-start">
					<p class="text-sm">소프트웨어를 다운로드하려면, 다운로드 버튼을 클릭하세요.</p>
					<p class="text-xs text-gray-500">* 최신 업데이트: MBTI, 진로흥미검사 메뉴 추가 등 (2024년 10월 25일)</p>
				</div>
				<button type="button"
						class="flex flex-row justify-center items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 font-medium rounded-lg text-sm px-5 py-1 text-center
							   hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
						onClick={
									props.role == "관리자" || props.role == "기관 회원"
									?   () => window.open('https://1drv.ms/u/s!AhXFJRBQU3K8h5ciwXcrZQLHZDKX7Q?e=XmJqBJ')
									:   () => alert("기관 회원으로 등록된 회원만 다운로드할 수 있습니다.")
								}>
					<img src="https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/download_white.svg" class="w-4 h-4 mr-2" />
					다운로드
				</button>
			</div>

			<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
				<p class="text-lg font-normal text-gray-500 lg:text-md pb-4">
					진학지도 시스템을 처음 실행할 때 나타나는 시리얼 코드를 입력하여 주세요.<br/><br/>
					시리얼 코드는 진학지도 시스템을 구매한 기관 회원에게만 제공됩니다.<br/>
					해당 계정이 기관 계정으로 등록되어 있지 않으면, 기관 등록을 진행해주세요.<br/>
					※ 라이센스 키를 한 번 발급받으면, 만료될 때까지 새로 발급받을 수 없습니다.
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

			<div class="grid grid-cols-3 justify-center items-start w-full gap-4 md:px-0 md:grid-cols-1">

				<div class="col-span-2 flex flex-col justify-center items-center w-full space-y-4 md:px-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-100 shadow rounded-lg">
						<thead class="text-md text-green-700 uppercase bg-green-50">
							<tr><th scope="col" class="px-6 py-3">라이센스 키 목록</th></tr>
						</thead>
						<tbody>
							{accepted_List}
						</tbody>
					</table>
				</div>

				<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-100 shadow rounded-lg">
						<thead class="text-md text-gray-700 uppercase bg-gray-50">
							<tr><th scope="col" class="px-6 py-3">신청 기록</th></tr>
						</thead>
						<tbody>
							{rejected_List}
						</tbody>
					</table>
				</div>
				
			</div>
		</div>
	)
}