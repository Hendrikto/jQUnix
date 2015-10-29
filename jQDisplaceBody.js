/***********************************************************

jQDisplaceBody.js
v0.1.2

A jQuery plugin that creates a slide in effect which
displaces the page content.

***********************************************************/
;(function($) {
	$.fn.displaceBody = function (trigger, options) {
		// return if no jQuery object was provided as a trigger
		if (!(trigger instanceof $)) {
			return this;
		}
		options = options || {};
		var event = options.event || "click",
			position = options.position || "left",
			node = this,
			nodeWidth = this.outerWidth(),
			nodeHidden = true,
			$body = $("body");
		trigger.on(event, function () {
			if (nodeHidden) {
				// open
				$body.css("padding-" + position, "+=" + nodeWidth);
				node.css(position, 0);
			} else {
				// close
				$body.css("padding-" + position, "-=" + nodeWidth);
				node.css(position, -nodeWidth);
			}
			nodeHidden = !nodeHidden;
		});
		// make plugin chainable
		return this;
	};
})(jQuery);
