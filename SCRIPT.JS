function showHero(num) {

    const detail = document.getElementById("detail");
    const img = document.getElementById("detail-img");
    const text = document.getElementById("detail-text");

    detail.style.display = "block";

    if (num == 1) {
        img.src = "img/p1.jpg";
        text.innerHTML = "Tahun 1898, dalam Operasi Silent Horizon, Leonom memimpin pasukannya menyusuri jalur benteng tua yang mulai runtuh. Dengan tenang ia mengatur strategi agar seluruh tim bisa keluar tanpa kehilangan arah. Saat semua telah melewati gerbang terakhir, Leonom memilih tinggal sebentar untuk memastikan tidak ada yang tertinggal. Namun ia tak pernah kembali. Sejak hari itu, namanya dikenang sebagai pemimpin yang berdiri paling akhir demi keselamatan yang lain.";
    }

    if (num == 2) {
        img.src = "img/p2.jpg";
        text.innerHTML = "Pada tahun 1912, wilayah Ngawi Tengah. Rusdiwong tetap berada di garis depan, memberi semangat di tengah keadaan yang semakin sulit. Ia memastikan timnya berhasil mengamankan jalur mundur sebelum akhirnya situasi memisahkannya dari rombongan. Ia gugur dalam tugasnya, tetapi keberaniannya menjadi kisah yang terus diceritakan dari generasi ke generasi.";
    }

    if (num == 3) {
        img.src = "img/p3.jpg";
        text.innerHTML = "Dalam misi Shadow Recon tahun 1936, Movicris ditugaskan mencari jalur aman melewati wilayah yang penuh bahaya. Dengan langkah cepat dan insting tajam, ia berhasil menemukan rute evakuasi bagi timnya. Saat kembali memastikan semuanya aman, keadaan berubah tak terduga. Ia tertinggal di belakang, namun berkat dirinya seluruh pasukan selamat.";
    }

    if (num == 4) {
        img.src = "img/p4.jpg";
        text.innerHTML = "Tahun 1944, dalam Last Stand Protocol, FetLuis menjadi pertahanan terakhir saat situasi tidak lagi terkendali. Dengan keteguhan hati, ia menjaga posisi hingga semua rekan-rekannya berhasil keluar dari zona bahaya. Ketika bantuan datang, ia telah gugur dalam tugasnya. Kesetiaan dan keberaniannya menjadikan namanya abadi dalam sejarah timnya.";
    }

    function closeDetail() {
        document.getElementById("detail").style.display = "none";
    }    
}
