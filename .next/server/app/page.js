(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},9711:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>m});var r=s(3137),i=s(4647),a=s(4183),o=s.n(a),n=s(1775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=r.AppPageRouteModule,m=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5804)),"/home/mgromek/projects/haris-instal/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,9958)),"/home/mgromek/projects/haris-instal/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/mgromek/projects/haris-instal/app/page.tsx"],u="/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},5884:(e,t,s)=>{Promise.resolve().then(s.bind(s,6644)),Promise.resolve().then(s.bind(s,9306)),Promise.resolve().then(s.bind(s,3463)),Promise.resolve().then(s.bind(s,1574)),Promise.resolve().then(s.bind(s,9437)),Promise.resolve().then(s.bind(s,9115)),Promise.resolve().then(s.bind(s,90)),Promise.resolve().then(s.t.bind(s,5251,23)),Promise.resolve().then(s.t.bind(s,1297,23)),Promise.resolve().then(s.bind(s,8503)),Promise.resolve().then(s.bind(s,711))},6644:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(80),i=s(2196),a=s(2050),o=s(566);function n({title:e,content:t,onClick:s,itemId:n,isOpen:l,accordionItemIndex:c}){let m=(0,o.W)([{"border-b border-t border-primary":l},"relative mb-5 bg-gray-400"]),d=(0,o.W)(["border-t text-sm transition-height transition-opacity transition-spacing pl-3",{"opacity-100 h-full py-2 border-t-gray-500":l},{"opacity-0 h-0":!l}]),u=`accordionItem-${c}`,p=l?r.jsx(i.FontAwesomeIcon,{icon:a.mTx,className:"absolute right-2 top-1/3 text-primary"}):r.jsx(i.FontAwesomeIcon,{icon:a.ptq,className:"absolute right-2 top-1/3 text-primary"});return(0,r.jsxs)("li",{className:m,onClick:()=>s(n),children:[(0,r.jsxs)("button",{type:"button","aria-expanded":l,className:"relative w-full p-3 text-left font-bold","aria-controls":u,children:[p,Number(c)+1,". ",e]}),r.jsx("p",{id:u,className:d,tabIndex:l?0:void 0,children:t})]})}var l=s(9885);let c=[{itemId:"0",title:"What Kind of work can a handyman do",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!"},{itemId:"1",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!"},{itemId:"2",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!"},{itemId:"3",title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. 3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!"}];function m(){let[e,t]=(0,l.useState)(""),s=e=>{t(t=>t===e?"":e)};return r.jsx("ul",{children:c?.map((t,i)=>r.jsx(n,{isOpen:t.itemId===e,title:t.title,content:t.content,itemId:t.itemId,onClick:s,accordionItemIndex:i},t.itemId))})}},1574:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(80),i=s(2196),a=s(2050);function o({subtitle:e,title:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"mt-5 pb-2 text-sm font-semibold text-primary",children:[r.jsx(i.FontAwesomeIcon,{className:"pr-2",icon:a.eDR}),e]}),r.jsx("h3",{className:"mb-5 pb-4 text-3xl font-semibold",children:t})]})}var n=s(2451),l=s.n(n),c=s(1440),m=s.n(c),d=s(2723);s(5404),s(6332),s(3446);var u=s(5754),p=s(711),x=s(3);function A(){return r.jsx(d.Z,{...x.y,className:"slider-main",children:u._w.map(e=>(0,r.jsxs)(m(),{href:e.url,className:"before:transition-opacity group relative before:absolute before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-secondary lg:px-2 lg:before:w-[calc(100%-15px)] lg:before:opacity-0 lg:hover:before:opacity-100",children:[r.jsx(l(),{src:p.default,alt:"as",loading:"lazy"}),r.jsx("div",{className:"absolute bottom-0 pb-5 pl-5 lg:invisible lg:group-hover:visible",children:r.jsx("p",{className:"z-10 font-semibold text-white",children:e.title})})]},e.title))})}function g(){return(0,r.jsxs)("section",{className:"container mx-auto mt-10 mt-10 px-4 md:mt-20 lg:w-2/3",children:[r.jsx(o,{title:"Wykonane projekty",subtitle:"Ostatnie Projekty"}),r.jsx(A,{})]})}},9437:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(80),i=s(2723),a=s(3);s(5404),s(6332),s(3446);var o=s(5754),n=s(9817);let l=n.ZP.div`
  background: url(${({$imgUrl:e})=>e}) no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
`;function c({url:e,heading:t,subheading:s}){return r.jsx(l,{$imgUrl:e,className:"absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]",children:(0,r.jsxs)("div",{className:"container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl",children:[r.jsx("h2",{className:"font-bold",children:t}),r.jsx("small",{children:s}),r.jsx("div",{className:"flex",children:r.jsx("button",{type:"button",className:"border-2 border-primary bg-primary px-4 py-2 text-white",children:"Nasze Usługi"})})]})})}function m(){return r.jsx(i.Z,{...a.X,className:"slider-main",children:o.Ez.map(({url:e,heading:t,subheading:s})=>r.jsx(c,{url:e,heading:t,subheading:s},t))})}},9115:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(80),i=s(2451),a=s.n(i),o=s(7034),n=s(9885),l=s(2723);s(5404),s(6332),s(3446);var c=s(2196),m=s(2050),d=s(5754);function u(){let[e,t]=(0,n.useState)(0),s={dots:!1,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1,nextArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"absolute left-40 top-32 border-2 border-primary p-4 hover:border-navy-800",type:"button",onClick:e,disabled:i(),children:r.jsx(c.FontAwesomeIcon,{icon:m._tD,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),prevArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"absolute left-40 top-52 z-10 border-2 border-primary p-4 hover:border-navy-800 ",type:"button",onClick:e,disabled:i("prev"),children:r.jsx(c.FontAwesomeIcon,{icon:m.A35,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),afterChange:e=>t(e),responsive:[{breakpoint:1024,settings:{autoplay:!1,arrows:!1,dots:!1}}]},i=(t="next")=>"prev"===t?0===e:e===d.QK.length-1;return r.jsx(l.Z,{...s,className:"slider-main",children:d.QK.map(e=>r.jsx(a(),{src:e.url,alt:e.alt,width:"150",height:"50"},e.id))})}function p(){let[e]=(0,o.Z)(),t=e?r.jsx(u,{}):(0,r.jsxs)(n.Fragment,{children:[r.jsx(a(),{src:"/images/logo-trusted-partner-1.svg",alt:"logo trusted partner",width:"150",height:"50"}),r.jsx(a(),{src:"/images/logo-trusted-partner-1.svg",alt:"logo trusted partner",width:"150",height:"50"}),r.jsx(a(),{src:"/images/logo-trusted-partner-1.svg",alt:"logo trusted partner",width:"150",height:"50"}),r.jsx(a(),{src:"/images/logo-trusted-partner-1.svg",alt:"logo trusted partner",width:"150",height:"50"})]});return(0,r.jsxs)("section",{className:"container mx-auto lg:flex",children:[(0,r.jsxs)("div",{className:"bg-primary p-4 text-white",children:[r.jsx("p",{children:"Nasi zaufani partnerzy"}),r.jsx("h3",{children:"Marki z kt\xf3rymi wsp\xf3łpracujemy i w kt\xf3re wierzymy..."})]}),r.jsx("div",{className:"grow bg-gray-400 p-4 md:flex md:flex-row md:justify-around",children:t})]})}},90:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(80),i=s(2196),a=s(8622),o=s(9885),n=s(2050);let l=new class{on(e,t){if("function"!=typeof t){console.error("_EventsBus.on callback not function!");return}return this._events[e]?this._events[e].push(t):this._events[e]=[t],this}emit(e,...t){let s=this._events[e];return s&&s.forEach(e=>e(...t)),this}off(e,t){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(e)){for(let s=0,r=e.length;s<r;s++)this.off(e[s],t);return this}if(this._events[e]){let s=this._events[e].indexOf(t);-1!==s&&this._events[e].splice(s,1)}return this}constructor(){this._events=Object.create(null)}},c={name:"",email:"",phone:""};function m(){let[e,t]=(0,o.useState)(c),[s,a]=(0,o.useState)(!1),m=async t=>{t.preventDefault(),a(!0);let s=await fetch("/api/contact",{method:"POST",body:JSON.stringify(e)}),r=await s.text(),i=s.ok?"success":"error";l.emit("submit",{variant:i,message:r}),a(!1)},d=({target:e})=>{t(t=>({...t,[e.name]:e.value}))},u=!e.email||!e.phone||!e.name;return r.jsx(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:m,className:"items-center justify-between gap-5 lg:flex",children:[(0,r.jsxs)("div",{className:"mb-4 lg:mb-0",children:[r.jsx("p",{className:"pb-2 text-lg text-primary",children:"Sytuacje awaryjne"}),r.jsx("p",{className:"text-2xl font-semibold",children:"Masz jakiś problem i nie możesz czekać ?"})]}),(0,r.jsxs)("div",{className:"grow items-center gap-4 lg:flex",children:[(0,r.jsxs)("label",{htmlFor:"name",className:"inline-block w-full lg:w-auto",children:["Twoje imię",r.jsx("sup",{children:"*"}),r.jsx("input",{required:!0,className:"mt-3 block h-10 w-full p-3 text-primary md:inline-block",type:"text",id:"name",name:"name",value:e.name,onChange:d})]}),(0,r.jsxs)("label",{htmlFor:"email",className:"mt-2 inline-block w-full lg:mt-0 lg:w-auto",children:["Tw\xf3j email",r.jsx("sup",{children:"*"}),r.jsx("input",{required:!0,className:"mt-3 block h-10 w-full p-3 text-primary lg:inline-block",type:"email",id:"email",name:"email",value:e.email,onChange:d})]}),(0,r.jsxs)("label",{htmlFor:"phone",className:"mt-2 inline-block w-full lg:mt-0 lg:w-auto",children:["Telefon",r.jsx("sup",{children:"*"}),r.jsx("input",{required:!0,className:"mt-3 block h-10 w-full p-3 text-primary lg:inline-block",type:"tel",id:"phone",name:"phone",value:e.phone,onChange:d})]}),(0,r.jsxs)("button",{type:"submit",className:"transition-colors mt-8 flex w-full items-center gap-2 bg-primary p-4 text-white hover:bg-navy-100 sm:w-auto",disabled:u,children:[s&&r.jsx(i.FontAwesomeIcon,{icon:n.LM3,className:"animate-spin"}),s?"Wysyłanie":"Wyślij"]})]})]})})}var d=s(566);let u=(0,o.forwardRef)(function({variant:e,message:t,onClickCloseAlert:s},a){let l=(0,o.useRef)(null);(0,o.useImperativeHandle)(a,()=>({scrollToView(){l.current&&l.current.scrollIntoView({behavior:"smooth"})}}));let c=(0,d.W)(["relative p-4 my-4 border bg-opacity-30 rounded flex items-center animate-show font-semibold",{"border-[green] bg-[green] text-[green]":"success"===e},{"border-[red] bg-[red] text-[red]":"error"===e}]),m=(0,d.W)(["pr-4 text-2xl",{"text-[green]":"success"===e},{"text-[red]":"error"===e}]),u=(0,d.W)(["p-3 text-2xl",{"text-[green]":"success"===e},{"text-[red]":"error"===e}]);return(0,r.jsxs)("p",{className:c,ref:l,children:[r.jsx(i.FontAwesomeIcon,{icon:"success"===e?n.DBf:n.WA2,className:m}),t,r.jsx("span",{className:"absolute bottom-0 right-0",children:r.jsx(i.FontAwesomeIcon,{icon:n.g82,className:u,role:"button",onClick:s})})]})});function p(){let[e,t]=(0,o.useState)({}),s=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=e=>{t(e),requestAnimationFrame(()=>{s.current&&s.current.scrollToView()})};return l.on("submit",e),()=>{l.off("submit",e)}},[]),(0,r.jsxs)("section",{className:"container mx-auto p-4 lg:p-0",children:[e.variant&&r.jsx(u,{variant:e.variant,message:e.message,onClickCloseAlert:()=>t({}),ref:s}),(0,r.jsxs)("div",{className:"bg-secondary text-white md:flex",children:[r.jsx("div",{className:"flex items-center bg-primary p-6",children:r.jsx(i.FontAwesomeIcon,{icon:a.FU$,className:" text-3xl"})}),r.jsx("div",{className:"p-6",children:r.jsx(m,{})})]})]})}},3:(e,t,s)=>{"use strict";s.d(t,{X:()=>o,y:()=>n});var r=s(80),i=s(2196),a=s(2050);let o={dots:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"absolute bottom-10 right-1/3 border-2 border-primary p-4 hover:border-navy-800 ",type:"button",onClick:e,children:r.jsx(i.FontAwesomeIcon,{icon:a._tD,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),prevArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"absolute bottom-10 left-1/3 z-10 border-2 border-primary p-4 hover:border-navy-800 ",type:"button",onClick:e,children:r.jsx(i.FontAwesomeIcon,{icon:a.A35,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),responsive:[{breakpoint:1024,settings:{autoplay:!1,arrows:!1,dots:!1}}]},n={dots:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,nextArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"invisible absolute -top-20 right-0 border-2 border-primary p-4 hover:border-navy-800 md:visible",type:"button",onClick:e,children:r.jsx(i.FontAwesomeIcon,{icon:a.eFW,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),prevArrow:r.jsx(function({onClick:e}){return r.jsx("button",{className:"invisible absolute -top-20 right-16 z-10 border-2 border-primary p-4 hover:border-navy-800 md:visible ",type:"button",onClick:e,children:r.jsx(i.FontAwesomeIcon,{icon:a.acZ,className:"text-primary hover:text-navy-800",size:"lg"})})},{}),responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}},5804:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>et});var r=s(8144),i=s(8808),a=s(4602),o=s.n(a),n=s(8988),l=s(1733);function c(){return(0,r.jsxs)("div",{className:"header__top hidden text-white lg:flex",children:[r.jsx("div",{className:"relative bg-secondary p-6 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:origin-bottom-right after:-skew-x-30 after:skew-y-0 after:bg-secondary md:basis-3/12"}),r.jsx("div",{className:"header__socialMedia flex grow items-center justify-end bg-primary p-2 md:p-6",children:r.jsx(o(),{href:"//www.facebook.com/",target:"_blank",children:r.jsx(n.FontAwesomeIcon,{icon:l.neY,className:"text-4xl text-white"})})})]})}var m=s(7536);let d=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/Header/HeaderNavigation.tsx`),{__esModule:u,$$typeof:p}=d,x=d.default,A=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/Header/HeaderContactInfo.tsx`),{__esModule:g,$$typeof:h}=A,b=A.default;var f=s(5042),j=s.n(f);let y={src:"/_next/static/media/haris-instal_logo.1bf21143.png",height:180,width:807,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGP0joyN//7tqwIzMwsLJzfX08+fPgnw8PCw/vjx4zczE9MjxvDkVG8WVlZRVlbWz3/+/GH68/cfDysrywegBp4/f37/BABJehra+Wi79gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2};function v(){return r.jsx(o(),{className:"flex",href:"/",children:r.jsx(j(),{src:y,alt:"haris instal logo obrazek",width:300,height:60})})}function w(){return r.jsx("header",{children:(0,r.jsxs)("div",{className:"container mx-auto",children:[r.jsx(c,{}),(0,r.jsxs)("div",{className:"flex",children:[r.jsx("div",{className:"hidden basis-3/12 justify-center md:flex",children:r.jsx(v,{})}),(0,r.jsxs)("div",{className:"flex grow flex-col divide-y divide-gray-500 bg-white",children:[r.jsx(b,{}),r.jsx(x,{})]})]})]})})}let N=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/Slider/SliderMain.tsx`),{__esModule:k,$$typeof:P}=N,I=N.default;function C(){return r.jsx(I,{})}let E=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/TrustedPartner/TrustedPartner.tsx`),{__esModule:B,$$typeof:_}=E,Q=E.default;function F({title:e,body:t,icon:s}){return(0,r.jsxs)("article",{className:"transition-colors group relative mb-24 mt-16 bg-white p-4 pb-10 pt-24 shadow-xl even:bg-primary even:text-white lg:mb-5",children:[r.jsx("div",{className:"absolute -top-16 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-navy-100 bg-opacity-40 p-3",children:r.jsx(n.FontAwesomeIcon,{icon:s,className:"rounded-full bg-navy-800 p-6 text-6xl text-white group-even:bg-white group-even:text-primary"})}),r.jsx("h3",{className:"pb-4 text-2xl font-semibold",children:e}),r.jsx("p",{className:"pb-4",children:t})]})}var S=s(8097);let z=[{title:"Basement plumbing",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.",icon:S.e_},{title:"Drain plumbing",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.",icon:S.eDR},{title:"Water Line repair",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.",icon:S.klh}];function q({subtitle:e,title:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"mt-5 pb-2 text-sm font-semibold text-primary",children:[r.jsx(n.FontAwesomeIcon,{className:"pr-2",icon:S.eDR}),e]}),r.jsx("h3",{className:"mb-5 pb-4 text-3xl font-semibold",children:t})]})}function D(){return(0,r.jsxs)("section",{className:"container mx-auto bg-gray-400 p-4 lg:p-28",children:[r.jsx(q,{title:"Sprawdź nasze usługi",subtitle:"Nasze usługi"}),r.jsx("div",{className:" gap-5 text-center lg:flex lg:justify-around",children:z.map(e=>r.jsx(F,{title:e.title,body:e.body,icon:e.icon},e.title))})]})}let M=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/UrgentContact/UrgentContact.tsx`),{__esModule:L,$$typeof:R}=M,T=M.default,U={src:"/_next/static/media/image1.758b3630.jpg",height:3456,width:5184,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJQNf//EABwQAAEDBQAAAAAAAAAAAAAAAAIAAQMEERJBof/aAAgBAQABPwCpnOcny3fi/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAwEBPwBwv//Z",blurWidth:8,blurHeight:5};function W(){return r.jsx("section",{className:"container mx-auto p-4 lg:p-24",children:(0,r.jsxs)("div",{className:" lg:flex lg:gap-5",children:[(0,r.jsxs)("div",{className:"lg:w-1/3",children:[(0,r.jsxs)("p",{className:"pb-2 text-sm font-semibold text-primary",children:[r.jsx(n.FontAwesomeIcon,{className:"pr-2",icon:S.eDR}),"Dlaczego warto wybrać nasze usługi"]}),r.jsx("h3",{className:"pb-4 text-3xl font-semibold",children:"Doskonałe rozwiązania dla usług hydraulicznych"}),(0,r.jsxs)("div",{className:"flex flex-col gap-5 md:flex-row",children:[(0,r.jsxs)("article",{className:"bg-gray-400 p-4 text-center",children:[r.jsx(n.FontAwesomeIcon,{className:"pb-4 text-3xl text-primary",icon:S.eDR}),r.jsx("h4",{className:"pb-4 font-semibold",children:"Przystępna cena"}),r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),(0,r.jsxs)("article",{className:"bg-gray-400 p-4 text-center",children:[r.jsx(n.FontAwesomeIcon,{className:"pb-4 text-3xl text-primary",icon:S.eDR}),r.jsx("h4",{className:"pb-4 font-semibold",children:"Fachowy hydraulik"}),r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]})]})]}),r.jsx("div",{className:"lg:w-2/3",children:r.jsx(j(),{className:"ml-auto",src:U,alt:"bg",width:640,height:400})})]})})}function G(){return r.jsx("section",{className:"bg-gray-400",children:r.jsx("div",{className:"container mx-auto ",children:(0,r.jsxs)("div",{className:"px-4 lg:flex lg:justify-between lg:px-28",children:[(0,r.jsxs)("div",{className:"flex-1 border-b border-b-gray-500 border-r-gray-500 py-8 font-semibold lg:border-b-0 lg:border-r",children:[r.jsx("p",{className:"text-4xl text-primary",children:"1.25k"}),r.jsx("span",{className:"text-gray-700",children:"Successfull Projects"})]}),(0,r.jsxs)("div",{className:"flex-1 border-b border-b-gray-500 border-r-gray-500 py-8 font-semibold lg:border-b-0 lg:border-r lg:pl-16",children:[r.jsx("p",{className:"text-4xl text-primary",children:"1.24k"}),r.jsx("span",{className:"text-gray-700",children:"Satisfied Customer"})]}),(0,r.jsxs)("div",{className:"flex-1 border-b border-b-gray-500 border-r-gray-500 py-8 font-semibold lg:border-b-0 lg:border-r lg:pl-16",children:[r.jsx("p",{className:"text-4xl text-primary",children:"250+"}),r.jsx("span",{className:"text-gray-700",children:"Successfull Projects"})]}),(0,r.jsxs)("div",{className:"flex-1 border-r-0 border-b-gray-500 py-8 font-semibold lg:border-b-0  lg:pl-16",children:[r.jsx("p",{className:"text-4xl text-primary",children:"100%"}),r.jsx("span",{className:"text-gray-700",children:"Successfull Projects"})]})]})})})}let J=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/AccordionList/AccordionList.tsx`),{__esModule:$,$$typeof:K}=J,V=J.default;function Z(){return(0,r.jsxs)("section",{className:"container mx-auto mt-10 px-4 md:mt-20 lg:w-2/3",children:[r.jsx(q,{title:"Najczęściej Zadawane Pytania",subtitle:"FAQ"}),r.jsx(V,{})]})}let H=(0,m.createProxy)(String.raw`/home/mgromek/projects/haris-instal/app/components/Projects/Projects.tsx`),{__esModule:O,$$typeof:Y}=H,X=H.default;function ee(){return r.jsx("footer",{className:"mt-10 bg-secondary text-gray-500 lg:mt-20",children:r.jsx("div",{className:"container mx-auto p-4",children:"footer"})})}function et(){return i.config.autoAddCss=!1,(0,r.jsxs)(r.Fragment,{children:[r.jsx(w,{}),(0,r.jsxs)("main",{children:[r.jsx(C,{}),r.jsx(Q,{}),r.jsx(D,{}),r.jsx(T,{}),r.jsx(W,{}),r.jsx(G,{}),r.jsx(Z,{}),r.jsx(X,{})]}),r.jsx(ee,{})]})}s(9175)},711:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/image1.758b3630.jpg",height:3456,width:5184,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJQNf//EABwQAAEDBQAAAAAAAAAAAAAAAAIAAQMEERJBof/aAAgBAQABPwCpnOcny3fi/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAwEBPwBwv//Z",blurWidth:8,blurHeight:5}},3446:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[809,885,272,446,224,672],()=>s(9711));module.exports=r})();