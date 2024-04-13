async function set_main() {
	function Div_main_false() {
		return (
			<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 space-y-8">
				<Div_header title={"진학지도 시스템"} subtitle={"라이센스 키 확인"} />
	
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
		const inputData = new FormData();
		inputData.append('uuid_product', '5444c63f-b7ca-4642-b25a-e5323d699706');

		const data = await fetch("/license/ajax_get_license_key_log/", {
			method: "post", 
			headers: {"X-CSRFToken": getCookie("csrftoken"),},
			body: inputData
		})
		.then(res=> { return res.json(); })
		.then(res=> { return res; });
	
		ReactDOM.render(<Div_main log={data.data} role={data.role} />, document.getElementById("div_main"))
	}    
}