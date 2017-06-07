let verwaltung = new sf.at.hyperlinks.data.Hyperlinkverwaltung();

function init(){
    createHyperlinks();
    console.log(verwaltung.getHyperlinks());
    showHyperlinks();
}

function createHyperlinks(){
    verwaltung.addHyperlink(new sf.at.hyperlinks.data.Hyperlink("MCI", "http://www.mci.edu", true));
    verwaltung.addHyperlink(new sf.at.hyperlinks.data.Hyperlink("The Center of the universe", "http://www.google.con", false));
    verwaltung.addHyperlink(new sf.at.hyperlinks.data.Hyperlink("Self promotion", "http://www.github.com/felixsalcher", true));

}

function showHyperlinks(){
    let links = verwaltung.getHyperlinks();
    let container = document.createElement("div");
    let paragraph = null;
    let link = null;
    let headline = document.createElement("h1");
    headline.appendChild(document.createTextNode("Hyperlinkverwaltung: " + links.length));
    container.appendChild(headline);
    links.forEach((el, index) => {
        paragraph = document.createElement("p");
        link = document.createElement("a");
        link.href = el.getUrl();
        link.appendChild(document.createTextNode(el.getName()));
        paragraph.appendChild(link);
        container.appendChild(paragraph);
    });

    document.querySelector("body").appendChild(container);
    document.getElementBy
}
init();