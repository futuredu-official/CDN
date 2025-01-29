async function get_auth_code() {
	let txt_serial_code = document.getElementById("txt_serial_code").value.trim()

	function Div_result(props) {
		return (
			<div class="flex flex-col justify-center items-center w-full md:px-0 px-[360px] md:px-0">
				<p class="w-full text-start text-lg font-normal text-gray-900 lg:text-sm">
					- 라이센스 키: {props.license_key}
				</p>
				<p class="w-full text-start text-start text-lg font-normal text-gray-900 lg:text-sm">
					- 만료일: {props.expired_date}
				</p>
			</div>
		)
	}


	if (!toggle_btn_submit) {
		// 토글 ON
		toggle_btn_submit = true
		ReactDOM.render(<Div_btn_submit_spinner />, document.getElementById("div_button"))


		if (txt_serial_code == "") {
			alert("시리얼 코드를 입력하여 주세요.")

		} else {
			const inputData = new FormData();
			inputData.append('txt_serial_code', txt_serial_code);
	
			const data = await fetch("/license/ajax_get_license_key_ags/", {
				method: "post", 
				headers: {"X-CSRFToken": getCookie("csrftoken"),},
				body: inputData
			})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });
	
			if (data.checker != "SUCCESS") {
				alert(data.msg)
				location.href="/license/ags/"

			} else {
				document.getElementById("div_result").className = "visible"
				ReactDOM.render(<Div_result license_key={data.license_key} expired_date={data.expired_date} />, document.getElementById("div_result"))
			}

		}


		// 토글 OFF
		toggle_btn_submit = false
		ReactDOM.render(<Div_btn_submit />, document.getElementById("div_button"))
	}
}
