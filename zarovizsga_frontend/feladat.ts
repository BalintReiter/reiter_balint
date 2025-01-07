function osszesOszto(szam: number): number[] {
    let eredmeny: number[] = [];
    for (let i: number = 1; i <= szam; i++) {
        if (szam % i == 0) {
            eredmeny.push(i);
        }
    }

    return eredmeny;
}

function parosDarab(szam: number[]): number {
    let eredmeny: number = 0;
    for (let i: number = 0; i < szam.length; i++) {
        if (szam[i] % 2 == 0) {
            eredmeny++;
        }
    }

    return eredmeny;
}

function fuggvenyhivasPalindrom(fv: () => string): boolean {
    let szoveg: string = fv().trim();
    let szovegvissza: string = szoveg.split('').reverse().join('').trim();
    let vizsgalat: boolean = false;
    if(szovegvissza == szoveg){
        vizsgalat = true;
    }
    return vizsgalat;
}