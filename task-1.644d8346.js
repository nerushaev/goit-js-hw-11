!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),s=a("dDDEV"),i=a("2TvXO"),c=a("iU1Pc"),d=a("dIxxU"),u=a("1WSnx");a("5IjG7");var l=a("4Nugj"),f=a("hCAzH"),p=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250}),g={page:1,per_page:40,q:""};function h(e){l.refs.gallery.insertAdjacentHTML("beforeend",(0,f.markUpGallery)(e))}function y(){return v.apply(this,arguments)}function v(){return(v=e(o)(e(i).mark((function t(){var n,r,a,o;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams(e(s)({},g,{image_type:"photo",orientation:"horizontal",pretty:!0,key:l.api.KEY})),t.prev=1,t.next=4,e(d).get("".concat(l.api.BASE_URL,"?").concat(n));case 4:if(r=t.sent,a=r.data.hits.length,o=r.data.totalHits,0!==a){t.next=10;break}return e(c).Notify.failure("Sorry, there are no images matching your search query. Please try again."),t.abrupt("return");case 10:1===g.page&&e(c).Notify.success("Hooray! We found ".concat(o," images.")),h(r.data.hits),p.refresh(),l.refs.buttonLoadMore.classList.remove("is-hidden"),l.refs.outputPagesLoad.textContent="".concat((g.page-1)*g.per_page+a," of ").concat(o),g.page*g.per_page>=o&&(l.refs.buttonLoadMore.classList.add("is-hidden"),e(c).Notify.warning("We're sorry, but you've reached the end of search results.")),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),console.log(t.t0.response.status);case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))).apply(this,arguments)}l.refs.form.addEventListener("submit",(function(e){e.preventDefault(),g.page=1,g.q=e.currentTarget.elements.searchQuery.value,l.refs.gallery.innerHTML="",l.refs.outputPagesLoad.textContent="",l.refs.buttonLoadMore.classList.add("is-hidden"),y()})),l.refs.buttonLoadMore.addEventListener("click",(function(){g.page++,y()})),window.addEventListener("scroll",(0,u.throttle)((function(){var e=l.refs.buttonPageTop.classList.contains("is-hidden"),t=window.scrollY>=3*window.innerHeight;t&e&&l.refs.buttonPageTop.classList.remove("is-hidden");!t&!e&&l.refs.buttonPageTop.classList.add("is-hidden")}),500)),l.refs.buttonPageTop.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=task-1.644d8346.js.map
