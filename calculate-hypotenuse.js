var inputSide1 = document.querySelector("#side-1");
var inputSide2 = document.querySelector("#side-2");
var btnCheck = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#output");

function calculateHypotenuse(sideOne, sideTwo)
{
      var squareOfSides = Number(sideOne*sideOne + sideTwo*sideTwo);
      var sqrtOfSides = Number(Math.pow(squareOfSides, (1/2)));
      var calculateHypo =  Number(sqrtOfSides.toFixed(4));

      console.log(`Sum of squares of ${sideOne} and ${sideTwo} is:` + squareOfSides);
      console.log(`Hypotenuse is: ${calculateHypo} units`);

      return calculateHypo
}

function onClick()
{
      var sideOne = Number(inputSide1.value);
      var sideTwo = Number(inputSide2.value);
      
      if(sideOne && sideTwo && sideOne>0 && sideTwo>0)
      {
            var Hypotenuse = calculateHypotenuse(sideOne, sideTwo);
            displayMessage.innerText = `Hypotenuse is ${Hypotenuse} units`;
      }
      else
      {
            displayMessage.innerText = "Enter valid values of both the sides to calculate hypotenuse ⚠"
      }
}

btnCheck.addEventListener("click", onClick)
