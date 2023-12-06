function childExt(){let e,t,n;function i(){let e=confirm("Do You Want To Close The Extension");if(e){ext.remove();let t=document.querySelectorAll(".pr-failed-cc-container");t.forEach(e=>e.remove());let n=document.querySelectorAll(".pr-failed-heading-container");n.forEach(e=>e.remove())}}(function e(){let t=document.createElement("style");t.type="text/css";let n=`
    #pr-ext .client-side-extension-body {
      width: auto;
      position: fixed;
      top: 10%;
      transform: translate(-50%);
      left: 50%;
      min-width: 70vw;
      max-width: 70vw;
      background-color: #fff;
      padding: 1rem;
      overflow: hidden;
      border-width: 3px;
      border-style: solid;
      border-color: #6400FF;
      border-image: initial;
      border-radius: 15px;
      box-sizing: border-box;
      color: #333 !important;
      min-height: 70vh;
  }
  
  #pr-ext #ext_body {
      min-height: 70vh !important;
      max-height: fit-content;
      padding-bottom: 4vh;
  }
  
  /* hide the popup */
  #pr-ext .client-side-extension-body {
      display: none;
  }
  
  #pr-ext .client-side-extension-body.ext-popup {
      display: block;
      z-index: 99999;
  }
  
  /* Overlay */
  #pr-ext .ext-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(1px);
      z-index: 9999;
      display: none;
  }
  
  #pr-ext .ext-overlay.show {
      display: block;
  }
  
  /* popup close btn */
  #pr-ext .ext-close {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 20px;
      font-family: sans-serif;
      border: none;
      font-weight: 700;
  }
  #pr-ext .ext-move {
      position: absolute;
      top: -5px;
      background-color:transparent;
      right: 50%;
      font-size: 20px;
      font-family: sans-serif;
      border: none;
      font-weight: 700;
      transform:translateX(50%);
  }
  
  /* Popup Open Btn */
  #pr-ext .ext-open {
      position: fixed;
      bottom: 10px;
      left: 20px;
      font-size: 20px;
      font-family: sans-serif;
      border: none;
      font-weight: 700;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: #6400FF;
      color: #fff;
      border: 1px solid #fff;
      display: none;
      z-index: 999999;
  }
  
  /* show and hide popup upen btn */
  #pr-ext .ext-open.show {
      display: block;
  }
  
  #pr-ext .m-main-content {
      overflow-y: scroll;
      overflow-x: auto;
      word-break: break-word;
      min-height: 70vh;
      max-height: 70vh;
      padding-top: 00px;
  }
  
  #pr-ext .m-nav ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      padding: 0;
  
  }
  
  #pr-ext .m-btn {
      padding: 10px 15px;
      background-color: #6400FF;
      color: #fff;
      border: 1px solid #6400FF;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 5px;
  }
  
  #pr-ext .m-btn:hover {
      background-color: #f0f0f0;
      color: #333;
  }
  
  #pr-ext .pulse-container {
      width: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      margin-top: 5rem;
  }
  
  /* loader */
  #pr-ext .loader {
  
      margin-top: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
  
  }
  
  #pr-ext .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
  }
  
  #pr-ext .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #6400FF transparent transparent transparent;
  }
  
  #pr-ext .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
  }
  
  #pr-ext .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
  }
  
  #pr-ext .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
  }
  
  @keyframes lds-ring {
      0% {
          transform: rotate(0deg);
      }
  
      100% {
          transform: rotate(360deg);
      }
  }
  
  #pr-ext .failed-contrast-container li:empty {
      display: none;
  }
  
  #pr-ext .contrastTitle,
  #pr-ext .headingTitle,
  #pr-ext .failed-container {
      display: flex;
      align-items: flex-start;
      list-style: none;
      gap: 10px;
  }
  
  #pr-ext .failed-contrast-container li {
      width: 25%;
      padding: 5px 0;
  }
  
  #pr-ext .contrastTitle li {
      font-weight: bold;
      width: 25%;
  }
  
  #pr-ext .headingTitle li,
  #pr-ext .failed-heading-container li,
  #pr-ext .page-titles li {
      width: 50%;
      padding: 5px 0;
  }
  
  #pr-ext .headingTitle li,
  #pr-ext .m-title {
      font-weight: bold;
      list-style: none;
  }
  
  #pr-ext .contrastContainer,
  #pr-ext .headinContainer {
      padding-bottom: 2rem;
  }
  
  #pr-ext #contrastResult,
  #pr-ext #headingResult {
      padding-top: 1rem;
  }
  
  #pr-ext .pageUrl span {
      padding-bottom: 5px;
      display: block;
  }
  
  #pr-ext .noIssueContainer {
      display: block;
      margin: auto;
      text-align: center;
      font-size: 20px;
      padding: 1.5rem 0;
  }
  
  #pr-ext .m-result-row {
      display: none;
      padding: 0 5px;
  }
  
  #pr-ext .m-result-row.active {
      display: block;
  }
  
  #pr-ext .m-btn.active {
      background-color: transparent;
      color: #000;
  }
  
  #pr-ext .page-titles li {
      font-size: 14px;
      list-style: none;
      display: block;
      padding: 5px 0;
  }
  
  #pr-ext .img-container {
      display: flex;
      row-gap: 10px;
      column-gap: 10px;
      justify-content: space-between;
      border: 1px solid;
      padding: 20px;
  }
  
  #pr-ext .imgTitle {
      display: flex;
  }
  
  #pr-ext .imgContainer li {
      width: 40%;
      text-align: center;
  }
  
  #pr-ext .alt-text {
      font-size: 20px;
  }
  
  /* failed texts */
  #pr-ext .failed-url a,
  #pr-ext .failed-contrast-container li {
      color: #d80000 !important;
      font-weight: 600;
  }
  
  #pr-ext .m-main-content {
      padding: 0 3px 3px 3px;
      border: 1px solid #333;
  }
  
  #pr-ext .m-main-content input[type='checkbox'] {
      margin: 0px 10px !important;
  }
  
  #pr-ext .failed-title-container input[type='checkbox'] {
      position: relative;
      top: 11px;
      outline-offset: 0 !important;
  }
  
  #pr-ext .failed-contrast-container-url {
      flex-direction: column;
  }
  
  #pr-ext .m-main-content a {
      color: #333;
      text-decoration: underline;
  }
  
  #pr-ext .m-main-content a:hover {
      color: #333;
      text-decoration: none;
  }
  
  #pr-ext .page-cc {
      border: 1px solid #333;
      padding: 10px;
      margin: 10px;
  }
  
  
  /* Child Extension */
  #pr-ext .client-extension-container .child-ext-popup .m-result-row{
      display: block !important;
      margin: 20px 0 !important;
  }
  #pr-ext .client-extension-container .child-ext-popup .failed-heading-container li{width: fit-content !important;}
  #pr-ext .child-ext-popup .headingContainer,
  #pr-ext .child-ext-popup .titleContainer{
      border: 1px solid #000 !important;
      margin-bottom: 15px;
      padding: 0px 10px !important;
  }
  #pr-ext .child-ext-popup strong{
      font-size: 30px !important;
      padding-bottom: 15px !important;
  }
  #pr-ext #ext_body.child-ext-popup{
      max-width: 800px !important;
      min-width: 460px;
      right: 0 !important;
      transform: none !important;
      font-size: 14px;
      resize:horizontal;
  }
  #pr-ext .failed-container{
      box-sizing: border-box;
      padding: 10px;
      border: 1px dashed rgba(0,0,0,0);
  
    }
  
  
    `;t.textContent=n,document.head.appendChild(t)})(),function e(){let t=document.createElement("div");t.classList.add("client-extension-container"),t.id="pr-ext",document.body.appendChild(t);let n=document.createElement("div");n.classList.add("client-side-extension-body","child-ext-popup","ext-popup"),n.id="ext_body",t.appendChild(n);let i=document.createElement("button");i.classList.add("ext-open","btn"),i.id="ext_open",i.innerText="A",t.appendChild(i);let l=document.createElement("button");l.classList.add("ext-close","btn"),l.id="ext_close",l.innerText="X",n.appendChild(l);let r=document.createElement("button");r.classList.add("ext-move","btn"),r.id="ext_move",r.innerText="Ⓜ",n.appendChild(r);let a=document.createElement("div");a.classList.add("m-main-content"),n.appendChild(a)}(),function e(){let t=document.getElementById("ext_close"),n=document.getElementById("ext_body"),i=document.getElementById("ext_open"),l=document.getElementById("ext_body"),r=document.getElementById("ext_move");i.addEventListener("click",function(){n.classList.add("ext-popup"),i.classList.remove("show"),n.style.left="auto",n.style.top="10%"}),t.addEventListener("click",function(){n.classList.remove("ext-popup"),i.classList.add("show")});let a=!1,o,d;function s(e){if(a){let t=e.clientX-o,n=e.clientY-d,i=window.innerWidth-l.offsetWidth,r=window.innerHeight-l.offsetHeight;l.style.left=Math.min(i,Math.max(0,t))+"px",l.style.top=Math.min(r,Math.max(0,n))+"px"}}r.addEventListener("mousedown",function(e){e.preventDefault(),a=!0,o=e.clientX-l.offsetLeft,d=e.clientY-l.offsetTop,document.addEventListener("mousemove",s),document.addEventListener("mouseup",function(){a=!1,document.removeEventListener("mousemove",s)})})}(),e=[],t=[],n=[],function e(t){if(t.nodeType===Node.TEXT_NODE&&""!==t.textContent.trim()){let i=t.parentElement,l=i.getBoundingClientRect();l.width>0&&l.height>0&&n.push(i)}else for(let r of t.childNodes)e(r)}(document.body),n.forEach(n=>{let i=window.getComputedStyle(n),l=i.color,r=function e(t){let n=window.getComputedStyle(t),i=n.backgroundColor,l=i.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);if(!(l&&.55>parseFloat(l[4]))&&"transparent"!==i)return i;{let r=t.parentElement;return r?e(r):""}}(n),a=parseFloat(i.fontSize);function o(e){let t=function e(t){let n=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)/);if(!n)return null;{let[,i,l,r,a]=n.map(Number);return{r:i,g:l,b:r,a:a||1}}}(e),n=t.r,i=t.g,l=t.b,r=t.a,a=("0"+Math.round(n*r+255*(1-r)).toString(16)).slice(-2),o=("0"+Math.round(i*r+255*(1-r)).toString(16)).slice(-2),d=("0"+Math.round(l*r+255*(1-r)).toString(16)).slice(-2);return`#${a}${o}${d}`}function d(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,i){return t+t+n+n+i+i});let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function s(e,t,n){let i=[e,t,n].map(function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)});return .2126*i[0]+.7152*i[1]+.0722*i[2]}r=o(r),l=o(l),r=d(r),l=d(l);let p=s(l.r,l.g,l.b),c=s(r.r,r.g,r.b),x=p>c?(c+.05)/(p+.05):(p+.05)/(c+.05);x>1/3&&a>24?(e.push({element:n.textContent.trim(),type:"large text",result:"FAIL",fgColor:l,bgColor:r}),t.push(n)):x>1/4.5&&a<=24&&(e.push({element:n.textContent.trim(),type:"small text",result:"FAIL",fgColor:l,bgColor:r}),t.push(n))}),function e(t,n){let i=document.querySelector(".m-main-content"),l=document.createElement("div");if(l.classList.add("m-result-row","m-result-row-1"),l.setAttribute("id","contrastResult"),l.setAttribute("data-target","result-1"),i.appendChild(l),t.length>0){let r=document.createElement("strong");r.classList.add("contrastContainerTitle"),r.innerText="Color Contrast",l.appendChild(r);let a=document.createElement("input");a.setAttribute("type","checkbox"),a.classList.add("pr-contrast-Container-CheckBox"),l.appendChild(a);let o=document.createElement("label");o.classList.add("pr-contrast-Container-CheckBox-label"),o.innerText="Highlight Failed CC",a.insertAdjacentHTML("afterend",o.innerHTML);let d=document.createElement("div");d.classList.add("contrastContainer"),l.appendChild(d);for(let s=0;s<t.length;s++){let p=document.createElement("ul");p.classList.add("contrastTitle","m-title"),p.innerHTML=`
                            <li>Element</li>
                            <li>Element Type</li>
                            <li>Element FG Color</li>
                            <li>Element BG Color</li>
                            `;let{element:c,type:x,fgColor:h,bgColor:u,urls:m}=t[s];c=c||"",x=x||"",h=h?`rgb ${h.r}, ${h.g}, ${h.b}`:"",u=u?`rgb ${u.r}, ${u.g}, ${u.b}`:"";let g=document.createElement("div");g.classList.add("page-cc");let f=document.createElement("ul");f.classList.add("failed-contrast-container","failed-container","hover-failed-contrast-container");let $=document.createElement("li");$.innerText=c;let b=document.createElement("li");b.textContent=x;let C=document.createElement("li");C.textContent=h;let y=document.createElement("li");y.textContent=u,f.appendChild($),f.appendChild(b),f.appendChild(C),f.appendChild(y),d.appendChild(g),g.appendChild(p),g.appendChild(f)}let E=document.querySelector(".contrastContainer .page-cc");if(!E){let _=document.createElement("div");_.classList.add("noIssueContainer"),_.innerHTML="No Color Contrast Issue",l.appendChild(_)}}else{let v=document.createElement("div");v.classList.add("noIssueContainer"),v.innerHTML="No Color Contrast Issue",l.appendChild(v)}(function e(t){let n=document.createElement("div");n.innerHTML='<span class="pr-failed-cc-container" style="background-color:#e80000;color:#fff;padding:5px;font-size:10px;">CC Fail</span>';let i=t,l=document.querySelector(".pr-contrast-Container-CheckBox");l&&l.addEventListener("click",function(){if(!0==l.checked)i.forEach(e=>{e.insertAdjacentHTML("beforebegin",n.innerHTML)});else{let e=document.querySelectorAll(".pr-failed-cc-container");e.forEach(e=>e.remove())}})})(n)}(e,t),function e(){let t=[],n=[];document.URL;let i=document.querySelectorAll("h1, h2, h3, h4, h5, h6"),l=i[0],r=!0,a=!1,o=!1,d="";document.querySelectorAll("h1").length>1&&(a=!0);for(let s=0;s<i.length;s++)if(""===i[s].innerText.trim()){o=!0;break}let p=0;for(let c=0;c<i.length;c++){let x=parseInt(i[c].tagName.charAt(1));if(x>p+1){r=!1;break}p=x}"h1"!==l.tagName.toLowerCase()?(d+="h1 is not the first heading. ",t.push({result:d})):a?(d+="Multiple h1 headings detected. ",t.push({result:d})):o?(d+="Blank heading detected. ",t.push({result:d})):r?(d+="Heading structure is valid. ",[].push({result:d})):(d+="Invalid heading structure. ",t.push({result:d}));for(let h=0;h<i.length;h++){let u=i[h].tagName,m=i[h].textContent;n.push({headingLevel:u,headingText:m})}(function e(t){let n=document.querySelector(".m-main-content"),i=document.createElement("div");i.classList.add("m-result-row","active","m-result-row-0"),i.setAttribute("id","headingResult"),i.setAttribute("data-target","result-0"),n.appendChild(i);let l=document.createElement("strong");l.classList.add("headingContainerTitle"),l.innerText="Headings",i.appendChild(l);let r=document.createElement("input");r.setAttribute("type","checkbox"),r.classList.add("pr-heading-Container-CheckBox"),i.appendChild(r);let a=document.createElement("label");if(a.classList.add("pr-heading-Container-CheckBox-label"),a.innerText="Highlight Headings",r.insertAdjacentHTML("afterend",a.innerHTML),t.length>0){let o=document.createElement("div");o.classList.add("headingContainer"),i.appendChild(o),t.forEach(e=>{let{result:t}=e,n=document.createElement("div");n.classList.add("page-heading"),n.innerHTML=`
                  <ul class="failed-heading-container failed-container">
                  <li>${t}</li>
                  </ul>
                `,o.appendChild(n)})}else{let d=document.createElement("strong");d.classList.add("noIssueContainer"),d.innerHTML="No Heading structure Issues",i.appendChild(d)}})(t),function e(t){let n=document.getElementById("headingResult");if(t){let i=document.createElement("div");i.classList.add("headingContainer"),n.appendChild(i),t.forEach(e=>{let{headingLevel:t,headingText:n}=e,l=n.split(" ");var r="color:#000 !important";l.forEach(e=>{if(e.length>1){let t=e.charAt(0);/[a-z]/.test(t)?r="color:#d80000 !important":/^[A-Z]+$/.test(e)&&(r="color:#d80000 !important")}});let a=document.createElement("div");a.classList.add("page-heading"),a.innerHTML=`
                <ul class="failed-heading-container failed-container">
                <li>${t}</li>
                <li style="${r}">${n}</li>
                </ul>
              `,i.appendChild(a)})}else{let l=document.createElement("div");l.classList.add("noIssueContainer"),l.innerHTML="No Heading structure Issues",n.appendChild(l)}}(n),function e(t){console.log(t);let n=t,i=document.querySelector(".pr-heading-Container-CheckBox");i&&i.addEventListener("click",function(){if(!0==i.checked)n.forEach(e=>{let t=document.createElement("div");t.innerHTML=`<span class="pr-failed-heading-container" style="background-color:#6400FF;color:#fff;padding:5px;font-size:10px;">${e.tagName}</span>`,e.insertAdjacentHTML("beforebegin",t.innerHTML)});else{let e=document.querySelectorAll(".pr-failed-heading-container");e.forEach(e=>e.remove())}})}(i)}(),function e(){document.URL;let t=document.querySelector("title").text;(function e(t){let n=document.querySelector(".flfooterbrand a"),i;i=n?n.text:"";let l=document.querySelector(".m-main-content"),r=document.createElement("div");r.classList.add("m-result-row","m-result-row-2"),r.setAttribute("id","titleResult"),r.setAttribute("data-target","result-2"),l.appendChild(r);let a=document.createElement("strong");a.classList.add("titleContainerTitle"),a.innerText="Page Title",r.appendChild(a);let o=document.createElement("div");o.classList.add("titleContainer"),r.appendChild(o);let d=!t.includes(i),s=t.substring(t.length-i.length,t.length),p=d||s!==i,c=document.createElement("div");c.classList.add("page-titles"),c.innerHTML=`
                <ul class="failed-title-container failed-container">
                    <li style="${p?"color:#d80000 !important":"color:#333333"}">${t}</li>
                </ul>
            `,o.appendChild(c)})(t)}(),function e(){let t=document.querySelectorAll("img"),n=[];t.forEach(e=>{let t=document.domain+e.getAttribute("src"),i=e.getAttribute("alt"),l=e.hasAttribute("alt"),r=0!==e.getBoundingClientRect().width&&0!==e.getBoundingClientRect().height&&!t.startsWith("http");l&&r?n.push({src:t,alt:i}):!l&&r&&n.push({src:t,alt:"No alt"})}),function e(t){let n=function e(t){let n=new Set,i=[];return t.forEach(e=>{let{src:t,alt:l}=e;n.has(t)||(n.add(t),i.push({src:t,alt:l}))}),i}(t),i=document.querySelector(".m-main-content"),l=document.createElement("div");l.classList.add("m-result-row","m-result-row-3"),l.setAttribute("id","imgResult"),l.setAttribute("data-target","result-3"),i.appendChild(l);let r=document.createElement("strong");r.classList.add("imgContainerTitle"),r.innerText="Image",l.appendChild(r);let a=document.createElement("div");a.classList.add("imgContainer"),l.appendChild(a);let o=document.createElement("ul");o.classList.add("imgTitle","m-title"),o.innerHTML=`
        <li>Images</li>
        <li>Alt Text</li>
        `,a.appendChild(o);for(let d=0;d<n.length;d++){let s=document.createElement("div");s.classList.add("page-heading"),s.innerHTML=`
                  <ul class="img-container failed-container">
                    <li><img style="width:150px;height:auto" src= 'https://${n[d].src}' alt=${n[d].alt}></li>
                  <li class='alt-text'>"${n[d].alt}"</li>
                  </ul>
                `,a.appendChild(s)}}(n)}()}
