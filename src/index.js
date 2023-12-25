import  _  from 'lodash';
import "../assets/styles.css";
import img from "../assets/robbie-lens.png"

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  const imgNode = document.createElement('img');
  imgNode.setAttribute('src', img );
  document.body.appendChild(imgNode)