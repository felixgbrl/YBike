const form = document.getElementById('form');

let error = document.getElementById('error');

function printError(msg) {
    error.innerHTML = msg;
}

function hideErrorMsg() {
    error.style.visibility = 'hidden';
}

function validateNumber(input) {
    temp = '0123456789'
    console.log(input);
    for (let i =0 ; i<input.length ; i++){
      temp1=temp.indexOf(input[i])
      console.log(temp1)
    if(temp1==-1){
        return false;
    }
   
  }
  return true;
}


form.addEventListener('submit',function(e){

    let vixian = document.getElementById('vixian').checked;
    let kawasako = document.getElementById('kawasako').checked;

    let quantity = document.getElementById('quantity').value;
    let select1 = document.getElementById('select1').value;
    let year = document.getElementById('year').value;

    let type1 = document.getElementById('type1').checked;
    let type2 = document.getElementById('type2').checked;

    let name = document.getElementById('name').value;
    let telephone = document.getElementById('telephone').value;
    let address = document.getElementById('address').value;


 if(quantity == '' || name =='' ||telephone =='' || address == '' || year =='' ){
    printError('You must fill all the fields!');
 }
  if(name.length < 4 || name.length > 35){
     printError('Name must be at between 5-35 characters!');
 }
if (!type1 && !type2){
    printError('You must choose the engine!');
} 

if(!vixian && !kawasako){
    printError("Choose your motor!");
}
if(validateNumber(telephone)==false){
    printError("Phone number must only contain 0-9 number");
}
if(validateNumber(quantity)==false){
    printError("Quantity must only contains numbers");
}
else {
    if(confirm('Are sure to proceed')) {
        window.location.replace('product.html'); //nnti ini di buat ke home aja
    }
    else {
        location.reload();
    }
}



setTimeout('hideErrorMsg',3000);

e.preventDefault();

})
