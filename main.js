window.onload = function() {
    // Get the Object by ID
    var a = document.getElementById("skills.svg");
    // Get the SVG document inside the Object tag
    var $svg = $(a.contentDocument);
	$svg.find("path").css("pointer-events", "none");

    
	var outer = $svg.find("path[fill='#b4f1c5']");
    outer.css("transform-origin","50% 50%");
	outer.css("pointer-events", "auto");
    outer.hover(function(){
        outer.css("fill","grey");
        outer.css("stroke","black");
    },function(){
        outer.css("fill","#b4f1c5");
        outer.css("stroke","none");
    });
	
	
	var mid = $svg.find("path[fill='#92cbc4']");
    mid.css("transform-origin","50% 50%");
	mid.css("pointer-events", "auto");
    mid.hover(function(){
        mid.css("fill","grey");
        mid.css("stroke","black");
    },function(){
        mid.css("fill","#92cbc4");
        mid.css("stroke","none");
    });
	
	
	var inner = $svg.find("path[fill='#7b93a4']");
    inner.css("transform-origin","50% 50%");
	inner.css("pointer-events", "auto");
    inner.hover(function(){
        inner.css("fill","grey");
        inner.css("stroke","black");
    },function(){
        inner.css("fill","#7b93a4");
        inner.css("stroke","none");
    });
}
