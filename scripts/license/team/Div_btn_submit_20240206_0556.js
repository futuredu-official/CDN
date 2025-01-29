function Div_btn_submit() {
	return (
		<button type="button" id="btn_submit" name="btn_submit"
				class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
					hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 "
				onClick={() => click_btn_submit()}>
			기관회원 신청
		</button>
	)
}