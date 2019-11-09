var productTitle = {
    'photo-frame':'Photo Frames ',
    'design-mirror':'Desgning Wall Mirrors',
    'metal-art':' Metal Art',
    'frame-in-sets':' Multiple Set Of Frame',
    'bhudda-statue':' Bhudda Statue',
    'bhudda-framed':'Bhudda Photo Frames ',
    'framed-mirror':' Mirrors In Frames',
    'wal-clock':' Designing Wall Clock' 
};

function showSelectedImage(){
	var image = event.target.src.split('/')[event.target.src.split('/').length-1].split('.')[0];
	$('#detailframe').attr('src', 'img/'+localStorage['image1'].split('/')[0]+"/"+image+'.jpg');

	if(event.target.id === 'image1'){
		$(event.target).parent('li').addClass('active');
		$('#image2').parent('li').removeClass('active');
	}else{
		$(event.target).parent('li').addClass('active');
		$('#image1').parent('li').removeClass('active');
	}
}

$(document).ready(function() { 
	// $('#detailframe').attr('src', localStorage["productDetails"]);
	$('#detailframe').attr('src', 'img/'+localStorage['image1']+'.jpg');
	$('#image1').attr('src', 'img/'+localStorage['image1']+'.jpg');
	$('#image2').attr('src', 'img/'+localStorage['image2']+'.jpg');
	$('.single_product_desc h6').text(productTitle[localStorage.image1.split('/')[0]]);
});
