function click_tab(tab_name) {
	let class_slide = "flex flex-col space-y-2 py-4"
	let toggle_slide1 = false
	let toggle_slide2 = false
	let toggle_slide3 = false
	let toggle_slide4 = false
	let toggle_slide5 = false

	if (tab_name == "slide1" && !toggle_slide1) {
		document.getElementById("slide1").className = class_slide
		toggle_slide1 = true
	} else {
		document.getElementById("slide1").className = "hidden"
		toggle_slide1 = false
	}

	if (tab_name == "slide2" && !toggle_slide2) {
		document.getElementById("slide2").className = class_slide
		toggle_slide2 = true
	} else {
		document.getElementById("slide2").className = "hidden"
		toggle_slide2 = false
	}

	if (tab_name == "slide3" && !toggle_slide3) {
		document.getElementById("slide3").className = class_slide
		toggle_slide3 = true
	} else {
		document.getElementById("slide3").className = "hidden"
		toggle_slide3 = false
	}

	if (tab_name == "slide4" && !toggle_slide4) {
		document.getElementById("slide4").className = class_slide
		toggle_slide4 = true
	} else {
		document.getElementById("slide4").className = "hidden"
		toggle_slide4 = false
	}

	if (tab_name == "slide5" && !toggle_slide5) {
		document.getElementById("slide5").className = class_slide
		toggle_slide5 = true
	} else {
		document.getElementById("slide5").className = "hidden"
		toggle_slide5 = false
	}
}