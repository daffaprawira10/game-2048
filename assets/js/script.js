document.addEventListener('DOMContentLoaded', function () {
  var popupMenu = document.getElementById('popupMenu');
  var closePopupIcon = document.getElementById('closePopup');
  var closeAboutGame = document.getElementById('closeAboutGame');
  var aboutGame = document.getElementById('aboutGame');

  // Fungsi untuk menampilkan pop-up
  function showPopup() {
    popupMenu.style.display = 'block';
  }

  // Fungsi untuk menyembunyikan pop-up
  function hidePopup() {
    popupMenu.style.display = 'none';
  }

  function showAboutGame() {
    aboutGame.style.display = 'block';
  }

  function hideAboutGame() {
    aboutGame.style.display = 'none';
  }

  // Event listener untuk tombol play pada halaman index
  document.getElementById('playButton').addEventListener('click', showPopup);
  document
    .getElementById('game-info__icon')
    .addEventListener('click', showAboutGame);
  // Event listener untuk ikon tutup
  closePopupIcon.addEventListener('click', hidePopup);
  closeAboutGame.addEventListener('click', hideAboutGame);
});