const $card = $('.card');
    
function shufcard() {
    $card.each(function() {
        if ($(this).hasClass("card-back-img")) {
            $(this).removeClass("card-back-img");
        } else {
            $(this).addClass("card-back-img");
        }
    });
}
let intervalId;

function startInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(shufcard, 10000);
}
$card.on('click', function() {
    shufcard();
    startInterval();
});
startInterval();
$(document).ready(function() {
    var $loading = $('#loading'); // Pastikan elemen loading sudah ada dengan ID 'loading'
    $loading.show(); // Tampilkan elemen loading di awal

    var totalImages = $('img').length;
    var loadedImages = 0;

    $('img').on('load', function() {
        loadedImages++;
        if (loadedImages === totalImages) {
            $loading.hide(); // Sembunyikan elemen loading setelah semua gambar selesai dimuat
        }
    }).each(function() {
        if (this.complete) {
            $(this).trigger('load');
        }
    });
});
function showVideo(url){
  $(".mediaViewer").removeClass("hidden");
  $(".videoPlayer").attr("src", url);
}
function closeVideo(){
  $(".mediaViewer").addClass("hidden");
  $(".videoPlayer").attr("src", '');
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function toggleVisibility() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const pageYOffset = window.pageYOffset;
            const viewportHeight = window.innerHeight;

            const contentDiv = section.querySelector(
            '.animed'); // tulisan ini cuma mau ngetes key board aja kok 
            // apa yang harus aku tulis selanjutnya membuat aku bingung sekali apa coba             

            if (pageYOffset >= (sectionTop - viewportHeight / 3) && pageYOffset < (sectionTop +
                    sectionHeight - viewportHeight / 3)) {
                contentDiv.classList.remove('hidden');
                contentDiv.classList.remove('animate__animated', 'animate__fadeOut');
            } else {
                if (!contentDiv.classList.contains('hidden')) {
                    contentDiv.classList.add('animate__animated', 'animate__fadeOut');

                    section.addEventListener('animationend', function handleAnimationEnd() {
                        contentDiv.classList.add('hidden');
                        contentDiv.classList.remove('animate__animated', 'animate__fadeOut');
                        contentDiv.removeEventListener('animationend', handleAnimationEnd);
                    }, {
                        once: true
                    });
                }
            }
        });
    }

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    toggleVisibility(); // Initial check
});
let kondisinav = true;
function navClickMain () {
    visibilityNav(!kondisinav);
}
function visibilityNav(condition) {
  var $item = $('.main-nav-item');

  if (condition) {
    $('#main-nav').removeClass('main-nav-out').addClass('main-nav');

    kondisinav = true;
    if ($item.hasClass('animate__fadeOutLeft')) {
      $item.each(function() {
        if ($(this).hasClass('left')) {
          $(this).removeClass('animate__fadeOutRight').addClass('animate__fadeInRight');
        } else {
          $(this).removeClass('animate__fadeOutLeft').addClass('animate__fadeInLeft');
        }
      });
    } else {
      $item.each(function() {
        if ($(this).hasClass('left')) {
          $(this).addClass('animate__fadeInRight');
        } else {
          $(this).addClass('animate__fadeInLeft');
        }
      });
    }
  } else {
    kondisinav = false;
    $('#main-nav').addClass('main-nav-out').removeClass('main-nav');

    if ($item.hasClass('animate__fadeInRight') || $item.hasClass('animate__fadeInLeft')) {

      $item.each(function() {
        if ($(this).hasClass('left')) {
          $(this).removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
        } else {
          $(this).removeClass('animate__fadeInLeft').addClass('animate__fadeOutLeft');
        }
      });
    } else {
      $item.each(function() {
        if ($(this).hasClass('left')) {
          $(this).addClass('animate__fadeOutRight');
        } else {
          $(this).addClass('animate__fadeOutLeft');
        }
      });
    }
  }
}
var divElement = $('#about-skill');
var scrollPosition = (divElement[0].scrollWidth - divElement.outerWidth()) / 2;
divElement.scrollLeft(scrollPosition);

$(document).ready(function() {
  visibilityNav(true);
});