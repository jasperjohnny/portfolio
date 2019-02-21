console.log("umm");
function runOnScroll() {
	let scrollPos = (document.documentElement.scrollTop > 0) ? document.documentElement.scrollTop : document.body.scrollTop;
	document.body.className = "bg-gogrey";
	if (scrollPos > 200) {
    	document.body.className = "bg-myelomastars";
	}
	if (scrollPos > 800) {
    	document.body.className = "bg-aizle";
	}
	if (scrollPos > 1500) {
    	document.body.className = "bg-terrier";
	}
} 
window.addEventListener("scroll", runOnScroll)