var inputSide1 = document.querySelector("#side-1");
var inputSide2 = document.querySelector("#side-2");
var inputSide3 = document.querySelector("#side-3");
var btnCheck = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#output");

function calculateArea(sideOne, sideTwo, sideThree)
{
      if(sideOne + sideTwo > sideThree && sideThree + sideTwo > sideOne && sideOne+ sideThree > sideTwo)
      {
            var s = (sideOne + sideTwo + sideThree)/2;
            var productOfSides = Number(s*(s-sideOne) * (s-sideTwo) * (s-sideThree));
            var sqrtOfSides = Number(Math.pow(productOfSides, (1/2)));
            var calculateArea =  Number(sqrtOfSides.toFixed(4));

            displayMessage.innerText = `Area is ${calculateArea} sq-units`;
      }
      else{
            displayMessage.innerText = "Enter valid length of each side"
      }

      console.log(`Semi-perimeter is:${s}`);
      console.log(`Product of ${sideOne}, ${sideTwo} and ${sideThree} is:` + productOfSides);
      console.log(`Area is: ${calculateArea} sq-units`);

}

function onClick()
{
      var sideOne = Number(inputSide1.value);
      var sideTwo = Number(inputSide2.value);
      var sideThree = Number(inputSide3.value);
      
      if(sideOne && sideTwo && sideThree && sideOne>0 && sideTwo>0 && sideThree>0)
      {
            calculateArea(sideOne, sideTwo, sideThree);
      }
      else
      {
            displayMessage.innerText = "Enter valid values of all sides to calculate area ⚠"
      }
}

btnCheck.addEventListener("click", onClick)
