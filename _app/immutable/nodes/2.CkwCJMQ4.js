import{i as v,s as _,o as x,d as b}from"../chunks/scheduler.BlNm6xnm.js";import{S as g,i as w,n as r,a as d,t as l,b as o,o as h,d as m,e as y,c as P,g as k,p as c,q as $}from"../chunks/index.CejY-Hd8.js";import"../chunks/paths.DTEoT2jA.js";function u(a,{delay:t=0,duration:e=400,easing:s=v}={}){const i=+getComputedStyle(a).opacity;return{delay:t,duration:e,easing:s,css:n=>`opacity: ${n*i}`}}function f(a){let t,e='<section class="intro-section svelte-lxrdws"><img src="/images/alex-lupsasca-bw.jpg" alt="Profile Picture" class="svelte-lxrdws"/> <div class="text-block svelte-lxrdws"><h2>Dr. Alex Lupsasca</h2> <h3>Assistant Professor at Vanderbilt University</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, urna non tincidunt maximus, libero nulla consequat nisl, vel varius ligula est in ex. Aenean tristique, leo at dictum convallis, mauris risus dictum purus, eget accumsan libero felis in nunc. Phasellus cursus leo eget justo malesuada, nec imperdiet ex sodales. Vivamus convallis felis in turpis faucibus, nec feugiat sapien convallis.</p></div></section> <section class="award-section svelte-lxrdws"><p class="svelte-lxrdws">New Horizons Prize</p></section> <section class="physics-section svelte-lxrdws"><p class="svelte-lxrdws">New Horizons Prize</p></section>',s,i;return{c(){t=y("main"),t.innerHTML=e},l(n){t=P(n,"MAIN",{"data-svelte-h":!0}),k(t)!=="svelte-o2ysl5"&&(t.innerHTML=e)},m(n,p){d(n,t,p),i=!0},i(n){i||(n&&b(()=>{i&&(s||(s=c(t,u,{duration:2e3},!0)),s.run(1))}),i=!0)},o(n){n&&(s||(s=c(t,u,{duration:2e3},!1)),s.run(0)),i=!1},d(n){n&&m(t),n&&s&&s.end()}}}function q(a){let t,e=a[0]&&f();return{c(){e&&e.c(),t=r()},l(s){e&&e.l(s),t=r()},m(s,i){e&&e.m(s,i),d(s,t,i)},p(s,[i]){s[0]?e?i&1&&l(e,1):(e=f(),e.c(),l(e,1),e.m(t.parentNode,t)):e&&($(),o(e,1,1,()=>{e=null}),h())},i(s){l(e)},o(s){o(e)},d(s){s&&m(t),e&&e.d(s)}}}function z(a,t,e){let s=!1;return x(()=>{e(0,s=!0)}),[s]}class M extends g{constructor(t){super(),w(this,t,z,q,_,{})}}export{M as component};
