function init_vd_page() {
    console.log("OnPageLoad: VD-page");
    var a = 55.748223, b = -4.16867;
    initalizeMaps("#vd-Map-obj", "Vehicle Here!", a, b), google.load("visualization", "1.0", {
        packages: [ "corechart" ],
        callback: function() {
            initGraphs("#vd-Speed-obj", "#vd-Accel-obj");
        }
    }), init_websocket(), pageID = "vd", init_vdDemo();
}