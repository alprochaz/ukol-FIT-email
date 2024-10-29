// Priklad: FIT email -----------------------------------------------------------------------------------------------------------
// Pokud se přihlásíte jako student na CVUT, bude vám inf. sys. automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. 
// Z vašeho příjmení se vezme 5 prvních znaků a z vašeho křestního jména první 3. 
//Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. (Jana Procházková -> prochjan@fit.cvut.cz)

// Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
// Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
// Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
// Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
document.body.innerHTML += "<h4>--- Priklad: Email - vytvoren automaticky ze zadanych udaju------------------------------- " + "</h4>"

const studentJmeno = prompt("Zadej jmeno bez diakritiky:")
const studentPrijmeni = prompt("Zadej prijmeni bez diakritiky:")
const studentDomena = "fit.cvut.cz"

const studentJmenoFormat = studentJmeno.trim().slice(0, 3).toLowerCase()    //orez prazdnych znaku, prvni 3 pismena, na mala pismena
const studentPrijmeniFormat = studentPrijmeni.trim().slice(0, 5).toLowerCase()

console.log(studentJmenoFormat)     // nemusi tu byt, jen pro kontrolu
console.log(studentPrijmeniFormat)

const studentEmail = `
    <p>Zadane jmeno: ${studentJmeno} </p>
    <p>Zadane prijmeni: ${studentPrijmeni} </p>
    <h3>Tvuj studentsky email </h3>
     ${studentPrijmeniFormat}${studentJmenoFormat}@${studentDomena}
`
document.body.innerHTML += studentEmail

// Proc nefunguje tohle: document.body.innerHTML += studentEmail.style.color = "blue"

// Hodnoceni koucky: Ahoj, Riešenie moc chválim, všetko funguje ako má a aj kód je napísaný prehľadne a správne :) 
// A neviem, či už sa ti to podarilo rozriešiť, ale vyjadrím sa ku komentáru: 'Proc nefunguje tohle: 
// document.body.innerHTML += studentEmail.style.color = "blue"' - studentEmail aby si naň vedela pridať štýly, musí byť premenná 
// vytvorená pomocou querySelectoru (tak sa vyberie z HTML, teda musi v HTML predtým existovať). Takže vytvorit element v HTML, 
// dať class/id, pomocou toho vybrať v JS a uložiť do novej premennej a potom tejto premennej pridať štýly :) 
// Úkol značím ako hotovo, dobrá práca!

// takhle uz funguje (v HTML pridan p s ID yourEmail):
const elYourEmail = document.querySelector("#yourEmail")
elYourEmail.innerHTML = "Druhe reseni:" + studentEmail
elYourEmail.style.color ="blue"