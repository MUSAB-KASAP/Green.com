document.getElementById('ilan-ekle-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engelliyoruz

    const isim = document.getElementById('isim').value;
    const dil = document.getElementById('dil').value;
    const fiyat = document.getElementById('fiyat').value;
    const sehir = document.getElementById('sehir').value;
    const aciklama = document.getElementById('aciklama').value;
    const profilFoto = document.getElementById('profil-foto').files[0];

    if (!isim || !dil || !fiyat || !sehir || !aciklama) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    // İlan bilgilerini birleştiriyoruz
    const ilanBilgileri = {
        isim,
        dil,
        fiyat,
        sehir,
        aciklama,
        profilFoto
    };

    // İlanı başarıyla eklediğini belirten bir mesaj
    alert("İlanınız başarıyla eklendi!");

    // Formu sıfırlıyoruz
    document.getElementById('ilan-ekle-form').reset();
});