/*jshint esversion: 6 */
$(document).ready(function(){
	// init controller
	const trigger1 = new ScrollMagic.Controller(); //telling browser to use the scroller

		const sceneGallery = new ScrollMagic.Scene({triggerElement:"#triggerPosition", duration:"120%"});
				sceneGallery.setClassToggle(".fadeIN","fade-in");
				sceneGallery.addIndicators();
				sceneGallery.addTo(trigger1);

				const footerInfo = new ScrollMagic.Scene({triggerElement:"#footerTrigger", duration:"100vh"});
						footerInfo.setClassToggle(".fadeInFoot","fade-in");
						footerInfo.addIndicators();
						footerInfo.addTo(trigger1);

});
