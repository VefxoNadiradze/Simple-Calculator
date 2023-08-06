let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display')


let arr = []
let result;

buttons.forEach(btn =>{
  btn.addEventListener('click', function(){

    if(btn.innerHTML === '='){
      display.innerHTML = eval(result)
      
      Delete.innerHTML ='AC'

    }else if(btn.innerHTML === 'CE'){
      arr.pop();
      display.innerHTML = arr.join('')
    }else if(btn.innerHTML == 'AC'){
      arr = [];
      display.innerHTML = ' '
    }else{
      arr.push(btn.innerHTML);
      result = arr.join('');
      display.innerHTML = result
      Delete.innerHTML ='CE'
    }

  })

})

