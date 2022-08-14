import Logo from './logo.png';
import './style.css';

function homePage(){
    const page = document.querySelector('#content');

    // header
    const header = document.createElement('div');
    header.classList.add('header');
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    const myLogo = new Image();
    myLogo.src = Logo;
    a.appendChild(myLogo);
    

    const a1 = document.createElement('a');
    a1.setAttribute('href', '#')
    a1.textContent = 'Home';
    

    const a2 = document.createElement('a');
    a2.setAttribute('href', '#');
    a2.textContent = 'Menu';

    const a3 = document.createElement('a');
    a3.setAttribute('href', '#');
    a3.textContent = 'About';
    
    header.appendChild(a);
    header.appendChild(a1);
    header.appendChild(a2);
    header.appendChild(a3);
    page.appendChild(header);

    // content
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const message = document.createElement('h2');
    message.textContent = 'Better than Burger King!';

    intro.appendChild(message);
    page.appendChild(intro);

    // footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const aFooter = document.createElement('a');
    aFooter.textContent = 'Terms of Service';
    aFooter.setAttribute('href', '#');
    const CR = document.createElement('p');
    CR.textContent = 'Copyright © 2022';

    footer.appendChild(aFooter);
    footer.appendChild(CR);
    page.appendChild(footer);
};
homePage()