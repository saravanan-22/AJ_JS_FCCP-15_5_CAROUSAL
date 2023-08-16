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


// DOM Elements Selection:
// The code starts by using the document.querySelector() method to select various HTML elements by their IDs. These elements are assumed to be present in the HTML document and correspond to the image slider's components:

// leftArrow: The left arrow button for navigating to the previous image.
// rightArrow: The right arrow button for navigating to the next image.
// image: An <img> element where the images will be displayed.
// title: A text container for displaying the title of the person associated with the image.
// company: A text container for displaying the company name.
// review: A text container for displaying the review or testimonial.
// Data Arrays:
// Several arrays are defined to hold the data for the slider:

// images: An array of image URLs.
// titles: An array of person names.
// companies: An array of company names.
// reviews: An array of reviews or testimonials.
// Index and Initialization:
// The variable currentImageIndex is initialized to 0, which represents the index of the currently displayed image.

// updateContent Function:
// This function updates the content of the slider based on the current index. It updates the src attribute of the image element to display the current image, and it updates the inner HTML of the title, company, and review elements with the corresponding data from the arrays.

// Event Listeners for Arrow Buttons:
// Event listeners are attached to the click events of the rightArrow and leftArrow elements. When the right arrow is clicked, the currentImageIndex is incremented to move to the next image. If the index goes beyond the length of the arrays, it wraps around to the first image. Similarly, when the left arrow is clicked, the currentImageIndex is decremented to move to the previous image. If the index goes below 0, it wraps around to the last image. After updating the index, the updateContent function is called to update the content displayed in the slider.

// Initialization and Content Update:
// The updateContent function is called initially to populate the slider with the content of the first image.