window.alert("Selamat Datang silahkan daftar")
function terimainput(){
    let x=document.forms["biodata"]["nama"].value;
    let y=document.forms["biodata"]["lahir"].value;
    let z=document.forms["biodata"]["tanggal"].value;
    let a=document.forms["biodata"]["jenis_kelamin"].value;
    let b=document.forms["biodata"]["alamat"].value;
    let c=document.forms["biodata"]["telepon"].value;



    let tabel = document.getElementById("tabelinput");
    let row = tabel.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);


    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
    cell4.innerHTML = a;
    cell5.innerHTML = b;
    cell6.innerHTML = c;
window.alert("Selamat Anda telah terdaftar!!");
}