var bil1 = document.getElementById("bil1");
var bil2 = document.getElementById("bil2");
var result = document.getElementById("hasil");
var opr = document.getElementsByClassName("operator");
var hitung = document.getElementById("hitung");
for(var i=0; i<opr.length; i++){
          opr[i].onchange = function(){
            if(this.checked){
              var oper = this.getAttribute("data")
              Operasi(oper)
            } 
          }
}
Operasi=(oper) =>{
  hitung.onclick = function(){
    var val1 = parseInt(bil1.value)
    var val2 = parseInt(bil2.value)
    var hasil = oper == "tambah" ? val1 + val2 
    : oper == "kurang" ? val1-val2 
    : oper == "kali" ? val1*val2
    : oper == "bagi" ? val1/val2
    : "error"; 
    result.value = hasil
console.log(hasil);
  }
}
