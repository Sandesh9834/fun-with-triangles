var inputAngle1 = document.querySelector("#angle-1");
var inputAngle2 = document.querySelector("#angle-2");
var inputAngle3 = document.querySelector("#angle-3");
var btnCheck = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#output");

function sumAngles(angleOne, angleTwo, angleThree)
{
      var sumOfAngles = Number(angleOne + angleTwo + angleThree);

      if(sumOfAngles === 180)
      {
            displayMessage.innerText = "Angles form a Triangle"
      }
      else
      {
            displayMessage.innerText = "Angles do not form a Triangle"
      }
}

function onClick()
{
      var angleOne = Number(inputAngle1.value);
      var angleTwo = Number(inputAngle2.value);
      var angleThree = Number(inputAngle3.value);

      if(angleOne && angleTwo && angleThree && angleOne>0 && angleTwo>0 && angleThree>0)
      {
            sumAngles(angleOne, angleTwo, angleThree)
      }
      else{
            displayMessage.innerText = "Enter valid values of all angles for Triangle ⚠"
      }
      
}

btnCheck.addEventListener("click", onClick)
