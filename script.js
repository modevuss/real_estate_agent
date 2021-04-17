$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
    });
});






$(document).ready(function() {
    $('#dropdown__looking').click(function() {
        $('#dropdown__looking-links').toggleClass('_active');
    });
});

$(document).ready(function() {
    $('#dropdown__locat').click(function() {
        $('#dropdown__locat-links').toggleClass('_active');
    });
});

$(document).ready(function() {
    $('#dropdown__prop').click(function() {
        $('#dropdown__prop-links').toggleClass('_active');
    });
});

$(document).ready(function() {
    $('#dropdown__price').click(function() {
        $('#dropdown__price-links').toggleClass('_active');
    });
});






$(document).ready(function() {
    $('#tab_1').hover(function() {
        $('#tab_content_1').toggleClass("_active");
    })
})

$(document).ready(function() {
    $('#tab_2').hover(function() {
        $('#tab_content_2').toggleClass("_active");
    })
})

$(document).ready(function() {
    $('#tab_3').hover(function() {
        $('#tab_content_3').toggleClass("_active");
    })
})