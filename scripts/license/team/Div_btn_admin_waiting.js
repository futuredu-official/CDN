function Div_btn_admin_waiting(props) {
	return (
		<div class="flex flex-row justify-start items-center w-full space-x-2">
			<button type="button"
					class="text-white bg-green-700 font-medium rounded-lg text-xs px-2 py-1
							hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none"
					onClick={() => click_btn_admin_waiting_accept(props.uuid)}>
				승인
			</button>
			<button type="button"
					class="text-white bg-red-700 font-medium rounded-lg text-xs px-2 py-1
							hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
					onClick={() => click_btn_admin_waiting_decline(props.uuid)}>
				거절
			</button>
		</div>
	)
}