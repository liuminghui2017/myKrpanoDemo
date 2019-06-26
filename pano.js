(function(){
	let krpano
	let url = 'http://stdag-image.oss-cn-beijing.aliyuncs.com/camera_one_image/20180906/3233470e3734343421003900_1536217898-20180906151159649.jpg'
	// let url = 'test.jpg'
	let preview_url = url + '?x-oss-process=image/resize,h_300'

	embedpano({ xml:"pano.xml", target:"pano", onready:krpanoReady, initvars: { source: url, preview_url }});

	function krpanoReady(handle) {
		krpano = handle 
		// krpano.call('normalview')
		// setTimeout(() => {
		// 	krpano.call('fallin')
		// }, 1000);
	}

})()
