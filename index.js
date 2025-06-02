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
  const func = new Function("x", "return " + funcText);
  const delta = parseFloat(document.getElementById("delta").value);
  const maxError = parseFloat(document.getElementById("err").value);
  //LIMITS
  const limValue = parseFloat(document.getElementById("limValue").value);
  document.getElementById("leftLimCalculation").innerHTML = leftLimit(func, limValue, delta);
  document.getElementById("rightLimCalculation").innerHTML = rightLimit(func, limValue, delta);
  document.getElementById("limCalculation").innerHTML = limit(func, limValue, delta, maxError);
  //DERIVATIVES
  const derivValue = parseFloat(document.getElementById("derivValue").value);
  document.getElementById("leftDerivCalculation").innerHTML = leftDerivative(func, derivValue, delta);
  document.getElementById("rightDerivCalculation").innerHTML = rightDerivative(func, derivValue, delta);
  document.getElementById("derivCalculation").innerHTML = derivative(func, derivValue, delta, maxError);
}
