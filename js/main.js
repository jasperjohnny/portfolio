console.log("umm");
function runOnScroll() {
	let scrollPos = (document.documentElement.scrollTop > 0) ? document.documentElement.scrollTop : document.body.scrollTop;
	document.body.className = "gogrey";
	if (scrollPos > 200) {
    	document.body.className = "myelomastars";
	}
	if (scrollPos > 800) {
    	document.body.className = "aizle";
	}
	if (scrollPos > 1500) {
    	document.body.className = "terrier";
	}
} 
window.addEventListener("scroll", runOnScroll)