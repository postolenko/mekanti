$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ---------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var parent;
    var dropdownMenu;

    // ----------------------------

    getFooterPosition();

    getAdaptivePositionElements();

    getActiveFilterMenu();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        //---------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        //---------------------------

         getAdaptivePositionElements();

         getActiveFilterMenu();

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

    $(function() {

        $(".good-cart").each(function() {

            var innerBlock = $(this).find(".inner");
            innerBlock.append("<div class='shadow-block'></div>");

        });

        $(".good-cart .inner").hover(function() {

            var shadowBlock = $(this).find(".shadow-block");

            var shadowBlocktHeight = $(this).find(".img-box").height() + $(this).find(".descript").outerHeight();

            shadowBlock.css({
                "height" : shadowBlocktHeight + "px"
            });

        });

    });

    $(function() {

        $( ".catalog-item" ).each(function() {

            $(this).find(".dropdown-menu").fadeOut(100);

        });

        $( ".catalog-item" ).bind({
          mouseenter: function() {

            $(this).find(".dropdown-menu").fadeIn(300);

          },
          mouseleave: function() {

            $(this).find(".dropdown-menu").fadeOut(300);

          }
        });

    });

    $(function() {

        var tabsParent;
        var tabLink;
        var attrForTabLink;
        var activeTabRadio;

        $(".tabs-links").each(function() {

            var tabsParent = $(this).closest(".tabs");
            var tabLink = $(this).find(".tab-link");

            if( tabLink.hasClass("active") ) {

                var attrForTabLink = tabLink.attr("for");

                var activeTabRadio = $(".tabs-links .radio-tab[id = '"+ attrForTabLink +"']");

                // console.log(attrForTabLink);

                activeTabRadio.prop("checked", true);

            }

        });


        $(".tab-link").click(function (e) {

            if( $(this).hasClass("active") ) {

                e.preventDefault();

                return false;

            } else {

                tabsParent = $(this).closest(".tabs");
                attrForTabLink = $(this).attr("for");
                activeTabRadio = $(".tabs-links .radio-tab[id = '"+ attrForTabLink +"']");
                activeTabRadio.prop("checked", true);

                tabsParent.find(".tab-link").each(function () {
                    
                    if( $(this).hasClass("active") ) {

                        $(this).removeClass("active")

                    }

                });

                $(this).addClass("active");

            }

        });

    });

    $(function() {

        var TOP_OFFSET = 23;
        var leftPosition;

        $(".show_popup").click(function (e) {

            e.preventDefault();

            var namePopup = $(this).attr("data-show-popup");

            var activePopup = $(".sign-in-popup").filter("[data-popup = '"+ namePopup +"']");

            activePopup.fadeIn(300);           

            if( $(this).offset().left + activePopup.width() > $(".row").offset().left + $(".row").width() ) {

                leftPosition = $(".row").offset().left + $(".row").width() - activePopup.width();

            } else if( $(this).offset().left  < $(".row").offset().left ) {

                leftPosition = $(".row").offset().left;

            } else {

                leftPosition = $(this).offset().left;

            }

            activePopup.css({
                "top" : $(this).offset().top + $(this).height() + TOP_OFFSET + "px",
                "left" : leftPosition + "px"
            });

        });

        $(document).mouseup(function (e){

            hide_element = $('.sign-in-popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".sign-in-popup").fadeOut(300);
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".sign-in-popup").fadeOut(300);

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


    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                screenParam = parseInt( $(this).attr("data-min-screen") );

                indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }


    function getActiveFilterMenu() {
        
        if( bodyWidth <= 600 ) {

            $(".filters").removeClass("active");

            $(".filters").find(".sidebar-dropdown-menu").slideUp(100);

        } else {

            $(".filters").addClass("active");

            $(".filters").find(".sidebar-dropdown-menu").slideDown(100);

        }

    }



});
