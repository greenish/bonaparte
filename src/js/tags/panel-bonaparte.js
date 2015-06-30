var objct = require("objct");
var util = require("../core/utility");

///////////////////////////////////////////////////////////////////////////////
// Public

module.exports = objct(
  require("../core/tag"), 
  require("../mixins/toggle"),
  panel
);

///////////////////////////////////////////////////////////////////////////////
function panel(){
///////////////////////////////////////////////////////////////////////////////
// Setup 

  var tag = this;
  var locked = false;

///////////////////////////////////////////////////////////////////////////////
// Public 

  this.open = open;
  this.close = close;

///////////////////////////////////////////////////////////////////////////////
// Eventlisteners

  this.global.addListener("click", clickHandler);
  this.global.addListener("closePanels", closePanels);
  this.addListener("attributeChangedCallback", attributeChangedCallback);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  function clickHandler(e){
    if(e.target === tag || util.nodeContains(tag, e.target)) return;
    closePanels();
  }

///////////////////////////////////////////////////////////////////////////////

  function attributeChangedCallback(data){
    if(data.name === "open" && data.newValue == "true") {
      lock();
      tag.global.trigger("closePanels");
    };    
  }

///////////////////////////////////////////////////////////////////////////////

  function closePanels(){
    if(locked) return;
    tag.close();
  }

///////////////////////////////////////////////////////////////////////////////

  function close() {
    tag.setAttribute("open", "false");
  }

///////////////////////////////////////////////////////////////////////////////

  function open(e) {    
    lock();
    tag.setAttribute("open", "true");
  }
///////////////////////////////////////////////////////////////////////////////

  function lock(){
    locked=true;
    setTimeout(function(){ locked=false; },0);
  }
}

///////////////////////////////////////////////////////////////////////////////