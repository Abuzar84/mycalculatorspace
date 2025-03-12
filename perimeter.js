function circlePer(){
    const r = parseFloat(document.getElementById("circle_r").value);
    const unit_circle = document.getElementById("unit_circle_select").value;
    if(isNaN(r) || r <= 0){
        document.getElementById("res_per_cir").innerText = "please enter valid number";
        return
    }
    const pie = Math.PI;
    const res_cir = 2*pie.toFixed(5)*r;
    const pieAndr = pie.toFixed(5)*r;
    const res_cir_format = res_cir.toLocaleString();
    const circleSol = [
        `Perimeter of a Circle (Circumference) = 2π<i>r</i>`,
        `= 2 × ${pie.toFixed(5)} × ${r} `,
        `=2 × ${pieAndr.toFixed(5)}`,
        `=${res_cir_format} ${unit_circle}`,
        `Your Circle Perimeter is ${res_cir_format} ${unit_circle}`
    ];
    
    document.getElementById("res_per_cir").innerHTML = circleSol.map(sol =>
        `<div>${sol}</div>`
    ).join("");
}

function squarePer(){
    const a = parseFloat(document.getElementById("square").value);
    const unit_square = document.getElementById("unit_square_select").value;
    if(isNaN(a) || a <= 0){
        document.getElementById("res_per_sqr").innerText = "please enter valid number";
        return
    }
    const res_sqr = 4*a;
    const res_sqr_format = res_sqr.toLocaleString();
    const squareSol = [
        `Perimeter of a Square = 4<i>s</i>`,
        `= 4 × ${a}`,
        `= ${res_sqr_format} ${unit_square}`,
        `Your Square Perimeter is ${res_sqr_format} ${unit_square}`
    ];
    
    document.getElementById("res_per_sqr").innerHTML = squareSol.map(sol =>
        `<div>${sol}</div>`
    ).join("");
}
function rectanglePer(){
    const l = parseFloat(document.getElementById("rectangle_l").value);
    const w = parseFloat(document.getElementById("rectangle_w").value);
    const unit_rectangle = document.getElementById("unit_rectangle_select").value;
    if(isNaN(l) || l <= 0 || isNaN(w) || w <= 0){
        document.getElementById("res_per_rec").innerText = "please enter valid number";
        return
    }
    const res_rec = 2*(l + w);
    const res_rec_format = res_rec.toLocaleString();
    const recSol = [
        `Perimeter of a Rectangle = 2 × (<i>l</i> + <i>w</i>) `,
        `= 2 × (${l} + ${w})`,
        `= 2 × ${l+w}`,
        `= ${res_rec_format} ${unit_rectangle}`,
        `Your Rectangle Perimeter is ${res_rec_format} ${unit_rectangle}`
    ];  
    
    document.getElementById("res_per_rec").innerHTML = recSol.map(sol =>
        `<div>${sol}</div>`
    ).join("");
}
function trianglePer(){
    const a = parseFloat(document.getElementById("triangle_a").value);
    const b = parseFloat(document.getElementById("triangle_b").value);
    const c = parseFloat(document.getElementById("triangle_c").value);
    const unit_triangle = document.getElementById("unit_triangle_select").value;
    if(isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0){
        document.getElementById("res_per_tri").innerText = "please enter valid number";
        return
    }
    const res_tri = a + b + c;
    const res_tri_format = res_tri.toLocaleString();
    const triSol = [
        `Perimeter of a Triangle = <i>a</i> + <i>b</i> + <i>c</i>`,
        `= ${a} + ${b} + ${c}`,
        `= ${res_tri_format} ${unit_triangle}`,
        `Your Triangle Perimeter is ${res_tri_format} ${unit_triangle}`
    ];
    
    document.getElementById("res_per_tri").innerHTML = triSol.map(sol =>
        `<div>${sol}</div>`
    ).join("");
}