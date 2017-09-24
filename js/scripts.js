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

    var innerBlock;
    var shadowBlock;
    var shadowBlocktHeight;

    // ----------------------------

    var parent;
    var dropdownMenu;

    // ----------------------------

    var tabsParent;
    var tabLink;
    var attrForTabLink;
    var activeTabRadio;
    var activeTabs = [];
    var activeFlag = true;

    // ----------------------------

    var TOP_OFFSET = 23;
    var leftPosition;

    // ----------------------------

    getFooterPosition();

    getAdaptivePositionElements();

    getWrappOffsetResp();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        //---------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        //---------------------------

         getAdaptivePositionElements();

         getWrappOffsetResp();

    });


    $(function() {

        // var dropdownMenu;

        $(".dropdown-catalog-item").each(function() {

            dropdownMenu = $(this).find(".sidebar-dropdown-menu");

            if( !$(this).hasClass("filters") ) {

                if($(this).hasClass("active")) {

                    dropdownMenu.css({
                        "height" : "auto"
                    });

                } else {

                    dropdownMenu.slideUp(100);

                }

            }

        });

        $(".catalog-title").click(function(e) {

            e.preventDefault();

            parent = $(this).closest(".dropdown-catalog-item");

            dropdownMenu = parent.find(".sidebar-dropdown-menu");

            if(dropdownMenu.is(":hidden")) {

                dropdownMenu.slideDown(300);

                parent.addClass("active");

            } else {

                dropdownMenu.slideUp(300);

                parent.removeClass("active");

            }

        });

    });

    $(function() {

        $(".good-cart").each(function() {

            innerBlock = $(this).find(".inner");
            innerBlock.append("<div class='shadow-block'></div>");

        });

        $(".good-cart .inner").hover(function() {

            shadowBlock = $(this).find(".shadow-block");

            shadowBlocktHeight = $(this).find(".img-box").height() + $(this).find(".descript").outerHeight();

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

        // var tabsParent;
        // var tabLink;
        // var attrForTabLink;
        // var activeTabRadio;
        // var activeTabs = [];
        // var activeFlag = true;

        $(".tabs").each(function() {

            $(this).find(".radio-tab").each(function() {                

                if( $(this).attr("checked") ) {

                    tabsParent = $(this).closest(".tabs");
                    attrForTabLink = $(this).attr("id");
                    tabsParent.find(".tab-link[for = '"+ attrForTabLink +"']").addClass("active");
                    activeFlag = true;

                } else {

                    activeFlag = false;

                }                

            });

            if(activeFlag == true) {

                activeTabs.push( $(this).index(".tabs") );

            } else {

                activeTabs.push( false );

            }

        });


        $(".tabs").each(function() {

            if( activeTabs[$(this).index(".tabs")] !== $(this).index(".tabs") ) {

                $(this).find(".tab-link:eq(0)").addClass("active");

                activeTabRadio = $(this).find(".radio-tab").eq(0);

                activeTabRadio.prop("checked", true);

            }

        });


        $(".tab-link").click(function (e) {

            if( $(this).hasClass("active") ) {

                e.preventDefault();

            } else {

                tabsParent = $(this).closest(".tabs");
                attrForTabLink = $(this).attr("for");
                activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
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

        // var TOP_OFFSET = 23;
        // var leftPosition;

        $(".show_popup").click(function (e) {

            e.preventDefault();

            if( $(this).hasClass("active") ) {

                return false;

            } else {                

                $(this).addClass("active");

                namePopup = $(this).attr("data-show-popup");

                activePopup = $(".sign-in-popup").filter("[data-popup = '"+ namePopup +"']");

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

            }

        });

        $(".close-popup").click(function() {

            activePopup = $(this).closest(".sign-in-popup");

            activePopup.fadeOut(300);

            namePopup = activePopup.attr("data-popup");

            $(".show_popup").filter("[data-show-popup = '"+ namePopup +"']").removeClass("active");

        });

        $(document).mouseup(function (e) {

            hide_element = $('.sign-in-popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".sign-in-popup").fadeOut(300);

                $(".show_popup").removeClass("active");
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".sign-in-popup").fadeOut(300);

               $(".show_popup").removeClass("active");

            }

        });

    });


    $(function() {

        $(".show_resp_popup").click(function (e) {

            e.preventDefault();
            namePopup = $(this).attr("data-show-resp-popup");
            activePopup = $(".resp-popup").filter("[data-resp-popup = '"+ namePopup +"']");
            activePopup.fadeIn(300);
            $(this).addClass("active");

        });

        $(".close-menu").click(function() {

            activePopup = $(this).closest(".resp-popup");

            activePopup.fadeOut(300);

            namePopup = activePopup.attr("data-resp-popup");

            $(".show_resp_popup").filter("[data-show-resp-popup = '"+ namePopup +"']").removeClass("active");

        });

        $(document).mouseup(function (e) {

            if( bodyWidth <= 600 ) { 

                hide_element = $('.resp-popup');

                if (!hide_element.is(e.target)

                    && hide_element.has(e.target).length === 0) {

                    $(".resp-popup").fadeOut(300);

                    $(".show_resp_popup").removeClass("active");
                }

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && bodyWidth <= 600) {

               $(".resp-popup").fadeOut(300);

               $(".show_resp_popup").removeClass("active");

            }

        });

    });


    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-block").is(":hidden") ) {

                $(".main-nav-block").fadeIn(400);

                $(this).addClass("active");

            } else {

                $(".main-nav-block").fadeOut(400);

                $(this).removeClass("active");

            }

        });


        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".main-nav-block").is(":visible") ) {

               $(".main-nav-block").fadeOut(300);

               $(".respmenubtn").removeClass("active");

            }

        });


        $(".main-nav li a").click(function() {

            if ($(".main-nav-block").is(":visible") && bodyWidth <= 768 ) {

               $(".main-nav-block").fadeOut(300);

               $(".respmenubtn").removeClass("active");

            }

        });

    })


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

    function getWrappOffsetResp() {

        if(bodyWidth <= 768) {

            $(".wrapper").css({
                "padding-top" : $(".header-site").height() + "px"
            });

        } else {

            $(".wrapper").css({
                "padding-top" : 0
            });

        }

    }



});
