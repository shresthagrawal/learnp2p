/*!
 * docsify-tabs
 * v1.2.0
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
!function(){"use strict";!function(t,a){void 0===a&&(a={});var o=a.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===o&&s.firstChild?s.insertBefore(e,s.firstChild):s.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}(':root{--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#999;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:0.5rem 1.75rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";-ms-flex-order:0;order:0;-ms-flex:1;flex:1 1}.docsify-tabs__tab{-ms-flex-order:-1;order:-1;position:relative;margin:0;font-size:inherit;appearance:none}.docsify-tabs__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-tabs__tab--active+.docsify-tabs__content{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{padding:.6em 1em;padding:var(--docsifytabs-tab-padding);background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{padding:.5rem 1.75rem;padding:var(--docsifytabs-content-padding);background:inherit;background:var(--docsifytabs-content-background)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-width:1px;border-color:#ededed;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{margin-right:1px;margin-right:var(--docsifytabs-border-px);border-top-width:0;border-left-width:0;border-right-width:0}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 var(--theme-color,currentColor);box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px));border-top:0;border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px)}.docsify-tabs--material .docsify-tabs__tab{margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px));background:transparent;border:0}.docsify-tabs--material .docsify-tabs__tab--active{box-shadow:0 3px 0 0 var(--theme-color,currentColor);box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color);background:transparent}.docsify-tabs--material .docsify-tabs__content{border-width:1px 0;border-color:#ededed;border-left:0 solid var(--docsifytabs-border-color);border-bottom:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);border-right:0 solid var(--docsifytabs-border-color);border-top:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}',{insertAt:"top"});var m="tabs:replace",g={tabsContainer:"content",tabBlock:"docsify-tabs",tabButton:"docsify-tabs__tab",tabButtonActive:"docsify-tabs__tab--active",tabContent:"docsify-tabs__content"},v={codeMarkup:/(```[\s\S]*?```)/gm,commentReplaceMarkup:new RegExp("\x3c!-- ".concat(m," (.*) --\x3e")),tabBlockMarkup:/[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,tabCommentMarkup:/[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:)/m,tabHeadingMarkup:/[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m},h={persist:!0,sync:!0,theme:"classic",tabComments:!0,tabHeadings:!0};window&&(window.$docsify=window.$docsify||{},window.$docsify.tabs=window.$docsify.tabs||{},Object.keys(window.$docsify.tabs).forEach(function(t){Object.prototype.hasOwnProperty.call(h,t)&&(h[t]=window.$docsify.tabs[t])}),window.$docsify.tabs.version="1.2.0",(h.tabComments||h.tabHeadings)&&(window.$docsify.plugins=[].concat(function(t,a){var o=!1;t.beforeEach(function(t){return(o=v.tabBlockMarkup.test(t))&&(t=function(s){for(var t,a,o=s.match(v.codeMarkup)||[],e=o.map(function(t,a){var o="\x3c!-- ".concat(m," CODEBLOCK").concat(a," --\x3e");return s=s.replace(t,o),o}),c=h.theme?"".concat(g.tabBlock,"--").concat(h.theme):"";null!==(t=v.tabBlockMarkup.exec(s));){var r=t[0],i="",n="",d=h.tabComments&&v.tabCommentMarkup.test(r),b=h.tabHeadings&&v.tabHeadingMarkup.test(r),f=t[1],l=t[2],y=t[4];if(d||b)for(i="\x3c!-- ".concat(m,' <div class="').concat([g.tabBlock,c].join(" "),'"> --\x3e'),n="\n".concat(f,"\x3c!-- ").concat(m," </div> --\x3e");null!==(a=(h.tabComments?v.tabCommentMarkup.exec(r):null)||(h.tabHeadings?v.tabHeadingMarkup.exec(r):null));){var p=(a[2]||"[Tab]").trim(),u=(a[3]||"").trim();r=r.replace(a[0],["\n".concat(f,"\x3c!-- ").concat(m,' <button class="').concat(g.tabButton,'" data-tab="').concat(p.toLowerCase(),'">').concat(p,"</button> --\x3e"),"\n".concat(f,"\x3c!-- ").concat(m,' <div class="').concat(g.tabContent,'" data-tab-content="').concat(p.toLowerCase(),'"> --\x3e'),"\n\n".concat(f).concat(u),"\n\n".concat(f,"\x3c!-- ").concat(m," </div> --\x3e")].join(""))}r=(r=r.replace(l,i)).replace(y,n),s=s.replace(t[0],r)}return e.forEach(function(t,a){s=s.replace(t,o[a])}),s}(t)),t}),t.afterEach(function(t,a){o&&(t=function(t){for(var a;null!==(a=v.commentReplaceMarkup.exec(t));){var o=a[0],s=a[1]||"";t=t.replace(o,s)}return t}(t)),a(t)}),t.doneEach(function(){var t,a,s,e;o&&(t=document.querySelector(".".concat(g.tabsContainer)),a=t?Array.apply(null,t.querySelectorAll(".".concat(g.tabBlock))):[],s=JSON.parse(sessionStorage.getItem(window.location.href))||{},e=JSON.parse(sessionStorage.getItem("*"))||[],a.forEach(function(a,t){var o;h.sync&&e.length&&(o=e.map(function(t){return a.querySelector(".".concat(g.tabButton,'[data-tab="').concat(t,'"]'))}).filter(function(t){return t})[0]),!o&&h.persist&&(o=a.querySelector(".".concat(g.tabButton,'[data-tab="').concat(s[t],'"]'))),(o=o||a.querySelector(".".concat(g.tabButton)))&&o.classList.add(g.tabButtonActive)}))}),t.mounted(function(){var t=document.querySelector(".".concat(g.tabsContainer));t&&t.addEventListener("click",function(t){!function a(t,o){var s=1<arguments.length&&void 0!==o&&o;if(t.classList.contains(g.tabButton)){var e=t,c=e.getAttribute("data-tab"),r=document.querySelector(".".concat(g.tabsContainer)),i=e.parentNode,n=Array.apply(null,i.querySelectorAll(".".concat(g.tabButton))),d=i.offsetTop;if(n.forEach(function(t){return t.classList.remove(g.tabButtonActive)}),e.classList.add(g.tabButtonActive),!s){if(h.persist){var b=(r?Array.apply(null,r.querySelectorAll(".".concat(g.tabBlock))):[]).indexOf(i),f=JSON.parse(sessionStorage.getItem(window.location.href))||{};f[b]=c,sessionStorage.setItem(window.location.href,JSON.stringify(f))}if(h.sync){var l=r?Array.apply(null,r.querySelectorAll(".".concat(g.tabButton,'[data-tab="').concat(c,'"]'))):[],y=JSON.parse(sessionStorage.getItem("*"))||[];l.forEach(function(t){a(t,!0)}),window.scrollBy(0,0-(d-i.offsetTop)),0<y.indexOf(c)&&y.splice(y.indexOf(c),1),0!==y.indexOf(c)&&(y.unshift(c),sessionStorage.setItem("*",JSON.stringify(y)))}}}}(t.target)})})},window.$docsify.plugins||[])))}();
//# sourceMappingURL=docsify-tabs.min.js.map