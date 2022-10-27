


let bilgisayarinTuttuguSayi = Math.floor(Math.random() * 101);

function sayiTahmini() {

    let girilenSayi = document.getElementById("girilen-sayi").value;
    if (bilgisayarinTuttuguSayi > girilenSayi) {
        alert("daha büyük sayı söyle")
    }
    else if (bilgisayarinTuttuguSayi < girilenSayi) {
        alert("daha kucuk sayi söyle")
    }
    else {
        alert("kazandın")
    }
    // alert(girilenSayi)

}