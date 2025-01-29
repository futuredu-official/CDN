async function get_menu_header() {
	function Div_sub_menu_header() {
		return (
			<div onclick="click_dropdown();" id="div_menu_sub_header"
				 class="flex bg-white justify-center items-center w-full h-[35px] border-b border-gray-400 shadow">
			{   gv_username == ""
				?   <div class="flex justify-end items-center text-end text-sm space-x-4 w-full h-full px-[35px]">
						<a href="/account/" class="hover:underline">
							로그인
						</a>
						<span>
							|
						</span>
						<a href="/account/signup/" class="hover:underline">
							회원가입
						</a>
					</div>
				:   ""
			}
			{   gv_username != "" && (gv_role == "Administrator" || gv_role == "Officer")
				?   <div class="flex justify-end items-center text-end text-sm space-x-4 w-full h-full px-[35px]">
						<a href="/admin/" class="hover:underline">
							관리자페이지
						</a>
						<span>
							|
						</span>
						<a href="/account/myinfo/" class="hover:underline">
							내 정보
						</a>
						<span>
							|
						</span>
						<a href="/account/logout/" class="hover:underline">
							로그아웃
						</a>
					</div>
				:   ""
			}
			{   gv_username != "" && gv_role != "Administrator"
				?   <div class="flex justify-end items-center text-end text-sm space-x-4 w-full h-full px-[35px]">
						<a href="/account/myinfo/" class="hover:underline">
							내 정보
						</a>
						<span>
							|
						</span>
						<a href="/account/logout/" class="hover:underline">
							로그아웃
						</a>
					</div>
				:   ""
			}
		</div>

		)
	}

	const data = await fetch("/ajax_get_menu_header/")
	.then(res=> { return res.json(); })
	.then(res=> { return res; });

	gv_role = data['name']
	console.log("*** role: " + gv_role);

	// Menu
	ReactDOM.render(<Div_sub_menu_header />, document.getElementById("div_menu_sub_header")) 
}