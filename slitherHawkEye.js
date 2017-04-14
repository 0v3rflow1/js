var slitherHawkEye=(function(w,undefined){
	function init(){
		if(/firefox/i.test(navigator.userAgent)){
			e={
				"mousewheel":"DOMMouseScroll" 
			}; 
		}else{
			e={
				"mousewheel":"mousewheel"
			}; 
		} 
		hawkEye(e.mousewheel); 
	}
	function hawkEye(e){ 
		w.addEventListener(e,function(ev){
			if(ev.detail){
				z=(ev.detail>0)?-.1:.1;
			}else{
				z=(ev.wheelDelta>0)?.1:-.1;
			}
			w.gsc+=z;
			w.sgsc+=z;
		});
	}
	return{
		"init":(function(){return init()})() 
	}
})(window);
