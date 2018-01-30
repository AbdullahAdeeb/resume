window.onload = function() {
    // Get the Object by ID
    var a = document.getElementById("skills.svg");
    // Get the SVG document inside the Object tag
    var $svg = $(a.contentDocument);
    $svg.find("path").css("pointer-events", "none");


    var outer = $svg.find("path[fill='#efefef']");
    outer.css("transform-origin", "50% 50%");
    outer.css("pointer-events", "auto");
    outer.hover(function() {
        outer.css("fill", "grey");
        outer.css("stroke", "black");
    }, function() {
        outer.css("fill", "#efefef");
        outer.css("stroke", "none");
    });


    var mid = $svg.find("path[fill='#8dd8bc']");
    mid.css("transform-origin", "50% 50%");
    mid.css("pointer-events", "auto");
    mid.hover(function() {
        mid.css("fill", "grey");
        mid.css("stroke", "black");
    }, function() {
        mid.css("fill", "#8dd8bc");
        mid.css("stroke", "none");
    });


    var inner = $svg.find("path[fill='#45818e']");
    inner.css("transform-origin", "50% 50%");
    inner.css("pointer-events", "auto");
    inner.hover(function() {
        inner.css("fill", "grey");
        inner.css("stroke", "black");
    }, function() {
        inner.css("fill", "#45818e");
        inner.css("stroke", "none");
    });
}

function onPrint() {
    window.print();
}