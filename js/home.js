(function(){
var button=document.querySelector(".wa"),footer=document.querySelector("footer");
if(!button||!footer||!("IntersectionObserver" in window))return;
var observer=new IntersectionObserver(function(entries){
button.classList.toggle("at-bottom",entries[0].isIntersecting);
});
observer.observe(footer);
})();

(function(){
var button=document.querySelector(".menu-toggle"),menu=document.getElementById("site-menu"),header=document.querySelector("header");
if(!button||!menu||!header)return;
function closeMenu(){button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Buka menu");menu.classList.remove("open")}
button.addEventListener("click",function(){
var open=button.getAttribute("aria-expanded")!=="true";
button.setAttribute("aria-expanded",open?"true":"false");
button.setAttribute("aria-label",open?"Tutup menu":"Buka menu");
menu.classList.toggle("open",open);
});
menu.querySelectorAll("a").forEach(function(link){link.addEventListener("click",closeMenu)});
document.addEventListener("click",function(event){if(!header.contains(event.target))closeMenu()});
document.addEventListener("keydown",function(event){if(event.key==="Escape")closeMenu()});
})();

(function(){
var g=document.getElementById("gallery"),cards=[].slice.call(g.querySelectorAll(".fl")),dots=document.getElementById("dots");
if(!cards.length)return;
function step(){return cards[0].offsetWidth+20}
cards.forEach(function(c,i){var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Flyer "+(i+1));b.onclick=function(){g.scrollTo({left:c.offsetLeft-g.offsetLeft-4,behavior:"smooth"})};dots.appendChild(b)});
function mark(){var i=Math.round(g.scrollLeft/step());if(g.scrollLeft+g.clientWidth>=g.scrollWidth-4)i=cards.length-1;[].forEach.call(dots.children,function(d,k){d.classList.toggle("on",k===i)})}
g.addEventListener("scroll",mark,{passive:true});mark();
var pv=document.querySelector(".nav.prev"),nx=document.querySelector(".nav.next");
if(pv)pv.onclick=function(){g.scrollBy({left:-step(),behavior:"smooth"})};
if(nx)nx.onclick=function(){g.scrollBy({left:step(),behavior:"smooth"})};
cards.forEach(function(c){c.querySelector(".img").onclick=function(){var im=c.querySelector("img"),o=document.createElement("div");o.className="lb";var i=new Image();i.src=im.src;i.alt=im.alt;var x=document.createElement("div");x.className="x";x.textContent="×";o.append(i,x);o.onclick=function(){o.remove()};document.body.append(o)}});
})();
