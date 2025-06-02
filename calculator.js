export function leftLimit(func, x, delta)
{
    return func(x - delta);
}

export function rightLimit(func, x, delta)
{
    return func(x + delta);
}

export function limit(func, x, delta, maxError)
{
    const leftLim = leftLimit(func, x, delta);
    const rightLim = rightLimit(func, x, delta);
    if (Math.abs(leftLim - rightLim) <= maxError)
    {
        return (leftLim + rightLim)/2;
    }
    else
    {
        return null; //DNE
    }
}

export function leftDerivative(func, x, delta)
{
    return (func(x) - func(x - delta))/delta;
}

export function rightDerivative(func, x, delta)
{
    return (func(x + delta) - func(x))/delta;
}

export function derivative(func, x, delta, maxError)
{
    const leftDeriv = leftDerivative(func, x, delta);
    const rightDeriv = rightDerivative(func, x, delta);
    if (Math.abs(leftDeriv - rightDeriv) <= maxError)
    {
        return (leftDeriv + rightDeriv)/2;
    }
    else
    {
        return null; //DNE
    }
}

//trapezoidal riemann sum
export function integrate(func, a, b, delta)
{
    if (a > b)
    {
        return integrate(func, b, a, delta);
    }
    
    let sum = 0;
    let i = a;
    while (i <= b)
    {
        sum += (delta)*((func(i)+func(i+delta))/2);
        i += delta;
    }
    
    return sum;
}

//Euler's method
export function solveDifferentialEquation(func, t, x, y, delta) //finds f(t)
{
  if (t < x)
  {
    while (x > t)
    {
      let slope = func(x, y);
      y = -1*slope*delta + y;
      x -= delta;
    }
    return y;
  }
  else if(t > x)
  {
    while (x < t)
    {
      let slope = func(x, y);
      y = slope*delta + y;
      x += delta;
    }
    return y;
  }
  else //t == x
  {
    return y;
  }
}

export function calculateVolume(areaFunc, a, b, delta)
{
    return integrate(areaFunc, a, b, delta);
}

export function arcLength(func, a, b, delta, maxError)
{
    return integrate((x) => {
                        return Math.sqrt(1 + Math.pow(derivative(func, x, delta, maxError), 2));
                    }, a, b, delta);
}

export function factorial(n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n*factorial(n - 1);
    }
}

export function lagrangeErrorBound(func, x, c, n, M)
{
    return M*Math.pow(x - c, n + 1)/factorial(n + 1);
}
