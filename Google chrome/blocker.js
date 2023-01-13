let blockSponsoredEnabled, blockSuggestedEnabled;
const none = "none",
  config = {
    childList: !0,
    subtree: !0
  };
chrome.storage.sync.get({
  sponsoredBlocked: !0,
  suggestedBlocked: !0
}, e => {
  blockSponsoredEnabled = e.sponsoredBlocked, blockSuggestedEnabled = e.suggestedBlocked
});
const d = (() => {
    let e = "",
      n = 0,
      o = "div[role=main] h3+div:not([class])",
      t = "feedContainer",
      a = ":scope>div",
      i = ":scope div div>span>span[id]:not([class]) >span:nth-child(2)>span>a>span",
      s = "href",
      l = 'div[role="feed"]> * div div>span>span:not([id])>span>span>a>span>span>span',
      r = "/ads/",
      c = ["Sponsored", "Publicidad", "Gesponsert", "Bersponsor", "Giisponsoran", "Sponzorirano", "Sponsoreret", "Sponsitud", "Commandit\xe9", "Sponsoris\xe9", "Sponsore", "Sponsorizzato", "Sponsorkir\xee", "Hirdet\xe9s", "Gesponsord", "Sponset", "Sponsa", "Sponsorowane", "Patrocinado", "Sponsorizuar", "Sponzorrirano", "Sponsrad", "Sponsorıd\xfb", "Sponzorov\xe1no", "La maalgeliyey", "مُموَّل", "Geborg", "Sponsor dəstəkli", "Disponsori", "Paeroniet", "Patrocinat", "Spunsurizatu", "Noddwyd", "pəɹosuodS", "Reklamo", "Babestua", "May Sponsor", "Misy Mpiantoka", "Yoɓanaama", "Stu\xf0la\xf0", "Urraithe", "O\xf1epatrosinapyre", "Daukar Nauyi", "Plaćeni oglas", "Icyamamaza ndasukirwaho", "Imedhaminiwa", "Peye", "Apmaksāta reklāma", "Remiama", "Sponsorjat", "Reklama", "Sponsorizat", "Patronadu de:", "Zvabhadharirwa", "Sponzorovan\xe9", "Sponsoroitu", "Được t\xe0i trợ", "Kosta\xf0", "Szpōnzorowane", "Χορηγούμενη", "Рэклама", "Спонсорирано", "Ивээн тэтгэсэн", "Спонзорисано", "Хәйрияче", "Бо сарпарастӣ", "Демөөрчүлөнгөн", "Демеушілік көрсеткен", "Գովազդային", "سپانسرڈ", "دارای پشتیبانی مالی", "تمويل شوي", "پاڵپشتیکراو", "ܒܘܕܩܐ ܡܡܘܘܢܐ", "পৃষ্ঠপোষকতা কৰা ", "ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ", "પ્રાયોજિત", "ପ୍ରଯୋଜିତ", "விளம்பரம்", "ప్రాయోజితం చేయబడింది", "ಪ್ರಾಯೋಜಿತ", "സ്പോൺസർ ചെയ്തത്", "අනුග්‍රාහක", "ຜູ້ສະໜັບສະໜູນ", "အခပေးကြော်ငြာ", "რეკლამა", "የተከፈለበት ማስታወቂያ", "បានឧបត្ថម្ភ", "ⵉⴷⵍ", "贊助", "赞助内容", "広告", "ממומן", "Реклама"];

    function p(e) {
      if (e instanceof HTMLElement) return e.style.display = none, chrome.runtime.sendMessage({
        blockedCount: ++n
      }), !0
    }

    function u(n, o) {
      if (null === (n = o.querySelector(n))) return;
      let t = n.querySelector("use");
      if (t && c.includes(document.querySelector(t.getAttribute("xlink:href")).innerHTML)) return p(o);
      let a = n.innerHTML;
      if (e.length && e === a || 0 === e.length && c.includes(a) || n.parentNode.getAttribute(s).startsWith(r)) return e = a, p(o)
    }

    function S(n) {
      let o = n.querySelector(l);
      if (null === o) return;
      let t = [];
      o.childNodes.forEach(e => {
        let n = getComputedStyle(e);
        0 === parseInt(n.top) && (t[n.order] = e.innerHTML)
      });
      let a = t.join("");
      if (e.length && e === a || 0 === e.length && c.includes(a) || o.parentNode.parentNode.parentNode.getAttribute(s).startsWith(r)) return e = a, p(n)
    }

    function h(e) {
      let o = e.querySelector(':scope div[class=""]>div[data-19]+div:not([data-19])>div>div>div>span');
      if (o instanceof HTMLSpanElement && 1 === o.childNodes.length) return e.style.display = none, chrome.runtime.sendMessage({
        blockedCount: ++n
      }), !0
    }
    let f = new MutationObserver(e => {
      let a = document.getElementById(t) || document.querySelector(o),
        s = document.querySelector('div[role="feed"]');
      if (null !== a || null !== s)
        for (let l of (a instanceof HTMLDivElement && (a.id = t), e)) {
          if (0 === l.addedNodes.length) continue;
          let r = l.addedNodes[0];
          if (!l.target.isSameNode(a) && !l.target.isSameNode(s)) continue;
          let c = blockSponsoredEnabled && (u(i, r) || S(r));
          !c && blockSuggestedEnabled && (c = h(r)), c || getComputedStyle(r).display !== none || chrome.runtime.sendMessage({
            blockedCount: ++n
          })
        }
    });
    return () => {
      let e = document.querySelector(o);
      if (e instanceof HTMLDivElement) {
        if (e.id = t, blockSponsoredEnabled) e.querySelectorAll(a).forEach(e => {
          u(i, e)
        }), p(document.querySelector(l)?.closest('div[role="article"]'));
        else {
          let n = document.createElement("style");
          n.innerText = 'div[data-instancekey]>div>div:nth-child(8),div[role="complementary"]>div>div>div>div>div>span,div[data-instancekey]>div>div:nth-child(8),div:not([class]):has(div [class=aov4n071]),#feedContainer>div:has(div div>span>span[id]:not([class])>div:nth-child(2)[role="button"]),#feedContainer>div:has(div div>span>span[id]:not([class])>a:nth-child(2)[href^="/business"]){display:block;}', document.head.appendChild(n)
        }
        blockSuggestedEnabled && e.querySelectorAll(a).forEach(e => {
          h(e)
        })
      }
      f.observe(document.body, config)
    }
  })(),
  m = () => {
    if (blockSponsoredEnabled) setInterval(() => {
      currentBlockedCount = Array.from(document.querySelectorAll("#MNewsFeed article")).filter(e => getComputedStyle(e).display === none).length, chrome.runtime.sendMessage({
        blockedCount: currentBlockedCount
      })
    }, 1e3);
    else {
      let e = document.createElement("style");
      e.innerText = 'article:has(div[data-sigil="m-feed-voice-subtitle"]>:first-child:not(a)){display:block;}', document.head.appendChild(e)
    }
    if (blockSuggestedEnabled) {
      let n = new MutationObserver(e => {
        for (let n of e) {
          if (0 === n.addedNodes.length) continue;
          let o = n.addedNodes[0];
          if ("SECTION" !== o.tagName) continue;
          let t = o.querySelectorAll(":scope>article>header");
          t.forEach(e => {
            1 === e.childNodes.length && (e.closest("article").style.display = none)
          })
        }
      });
      n.observe(document.body, config)
    }
  };