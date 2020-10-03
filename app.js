// Select the section with an id of container without using querySelector.
document.getElementById('container');
// Select the section with an id of container using querySelector.
document.querySelector('#container');
// Select all of the list items with a class of “second”.
document.getElementsByClassName('second');
// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol', 'third');
// Give the section with an id of container the text “Hello!”.
const container = document.querySelector('#container');
container.prepend = `Hello!`;
// Add the class main to the div with a class of footer.
const footer1 = document.querySelector('.footer');
footer1.className += ` main`;
// Remove the class main on the div with a class of footer.
const footer2 = document.querySelector('.footer');
footer2.classList.remove('main');
// Create a new li element.
const newLi = document.createElement('li'); //const newLi = document.createTextNode('li');
// Give the li the text “four”.
newLi.innerText = 'four';
// Append the li to the ul element.
const ul = document.querySelector('ul');
ul.appendChild(newLi) // this code throw an error: Cannot read property 'appendChild' of null, I have try to fix the problem including jquery, but still not working
    // Loop over all of the lis inside the ol tag and give them a background color of “green”.
const liInOl = document.querySelectorAll('ol li');
for (let i = 0; i < liInOl.length; i++) {
    liInOl[i].style.backgroundColor = 'green';
}
// Remove the div with a class of footer
const footer3 = document.querySelector(".footer");
footer3.remove();
