function giris() {

    let birinciSifre = document.getElementById("birinci-sifre").value;
    let ikinciSifre = document.getElementById("ikinci-sifre").value;


    if (birinciSifre == ikinciSifre) {
        document.getElementById("mesaj").innerHTML = "başarılı";
    } else if (birinciSifre !== ikinciSifre) {
        document.getElementById("mesaj").innerHTML = "yanlış";
    }






}