async function init() {

   var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
        })
    });

  const enabled = await a;
  chrome.storage.sync.get({sponsoredBlocked: enabled, suggestedBlocked: enabled});
  if (!enabled) return;
  const w = window.location;
  if (!(w.protocol=='https:' || w.protocol=='http:')) return;
   chrome.runtime.sendMessage({
        blockedCount: 0
   }), !0
  injectStyles();
  if (w.host=='www.facebook.com') {
    var css = document.createElement("style");
    var head = document.head;
    head.appendChild(css);
    css.type = 'text/css';
    css.innerText = `
    div[role="complementary"]>div>div>div>div>div>span,
    article:has(div[data-sigil="m-feed-voice-subtitle"]>:first-child:not(a)),
    div[data-instancekey]>div>div:nth-child(8),
    div:not([class]):has(div [class=aov4n071]),
    #feedContainer>div:has(div div>span>span[id]:not([class])>div:nth-child(2)[role="button"]),
    #feedContainer>div:has(div div>span>span[id]:not([class])>a:nth-child(2)[href^="/business"]) {
      display: none !important;
      visibility: hidden !important;
    }`
    chrome.runtime.sendMessage({
        blockedCount: 1
    }), !0

  }
  if (w.host=='www.youtube.com' || w.host=='music.youtube.com'){
    n = 0
    var css = document.createElement("style");
    var head = document.head;
    head.appendChild(css);
    css.type = 'text/css';
    css.innerText = `
        /* Hide by Element */
        ytd-promoted-video-renderer,
        ytd-movie-offer-module-renderer,
        ytd-promoted-sparkles-web-renderer,
        ytd-promoted-sparkles-text-search-renderer,
        ytd-player-legacy-desktop-watch-ads-renderer {
          display: none !important;
          visibility: hidden !important;
        }

        /* Hide by ID */
        #player-ads,
        #search-pva,
        #premium-yva,
        #masthead-ad,
        #feedmodule-PRO,
        #video-masthead,
        #watch-buy-urls,
        #sub-frame-error,
        #main-frame-error,
        #watch7-sidebar-ads,
        #feed-pyv-container,
        #shelf-pyv-container,
        #watch-branded-actions,
        #watch-channel-brand-div,
        #homepage-chrome-side-promo,
        #watch-channel-brand-div-text {
          display: none !important;
          visibility: hidden !important;
        }

        /* Hide by Class */

        .iv-promo,
        .video-ads,
        .promoted-videos,
        .ytp-ad-progress,
        .ytd-display-ad-renderer,
        .ytp-ad-progress-list,
        .searchView.list-view,
        .html5-ad-progress-list,
        .watch-extra-info-right,
        .watch-extra-info-column,
        .lohp-pyv-shelf-container,
        .ytd-merch-shelf-renderer,
        .carousel-offer-url-container,
        .youtubeSuperLeaderBoardAdHolder,
        .youtubeSuperLeaderOverallAdArea,
        .ytd-movie-offer-module-renderer,
        .ytd-action-companion-ad-renderer {
          display: none !important;
          visibility: hidden !important;
        }

        /* Hide by Rule */

        iframe[id^=ad_],
        div[class*="-ad-v"],
        div[class*="-ads-"],
        a[href*="/adwords/"],
        a[href*="doubleclick.net"],
        iframe[src*="doubleclick.net"],
        a[href^="http://www.youtube.com/cthru?"],
        a[href^="https://www.youtube.com/cthru?"],
        a[onclick*="\"ping_url\":\"http://www.google.com/aclk?"] {
          display: none !important;
          visibility: hidden !important;
        }

        .badge-style-type-ad,
        .GoogleActiveViewElement,
        .sparkles-light-cta,
        .ytd-compact-promoted-video-renderer,
        .ytd-companion-slot-renderer,
        .ytd-player-legacy-desktop-watch-ads-renderer,
        .ytd-promoted-sparkles-text-search-renderer,
        .ytd-video-masthead-ad-v3-renderer,
        .ytp-ad-progress-list,
        [layout*="display-ad-"],
        #masthead-ad,
        #merch-shelf,
        #player-ads,
        #show-ad,
        #YtKevlarVisibilityIdentifier,
        a[href^="https://www.googleadservices.com/pagead/aclk?"],
        ytd-compact-promoted-video-renderer,
        ytd-companion-slot-renderer,
        ytd-display-ad-renderer,
        ytd-promoted-sparkles-text-search-renderer,
        ytd-promoted-sparkles-web-renderer,
        ytd-video-masthead-ad-advertiser-info-renderer,
        ytd-video-masthead-ad-v3-renderer,
        ytm-promoted-sparkles-web-renderer {
          display: none !important;
        }
        `;
    chrome.runtime.sendMessage({
       blockedCount: ++n
    }), !0
    // We need an iife here because this script
    // is beeing run in the main context of the page.
    setInterval(()=>{
        const btn=document.querySelector(".ytp-ad-skip-button");
        const btn2=document.querySelector("#confirm-button");
        if(btn2) {btn2.click();}
        if( ! document.querySelector('.ad-showing') ) return
              const video=document.querySelector('video')
              if( ! video)  return
              if( btn) {
                btn.click();
                chrome.runtime.sendMessage({
                   blockedCount: ++n
                }), !0
              } else {
                video.currentTime = isNaN(video.duration) ? 0 : video.duration
              }

    },300);
  }

}

function injectStyles() {
  return chrome.runtime.sendMessage({
    action: "INSERT_FILTER"
  });
}

init();

