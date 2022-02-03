files = [
   "1",
   "2",
   "12",
   "6",
   "13",
   "16",
   "14",
   "15",
   "3",
   "5",
   "17",
   "7",
   "18",
   "19",
   "4",
   "8",
   "20",
   "21",
   "22",
   "9",
   "10",
   "11"
];

const bigImage = document.getElementById("bigImage");
current = 0;
bigImage.src = "imgs/" + files[current] + ".png"; // change this to make it so you can switch them when the arrows exist

function prevSlide() {
   console.log("bruh1");
   if (current < 1) {
      current = files.length - 1;
   } else {
      current -= 1;
   }
   bigImage.src = "imgs/" + files[current] + ".png";
}

function nextSlide() {
   console.log("bruh2");
   if (current > files.length - 2) {
      current = 0;
   } else {
      current += 1;
   }
   bigImage.src = "imgs/" + files[current] + ".png";
}


document.getElementById("arrowL").addEventListener("click", prevSlide);
document.getElementById("arrowR").addEventListener("click", nextSlide);
