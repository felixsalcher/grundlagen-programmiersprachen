var sf = sf || {};
sf.at = sf.at || {};
sf.at.hyperlinks = sf.at.hyperlinks || {};
sf.at.hyperlinks.data = sf.at.hyperlinks.data || {};

sf.at.hyperlinks.data.Hyperlinkverwaltung = class {

    constructor(){
        let _hyperlinks = [];
    
        this.getHyperlinks=function(){
            return _hyperlinks;
        };
    }
    
    addHyperlink(hyperlink){
        this.getHyperlinks().push(hyperlink);
    }
};

sf.at.hyperlinks.data.Hyperlink = class {

    constructor(name, url, neuesFenster){
        let _name="";
        let _url="";
        let _neuesFenster=false;
        
        this.setName = function(name) {
            if(!name){
                throw new Error("Name darf nicht leer sein!");
            }
            _name = name;
        };
        this.getName = function() {
            return _name;
        };
        this.setUrl = function(url) {
            if(!url){
                throw new Error("URL darf nicht leer sein!");
            }
            _url = url;
        };
        this.getUrl = function() {
            return _url;
        };
        this.setNeuesFenster = function(neuesFenster) {
            _neuesFenster = neuesFenster;
        };
        this.getNeuesFenster = function() {
            return _neuesFenster;
        };
        
        this.setName(name);
        this.setUrl(url);
        this.setNeuesFenster(neuesFenster);
    }
};