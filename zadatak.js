/**
 * Zadatak nam kaze da moramo instalirat "lodash" bibliotek na svoje racunalo.
 * Na stranici "https://lodash.com/" pratimo upute za instalaciju:
 * npm i -g npm
 * npm i --save lodash
 * Da bi mogli koristiti funkcije iz lodash biblioteke, moramo ju ucitati u nas projekt na sljedeci nacin:
 */
var _ = require("lodash");

/**
 * 1.
 *  Zadane su nam dvije varijable koje potencijalno korisnik unosi kao podatak za lozinku.
 *  U zadatku je jasno navedeno da se od korisnika trazi da koristi samo znamenke.
 *  Primjetimo da su obje varijable stavljene pod navodnike, pa moramo razmisljati da su obje
 *  varijeble postavljene kao niz karaktera, kao string, tj. nisu odmah postavljene kao brojcane vrijednosti.
 *  Brojcane vrijednosti bi bile postavljene bez navodnika, npr. var mojaVarijabla = 123;
 *  Vidjet cemo kasnije zasto ovdje napominjemo da su barijable postavljene kao string!
 */
var dobro = "123456789011111";
var lose = "1123456";

/**
 * 2.
 *  Prvi zadatak od nas trazi da napisemo funkciju u kojoj cemo provjeriti da li su svi
 *  znakovi unutar predane lozinke jedinstveni, sto znaci ako smo predali niz znakova:
 *  npr. 12345 -> vidimo da su svi znakovi/brojevi jedinstveni, nema ponavljanja brojeva.
 *  Ukoliko predamo niz znakova:
 *  npr. 123425 -> vidimo da nam se brojka 2 ponavlja te niz ne zadovoljava nas zahtjev
 *
 *  Pisemo funkciju kojoj cemo predati "password" kao parametar.
 *
 *  Kako cemo pokusati rijesiti ovaj zadatak, tj sto nam funkcija treba odraditi?
 *  - inicijalizirat cemo prazan niz/array u koji cemo smjestati svaku pojedinacnu znamenku u predanom nizu,
 *    a dodatno cemo jos provjeravati da li u nizu u koji smjestamo svaku pojedinu znamenku vec postoji ta
 *    znamenka, te ukoliko vec postoji vec imamo indikaciju da u predanom nizu znakova imamo ponavljanje
 *    i na taj nacin proglasavamo da nam je niz neizpravan, odnosno da nije predan niz sa jedinstvenim znakovima.
 */
/**
 * 3.
 *   Zadatak nas trazi da provjerimo svaki znak u nizu i provjerimo da li je svaki znak u nizu broj.
 *   Zadatku cemo pristupiti na slican nacin kao i prvoj funkciji, iterirat cemo po svakom znaku
 *   i provjeravati da li je znak na tom mjestu broj.
 *   Ukoliko "naletimo" na neki znak koji nije broj, izaci cemo iz petlje, tj funkcija ce vratiti false.
 *   Ukoliko za svaki znak utvrdimo da je broj, funkcija ce vratiti true.
 */
var jedinstveniZnakovi = function (password) {
  // vas kod
  var mojNiz = [];
  console.log("password.length=" + password.length);
  for (let i = 0; i < password.length; i++) {
    var numToCheck = password.charAt(i);
    //console.log(numToCheck + " is integer = " + isBroj(numToCheck));
    if (isBroj(numToCheck) == false) {
      console.log(numToCheck + " nije broj");
      //break;
      return false;
    }

    if (mojNiz.includes(numToCheck)) {
      console.log(numToCheck + " vec postoji u nasem nizu");
      //break;
      return false;
    } else {
      console.log(numToCheck + " NE postoji u nasem nizu");
      mojNiz.push(numToCheck);
    }
  }
  return true;
};

/**
 * Da bismo provjerili da je znak koji smo proslijedili broj, koristit cemo sljedecu funkciju
 */
function isBroj(broj) {
  return !isNaN(broj);
}

/**
 * Kako možemo provjeriti da li je prosljiedjeni niz znakova duzi od 10
 */
function isMoreThan10(password) {
  if (password.length > 10) {
    return true;
  }
  return false;
}

/**
 * 4.
 *   Zadnji zadatak od nas trazi da ukoliko je password duzi od 10 znakova skratimo
 *   password na 10 znakova.
 *   Ima vise pristupa, neke cemo pokazati.
 * 	 1) mozemo ponovno ici petljom kao u prethodnim zadacima, iterirati po znakovima i
 *      uzeti prvih 10 znakova te funkcijom vratiti prvih 10 znakova.
 *   2) drugi nacin je koristiti se funkcijom "substring" pa uzeti prvih 10 znakova
 *      bez da iteriramo kroz petlju (ovime stedimo procesorsko vrijeme koje koristi za iteraciju)
 */
function skratiNa10(password) {
  if (password.length <= 10) return password;
  /*var tmpPassword = "";
  for (let i = 0; i < 10; i++) {
    var charAtIndex = password.charAt(i);
    tmpPassword += charAtIndex;
  }
  return tmpPassword;*/
  return password.substring(0, 10);
}

console.log("Password je ispravan: " + jedinstveniZnakovi(dobro));
//jedinstveniZnakovi(dobro);
console.log("----------------");
//jedinstveniZnakovi(lose);
console.log("Password je ispravan: " + jedinstveniZnakovi(lose));

console.log("Password ime vise od 10 znakova: " + isMoreThan10(dobro));
console.log("Password ime vise od 10 znakova: " + isMoreThan10(lose));

console.log("Password nakon skracivanja: " + skratiNa10(dobro));
console.log("Password nakon skracivanja: " + skratiNa10(lose));
