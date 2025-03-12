function surfaceball(){
    const ball_value = parseFloat(document.getElementById("ball").value);
    const unit_ball = document.getElementById("unit_select_for_ball").value;
    
    if (isNaN(ball_value) || ball_value <=0){
        document.getElementById("res_area_ball").innerText = "Please enter valid number";
        return;
    }
    const pie = Math.PI;
    const balls = ball_value*ball_value;
    const result_ball = pie.toFixed(5)*4*ball_value*ball_value;
    const res_area_ball_format = result_ball.toLocaleString();
    const ballSol = [
        `Surface Area of Ball = 4π<i>r</i><sup>2</sup>`,
        `= 4 × ${pie.toFixed(5)} × (${ball_value})<sup>2</sup>`,
        `= 4 × ${pie.toFixed(5)} × ${ball_value*ball_value}`,
        `= 4 × ${pie*balls}`,
        `= ${res_area_ball_format} m<sup>2</sup>`,
        `Your Ball Surface Area is ${res_area_ball_format} ${unit_ball}<sup>2</sup>`
        ];
    document.getElementById("res_area_ball").innerHTML = ballSol.map(sol =>
    `<div>${sol}</div>`).join("");
}
function surfacecylinder(){
    const cylinder_r_value = parseFloat(document.getElementById("cylinder_r_value").value);
    const cylinder_h_value = parseFloat(document.getElementById("cylinder_h_value").value);
    const unit_cylinder = document.getElementById("unit_select_for_cylinder").value;
    if(isNaN(cylinder_r_value) || isNaN(cylinder_h_value) || cylinder_r_value<=0 || cylinder_h_value<=0){
        document.getElementById("res_area_cylinder").innerText = "Please enter valid number";
        return;
    }
    const pie = Math.PI;
    const res_curve = 2*pie.toFixed(5)*cylinder_r_value*cylinder_h_value;
    const res_curve_format = res_curve.toLocaleString();
    const result_cylinder = 2*pie.toFixed(5)*(cylinder_r_value*cylinder_r_value)+2*Math.PI*cylinder_r_value*cylinder_h_value;
    const res_area_cylinder_format = result_cylinder.toLocaleString();
    const solCyl = [
        `Curve Surface Area Of Cylinder = 2π<i>rh</i>`,
        `= 2 × ${pie.toFixed(5)} × ${cylinder_r_value} × ${cylinder_h_value}`,
        `= 2 × ${pie.toFixed(5)} × ${cylinder_r_value*cylinder_h_value}`,
        `= 2 × ${pie.toFixed(5)*(cylinder_r_value*cylinder_h_value)}`,
        `= ${res_curve_format} ${unit_cylinder}<sup>2</sup>`,
        `Total Surface Area of Cylinder = 2π<i>r</i>(<i>r + h</i>)`,
        `= 2 × ${pie.toFixed(5)} × ${cylinder_r_value}(${cylinder_r_value} + ${cylinder_h_value})`,
        `= 2 × ${pie.toFixed(5)} × ${cylinder_r_value} × ${cylinder_r_value+cylinder_h_value}`,
        `= 2 × ${pie.toFixed(5)} × ${cylinder_r_value*(cylinder_r_value+cylinder_h_value)}`,
        `= 2 ${pie.toFixed(5)*(cylinder_r_value*(cylinder_r_value+cylinder_h_value))}`,
        `= ${res_area_cylinder_format} ${unit_cylinder}<sup>2</sup>`,
        `Your Cylinder Curve Surface Area is ${res_curve_format} ${unit_cylinder}<sup>2</sup> & Total Surface Area is ${res_area_cylinder_format} ${unit_cylinder}<sup>2</sup>`
        ];
    document.getElementById("res_area_cylinder").innerHTML = solCyl.map(sol =>
    `<div>${sol}</div>`).join("");
 }
 function surfacehemisphere(){
    const hemisphere_r = parseFloat(document.getElementById("hemi_r").value);
    const unit_hemisphere = document.getElementById("unit_select_hemisphere").value;
    if(isNaN(hemisphere_r) || hemisphere_r <= 0){
        document.getElementById("res_area_hemisphere").innerText = "Please enter valid number";
        return;
    }
    const pie = Math.PI;
    const res_area_hemisphere_curve = 2*pie.toFixed(5)*(hemisphere_r**2);
    const res_area_hemisphere_curve_format = res_area_hemisphere_curve.toLocaleString();
    const res_area_hemisphere = 3*pie.toFixed(5)*(hemisphere_r*hemisphere_r);
    const res_area_hemisphere_format = res_area_hemisphere.toLocaleString();
    const solHemi = [
        `Curve Surface Area Of Hemisphere = 2π<i>r</i><sup>2</sup>`,
        `= 2× ${pie.toFixed(5)} × ${hemisphere_r}<sup>2</sup>`,
        `= 2 × ${pie.toFixed(5)} × ${hemisphere_r*hemisphere_r}`,
        `= 2 × ${pie.toFixed(5)*(hemisphere_r*hemisphere_r)}`,
        `= ${res_area_hemisphere_curve_format}`,
        `Total Surface Area Of Hemisphere = 3π<i>r</i><sup>2</sup>`,
        `= 3 × ${pie.toFixed(5)} × ${hemisphere_r}<sup>2</sup>`,
        `= 3 × ${pie.toFixed(5)} × ${hemisphere_r*hemisphere_r}`,
        `= 3 × ${pie.toFixed(5)*(hemisphere_r*hemisphere_r)}`,
        `= ${res_area_hemisphere_format} ${unit_hemisphere}<sup>2</sup>`,
        `Your Hemisphere Curve Surface Area is ${res_area_hemisphere_curve_format} ${unit_hemisphere}<sup>2</sup> & Total Surface Area is ${res_area_hemisphere_format} ${unit_hemisphere}<sup>2</sup>`
        ];
    document.getElementById("res_area_hemisphere").innerHTML =solHemi.map(sol =>
    `<div>${sol}</div>`
    ).join("");
 }
 function surfacecone(){
    const cone_r = parseFloat(document.getElementById("cone_r").value);
    const cone_h = parseFloat(document.getElementById("cone_h").value);
    const unit_cone = document.getElementById("unit_select_cone").value;
    if(isNaN(cone_r) || cone_r <= 0 || isNaN(cone_h) || cone_h <= 0){
        document.getElementById("res_area_cone").innerText = "Please enter valid number";
        return;
    }
    const pie = Math.PI;
    const res_cone_curve = pie.toFixed(5)*cone_r*cone_h;
    const res_cone_curve_format = res_cone_curve.toLocaleString();
    const res_cone = pie.toFixed(5)*cone_r*(cone_r + cone_h);
    const res_cone_format = res_cone.toLocaleString();
    const solCone = [
        `Curved Surface Area Of Cone = π<i>rl</i>`,
        `= ${pie.toFixed(5)} × ${cone_r} × ${cone_h}`,
        `= ${pie.toFixed(5)} × ${cone_r*cone_h}`,
        `= ${res_cone_curve_format} ${unit_cone}<sup>2</sup>`,
        `Total Surface Area Of Cone = π<i>r(r + l)`,
        `= ${pie.toFixed(5)} × ${cone_r}(${cone_r} + ${cone_h})`,
        `= ${pie.toFixed(5)} × ${cone_r*(cone_r+cone_h)}`,
        `= ${pie.toFixed(5)} × ${cone_r*(cone_r+cone_h)}`,
        `= ${res_cone_format} ${unit_cone}<sup>2</sup>`,
        `Your Cone Curve Surface Area is ${res_cone_curve_format} ${unit_cone}<sup>2</sup> & Surface Area is ${res_cone_format} ${unit_cone}<sup>2</sup>`
        ];
    document.getElementById("res_area_cone").innerHTML = solCone.map(sol =>
    `<div>${sol}</div>`).join("");
 }
function surfacecube(){
    const a = parseFloat(document.getElementById("cube_a").value);
    const unit_select_for_cube = document.getElementById("unit_select_for_cube").value;
    if(isNaN(a) || a <= 0){
        document.getElementById("res_area_cube").innerText = "Please enter valid number";
        return;
    }
    const res_let = 4*(a**2);
    const res_let_format = res_let.toLocaleString();
    const res_cube = 6*(a**2);
    const res_cube_format = res_cube.toLocaleString();
    const solCube = [
        `Lateral area of a cube = 4<i>a</i><sup>2</sup>`,
        `= 4 × ${a}<sup>2</sup>`,
        `= 4 × ${a*a}`,
        `= ${res_let_format}`,
        `total surface area of a cube = 6<i>a</i><sup>2</sup>`,
        `= 6 × ${a}<sup>2</sup>`,
        `= 6 × ${a*a}`,
        `= ${res_cube_format}${unit_select_for_cube}<sup>2<sup>`,
        `your Cube Lateral Surface Area is ${res_let_format} ${unit_select_for_cube}<sup>2</sup> & Total Surface Area is ${res_cube_format} ${unit_select_for_cube}<sup>2</sup>`
        ];
    document.getElementById("res_area_cube").innerHTML = solCube.map(sol =>
    `<div>${sol}</div>`).join("");
}
function surfacecuboid(){
    const l = parseFloat(document.getElementById("cuboid_l").value);
    const w = parseFloat(document.getElementById("cuboid_w").value);
    const h = parseFloat(document.getElementById("cuboid_h").value);
    const unit_cuboid = document.getElementById("unit_select_cuboid").value;
    if(isNaN(l) || l<=0 || isNaN(w) || w<=0 || isNaN(h) || h<=0){
        document.getElementById("res_area_cuboid").innerText = "Please enter valid number";
        return;
    }
    const res_area_let = 2*h*(l+w);
    const res_area_let_format = res_area_let.toLocaleString(); 
    const res_area_cuboid = 2*((l*w)+(l*h)+(w*h));
    const res_area_cuboid_format = res_area_cuboid.toLocaleString();
    const solCuboid = [
        `Lateral surface area of a cuboid = 2<i>h(l + b)`,
        `= 2 × ${h}(${l} + ${w})`,
        `= 2 × ${h} × ${l+w}`,
        `= 2 × ${h*(l+w)}`,
        `= ${res_area_let_format} ${unit_cuboid}<sup>2</sup>`,
        `Total surface area of a cuboid = 2(<i>lb + bh + hl)`,
        `= 2((${l} × ${w}) + (${w} × ${h}) + (${h} × ${l}))`,
        `= 2(${l*w} + ${w*h} + ${h*l})`,
        `= 2 × ${(l*w)+(w*h)+(h*l)}`,
        `= ${res_area_cuboid_format} ${unit_cuboid}<sup>2</sup>`,
        `Your Cuboid Lateral Surface Area is ${res_area_let_format} ${unit_cuboid}<sup>2</sup> & Total Surface Area is ${res_area_cuboid_format} ${unit_cuboid}<sup>2</sup>`
        ];
    document.getElementById("res_area_cuboid").innerHTML = solCuboid.map(sol =>
    `<div>${sol}</div>`).join("");
}