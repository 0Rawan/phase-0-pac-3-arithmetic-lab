const add = (a, b)=>{
    return a +b;
}

const subtract = (a, b) =>{
    return a - b;
}

const multiply = (a, b) =>{
    return a * b;
}

const  divide = (a, b) => {
    return a / b;
}


const increment = (n)=>{
    return ++n;
}

const decrement = (n)=> {
    return --n;
}

function makeInt(n) {
    return parseInt(n, 10);
  }


  function preserveDecimal(n) {
    return parseFloat(n);
  }