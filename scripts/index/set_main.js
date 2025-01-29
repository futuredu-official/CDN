function set_main() {
	function Div_main() {
		function Div_image(props) {
			return (
				<div class="flex flex-row justify-center items-center w-full border-2 border-gray-200 rounded-xl">
					<img src={props.img_url} class="h-3/4" />
				</div>
			)
		}

		return (
			<div class="flex flex-col w-full px-[80px] md:px-[20px]">
				<div class="flex flex-col w-full justify-center items-center py-[80px] md:py-[40px]">
					<h1 class="text-center w-full text-6xl font-extrabold text-gray-900 md:text-3xl">
						Excellence in data-driven <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">education</span>
					</h1>
					
					
					<div class="flex flex-row justify-center items-center w-full">
						<hr class="w-1/3 h-1 my-8 bg-gray-200 border-0 rounded" />
						<div class="absolute px-4 -translate-x-1/3 bg-white">
							<svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
								<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
							</svg>
						</div>
						<hr class="w-1/3 h-1 my-8 bg-gray-200 border-0 rounded" />
					</div>

					<p class="font-[600] text-[18px] md:text-[12px]">
						서류평가 시스템, 진학지도 시스템, 커뮤니티
					</p>
				</div>

				<div class="grid grid-cols-3 gap-4 w-full">
					<div class="grid gap-2">
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image003.png"} />
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image004.png"} />
					</div>

					<div class="grid gap-2">
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image005.png"} />
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image001.png"} />
					</div>
	
					<div class="grid gap-2">
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image002.png"} />
						<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/index/image006.png"} />
					</div>
				</div>
			</div>
		)
	}
	
	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
}