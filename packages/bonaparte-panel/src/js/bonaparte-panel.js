var bp = require("bonaparte");
var mousetrap = require("mousetrap");

///////////////////////////////////////////////////////////////////////////////
// Public

module.exports = bp.tag.create("panel", [
  require("./toggle"),
  panel
]);

mousetrap.bind("esc", function(){bp.tag.triggerEvent(window, "bonaparte.internal.closePanels")});

///////////////////////////////////////////////////////////////////////////////
function panel(tag){
  var locked = false;

///////////////////////////////////////////////////////////////////////////////
// Public 

  tag.bonaparte.open = open;
  tag.bonaparte.close = close;

///////////////////////////////////////////////////////////////////////////////
// Eventlisteners

  window.addEventListener("click", clickHandler);
  window.addEventListener("bonaparte.internal.closePanels", closePanels);
  tag.addEventListener("bonaparte.tag.attributeUpdated", attributeChangedCallback);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  function clickHandler(e){
    // console.log("globalClick", e.target);
    if(e.target === tag || bp.tag.contains(tag, e.target)) return;
    closePanels();
  }

///////////////////////////////////////////////////////////////////////////////

  function attributeChangedCallback(data){
    // console.log(data, data.detail.name,  data.detail.newValue);
    if(bp.attribute.matchName(/open/, data.detail.name)){
      if(data.detail.newValue == "true") {
        lock();

        tag.bonaparte.triggerEvent("bonaparte.internal.closePanels", null, true);
        tag.bonaparte.triggerEvent("bonaparte.panel.open", null, true);
      }
      else { 
        tag.bonaparte.triggerEvent("bonaparte.panel.close", null, true);
      }
    };    
  }

///////////////////////////////////////////////////////////////////////////////

  function closePanels(){
    if(locked) return;
    close();
  }

///////////////////////////////////////////////////////////////////////////////

  function close() {
    bp.attribute.set(tag, "open", "false");
  }

///////////////////////////////////////////////////////////////////////////////

  function open(e) {    
    bp.attribute.set(tag, "open", "true");
  }
///////////////////////////////////////////////////////////////////////////////

  function lock(){
    locked=true;
    setTimeout(function(){ locked=false; },0);
  }
}

///////////////////////////////////////////////////////////////////////////////