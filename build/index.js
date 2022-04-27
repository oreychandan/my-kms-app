'use strict';

const varTypeFn=()=>e=>e;const varTypeFnX=()=>e=>e;const effPassM=e=>t=>(e(t),t);const r$1=(e,t)=>(...n)=>t(e(...n));const o$1=e=>t=>e.forEach((e=>e(t))),i$1=r$1(o$1,effPassM),l=i$1,g$2=e=>(t,n)=>{const r=t[e];return void 0!==r?r:n};const V=(()=>{const e={SwitchObj:g$2,Do:l};return t=>{var n;return {In:e=>V(e(t)),Do:n=>V(e.Do(n)(t)),If:"string"==typeof t||"number"==typeof t?(n=t,(t,r)=>V(e.SwitchObj(n)(t,r))):void 0,in:e=>e(t),v:t}}})();const NOps=(()=>{const e=e=>{const t=Math.abs(Math.trunc(e)),n=(""+e).split(".")[1],r=void 0===n?"0":n;return {sign:e<0?-1:1,integer:Math.abs(t),decimal:r}},t=e=>Number(`${e.integer}.${e.decimal}`),n=(e,t)=>e.length>t.length?[e,t+Array(e.length-t.length).fill(null).reduce(((e,t)=>e+"0"),"")]:[e+Array(t.length-e.length).fill(null).reduce(((e,t)=>e+"0"),""),t],s=(e,t)=>{const r=e.integer*e.sign+t.integer*t.sign,[s,o]=n(e.decimal,t.decimal),c=""!==s?""+(Number(s)*e.sign+Number(o)*t.sign):"",i=c.length>s.length,l=c.startsWith("-");return {sign:1,integer:r+(i?l?-1:1:0),decimal:i?l?""+(Number(n("1",c)[0])+Number(c)):c.slice(1,c.length):c}},o=(e,t)=>s(e,{integer:t.integer,decimal:t.decimal,sign:-1*t.sign}),c=(e,t)=>{const n=""+(Number(e.decimal)*t.integer+Number(t.decimal)*e.integer),r=n.length>Math.max(e.decimal.length,t.decimal.length),o=r?Number(n[0]):0,c=r?n.slice(1,n.length):n,i={integer:e.integer*t.integer+o,decimal:c,sign:e.sign*t.sign};return i.decimal=s({integer:0,decimal:i.decimal,sign:1},{integer:0,decimal:"0"+Number(e.decimal)*Number(t.decimal),sign:1}).decimal,i},i=(n,r)=>c(n,e(1/t(r))),l=e=>(t,n)=>V([t,n].map(NOps.toNumInter)).In((([t,n])=>r$1(e,NOps.fromNumInter)(t,n))).v,a={add:l(s),sub:l(o),mul:l(c),div:l(i)};return {fromNumInter:t,toNumInter:e,add:s,sub:o,mult:c,div:i,q:a}})();const h$1=e=>"object"!=typeof e&&"function"!=typeof e,m$1=(e,t)=>{const n=e===t;if(n)return !0;if(h$1(e))return !!h$1(t)&&n;{const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(0===n.length||void 0===n.find((n=>e[n]!==t[n])))}},d$1=(e,t)=>{const n=e===t;if(n)return !0;if(h$1(e))return !!h$1(t)&&n;{const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(0===n.length||void 0===n.find((n=>!d$1(e[n],t[n]))))}};const Expect=(()=>{const e=e=>{const t=(t,n)=>({match:r=>()=>{const s=e(),o=t(s,r);return {_type:n,hasPassed:o,v2:r,v:s}}});return {is:t(((e,t)=>e===t),"is").match,matchesShallow:t(m$1,"matchesShallow").match,matchesDeep:t(d$1,"matchesDeep").match,customMatch:t}};return Object.assign(e,{$:{describe:(e,t)=>({run:()=>{console.group("Test: "+e),t.forEach(((e,t)=>{const n=e();n.hasPassed||(console.groupCollapsed("Failed Test at index "+t),console.log({Expect:n.v,[n._type]:n.v2}),console.groupEnd());})),console.groupEnd();},skip:()=>{console.groupCollapsed("Skipped Test: "+e),console.groupEnd();}}),_:e}})})();

const s$2=e=>Object.freeze(e),n$1={true:e=>!0===e,false:e=>!1===e,not:e=>!e,notEq:(e,t)=>e!==t,any:(...e)=>e.reduce(((e,t)=>e||t)),all:e=>e.reduce(((e,t)=>e&&t)),if:e=>s$2({get:t=>s$2({elseGet:r=>e?t(e):r})})};const c$1=e=>t=>t(e);const O=(()=>{class e{constructor(e,t){this.get=e,this.refresh=t;}}return t=>{let r;return new e((()=>(void 0===r&&(r=t()),r)),t)}})(),D=e=>{const{doNextIf:t,init:r,newState:s}=e;let n=r;for(;t(n);)n=s(n);return n};D({init:0,doNextIf:e=>e<=50,newState:e=>e+1});s$2({encode:s$2({pow:(e,t=1)=>[e,"POW",t],root:(e,t=1)=>[e,"ROOT",1/t],add:(e,t=0)=>[e,"ADD",t],sub:(e,t=0)=>[e,"SUB",t],mul:(e,t=1)=>[e,"MUL",t],div:(e,t=1)=>[e,"DIV",t]}),decode:s$2({pow:e=>Math.pow(e[0],e[2]),add:e=>e[0]+e[2],mul:e=>e[0]+e[2]}),inverse:e=>n$1.if("ADD"===e[1]).get((()=>[e[0],"SUB",e[2]])).elseGet((()=>e))});const T=(e,t)=>r=>t(e(r)),U=(e,t)=>r=>e(t(r)),F=e=>s$2({in:t=>c$1(T(e,t))((e=>s$2({feedData:e,in:F(e).in})))}),M=e=>s$2({feed:t=>c$1(U(e,t))((e=>s$2({feedData:e,feed:M(e).feed})))});s$2({f:F,l:M});

const{CamelToKebab:CamelToKebab,processWebkit:processWebkit,styleKeyIsVar:styleKeyIsVar}={styleKeyIsVar:i=>i.startsWith("$"),CamelToKebab:i=>i.replace(/[A-Z]/g,(i=>"-"+i)).toLocaleLowerCase(),processWebkit:i=>"webkit"===i.split("-")[0]?"-"+i:i};const CSSCamelToKebabMap=O((()=>{const o={accentColor:void 0,alignContent:void 0,alignItems:void 0,alignSelf:void 0,alignmentBaseline:void 0,all:void 0,animation:void 0,animationDelay:void 0,animationDirection:void 0,animationDuration:void 0,animationFillMode:void 0,animationIterationCount:void 0,animationName:void 0,animationPlayState:void 0,animationTimingFunction:void 0,appearance:void 0,aspectRatio:void 0,backfaceVisibility:void 0,background:void 0,backgroundAttachment:void 0,backgroundBlendMode:void 0,backgroundClip:void 0,backgroundColor:void 0,backgroundImage:void 0,backgroundOrigin:void 0,backgroundPosition:void 0,backgroundPositionY:void 0,backgroundPositionX:void 0,backgroundRepeat:void 0,backgroundSize:void 0,baselineShift:void 0,blockSize:void 0,border:void 0,borderBlock:void 0,borderBlockColor:void 0,borderBlockEnd:void 0,borderBlockEndColor:void 0,borderBlockEndStyle:void 0,borderBlockEndWidth:void 0,borderBlockStart:void 0,borderBlockStartColor:void 0,borderBlockStartStyle:void 0,borderBlockStartWidth:void 0,borderBlockStyle:void 0,borderBlockWidth:void 0,borderBottom:void 0,borderBottomColor:void 0,borderBottomLeftRadius:void 0,borderBottomRightRadius:void 0,borderBottomStyle:void 0,borderBottomWidth:void 0,borderCollapse:void 0,borderColor:void 0,borderEndEndRadius:void 0,borderEndStartRadius:void 0,borderImage:void 0,borderImageOutset:void 0,borderImageRepeat:void 0,borderImageSlice:void 0,borderImageSource:void 0,borderImageWidth:void 0,borderInline:void 0,borderInlineColor:void 0,borderInlineEnd:void 0,borderInlineEndColor:void 0,borderInlineEndStyle:void 0,borderInlineEndWidth:void 0,borderInlineStart:void 0,borderInlineStartColor:void 0,borderInlineStartStyle:void 0,borderInlineStartWidth:void 0,borderInlineStyle:void 0,borderInlineWidth:void 0,borderLeft:void 0,borderLeftColor:void 0,borderLeftStyle:void 0,borderLeftWidth:void 0,borderRadius:void 0,borderRight:void 0,borderRightColor:void 0,borderRightStyle:void 0,borderRightWidth:void 0,borderSpacing:void 0,borderStartEndRadius:void 0,borderStartStartRadius:void 0,borderStyle:void 0,borderTop:void 0,borderTopColor:void 0,borderTopLeftRadius:void 0,borderTopRightRadius:void 0,borderTopStyle:void 0,borderTopWidth:void 0,borderWidth:void 0,bottom:void 0,boxShadow:void 0,boxSizing:void 0,breakAfter:void 0,breakBefore:void 0,breakInside:void 0,captionSide:void 0,caretColor:void 0,clear:void 0,clip:void 0,clipPath:void 0,clipRule:void 0,color:void 0,colorInterpolation:void 0,colorInterpolationFilters:void 0,colorScheme:void 0,columnCount:void 0,columnFill:void 0,columnGap:void 0,columnRule:void 0,columnRuleColor:void 0,columnRuleStyle:void 0,columnRuleWidth:void 0,columnSpan:void 0,columnWidth:void 0,columns:void 0,contain:void 0,content:void 0,counterIncrement:void 0,counterReset:void 0,counterSet:void 0,cssFloat:void 0,cssText:void 0,cursor:void 0,direction:void 0,display:void 0,dominantBaseline:void 0,emptyCells:void 0,fill:void 0,fillOpacity:void 0,fillRule:void 0,filter:void 0,flex:void 0,flexBasis:void 0,flexDirection:void 0,flexFlow:void 0,flexGrow:void 0,flexShrink:void 0,flexWrap:void 0,float:void 0,floodColor:void 0,floodOpacity:void 0,font:void 0,fontFamily:void 0,fontFeatureSettings:void 0,fontKerning:void 0,fontOpticalSizing:void 0,fontSize:void 0,fontSizeAdjust:void 0,fontStretch:void 0,fontStyle:void 0,fontSynthesis:void 0,fontVariant:void 0,fontVariantAlternates:void 0,fontVariantCaps:void 0,fontVariantEastAsian:void 0,fontVariantLigatures:void 0,fontVariantNumeric:void 0,fontVariantPosition:void 0,fontVariationSettings:void 0,fontWeight:void 0,gap:void 0,getPropertyPriority:void 0,getPropertyValue:void 0,grid:void 0,gridArea:void 0,gridAutoColumns:void 0,gridAutoFlow:void 0,gridAutoRows:void 0,gridColumn:void 0,gridColumnEnd:void 0,gridColumnGap:void 0,gridColumnStart:void 0,gridGap:void 0,gridRow:void 0,gridRowEnd:void 0,gridRowGap:void 0,gridRowStart:void 0,gridTemplate:void 0,gridTemplateAreas:void 0,gridTemplateColumns:void 0,gridTemplateRows:void 0,height:void 0,hyphens:void 0,imageOrientation:void 0,imageRendering:void 0,inlineSize:void 0,inset:void 0,insetBlock:void 0,insetBlockEnd:void 0,insetBlockStart:void 0,insetInline:void 0,insetInlineEnd:void 0,insetInlineStart:void 0,isolation:void 0,item:void 0,justifyContent:void 0,justifyItems:void 0,justifySelf:void 0,left:void 0,length:void 0,letterSpacing:void 0,lightingColor:void 0,lineBreak:void 0,lineHeight:void 0,listStyle:void 0,listStyleImage:void 0,listStylePosition:void 0,listStyleType:void 0,margin:void 0,marginBlock:void 0,marginBlockEnd:void 0,marginBlockStart:void 0,marginBottom:void 0,marginInline:void 0,marginInlineEnd:void 0,marginInlineStart:void 0,marginLeft:void 0,marginRight:void 0,marginTop:void 0,marker:void 0,markerEnd:void 0,markerMid:void 0,markerStart:void 0,mask:void 0,maskType:void 0,maxBlockSize:void 0,maxHeight:void 0,maxInlineSize:void 0,maxWidth:void 0,minBlockSize:void 0,minHeight:void 0,minInlineSize:void 0,minWidth:void 0,mixBlendMode:void 0,objectFit:void 0,objectPosition:void 0,offset:void 0,offsetAnchor:void 0,offsetDistance:void 0,offsetPath:void 0,offsetRotate:void 0,opacity:void 0,order:void 0,orphans:void 0,outline:void 0,outlineColor:void 0,outlineOffset:void 0,outlineStyle:void 0,outlineWidth:void 0,overflow:void 0,overflowAnchor:void 0,overflowWrap:void 0,overflowX:void 0,overflowY:void 0,overscrollBehavior:void 0,overscrollBehaviorBlock:void 0,overscrollBehaviorInline:void 0,overscrollBehaviorX:void 0,overscrollBehaviorY:void 0,padding:void 0,paddingBlock:void 0,paddingBlockEnd:void 0,paddingBlockStart:void 0,paddingBottom:void 0,paddingInline:void 0,paddingInlineEnd:void 0,paddingInlineStart:void 0,paddingLeft:void 0,paddingRight:void 0,paddingTop:void 0,pageBreakAfter:void 0,pageBreakBefore:void 0,pageBreakInside:void 0,paintOrder:void 0,parentRule:void 0,perspective:void 0,perspectiveOrigin:void 0,placeContent:void 0,placeItems:void 0,placeSelf:void 0,pointerEvents:void 0,position:void 0,quotes:void 0,removeProperty:void 0,resize:void 0,right:void 0,rotate:void 0,rowGap:void 0,rubyPosition:void 0,scale:void 0,scrollBehavior:void 0,scrollMargin:void 0,scrollMarginBlock:void 0,scrollMarginBlockEnd:void 0,scrollMarginBlockStart:void 0,scrollMarginBottom:void 0,scrollMarginInline:void 0,scrollMarginInlineEnd:void 0,scrollMarginInlineStart:void 0,scrollMarginLeft:void 0,scrollMarginRight:void 0,scrollMarginTop:void 0,scrollPadding:void 0,scrollPaddingBlock:void 0,scrollPaddingBlockEnd:void 0,scrollPaddingBlockStart:void 0,scrollPaddingBottom:void 0,scrollPaddingInline:void 0,scrollPaddingInlineEnd:void 0,scrollPaddingInlineStart:void 0,scrollPaddingLeft:void 0,scrollPaddingRight:void 0,scrollPaddingTop:void 0,scrollSnapAlign:void 0,scrollSnapStop:void 0,scrollSnapType:void 0,scrollbarGutter:void 0,shapeImageThreshold:void 0,shapeMargin:void 0,shapeOutside:void 0,shapeRendering:void 0,stopColor:void 0,stopOpacity:void 0,stroke:void 0,strokeDasharray:void 0,strokeDashoffset:void 0,strokeLinecap:void 0,strokeLinejoin:void 0,strokeMiterlimit:void 0,strokeOpacity:void 0,strokeWidth:void 0,tabSize:void 0,tableLayout:void 0,textAlign:void 0,textAlignLast:void 0,textAnchor:void 0,textCombineUpright:void 0,textDecoration:void 0,textDecorationColor:void 0,textDecorationLine:void 0,textDecorationSkipInk:void 0,textDecorationStyle:void 0,textDecorationThickness:void 0,textEmphasis:void 0,textEmphasisColor:void 0,textEmphasisPosition:void 0,textEmphasisStyle:void 0,textIndent:void 0,textOrientation:void 0,textOverflow:void 0,textRendering:void 0,textShadow:void 0,textTransform:void 0,textUnderlineOffset:void 0,textUnderlinePosition:void 0,top:void 0,touchAction:void 0,transform:void 0,transformBox:void 0,transformOrigin:void 0,transformStyle:void 0,transition:void 0,transitionDelay:void 0,transitionDuration:void 0,transitionProperty:void 0,transitionTimingFunction:void 0,translate:void 0,unicodeBidi:void 0,userSelect:void 0,verticalAlign:void 0,visibility:void 0,webkitAlignContent:void 0,webkitAlignItems:void 0,webkitAlignSelf:void 0,webkitAnimation:void 0,webkitAnimationDelay:void 0,webkitAnimationDirection:void 0,webkitAnimationDuration:void 0,webkitAnimationFillMode:void 0,webkitAnimationIterationCount:void 0,webkitAnimationName:void 0,webkitAnimationPlayState:void 0,webkitAnimationTimingFunction:void 0,webkitAppearance:void 0,webkitBackfaceVisibility:void 0,webkitBackgroundClip:void 0,webkitBackgroundOrigin:void 0,webkitBackgroundSize:void 0,webkitBorderBottomLeftRadius:void 0,webkitBorderBottomRightRadius:void 0,webkitBorderRadius:void 0,webkitBorderTopLeftRadius:void 0,webkitBorderTopRightRadius:void 0,webkitBoxAlign:void 0,webkitBoxFlex:void 0,webkitBoxOrdinalGroup:void 0,webkitBoxOrient:void 0,webkitBoxPack:void 0,webkitBoxShadow:void 0,webkitBoxSizing:void 0,webkitFilter:void 0,webkitFlex:void 0,webkitFlexBasis:void 0,webkitFlexDirection:void 0,webkitFlexFlow:void 0,webkitFlexGrow:void 0,webkitFlexShrink:void 0,webkitFlexWrap:void 0,webkitJustifyContent:void 0,webkitLineClamp:void 0,webkitMask:void 0,webkitMaskBoxImage:void 0,webkitMaskBoxImageOutset:void 0,webkitMaskBoxImageRepeat:void 0,webkitMaskBoxImageSlice:void 0,webkitMaskBoxImageSource:void 0,webkitMaskBoxImageWidth:void 0,webkitMaskClip:void 0,webkitMaskComposite:void 0,webkitMaskImage:void 0,webkitMaskOrigin:void 0,webkitMaskPosition:void 0,webkitMaskRepeat:void 0,webkitMaskSize:void 0,webkitOrder:void 0,webkitPerspective:void 0,webkitPerspectiveOrigin:void 0,webkitTapHighlightColor:void 0,webkitTextFillColor:void 0,webkitTextStroke:void 0,webkitTextStrokeColor:void 0,webkitTextStrokeWidth:void 0,webkitTransform:void 0,webkitTransformOrigin:void 0,webkitTransformStyle:void 0,webkitTransition:void 0,webkitTransitionDelay:void 0,webkitTransitionDuration:void 0,webkitTransitionProperty:void 0,webkitTransitionTimingFunction:void 0,webkitUserSelect:void 0,whiteSpace:void 0,widows:void 0,width:void 0,willChange:void 0,wordBreak:void 0,wordSpacing:void 0,wordWrap:void 0,writingMode:void 0,zIndex:void 0};return Object.entries(o).forEach((([i])=>o[i]=processWebkit(CamelToKebab(i)))),s$2(o)})).get;

const {CamelToKebab:n,processWebkit:a,styleKeyIsVar:s$1}={styleKeyIsVar:e=>e.startsWith("$"),CamelToKebab:e=>e.replace(/[A-Z]/g,(e=>"-"+e)).toLocaleLowerCase(),processWebkit:e=>"webkit"===e.split("-")[0]?"-"+e:e};const applyStylesM=e=>o=>{Object.keys(e).forEach((t=>{const l=(e=>{if(void 0!==e)return e;if(s$1(t))return "--"+t.split("$")[1];{const e=a(n(t));return console.warn({debug:{key:t,temp:e}}),e}})(CSSCamelToKebabMap()[t]),i=e[t];o.style.getPropertyValue(l)!==i&&o.style.setProperty(l,i);}));};const R=(e,o)=>document.createElement(e,o);const childrenM=e=>o=>e.forEach((e=>{void 0!==e&&o.appendChild(e);}));const d=e=>applyStylesM(e)(document.querySelector("body")),c=varTypeFnX(),u=e=>`calc(${e})`,p=e=>`var(--${e})`,b=e=>"$"+e,g$1={square:(o,t="layout-square-value")=>V(p(t)).In((e=>c({[b(t)]:o,height:e,width:e}))).v,padding:(o,t="layout-padding-value")=>V(p(t)).In((e=>c({[b(t)]:o,paddingLeft:e,paddingRight:e,paddingTop:e,paddingBottom:e}))).v,borderRadius:(o,t="layout-borderRadius-value")=>V(p(t)).In((e=>c({["$"+t]:o,borderTopLeftRadius:e,borderTopRightRadius:e,borderBottomRightRadius:e,borderBottomLeftRadius:e}))).v,flexContainer:(e="row")=>c({display:"flex",flexDirection:e})},h=Object.assign({fullscreen:c({height:"100vh",width:"100vw",boxSizing:"border-box"}),expandAvailable:c({height:"100%",width:"100%"}),noScroll:c({overflowX:"hidden",overflowY:"hidden"}),borderRound:g$1.borderRadius("100vmax")},g$1),v={apply:{noPullToRefresh:()=>(d({overscrollBehaviorY:"contain"}),{}),disableDoubleTapZoom:()=>{d({});}}},y={Layout:h,Behavior:v};const DomEventM=(e,o,t)=>r=>{r.addEventListener(e,(e=>o(e,r)),{capture:null==t?void 0:t.capture,once:null==t?void 0:t.once,passive:null==t?void 0:t.passive,signal:null==t?void 0:t.signal});};

const s=t=>s=>{var e,r;const o=(null===(e=t.filterMap)||void 0===e?void 0:e.map)?t.filterMap.map(s):s;(null===(r=t.filterMap)||void 0===r?void 0:r.filter)&&!t.filterMap.filter(o)||Promise.all(t.cbs.map((t=>t(o))));},e=t=>s=>{t.cbs.includes(s.cb)||(s.priority?t.cbs.unshift(s.cb):t.cbs.push(s.cb));},r=t=>s=>{const e=t.cbs.indexOf(s);-1!==e&&t.cbs.splice(e,1);};class Broadcaster{constructor(t){this.publish=s(t);}}class o{constructor(t){this.sub=e(t),this.unsub=r(t);}}const publisherCreate=(...t)=>{const s={cbs:[],filterMap:t[0]};return {broadcaster:new Broadcaster(s),client:new o(s)}};

const observable=(s,t)=>{const l=(null==t?void 0:t.map)?t.map:e=>e;let r=s,o=s;const c=publisherCreate({map:e=>[e,o]}),i=e=>{const s=l(e);(null==t?void 0:t.pick)&&!t.pick([e,r])||(c.broadcaster.publish(s),r=e,o=s);};return {publisher:{publish:i,reset:()=>{i(s);}},client:Object.assign(Object.assign({},c.client),{value:()=>o})}};const clientMerge={combinedPassthrough:e=>()=>{let s=e.map((e=>e.value()));const t=observable([...s]);return e.forEach(((e,l)=>e.sub({cb:e=>{s[l]=e[0],t.publisher.publish([...s]);}}))),t}};

const i=(()=>{const e=e=>{const n=e.startsWith("-")?-1:1,[i,t]=(()=>{const i=(1===n?e:e.slice(1,e.length)).split(".");return 1===i.length?[i[0],""]:i})(),r=e=>""===e?[]:e.split("").map(Number);return {sign:n,integer:r(i),decimal:r(t)}},n=e=>`${1===e.sign?"":"-"}${e.integer.join("")}${0===e.decimal.length?"":"."+e.decimal.join("")}`,i=i=>"string"==typeof i?e(i):n(i);return i({sign:1,integer:[],decimal:[]}),Object.assign(i,{$:{_:i,from:e,to:n}})})();console.group("Math.ts");const t$1=varTypeFn()([["0",{sign:1,integer:[0],decimal:[]}],["-0",{sign:-1,integer:[0],decimal:[]}],["-1",{sign:-1,integer:[1],decimal:[]}],["0.1",{sign:1,integer:[0],decimal:[1]}],["-0.1",{sign:-1,integer:[0],decimal:[1]}]]);Expect.$.describe("Number Interop from number",[...t$1.map((e=>Expect((()=>i(e[0]))).matchesDeep(e[1])))]).run(),Expect.$.describe("Number Interop to number",[...t$1.map((e=>Expect((()=>i(e[1]))).is(e[0])))]).run();const N=(()=>{const t=e=>({sign:e.sign,integer:0===e.integer.length?[0]:e.integer,decimal:0===e.decimal.length?[0]:e.decimal}),r=(e,n)=>[t(e),t(n)],g=(e,n)=>{const[i,t]=(()=>{if(e.integer.length===n.integer.length)return [e.integer,n.integer];const i=e.integer.length>n.integer.length,t=Math.abs(e.integer.length-n.integer.length);return i?[e.integer,Array(t).fill(0).concat(n.integer)]:[Array(t).fill(0).concat(e.integer),n.integer]})(),[r,g]=(()=>{if(e.decimal.length===n.decimal.length)return [e.decimal,n.decimal];const i=e.decimal.length>n.decimal.length,t=Math.abs(e.decimal.length-n.decimal.length);return i?[e.decimal,n.decimal.concat(Array(t).fill(0))]:[e.decimal.concat(Array(t).fill(0)),n.decimal]})();return [{sign:e.sign,integer:i,decimal:r},{sign:n.sign,integer:t,decimal:g}]};Expect.$.describe("normalize functions",varTypeFn()([[[{sign:1,integer:[],decimal:[]},{sign:1,integer:[],decimal:[]}],[{sign:1,integer:[0],decimal:[0]},{sign:1,integer:[0],decimal:[0]}]],[[{sign:1,integer:[],decimal:[0,0,1]},{sign:1,integer:[],decimal:[1]}],[{sign:1,integer:[0],decimal:[0,0,1]},{sign:1,integer:[0],decimal:[1,0,0]}]]]).map((e=>Expect((()=>g(...r(...e[0])))).matchesDeep(e[1])))).run();const c=e=>{if(e.length<2)return e;let n=!1;const i=[];return e.forEach(((e,t)=>{n||0===e||(n=!0),n&&i.push(e);})),i},l=(e,n)=>{const[i,t]=r(e,n),[l,s]=g(i,t),{decIndex:a,a3:d,b3:m}={decIndex:l.integer.length,a3:l.integer.concat(l.decimal).reverse(),b3:s.integer.concat(s.decimal).reverse()},o=Array(d.length).fill(0),h=(e,n,i,t,r)=>{let g=0;return e.forEach(((e,c)=>{const l=e*n+i[c]*t+g,s=l>10?l-10:l<0?10+l:l;r[c]=s,g=l>10?1:l<0?-1:0;})),g},u=h(d,e.sign,m,n.sign,o);1===u?o.push(1):-1===u&&(o.push(0),h([...Array(o.length-1).fill(0),1],1,[...o],-1,o),o.splice(o.length-1,1));const b=1===u?a+1:a,{int_1:p,dec_1:f}=(()=>{const e=o.reverse();return {int_1:e.slice(0,b),dec_1:e.slice(b,o.length)}})(),{integer:$,decimal:v}=(y=f,{integer:c(p),decimal:c(y.reverse()).reverse()});var y;return {sign:-1===u?-1:1,integer:0===e.integer.length&&0===n.integer.length?[]:$,decimal:0===e.decimal.length&&0===n.decimal.length?[]:v}},s={add:(e,n)=>i(l(i(e),i(n))),sub:(e,n)=>{return i((t=i(e),r=i(n),l(t,Object.assign(Object.assign({},r),{sign:-1*r.sign}))));var t,r;},normalizeNumStr:e=>i(t(i(e)))},a=varTypeFn()([[["0","0"],"0"],[["1","0"],"1"],[["0","1"],"1"],[["9","1"],"10"],[["0.1","0.2"],"0.3"],[["0.1","0.02"],"0.12"],[["0.0","0.02"],"0.02"],[["0","0.02"],"0.02"],[["",""],""],[["1",""],"1"],[[".1",".2"],".3"],[[".1",".02"],".12"],[["",".02"],".02"],[["",".02"],".02"],[["12","3"],"15"],[["8","4"],"12"]]),d=varTypeFn()([[["2","-1"],"1"],[["-1","2"],"1"],[["1","-3"],"-2"],[["1","-13"],"-12"],[["-1","-2"],"-3"],[["1","-3"],"-2"],[["12","-4"],"8"],[["-12","4"],"-8"],[["-12","2.5"],"-9.5"],[["0.2","-0.1"],"0.1"],[["1.2","-0.5"],"0.7"],[["1.201","-0.501"],"0.7"],[[".2","-.1"],".1"],[["1.2","-.5"],"0.7"],[["1.201","-.501"],"0.7"]]);return Expect.$.describe("add addition only",a.map((e=>Expect((()=>s.add(...e[0]))).is(e[1])))).run(),Expect.$.describe("add addition with negative numbers",d.map((e=>Expect((()=>s.add(...e[0]))).is(e[1])))).run(),Expect.$.describe("sub",varTypeFn()([[["0","0"],"0"],[["1","0"],"1"],[["0","1"],"-1"],[["2","-1"],"3"]]).map((e=>Expect((()=>s.sub(...e[0]))).is(e[1])))).run(),{q:s}})();console.groupEnd();

const g=()=>V(R("div")),m=()=>V(R("button")),x=(()=>{const e=observable(""),i=observable("0"),r=publisherCreate(),l={plus:(e,i)=>Number(N.q.add(""+e,""+i)),minus:(e,i)=>Number(N.q.sub(""+e,""+i)),multiply:(e,i)=>V([e,i].map(NOps.toNumInter)).In((([e,i])=>NOps.mult(e,i))).in(NOps.fromNumInter),divide:(e,i)=>V([e,i].map(NOps.toNumInter)).In((([e,i])=>NOps.div(e,i))).in(NOps.fromNumInter)},n=observable(""),t=clientMerge.combinedPassthrough([e.client,n.client])();t.client.sub({cb:e=>console.log({mergeTest2:e})});const s=r=>{const l=n.client.value();n.publisher.publish(r),""===l&&(e.publisher.publish(i.client.value()),i.publisher.reset());},o={ops:{plus:e=>{s("plus");},minus:e=>{s("minus");},divide:e=>{s("divide");},multiply:e=>{s("multiply");}},other:{dot:e=>{e.includes(".")||i.publisher.publish(i.client.value()+".");},sign:e=>{e.startsWith("-")?i.publisher.publish(e.slice(1,e.length)):i.publisher.publish("-"+e);},backSpc:e=>{const r=e.startsWith("-");1===(r?e.slice(1,e.length):e).length?i.publisher.publish((r?"-":"")+"0"):i.publisher.publish(""+e.slice(0,e.length-1));},clrE:()=>{i.publisher.reset();},clr:()=>{e.publisher.reset(),i.publisher.reset(),n.publisher.reset();},eql:()=>{if(""===n.client.value())return;const r=l[n.client.value()](Number(e.client.value()),Number(i.client.value()));i.publisher.publish(""+r),e.publisher.reset(),n.publisher.reset();}}};return r.client.sub({cb:e=>{const r=i.client.value();if("num"===e._type){const l=r.startsWith("-");"0"!==(l?r.slice(1,r.length):r)?i.publisher.publish(`${r}${e.val}`):"0"!==e.val&&i.publisher.publish(`${l?"-":""}${e.val}`);}else o[e._type][e.val](r);}}),{displayAgg:t.client,n2:i.client,currOperator:n.client,inputsMain:r.broadcaster}})();const MyApp8=()=>{const r={container:g(),display:g(),displayAgg:g(),displayContent:g(),signOp:m(),dotOp:m(),plus:m(),minus:m(),multiply:m(),divide:m(),clr:m(),clrE:m(),backSpc:m(),eql:m()},{container:p$1,display:u$1,displayAgg:b,displayContent:d,dotOp:h,signOp:v,plus:y$1,minus:f,multiply:k,divide:D,clr:A,clrE:E,backSpc:T,eql:O}=r,S=[m(),m(),m(),m(),m(),m(),m(),m(),m(),m()];p$1.Do([childrenM([...[u$1.Do([childrenM([b.v,d.v])]),...S,h,v,y$1,f,k,D,A,E,T,O].map((e=>e.v))])]);const q=varTypeFn()({container:Object.assign(Object.assign({$size:"60px",width:""+u(p("size")+" * 4"),height:""+u(p("size")+" * 6")},y.Layout.padding("5px")),{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(6, 1fr)",gridTemplateAreas:"\n      'd d d d'\n      'n1 n2 n3 a1'\n      'n4 n5 n6 a2'\n      'n7 n8 n9 a3'\n      'sign n0 dot a4'\n      'clr clrE backSpc eql'\n      ",gap:"5px",backgroundColor:"#33146a"}),display:Object.assign(Object.assign({gridArea:"d",display:"grid"},y.Layout.padding("5px")),{backgroundColor:"#673ab7"}),displayAgg:{color:"antiquewhite",justifySelf:"start",alignSelf:"start"},displayContent:{color:"antiquewhite",justifySelf:"end",alignSelf:"end"},dotOp:{gridArea:"dot",boxSizing:"border-box",fontSize:"2rem",backgroundColor:"#607d8b"},signOp:{gridArea:"sign",boxSizing:"border-box",backgroundColor:"#607d8b"},plus:{gridArea:"a1"},minus:{gridArea:"a2"},multiply:{gridArea:"a3"},divide:{gridArea:"a4"},clr:{gridArea:"clr"},clrE:{gridArea:"clrE"},backSpc:{gridArea:"backSpc"},eql:{gridArea:"eql"}});var C;C=r,Object.entries(q).forEach((([i,r])=>{C[i].Do([applyStylesM(r)]);})),h.Do([e=>e.innerText=".",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"dot"})))]),v.Do([e=>e.innerText="+/-",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"sign"})))]),O.Do([e=>e.innerText="=",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"eql"})))]),T.Do([e=>e.innerText="<-",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"backSpc"})))]),A.Do([e=>e.innerText="C",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"clr"})))]),E.Do([e=>e.innerText="CE",DomEventM("click",((e,i)=>x.inputsMain.publish({_type:"other",val:"clrE"})))]);publisherCreate();const j={plus:"+",minus:"-",divide:"/",multiply:"x"};return x.displayAgg.sub({cb:([e])=>b.Do([i=>i.innerText=`${e[0]} ${""===e[1]?"":j[e[1]]}`])}),b.Do([e=>V(x.displayAgg.value()).Do([i=>e.innerText=`${i[0]} ${""===i[1]?"":j[i[1]]}`])]),x.n2.sub({cb:([e])=>d.Do([i=>i.innerText=""+e])}),d.Do([e=>e.innerText=""+x.n2.value()]),S.forEach(((i,r)=>i.Do([applyStylesM({gridArea:"n"+r}),e=>e.innerText=""+r,DomEventM("click",(()=>x.inputsMain.publish({_type:"num",val:""+r})))]))),[y$1,f,k,D,...S].forEach((i=>i.Do([applyStylesM({boxSizing:"border-box"})]))),[h,v,...S].forEach((i=>i.Do([applyStylesM({backgroundColor:"#b79de7"})]))),[y$1,f,k,D].forEach(((e,i)=>e.Do([e=>e.innerText=["+","-","x","/"][i],DomEventM("click",(()=>x.inputsMain.publish({_type:"ops",val:["plus","minus","multiply","divide"][i]})))]))),[y$1,f,k,D,A,E,T,O].forEach(((i,r)=>i.Do([applyStylesM({backgroundColor:"#673ab7",color:"antiquewhite"})]))),[y$1,f,k,D,...S,h,v,A,E,T,O].forEach((r=>r.Do([applyStylesM(Object.assign(Object.assign({},y.Layout.borderRadius("10px")),{cursor:"pointer"}))]))),p$1.v};

const t=(r,t)=>{const c=document.querySelector("body");V(c).Do([applyStylesM(Object.assign({margin:"unset"},t)),childrenM([r()])]);};t(MyApp8,Object.assign(Object.assign({},y.Layout.fullscreen),{backgroundColor:"grey"}));
