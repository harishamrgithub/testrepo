let length;


function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

   function calculateGroceryCost() {
    let grocery1cost = parseFloat(document.getElementById('cost1').value);
    let grocery2cost = parseFloat(document.getElementById('cost2').value);
    let grocery3cost = parseFloat(document.getElementById('cost3').value);

    let totalcost = grocery1cost + grocery2cost + grocery3cost;
    document.getElementById('groceryResult').innerText = `The total cost of the Grocery is : ${totalcost}`;

   }