var ForGoogle = (function(){
	var ForGoogle = {
		"getLanguage":function(){
			var language = navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;
			return language;
		},
		"isChina":function(){
			var checkedLang = this.getLanguage().indexOf('zh')===0; //중국어 체크
			var checkedTimeZO =  ((new Date()).getTimezoneOffset()/60 == -8); //타임존 체크
			return checkedLang || checkedTimeZO; //중국내 다른 언어 설정하는 사람이 있어서 ||로 체크
		},
		"analytics":function(){
			if(ForGoogle.isChina()){ return false; }
			if(this.analytics.out){return false;}
			this.analytics.out = true;
			switch(document.location.hostname){
				case "mins01.com":
				case "www.mins01.com":
				case "wwwdev.mins01.com":
				// var siteId= 'UA-28167507-1'; //UA - deprecated - 2022-12-08
				var siteId= 'G-GTEB6KKGFF'; //GA4
				
				break;
				case "mins01.github.io":
				// var siteId= 'UA-28167507-3'; //UA - deprecated - 2022-12-08
				var siteId= 'G-D0YCWM0J4Y'; //GA4
				
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
			if(window.console) console.log("ForGoogle.ads.analytics");
		},
		"ads":{
			"init":function(){
				if(ForGoogle.isChina()){ return false; }
				if(this.init.out){return false;}
				this.init.out = true;
				var src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
				document.write('<scrip');
				document.write('t async src="'+src+'"></scr');
				document.write('ipt>');
				if(window.console) console.log("ForGoogle.ads.init");
			},
			//adsReactive02 으로 대체
			"ads300x250":function(){
				if(ForGoogle.isChina()){ return false; }
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:inline-block;width:300px;height:250px"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="1810563809"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
				 if(window.console) console.log("ForGoogle.ads.ads300x250");
			},
			//동작 안하네
			"ads320x50":function(){
				if(ForGoogle.isChina()){ return false; }
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:inline-block;width:320px;height:50px"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="5262485004"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
				 if(window.console) console.log("ForGoogle.ads.ads320x50");
			},
			// ads320x50 대신 사용
			"ads320x100":function(){
				if(ForGoogle.isChina()){ return false; }
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:inline-block;width:320px;height:100px"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="6250234571"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
				 if(window.console) console.log("ForGoogle.ads.ads320x100");
			},
			//반응형 광고1, 상단용, 현재 사용안함
			"adsReactive01":function(){
				if(ForGoogle.isChina()){ return false; }
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:block"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="9023737571" data-ad-format="auto" data-full-width-responsive="true"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
				 if(window.console) console.log("ForGoogle.ads.adsReactive01");
			},
			//반응형 광고2, 하단용
			"adsReactive02":function(){
				if(ForGoogle.isChina()){ return false; }
				this.init();
				document.write('<ins class="adsbygoogle"'
		     +'style="display:block"'
		     +'data-ad-client="ca-pub-5804424351292113"'
		     +'data-ad-slot="6500558156" data-ad-format="auto" data-full-width-responsive="true"></ins>');
				 (adsbygoogle = window.adsbygoogle || []).push({});
				 if(window.console) console.log("ForGoogle.ads.adsReactive02");
			},
		}
	}
	ForGoogle.ads.ads300x50 = ForGoogle.ads.ads320x50
	return ForGoogle;
})()
