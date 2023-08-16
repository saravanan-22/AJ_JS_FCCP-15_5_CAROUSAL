document.addEventListener("DOMContentLoaded", function () {
  let leftArrow = document.querySelector("#left");
  let rightArrow = document.querySelector("#right");
  let image = document.querySelector("#image");
  let title = document.querySelector("#title");
  let company = document.querySelector("#company");
  let review = document.querySelector("#review");






  let images = [
    "./images/adrian-williams-img.png",
    "./images/ronald-jones-img.png",
    "./images/sherry-jhonson-img.png",
    "./images/wade-warren-img.png",
  ];



  let titles = [
    "Adrian Williams",
    "Ronald Janes",
    "Sherry Jhonson",
    "Wade Warren",
  ];



  let companies = [
    "Infinos Tech",
    "Infinos Tech",
    "Infinos Tech",
    "Infinos Tech",
  ];



  let reviews = [
    "The most important thing I learnt is that nothing is a failure,but what we learn from that is a rich and rewarding experience.",
    "Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.",
    "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
    "I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.",
  ];


  

  let currentImageIndex = 0;




  function updateContent() {
    image.src = images[currentImageIndex];
    title.innerHTML = titles[currentImageIndex];
    company.innerHTML = companies[currentImageIndex];
    review.innerHTML = reviews[currentImageIndex];
  }



  rightArrow.addEventListener("click", function (e) {
    e.preventDefault();
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    updateContent();
  });




  leftArrow.addEventListener("click", function (e) {
    e.preventDefault();
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    updateContent();
  });




  // Initialize the content with the first image
  updateContent();
});
