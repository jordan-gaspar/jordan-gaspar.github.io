const options = ["limit", "deriv", "extreme", "difeq", "integral", "volume", "arclength", "vector", "polar", "lagrange"]

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

function toggleAll()
{
  const selected = document.getElementById("options").value;
  for (let i = 0; i < options.length; ++i)
  {
    if (selected === options[i])
    {
      show(selected + "calculator")
    }
    else
    {
      hide(selected + "calculator")
    }
  }
}
