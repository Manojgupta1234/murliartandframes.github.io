localStorage["productDetails"] = "";
localStorage["image1"] = "";
localStorage["image2"] = "";

var product = {
    'photo-frame':'MurliArt&Frames Moulding Photo Frames Modern Arts God Painting Scenery',
    'design-mirror':'MurliArt&Frames Desgning Wall Mirrors',
    'metal-art':'MurliArt&Frames Metal Art For Wall',
    'frame-in-sets':'MurliArt&Frames Multiple Set Of Frame',
    'bhudda-statue':'MurliArt&Frames Showcase Bhudd Statue',
    'bhudda-framed':'MurliArt&Frames Moulding Photo Frames in Bhudda',
    'framed-mirror':'MurliArt&Frames Mirrors With Moulding Frames',
    'wal-clock':'MurliArt&Frames Desgning Wall Clock' 
};

function frameClicked(id){
    localStorage["productDetails"] =  'img/'+id+'.jpg';
    localStorage['image1'] = id.split('wall')[0];
    localStorage['image2'] = id;
}

function loadProducts(){
	var productsElement = '';
	for(var i=1; i<=localStorage.count; i++){
		productsElement += 
			"<div class='col-6 col-sm-4 col-md-3 col-xl-3'>"+
                        "<div class='single-product-wrapper'>"+
                            "<!-- Product Image -->"+
                            "<div class='product-img'>"+
                                "<img src='img/"+localStorage.product+"/"+i+".jpg' alt=''>"+
                            "</div>"+

                            "<!-- Product Description -->"+
                            "<div class='product-description d-flex align-items-center justify-content-between'>"+
                                "<!-- Product Meta Data -->"+
                                "<div class='product-meta-data' onclick='frameClicked(\""+localStorage.product+"/"+i+"wall\")'>"+
                                    "<a href='product-details.html'>"+
                                        "<span>"+product[localStorage.product]+"</span>"+
                                    "</a>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";

	}
	$("#productElement").append(productsElement); 
}

$(document).ready(function() {
	loadProducts();
    if(localStorage.product === 'photo-frame'){
        $('.balaji').css('display','block');
    }
});

