var G5F_VC = G5F_VC || {};
(function ($) {
	"use strict";
	G5F_VC = {
		init: function () {
			this.template_tab();
		},
		template_tab : function () {
			$('.g5element-templates-cat-wrap li','.vc_panel-tabs').on('click',function(event) {
				event.preventDefault();
				var $this = $(this),
					filter = $this.data('filter');
				if ($this.hasClass('active')) return;
				$('.g5element-templates-cat-wrap li','.vc_panel-tabs').removeClass('active');
				$this.addClass('active');
				$(filter,'.g5element-templates-wrap').removeClass('hidden');
				$('.g5element-template-item:not('+ filter+')','.g5element-templates-wrap').addClass('hidden');
			});


			$('.g5element-templates-cat-wrap li','.vc_panel-tabs').each(function () {
				var $this = $(this),
					filter = $this.data('filter'),
					count = $(filter,'.g5element-templates-wrap').length;
				if (filter === '*') {
					count = $('.g5element-template-item').length;
				}
				$this.append('<span class="g5element-template-count">'+ count +'</span>');
			});
		},
	};

	$(document).ready(function () {
		G5F_VC.init();
	});
})(jQuery);
