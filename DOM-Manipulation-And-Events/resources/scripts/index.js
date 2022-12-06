const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says "Hey I'm red!"
const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey I'm Red!"
p.style.color = 'red';

container.appendChild(p);

//an <h3> with blue text that says "I'm a blue h3!"
const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue';

container.appendChild(h3);

//A <div> with a black border and pink background color with the following elements inside:
const div = document.createElement('div');
div.setAttribute('style', 'border: black; background: pink;');

//Another <h1> that says "I'm in a div"
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

//a <p> that says "ME TOO!"
const p2 = document.createElement('p');
p2.classList.add('p');
p2.textContent = "ME TOO!";
div.appendChild(p2);

container.appendChild(div);

//Method 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

//Method 2 Event Listener
btn.onclick = alertFunction;

//Method 3 Event Listener
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });