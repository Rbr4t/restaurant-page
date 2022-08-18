import './style.css';
import hamburger from './hamburger.jpg';
import fries from './fries.jpeg';
import coke from './coke.jpg';


export default function menu(){
    const page = document.querySelector('#content');
    while(page.firstChild){
        page.removeChild(page.firstChild);
    }
    
    const div = document.createElement('div');
    div.classList.add("dishes");
    page.appendChild(div)

    //dish one - hamburger, coke, fries
    const food = [hamburger, fries, coke];
    
    for(let i=0; i<3; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        const message = document.createElement('h1');
        const img = new Image();
        img.src = food[i]
        img.setAttribute('class', 'img')
        card.appendChild(img)
        message.textContent = ['hamburger', 'fries', 'coke'][i];
        card.appendChild(message);
        div.appendChild(card)
        console.log("Hi")
    }

}