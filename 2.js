const roomPrices = {
        estándar: 50,
        doble: 75,
        suite: 100
      };
    
      const deviceMultiplier = detectDevice() === 'mobile' ? 1 : 1.2; // 20% más caro en computadora
    
      document.getElementById('roomType').addEventListener('change', calculateTotalPrice);
      document.getElementById('checkInDate').addEventListener('change', calculateTotalPrice);
      document.getElementById('checkOutDate').addEventListener('change', calculateTotalPrice);
    
      function detectDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return 'mobile';
        } else {
          return 'desktop';
        }
      }
    
      function calculateTotalPrice() {
        const roomType = document.getElementById('roomType').value;
        const checkInDate = new Date(document.getElementById('checkInDate').value);
        const checkOutDate = new Date(document.getElementById('checkOutDate').value);
    
        if (roomType && checkInDate && checkOutDate) {
          const days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
          const basePrice = days * roomPrices[roomType];
          const totalPrice = basePrice * deviceMultiplier;
          document.getElementById('totalPrice').value = `$${totalPrice.toFixed(2)}`;
        }
      }


    

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });