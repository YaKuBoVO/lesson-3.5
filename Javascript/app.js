
IconMenu = document.querySelector(".icon-menu");
IconMenu.onclick = function() {
   navbarList = document.querySelector(".navbar-list");
   navbarList.classList.toggle("active");
}


let dropdown = document.querySelector('.dropdown');
   dropdown.onclick = function() {
      dropdown.classList.toggle('active');
   }


let ModalButton = document.querySelector(".modal-button");
      ModalButton.onclick = function() {
         ModalButton.classList.toggle("active");
      }