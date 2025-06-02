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
  //DIFFERENTIAL EQUATIONS
  const difeqT = parseFloat(document.getElementById("difeqT").value);
  const difeqX = parseFloat(document.getElementById("difeqX").value);
  const difeqY = parseFloat(document.getElementById("difeqY").value;)
  document.getElementById("difeqCalculation").innerHTML = solveDifferentialEquation(func, difeqT, difeqX, difeqY, delta);
  //INTEGRALS
  const integralLower = parseFloat(document.getElementById("integralLowerBound").value);
  const integralUpper = parseFloat(document.getElementById("integralUpperBound").value);
  document.getElementById("integralCalculation").innerHTML = integrate(func, integralLower, integralUpper, delta);
  //VOLUMES
  const volumeLower = parseFloat(document.getElementById("volumeLowerBound").value);
  const volumeUpper = parseFloat(document.getElementById("volumeUpperBound").value);
  const areaFuncText = document.getElementById("volFunc").value;
  const areaFunc = new Function("x", "return " + areaFuncText);
  document.getElementById("volumeCalculation").innerHTML = calculateVolume(areaFunc, volumeLower, volumeUpper, delta);
  //ARCLENGTHS
  const lengthLower = parseFloat(document.getElementById("lengthLowerBound").value);
  const lengthUpper = parseFloat(document.getElementById("lengthUpperBound").value);
  document.getElementById("lengthCalculation").innerHTML = arcLength(func, lengthLower, lengthUpper, delta, maxError);
  //LAGRANGE ERROR BOUND
  const lagrangeN = parseFloat(document.getElementById("lagrangeN").value);
  const lagrangeC = parseFloat(document.getElementById("lagrangeC").value);
  const lagrangeX = parseFloat(document.getElementById("lagrangeX").value);
  const lagrangeM = parseFloat(document.getElementById("lagrangeM").value);
  document.getElementById("errorCalculation").innerHTML = lagrangeErrorBound(func, lagrangeX, lagrangeC, lagrangeN, lagrangeM);
}
