function toplamaIslemi() {
    let birinciSayi = document.getElementById("birinci-sayi").value;
    let ikinciSayi = document.getElementById("ikinci-sayi").value;
    let sonuc = 0;

    sonuc = parseInt(birinciSayi) + parseInt(ikinciSayi);
    document.getElementById("sonuc").innerHTML = sonuc;

}

function cikarmaIslemi() {
    let birinciSayi = document.getElementById("birinci-sayi").value;
    let ikinciSayi = document.getElementById("ikinci-sayi").value;
    let sonuc = 0;

    sonuc = parseInt(birinciSayi) - parseInt(ikinciSayi);
    document.getElementById("sonuc").innerHTML = sonuc;

}
function carpmaIslemi() {
    let birinciSayi = document.getElementById("birinci-sayi").value;
    let ikinciSayi = document.getElementById("ikinci-sayi").value;
    let sonuc = 0

    sonuc = parseInt(birinciSayi) * parseInt(ikinciSayi);
    document.getElementById("sonuc").innerHTML = sonuc;

}
function bolmeIslemi() {
    let birinciSayi = document.getElementById("birinci-sayi").value;
    let ikinciSayi = document.getElementById("ikinci-sayi").value;
    let sonuc = 0

    sonuc = parseInt(birinciSayi) / parseInt(ikinciSayi);
    document.getElementById("sonuc").innerHTML = sonuc;

}