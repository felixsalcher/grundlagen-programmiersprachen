var salcher = salcher || {};

//Hausverwaltung
salcher.Hausverwaltung = class {
    constructor() {
        let _homes = [];

        this.getHomes = function() {
            return _homes;
        };

        this.addHome = function (home) {
            _homes.push(home);
        };

        this.getHomeById = function(id) {
            let result = _homes.filter(home => home.getId() == id);

            if(result.length > 0) {
                return result[0];
            }
            else {
                return null;
            }
        };
    }
};

//Adresse
salcher.Adresse = class {
    constructor(strasse, plz, ort) {
        let _strasse = null;
        let _plz = null;
        let _ort = null;

        this.setStrasse = function (strasse) {
            _strasse = strasse;
        };

        this.getStrasse = function () {
            return _strasse;
        };

        this.setPlz = function (plz) {
            _plz = plz;
        };

        this.getPlz = function () {
            return _plz;
        };

        this.setOrt = function (ort) {
            _ort = ort;
        };

        this.getOrt = function () {
            return _ort;
        };

        this.setStrasse(strasse || "");
        this.setPlz(plz || "");
        this.setOrt(ort || "");
    }

    toString() {
        return this.getStrasse() + ", " + this.getPlz() + " " + this.getOrt();
    }
};

//Haus
salcher.Haus = class {
    constructor(id, strasse, plz, ort) {
        let _id = 0;
        let _adresse = null;
        let _mietobjekte = [];

        this.setId = function (id) {
            _id = id;
        };

        this.getId = function () {
            return _id;
        };

        this.setAdresse = function (adresse) {
            _adresse = adresse;
        };

        this.getAdresse = function () {
            return _adresse;
        };

        this.getMietobjekte = function () {
            return _mietobjekte;
        };

        this.addMietobjekt = function (mietobjekt) {
            _mietobjekte.push(mietobjekt);
        };

        this.getMietobjektByTopNr = function(topNr) {
            let result = _mietobjekte.filter(mietobjekt => mietobjekt.getTopNr() == topNr);

            if(result.length > 0) {
                return result[0];
            }
            else {
                return null;
            }
        };

        this.setId(id);
        this.setAdresse(new salcher.Adresse(strasse, plz, ort));
    }
};

//Mietobjekt
salcher.Mietobjekt = class {
  constructor(topNr, quadratMeter, mieteProQuadratmeter) {
      let _topNr = null;
      let _quadratMeter = null;
      let _mieteProQuadratmeter = null;

      this.setTopNr = function (topNr) {
          _topNr = topNr;
      };

      this.getTopNr = function () {
          return _topNr;
      };

      this.setQuadratMeter = function (quadratMeter) {
          _quadratMeter = quadratMeter;
      };

      this.getQuadratMeter = function () {
          return _quadratMeter;
      };

      this.setMieteProQuadratmeter = function (mieteProQuadratmeter) {
          _mieteProQuadratmeter = mieteProQuadratmeter;
      };

      this.getMieteProQuadratmeter = function () {
          return _mieteProQuadratmeter;
      };

      this.setTopNr(topNr || 0);
      this.setQuadratMeter(quadratMeter || 0);
      this.setMieteProQuadratmeter(mieteProQuadratmeter || 0);
  }

  mieteGesamt() {
      return this.getQuadratMeter() * this.getMieteProQuadratmeter();
  }

  beschreibung() {
      return this.getTopNr() + ": " + this.getQuadratMeter() + " Quadratmeter, Gesamtmiete: " + this.mieteGesamt();
  }
};

salcher.Wohnung = class extends salcher.Mietobjekt {
    constructor(topNr, quadratMeter, mieteProQuadratmeter, anzahlZimmer) {
        super(topNr, quadratMeter, mieteProQuadratmeter);

        let _anzahlZimmer = null;

        this.setAnzahlZimmer = function (anzahlZimmer) {
            _anzahlZimmer = anzahlZimmer;
        };

        this.getAnzahlZimmer = function () {
            return _anzahlZimmer;
        };

        this.setAnzahlZimmer(anzahlZimmer);
    }

    mieteGesamt() {
        return super.mieteGesamt() + (super.mieteGesamt() * this.getAnzahlZimmer() * 0.05);
    };
};

salcher.Garconniere = class extends salcher.Mietobjekt {
    constructor(topNr, quadratMeter, mieteProQuadratmeter) {
        super(topNr, quadratMeter, mieteProQuadratmeter);
    }

    mieteGesamt() {
        return this.getQuadratMeter() > 30 ? super.mieteGesamt() + 30 : super.mieteGesamt();
    }
};