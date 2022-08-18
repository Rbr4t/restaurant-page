import './style.css';

export default function about(){
    const page = document.querySelector('#content');
    while(page.firstChild){
        page.removeChild(page.firstChild);
    }
    const div = document.createElement('div');
    div.classList.add("about");
    
    const textN1 = document.createElement('h1');
    const textN2 = document.createElement('h1');

    const text1 = document.createTextNode('What do you expect from here?')
    const text2 = document.createTextNode('We don\'t have anything lol')
    textN1.appendChild(text1)
    textN2.appendChild(text2)
    div.appendChild(textN1)
    div.appendChild(textN2)

    page.appendChild(div)
}