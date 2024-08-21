document.querySelector('#text').addEventListener('focusout',myText);
document.querySelector('#password').addEventListener('focusout',myPass);

document.querySelector('#btn').addEventListener('click',function(){
    myText();
    myPass();
});



function myText() {
    let message, text;
    let errElement= document.getElementById('text');
    message = document.getElementById('err');
    text = document.getElementById('text').value;
    console.log(text);


    try{
        if(text == ""){

            errElement.classList.remove('valid');
          errElement.classList.add('err');
          throw'empty'
        }
        if(text.length >0){
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML ='';
        }
        
    }catch (e){
            message.innerHTML = 'Qiymat' + 0;
    }
    
}

function myPass() {
    let message, pass;
    let errElement= document.getElementById('password');
    message = document.getElementById('err2');
    text = document.getElementById('password').value;


    try{
        if(text == ""){

            errElement.classList.remove('valid');
          errElement.classList.add('err');
          throw'empty'
        }
        if(text.length<8 ){

            errElement.classList.remove('valid');
          errElement.classList.add('err');
          throw'you need input 8 latters';
        }
        if(text.length >0){
            errElement.classList.remove('err');
            errElement.classList.add('valid');
            message.innerHTML ='';
        }
        
    }catch (e){
            message.innerHTML = 'Qiymat'+ 0;
    }
    
}