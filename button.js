const buttons = document.getElementById("button_content");

const addButtons = [
    { name: "Home", url: "index.php" },
    { name: "Calculator", url: "calculator.php" },
    { name: "Trigonometry", url: "trignometry.php" },
    { name: "Exponent Calculator", url: "ExponentCalculator.php" },
    { name: "Root Calculator", url: "rootcalculator.php" },
    { name: "Area Calculator", url: "area.php" },
    { name: "Perimeter Calculator", url: "perimeter.php" },
    { name: "Surface Area Calculator", url: "surfacearea.php" }
];

buttons.innerHTML = addButtons.map(but => 
`<a href="${but.url}" class="mainbuttons">&ensp;${but.name}&ensp;</a>`
).join("");