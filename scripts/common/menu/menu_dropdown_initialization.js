// 메뉴 하위메뉴 모두 닫기
function menu_dropdown_initialization() {
	document.getElementById("mega_menu_dropdown_license").className = "hidden"
	toggle_menu_dropdown_license = false
	document.getElementById("mega_menu_dropdown_guide").className = "hidden"
	toggle_menu_dropdown_guide = false
	document.getElementById("mega_menu_dropdown_community").className = "hidden"
	toggle_menu_dropdown_community = false
	document.getElementById("mega_menu_dropdown_intro").className = "hidden"
	toggle_menu_dropdown_intro = false
}