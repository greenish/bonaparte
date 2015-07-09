var util = require("./utility");

///////////////////////////////////////////////////////////////////////////////
// Public

module.exports = {
  triggerEvent : triggerEvent
};

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function triggerEvent(event, data, bubbles, cancelable){
  util.triggerEvent(this, event, {
      bubbles: bubbles | false,
      cancelable: cancelable | false,
      detail: data
  });
}

