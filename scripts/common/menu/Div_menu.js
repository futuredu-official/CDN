function Div_menu() {
	let toggle_menu_hamburger = 0
	let toggle_menu_dropdown_guide = 0
	let toggle_menu_dropdown_intro = 0

	// 모바일 - 햄버거 메뉴 클릭 이벤트
	function menu_hamburger() {
		if (toggle_menu_hamburger == 0) {
			document.getElementById("mega_menu_icons").className = "items-center justify-between w-full md:flex md:w-auto md:order-1"
			toggle_menu_hamburger = 1
		} else {
			document.getElementById("mega_menu_icons").className = "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			toggle_menu_hamburger = 0
		}
	}

	// 가이드
	function menu_dropdown_guide() {
		document.getElementById("mega_menu_dropdown_intro").className = "absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
		toggle_menu_dropdown_intro = 0
		
		
		if (toggle_menu_dropdown_guide == 0) {
			document.getElementById("mega_menu_dropdown_guide").className = "absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
			toggle_menu_dropdown_guide = 1
		} else {
			document.getElementById("mega_menu_dropdown_guide").className = "absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
			toggle_menu_dropdown_guide = 0
		}
	}

	// Futuredu 소개
	function menu_dropdown_intro() {
		document.getElementById("mega_menu_dropdown_guide").className = "absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
		toggle_menu_dropdown_guide = 0

		if (toggle_menu_dropdown_intro == 0) {
			document.getElementById("mega_menu_dropdown_intro").className = "absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
			toggle_menu_dropdown_intro = 1
		} else {
			document.getElementById("mega_menu_dropdown_intro").className = "absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2"
			toggle_menu_dropdown_intro = 0
		}
	}


	function Div_logo() {
		return (
			<a href="/" class="flex items-center">
				<img src="https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/logo/logo_web4.png"
					 class="object-scale-down h-12" alt="Logo" />
			</a>
		)
	}

	function Div_hamburger() {
		return (
			<div class="flex items-center md:order-2">
				<button type="button" onClick = {() => menu_hamburger()}
						class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
					<span class="sr-only">Open main menu</span>
					<img src="https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_hamburger.svg" class="w-8 h-8" />
				</button>
			</div>
		)
	}

	function Div_menu_li_button_single(props) {
		return (
			<li class="hover:underline hover:decoration-blue-600 hover:decoration-wavy">
				<button id={props.id} onClick={() => location.href=props.url}
						class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:md:p-0">
					<img src={props.image} class="w-4 h-4 mr-2" />
					{props.text}
					<svg aria-hidden="true" class="w-5 h-5 ml-1 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
				</button>
			</li>                    
		)
	}

	function Div_menu_li_button_multiple(props) {
		return (
			<button id={props.id} onClick={props.func}
					class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:md:p-0">
				<img src={props.image} class="w-4 h-4 mr-2" />
				{props.text}
				<svg aria-hidden="true" class="w-5 h-5 ml-1 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
				</svg>
			</button>
		)
	}

	function Div_menu_li_multiple_title(props) {
		return (
			<li>
				<a class="flex items-center font-bold text-gray-500 group border-b-4 border-sky-500">
					{props.text}
				</a>
			</li>
		)
	}

	function Div_menu_li_multiple_sub(props) {
		return (
			<li class="hover:underline hover:decoration-blue-400 hover:decoration-wavy">
				<a href={props.url}
				   class="flex items-center text-gray-500 group">
				   <img src={props.image} class="w-4 h-4 mr-2" />
				   {props.text}
				</a>
			</li>
		)
	}

	return (
		<nav class="bg-white border-gray-200 px-2 pb-12 md:px-4 py-2.5">
			<div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
				<Div_logo />
				<Div_hamburger />

				<div id="mega_menu_icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
					<ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
						<Div_menu_li_button_single id={"mega_menu_button_futuredu" } text={"Futuredu 접속"} url={"#"}
												   image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_physics2.svg"} />
		
						<li class="hover:underline hover:decoration-blue-600 hover:decoration-wavy">
							<Div_menu_li_button_multiple id={"mega_menu_button_guide"} text={"가이드"} func={() => menu_dropdown_guide()}
														 image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_guide.svg"} />
							<div id="mega_menu_dropdown_guide"
								 class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2">
								<div class="p-4 pb-0 text-gray-900 md:pb-4">
									<ul class="space-y-2">
										<Div_menu_li_multiple_title text={"이용 가이드"} />

										<Div_menu_li_multiple_sub text={"이용 가이드"} url={"/community/"}
																  image={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/guide.svg"} />
									</ul>
								</div>
								<div class="p-4 pb-0 text-gray-900 md:pb-4">
									<ul class="space-y-2">
										<Div_menu_li_multiple_title text={"강의, 세미나"} />

										<Div_menu_li_multiple_sub text={"유튜브"} url={"/class/youtube/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_youtube_colorful.svg"} />
										<Div_menu_li_multiple_sub text={"온라인"} url={"/class/online/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_online_lecture.svg"} />
										<Div_menu_li_multiple_sub text={"오프라인"} url={"/class/offline/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_offline_lecture.svg"} />
									</ul>
								</div>
							</div>
						</li>
		
						<Div_menu_li_button_single id={"mega_menu_button_community" } text={"커뮤니티"} url={"#"}
												   image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_community_sub.svg"} />
		
						<li class="hover:underline hover:decoration-blue-600 hover:decoration-wavy">
							<Div_menu_li_button_multiple id={"mega_menu_button_intro"} text={"FuturEdu 소개"} func={() => menu_dropdown_intro()}
														 image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_intro.svg"} />
							<div id="mega_menu_dropdown_intro"
								 class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-2">
								<div class="p-4 pb-0 text-gray-900 md:pb-4">
									<ul class="space-y-2">
										<Div_menu_li_multiple_title text={"소개"} />
										
										<Div_menu_li_multiple_sub text={"서비스 소개"} url={"/intro/service/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_intro.svg"} />
										<Div_menu_li_multiple_sub text={"공지사항"} url={"/intro/notice/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_notice.svg"} />
										<Div_menu_li_multiple_sub text={"서비스 이용 약관"} url={"/intro/terms/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_terms.svg"} />
										<Div_menu_li_multiple_sub text={"개인정보 보호 방침"} url={"/intro/privates/"}
																  image={"https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/menu_privates.svg"} />
									</ul>
								</div>
								<div class="p-4 pb-0 text-gray-900 md:pb-4">
									<ul class="space-y-2">
										<Div_menu_li_multiple_title text={"관련 서비스"} />
										
										<li class="hover:underline hover:decoration-blue-400 hover:decoration-wavy">
											<a href="https://www.statground.net" target="_blank"
											   class="flex items-center text-gray-500 group">
											   <img src="https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/svg/futuredu.svg" class="w-4 h-4 mr-2" />
											   통계마당
											</a>
										</li>
										<li class="hover:underline hover:decoration-blue-400 hover:decoration-wavy">
											<a href="https://www.web-r.org" target="_blank"
											   class="flex items-center text-gray-500 group">
											   <img src="https://cdn.jsdelivr.net/gh/statground/Statground_CDN/assets3/images/svg/r_colorful.svg" class="w-4 h-4 mr-2" />
											   Web-R
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	)
}