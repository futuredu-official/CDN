function Div_main_admin(props) {
	function Div_log(props) {
		let data_waiting = Object.values(props.log).filter(it => it.active == -1)
		let data_accepted = Object.values(props.log).filter(it => it.active == 1)
		let data_rejected = Object.values(props.log).filter(it => it.active == 0)

		const waiting_List = Object.keys(data_waiting).map((btn_data) =>
			<tr class="bg-white border-b">
				<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					<p class="text-md">
						{data_waiting[btn_data].realname} / {data_waiting[btn_data].user}
					</p>
					<p class="text-md font-extrabold">
						{data_waiting[btn_data].team}
					</p>

					<div class="flex flex-row justify-start items-center w-full space-x-4">
						<p class="text-xs">신청일시: {data_waiting[btn_data].created_at}</p>
						<p class="bg-gray-100 text-gray-900 px-2 py-1 rounded-xl">
							대기중
						</p>
					</div>

					<div id={"div_btn_admin_waiting_" + data_waiting[btn_data].uuid}>
						<Div_btn_admin_waiting uuid={data_waiting[btn_data].uuid} />
					</div>
				</th>
			</tr>
		)

		const accepted_List = Object.keys(data_accepted).map((btn_data) =>
			<tr class="bg-white border-b">
				<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					<p class="text-md">
						{data_accepted[btn_data].realname} / {data_accepted[btn_data].user}
					</p>
					<p class="text-md font-extrabold">
						{data_accepted[btn_data].team}
					</p>

					<div class="flex flex-between justify-start items-center w-full space-x-4">
						<div>
							<p class="text-xs">신청일시: {data_accepted[btn_data].created_at}</p>
							<p class="text-xs">처리일시: {data_rejected[btn_data].updated_at}</p>
						</div>
						<div class="flex flex-row justify-center items-center w-full">
							<p class="bg-green-100 text-green-900 px-2 py-1 rounded-xl">
								승인
							</p>
						</div>
					</div>

					<div id={"div_btn_admin_accepted_" + data_accepted[btn_data].uuid}>
						{
							data_accepted[btn_data].role != "관리자"
							?   <Div_btn_admin_accepted uuid={data_accepted[btn_data].uuid} />
							:   ""
						}                            
					</div>
				</th>
			</tr>
		)

		const rejected_List = Object.keys(data_rejected).map((btn_data) =>
			<tr class="bg-white border-b">
				<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					<p class="text-md">
						{data_rejected[btn_data].realname} / {data_rejected[btn_data].user}
					</p>
					<p class="text-md font-extrabold">
						{data_rejected[btn_data].team}
					</p>

					
					<div class="flex flex-between justify-start items-center w-full space-x-4">
						<div>
							<p class="text-xs">신청일시: {data_rejected[btn_data].created_at}</p>
							<p class="text-xs">처리일시: {data_rejected[btn_data].updated_at}</p>
						</div>
						<div class="flex flex-row justify-center items-center w-full">
							{
								data_rejected[btn_data].status == "CANCELED"
								?   <p class="bg-gray-100 text-gray-900 px-2 py-1 rounded-xl">
										취소
									</p>
								:   ""
							}
							{
								data_rejected[btn_data].status == "REJECTED"
								?   <p class="bg-gray-100 text-gray-900 px-2 py-1 rounded-xl">
										거절
									</p>
								:   ""
							}
							{
								data_rejected[btn_data].status == "DELETED"
								?   <p class="bg-gray-100 text-gray-900 px-2 py-1 rounded-xl">
										제거됨
									</p>
								:   ""
							}
						</div>
					</div>
				</th>
			</tr>
		)

		return (
			<div class="grid grid-cols-3 justify-center items-start w-full gap-4 md:grid-cols-1">
				<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-100 shadow rounded-lg">
						<thead class="text-md text-gray-700 uppercase bg-gray-50">
							<tr><th scope="col" class="px-6 py-3">대기 목록</th></tr>
						</thead>
						<tbody>
							{waiting_List}
						</tbody>
					</table>
				</div>

				<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-100 shadow rounded-lg">
						<thead class="text-md text-gray-700 uppercase bg-gray-50">
							<tr><th scope="col" class="px-6 py-3">승인 목록</th></tr>
						</thead>
						<tbody>
							{accepted_List}
						</tbody>
					</table>
				</div>

				<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-100 shadow rounded-lg">
						<thead class="text-md text-gray-700 uppercase bg-gray-50">
							<tr><th scope="col" class="px-6 py-3">거절/취소 목록</th></tr>
						</thead>
						<tbody>
							{rejected_List}
						</tbody>
					</table>
				</div>
			</div>
		)
	}


	return (
		<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
			<Div_header title={"기관 계정으로 등록"} />
		
			<div class="flex flex-col justify-center items-center w-full space-y-4 md:px-0">
				<p class="text-lg font-normal text-gray-900 lg:text-md pb-4">
					귀하는 관리자 회원이므로, 기관 계정 등록이 필요하지 않습니다.<br/>
					기관 계정 등록 신청을 한 회원들을 관리해주세요.
				</p>
			</div>

			<Div_log log={props.data.log} />
		</div>
	)
}