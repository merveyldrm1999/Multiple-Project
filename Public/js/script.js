

function toplamaIslemi() {
    let birinciSayi = document.getElementById("birinSayi").value;
    let ikinciSayi = document.getElementById("ikinciSayi").value;
    let toplam = 0;

    toplam = parseInt(birinciSayi) + parseInt(ikinciSayi);
    document.getElementById("toplam").innerHTML = toplam;
}

function carpmaIslemi() {
    let carpimBir = document.getElementById("carpim-bir").value;
    let carpimIki = document.getElementById("carpim-iki").value;
    let carpim = 0;

    carpim = parseInt(carpimBir) * parseInt(carpimIki);
    document.getElementById("carpim").innerHTML = carpim;

}

function cikarmaIslemi() {
    let cikarimBir = document.getElementById("cikarim-bir").value;
    let cikarimİki = document.getElementById("cikarim-iki").value;
    let cikarimUc = document.getElementById("cikarim-uc").value;
    let cikarimDort = document.getElementById("cikarim-dort").value;

    cikarim = parseInt(cikarimBir) - parseInt(cikarimIki) - parseInt(cikarimUc) - parseInt(cikarimDort);
    document.getElementById("cikarma").innerHTML = cikarim;



}

function bolumIslemi() {
    let bolumBir = document.getElementById("bolum-bir").value;
    let bolumIki = document.getElementById("bolum-iki").value;

    bolum = parseInt(bolumBir) / parseInt(bolumIki);
    document.getElementById("bolum").innerHTML = bolum;


}

function name(params) {

}