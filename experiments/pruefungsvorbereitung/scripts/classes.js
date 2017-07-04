var klausur3 = klausur3 || {};

klausur3.Pflanzenverwaltung = class {
    constructor() {
        let _pflanzen = [];

        this.getPflanzen = function() {
            return _pflanzen;
        };

        this.getPflanzeById = function(id) {
            let result = null;
            _pflanzen.forEach(pflanze =>  {

                if(pflanze.getId() == id) {
                    result = pflanze;
                }
            });

            return result ? result : false;
        };
    }

    addPflanze(pflanze) {
        this.getPflanzen().push(pflanze);
    }
};

klausur3.Pflanze = class {
  constructor(id, bezeichnung) {
      let _id = 0;
      let _bezeichnung = "";

      this.getId = function () {
          return _id;
      };

      this.setId = function (id) {
          _id = id;
      };

      this.getBezeichnung = function () {
          return _bezeichnung;
      };

      this.setBezeichnung = function (bezeichnung) {
          _bezeichnung = bezeichnung;
      };

      this.setId(id || 0);
      this.setBezeichnung(bezeichnung || "");
  }

  info() {
      return "Pflanze: "+ this.getBezeichnung();
  }
};

klausur3.Blume = class extends klausur3.Pflanze {
    constructor(id, bezeichnung, farbe) {
        super(id, bezeichnung);

        let _farbe = "";

        this.getFarbe = function () {
            return _farbe;
        };

        this.setFarbe = function (farbe) {
            _farbe = farbe;
        };

        this.setFarbe(farbe || "");
    }

    info() {
        return "Blume: "+ this.getBezeichnung() + ", " + this.getFarbe();
    }
};