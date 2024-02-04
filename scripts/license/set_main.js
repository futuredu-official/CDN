function set_main() {
	function Div_main_false() {
		return (
			<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
				<Div_header />
	
				<div class="flex flex-col justify-center items-center px-[360px] space-y-4 md:px-0">
					<p class="text-lg font-normal text-gray-500 lg:text-md py-12">
						로그인이 필요합니다.
					</p>
				</div>
			</div>
		)
	}

	if (gv_username == "") {
		ReactDOM.render(<Div_main_false />, document.getElementById("div_main"))

	} else {
		ReactDOM.render(<Div_main />, document.getElementById("div_main"))
	}

}