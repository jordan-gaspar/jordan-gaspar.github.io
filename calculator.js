function f(x)
{
    return x;
}

function df(x, y)
{
  return 2x + y;
}

function leftLimit(x, delta)
{
    return f(x - delta);
}

function rightLimit(x, delta)
{
    return f(x + delta);
}

function limit(x, delta, maxError)
{
    leftLim = leftLimit(x, delta);
    rightLim = rightLimit(x, delta);
    if (Math.abs(leftLim - rightLim) <= maxError)
    {
        return (leftLim + rightLim)/2;
    }
    else
    {
        return null; //DNE
    }
}

function leftDerivative(x, delta)
{
    
}

function rightDerivative(x, delta)
{
    
}

//trapezoidal riemann sum
function integrate(a, b, delta)
{
    if (a > b)
    {
        return integrate(b, a, delta);
    }
    
    sum = 0;
    i = a;
    while (i <= b)
    {
        sum += (delta)*((f(i)+f(i+delta)/2);
        i += delta;
    }
    
    return sum;
}

//Euler's method
function solveDifferentialEquation(t, x, y, delta) //finds f(t)
{
  if (t < x)
  {
    while (x > t)
    {
      slope = df(x, y);
      y = slope*delta + y;
      x -= delta;
    }
    return y;
  }
  else if(t > x)
  {
    while (x < t)
    {
      slope = df(x, y);
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