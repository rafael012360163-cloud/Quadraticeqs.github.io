function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  
function abcgen() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Please enter valid numbers for a, b, and c.";
  }
  else{
    return String(a + "x^2 + " + b + "x + " + c);
  }
}

function inputvalues(){
  var equationtext = document.getElementById("eq")
  equationtext.textContent = abcgen()

  var x = document.getElementById("choosemethod");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "block";
  }
}

function nextmethod(){
  const methodlist = document.getElementById("methodselect");
  const methodlistval = methodlist.value;
  console.log(methodlistval);
  if (methodlistval == "factor"){
    factorise()
  }
  if (methodlistval == "square"){
    perfectsquare()
  }
  if (methodlistval == "formula"){
    formula()
  }
}

function calculate() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  
  const minb = -1 * b;
  const discriminant = (b * b) - (4 * a * c);
  let result = "";

  if (discriminant > 0) {
    const solution1 = (minb + Math.sqrt(discriminant)) / (2 * a);
    const solution2 = (minb - Math.sqrt(discriminant)) / (2 * a);
    result = "Solution 1: " + solution1 + ", Solution 2: " + solution2;
  } else if (discriminant === 0) {
    const solution = minb / (2 * a);
    result = "Solution: " + solution;
  } else {
    result = "There are no real roots for this equation.";
  }
  console.log(result);
  return result;
}

 function tryFactorize() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
      const ac = a * c;
      for (let m = -Math.abs(ac); m <= Math.abs(ac); m++) {
        if (m === 0) continue;
        let n = ac / m;
        if (!Number.isInteger(n)) continue;
        if (m + n === b) {
          // Factorization works
          return [a, m, 1, n / a];
        }
      }
      return null;
    }

function factorise(){
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    var tampilanformula = document.getElementById("tampilanformula");
    tampilanformula.style.display = "none";
    var tampilansquare = document.getElementById("tampilansquare");
    tampilansquare.style.display = "none";
    var tampilanfactor = document.getElementById("tampilanfactor");
    tampilanfactor.style.display = "block";

    var soalfactor = document.getElementById("soalfactor");
    const equation = document.getElementById("eq");
    soalfactor.textContent = equation.textContent;

    var wayfactor = document.getElementById("wayfactor");
    const factors = tryFactorize()
    if (!factors) {
      wayfactor.textContent = "This equation cannot be factorized using integers.";
      solutionfactor.textContent = calculate(); // Still show roots via formula
    return;
    } else{
      wayfactor.textContent += `(${factors[0]}x + ${factors[1]})(${factors[2]}x + ${factors[3]}) = 0`
    }

    var solutionfactor = document.getElementById("solutionfactor");
    solutionfactor.textContent = calculate();
  }

function perfectsquare(){
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const h = (b / (2 * a)).toFixed(2);
    const k = ((b * b - 4 * a * c) / (4 * a * a)).toFixed(2);

    var tampilanformula = document.getElementById("tampilanformula");
    tampilanformula.style.display = "none";
    var tampilansquare = document.getElementById("tampilansquare");
    tampilansquare.style.display = "block";
    var tampilanfactor = document.getElementById("tampilanfactor");
    tampilanfactor.style.display = "none";

    var soalsquare = document.getElementById("soalsquare");
    const equation = document.getElementById("eq");
    soalsquare.textContent = equation.textContent;

    var waysquare = document.getElementById("waysquare");
    waysquare.textContent = `ax² + bx + c = 0
→ (${a})(x + ${(-b/(2*a)).toFixed(2)})² - ${k} = 0
→ (x + ${(-b/(2*a)).toFixed(2)})² = ${k}`

    var solutionsquare = document.getElementById("solutionsquare");
    solutionsquare.textContent = calculate();
  }

function formula(){
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
  
    var tampilanformula = document.getElementById("tampilanformula");
    tampilanformula.style.display = "block";
    var tampilansquare = document.getElementById("tampilansquare");
    tampilansquare.style.display = "none";
    var tampilanfactor = document.getElementById("tampilanfactor");
    tampilanfactor.style.display = "none";

    var soalformula = document.getElementById("soalformula");
    const equation = document.getElementById("eq");
    soalformula.textContent = equation.textContent;

    var wayformula = document.getElementById("wayformula");
    const discriminant = (b * b) - (4 * a * c);
    wayformula.textContent = `x = [-b ± √(b² - 4ac)] / 2a
  = [${-b} ± √(${b}² - 4×${a}×${c})] / (2×${a})
  = [${-b} ± √(${discriminant})] / ${2 * a}`

    var solutionformula = document.getElementById("solutionformula");
    solutionformula.textContent = calculate();
  }