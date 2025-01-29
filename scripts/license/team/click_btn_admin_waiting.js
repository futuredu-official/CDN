async function click_btn_admin_waiting(uuid, type) {
	if (!toggle_btn_admin_waiting) {
		// 토글 ON
		toggle_btn_admin_waiting = true
		if (type == "delete") {
			ReactDOM.render(<Div_btn_admin_accepted_loading />, document.getElementById("div_btn_admin_accepted_" + uuid))
		} else {
			ReactDOM.render(<Div_btn_admin_waiting_loading />, document.getElementById("div_btn_admin_waiting_" + uuid))
		}
		

		// 데이터 가져오기
		const request_data = new FormData();
		request_data.append('uuid', uuid);
		request_data.append('type', type);
		
		const data = await fetch("/license/ajax_response_admin_waiting/", {
							method: "post", 
							headers: { "X-CSRFToken": getCookie("csrftoken"), },
							body: request_data
							})
							.then(res=> { location.href="/license/team/" })
							.then(res=> { location.href="/license/team/" });


		// 토글 OFF
		toggle_btn_admin_waiting = false
		if (type == "delete") {
			ReactDOM.render(<Div_btn_admin_accepted />, document.getElementById("div_btn_admin_accepted_" + uuid))
		} else {
			ReactDOM.render(<Div_btn_admin_waiting />, document.getElementById("div_btn_admin_waiting_" + uuid))
		}
		
	}
}
