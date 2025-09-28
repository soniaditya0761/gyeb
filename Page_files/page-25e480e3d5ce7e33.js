(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3573],{40214:function(e,t,n){Promise.resolve().then(n.bind(n,720))},720:function(e,t,n){"use strict";
var l=n(57437),s=n(99376),o=n(2265),a=n(33145),r=n(31639),i=n(30166),u=n(43130);
let d=(0,i.default)(()=>Promise.all([n.e(249),n.e(7448),n.e(6818),n.e(7282),n.e(2972),n.e(6974),n.e(7259)]).then(n.bind(n,17960)),{loadableGenerated:{webpack:()=>[17960]},loading:()=>(0,l.jsx)("p",{children:"Loading..."}),ssr:!1});
t.default=()=>{
    // ...existing code...
    return (0,l.jsxs)(l.Fragment,{children:[
        (0,l.jsxs)("div",{className:"min-h-screen pt-32 w-full h-full flex flex-col justify-center items-center text-white",children:[
            (0,l.jsx)(a.default,{src:r.Z,alt:"bg-image",className:"object-cover h-screen w-full fixed top-0 left-0 z-[-1] opacity-90"}),
            (0,l.jsx)("div",{className:"mx-4 max-w-4xl py-10 border px-10 h-min mt-10 md:mt-4 my-24 sm:my-10 md:my-14 lg:my-20 shadow-lg backdrop-blur-3xl",children:
                (0,l.jsxs)("div",{className:"h-min",children:[
                    (0,l.jsx)("h3",{className:"md:text-2xl text-base font-semibold text-center",children:"Payment Status"}),
                    (0,l.jsx)("br",{}),
                    (0,l.jsx)(l.Fragment,{children:
                        (0,l.jsxs)("div",{className:" my-2 text-left",children:[
                            "Your payment has been successfully completed!",
                            (0,l.jsx)("br",{}),
                            "The details of your transaction are as follows:",
                            (0,l.jsxs)("div",{className:"text-left",children:[
                                (0,l.jsx)("br",{}),
                                "Name - aditya narayan soni",
                                (0,l.jsx)("br",{}),
                                "Email - soni.aditya0761@gmail.com",
                                (0,l.jsx)("br",{}),
                                "Contact - 8770528329",
                                (0,l.jsx)("br",{}),
                                "Event - Dholida 3.0 General Entry",
                                (0,l.jsx)("br",{}),
                                "Amount Paid - ₹250",
                                (0,l.jsxs)("div",{children:["Issued To - aditya narayan soni"]}),
                                (0,l.jsxs)("div",{children:["Enrollment No. - R23026P7250083"]}),
                                (0,l.jsxs)("div",{children:["Branch - MBA"]}),
                                "College - GGITS",
                                (0,l.jsx)("br",{}),
                                "The payment was made on Sat Sep 27 2025 20:15:54",
                                (0,l.jsx)("br",{})
                            ]}),
                            "We appreciate your participation and look forward to seeing you at the event!"
                        ]})
                    })
                ]})
            })
        ]})
    ]});
};
},30166:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var l=n(55775),s=n.n(l)},
99376:function(e,t,n){"use strict";var l=n(35475);n.o(l,"notFound")&&n.d(t,{notFound:function(){return l.notFound}}),n.o(l,"useParams")&&n.d(t,{useParams:function(){return l.useParams}}),n.o(l,"usePathname")&&n.d(t,{usePathname:function(){return l.usePathname}}),n.o(l,"useRouter")&&n.d(t,{useRouter:function(){return l.useRouter}}),n.o(l,"useSearchParams")&&n.d(t,{useSearchParams:function(){return l.useSearchParams}})},
55775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(60917);n(57437),n(2265);let s=l._(n(15602));function o(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let o={...l,...t};return(0,s.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},
81523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let l=n(18993);function s(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},
15602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(57437),s=n(2265),o=n(81523),a=n(70049);function r(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},n=(0,s.lazy)(()=>t.loader().then(r)),u=t.loading;function d(e){let r=u?(0,l.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(s.Suspense,{fallback:r,children:i})}return d.displayName="LoadableComponent",d}},
70049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let l=n(57437),s=n(20544);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,s.getExpectedRequestStore)("next/dynamic css"),o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},
31639:function(e,t){"use strict";t.Z={src:"/_next/static/media/8.52b00fca.gif",height:600,width:600,blurWidth:0,blurHeight:0}}
},function(e){e.O(0,[5878,5134,2971,2117,1744],function(){return e(e.s=40214)}),_N_E=e.O()}]);
