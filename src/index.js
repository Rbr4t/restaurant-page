import Logo from './logo.png';
import Burger from './burger.jpeg';
import './style.css';
import Menu from './menu.js';
import About from './about';

function hometext(){
    // content
    const page = document.querySelector('#content');
    
    while(page.firstChild!==null){
        page.removeChild(page.firstChild);
    }
    
    const div4 = document.createElement('div'); 
    const intro = document.createElement('div');
    intro.classList.add('intro');
    const burger = new Image();
    burger.src = Burger;
    burger.classList.add('burger')
    
    const message = document.createElement('h2');
    message.textContent = 'Better than Burger King!';
    div4.appendChild(burger)
    div4.appendChild(message)

    
    intro.appendChild(div4)
    page.appendChild(intro);
    
}

function homePage(){
    

    // header
    const header = document.createElement('div');
    const div1 = document.createElement('div'); 
    div1.classList.add('logo')
    header.classList.add('header');
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    
    const myLogo = new Image();
    myLogo.src = Logo;
    a.appendChild(myLogo);
    a.classList.add('image')
    

    const div2 = document.createElement('div'); 
    div2.classList.add('nav')
    const a1 = document.createElement('a');
    a1.classList.add('navbutton')
    a1.setAttribute('id', 'home')
    a1.textContent = 'Home';
    

    const a2 = document.createElement('a');
    a2.classList.add('navbutton')

    a2.setAttribute('id', 'menu')
    a2.textContent = 'Menu';

    const a3 = document.createElement('a');
    a3.classList.add('navbutton')

    a3.setAttribute('id', 'about')
    a3.textContent = 'About';
    
    div1.appendChild(a)
    div2.appendChild(a1)
    div2.appendChild(a2)
    div2.appendChild(a3)

    header.appendChild(div1);
    header.appendChild(div2);
    
    document.body.appendChild(header);

    const page = document.createElement('div');
    page.setAttribute('id', 'content')
    document.body.appendChild(page)
    hometext()
    // footer
    

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const aFooter = document.createElement('a');
    aFooter.textContent = 'Terms of Service';
    aFooter.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    const CR = document.createElement('p');
    CR.textContent = 'Copyright © 2022';
    footer.appendChild(aFooter)
    
    footer.appendChild(CR)
    document.body.appendChild(footer);
};
homePage()


// tab switch
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    Menu()
})
const home = document.querySelector('#home');
home.addEventListener('click', () => {
    hometext()
});

const about = document.querySelector('#about');
about.addEventListener('click', ()=> {
    About()
})
const logo = document.querySelector('.logo');
logo.addEventListener('click', ()=>{
    hometext()
})