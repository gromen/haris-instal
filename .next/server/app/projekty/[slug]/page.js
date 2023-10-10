(()=>{var e={};e.id=508,e.ids=[508],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},1790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3756:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>u,routeModule:()=>g,tree:()=>c});var a=r(3137),s=r(4647),i=r(4183),n=r.n(i),o=r(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=a.AppPageRouteModule,c=["",{children:["projekty",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5137)),"/home/mgromek/projects/haris-instal/app/projekty/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7718)),"/home/mgromek/projects/haris-instal/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/mgromek/projects/haris-instal/app/projekty/[slug]/page.tsx"],p="/projekty/[slug]/page",m={require:r,loadChunk:()=>Promise.resolve()},g=new d({definition:{kind:s.x.APP_PAGE,page:"/projekty/[slug]/page",pathname:"/projekty/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},229:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5251,23))},5137:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(8144);async function s(e){try{let t=await fetch("https://www.haris-instal.pl/admin/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e}),next:{revalidate:10}});return await t.json()}catch(e){console.error("Error fetching GraphQl: ",e)}}let i=`
  query AllProjects {
    projects {
      nodes {
        content
        id
        slug
        title
        ProductPageFields {
          projectImage {
            altText
            mediaDetails {
              height
              width
            }
          }
          projectDescription
        }
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;async function n(){let{data:e}=await s(i);return e?.projects?.nodes}var o=r(7929),l=r.n(o),d=r(5042),c=r.n(d);async function u({params:{slug:e}}){let t=await n(),r=t.find(t=>t.slug===e);return(0,a.jsxs)(a.Fragment,{children:[a.jsx(l(),{children:(0,a.jsxs)("title",{children:[e," | Haris Instal"]})}),(0,a.jsxs)("div",{className:"mt-lg-20 container mx-auto mt-10",children:[a.jsx("h1",{className:"mb-lg-10 mb-5 w-full text-4xl font-bold",children:r?.title}),(0,a.jsxs)("div",{className:"flex gap-10",children:[a.jsx("div",{children:r?.featuredImage.node?.sourceUrl&&a.jsx(c(),{src:r.featuredImage.node.sourceUrl,alt:r.ProductPageFields.projectImage.altText,height:r.ProductPageFields.projectImage.mediaDetails.height,width:r.ProductPageFields.projectImage.mediaDetails.width})}),a.jsx("div",{children:a.jsx("p",{dangerouslySetInnerHTML:{__html:String(r?.ProductPageFields?.projectDescription)}})})]})]})]})}},7929:(e,t)=>{"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6885);let s=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[682,885,900],()=>r(3756));module.exports=a})();