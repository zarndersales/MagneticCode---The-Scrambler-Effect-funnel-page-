const ctaButton = document.querySelector('[data-cta-button]');
// Show CTA buttons after a delay
setTimeout(() => {
  ctaButton.classList.remove('hide');
}, 9000); // 90 seconds