console.log("Acabei de ler o script.js");
var domReady = function(ready) {
    if (document.readyState != 'loading') return ready();
    document.addEventListener('DOMContentLoaded', ready);
    function _ready() {
        document.removeEventListener('DOMContentLoaded', ready);
        ready();
    }
}
