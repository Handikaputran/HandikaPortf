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
$(document).ready(function() {
  const $sections = $('section');

  function toggleVisibility() {
      $sections.each(function() {
          const $section = $(this);
          const sectionTop = $section.offset().top;
          const sectionHeight = $section.outerHeight();
          const pageYOffset = $(window).scrollTop();
          const viewportHeight = $(window).height();

          let $contentDiv = $section.find('.animed'); // Assuming .animed is inside each section

          if (pageYOffset >= (sectionTop - viewportHeight / 3) && pageYOffset < (sectionTop + sectionHeight - viewportHeight / 3)) {
              $contentDiv.removeClass('hidden');
              $contentDiv.removeClass('animate__animated animate__fadeOut');
          } else {
              if (!$contentDiv.hasClass('hidden')) {
                  $contentDiv.addClass('animate__animated animate__fadeOut');
                  $contentDiv.one('animationend', function() {
                      $contentDiv.addClass('hidden');
                      $contentDiv.removeClass('animate__animated animate__fadeOut');
                  });
              }
          }
      });
  }

  $(window).on('scroll resize', toggleVisibility);
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


$(document).ready(function() {
  visibilityNav(true);
});



function showNotification(message) {
  const $notivContainer = $('#notiv-container');

  // Buat elemen notifikasi baru
  const $notivBox = $('<div>', { class: 'box w-full h-14 bg-white items-center shadow-md border-slate-200 border overflow-hidden rounded-s-full gap-2 rounded-ee-full flex relative opacity-0' });
  const $icon = $('<div>', { class: 'icon w-14 h-14 text-4xl rounded-full flex items-center justify-center shadow-md' }).html('<ion-icon name="notifications"></ion-icon>');
  const $message = $('<div>').text(message);
  const $removeBtn = $('<button>', { class: 'remove-notiv text-red-400 absolute top-3 right-3' }).html('<ion-icon name="close"></ion-icon>');

  // Gabungkan elemen
  $notivBox.append($icon, $message, $removeBtn);
  $notivContainer.append($notivBox);

  // Tampilkan kontainer notifikasi jika belum ditampilkan
  if ($notivContainer.children().length === 1) {
    $notivContainer.removeClass('hidden').addClass('show');
  }

  // Gunakan Tailwind untuk transisi
  $notivBox.addClass('transition-opacity duration-500 ease-in-out');
  setTimeout(() => $notivBox.removeClass('opacity-0').addClass('opacity-100'), 10); // delay untuk memulai transisi

  // Atur timer untuk menghilangkan notifikasi setelah 5 detik
  const hideTimer = setTimeout(() => {
    $notivBox.removeClass('opacity-100').addClass('opacity-0');
    setTimeout(() => {
      $notivBox.remove();
      if ($notivContainer.children().length === 0) {
        $notivContainer.removeClass('show').addClass('hidden');
      }
    }, 500); // waktu yang sama dengan durasi transisi
  }, 5000);

  // Tambahkan event listener untuk tombol hapus
  $removeBtn.on('click', function() {
    clearTimeout(hideTimer);
    $notivBox.removeClass('opacity-100').addClass('opacity-0');
    setTimeout(() => {
      $notivBox.remove();
      if ($notivContainer.children().length === 0) {
        $notivContainer.removeClass('show').addClass('hidden');
      }
    }, 500);
  });
}

// text writter

$(document).ready(function() {
  const $jobContainer = $('.job-animation');
  const jobs = ["Website", "API", "Game"];
  let jobIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150; // Adjust typing speed
  let erasingSpeed = 100; // Adjust erasing speed
  let newWordDelay = 2000; // Delay between current and next word

  function type() {
      const currentJob = jobs[jobIndex];
      const displayedText = currentJob.substring(0, charIndex);

      $jobContainer.text(displayedText);

      if (!isDeleting && charIndex < currentJob.length) {
          charIndex++;
          setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(type, erasingSpeed);
      } else if (!isDeleting && charIndex === currentJob.length) {
          isDeleting = true;
          setTimeout(type, newWordDelay);
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          jobIndex = (jobIndex + 1) % jobs.length;
          setTimeout(type, typingSpeed);
      }
  }

  setTimeout(type, typingSpeed);
});

