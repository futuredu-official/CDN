async function get_div_main() {
	// 스켈레톤
	ReactDOM.render(<Div_skeleton_spinner text={"회원 정보를 확인하고 있습니다."} />, document.getElementById("div_main"))

	
	const data = await fetch("/license/ajax_check_user_team/")
	.then(res=> { return res.json(); })
	.then(res=> { return res; });

	gv_role = data['status']['role']
	

	// 관리자
	if (gv_role == "관리자") {
		ReactDOM.render(<Div_main_admin data={data} />, document.getElementById("div_main"))

	// 기관회원
	} else if (gv_role == "기관 회원") {
		ReactDOM.render(<Div_main_institution data={data} />, document.getElementById("div_main"))

	// 등록이 필요한 회원
	} else {
		ReactDOM.render(<Div_main_request data={data} />, document.getElementById("div_main"))

	}
	
}