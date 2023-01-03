console.log("rehan")

let input = document.querySelectorAll(".inpt");

input = Array.from(input);

input.forEach((inpt) => {

    inpt.addEventListener('click', (clicked) => {

        inpt.style.placeholder = " " ;
    })
})




