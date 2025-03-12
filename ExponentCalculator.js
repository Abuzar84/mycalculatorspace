function calculateExp() {
    const base = parseFloat(document.getElementById("input_number").value);
    const exponent = parseFloat(document.getElementById("input_exponent").value);

    
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById("res").innerHTML = `<span style="color:red;">Please enter valid numbers for both base and exponent.</span>`;
        return;
    }

    let formattedBase = base.toLocaleString();
    let result = base ** exponent;
    let formattedResult = result.toLocaleString();

    if (base < 0 && exponent % 1 !== 0) {
        document.getElementById("res").innerHTML = `<span style="color:red;">Invalid: Cannot compute negative base with fractional exponent.</span>`;
        return;
    }


    const solution = [
        `Exponent Formula = <i>x</i><sup><span style="font-size:10px;"> <i>y</i></span></sup>`,
        `= ${formattedBase} <sup>${exponent}</sup>`,
        `= <strong>${formattedResult}</strong>`,
        `${formattedBase} to the power of ${exponent} is <strong>${formattedResult}</strong>`
    ];

    
    document.getElementById("res").innerHTML = solution.map(sol =>
        `<div>${sol}</div>`
    ).join("");
}
