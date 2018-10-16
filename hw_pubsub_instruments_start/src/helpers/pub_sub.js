const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
    console.log(`published on channel ${channel} the event ${event}`);
  },

  subscribe: function(channel, callback){
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
