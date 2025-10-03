const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo');
    }
  });
});

observer.observe(document.querySelector('.animate-polaroid1'));
observer.observe(document.querySelector('.animate-polaroid2'));
observer.observe(document.querySelector('.animate-polaroid3'));
observer.observe(document.querySelector('.animate-rose'));
observer.observe(document.querySelector('.animate-selo'));
observer.observe(document.querySelector('animate-foto'));
observer.observe(document.querySelector('animate-camera'))