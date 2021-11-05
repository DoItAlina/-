let calc = {
    input_num_1: 0,

    input_num_2: 0,

    check: function () {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;    
    num2 = parseInt(num2);

  const isValid = (isFinite(num1)) && (isFinite(num2))
   if (isValid) {
      this.input_num_1 = num1
      this.input_num_2 = num2
      
      return true
  } 
   else { 
       document.getElementById('out').innerHTML = 'ERROR';
          return false;
  }
}

}

  function sum() {
        if (calc.check()) {
        let result =  this.input_num_1 + this.input_num_2
          console.log(result)
        document.getElementById('out').innerHTML = result;
    }
}
function sub() {
    if (calc.check()) {
    let result =  this.input_num_1 - this.input_num_2
      console.log(result)
    document.getElementById('out').innerHTML = result;
}
}