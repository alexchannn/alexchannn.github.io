document.addEventListener("DOMContentLoaded", function () {
   var setVanta = () => {
      if (window.VANTA) {
         window.VANTA.WAVES({
            el: ".container", // Menggunakan class error-container
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xe0b, // Memperbaiki nilai warna
         });
      }
   };

   setVanta(); // Panggil setVanta di awal

   // Panggil setVanta saat event Page.beforeNewOneFadeIn terjadi
   if (window.edit_page && window.edit_page.Event) {
      window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
   }
});
