var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+USTC_VPN", {
    "+USTC_VPN": function() {
        ;
function FindProxyForURL(url, host) {

     var proxyList = {
'10conditionsoflove.com':1,
'10musume.com':1,
'123rf.com':1,
'21andy.com':1,
'3.cn':1,
'360buyimg.com':1,
'4bluestones.biz':1,
'4chan.org':1,
'4sq.com':1,
'4sqi.net':1,
'500px.org':1,
'6park.com':1,
'888.com':1,
'abc.xyz':1,
'acgvideo.com':1,
'admob.com':1,
'af.mil':1,
'akamai.net':1,
'akamaihd.net':1,
'akiba-online.com':1,
'alabout.com':1,
'all-that-is-interesting.com':1,
'allinfa.com':1,
'allmovie.com':1,
'alvinalexander.com':1,
'amazon.com':1,
'amazon.cn':1,
'amnesty.org':1,
'anaconda.com':1,
'android.com':1,
'angularjs.org':1,
'anobii.com':1,
'anyu.org':1,
'aol.com':1,
'aolcdn.com':1,
'aolnews.com':1,
'ap.org':1,
'api.onedrive.com':1,
'apiary.io':1,
'apigee.com':1,
'appannie.com':1,
'appledaily.com':1,
'appleid.apple.com':1,
'appspot.com':1,
'archive.is':1,
'archive.org':1,
'arctosia.com':1,
'art-or-porn.com':1,
'artsy.net':1,
'asianews.it':1,
'assembla.com':1,
'astrill.com':1,
'atebits.com':1,
'atgfw.org':1,
'atlassian.com':1,
'atnext.com':1,
'avidemux.org':1,
'awflasher.com':1,
'baby-kingdom.com':1,
'backtotiananmen.com':1,
'badassjs.com':1,
'badoo.com':1,
'bbc.com':1,
'bbc.in':1,
'bbcchinese.com':1,
'bebo.com':1,
'behance.net':1,
'beijingspring.com':1,
'benjaminste.in':1,
'bestvpnservice.com':1,
'bet365.com':1,
'betfair.com':1,
'bfnn.org':1,
'bilibili.com':1,
'bit.ly':1,
'bitcointalk.org':1,
'bitly.com':1,
'bitshare.com':1,
'blip.tv':1,
'blog.de':1,
'blogcatalog.com':1,
'blogger.com':1,
'bloglovin.com':1,
'blogs.com':1,
'blogsmithmedia.com':1,
'blogspot.com':1,
'blogspot.de':1,
'blogspot.fr':1,
'blogspot.in':1,
'blogtd.org':1,
'bloodshed.net':1,
'bloomberg.com':1,
'boardreader.com':1,
'bonbonme.com':1,
'bowenpress.com':1,
'box.com':1,
'box.net':1,
'boxcar.io':1,
'boxun.com':1,
'branch.com':1,
'braumeister.org':1,
'break.com':1,
'brizzly.com':1,
'btdigg.org':1,
'btspread.com':1,
'budaedu.org':1,
'businessweek.com':1,
'byethost8.com':1,
'c-spanvideo.org':1,
'cafepress.com':1,
'calameo.com':1,
'cams.com':1,
'canyu.org':1,
'caobian.info':1,
'cari.com.my':1,
'cbsnews.com':1,
'cdninstagram.com':1,
'cdp1989.org':1,
'cdp1998.org':1,
'cecc.gov':1,
'cenews.eu':1,
'centurys.net':1,
'chandoo.org':1,
'change.org':1,
'changp.com':1,
'chaturbate.com':1,
'chinaaid.net':1,
'chinadigitaltimes.net':1,
'chinese.net.au':1,
'chinesepen.org':1,
'chrome.com':1,
'chromeadblock.com':1,
'chromeexperiments.com':1,
'chromium.org':1,
'chubun.com':1,
'citizenpath.com':1,
'cjb.net':1,
'ck101.com':1,
'cloudflare.com':1,
'cloudfront.net':1,
'cms.gov':1,
'cnd.org':1,
'cnn.com':1,
'cnyes.com':1,
'codeboxapp.com':1,
'codecademy.com':1,
'comedycentral.com':1,
'comefromchina.com':1,
'cool18.com':1,
'coolaler.com':1,
'coolder.com':1,
'cpj.org':1,
'crackle.com':1,
'creaders.net':1,
'csuchen.de':1,
'cuhkacs.org':1,
'culturedcode.com':1,
'cyberctm.com':1,
'cyberghostvpn.com':1,
'dadazim.com':1,
'dadi360.com':1,
'dafahao.com':1,
'dailymotion.com':1,
'dajiyuan.com':1,
'dajiyuan.eu':1,
'dalailamaworld.com':1,
'dangdang.com':1,
'danwei.org':1,
'daolan.net':1,
'darpa.mil':1,
'daylife.com':1,
'dayoneapp.com':1,
'de-sci.org':1,
'debian.org':1,
'delicious.com':1,
'democrats.org':1,
'deviantart.com':1,
'diigo.com':1,
'disqus.com':1,
'djangosnippets.org':1,
'dlsite.com':1,
'dmcdn.net':1,
'dmm.com':1,
'dnscrypt.org':1,
'dolc.de':1,
'domaintoday.com.au':1,
'dongtaiwang.com':1,
'dotsub.com':1,
'doubleclick.net':1,
'doublepimp.com':1,
'doxygen.org':1,
'dribbble.com':1,
'dropbox.com':1,
'dropboxstatic.com':1,
'dropboxusercontent.com':1,
'drtuber.com':1,
'dtiblog.com':1,
'dtic.mil':1,
'duckduckgo.com':1,
'dundishu.net':1,
'duping.net':1,
'dupola.com':1,
'dw-world.de':1,
'dw.com':1,
'dw.de':1,
'dwnews.com':1,
'dwnews.net':1,
'e-spacy.com':1,
'ebocornac.com':1,
'ebookee.com':1,
'echofon.com':1,
'economist.com':1,
'edgesuite.net':1,
'editmysite.com':1,
'edoors.com':1,
'edubridge.com':1,
'edx.org':1,
'embr.in':1,
'emory.edu':1,
'engadget.com':1,
'epochtimes.com':1,
'epochtimes.fr':1,
'epochweekly.com':1,
'erepublik.com':1,
'erights.net':1,
'etaiwannews.com':1,
'eulam.com':1,
'eventful.com':1,
'everyday-carry.com':1,
'exploader.net':1,
'extremetube.com':1,
'facebook.com':1,
'facebook.net':1,
'fakku.net':1,
'fanqianghou.com':1,
'fapdu.com':1,
'fastly.net':1,
'faststone.org':1,
'fatwallet.com':1,
'favstar.fm':1,
'fb.com':1,
'fb.me':1,
'fbcdn.net':1,
'fc2.com':1,
'fc2china.com':1,
'feedburner.com':1,
'feedly.com':1,
'feelssh.com':1,
'ff.im':1,
'fgmtv.org':1,
'filefactory.com':1,
'fileserve.com':1,
'findmima.com':1,
'fitbit.com':1,
'fleshbot.com':1,
'flickr.com':1,
'flickrhivemind.net':1,
'flnet.org':1,
'fmnnow.com':1,
'focusvpn.com':1,
'forums-free.com':1,
'fotop.net':1,
'foxbusiness.com':1,
'foxsub.com':1,
'fqrouter.com':1,
'freakshare.com':1,
'free.fr':1,
'freechal.com':1,
'freedomhouse.org':1,
'freelancer.com':1,
'freelotto.com':1,
'freeoz.org':1,
'freepik.com':1,
'freetibet.org':1,
'freewallpaper4.me':1,
'freewebs.com':1,
'freeweibo.com':1,
'friendfeed.com':1,
'ftchinese.com':1,
'funp.com':1,
'futureme.org':1,
'fw.cm':1,
'fxnetworks.com':1,
'g.co':1,
'gaoming.net':1,
'gather.com':1,
'gcpnews.com':1,
'geek-art.net':1,
'geekerhome.com':1,
'geocities.com':1,
'getchu.com':1,
'getcloudapp.com':1,
'getfoxyproxy.org':1,
'getiton.com':1,
'getjetso.com':1,
'getlantern.org':1,
'getpocket.com':1,
'getvpn.ustclug.org':1,
'ggpht.com':1,
'ggssl.com':1,
'ghostery.com':1,
'gimpshop.com':1,
'git-scm.com':1,
'github.com':1,
'github.io':1,
'githubusercontent.com':1,
'globalvoicesonline.org':1,
'gmail.com':1,
'golang.org':1,
'goldwave.com':1,
'goo.gl':1,
'goodreads.com':1,
'google.ca':1,
'google.co.in':1,
'google.com':1,
'google.de':1,
'googleadservices.com':1,
'googleapis.com':1,
'googleartproject.com':1,
'googlecode.com':1,
'googledrive.com':1,
'googlegroups.com':1,
'googlehosted.com':1,
'googlelabs.com':1,
'googlemail.com':1,
'googlepages.com':1,
'googleplus.com':1,
'googlesource.com':1,
'googlesyndication.com':1,
'googletagmanager.com':1,
'googletagservices.com':1,
'googleusercontent.com':1,
'googlevideo.com':1,
'gospelherald.com':1,
'gotw.ca':1,
'gpass1.com':1,
'gradconnection.com':1,
'gravatar.com':1,
'greatfire.org':1,
'greenvpn.net':1,
'gstatic.com':1,
'gtricks.com':1,
'gun-world.net':1,
'gvt0.com':1,
'gvt1.com':1,
'gvt2.com':1,
'gvt3.com':1,
'gzone-anime.info':1,
'h-china.org':1,
'haproxy.org':1,
'have8.com':1,
'he.net':1,
'hecaitou.net':1,
'helloqueer.com':1,
'hellouk.org':1,
'heqinglian.net':1,
'heywire.com':1,
'hidecloud.com':1,
'hideipvpn.com':1,
'hidemyass.com':1,
'hikinggfw.org':1,
'hinet.net':1,
'hjclub.info':1,
'hk':1,
'hk-pub.com':1,
'hkej.com':1,
'hkepc.com':1,
'hkfront.org':1,
'hkgolden.com':1,
'hkheadline.com':1,
'hkhkhk.com':1,
'hkjc.com':1,
'hloli.net':1,
'hnjhj.com':1,
'hootsuite.com':1,
'howtoforge.com':1,
'hrichina.org':1,
'hrw.org':1,
'htmldog.com':1,
'huaglad.com':1,
'huanghuagang.org':1,
'hulu.com':1,
'hutianyi.net':1,
'hwinfo.com':1,
'i-cable.com':1,
'i2p2.de':1,
'iask.bz':1,
'iask.ca':1,
'ibiblio.org':1,
'ibtimes.com':1,
'icerocket.com':1,
'icij.org':1,
'.idcquan.com':1,
'idemocracy.asia':1,
'ift.tt':1,
'ifttt.com':1,
'ig.com.br':1,
'igfw.net':1,
'ihostimg.com':1,
'im.tv':1,
'imageflea.com':1,
'imagevenue.com':1,
'imagezilla.net':1,
'imlive.com':1,
'in.com':1,
'inmediahk.net':1,
'instagram.com':1,
'instapaper.com':1,
'internationalrivers.org':1,
'internet.org':1,
'internetdefenseleague.org':1,
'internetfreedom.org':1,
'inxian.com':1,
'iphone-dev.org':1,
'iphonehacks.com':1,
'ipvanish.com':1,
'iredmail.org':1,
'ironpython.net':1,
'isaacmao.com':1,
'israbox.com':1,
'istef.info':1,
'istockphoto.com':1,
'isunaffairs.com':1,
'iyouport.com':1,
'j.mp':1,
'javfee.com':1,
'javmoo.info':1,
'javpop.com':1,
'javzoo.com':1,
'jd.com':1,
'jiaoyou8.com':1,
'jingdong.com':1,
'jingpin.org':1,
'jitouch.com':1,
'jkforum.net':1,
'joachims.org':1,
'jp':1,
'jqueryui.com':1,
'junauza.com':1,
'justin.tv':1,
'juziyue.com':1,
'kaiyuan.de':1,
'kakao.com':1,
'kangye.org':1,
'karayou.com':1,
'kat.cr':1,
'kcsoftwares.com':1,
'keepandshare.com':1,
'kenengba.com':1,
'kickstarter.com':1,
'kinghost.com':1,
'klip.me':1,
'kompozer.net':1,
'kwongwah.com.my':1,
'kyohk.net':1,
'la-forum.org':1,
'labiennale.org':1,
'ladbrokes.com':1,
'lalulalu.com':1,
'laqingdan.net':1,
'latimes.com':1,
'law.com':1,
'learncodethehardway.org':1,
'lemonde.fr':1,
'lesscss.org':1,
'letscorp.net':1,
'light.ustclug.org':1,
'lightbox.com':1,
'line.me':1,
'linglingfa.com':1,
'linkedin.com':1,
'linksalpha.com':1,
'linode.com':1,
'linuxconfig.org':1,
'linuxtoy.org':1,
'listentoyoutube.com':1,
'littlebigdetails.com':1,
'live.com':1,
'livefilestore.com':1,
'liveleak.com':1,
'livestation.com':1,
'livestream.com':1,
'lizhizhuangbi.com':1,
'lkcn.net':1,
'logiqx.com':1,
'loiclemeur.com':1,
'lookpic.com':1,
'lsforum.net':1,
'lsmchinese.org':1,
'lvv2.com':1,
'mail-archive.com':1,
'malaysiakini.com':1,
'mallfinder.com':1,
'marc.info':1,
'marco.org':1,
'markmail.org':1,
'martau.com':1,
'marxists.org':1,
'mediafire.com':1,
'medium.com':1,
'meetup.com':1,
'mefeedia.com':1,
'mega.co.nz':1,
'mega.nz':1,
'merriam-webster.com':1,
'mesotw.com':1,
'metacafe.com':1,
'mgoon.com':1,
'mgstage.com':1,
'mhradio.org':1,
'middle-way.net':1,
'minecraft.net':1,
'minghui-school.org':1,
'minghui.org':1,
'mingjinglishi.com':1,
'mingjingnews.com':1,
'mingpao.com':1,
'mingpaonews.com':1,
'mininova.org':1,
'miroguide.com':1,
'mirrorbooks.com':1,
'mitbbs.com':1,
'mixpod.com':1,
'mixx.com':1,
'mmaaxx.com':1,
'mmdays.com':1,
'mobatek.net':1,
'mobile01.com':1,
'moby.to':1,
'mobypicture.com':1,
'moegirl.org':1,
'mog.com':1,
'molihua.org':1,
'mongodb.org':1,
'mooo.com':1,
'morningsun.org':1,
'moviefap.com':1,
'mpfinance.com':1,
'msguancha.com':1,
'multiply.com':1,
'muzu.tv':1,
'mx981.com':1,
'my-proxy.com':1,
'my903.com':1,
'myaudiocast.com':1,
'mychat.to':1,
'mychinanews.com':1,
'mycnnews.com':1,
'mycould.com':1,
'myeclipseide.com':1,
'myfreshnet.com':1,
'mysinablog.com':1,
'myspace.com':1,
'nabble.com':1,
'namecheap.com':1,
'nanyang.com':1,
'nanzao.com':1,
'nasa.gov':1,
'navicat.com':1,
'navy.mil':1,
'nbc.com':1,
'ncol.com':1,
'netfirms.com':1,
'netflix.com':1,
'netlog.com':1,
'networkedblogs.com':1,
'new-3lunch.net':1,
'new-akiba.com':1,
'newcenturynews.com':1,
'newgrounds.com':1,
'newsancai.com':1,
'newyorktimes.com':1,
'nextmedia.com':1,
'nga.mil':1,
'ngrok.com':1,
'ning.com':1,
'nobelprize.org':1,
'nokogiri.org':1,
'nordstrom.com':1,
'nordstromimage.com':1,
'nordstromrack.com':1,
'now.com':1,
'nownews.com':1,
'nps.gov':1,
'nrk.no':1,
'ntd.tv':1,
'ntdtv.com':1,
'nurgo-software.com':1,
'nuvid.com':1,
'nyt.com':1,
'nytco.com':1,
'nytimes.com':1,
'nytimg.com':1,
'oauth.net':1,
'omnitalk.com':1,
'onmoon.com':1,
'opendemocracy.net':1,
'openid.net':1,
'openvpn.net':1,
'opera-mini.net':1,
'opera.com':1,
'orientaldaily.com.my':1,
'orzdream.com':1,
'oursogo.com':1,
'oursteps.com.au':1,
'over-blog.com':1,
'ovi.com':1,
'ow.ly':1,
'owind.com':1,
'owl.li':1,
'oxid.it':1,
'ozchinese.com':1,
'ozyoyo.com':1,
'packagecontrol.io':1,
'packetix.net':1,
'page2rss.com':1,
'pagodabox.com':1,
'palm.com':1,
'pandora.com':1,
'pandora.tv':1,
'panoramio.com':1,
'pao-pao.net':1,
'paper-replika.com':1,
'paper.li':1,
'parade.com':1,
'parislemon.com':1,
'pastebin.com':1,
'pastie.org':1,
'path.com':1,
'pbs.org':1,
'pbworks.com':1,
'peacehall.com':1,
'penthouse.com':1,
'peopo.org':1,
'philly.com':1,
'phncdn.com':1,
'phonegap.com':1,
'pilotmoon.com':1,
'pin6.com':1,
'ping.fm':1,
'pinimg.com':1,
'pinterest.com':1,
'piring.com':1,
'pixnet.net':1,
'playboy.com':1,
'playpcesor.com':1,
'plixi.com':1,
'plus28.com':1,
'pmates.com':1,
'pokerstars.com':1,
'pokerstrategy.com':1,
'popyard.com':1,
'popyard.org':1,
'porn.com':1,
'pornhub.com':1,
'pornmm.net':1,
'pornoxo.com':1,
'porntube.com':1,
'pose.com':1,
'post852.com':1,
'posterous.com':1,
'power.com':1,
'powerapple.com':1,
'presentationzen.com':1,
'prestige-av.com':1,
'privateinternetaccess.com':1,
'privatetunnel.com':1,
'provideocoalition.com':1,
'proxifier.com':1,
'proxy.org':1,
'psiphon.ca':1,
'puffinbrowser.com':1,
'puffstore.com':1,
'pure18.com':1,
'pureconcepts.net':1,
'purevpn.com':1,
'pushbullet.com':1,
'python.com':1,
'qiwen.lu':1,
'qoos.com':1,
'qq.com':1,
'qtrac.eu':1,
'qxbbs.org':1,
'radioaustralia.net.au':1,
'radiotime.com':1,
'rapbull.net':1,
'rapidgator.net':1,
'raz-kids.com':1,
'rcinet.ca':1,
'reddit.com':1,
'redtube.com':1,
'renminbao.com':1,
'reuters.com':1,
'reutersmedia.net':1,
'rfa.org':1,
'rferl.org':1,
'rfi.fr':1,
'rfi.my':1,
'rhcloud.com':1,
'riku.me':1,
'rnw.nl':1,
'robtex.com':1,
'rockstargames.com':1,
'roodo.com':1,
'rsf-chinese.org':1,
'rsf.org':1,
'ruanyifeng.com':1,
'rutube.ru':1,
'rxhj.net':1,
'samair.ru':1,
'sammyjs.org':1,
'savemedia.com':1,
'savevid.com':1,
'scmp.com':1,
'scmpchinese.com':1,
'scorecardresearch.com':1,
'scribd.com':1,
'scriptspot.com':1,
'search.com':1,
'secretchina.com':1,
'secureserver.net':1,
'securitykiss.com':1,
'seevpn.com':1,
'seezone.net':1,
'sendspace.com':1,
'sephora.com':1,
'seraph.me':1,
'sfileydy.com':1,
'sg':1,
'shadowsocks.org':1,
'shenzhoufilm.com':1,
'shitaotv.org':1,
'shkspr.mobi':1,
'shodanhq.com':1,
'shopcolumbiagorgeoutlets.com':1,
'shopping.com':1,
'shutterstock.com':1,
'sinchew.com.my':1,
'singtao.ca':1,
'singtao.com':1,
'sinocism.com':1,
'sinoquebec.com':1,
'sis001.com':1,
'site90.net':1,
'sitemaps.org':1,
'skyapi.live.net':1,
'skybet.com':1,
'skykiwi.com':1,
'skype.com':1,
'slack.com':1,
'slideshare.net':1,
'slutload.com':1,
'smartisan.com':1,
'snapchat.com':1,
'sndcdn.com':1,
'softether.org':1,
'softwarebychuck.com':1,
'sohcradio.com':1,
'somee.com':1,
'sopcast.com':1,
'sopcast.org':1,
'sorting-algorithms.com':1,
'soundcloud.com':1,
'soundofhope.org':1,
'soup.io':1,
'sourceforge.net':1,
'spankwire.com':1,
'sparrowmailapp.com':1,
'spotify.com':1,
'squarespace.com':1,
'ssl-images-amazon.com':1,
'sstatic.net':1,
'stackoverflow.com':1,
'starp2p.com':1,
'state.gov':1,
'stickeraction.com':1,
'stoneip.info':1,
'storagenewsletter.com':1,
'streetvoice.com':1,
'strongvpn.com':1,
'sugarsync.com':1,
'sydneytoday.com':1,
'sysresccd.org':1,
'sytes.net':1,
't.co':1,
't35.com':1,
'taiwangoodlife.org':1,
'taiwanus.net':1,
'tampabay.com':1,
'tangben.com':1,
'taobao.com':1,
'taragana.com':1,
'target.com':1,
'tdesktop.com':1,
'telegram.org':1,
'tenacy.com':1,
'tensorflow.org':1,
'test.ustc.edu.cn':1,
'theappleblog.com':1,
'thebodyshop-usa.com':1,
'thedailywh.at':1,
'thedieline.com':1,
'thegatesnotes.com':1,
'thehousenews.com':1,
'theinitium.com':1,
'thenewslens.com':1,
'thepiratebay.org':1,
'thepiratebay.se':1,
'thesartorialist.com':1,
'theverge.com':1,
'thinkingtaiwan.com':1,
'thisav.com':1,
'thumbzilla.com':1,
'tiananmenmother.org':1,
'tibet.com':1,
'time.com':1,
'tinychat.com':1,
'tistory.com':1,
'tjholowaychuk.com':1,
'tl.gd':1,
'tmagazine.com':1,
'tmall.com':1,
'tmi.me':1,
'tnaflix.com':1,
'togetter.com':1,
'tokyo-247.com':1,
'tokyo-hot.com':1,
'tokyocn.com':1,
'topify.com':1,
'topnews.in':1,
'topsy.com':1,
'torproject.org':1,
'torrentkitty.com':1,
'torrentkitty.org':1,
'trendsmap.com':1,
'tripod.com':1,
'tsctv.net':1,
'tt1069.com':1,
'tube.com':1,
'tube8.com':1,
'tubewolf.com':1,
'tuidang.org':1,
'tumblr.com':1,
'tumutanzi.com':1,
'tunein.com':1,
'tunnelbear.com':1,
'turbobit.net':1,
'tv.com':1,
'tvb.com':1,
'tvboxnow.com':1,
'tw':1,
'twbbs.org':1,
'tweepml.org':1,
'tweetdeck.com':1,
'tweetymail.com':1,
'twibbon.com':1,
'twicsy.com':1,
'twilio.com':1,
'twilog.org':1,
'twimg.com':1,
'twip.me':1,
'twister.net.co':1,
'twitbrowser.net':1,
'twitgoo.com':1,
'twitlonger.com':1,
'twitpic.com':1,
'twitter.com':1,
'twittercounter.com':1,
'twitterfeed.com':1,
'twittergadget.com':1,
'twitthat.com':1,
'twttr.com':1,
'tynsoe.org':1,
'typekit.com':1,
'typepad.com':1,
'uderzo.it':1,
'udn.com':1,
'ugo.com':1,
'uhrp.org':1,
'uighurbiz.net':1,
'uk':1,
'uk.to':1,
'ultraxs.com':1,
'uncyclopedia.info':1,
'urlparser.com':1,
'us':1,
'us.to':1,
'usa.gov':1,
'usgs.gov':1,
'ustream.tv':1,
'uushare.com':1,
'uwants.com':1,
'uyghurcongress.org':1,
'value-domain.com':1,
'van698.com':1,
'vansky.com':1,
'veoh.com':1,
'verybs.com':1,
'vevo.com':1,
'vfsglobal.com':1,
'viki.com':1,
'vimeo.com':1,
'vimeocdn.com':1,
'voacantonese.com':1,
'voachinese.com':1,
'voagd.com':1,
'voanews.com':1,
'vot.org':1,
'voy.com':1,
'vpnbook.com':1,
'vpncup.com':1,
'vpnfire.com':1,
'vpngate.net':1,
'w.org':1,
'w3.org':1,
'waffle1999.com':1,
'wahas.com':1,
'waikeung.org':1,
'wallpapercasa.com':1,
'wanderinghorse.net':1,
'wangafu.net':1,
'want-daily.com':1,
'waqn.com':1,
'washeng.net':1,
'wattpad.com':1,
'wearn.com':1,
'webbang.net':1,
'webshots.com':1,
'websitepulse.com':1,
'weiming.info':1,
'weiquanwang.org':1,
'wengewang.org':1,
'wenxuecity.com':1,
'wenyunchao.com':1,
'westca.com':1,
'wetpussygames.com':1,
'wetransfer.com':1,
'wforum.com':1,
'whippedass.com':1,
'wikia.com':1,
'wikibooks.org':1,
'wikileaks.org':1,
'wikimapia.org':1,
'wikimedia.org':1,
'wikinews.org':1,
'wikipedia.org':1,
'wikisource.org':1,
'williamhill.com':1,
'willw.net':1,
'wiredpen.com':1,
'withgoogle.com':1,
'wo.tc':1,
'wordpress.com':1,
'worldcat.org':1,
'worldjournal.com':1,
'wp.com':1,
'wpoforum.com':1,
'wsj.com':1,
'wsj.net':1,
'wuala.com':1,
'wujieliulan.com':1,
'x-art.com':1,
'x-berry.com':1,
'xanga.com':1,
'xbookcn.com':1,
'xfiles.to':1,
'xhamster.com':1,
'xiaochuncnjp.com':1,
'xing.com':1,
'xinsheng.net':1,
'xizang-zhiye.org':1,
'xmovies.com':1,
'xmusic.fm':1,
'xnxx.com':1,
'xrea.com':1,
'xtube.com':1,
'xuite.net':1,
'xvedios.com':1,
'xvideos.com':1,
'xxxx.com.au':1,
'xys.org':1,
'xysblogs.org':1,
'yahoo.com':1,
'yam.com':1,
'ydy.com':1,
'yeeyi.com':1,
'yegle.net':1,
'yfrog.com':1,
'yidio.com':1,
'yimg.com':1,
'yogichen.org':1,
'yorkbbs.ca':1,
'youjizz.com':1,
'youmaker.com':1,
'youpai.org':1,
'youporn.com':1,
'your-freedom.net':1,
'yousendit.com':1,
'youtu.be':1,
'youtube-nocookie.com':1,
'youtube.com':1,
'youtubecn.com':1,
'youversion.com':1,
'ytimg.com':1,
'yyii.org':1,
'yzzk.com':1,
'zaobao.com':1,
'zeutch.com':1,
'zhuichaguoji.org':1,
'ziddu.com':1,
'zinio.com':1,
'zlib.net':1,
'zlix.tech':1,
'zoho.com':1,
'zonaeuropa.com':1,
'zonble.net':1,
'zuobiao.me':1,
'zuola.com':1
     };

    var proxy = 'HTTPS light.zlix.tech:29980; DIRECT';

    function testDomain(target, domains) {
        var idx = target.lastIndexOf('.');
        var hasOwnProperty = Object.hasOwnProperty;
        while (true) {
            if (idx === -1) {
                if (hasOwnProperty.call(domains, target)) {
                    return true;
                } else {
                    return false;
                }
            }
            suffix = target.substring(idx + 1);
            if (hasOwnProperty.call(domains, suffix)) {
                return true;
            }
            idx = target.lastIndexOf('.', idx - 1);
        }
    }

    // fix error message in FoxyProxy when switching tabs. http://verihy.me/posts/foxyproxy-pac/
    if (typeof host === 'undefined'
     || isPlainHostName(host)
     || host === '127.0.0.1'
     || host === 'localhost') {
        return 'DIRECT';
    }

    if (testDomain(host, proxyList)) {
        return proxy;
    }

    return 'DIRECT';

}


/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});
