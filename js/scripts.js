const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Lightbox logic for gallery images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const galleryImages = document.querySelectorAll('.gallery img');

if (galleryImages && lightbox && lightboxImg && closeBtn) {
  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      const fullSrc = img.getAttribute('data-full') || img.src;
      lightboxImg.setAttribute('src', fullSrc);
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.setAttribute('src', '');
  });
}

// Services search filter
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('.service-item');
    items.forEach((item) => {
      const name = (item.getAttribute('data-name') || '').toLowerCase();
      item.style.display = name.includes(filter) ? 'block' : 'none';
    });
  });
}

// Enquiry form processing & response
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const name = document.getElementById('name').value;

    let quote;
    if (service === 'straightening') {
      quote = 'R1,200';
    } else if (service === 'welding') {
      quote = 'R1,800';
    } else if (service === 'polishing') {
      quote = 'R1,000';
    } else if (service === 'diamond') {
      quote = 'R2,500';
    } else if (service === 'alignment') {
      quote = 'R600';
    } else {
      quote = null;
    }

    const response = document.getElementById('quoteResponse');
    if (quote) {
      response.innerHTML = `
        <h3>Thank you, ${name}!</h3>
        <p>For the service <strong>${service}</strong>, the estimated cost is: <strong>${quote}</strong>.</p>
        <p>We will contact you at the provided email to confirm.</p>
      `;
    } else {
      response.innerHTML = `<p>Please select a service.</p>`;
    }
  });
}