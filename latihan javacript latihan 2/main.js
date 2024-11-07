
function hitungluas(){
    let pj =document.getElementById("nPJ").value;
    let lb =document.getElementById("nLB").value;

    let LU= pj*lb
    let PJLB = parseFloat(pj ) + Number(lb) 
    let KLL = 2*PJLB
let hsl = "hitung luas persegi dengan nilai <br>"
hsl +="panjang:"+ pj +";cm;<br>lebar:"+ lb +"cm:<br>"
hsl +="luas = panjang x lebar <br>"
hsl +="luas =" + pj +"x" + lb + "<br>"
hsl +="luas = " + LU +"cm<sup>2</sup>br>"
hsl +="hitung keliling persegi<br>"
hsl +="keliling = 2 x (panjang + lebar<br>"
hsl +="keliling = 2 x ("+ pj + "+" + lb + ")<br>"
hsl +="keliling = 2 x " + PJLB + "<br>"
hsl +="keliling =" + KLL + "cm<br>"

    document.getElementById("hasil").innerHTML = hsl
}
