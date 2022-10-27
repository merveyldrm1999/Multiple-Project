function dikdortgenCevresi() {
    let birinciKenar = document.getElementById("birinci-kenar").value;
    let ikinciKenar = document.getElementById("ikinci-kenar").value;
    let sonuc = 0;

    sonuc = (parseInt(birinciKenar) + parseInt(ikinciKenar)) * 2;




    document.getElementById("sonuc").innerHTML = sonuc;

}

function dikdortgeninAlani() {
    let birinciKenar = document.getElementById("birinci-kenar").value;
    let ikinciKenar = document.getElementById("ikinci-kenar").value;
    let sonuc = 0;

    sonuc = parseInt(birinciKenar) * parseInt(ikinciKenar);




    document.getElementById("sonuc").innerHTML = sonuc;
}
