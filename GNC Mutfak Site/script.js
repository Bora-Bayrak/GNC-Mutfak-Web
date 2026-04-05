document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menü
    var menuBtn = document.getElementById("hamburger-menu");
    var linkler = document.getElementById("gezinti-baglantilari");

    if (menuBtn && linkler) {
        menuBtn.addEventListener("click", function () {
            linkler.classList.toggle("aktif");
            var ikon = menuBtn.querySelector("i");
            if (ikon.classList.contains("fa-bars")) {
                ikon.classList.remove("fa-bars");
                ikon.classList.add("fa-times");
            } else {
                ikon.classList.remove("fa-times");
                ikon.classList.add("fa-bars");
            }
        });
    }

    // Tema değiştirme
    var kayitliTema = localStorage.getItem("gnc_tema") || "acik";
    if (kayitliTema === "koyu") {
        document.documentElement.setAttribute("data-tema", "koyu");
    }

    var temaDugme = document.getElementById("tema-degistir");
    if (temaDugme) {
        temaIkonuGuncelle(temaDugme, kayitliTema);

        temaDugme.addEventListener("click", function () {
            var mevcutTema = document.documentElement.getAttribute("data-tema");
            if (mevcutTema === "koyu") {
                document.documentElement.removeAttribute("data-tema");
                localStorage.setItem("gnc_tema", "acik");
                temaIkonuGuncelle(temaDugme, "acik");
            } else {
                document.documentElement.setAttribute("data-tema", "koyu");
                localStorage.setItem("gnc_tema", "koyu");
                temaIkonuGuncelle(temaDugme, "koyu");
            }
        });
    }

    function temaIkonuGuncelle(btn, tema) {
        if (tema === "koyu") {
            btn.innerHTML = '<i class="fas fa-sun"></i>';
            btn.title = "Açık temaya geç";
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i>';
            btn.title = "Koyu temaya geç";
        }
    }

    // Haftalık menü
    var menuler = {
        1: {
            gun: "Pazartesi",
            ana: [
                { img: "KellePaca.jpg", ad: "Kellepaça Çorbası", not: "Sabahtan hazır" },
                { img: "mercimekCorbası.png", ad: "Mercimek Çorbası", not: "" },
                { img: "KuruFasulye.png", ad: "Kuru Fasulye", not: "Kemik suyuyla" },
                { img: "izmirkofte.png", ad: "İzmir Köfte", not: "Fırından" },
                { img: "tavuksote.png", ad: "Tavuk Sote", not: "" }
            ],
            yan: [
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "domateslimakarna.png", ad: "Domatesli Makarna", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" }
            ],
            tatli: [
                { img: "baklava.png", ad: "Ev Baklavası", not: "Cevizli" },
                { img: "fırınsutlac.png", ad: "Fırın Sütlaç", not: "" }
            ]
        },
        2: {
            gun: "Salı",
            ana: [
                { img: "KellePaca.jpg", ad: "Kellepaça Çorbası", not: "" },
                { img: "yayla_corbasi.jpg", ad: "Yayla Çorbası", not: "Naneli" },
                { img: "KuruFasulye.png", ad: "Kuru Fasulye", not: "" },
                { img: "patates_kapama.jpg", ad: "Patates Kapama", not: "Etli" },
                { img: "firin_tavuk.jpg", ad: "Fırın Tavuk", not: "" },
                { img: "taze_fasulye.jpg", ad: "Taze Fasulye", not: "Zeytinyağlı" }
            ],
            yan: [
                { img: "kesme_makarna.jpg", ad: "Kesme Makarna", not: "Ev yapımı" },
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" },
                { img: "borek.jpg", ad: "Börek", not: "" }
            ],
            tatli: [
                { img: "baklava.png", ad: "Ev Baklavası", not: "" },
                { img: "hayrabolu.png", ad: "Hayrabolu", not: "" },
                { img: "soguk_kadayif.jpg", ad: "Soğuk Kadayıf", not: "" },
                { img: "fırınsutlac.png", ad: "Fırın Sütlaç", not: "" },
                { img: "magnolya.jpg", ad: "Magnolya", not: "" },
                { img: "pasta.jpg", ad: "Pasta", not: "" }
            ]
        },
        3: {
            gun: "Çarşamba",
            ana: [
                { img: "KellePaca.jpg", ad: "Kelle Paça", not: "" },
                { img: "ezogelin_corbasi.jpg", ad: "Ezogelin Çorbası", not: "" },
                { img: "nohut.jpg", ad: "Etli Nohut", not: "" },
                { img: "kadinbudu_kofte.jpg", ad: "Kadın Budu Köfte", not: "" },
                { img: "tavuk_yahni.jpg", ad: "Tavuk Yahni", not: "" },
                { img: "ispanak.jpg", ad: "Ispanak", not: "Yoğurtlu" }
            ],
            yan: [
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "bulgur_pilavi.jpg", ad: "Bulgur Pilavı", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" },
                { img: "borek.jpg", ad: "Börek", not: "" }
            ],
            tatli: [
                { img: "baklava.png", ad: "Ev Baklavası", not: "" },
                { img: "soguk_kadayif.jpg", ad: "Soğuk Kadayıf", not: "" },
                { img: "hayrabolu.png", ad: "Hayrabolu", not: "" },
                { img: "magnolya.jpg", ad: "Magnolya", not: "" },
                { img: "fırınsutlac.png", ad: "Fırın Sütlaç", not: "" },
                { img: "pasta.jpg", ad: "Pasta", not: "" }
            ]
        },
        4: {
            gun: "Perşembe",
            ana: [
                { img: "KellePaca.jpg", ad: "Kellepaça Çorbası", not: "" },
                { img: "mercimekCorbası.png", ad: "Mercimek Çorbası", not: "" },
                { img: "KuruFasulye.png", ad: "Kuru Fasulye", not: "" },
                { img: "karniyarik.jpg", ad: "Karnıyarık", not: "Fırından" },
                { img: "tavuk_cigeri.jpg", ad: "Tavuk Ciğeri", not: "" },
                { img: "mantar_sote.jpg", ad: "Mantar Sote", not: "" }
            ],
            yan: [
                { img: "firin_makarna.jpg", ad: "Fırın Makarna", not: "Beşamelli" },
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" },
                { img: "borek.jpg", ad: "Börek", not: "" }
            ],
            tatli: [
                { img: "baklava.png", ad: "Ev Baklavası", not: "" },
                { img: "hayrabolu.png", ad: "Hayrabolu", not: "" },
                { img: "fırınsutlac.png", ad: "Fırın Sütlaç", not: "" },
                { img: "magnolya.jpg", ad: "Magnolya", not: "" },
                { img: "pasta.jpg", ad: "Pasta", not: "" }
            ]
        },
        5: {
            gun: "Cuma",
            ana: [
                { img: "KellePaca.jpg", ad: "Kellepaça Çorbası", not: "" },
                { img: "domates_corbasi.png", ad: "Domates Çorbası", not: "" },
                { img: "mercimekCorbası.png", ad: "Mercimek Çorbası", not: "" },
                { img: "nohut.jpg", ad: "Nohut", not: "" },
                { img: "tas_kebabi.png", ad: "Tas Kebabı", not: "" },
                { img: "firin_tavuk.jpg", ad: "Fırın Tavuk", not: "" },
                { img: "mucver.png", ad: "Mücver", not: "" }
            ],
            yan: [
                { img: "bulgur_pilavi.jpg", ad: "Bulgur Pilavı", not: "" },
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" },
                { img: "borek.jpg", ad: "Börek", not: "" },
                { img: "yaprakSarma.png", ad: "Yaprak Sarma", not: "" }
            ],
            tatli: [
                { img: "baklava.png", ad: "Ev Baklavası", not: "" },
                { img: "hayrabolu.png", ad: "Hayrabolu", not: "" },
                { img: "magnolya.jpg", ad: "Magnolya", not: "" },
                { img: "pasta.jpg", ad: "Pasta", not: "" }
            ]
        },
        6: {
            gun: "Cumartesi",
            ana: [
                { img: "KellePaca.jpg", ad: "Kellepaça Çorbası", not: "" },
                { img: "mercimekCorbası.png", ad: "Mercimek Çorbası", not: "" },
                { img: "KuruFasulye.png", ad: "Kuru Fasulye", not: "" },
                { img: "Arnavut_cigeri.png", ad: "Arnavut Ciğeri", not: "" },
                { img: "Tavuk_kapama.jpg", ad: "Tavuk Kapama", not: "" }
            ],
            yan: [
                { img: "pirincpilavı.png", ad: "Pirinç Pilavı", not: "" },
                { img: "salata.png", ad: "Salata", not: "" },
                { img: "cacik.png", ad: "Cacık", not: "" },
                { img: "borek.jpg", ad: "Börek", not: "" },
                { img: "yaprakSarma.png", ad: "Yaprak Sarma", not: "" }
            ],
            tatli: [
                { img: "hayrabolu.png", ad: "Hayrabolu", not: "" },
                { img: "magnolya.jpg", ad: "Magnolya", not: "" },
                { img: "pasta.jpg", ad: "Pasta", not: "" }
            ]
        }
    };

    // Günün menüsünü göster
    var bugun = new Date().getDay();
    var kutu = document.getElementById("menuicerik");
    var gunAdlari = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    if (kutu) {
        var menu = menuler[bugun];

        if (menu) {
            var h = "";
            h += '<div style="text-align:center; margin-bottom:25px;">';
            h += '<h3 style="color:var(--koyu-yazi); font-size:1.6rem; font-weight:600;">' + menu.gun + ' Menüsü</h3>';
            h += '</div>';
            h += '<div class="menu-satir">';

            // Ana yemekler
            h += '<div class="menu-sutun">';
            h += '<h3>Ana Yemekler & Çorbalar</h3>';
            for (var i = 0; i < menu.ana.length; i++) {
                h += kart(menu.ana[i]);
            }
            h += '</div>';

            // Yan + tatlılar
            h += '<div class="menu-sutun">';
            h += '<h3>Yanında & Tamamlayıcılar</h3>';
            for (var j = 0; j < menu.yan.length; j++) {
                h += kart(menu.yan[j]);
            }
            h += '<h3 style="margin-top:20px; color:var(--vurgu-renk);">Tatlılar</h3>';
            for (var k = 0; k < menu.tatli.length; k++) {
                h += kart(menu.tatli[k]);
            }
            h += '</div>';
            h += '</div>';

            kutu.innerHTML = h;
        } else {
            kutu.innerHTML = '<div style="text-align:center; padding:40px 0;">' +
                '<p style="color:var(--acik-yazi); font-size:1rem;">' +
                gunAdlari[bugun] + ' Pazar Günleri Dükkanımız Kapalıdır.</p></div>';
        }
    }

    function kart(y) {
        var s = '<div class="gunluk-oge">';
        s += '<img src="fotograflar/' + y.img + '" alt="' + y.ad + '">';
        s += '<div class="gunluk-oge-bilgi">';
        s += '<h4>' + y.ad + '</h4>';
        if (y.not) {
            s += '<p style="color:var(--acik-yazi); font-size:0.85rem;">' + y.not + '</p>';
        }
        s += '</div></div>';
        return s;
    }

    // Yorum sistemi
    var form = document.getElementById("yorumFormu");
    var liste = document.getElementById("yorumlarIzgara");

    if (form && liste) {
        var kayitli = JSON.parse(localStorage.getItem('gnc_reviews')) || [];

        for (var p = 0; p < kayitli.length; p++) {
            liste.insertBefore(yorumKarti(kayitli[p]), liste.firstChild);
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var isim = document.getElementById("rev-name").value || "Anonim";
            var mesaj = document.getElementById("rev-text").value;
            var puan = 5;
            var secenekler = document.getElementsByName("rating");
            for (var r = 0; r < secenekler.length; r++) {
                if (secenekler[r].checked) { puan = parseInt(secenekler[r].value); break; }
            }

            var tarih = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
            var yeni = { isim: isim, yildiz: puan, mesaj: mesaj, tarih: tarih };

            kayitli.push(yeni);
            localStorage.setItem('gnc_reviews', JSON.stringify(kayitli));
            liste.insertBefore(yorumKarti(yeni), liste.firstChild);

            alert("Yorumunuz eklendi, teşekkürler.");
            form.reset();
        });
    }

    function yorumKarti(v) {
        var el = document.createElement("div");
        el.className = "yorum-karti";
        var yildiz = "";
        for (var y = 1; y <= 5; y++) {
            yildiz += '<i class="' + (y <= v.yildiz ? 'fas' : 'far') + ' fa-star"></i>';
        }
        el.innerHTML = '<div class="yorum-ust"><span class="yorumcu-isim">' + v.isim +
            '</span><span class="yorum-yildizlar">' + yildiz + '</span></div>' +
            '<p class="yorum-metin">"' + v.mesaj + '"</p>' +
            '<div style="margin-top:10px; font-size:0.8rem; color:#aaa;">' + v.tarih + '</div>';
        return el;
    }
});
