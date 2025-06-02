import * as calc from "calculator.js";

const options = ["limit", "deriv", "difeq", "integral", "volume", "arclength", "lagrange"];

function show(div)
{
  const element = document.getElementById(div);
  element.style.display = "block";
}

function hide(div)
{
  const element = document.getElementById(div);
  element.style.display = "none";
}

function toggleAll(dropdown)
{
  const selected = dropdown.value;
  for (let i = 0; i < options.length; ++i)
  {
    if (selected === options[i])
    {
      show(options[i] + "calculator");
    }
    else
    {
      hide(options[i] + "calculator");
    }
  }
}

function reloadCalculations()
{
  const delta = document.getElementById("delta").value;
  const maxError = document.getElementById("err").value;
  //LIMITS
  const limValue = document.getElementById("limValue").value;
  document.getElementById("leftLimCalculation").innerHTML = calc.leftLimit(, limValue, delta);
  document.getElementById("rightLimCalculation").innerHTML = calc.rightLimit(, limValue, delta);
  document.getElementById("limCalculation").innerHTML = calc.limit(, limValue, delta, maxError);
  //DERIVATIVES
}
