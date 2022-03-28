//coutDownDate

    //Set waktu selesai
var waktuSelesai = new Date("Marct 31, 2022 08:00:00").getTime();

    //hitung waktu mundur
var x = setInterval(function(){

    //mengambil waktu sekarang
    var waktuSekarang = new Date().getTime();

    //gap waktu antara waktuSelesai dengan waktuSekarang
    var waktuJarak = waktuSelesai - waktuSekarang;

    //proses hitung mundur
    var hari = Math.floor(waktuJarak/(1000 * 60 * 60 *24));
    var jam = Math.floor((waktuJarak%(1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var menit = Math.floor((waktuJarak%(1000 * 60 * 60))/(1000 * 60));
    var detik = Math.floor((waktuJarak%(1000 * 60))/1000);

    //menampilkan waktu mundur
    document.getElementById("hari").innerHTML=hari;
    document.getElementById("jam").innerHTML=jam;
    document.getElementById("menit").innerHTML=menit;
    document.getElementById("detik").innerHTML=detik;

    if(waktuJarak < 0){
        clearInterval(x);
        document.getElementById("coutdown").innerHTML="EXPIRED";
    }
}, 1000);


//scroll
$(document).ready(function(){
    //menambahkan smooth scrolling pada semua tag a
    $("a").on('click', function(event){
        //memastikan this.hash memiliki nilai sebelum
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});