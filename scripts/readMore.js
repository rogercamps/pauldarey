function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
  }

  
  // if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  // } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  // }
}


// const readMoreBtn = document.querySelector('#myBtn');
// const text = document.querySelector('.text');

// readMoreBtn.addEventListener('click', event => {
//   text.classList.toggle('showMore');
//   if (readMoreBtn.innerText === 'Read more') {
//     readMore.innerText = 'Read less';
//   } else {
//     readMore.innerText = 'Read more';
//   }
// });


 