
// ============ краказябры =============


// $(function(){

// 	// container is the DOM element;
// 	// userText is the textbox

// 	var container = $(".container")

// 	// Shuffle the contents of container
// 	container.shuffleLetters();

// 	// Leave a 4 second pause

// });


// ============ краказябры END =============


(function($) {
    $(function() {
        $('#top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    })
})(jQuery)

$(function() {
    $('a[href=#mywork]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#mywork').offset().top
        }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('a[href=#contacts]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#contacts').offset().top
        }, 800);
        e.preventDefault();
    });
});

$(function() {
    $('a[href=#frontend]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#frontend').offset().top
        }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('a[href=#htmlCss]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#htmlCss').offset().top
        }, 500);
        e.preventDefault();
    });
});

$(function() {
    $('a[href=#design]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#design').offset().top
        }, 500);
        e.preventDefault();
    });
});

$(function() {
    $('a[href=#fullSite]').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $('#fullSite').offset().top
        }, 500);
        e.preventDefault();
    });
});
