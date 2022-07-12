Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@cierrajw 
cierrajw
/
cierrajw.github.io
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
cierrajw.github.io/main.js /
@cierrajw
cierrajw Add links and modify portfolio layout
Latest commit 3c9b146 on Apr 29, 2019
 History
 1 contributor
29 lines (24 sloc)  667 Bytes

let educationModal = $(".education-modal");
let portfolioModal = $(".portfolio-modal");
let experienceModal = $(".experience-modal");
let blogModal = $(".blog-modal");
let contactForm = $(".contact-form");
let closeButton = $(".close-btn");
let links = $(".nested-grid");

links.on('click', openModal);

closeButton.on('click', closeModal);

function openModal(){
  let clickedElement = event.target;

  switch(true){
    case clickedElement.classList.contains('contact'):
    contactForm.show();
    break;
    case clickedElement.classList.contains('blog'):
    blogModal.show();
    break;
  }
}

function closeModal(){
  contactForm.hide();
  blogModal.hide();
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
