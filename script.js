

    let num1, num2, result;
    function plus() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;

         if (isNaN (num1) || isNaN(num2)) {alert ("ERROR");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}

         num2 = document.getElementById('n2').value;
         num2 = +num2;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         result = num1 + num2;
         document.getElementById('out').innerHTML = result;
    }
    function minus() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         num2 = document.getElementById('n2').value;
         num2 = +num2;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         result = num1 - num2;
         document.getElementById('out').innerHTML = result;
    }
    function mult() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         num2 = document.getElementById('n2').value;
         num2 = +num2;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         result = num1 * num2;
         document.getElementById('out').innerHTML = result;
    }
    function div() {
         
         num1 = document.getElementById('n1').value;
         num1 = +num1;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}


         num2 = document.getElementById('n2').value;
         num2 = +num2;

         if (isNaN (num1) || isNaN(num2)) {alert ("Error");}
         if (num1 == "" || num2 == "") { alert ("Введите число!");}
         
         result = num1 / num2;
         document.getElementById('out').innerHTML = result;
    }
    