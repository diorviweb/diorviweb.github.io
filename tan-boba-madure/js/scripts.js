$(window).load(function () {

    resize();
    ponerEnMedio();
    navegar();
    portafolio();

    $('body').fadeTo('slow', 1, function () {
        $('#logo').fadeTo('slow', 1, function () {
            $('#nombre, .titulo').fadeTo('slow', 1, function () {
                $('.cta').fadeTo('slow', 1);
            })
        })
    });

});

$(window).resize(function () {
    resize();
    ponerEnMedio();
    portafolio();
});

// Da la altura a las secciones
function resize() {
    $.each($('.sec-medio'), function (index, value) {
        if ($(value).height() < $(window).height())
            $(value).height($(window).height());
    })
};

// Alinea verticalmente los elementos
function ponerEnMedio() {
    jQuery('.sec-medio .medio').vAlign();
};

(function (jQuery) {
    // VERTICALLY ALIGN FUNCTION
    jQuery.fn.vAlign = function () {
        return this.each(function (i) {
            var ah = jQuery(this).height();
            var ph = jQuery(this).parent().height();
            var mh = (ph - ah) / 2;
            jQuery(this).css('padding-top', mh);
        });
    };
})(jQuery);

//Navegación
function navegar() {
    $('.desplazar').on('click', function (e) {
        e.preventDefault();
        var $link = $(this);
        var anchor = $link.attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top + 0
        }, 1500);
    });
};


//Portafolio

 
function portafolio() {

    jQuery(".proy-cont").on({
        mouseenter: function () {
            jQuery(this).find('.proy-blur').fadeIn('fast');
            jQuery(this).find('.proy-img').addClass('blur');
            jQuery(this).find('.proy-item').addClass('show');
        },
        mouseleave: function () {
            jQuery(this).find('.proy-blur').fadeOut();
            jQuery(this).find('.proy-img').removeClass('blur');
            jQuery(this).find('.proy-item').removeClass('show');
        }
    });
    
     
    if (!jQuery('.over-layer').css('mix-blend-mode')) {
        jQuery('.over-layer').addClass('no-blend');
        jQuery('#cot-layer').addClass('no-blend');
    }

};

//Cambiador de palabras

var rotulo = ["Diseñadora Industrial", "Diseñadora de Medios Interactivos", "Aventurera", "También conocida como Diorvi", "Community Manager", "Diseñadora de contenidos", "Reina de los oryctolagus", "Renacida", "Lunática"],
  allRotulos = rotulo.length,
  firstRotulo = 0,
  change = $('.rotulo'),
  changeRotulo = function() {
    change.html(rotulo[firstRotulo]);
    firstRotulo = (firstRotulo + 1) % allRotulos;
  }

function ohNo() {
  ohYeah = setInterval(changeRotulo, 120);//must match css animation
};

$('.rotulo').hover(function() {
  $('body').removeClass('uhoh');
  $('#cube').removeClass('live');
  ohNo();
}, function() {
  clearInterval(ohYeah);
  if ($('.rotulo').text() == 'dooms') {
    $('body').addClass('uhoh');
  } else if ($('.rotulo').text() == 'Fri') {
    $('#cube').addClass('live');
  }
});
    
