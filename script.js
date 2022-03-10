const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(".container .seat:not(.occupied)");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

// önce local storage sonra selectbox
// initial value == movieSelectBox.value
// movieSelectBox.options[movieSelectBox.selectedIndex].value == movieSelectBox.value
let currentTicketPrice = localStorage.getItem
("selectedMoviePrice") ? localStorage.getItem
("selectedMoviePrice") : movieSelectBox.options
[movieSelectBox.selectedIndex].value;

// movieIndex
let currentMovieIndex = localStorage.getItem
("selectedMovieIndex") ? localStorage.getItem
("selectedMovieIndex") : movieSelectBox.selectedIndex;

movieSelectBox.addEventListener("change", (e) => {
    let ticketPrice = e.target.value;
    let movieIndex = e.target.selectedIndex;
    console.log(movieIndex);
    setMovieDataToLocalStorage(ticketPrice, movieIndex );
});


const setMovieDataToLocalStorage = (ticketPrice, movieIndex) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", ticketPrice);
};

container.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        console.log(e.target.classList);
    } 
    // updateMovieInfo();
});

