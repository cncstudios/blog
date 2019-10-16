// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="transform:translateY(-150vh);";
          document.getElementById('body-container').style.opacity="1";
      },100);
  }
}

window.addEventListener("keydown", function(e) {
    if([37, 39].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(document).ready(function (){
    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    var vh50 = ($(window).outerHeight() / $(window).outerWidth()*50 + "vw");
    var vhBanner = ($(window).outerHeight() / $(window).outerWidth()*65 + "vw");
    $('.cover-wrapper, .cover-image, .cover-title').css({ height: vhBanner });

    // Mobile Control //
    // if (($(window).width())/($(window).height()) < 40/31) {
    //     $('.page-split').css({ minHeight: 'auto' });
    //     $('.page, .dark-page').css({ minHeight: 'auto' });
    // }
    // else {
    //     $('.page-split').css({ minHeight: vh100 });
    //     $('.page, .dark-page').css({ minHeight: vh100 });
    // }

    // TESTING* Removed since equivalence is not needed. //

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $(event.target).closest("div#body-container").children("div.section").offset().top + 1
        }, 800, 'easeInOutExpo');
    });

    // Article Hover //
    $("div.art-target").mouseover(function (event){
        $(event.target).closest("div.article-img-cov").addClass("article-img-cov-hover");
    });
    $("div.art-target").mouseout(function (event){
        $(event.target).closest("div.article-img-cov").removeClass("article-img-cov-hover");
    });

    // Article Select Toggle //
    $("div.art-target").click(function (event){
        $(event.target).closest("div.article-wrapper").toggleClass("article-wrapper-toggle");
        $(event.target).closest("div.article-img-cov").toggleClass("article-img-cov-neg-hover").toggleClass("article-img-cov-toggle");
        $(event.target).closest("div.article-wrapper").children("div.article-content-wrapper").toggleClass("article-content-wrapper-toggle");
        $(event.target).closest("div.article-wrapper").children("div.article-content-wrapper").children("div.art-cont-container").toggleClass("art-cont-container-toggle");

    });

    // Animated Arrow //
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(300)
                .delay(800)
                .fadeOut(300, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});