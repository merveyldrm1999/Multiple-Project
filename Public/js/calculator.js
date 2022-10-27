function calculate() {

    let islemTuru = document.getElementById("islem-turu").value;
    let ilkSayi = parseInt(document.getElementById("birinci-deger").value);
    let ikinciSayi = parseInt(document.getElementById("ikinci-deger").value);
    let sonuc = 0;

    if (islemTuru == "toplama") {
        sonuc = ilkSayi + ikinciSayi;

    }
    else if (islemTuru == "carpma") {
        sonuc = ilkSayi * ikinciSayi;

    }
    else if (islemTuru == "cikarma") {
        sonuc = ilkSayi - ikinciSayi;

    }
    else if (islemTuru == "bolme") {
        sonuc = ilkSayi / ikinciSayi;

    }
    else {
        alert("Gecerli bir işlem secin")
    }

    alert(sonuc)

}

/**
 * Yapılacaklar için bir bölüm
 * Yapılanlar için bir bölüm
 * Yapılmışlar için bir bölüm
 * 
 * Bir input olsun. Buraya yazdığımız sağındaki ekle butonuna tıklayınca yapılacaklara eklensin
 * Yapılacaklardakilerden herhangi birisine tıklayınca yapılanlara eklesin, yapılacaklardan silsin
 * Yapılanlardan herhangi birisine tıklayınca yapılacaklara eklesin, yapılanlardan silsin
 * Yapılmışlardan herhangi birisine tıklayınca yapılmışlardan silinsin
 */