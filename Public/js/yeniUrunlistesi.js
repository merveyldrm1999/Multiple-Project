function productRemove(e) {
    e.target.closest(".product").remove();
}

let toplam = 0;

function productAdd(fiyat) {
    toplam = fiyat + toplam;

    alert(toplam)

}