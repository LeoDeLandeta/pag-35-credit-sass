// cardholder name
let nameCard = document.querySelector('.card__details-name');
let nameInput =document.querySelector('#cardholder');
let nameErrorDiv= document.querySelector('.form__cardholder--error');

//card number
let numberCard =document.querySelector('.card__number');
let numberInput=document.querySelector('#cardNumber');
let numberErrorDiv= document.querySelector('.form__inputnumber--error');

//card mm
let monthCard=document.querySelector('.card__month');
let mothInput=document.querySelector('#cardMonth');
let monthErrorDiv=document.querySelector('.form__input-mm--error');
//card yy
let yearCard =document.querySelector('.card__year');
let yearInput=document.querySelector('#cardYear');
let yearErrorDiv=document.querySelector('.form__input-yy--error');

//card cvc
let cvcCard=document.querySelector('.card-back__cvc');
let cvcInput=document.querySelector('#cardCvc');
let cvcErrorDiv=document.querySelector('.form__input-cvc--error');

//ingreso dinamico del nombre
nameInput.addEventListener('input',()=>{
   if(nameInput.value==''){
      nameCard.innerText='JANE APPLESEED';
   }else{
   nameCard.innerText = nameInput.value;
   }
});

//ingreso dinamico del number
numberInput.addEventListener('input',event=>{
   let inputValue=event.target.value;
  //actualizando la targeta
   numberCard.innerText=numberInput.value;
   //validando que haya una letra
   let regExp=/[A-z]/g;
   if(regExp.test(numberInput.value)){
      showError(numberInput,numberErrorDiv,'Wrong format, numbers only',true);
      
   }else{
      numberInput.value= inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
      showError(numberInput,numberErrorDiv,'',false);
     
   }

   //mostrando los 0 por defecto
   if(numberInput.value ==''){
      numberCard.innerText='0000 0000 0000 0000';
   }
});

//ingreso dinmamico del mes
mothInput.addEventListener('input',()=>{ 
   monthCard.innerText= mothInput.value;
   validateLetters(mothInput,monthErrorDiv) ;
});
//ingreso dinamico del año
yearInput.addEventListener('input',()=>{
   yearCard.innerText=yearInput.value;
   validateLetters(yearInput,yearErrorDiv);
});
//ingreso dinamico del cvc
cvcInput.addEventListener('input',()=>{
   cvcCard.innerText=cvcInput.value;
   validateLetters(cvcInput,cvcErrorDiv);
});



//boton confirm
let confirmBtn= document.querySelector('.form__submit');
let nameValidation=false;
let numberValidation=false;
let monthValidation=false;
let yearValidation=false;
let cvcValidation= false;

//formulario seccion y thanks
let forSection=document.querySelector('.form');
let thanksSection=document.querySelector('.thanks-section');

confirmBtn.addEventListener('click',event=>{
   event.preventDefault();
   console.log(parseInt(mothInput.value));

   //validar name

   if(verifyIsFilled(nameInput,nameErrorDiv)){
      nameValidation=true;
   }else{
      nameValidation=false;
   }
   //validar numero
   if (verifyIsFilled(numberInput, numberErrorDiv)==true){
      if(numberInput.value.length ==19){
         showError(numberInput,numberErrorDiv,'' ,false);
         numberValidation=true;
      }else{
         showError(numberInput,numberErrorDiv,'wrong number');
         numberValidation=false;
      }
   }
   
   //validar mes
   
   if(verifyIsFilled(mothInput,monthErrorDiv)){
      if(parseInt(mothInput.value)>0 && parseInt(mothInput.value)<=12){
         showError(mothInput,
            monthErrorDiv,'',false);
         monthValidation=true;
      }else{
         showError(mothInput,monthErrorDiv,'Month incorrect',true);
         monthValidation=false;
      }
   }

   
   //validar año
   
   if(verifyIsFilled(yearInput,yearErrorDiv)){
      if(parseInt(yearInput.value)>=23 && parseInt(yearInput.value)<=28){
         showError(yearInput,yearErrorDiv,'',false);
         yearValidation=true;
      }else{
         showError(yearInput,yearErrorDiv,'Wrong year');
         yearValidation=false;
      }
   }
   //validar cvc

   if( verifyIsFilled(cvcInput,cvcErrorDiv)){
      if(cvcInput.value.length ==3){
         showError(cvcInput,cvcErrorDiv,'',false);
         cvcValidation=true;
      }else{
         showError(cvcInput,cvcErrorDiv,'Wrong cvc');
         cvcValidation=false;
      }
   }
   if(nameValidation==true && numberValidation==true&& monthValidation==true&&yearValidation==true&&cvcValidation==true){
      forSection.style.display ='none';
      thanksSection.style.display='block';
   }
});




//funciones
function showError(divInput,divError,msgError,show=true){
  if(show){
   divError.innerText=msgError;
   divInput.style.borderColor=' hsl(0, 100%, 66%)';
  }else{
   divError.innerText=msgError;
   divInput.style.borderColor=' hsl(270, 3%, 87%)';
  }
}

function verifyIsFilled(divInput, divError){
   if(divInput.value.length>0){
      showError(divInput,divError,"",false);
      return true;
   }else{
      showError(divInput,divError,"can´t be blank");
      return false
   }

}

function validateLetters(input,divError){
   let regExp=/[A-z]/g;
   if(regExp.test(input.value)){
      showError(input,divError,'Wrong format, numbers only',true);
      
   }else{
      showError(input,divError,'',false);
   }
}


