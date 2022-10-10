import Screenshot from './assets/Screenshot.png'; 
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('div')
document.body.append(root)

ReactDOM.render(<h1>Hello world 2</h1>, root)

const start = () => {

const element = document.createElement('h1')

element.append('Привет мир')

const img = document.createElement('img');
img.src = Screenshot

document.body.append(element, img);
}