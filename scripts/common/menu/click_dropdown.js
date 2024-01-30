function click_dropdown(id) {
	let class_div_sub_menu_pc = "mt-1 bg-white border-gray-200 shadow-sm border-y block md:hidden"
	let class_div_sub_menu_mobile = "flex flex-col w-full justify-center items-start px-[30px] pt-[10px] pb-[20px] space-y-4 border-b-4"

	if (id == "license" && !toggle_menu_license) {
		document.getElementById("div_megamenu_license").className = class_div_sub_menu_pc
		document.getElementById("div_menu_mobile_license").className = class_div_sub_menu_mobile
		toggle_menu_license = true
	} else {
		document.getElementById("div_megamenu_license").className = "hidden"
		document.getElementById("div_menu_mobile_license").className = "hidden"
		toggle_menu_license = false
	}

	if (id == "guide" && !toggle_menu_guide) {
		document.getElementById("div_megamenu_guide").className = class_div_sub_menu_pc
		document.getElementById("div_menu_mobile_guide").className = class_div_sub_menu_mobile
		toggle_menu_guide = true
	} else {
		document.getElementById("div_megamenu_guide").className = "hidden"
		document.getElementById("div_menu_mobile_guide").className = "hidden"
		toggle_menu_guide = false
	}

	if (id == "community" && !toggle_menu_community) {
		document.getElementById("div_megamenu_community").className = class_div_sub_menu_pc
		document.getElementById("div_menu_mobile_community").className = class_div_sub_menu_mobile
		toggle_menu_community = true
	} else {
		document.getElementById("div_megamenu_community").className = "hidden"
		document.getElementById("div_menu_mobile_community").className = "hidden"
		toggle_menu_community = false
	}

	if (id == "intro" && !toggle_menu_intro) {
		document.getElementById("div_megamenu_intro").className = class_div_sub_menu_pc
		document.getElementById("div_menu_mobile_intro").className = class_div_sub_menu_mobile
		toggle_menu_intro = true
	} else {
		document.getElementById("div_megamenu_intro").className = "hidden"
		document.getElementById("div_menu_mobile_intro").className = "hidden"
		toggle_menu_intro = false
	}
}