var divFormUpdateProfilePelanggan = new Vue({
  el: '#divFormUpdateProfilePelanggan',
  data: {},
  methods: {
    prosesUpdateProfile: function() {
      let username = document.getElementById('txtUsername').value;
      let namaLengkap = document.getElementById('txtNama').value;
      let alamat = document.getElementById('txtAlamat').value;
      let hp = document.getElementById('txtHp').value;
      let email = document.getElementById('txtEmail').value;
      let levelUser = document.getElementById('txtLevelUser').value;
      $.post('pelanggan/proEditProfilePelanggan', {
        'username': username,
        'namaLengkap': namaLengkap,
        'alamat': alamat,
        'nomorHandphone':hp,
        'email': email,
        'levelUser': levelUser
      }, function(data) {
        suksesUpdate();
        console.log(data);
      });
    }
  }
});

function suksesUpdate() {
  let username = document.getElementById('txtUsername').value;
  iziToast.info({
    title: "Sukses ..",
    message: "Data pelanggan berhasil di diupdate, kembali ke profile pelanggan",
    position: "topCenter",
    timeOut: 500,
    pauseOnHover: false,
    onClosed: function() {
      divJudul.judulForm = "Detail Pelanggan";
      $('#divUtama').html("Memuat ...");
      $('#divUtama').load('pelanggan/pelangganProfile',{'username':username});
    }
  });
}
