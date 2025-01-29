function Div_menu() {
	// 햄버거 버튼 클릭
	function click_hamburger() {
		if (toggle_hamburger) {
			document.getElementById("div_menu_mobile").className = "hidden"
			toggle_hamburger = false
		} else {
			document.getElementById("div_menu_mobile").className = "hidden md:flex md:flex md:flex-col md:visible md:mt-[20px]"
			toggle_hamburger = true
		}
	}

	// 메뉴 - Depth 1 - PC
	function Div_sub_menu_pc() {
		function Div_sub_menu_pc_sub(props) {
			return (
				<span class="flex flex-row justify-center items-center w-fit px-[24px] h-4/6 text-sm rounded-lg cursor-pointer hover:bg-blue-100"
					  onClick={props.function}>
					  <img src={props.url_img} class="size-[24px] mr-2" />
					{props.name}
				</span>                        
			)
		}

		return (
			<div class="flex flex-row justify-cetner items-center visible md:hidden">
				<Div_sub_menu_pc_sub name={"라이센스"} function={() => click_dropdown("license")}
									 url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_license.svg"} />
				<Div_sub_menu_pc_sub name={"가이드"} function={() => click_dropdown("guide")}
									 url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_guide2.svg"} />
				<Div_sub_menu_pc_sub name={"커뮤니티"}  function={() => click_dropdown("community")}
									 url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_community.svg"} />
				<Div_sub_menu_pc_sub name={"Futuredu 소개"}  function={() => click_dropdown("intro")}
									 url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_intro2.svg"} />
			</div>
		)
	}

	function Div_sub_menu_pc_title(props) {
		return (
			<div>
				<div class="flex justify-center items-start text-center w-fit h-[150px] bg-blue-100 border-r-8 px-[20px] pt-[10px] min-w-[170px] max-w-[170px]">
					<h1 class="w-full justify-center items-center mb-4 text-lg font-extrabold">
						<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-900 from-sky-600">{props.title}</span>
					</h1>
				</div>
			</div>
		)
	}

	function Div_sub_menu_pc_li(props) {
		return (
			<li>
				<a href={props.url} target={props.target} class="px-4 py-2 hover:bg-blue-100">
					{props.title}
				</a>
			</li>
		)
	}

	function Div_sub_menu_mobile_title(props) {
		return (
			<div class="flex flex-col justify-center items-start w-full h-[50px] px-[20px] cursor-pointer hover:bg-blue-200"
				 onClick={props.function}>
				<span class="flex flex-row justify-center items-center">
					<img src={props.url_img} class="w-4 h-4 mr-2" />
					{props.title}
				</span>
			</div>
		)
	}

	function Div_sub_menu_mobile_li(props) {
		return (
			<div class="flex justify-center items-start w-full h-[20px] cursor-pointer hover:bg-blue-100" onClick={() => location.href=props.url}>
				<span class="flex flex-row w-full">
					- {props.title}
				</span>
			</div>
		)
	}


	return (
		<div class="flex flex-col">
			<div onclick="click_dropdown();" id="div_menu_sub_header" class="w-full"></div>

			<nav class="flex flex-row justify-between bg-white border-gray-200 h-[50px] px-[200px] py-4 sm:px-[50px]">
				<a href="/" class="flex items-center text-xl font-bold">
					<img src="https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/logo/logo_web4.png" class="object-scale-down h-12" />
				</a>

				<div class="flex items-center hidden md:flex md:visible" onClick={() => click_hamburger()}>
					<button type="button"
							class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
								hover:bg-gray-100 
								focus:outline-none focus:ring-2 focus:ring-gray-200">
						<span class="sr-only">Open main menu</span>
						<img src="https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_hamburger.svg" class="w-8 h-8" />
					</button>
				</div>

				<Div_sub_menu_pc />
			</nav>

			<div id="div_megamenu_license" class="hidden"> 
				<div class="grid grid-cols-4 max-w-full px-[200px] py-5 mx-auto text-sm text-gray-600">
					<Div_sub_menu_pc_title title={"라이센스"}
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_license.svg"} />
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"서류평가시스템"} url={"/license/des/"} target={"_self"} />
					</ul>
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"기관 계정으로 등록"} url={"/license/team/"} target={"_self"} />
					</ul>
				</div>
			</div>

			<div id="div_megamenu_guide" class="hidden">
				<div class="grid grid-cols-4 max-w-full px-[200px] py-5 mx-auto text-sm text-gray-600">
					<Div_sub_menu_pc_title title={"가이드"} 
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_guide2.svg"} />
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"서류평가시스템"} url={"/guide/des/"} target={"_self"} />
					</ul>
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"진학지도시스템"} url={"/guide/ags/"} target={"_self"} />
					</ul>
					
				</div>
			</div>

			<div id="div_megamenu_community" class="hidden"> 
				<div class="grid grid-cols-4 max-w-full px-[200px] py-5 mx-auto text-sm text-gray-600">
					<Div_sub_menu_pc_title title={"커뮤니티"}
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_community.svg"} />
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"커뮤니티"} url={"/community/"} target={"_self"} />
					</ul>
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"유튜브"} url={"/community/youtube/"} target={"_self"} />
					</ul>
					
				</div>
			</div>

			<div id="div_megamenu_intro" class="hidden">
				<div class="grid grid-cols-4 max-w-full px-[200px] py-5 mx-auto text-sm text-gray-600">
					<div>
						<Div_sub_menu_pc_title title={"Futuredu 소개"}
											   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_intro2.svg"} />
					</div>
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"서비스 소개"} url={"/intro/futuredu/"} target={"_self"} />
						<Div_sub_menu_pc_li title={"공지사항"} url={"/intro/notice/"} target={"_self"} />
					</ul>
					<ul class="my-4 space-y-4">
						<Div_sub_menu_pc_li title={"서비스 이용약관"} url={"/intro/terms/"} />
						<Div_sub_menu_pc_li title={"개인정보 보호 방침"} url={"/intro/privates/"} />
					</ul>
				</div>
			</div>


			<div id="div_menu_mobile" class="hidden">
				<Div_sub_menu_mobile_title title={"라이센스"} function={() => click_dropdown("license")} 
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_license.svg"} />
				<div id="div_menu_mobile_license" class="hidden">
					<Div_sub_menu_mobile_li title={"서류평가시스템"} url={"/license/des/"} />
					<Div_sub_menu_mobile_li title={"기관 계정으로 등록"} url={"/license/team/"} />
				</div>

				<Div_sub_menu_mobile_title title={"가이드"} function={() => click_dropdown("guide")} 
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_guide2.svg"} />
				<div id="div_menu_mobile_guide" class="hidden">
					<Div_sub_menu_mobile_li title={"서류평가시스템"} url={"/guide/des/"} />
					<Div_sub_menu_mobile_li title={"진학지도시스템"} url={"/guide/ags/"} />
				</div>

				<Div_sub_menu_mobile_title title={"커뮤니티"} function={() => click_dropdown("community")}
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_community.svg"} />
				<div id="div_menu_mobile_community" class="hidden">
					<Div_sub_menu_mobile_li title={"커뮤니티"} url={"/community/"} />
					<Div_sub_menu_mobile_li title={"유튜브"} url={"/community/youtube/"} />
				</div>

				<Div_sub_menu_mobile_title title={"Futuredu 소개"} function={() => click_dropdown("intro")}
										   url_img={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/menu_intro2.svg"} />
				<div id="div_menu_mobile_intro" class="hidden">
					<Div_sub_menu_mobile_li title={"서비스 소개"} url={"/intro/futuredu/"} />
					<Div_sub_menu_mobile_li title={"공지사항"} url={"/intro/notice/"} />
					<Div_sub_menu_mobile_li title={"서비스 이용약관"} url={"/intro/terms/"} />
					<Div_sub_menu_mobile_li title={"개인정보 보호 방침"} url={"/intro/privates/"} />
				</div>
			</div>
		</div>
	)
}
