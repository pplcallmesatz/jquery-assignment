(function ($) {
    $.fn.greenify = function () {
        var cls = this;
        var nav = cls
            , navWidth = nav.width()
            , navItem = $(".nav-item", nav)
            , navLink = $(".nav-link", navItem)
            , navItemTotalWidth = 0
            , dropDownItemCount = $(".navInside", nav)
            , dropDown = $(".dropdown", nav)
            , dropDownMenu = $(".dropdown-menu", dropDown)
            , dropDownItem = $(".dropdown-item", dropDownMenu)
            , dropDownItemLength = dropDownItem.length
            , dropDownItemTotalWidth = 0;
        // Each function
        navItem.each(function () {
            var currentWidth = $(this).width();
            navItemTotalWidth += currentWidth;
            //                contraction(navWidth, navItemTotalWidth, dropDownItemTotalWidth);
            var ww = navWidth
                , niv = navItemTotalWidth
                , diw = dropDownItemTotalWidth;
            if ((niv + 50) > ww) {
                navItem.last().prev().find(".nav-link").addClass("dropdown-item").removeClass("nav-link").detach().prependTo(dropDownMenu);
                navItem.last().prev().detach();
                dropDownCount();
            }
        });
        if (dropDownItemLength > 0) {
            dropDown.css('opacity', "1");
            dropDownItem.each(function () {
                var currentDropItemWidth = $(this).width();
                dropDownItemTotalWidth += currentDropItemWidth;
//                expansion(navWidth, navItemTotalWidth, currentDropItemWidth);
                var expWidth = navItemTotalWidth + currentDropItemWidth;
                if ((expWidth + 50) < navWidth) {
                    //        console.log("expla")
                    var ss = dropDown.before('<li class=\"nav-item\"></li>')
                    var dd = dropDownItem.first().removeClass("dropdown-item").addClass("nav-link").detach();
                    var ff = navItem.last().prev();
                    dd.appendTo(ff);
                    dd = null;
                }
            });
            dropDownItemCount.text(dropDownItemLength);
        }
        else {
            dropDownItemTotalWidth = 0;
            //                dropDownItemCount.text("0");
            dropDown.css('opacity', "0");
        }
        //            contraction(navWidth, navItemTotalWidth, dropDownItemTotalWidth);
        dropDownCount();

//        function expansion(wholeWidth, navItemWidth, currentDropWidth) {
            //    console.log("Whole Width: ", wholeWidth, "Item Width: ", navItemWidth, "exp width ",expWidth , " Drop currrent Item Width: ", currentDropWidth);
            // 
//        }
        //function contraction(wholeWidth, navItemWidth, dropItemWidth){
        //     console.log("Whole Width: ", wholeWidth, "Item Width: ", navItemWidth, "Drop Item Width: ", dropItemWidth);
        //    }
        //    var nav = $(".nav"),
        //                navWidth = nav.width(),
        //                navItem = $(".nav-item"),
        //                navItemTotalWidth = 0,
        //                dropDownItemCount = $(".navInside"),
        //                dropDownMenu = $(".dropdown-menu"),
        //                dropDownItem = $(".dropdown-item"),
        //                dropDownItemLength = dropDownItem.length,
        //                dropDownItemTotalWidth = 0;
        function dropDownCount() {
            var dropDownItemCount = $(".navInside")
                , dropDownItem = $(".dropdown-item")
                , dropDownItemLength = dropDownItem.length;
            dropDownItemCount.text(dropDownItemLength);
        }
    };
}(jQuery));