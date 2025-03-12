const buttons = document.getElementById("button_content");

const addButtons = [
    { name: "Home", url: "index.html" },
    { name: "Calculator", url: "calculator.html" },
    { name: "Trigonometry", url: "trignometry.html" },
    { name: "Exponent Calculator", url: "ExponentCalculator.html" },
    { name: "Root Calculator", url: "rootcalculator.html" },
    { name: "Area Calculator", url: "area.html" },
    { name: "Perimeter Calculator", url: "perimeter.html" },
    { name: "Surface Area Calculator", url: "surfacearea.html" }
];

buttons.innerHTML = addButtons.map(but => 
`<a href="${but.url}" class="mainbuttons">&ensp;${but.name}&ensp;</a>`
).join("");