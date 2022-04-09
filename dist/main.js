(()=>{"use strict";const e=async e=>{fetch("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&units=imperial&appid=a7b91dd96a75372ea8906b2a8dee414d").then((e=>{if(!e.ok)throw alert("No weather found."),new Error("No weather found.");return e.json()})).then((e=>a(e)))},t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=(new Date).getDay(),a=e=>{const a=document.createElement("div");a.className="nextWeather";const c=document.createElement("div"),i=document.createElement("div");i.className="nextWeatherName",i.innerText=t[n];const m=document.createElement("div");m.className="nextWeatherTitle",m.innerText=e.list[0].weather[0].main;const r=document.createElement("div");r.className="nextWeatherDegree",r.innerText=e.list[0].main.temp.toFixed(0)+"°";const d=document.createElement("div");d.className="nextWeatherHumidity",d.innerText=e.list[0].main.humidity.toFixed(0)+"%";const o=document.createElement("div"),s=document.createElement("div");s.className="nextWeatherName",s.innerText=t[n+1];const l=document.createElement("div");l.className="nextWeatherTitle",l.innerText=e.list[5].weather[0].main;const u=document.createElement("div");u.className="nextWeatherDegree",u.innerText=e.list[5].main.temp.toFixed(0)+"°";const p=document.createElement("div");p.className="nextWeatherHumidity",p.innerText=e.list[5].main.humidity.toFixed(0)+"%";const h=document.createElement("div"),x=document.createElement("div");x.className="nextWeatherName",x.innerText=t[n+2];const E=document.createElement("div");E.className="nextWeatherTitle",E.innerText=e.list[13].weather[0].main;const v=document.createElement("div");v.className="nextWeatherDegree",v.innerText=e.list[13].main.temp.toFixed(0)+"°";const N=document.createElement("div");N.className="nextWeatherHumidity",N.innerText=e.list[13].main.humidity.toFixed(0)+"%";const T=document.createElement("div"),y=document.createElement("div");y.className="nextWeatherName",y.innerText=t[n+3];const g=document.createElement("div");g.className="nextWeatherTitle",g.innerText=e.list[21].weather[0].main;const w=document.createElement("div");w.className="nextWeatherDegree",w.innerText=e.list[21].main.temp.toFixed(0)+"°";const C=document.createElement("div");C.className="nextWeatherHumidity",C.innerText=e.list[21].main.humidity.toFixed(0)+"%";const W=document.createElement("div"),F=document.createElement("div");F.className="nextWeatherName",F.innerText=t[n+4];const f=document.createElement("div");f.className="nextWeatherTitle",f.innerText=e.list[29].weather[0].main;const L=document.createElement("div");L.className="nextWeatherDegree",L.innerText=e.list[29].main.temp.toFixed(0)+"°";const S=document.createElement("div");return S.className="nextWeatherHumidity",S.innerText=e.list[29].main.humidity.toFixed(0)+"%",c.append(i,m,r,d),o.append(s,l,u,p),h.append(x,E,v,N),T.append(y,g,w,C),W.append(F,f,L,S),a.append(c,o,h,T,W),document.querySelector("main").appendChild(a),a},c=async e=>{fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=a7b91dd96a75372ea8906b2a8dee414d").then((e=>{if(!e.ok)throw alert("No weather found."),new Error("No weather found.");return e.json()})).then((e=>i(e)))},i=e=>{const{name:t}=e,{description:n}=e.weather[0],{temp:a}=e.main,{temp_min:c}=e.main,{temp_max:i}=e.main,{humidity:r}=e.main,{feels_like:d}=e.main,{speed:o}=e.wind;m(t,n,a,c,i,r,d,o)},m=(e,t,n,a,c,i,m,r)=>{const d=document.createElement("div");d.className="weather";const o=document.createElement("div");o.className="cityTitle",o.innerText=e;const s=document.createElement("div");s.className="weatherDescription",s.innerText=t.toUpperCase();const l=document.createElement("div");l.className="weatherDegrees";const u=document.createElement("div");u.className="minmax",u.innerText=a.toFixed(0)+"°";const p=document.createElement("div");p.className="average",p.innerText=((a+n)/2).toFixed(0)+"°";const h=document.createElement("div");h.className="degreeThree",h.innerText=n.toFixed(0)+"°";const x=document.createElement("div");x.className="average",x.innerText=((c+n)/2).toFixed(0)+"°";const E=document.createElement("div");E.className="minmax",E.innerText=c.toFixed(0)+"°";const v=document.createElement("div");v.className="weatherStatus";const N=document.createElement("div");N.className="humidity";const T=document.createElement("h1");T.textContent="Humidity";const y=document.createElement("p");y.innerText=i.toFixed(0)+"%";const g=document.createElement("div");g.className="windspeed";const w=document.createElement("h1");w.textContent="Windspeed";const C=document.createElement("p");C.innerText=r.toFixed(0)+" mph";const W=document.createElement("div");W.className="feelsLike";const F=document.createElement("h1");F.textContent="Feels Like";const f=document.createElement("p");return f.innerText=m+"°",d.append(o,s,l,v),l.append(u,p,h,x,E),v.append(N,g,W),N.append(T,y),g.append(w,C),W.append(F,f),document.querySelector("main").appendChild(d),d},r=()=>{document.querySelector("main").appendChild((()=>{const t=document.createElement("div");t.className="searchButton-container";let n=!0;const a=document.createElement("div");a.className="searchButton",a.innerHTML='<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />\n        </svg>',a.addEventListener("click",(t=>{if(!0===n)i.style.display="flex",n=!1;else if(!1===n){i.style.display="none";const t=document.querySelector("main");t.textContent="",t.append(o()),r(),c(i.value),n=!0,e(i.value),i.placeholder="San Francisco..."}}));const i=document.createElement("input");return i.className="searchInput",i.type="text",i.placeholder="San Francisco...",i.style.display="none",i.addEventListener("click",(e=>{i.placeholder=""})),t.append(a,i),t})())},d=r,o=()=>{const e=document.createElement("div");e.className="home";const t=document.createElement("div");return t.className="greeter",t.innerHTML="Hello <b>"+localStorage.getItem("userName")+"</b>!",e.appendChild(t),e},s=()=>{const t=document.querySelector("main");t.textContent="",t.appendChild(o()),d(),c("New York"),setTimeout((function(){e("New York")}),.001)};!function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="container",e.appendChild(t),t.appendChild(document.createElement("main")),t.appendChild((()=>{const e=document.createElement("footer");return e.textContent="Copyright ~ Vannent",e})()),null===localStorage.getItem("userName")?(()=>{const e=document.querySelector("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.className="getUserContainer";const t=document.createElement("h1");t.className="getUserTitle",t.textContent="What is your name?";const n=document.createElement("input");n.className="getUserInput",n.type="text",n.placeholder="Chris...",n.addEventListener("click",(e=>{n.placeholder=""}));const a=document.createElement("button");return a.className="getUserSubmit",a.innerHTML='<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />\n        </svg>',a.addEventListener("click",(e=>{if(""!==n.value){const e=n.value;localStorage.setItem("userName",e),s()}})),e.append(t,n,a),e})())})():s()}()})();