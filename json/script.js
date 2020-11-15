//let mahasiswa = {
 //   nama: "koirul",
  //  nim: "312511205",
   // email: "koirul.2593@gmail.com"
//}
//console.log(JSON.stringify(mahasiswa));


vasina javascibd
//let xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function(){
  //  if (xhr.readyState == 4 && xhr.status ==200) {
   //     let mahasiswa = JSON.parse(this.responseText);
   //     console.log(mahasiswa);
    //}
//}

//xhr.open('GET', 'coba.json', true);
//xhr.send();

jquery
$.GetJSON('coba.json', function (data) {
    console.log(data);

});