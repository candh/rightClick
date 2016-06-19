(function($) {


    var globals = {
        opened: false
    }

    var RightClick = function(element, menu, options) {
        this.menu = menu;
        this.element = element;
        this.settings = $.extend({}, globals, options);
        this.init();
    };

    RightClick.prototype.init = function() {
        var _ = this;

        $(this.element).contextmenu(function(event) {

            event.preventDefault();
            var x = event.pageX;
            var y = event.pageY;

            _.showMenu(x, y);


        });

        $(document).click(function(event) {
            if (_.settings.opened) {
                event.preventDefault();
                $(_.menu).fadeOut(90);
            }
        });
    }

    RightClick.prototype.showMenu = function(x, y) {
        if (this.settings.opened) {
            $(this.menu).hide();
        }

        $(this.menu).css({
            top: y,
            left: x
        }).fadeIn(90);

        this.settings.opened = true;
    }




    $.fn.rightClick = function(menu, options) {
        if (this.length !== 0) {
            if (!menu) {
                throw Error("Menu item not given");
                return;
            }
            new RightClick(this, menu, options);
        }
    }


}(jQuery));
