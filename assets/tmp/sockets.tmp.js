function init_websocket(a, b) {
    GLB.sock = new WebSocket(b), GLB.currSOCK = a, console.log("Sock Init - Websocket Initialising:" + GLB.currSOCK), 
    console.log("Sock Init - Socket Address:" + b), GLB.sock.onopen = function(a) {
        sockOnOpen(a);
    }, GLB.sock.onclose = function(c) {
        sockOnClose(c, a, b);
    }, GLB.sock.onmessage = function(a) {
        sockOnMessage(a);
    }, GLB.sock.onerror = function(c) {
        sockOnError(c, a, b);
    };
}

function sockOnOpen(a) {
    console.log("Sock Open - Connected to websocket: " + GLB.currSOCK), GLB.currSOCK == GLB.SOCKETSTRESS ? GLB.sock.send(GLB.SOCKETSTRESSREQ) : GLB.currSOCK == GLB.SOCKETBIGD && GLB.sock.send(GLB.SOCKETBIGDFLEETREQ);
}

function sockOnClose(a, b, c) {
    console.log("Sock Close - Websocket Connection closed: " + GLB.currSOCK), GLB.sock = null, 
    init_websocket(b, c);
}

function sockOnError(a) {
    console.log("Sock Error - Websocket error detected: " + GLB.currSOCK), init_websocket(socketID, address);
}

function sockOnMessage(a) {
    console.log("Sock OnMessage - Data received from socket: " + GLB.currSOCK), watchdogClear(), 
    console.log("Clearing watchog");
    var b = JSON.parse(a.data);
    console.log("Sock OnMessage - Object Data follows..."), console.log(b), GLB.pgID == GLB.PGVD && GLB.vehicle.processSocketVD(b), 
    GLB.pgID == GLB.PGCONS && GLB.vehicle.processSocketCONS(b), GLB.pgID == GLB.PGSTRESS && GLB.fleet.processSocketStress(b), 
    GLB.pgID == GLB.PGBIGD && GLB.fleet.processSocketBIGD(b);
}

function sockSendMessage(a) {
    GLB.sock.send(a);
}