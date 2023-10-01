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