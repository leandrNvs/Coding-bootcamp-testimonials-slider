const data = [
  {
    name: "Tanya Sinclair",
    img: "./Assets/images/image-tanya.jpg",
    role: "UX Engineer",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now.  I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    name: "John Tarkpor",
    img: "./Assets/images/image-john.jpg",
    role: "Junior Front-end Developer",
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course.  The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];

const name = document.querySelector(".name");
const img = document.querySelector(".profile img");
const role = document.querySelector(".role");
const text = document.querySelector(".text");

const previous = document.querySelector('button[aria-label="previous"]');
const next = document.querySelector('button[aria-label="next"]');
let counter = 0;

window.onload = () => {
  render(data[0]);
};

previous.addEventListener("click", () => {
  if (counter <= 0) {
    counter = data.length - 1;
  } else {
    counter--;
  }

  render(data[counter]);
});

next.addEventListener("click", () => {
  if (counter + 1 == data.length) {
    counter = 0;
  } else {
    counter++;
  }

  render(data[counter]);
});

function render(item) {
  name.textContent = item.name;
  img.src = item.img;
  role.textContent = item.role;
  text.textContent = item.text;
}
