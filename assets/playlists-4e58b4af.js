import{d as s,M as t,N as a,O as e,_ as r,R as l,a8 as i,r as o,j as n,Q as p,Y as m,U as c,ap as d,a1 as u,a2 as j,aI as y,ac as v}from"./index-62a86a6d.js";import{C as f}from"./CoverLists-8120940c.js";import"./album-03f4a364.js";import"./formRules-8f71b7bd.js";import"./FormItem-9925873e.js";import"./Select-874bd504.js";import"./getCoverUrl-483cfc93.js";import"./Tooltip-05e90936.js";import"./PlayOne-08324da2.js";import"./LinkTwo-de3400c3.js";import"./Unlike-8f9bbc24.js";import"./Grid-b6f95812.js";import"./Skeleton-341b61e6.js";import"./use-houdini-3b9e128b.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},g=[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z",fill:"currentColor"},null,-1)],h=s({name:"AddCircleRound",render:function(s,e){return t(),a("svg",w,g)}}),C={class:"playlists"},P={class:"data"},U=r({__name:"playlists",setup(s){const{t:r}=l(),w=i(),g=o(null);return n((()=>{$setSiteTitle(r("nav.user")+" - "+r("nav.userChildren.playlist")),w.getUserPlayLists.has||w.getUserPlayLists.isLoading||w.setUserPlayLists()})),(s,r)=>{const l=v,i=d;return t(),a("div",C,[e("div",P,[p(i,{class:"add",type:"primary",strong:"",secondary:"",round:"",onClick:r[0]||(r[0]=s=>c(g).openCreatePlaylist())},{icon:m((()=>[p(l,{component:c(h)},null,8,["component"])])),default:m((()=>[u(" "+j(s.$t("menu.create")),1)])),_:1}),p(y,{ref_key:"createPlaylistRef",ref:g},null,512)]),p(f,{listData:c(w).getUserPlayLists.own},null,8,["listData"])])}}},[["__scopeId","data-v-fcc2d8b3"]]);export{U as default};
