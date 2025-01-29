async function get_auth_code() {
	let txt_serial_code = document.getElementById("txt_serial_code").value.trim()

	if (!toggle_btn_submit) {
		// 토글 ON
		toggle_btn_submit = true
		ReactDOM.render(<Div_btn_submit_spinner />, document.getElementById("div_button"))


		if (txt_serial_code == "") {
			alert("시리얼 코드를 입력하여 주세요.")

		} else {
			const inputData = new FormData();
			inputData.append('txt_serial_code', txt_serial_code);
	
			const data = await fetch("/license/ajax_get_license_key_des/", {
				method: "post", 
				headers: {"X-CSRFToken": getCookie("csrftoken"),},
				body: inputData
			})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });

			
	
			if (data.checker == "기관 소속 회원이 아님" || data.checker == "회원 등급 부적절") {
				alert("현재 서류평가 시스템을 구매한 기관의 소속으로 확인되지 않습니다.\n만약 귀하가 해당 기관의 일원이 맞다면, 기관 회원으로 등록해 주시기 바랍니다.")

			} else if (data.checker == "이메일 오류") {
				alert("서류평가 시스템에서 입력한 이메일과 귀하의 이메일이 일치하지 않습니다.")

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