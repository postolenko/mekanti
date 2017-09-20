$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var parent;
    var dropdownMenu;

    // ----------------------------

    getFooterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        // var dropdownMenu;

        $(".dropdown-catalog-item").each(function() {

            dropdownMenu = $(this).find(".sidebar-dropdown-menu");

            if($(this).hasClass("active")) {

                dropdownMenu.css({
                    "height" : "auto"
                });

            } else {

                dropdownMenu.slideUp(100);

            }

        });

        $(".catalog-title").click(function(e) {

            e.preventDefault();

            parent = $(this).closest(".dropdown-catalog-item");

            dropdownMenu = parent.find(".sidebar-dropdown-menu");

            if(dropdownMenu.is(":hidden")) {

                dropdownMenu.slideDown(300);

                // if( !parent.hasClass("active") ) {

                    parent.addClass("active");

                // }

            } else {

                dropdownMenu.slideUp(300);

                // if( parent.hasClass("active") ) {

                    parent.removeClass("active");

                // }

            }

        });

    });


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }



});
