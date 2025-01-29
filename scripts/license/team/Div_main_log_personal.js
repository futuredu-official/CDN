function Div_main_log_personal(props) {
	const request_List = Object.keys(props.log).map((btn_data) =>                    
		<tr class="bg-white border-b">
			<th scope="row" class="flex flex-col px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
				<p class="text-md font-extrabold">{props.log[btn_data].team}</p>
				{
					props.log[btn_data].active == 0 && props.log[btn_data].status == "CANCELED"
					?   <div class="flex flex-between justify-start items-center w-full space-x-4">
							<div>
								<p class="text-xs">신청일시: {props.log[btn_data].created_at}</p>
								<p class="text-xs">처리일시: {props.log[btn_data].updated_at}</p>
							</div>
							<div class="flex flex-row justify-center items-center w-full">
								<p class="bg-red-100 text-red-900 px-2 py-1 rounded-xl">
									취소
								</p>
							</div>
						</div>
					:   ""
				}
				{
					props.log[btn_data].active == 0 && props.log[btn_data].status == "REJECTED"
					?   <div class="flex flex-between justify-start items-center w-full space-x-4">
							<div>
								<p class="text-xs">신청일시: {props.log[btn_data].created_at}</p>
								<p class="text-xs">처리일시: {props.log[btn_data].updated_at}</p>
							</div>
							<div class="flex flex-row justify-center items-center w-full">
								<p class="bg-red-100 text-red-900 px-2 py-1 rounded-xl">
									거절
								</p>
							</div>
						</div>
					:   ""
				}
				{
					props.log[btn_data].active == 0 && props.log[btn_data].status == "DELETED"
					?   <div class="flex flex-between justify-start items-center w-full space-x-4">
							<div>
								<p class="text-xs">신청일시: {props.log[btn_data].created_at}</p>
								<p class="text-xs">처리일시: {props.log[btn_data].updated_at}</p>
							</div>
							<div class="flex flex-row justify-center items-center w-full">
								<p class="bg-red-100 text-red-900 px-2 py-1 rounded-xl">
									삭제됨
								</p>
							</div>
						</div>
					:   ""
				}
				{
					props.log[btn_data].active == -1
					?   <div class="flex flex-between justify-start items-center w-full space-x-4">
							<div>
								<p class="text-xs">신청일시: {props.log[btn_data].created_at}</p>
							</div>
							<div class="flex flex-row justify-center items-center w-full">
								<p class="bg-gray-100 text-gray-900 px-2 py-1 rounded-xl">
									대기중
								</p>
							</div>
						</div>
					:   ""
				}
				{
					props.log[btn_data].active == 1
					?   <div class="flex flex-between justify-start items-center w-full space-x-4">
							<div>
								<p class="text-xs">신청일시: {props.log[btn_data].created_at}</p>
								<p class="text-xs">처리일시: {props.log[btn_data].updated_at}</p>
							</div>
							<div class="flex flex-row justify-center items-center w-full">
								<p class="bg-green-100 text-green-900 px-2 py-1 rounded-xl">
									승인
								</p>
							</div>
						</div>
					:   ""
				}
			</th>
		</tr>
	)

	return (
		<div class="flex flex-col justify-center items-center w-full px-[360px] space-y-4 md:px-0">
			<div class="flex flex-row justify-start items-center w-full">
				<p class="text-md font-extrabold underline">신청 내역</p>
			</div>


			<table class="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3">
							신청 내역
						</th>
					</tr>
				</thead>
				<tbody>
					{request_List}
				</tbody>
			</table>
		</div>
	)
}