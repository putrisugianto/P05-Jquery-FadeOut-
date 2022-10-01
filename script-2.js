$(document).ready(function(){
    $('.nama_mhs').click(function(){
        let isi = $(this).text();

        let isi2 = prompt('Ubah dengan:', isi);
        if(!isi2) return;

        $(this).text(isi2);
    });

    $(document).ready(function(){

  $('.teman').click(function(){

      let isi = $(this).text();
      let tid = $(this).prop('id');
      let rid = tid.split('__');
      let id_baris = rid[1];
      let mhsw = $('#mhsw__'+id_baris).text();
      if(isi=='Hapus'){
          let konfirmasi = confirm(`Yakin mau menghapus ${mhsw} ??`);
          if(!konfirmasi) return;

          $('#strip__'+id_baris).fadeOut();

      }else{
          alert("Anda berada di kolom : " + $(this).html() + "!");
      }
  })
})

    $('.alamat').click(function (event) {
        alert("Anda mengklik kolom yang berisi kata " + $(this).html() + "!");
    });

    $("th").click(function (event) {
        alert("Anda mengklik kolom judul yang berisi kata " + $(this).html() + "!");
    });
});