/***********************************************************

jQAccordion.js
v0.1.2

A jQuery plugin that creates an accordion style menu.

***********************************************************/
;(function($) {
	$.fn.accordion = function (options) {
		options = options || {};
		var	trigger = options.trigger || "div",
			slider = options.slider || "ul",
			event = options.event || "click",
			duration = options.duration || 400,
			node = this,
			$trigger = $(trigger, this),
			$slider = $(slider, this);

		$trigger.each(function(i) {
			var $thisSlider = $($slider[i]);
			$(this).on(event, function () {
				$thisSlider.add(".open", node)
					.slideToggle(duration)
					.toggleClass("open");
			});
		});
		// make plugin chainable
		return this;
	};
})(jQuery);
