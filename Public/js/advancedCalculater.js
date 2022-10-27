function calculate() {
    const birinciSayi = document.getElementById("birinci-deger").value;
    const ikinciSayi = document.getElementById("ikinci-deger").value;
    const islemTuru = document.getElementById("islem-turu").value;


    if (birinciSayi === "" || ikinciSayi === "") {
        alert("Sayı gir len")
        return
    }

    let sonuc = 0

    if (islemTuru === "toplama") {
        sonuc = parseFloat(birinciSayi) + parseFloat(ikinciSayi)
    } else if (islemTuru === "cikarma") {
        sonuc = parseFloat(birinciSayi) - parseFloat(ikinciSayi)

    } else if (islemTuru === "carpma") {
        sonuc = parseFloat(birinciSayi) * parseFloat(ikinciSayi)

    } else {
        sonuc = parseFloat(birinciSayi) / parseFloat(ikinciSayi)

    }


    const trEl = document.createElement("tr")
    const tdEl = document.createElement("td")
    const tdEl2 = document.createElement("td")
    const tdEl3 = document.createElement("td")
    const tdEl4 = document.createElement("td")
    tdEl.innerHTML = birinciSayi;
    trEl.appendChild(tdEl);

    tdEl2.innerHTML = ikinciSayi;
    trEl.appendChild(tdEl2);

    tdEl3.innerHTML = islemTuru;
    trEl.appendChild(tdEl3);

    tdEl4.innerHTML = sonuc;
    trEl.appendChild(tdEl4);

    const tablom = document.getElementById("table")

    tablom.appendChild(trEl)



}

























