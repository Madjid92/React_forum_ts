import  _  from 'lodash';
import "../assets/styles.css";
import printMe from './print';
import img from "../assets/robbie-lens.png";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());
  const imgNode = document.createElement('img');
  imgNode.setAttribute('src', img );
  document.body.appendChild(imgNode)