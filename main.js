const openBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".close_menu_btn");
const menu = document.querySelector(".group_items");

openBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  document.body.classList.add("overlay");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove("overlay");
});

// mobile admin toggle
const adminAvi = document.querySelector(".m_user");
const adminSection = document.querySelector(".m_admin");
const close = document.querySelector(".close_admin_btn");

adminAvi.addEventListener("click", () => {
  adminSection.style.display = "flex";
  document.body.classList.add("overlay");
});

close.addEventListener("click", () => {
  adminSection.style.display = "none";
  document.body.classList.remove("overlay");
});

// Date and time stamp
function displayTime() {
  let d = new Date();
  let a_p = "";
  let hour = d.getHours();
  let minute = d.getMinutes();

  if (hour < 12) {
    a_p = " AM";
  } else {
    a_p = " PM";
  }

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  hour = checkTime(hour);
  minute = checkTime(minute);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  let time = hour + ":" + minute + a_p;

  const printTime = document.querySelector(" .time");
  return (printTime.textContent = time);
}

displayTime();

// date
function displayDate() {
  const d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let day = d.getDay();

  // months of the year
  switch (month) {
    case 0:
      month = " Jan " + date;
      break;

    case 1:
      month = " Feb " + date;
      break;

    case 2:
      month = " Mar " + date;
      break;

    case 3:
      month = " Apr" + date;
      break;

    case 4:
      month = " May " + date;
      break;

    case 5:
      month = " Jun " + date;
      break;

    case 6:
      month = " Jul " + date;
      break;

    case 7:
      month = " Aug " + date;
      break;

    case 8:
      month = " Sep" + date;
      break;

    case 9:
      month = " Oct" + date;
      break;

    case 10:
      month = " Nov " + date;
      break;

    case 11:
      month = " Dec " + date;
      break;

    default:
      break;
  }

  const theDate = document.querySelector(".date");
  const currentDate = month + ", " + year + " AT ";
  return (theDate.innerHTML = currentDate);
}

displayDate();

// comment
const commentContainer = document.querySelector(".comments");
const addComment = document.querySelector(".write_comment");

addComment.addEventListener("submit", (e) => {
  e.preventDefault();
  // get the input values
  const textareaValue = addComment.querySelector("textarea").value;
  const nameValue = addComment.querySelector("#name").value;
  // create  elements

  // first div to wrap  a single comment
  const comment = document.createElement("div");
  comment.classList.add("comment");

  // div2 to wrap the username, date and time, and the comment written.
  const div2 = document.createElement("div");
  const imgSrc = document.createElement("img");

  // img element for avatar
  imgSrc.setAttribute("width", "40");
  imgSrc.setAttribute("alt", "Avatar");
  imgSrc.src = "./img/Lo.png";

  // h2 for username
  const username = document.createElement("h4");
  username.classList.add("name");
  // span for date and time
  const timeAndDate = document.createElement("div");
  timeAndDate.className = "date_n_time";

  const dateStamp = document.createElement("span");
  const timeStamp = document.createElement("span");

  dateStamp.classList.add("date");
  timeStamp.classList.add("time");

  // p to contain the written comment
  const p = document.createElement("p");

  // like button
  const likeBtn = document.createElement("i");
  likeBtn.classList.add("icofont-like");

  // appending elements
  p.appendChild(document.createTextNode(textareaValue));
  username.appendChild(document.createTextNode(nameValue));

  if (
    textareaValue.trim() === "" ||
    (null && nameValue.trim() === "") ||
    null
  ) {
    alert("Enter name and comment");
    return false;
  }

  div2.appendChild(username);
  dateStamp.appendChild(document.createTextNode(displayDate()));
  timeStamp.appendChild(document.createTextNode(displayTime()));
  timeAndDate.appendChild(dateStamp);
  timeAndDate.appendChild(timeStamp);
  div2.appendChild(timeAndDate);
  div2.appendChild(p);
  div2.appendChild(likeBtn);
  comment.appendChild(imgSrc);
  comment.appendChild(div2);
  commentContainer.appendChild(comment);

  // clearing value from inputs
  addComment.querySelector("textarea").value = "";
  addComment.querySelector("#name").value = "";
});

const like = document.querySelector(".icofont-like");
like.addEventListener("click", likeBtn);
function likeBtn() {
  let addLike = like.textContent;
  addLike = Number(addLike);
  addedLike = addLike + 1;
  like.textContent = addedLike;
  return like;
}
