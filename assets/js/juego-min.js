const miModulo=(()=>{"use strict";let e=[],t=[];const n=["C","D","H","S"],o=["A","J","Q","K"],r=document.querySelector("#btnPedir"),a=document.querySelector("#btnDetener"),l=document.querySelector("#btnNuevoJuego"),s=document.querySelectorAll(".divCartas"),d=document.querySelectorAll("small"),c=(n=2)=>{e=i(),t=[];for(let e=0;e<n;e++)t.push(0);d.forEach(e=>e.innerText=0),console.clear(),s.forEach(e=>e.innerHTML=""),r.disabled=!1,a.disabled=!1},i=()=>{e=[];for(let t=2;t<=10;t++)for(let o of n)e.push(t+o);for(let t of n)for(let n of o)e.push(n+t);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},h=(e,n)=>(t[n]=t[n]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),d[n].innerText=t[n],t[n]),m=(e,t)=>{const n=document.createElement("img");n.src=`assets/cartas/${e}.png`,n.classList.add("carta"),s[t].append(n)},f=e=>{let n=0;do{const e=u();n=h(e,t.length-1),m(e,t.length-1)}while(n<e&&e<=21);(()=>{const[e,n]=t;setTimeout(()=>{n===e?alert("Nadie gana :("):e>21?alert("Computadora gana"):n>21?alert("Jugador Gana"):alert("Computadora Gana")},100)})()};return r.addEventListener("click",()=>{const e=u(),t=h(e,0);m(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),r.disabled=!0,a.disabled=!0,f(t)):21===t&&(console.warn("21, genial!"),r.disabled=!0,a.disabled=!0,f(t))}),a.addEventListener("click",()=>{const e=u(),t=h(e,0);r.disabled=!0,a.disabled=!0,f(t)}),l.addEventListener("click",()=>{c()}),{nuevoJuego:c}})();