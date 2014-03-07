//
// Geomicons Open
// 
// http://jxnblk.github.io/geomicons-open
// JS SVG injection
// 

// Location of SVG sprite
var iconUrl = 'geomicons-wired.svg';


var icons = document.getElementsByClassName('geomicon'),
    xmlHttp = null,
    injectSvg,
    svg;

xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', iconUrl, false);
xmlHttp.send(null);

if(xmlHttp.responseXML) {
  svg = xmlHttp.responseXML.documentElement;
} else {
  console.error('Image not found - check iconUrl variable.');
}

injectSvg = function(el, svg){
  svg.setAttribute('class', el.className);
  el.parentNode.replaceChild(svg, el);
};

for (var i = 0; i < icons.length; i++){
  var icon = icons[i];
  if(svg) {
    svg = svg.cloneNode(true);
    injectSvg(icon, svg);
  } else {
    console.error('Image not found');
  }
};

