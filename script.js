

    let num1, num2, result;
    function plus() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;
         num2 = document.getElementById('n2').value;
         num2 = +num2;
         result = num1 + num2;

         document.getElementById('out').innerHTML = result;
    }
    function minus() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;
         num2 = document.getElementById('n2').value;
         num2 = +num2;
         result = num1 - num2;

         document.getElementById('out').innerHTML = result;
    }
    function mult() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;
         num2 = document.getElementById('n2').value;
         num2 = +num2;
         result = num1 * num2;

         document.getElementById('out').innerHTML = result;
    }
    function div() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;
         num2 = document.getElementById('n2').value;
         num2 = +num2;
         result = num1 / num2;

         document.getElementById('out').innerHTML = result;
    }