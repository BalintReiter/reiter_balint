function osszesOszto(szam) {
    var eredmeny = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            eredmeny.push(i);
        }
    }
    return eredmeny;
}
function parosDarab(szam) {
    var eredmeny = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] % 2 == 0) {
            eredmeny++;
        }
    }
    return eredmeny;
}
function fuggvenyhivasPalindrom(fv) {
    var szoveg = fv().trim();
    var szovegvissza = szoveg.split('').reverse().join('').trim();
    var vizsgalat = false;
    if (szovegvissza == szoveg) {
        vizsgalat = true;
    }
    return vizsgalat;
}
