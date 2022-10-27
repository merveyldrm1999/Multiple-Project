function tekMiciftmi() {
    let girilenSayi = document.getElementById("girilenSayi").value;


    if (girilenSayi % 2 == 0) {
        document.getElementById("sonuc").innerHTML = "Sayı çift";
    } else if (girilenSayi % 2 == 1) {
        document.getElementById("sonuc").innerHTML = "Girilen sayı tektir";
    }


}