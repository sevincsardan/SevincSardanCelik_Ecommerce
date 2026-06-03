// Ürün bilgileri - tüm sayfalarda kullanılıyor
var urunler = [
    {
        id: 1,
        ad: "Mor Kapüşonlu",
        fiyat: 349,
        aciklama: "Yumuşak kumaş, mor renk. Günlük kullanım için uygun.",
        resim: "img/urun1.jpg"
    },
    {
        id: 2,
        ad: "Siyah Spor Ayakkabı",
        fiyat: 599,
        aciklama: "Rahat taban, siyah-beyaz detaylı spor ayakkabı.",
        resim: "img/urun2.jpg"
    },
    {
        id: 3,
        ad: "Beyaz Omuz Çantası",
        fiyat: 279,
        aciklama: "Geniş bölmeli, beyaz renk omuz çantası.",
        resim: "img/urun3.jpg"
    },
    {
        id: 4,
        ad: "Mor Bere",
        fiyat: 129,
        aciklama: "Kış için sıcak tutan mor bere.",
        resim: "img/urun4.jpg"
    },
    {
        id: 5,
        ad: "Siyah Saat",
        fiyat: 449,
        aciklama: "Klasik siyah kol saati, su geçirmez.",
        resim: "img/urun5.jpg"
    },
    {
        id: 6,
        ad: "Mor Defter Seti",
        fiyat: 89,
        aciklama: "3 adet mor kapaklı defter.",
        resim: "img/urun6.jpg"
    }
];

// Resim yolunu sayfanın konumuna göre düzeltir
function resimYoluDuzenle(yol) {
    if (window.location.pathname.indexOf("/pages/") !== -1) {
        return "../" + yol;
    }
    return yol;
}

// Ana sayfadaki öne çıkan ürünleri yazar
function oneCikanUrunleriGoster() {
    var alan = document.getElementById("one-cikan-urunler");
    if (!alan) {
        return;
    }

    var html = "";
    var i;
    for (i = 0; i < 3; i = i + 1) {
        html = html + urunKartiOlustur(urunler[i]);
    }
    alan.innerHTML = html;
}

// Ürünler sayfasındaki tüm ürünleri yazar
function tumUrunleriGoster() {
    var alan = document.getElementById("tum-urunler");
    if (!alan) {
        return;
    }

    var html = "";
    var i;
    for (i = 0; i < urunler.length; i = i + 1) {
        html = html + urunKartiOlustur(urunler[i]);
    }
    alan.innerHTML = html;
}

// Tek bir ürün kartının HTML kodunu üretir
function urunKartiOlustur(urun) {
    var resim = resimYoluDuzenle(urun.resim);
    var detayLink = "urun-detay.html?id=" + urun.id;
    if (window.location.pathname.indexOf("/pages/") === -1) {
        detayLink = "pages/" + detayLink;
    }

    var kart = "<div class='urun-karti'>";
    kart = kart + "<img src='" + resim + "' alt='" + urun.ad + "'>";
    kart = kart + "<h3>" + urun.ad + "</h3>";
    kart = kart + "<p class='fiyat'>" + urun.fiyat + " TL</p>";
    kart = kart + "<a class='buton-mor' href='" + detayLink + "'>İncele</a> ";
    kart = kart + "<button class='buton-mor sepete-ekle-buton' type='button' data-urun-id='" + urun.id + "'>Sepete Ekle</button>";
    kart = kart + "</div>";
    return kart;
}

// Ürün detay sayfasını doldurur
function urunDetayGoster() {
    var alan = document.getElementById("urun-detay-icerik");
    if (!alan) {
        return;
    }

    var adres = window.location.search;
    var urunId = 1;
    if (adres.indexOf("id=") !== -1) {
        urunId = parseInt(adres.split("id=")[1], 10);
    }

    var secilen = urunler[0];
    var i;
    for (i = 0; i < urunler.length; i = i + 1) {
        if (urunler[i].id === urunId) {
            secilen = urunler[i];
        }
    }

    var resim = resimYoluDuzenle(secilen.resim);
    var html = "<div class='detay-alani'>";
    html = html + "<div class='detay-resim'><img src='" + resim + "' alt='" + secilen.ad + "'></div>";
    html = html + "<div class='detay-bilgi'>";
    html = html + "<h1 class='sayfa-baslik'>" + secilen.ad + "</h1>";
    html = html + "<p class='fiyat'>" + secilen.fiyat + " TL</p>";
    html = html + "<p>" + secilen.aciklama + "</p>";
    html = html + "<button class='buton-mor sepete-ekle-buton' type='button' data-urun-id='" + secilen.id + "'>Sepete Ekle</button>";
    html = html + "</div></div>";

    alan.innerHTML = html;
    document.title = secilen.ad + " - MorShop";
}

// Sepete ürün ekler (tarayıcı hafızasında tutulur)
function sepeteEkle(urunId) {
    var sepet = sepetiOku();
    var bulundu = false;
    var i;

    for (i = 0; i < sepet.length; i = i + 1) {
        if (sepet[i].id === urunId) {
            sepet[i].adet = sepet[i].adet + 1;
            bulundu = true;
        }
    }

    if (bulundu === false) {
        sepet.push({ id: urunId, adet: 1 });
    }

    localStorage.setItem("morShopSepet", JSON.stringify(sepet));
    alert("Ürün sepete eklendi.");
}

// Sepetteki veriyi okur
function sepetiOku() {
    var kayit = localStorage.getItem("morShopSepet");
    if (kayit === null) {
        return [];
    }
    return JSON.parse(kayit);
}

// Sepet sayfasını günceller
function sepetSayfasiniGoster() {
    var tabloGovde = document.getElementById("sepet-satirlari");
    var bosMesaj = document.getElementById("sepet-bos-mesaj");
    var toplamAlan = document.getElementById("sepet-toplam");
    if (!tabloGovde || !bosMesaj || !toplamAlan) {
        return;
    }

    var sepet = sepetiOku();
    if (sepet.length === 0) {
        tabloGovde.innerHTML = "";
        bosMesaj.style.display = "block";
        toplamAlan.textContent = "Toplam: 0 TL";
        return;
    }

    bosMesaj.style.display = "none";
    var html = "";
    var toplam = 0;
    var i;
    var j;

    for (i = 0; i < sepet.length; i = i + 1) {
        var urunBilgi = null;
        for (j = 0; j < urunler.length; j = j + 1) {
            if (urunler[j].id === sepet[i].id) {
                urunBilgi = urunler[j];
            }
        }

        if (urunBilgi !== null) {
            var satirToplam = urunBilgi.fiyat * sepet[i].adet;
            toplam = toplam + satirToplam;
            html = html + "<tr>";
            html = html + "<td>" + urunBilgi.ad + "</td>";
            html = html + "<td>" + sepet[i].adet + "</td>";
            html = html + "<td>" + urunBilgi.fiyat + " TL</td>";
            html = html + "<td>" + satirToplam + " TL</td>";
            html = html + "<td><button class='buton-mor sepetten-sil-buton' type='button' data-urun-id='" + urunBilgi.id + "'>Sil</button></td>";
            html = html + "</tr>";
        }
    }

    tabloGovde.innerHTML = html;
    toplamAlan.textContent = "Toplam: " + toplam + " TL";
}

// Sepetten tek ürün siler
function sepettenSil(urunId) {
    var sepet = sepetiOku();
    var yeniSepet = [];
    var i;

    for (i = 0; i < sepet.length; i = i + 1) {
        if (sepet[i].id !== urunId) {
            yeniSepet.push(sepet[i]);
        }
    }

    localStorage.setItem("morShopSepet", JSON.stringify(yeniSepet));
    sepetSayfasiniGoster();
}

// Sepeti tamamen temizler
function sepetiTemizle() {
    localStorage.removeItem("morShopSepet");
    sepetSayfasiniGoster();
}

// İletişim formu kontrolü
function iletisimFormuKontrol() {
    var form = document.getElementById("iletisim-formu");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (olay) {
        olay.preventDefault();

        var ad = document.getElementById("ad").value.trim();
        var email = document.getElementById("email").value.trim();
        var mesaj = document.getElementById("mesaj").value.trim();
        var hataVar = false;

        hataGoster("ad-hata", ad === "");
        hataGoster("email-hata", email.indexOf("@") === -1);
        hataGoster("mesaj-hata", mesaj.length < 10);

        if (ad === "" || email.indexOf("@") === -1 || mesaj.length < 10) {
            hataVar = true;
        }

        var basarili = document.getElementById("form-basarili");
        if (hataVar === true) {
            basarili.style.display = "none";
        } else {
            basarili.style.display = "block";
            form.reset();
        }
    });
}

// Hata mesajını gösterir veya gizler
function hataGoster(alanId, goster) {
    var alan = document.getElementById(alanId);
    if (goster === true) {
        alan.style.display = "block";
    } else {
        alan.style.display = "none";
    }
}

// Basit quiz - mağaza bilgisi sorar
function quizBaslat() {
    var buton = document.getElementById("quiz-gonder");
    if (!buton) {
        return;
    }

    buton.addEventListener("click", function () {
        var secilen = document.querySelector("input[name='quiz-cevap']:checked");
        var sonuc = document.getElementById("quiz-sonuc");

        if (!secilen) {
            sonuc.textContent = "Lütfen bir şık seçin.";
            sonuc.style.color = "#000000";
            return;
        }

        if (secilen.value === "mor") {
            sonuc.textContent = "Doğru! Mağazamızın ana rengi mordur. İndirim kodu: MOR10";
            sonuc.style.color = "#4a148c";
        } else {
            sonuc.textContent = "Yanlış cevap. Tekrar deneyin.";
            sonuc.style.color = "#000000";
        }
    });
}

// Dinamik butonlara tıklama olayı ekler
function dinamikButonlariBagla() {
    document.body.addEventListener("click", function (olay) {
        var hedef = olay.target;

        if (hedef.classList.contains("sepete-ekle-buton")) {
            var ekleId = parseInt(hedef.getAttribute("data-urun-id"), 10);
            sepeteEkle(ekleId);
        }

        if (hedef.classList.contains("sepetten-sil-buton")) {
            var silId = parseInt(hedef.getAttribute("data-urun-id"), 10);
            sepettenSil(silId);
        }
    });

    var temizleButon = document.getElementById("sepet-temizle-buton");
    if (temizleButon) {
        temizleButon.addEventListener("click", sepetiTemizle);
    }
}

// Sayfa yüklendiğinde çalışacak işlemler
function sayfaHazir() {
    oneCikanUrunleriGoster();
    tumUrunleriGoster();
    urunDetayGoster();
    sepetSayfasiniGoster();
    iletisimFormuKontrol();
    quizBaslat();
    dinamikButonlariBagla();
}

window.addEventListener("DOMContentLoaded", sayfaHazir);
