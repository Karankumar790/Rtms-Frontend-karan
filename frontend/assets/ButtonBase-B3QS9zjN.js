import{r as a,R as X,b as w,_ as H,h as Ce,f as ae,k as G,m as be,n as le,j as B,d as g,e as Pe,Z as ue,p as ve}from"./index-C1yweR6j.js";const We=typeof window<"u"?a.useLayoutEffect:a.useEffect;function W(e){const t=a.useRef(e);return We(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}const ge={};function He(e,t){const n=a.useRef(ge);return n.current===ge&&(n.current=e(t)),n}const Ge=[];function Ze(e){a.useEffect(e,Ge)}class Z{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Z}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Je(){const e=He(Z.create).current;return Ze(e.disposeEffect),e}let J=!0,oe=!1;const Qe=new Z,et={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&et[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function nt(e){e.metaKey||e.altKey||e.ctrlKey||(J=!0)}function re(){J=!1}function rt(){this.visibilityState==="hidden"&&oe&&(J=!0)}function ot(e){e.addEventListener("keydown",nt,!0),e.addEventListener("mousedown",re,!0),e.addEventListener("pointerdown",re,!0),e.addEventListener("touchstart",re,!0),e.addEventListener("visibilitychange",rt,!0)}function it(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return J||tt(t)}function st(){const e=a.useCallback(r=>{r!=null&&ot(r.ownerDocument)},[]),t=a.useRef(!1);function n(){return t.current?(oe=!0,Qe.start(100,()=>{oe=!1}),t.current=!1,!0):!1}function s(r){return it(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:n,ref:e}}const Re=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},ie(e,t)}function at(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const ye=X.createContext(null);function lt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){var n=function(o){return t&&a.isValidElement(o)?t(o):o},s=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){s[r.key]=n(r)}),s}function ut(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var s=Object.create(null),r=[];for(var o in e)o in t?r.length&&(s[o]=r,r=[]):r.push(o);var i,c={};for(var u in t){if(s[u])for(i=0;i<s[u].length;i++){var p=s[u][i];c[s[u][i]]=n(p)}c[u]=n(u)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function $(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ct(e,t){return ce(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:$(n,"appear",e),enter:$(n,"enter",e),exit:$(n,"exit",e)})})}function pt(e,t,n){var s=ce(e.children),r=ut(t,s);return Object.keys(r).forEach(function(o){var i=r[o];if(a.isValidElement(i)){var c=o in t,u=o in s,p=t[o],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?r[o]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:$(i,"exit",e),enter:$(i,"enter",e)}):!u&&c&&!f?r[o]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(r[o]=a.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:$(i,"exit",e),enter:$(i,"enter",e)}))}}),r}var dt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ft={component:"div",childFactory:function(t){return t}},pe=function(e){at(t,e);function t(s,r){var o;o=e.call(this,s,r)||this;var i=o.handleExited.bind(lt(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var i=o.children,c=o.handleExited,u=o.firstRender;return{children:u?ct(r,c):pt(r,i,c),firstRender:!1}},n.handleExited=function(r,o){var i=ce(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var u=w({},c.children);return delete u[r.key],{children:u}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,c=H(r,["component","childFactory"]),u=this.state.contextValue,p=dt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?X.createElement(ye.Provider,{value:u},p):X.createElement(ye.Provider,{value:u},X.createElement(o,c,p))},t}(X.Component);pe.propTypes={};pe.defaultProps=ft;function ht(e){return Ce("MuiPaper",e)}ae("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const mt=["className","component","elevation","square","variant"],bt=e=>{const{square:t,elevation:n,variant:s,classes:r}=e,o={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return Pe(o,ht,r)},vt=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return w({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&w({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${be("#fff",Re(t.elevation))}, ${be("#fff",Re(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Ft=a.forwardRef(function(t,n){const s=le({props:t,name:"MuiPaper"}),{className:r,component:o="div",elevation:i=1,square:c=!1,variant:u="elevation"}=s,p=H(s,mt),f=w({},s,{component:o,elevation:i,square:c,variant:u}),m=bt(f);return B.jsx(vt,w({as:o,ownerState:f,className:g(m.root,r),ref:n},p))});function gt(e){const{className:t,classes:n,pulsate:s=!1,rippleX:r,rippleY:o,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,m]=a.useState(!1),v=g(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),T={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},h=g(n.child,f&&n.childLeaving,s&&n.childPulsate);return!c&&!f&&m(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),B.jsx("span",{className:v,style:T,children:B.jsx("span",{className:h})})}const b=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Rt=["center","classes","className"];let Q=e=>e,Ee,Me,xe,Te;const se=550,yt=80,Et=ue(Ee||(Ee=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Mt=ue(Me||(Me=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),xt=ue(xe||(xe=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Tt=G("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ct=G(gt,{name:"MuiTouchRipple",slot:"Ripple"})(Te||(Te=Q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),b.rippleVisible,Et,se,({theme:e})=>e.transitions.easing.easeInOut,b.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,b.child,b.childLeaving,Mt,se,({theme:e})=>e.transitions.easing.easeInOut,b.childPulsate,xt,({theme:e})=>e.transitions.easing.easeInOut),Pt=a.forwardRef(function(t,n){const s=le({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i}=s,c=H(s,Rt),[u,p]=a.useState([]),f=a.useRef(0),m=a.useRef(null);a.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const v=a.useRef(!1),T=Je(),h=a.useRef(null),R=a.useRef(null),O=a.useCallback(d=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:S,cb:K}=d;p(M=>[...M,B.jsx(Ct,{classes:{ripple:g(o.ripple,b.ripple),rippleVisible:g(o.rippleVisible,b.rippleVisible),ripplePulsate:g(o.ripplePulsate,b.ripplePulsate),child:g(o.child,b.child),childLeaving:g(o.childLeaving,b.childLeaving),childPulsate:g(o.childPulsate,b.childPulsate)},timeout:se,pulsate:y,rippleX:E,rippleY:D,rippleSize:S},f.current)]),f.current+=1,m.current=K},[o]),_=a.useCallback((d={},y={},E=()=>{})=>{const{pulsate:D=!1,center:S=r||y.pulsate,fakeElement:K=!1}=y;if((d==null?void 0:d.type)==="mousedown"&&v.current){v.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(v.current=!0);const M=K?null:R.current,L=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,k,I;if(S||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)C=Math.round(L.width/2),k=Math.round(L.height/2);else{const{clientX:F,clientY:P}=d.touches&&d.touches.length>0?d.touches[0]:d;C=Math.round(F-L.left),k=Math.round(P-L.top)}if(S)I=Math.sqrt((2*L.width**2+L.height**2)/3),I%2===0&&(I+=1);else{const F=Math.max(Math.abs((M?M.clientWidth:0)-C),C)*2+2,P=Math.max(Math.abs((M?M.clientHeight:0)-k),k)*2+2;I=Math.sqrt(F**2+P**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{O({pulsate:D,rippleX:C,rippleY:k,rippleSize:I,cb:E})},T.start(yt,()=>{h.current&&(h.current(),h.current=null)})):O({pulsate:D,rippleX:C,rippleY:k,rippleSize:I,cb:E})},[r,O,T]),U=a.useCallback(()=>{_({},{pulsate:!0})},[_]),j=a.useCallback((d,y)=>{if(T.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,T.start(0,()=>{j(d,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),m.current=y},[T]);return a.useImperativeHandle(n,()=>({pulsate:U,start:_,stop:j}),[U,_,j]),B.jsx(Tt,w({className:g(b.root,o.root,i),ref:R},c,{children:B.jsx(pe,{component:null,exit:!0,children:u})}))});function Vt(e){return Ce("MuiButtonBase",e)}const wt=ae("MuiButtonBase",["root","disabled","focusVisible"]),Lt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],kt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:r}=e,i=Pe({root:["root",t&&"disabled",n&&"focusVisible"]},Vt,r);return n&&s&&(i.root+=` ${s}`),i},It=G("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${wt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Nt=a.forwardRef(function(t,n){const s=le({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:v=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:O,onDragLeave:_,onFocus:U,onFocusVisible:j,onKeyDown:d,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:S,onTouchEnd:K,onTouchMove:M,onTouchStart:L,tabIndex:C=0,TouchRippleProps:k,touchRippleRef:I,type:F}=s,P=H(s,Lt),z=a.useRef(null),x=a.useRef(null),Ve=ve(x,I),{isFocusVisibleRef:de,onFocus:we,onBlur:Le,ref:ke}=st(),[N,Y]=a.useState(!1);p&&N&&Y(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[ee,Ie]=a.useState(!1);a.useEffect(()=>{Ie(!0)},[]);const Be=ee&&!f&&!p;a.useEffect(()=>{N&&v&&!f&&ee&&x.current.pulsate()},[f,v,N,ee]);function V(l,he,qe=m){return W(me=>(he&&he(me),!qe&&x.current&&x.current[l](me),!0))}const De=V("start",E),Fe=V("stop",O),Ne=V("stop",_),$e=V("stop",S),_e=V("stop",l=>{N&&l.preventDefault(),D&&D(l)}),je=V("start",L),Se=V("stop",K),Oe=V("stop",M),Ue=V("stop",l=>{Le(l),de.current===!1&&Y(!1),h&&h(l)},!1),Ke=W(l=>{z.current||(z.current=l.currentTarget),we(l),de.current===!0&&(Y(!0),j&&j(l)),U&&U(l)}),te=()=>{const l=z.current;return u&&u!=="button"&&!(l.tagName==="A"&&l.href)},ne=a.useRef(!1),ze=W(l=>{v&&!ne.current&&N&&x.current&&l.key===" "&&(ne.current=!0,x.current.stop(l,()=>{x.current.start(l)})),l.target===l.currentTarget&&te()&&l.key===" "&&l.preventDefault(),d&&d(l),l.target===l.currentTarget&&te()&&l.key==="Enter"&&!p&&(l.preventDefault(),R&&R(l))}),Ae=W(l=>{v&&l.key===" "&&x.current&&N&&!l.defaultPrevented&&(ne.current=!1,x.current.stop(l,()=>{x.current.pulsate(l)})),y&&y(l),R&&l.target===l.currentTarget&&te()&&l.key===" "&&!l.defaultPrevented&&R(l)});let q=u;q==="button"&&(P.href||P.to)&&(q=T);const A={};q==="button"?(A.type=F===void 0?"button":F,A.disabled=p):(!P.href&&!P.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Xe=ve(n,ke,z),fe=w({},s,{centerRipple:o,component:u,disabled:p,disableRipple:f,disableTouchRipple:m,focusRipple:v,tabIndex:C,focusVisible:N}),Ye=kt(fe);return B.jsxs(It,w({as:q,className:g(Ye.root,c),ownerState:fe,onBlur:Ue,onClick:R,onContextMenu:Fe,onFocus:Ke,onKeyDown:ze,onKeyUp:Ae,onMouseDown:De,onMouseLeave:_e,onMouseUp:$e,onDragLeave:Ne,onTouchEnd:Se,onTouchMove:Oe,onTouchStart:je,ref:Xe,tabIndex:p?-1:C,type:F},A,P,{children:[i,Be?B.jsx(Pt,w({ref:Ve,center:o},k)):null]}))});export{Nt as B,Ft as P,ye as T,at as _,W as a,st as b,Je as c,We as u};
