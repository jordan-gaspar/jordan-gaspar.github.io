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
  const funcText = document.getElementById("func").value;
  const func = (x) => {
    return eval(funcText);
  };
  const delta = document.getElementById("delta").value;
  const maxError = document.getElementById("err").value;
  //LIMITS
  const limValue = document.getElementById("limValue").value;
  document.getElementById("leftLimCalculation").innerHTML = calc.leftLimit(func, limValue, delta);
  document.getElementById("rightLimCalculation").innerHTML = calc.rightLimit(func, limValue, delta);
  document.getElementById("limCalculation").innerHTML = calc.limit(func, limValue, delta, maxError);
  //DERIVATIVES
}
