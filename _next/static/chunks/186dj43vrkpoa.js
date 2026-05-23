(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return u}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let l=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",a=e.hash||"",u=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),u&&"object"==typeof u&&(u=String(l.urlQueryToSearchParams(u)));let s=e.search||u&&`?${u}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),s&&"?"!==s[0]&&(s="?"+s),n=n.replace(/[?#]/g,encodeURIComponent),s=s.replace("#","%23"),`${o}${c}${n}${s}${a}`}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(71645);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=l(e,o)),t&&(n.current=l(t,o))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return l}});let o=e.r(18967),n=e.r(52817);function l(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return g},useLinkStatus:function(){return v}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let l=e.r(90809),i=e.r(43476),a=l._(e.r(71645)),u=e.r(95057),c=e.r(8372),s=e.r(18581),f=e.r(18967),p=e.r(5550);e.r(33525);let d=e.r(88540),h=e.r(91949),m=e.r(73668),y=e.r(9396);function g(t){var r,o;let n,l,g,[v,j]=(0,a.useOptimistic)(h.IDLE_LINK_STATUS),_=(0,a.useRef)(null),{href:x,as:O,children:P,prefetch:S=null,passHref:T,replace:C,shallow:R,scroll:E,onClick:M,onMouseEnter:L,onTouchStart:k,legacyBehavior:w=!1,onNavigate:U,transitionTypes:N,ref:A,unstable_dynamicOnHover:B,...I}=t;n=P,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let $=a.default.useContext(c.AppRouterContext),K=!1!==S,D=!1!==S?null===(o=S)||"auto"===o?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,F="string"==typeof(r=O||x)?r:(0,u.formatUrl)(r);if(w){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});l=a.default.Children.only(n)}let q=w?l&&"object"==typeof l&&l.ref:A,z=a.default.useCallback(e=>(null!==$&&(_.current=(0,h.mountLinkInstance)(e,F,$,D,K,j)),()=>{_.current&&((0,h.unmountLinkForCurrentNavigation)(_.current),_.current=null),(0,h.unmountPrefetchableInstance)(e)}),[K,F,$,D,j]),G={ref:(0,s.useMergedRef)(z,q),onClick(t){w||"function"!=typeof M||M(t),w&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),!$||t.defaultPrevented||function(t,r,o,n,l,i,u){if("u">typeof window){let c,{nodeName:s}=t.currentTarget;if("A"===s.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);a.default.startTransition(()=>{f(r,n?"replace":"push",!1===l?d.ScrollBehavior.NoScroll:d.ScrollBehavior.Default,o.current,u)})}}(t,F,_,C,E,U,N)},onMouseEnter(e){w||"function"!=typeof L||L(e),w&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),$&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){w||"function"!=typeof k||k(e),w&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),$&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,f.isAbsoluteUrl)(F)?G.href=F:w&&!T&&("a"!==l.type||"href"in l.props)||(G.href=(0,p.addBasePath)(F)),g=w?a.default.cloneElement(l,G):(0,i.jsx)("a",{...I,...G,children:n}),(0,i.jsx)(b.Provider,{value:v,children:g})}e.r(84508);let b=(0,a.createContext)(h.IDLE_LINK_STATUS),v=()=>(0,a.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92258,e=>{"use strict";var t=e.i(43476),r=e.i(22016);let o=[{id:"xiaohongshu",name:"小红书文案生成",description:"一键生成爆款小红书笔记，包含标题、正文、标签",icon:"📖",color:"from-red-500 to-pink-500",href:"/tools/xiaohongshu",prompt:`你是一个小红书爆款文案专家。请根据用户提供的主题，生成一篇小红书笔记，要求：
1. 标题：吸引眼球，使用emoji，控制在20字以内
2. 正文：口语化、有场景感、分段清晰，每段1-2句，适当使用emoji
3. 标签：5-8个相关话题标签
4. 互动引导：结尾引导点赞收藏评论

主题：`},{id:"douyin",name:"抖音短视频脚本",description:"生成高完播率短视频脚本，含分镜、台词、BGM建议",icon:"🎬",color:"from-purple-500 to-indigo-500",href:"/tools/douyin",prompt:`你是一个抖音短视频脚本策划专家。请根据用户提供的主题，生成一个15-60秒的短视频脚本，包含：
1. 黄金3秒开头：制造悬念/冲突/反差，让人停下来
2. 分镜描述：每个镜头的画面内容
3. 台词/旁白：口语化、节奏感强
4. BGM建议：适合的背景音乐风格
5. 结尾钩子：引导互动（点赞/评论/关注）

主题：`},{id:"moments",name:"朋友圈文案",description:"打造高赞朋友圈，支持多种风格切换",icon:"✨",color:"from-blue-500 to-cyan-500",href:"/tools/moments",prompt:`你是一个朋友圈文案大师。请根据用户提供的场景，生成3条不同风格的朋友圈文案，风格分别为：
1. 文艺清新风：细腻感性、意境美
2. 幽默接地气：轻松有趣、有梗
3. 高级质感风：简洁有深度、不俗套

每条文案控制在50字以内，适当使用emoji。

场景：`},{id:"weekly-report",name:"工作周报生成",description:"把零碎工作变成专业周报，老板看了直点头",icon:"📊",color:"from-green-500 to-emerald-500",href:"/tools/weekly-report",prompt:`你是一个职场周报撰写专家。请根据用户提供的本周工作内容，生成一份专业的周报，格式如下：
1. 本周工作总结：提炼3-5项重点工作，每项用一句话概括成果
2. 关键数据/成果：量化工作产出
3. 遇到的挑战及解决方案：展示问题解决能力
4. 下周工作计划：2-3项明确计划
5. 需要的支持：如有

要求：用词专业、成果导向、避免流水账。

本周工作内容：`},{id:"seo-article",name:"SEO文章生成",description:"生成搜索引擎友好的高质量文章，提升排名",icon:"🔍",color:"from-orange-500 to-amber-500",href:"/tools/seo-article",prompt:`你是一个SEO内容优化专家。请根据用户提供的关键词和主题，生成一篇SEO友好的文章，要求：
1. 标题：包含核心关键词，吸引点击，控制在30字以内
2. 摘要：150字以内，包含关键词
3. 正文：800-1500字，自然融入关键词（密度2-3%），分段清晰，使用H2/H3子标题
4. 内链建议：3-5个可内链的锚文本
5. Meta描述：包含关键词，160字以内

关键词/主题：`},{id:"ecommerce-title",name:"电商标题优化",description:"生成高点击率电商商品标题，覆盖搜索热词",icon:"🛒",color:"from-teal-500 to-cyan-500",href:"/tools/ecommerce-title",prompt:`你是一个电商运营标题优化专家。请根据用户提供的商品信息，生成5个高点击率的商品标题，要求：
1. 每个标题控制在30字以内
2. 包含核心关键词和长尾词
3. 突出卖点和差异化
4. 符合平台规则（淘宝/京东/拼多多）
5. 5个标题分别侧重不同卖点角度

同时给出：
- 推荐的搜索关键词（10个）
- 标题设计思路说明

商品信息：`}];e.s(["default",0,function(){return(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto",children:o.map(e=>(0,t.jsx)(r.default,{href:e.href,children:(0,t.jsxs)("div",{className:"group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1",children:[(0,t.jsx)("div",{className:`absolute inset-0 bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-5 transition-opacity`}),(0,t.jsx)("div",{className:"text-4xl mb-3",children:e.icon}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:e.description})]})},e.id))})}],92258)}]);