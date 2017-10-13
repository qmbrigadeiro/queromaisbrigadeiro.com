;(function($){
    $.fn.extend({
        floatLabel: function( options ) {

            this.defaultOptions = {};

            var settings = $.extend({}, this.defaultOptions, options);


            function makeLabel($this) {
            	
            	var id          = $this.find('input, textarea').attr('id');
            	var placeholder = $this.find('input, textarea').attr('placeholder');
            	var $label      = $this.find('label');

            	$this.find('input, textarea').attr('placeholder', '');

            	if ( $label.size() > 0 ) {
            		$label.text(placeholder);
            	} else {
            		$this.prepend('<label for="'+id+'">'+placeholder+'</label>');
            	}

            }

            function activeLabel($this) {

            	var $field      = $this.find('input, textarea');
            	var $label      = $this.find('label');
				
				$field.focus( function() {
					$label.removeClass('fl-deactive');
					$label.addClass('fl-active');
				});

				$field.blur( function() {
					if ( $field.val() == "" ) {
						$label.addClass('fl-deactive', function(){
							$label.removeClass('fl-active');
						});	
					}
				});

            }

            return this.each(function() {

                var $this = $(this);

                makeLabel($this);
                activeLabel($this);

            });

        }

    });

})(jQuery);