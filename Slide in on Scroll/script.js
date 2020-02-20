  function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));

    $('#mailchimp-trigger').click(function(e){
  e.preventDefault()
  var nameInp = $('#form-field-name').val(),
      email = $('#form-field-email').val(),
      formMail = $('form#new_contact'),
      Mname = formMail.find('input[placeholder="Name"]'),
      Memail = formMail.find('input[placeholder="Email"]'),
      Mbtn = formMail.find('inpyt[type="submit"]');
    console.log(nameInp, email)

    Mname.val(nameInp)
    Memail.val(email)
    Mbtn.trigger('click')
});