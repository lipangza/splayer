import{l as e,n,q as r,d as t,e as a,B as i,bC as o,g as s,b4 as l,D as d,h}from"./index-62a86a6d.js";const c=e("h","\n font-size: var(--n-font-size);\n font-weight: var(--n-font-weight);\n margin: var(--n-margin);\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n",[n("&:first-child",{marginTop:0}),r("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[r("align-text",{paddingLeft:0},[n("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),n("&::before",'\n content: "";\n width: var(--n-bar-width);\n border-radius: calc(var(--n-bar-width) / 2);\n transition: background-color .3s var(--n-bezier);\n left: 0;\n top: 0;\n bottom: 0;\n position: absolute;\n '),n("&::before",{backgroundColor:"var(--n-bar-color)"})])]),f=Object.assign(Object.assign({},i.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),g=e=>t({name:`H${e}`,props:f,setup(n){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=a(n),h=i("Typography","-h",c,o,n,r),f=s((()=>{const{type:r}=n,{common:{cubicBezierEaseInOut:t},self:{headerFontWeight:a,headerTextColor:i,[l("headerPrefixWidth",e)]:o,[l("headerFontSize",e)]:s,[l("headerMargin",e)]:d,[l("headerBarWidth",e)]:c,[l("headerBarColor",r)]:f}}=h.value;return{"--n-bezier":t,"--n-font-size":s,"--n-margin":d,"--n-bar-color":f,"--n-bar-width":c,"--n-font-weight":a,"--n-text-color":i,"--n-prefix-width":o}})),g=t?d(`h${e}`,s((()=>n.type[0])),f,n):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:f,themeClass:null==g?void 0:g.themeClass,onRender:null==g?void 0:g.onRender}},render(){var n;const{prefix:r,alignText:t,mergedClsPrefix:a,cssVars:i,$slots:o}=this;return null===(n=this.onRender)||void 0===n||n.call(this),h(`h${e}`,{class:[`${a}-h`,`${a}-h${e}`,this.themeClass,{[`${a}-h--prefix-bar`]:r,[`${a}-h--align-text`]:t}],style:i},o)}});g("1"),g("2");const p=g("3");g("4"),g("5");const b=g("6");export{p as N,b as a};
