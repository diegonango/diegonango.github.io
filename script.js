// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
        const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
                navbar.style.top="-50px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
    });

// TYPED
var typed = new Typed('.typed', {
    strings: ["Après l’obtention de mon BAC en série D, série scientifique au lycée Moderne d’Abengourou, j’ai suivie deux ans de formation au Groupe EST-LOKO dans la filière RIT (Réseaux informatiques et télécoms). A la fin de ces deux années de formation j’ai obtenu mon diplôme de BTS (Brevet de technicien supérieur) dans cette filière. Passionné des nouvelles technologies, je me suis lancer dans le domaine de la fibre optique (le réseau FTTH) à CAMUSAT-CI, une entreprise spécialisée dans les télécoms et aussi dans le domaine de la programmation web et de la sécurité informatique en faisant des formations et recherche en ligne."],
    typeSpeed: 20,
  });

// COMPTER LIVE
let compteur = 0;

$(window).scroll(function()

{
    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top)
    {
        $('.counter-value').each(function()
        {
            let $this = $(this)
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function()
                {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function()
                {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

//AOS
AOS.init();