let orte=[];
let aktuellerIndex=0;

function createOrte(){
    let ort=null;

    ort=new Ort();
    ort.setOrt("Innsbruck");
    ort.setBezeichnung("Goldenes Dachl");
    ort.setPfadBild("images/goldenesdachl.jpg");
    ort.setBreite(47.268583);
    ort.setLaenge(11.393264);
    orte.push(ort);

    ort=new Ort();
    ort.setOrt("Köln");
    ort.setBezeichnung("Kölner Dom");
    ort.setPfadBild("images/koelnerdom.jpg");
    ort.setBreite(50.941278);
    ort.setLaenge(6.958281);
    orte.push(ort);

    ort=new Ort();
    ort.setOrt("Dornie");
    ort.setBezeichnung("Eileen Donan Castle");
    ort.setPfadBild("images/eileendonancastle.jpg");
    ort.setBreite(57.274028);
    ort.setLaenge(-5.516111);
    orte.push(ort);

    ort=new Ort();
    ort.setOrt("Melrose");
    ort.setBezeichnung("Melrose Abbey");
    ort.setPfadBild("images/melroseabbey.jpg");
    ort.setBreite(55.598889);
    ort.setLaenge(-2.717778);
    orte.push(ort);

    ort=new Ort();
    ort.setOrt("Sydney");
    ort.setBezeichnung("Sydney Opera");
    ort.setPfadBild("images/opersydney.jpg");
    ort.setBreite(-33.856111);
    ort.setLaenge(151.215278);
    orte.push(ort);

    showOrt();
}


function showOrt(){
    let ort = orte[aktuellerIndex];
    document.getElementById("meinOrt").innerHTML = ort.bezeichnung();
    document.getElementById("meinBild").src = ort.getPfadBild();

    let myLatLng = {
        lat: ort.getBreite(),
        lng: ort.getLaenge()
    };

    // Create a map object and specify the DOM element for display.
    let map = new google.maps.Map(document.getElementById('meineKarte'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 4
    });

    // Create a marker and set its position.
    let marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: ort.bezeichnung()
    });
}

function naechsterOrt() {
    aktuellerIndex++;

    if(aktuellerIndex == orte.length) {
        aktuellerIndex = 0;
    }
    showOrt();
    
}

function vorherigerOrt(){
    aktuellerIndex--;

    if(aktuellerIndex < 0) {
        aktuellerIndex = orte.length - 1;
    }
    showOrt();
}




