

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const priceOutput = document.getElementById('price-output');
  
    if (!form || !priceOutput) return;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const type = document.getElementById('type').value;
      const pages = parseInt(document.getElementById('pages').value);
      const design = form.querySelector('input[name="design"]:checked')?.value;
  
      if (!pages || !design) {
        priceOutput.textContent = 'Please fill out all fields correctly.';
        return;
      }
  
      let basePrice = 0;
      switch (type) {
        case 'Business Site':
          basePrice = 1000;
          break;
        case 'Online Store':
          basePrice = 2000;
          break;
        case 'Blog':
          basePrice = 800;
          break;
      }
  
      const pagePrice = pages * 200;
      const designPrice = design === 'yes' ? 500 : 0;
  
      const total = basePrice + pagePrice + designPrice;
  
      priceOutput.textContent = `Estimated Price: $${total}`;
    });
  });
  