


let toplam = 0
function transfer(e, para) {


    console.log(e.target);
    const row = e.target.closest(".row");
    document.getElementById("yapilan-is").appendChild(row);
    e.target.remove()


    toplam = para + toplam;
    document.getElementById("toplam").innerHTML = toplam;


}