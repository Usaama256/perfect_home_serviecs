import{_ as p,bn as W,bo as k,bp as m,bq as v,r as $,b as G,j as R,e as S,br as T,bs as M,s as P,h as y,u as j}from"./index-f05f604f.js";const L=["className","component","disableGutters","fixed","maxWidth","classes"],N=W(),_=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${m(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),z=a=>v({props:a,name:"MuiContainer",defaultTheme:N}),U=(a,e)=>{const o=i=>M(e,i),{classes:u,fixed:c,disableGutters:l,maxWidth:t}=a,s={root:["root",t&&`maxWidth${m(String(t))}`,c&&"fixed",l&&"disableGutters"]};return T(s,o,u)};function w(a={}){const{createStyledComponent:e=_,useThemeProps:o=z,componentName:u="MuiContainer"}=a,c=e(({theme:t,ownerState:s})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>p({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return $.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=G(n,L),x=p({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=U(x,u);return R(c,p({as:r,ownerState:x,className:S(h.root,d),ref:i},g))})}const q=w({createStyledComponent:P("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${y(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>j({props:a,name:"MuiContainer"})}),E=q;export{E as C};