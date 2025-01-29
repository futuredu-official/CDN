async function click_btn_submit() {
	let txt_name = document.getElementById("txt_name").value.trim()

	if (!toggle_btn_submit) {
		// 토글 ON
		toggle_btn_submit = true
		ReactDOM.render(<Div_btn_submit_spinner />, document.getElementById("div_button"))


		if (txt_name == "") {
			alert("이름 입력은 필수입니다.")

		} else {
			const inputData = new FormData();
			inputData.append('sel_affiliation', document.getElementById("sel_affiliation").value.trim());
			inputData.append('txt_name', document.getElementById("txt_name").value.trim());

			const data = await fetch("/license/ajax_request_join_team/", {
				method: "post", 
				headers: {"X-CSRFToken": getCookie("csrftoken"),},
				body: inputData
			})
			.then(res=> { return res.json(); })
			.then(res=> { return res; });


			if (data.checker == "NOTEXIST") {
				alert("기관회원 신청이 완료되었습니다.")

			} else if (data.checker == "REQUESTED") {
				alert("기관회원 신청 내역이 수정되었습니다.")
			}

			location.href="/license/team/"
		}


		// 토글 OFF
		toggle_btn_submit = false
		ReactDOM.render(<Div_btn_submit />, document.getElementById("div_button"))
	}
}