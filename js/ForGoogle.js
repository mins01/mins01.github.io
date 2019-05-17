var ForGoogle = (function(){
	var ForGoogle = {
		"analytics":function(){
			if(this.analytics.out){return false;}
			this.analytics.out = true;
			switch(document.location.hostname){
				case "mins01.com":
				case "www.mins01.com":
				var siteId= 'UA-28167507-1';
				break;
				case "mins01.github.io":
				var siteId= 'UA-28167507-3';
				break;
				default:
				var siteId= null;
				break;
			}
			if(siteId===null){
				return;
			}
			var src = 'https://www.googletagmanager.com/gtag/js?id='+siteId;
			document.write('<scrip');
			document.write('t async src="'+src+'"></scr');
			document.write('ipt>');
			
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', siteId);
		},
		"ads":{
			"init":function(){
				if(this.init.out){return false;}
				this.init.out = true;
				var src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
				document.write('<scrip');
				document.write('t async src="'+src+'"></scr');
				document.write('ipt>');
			},
			"ads300x250":function(){
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:inline-block;width:300px;height:250px"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="1810563809"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
			},
			"ads300x50":function(){
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:inline-block;width:320px;height:50px"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="5262485004"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
			},
		}
	}
	return ForGoogle;
})()