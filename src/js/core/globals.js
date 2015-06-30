var objct = require("objct");

///////////////////////////////////////////////////////////////////////////////
// Setup

globals.global = new objct(require("./events"));

globals.prototype = {
  global : globals.global,
};

///////////////////////////////////////////////////////////////////////////////
// Public

module.exports = globals;

///////////////////////////////////////////////////////////////////////////////
// EventListeners

window.addEventListener("click", forwardEvent);
window.addEventListener("resize", forwardEvent);

///////////////////////////////////////////////////////////////////////////////
function globals(){
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

}

///////////////////////////////////////////////////////////////////////////////

function forwardEvent(e){

  globals.global.trigger(e.type, e); 

}