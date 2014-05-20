(function ( $ ) {

    $.fn.noPasswordManager = function(options) {
        var settings = $.extend({
            displayPasswordButton: false
        }, options );

        var watermark = $('<div></div>');
        var that = $(this);

        $(that).after(watermark)
            .css("float", "left")
            .attr("type", "text")
            .attr("autocomplete", "off");

        if( $(that).val() == "" ){
            $(watermark).html( $(that).attr("placeholder") );
        } else{
            $(watermark).html( $(that).val() );
        }

        $(watermark).click(function(){
            $(that).focus();
        });

        $(that).keyup(function(){
            var waterMarktext = "";

            for(var i=0;i < $(that).val().length;i++){
                waterMarktext = waterMarktext + '*';
            }

            if( waterMarktext == "" ){
                waterMarktext = $(that).attr("placeholder");
            }

            $(watermark).html( waterMarktext );
        });

        /*
         * Placeholder styling
         */
        $(watermark).css('float', 'left')
            .css('width', $(this).outerWidth() )
            .css('height', $(this).outerHeight() )
            .css("margin-left", "4px")
            .css("margin-top", "4px")
            .css('backgroundColor', '#fff')
            .css('position', 'absolute')
            .css('float', 'left')
            .css('z-index', '9999')
            .css("overflow", "hidden");
        $(watermark).after("<div style='clear:both'></div>")

        /*
         * Show password button
         */
        if( settings.displayPasswordButton ){
            var button = $('<button type="button">Toon Wachtwoord</button>');
            $(watermark).after(button);
            $(button).click(function(){
                $(button).hide();
                $(watermark).hide();
            });
        }
    };

}( jQuery ));