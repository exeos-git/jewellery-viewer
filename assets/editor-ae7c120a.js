import{e as t,a as i,b as s,c as _,d as r,f as p}from"./styles-aebcbdb9.js";async function n(){const a=new t({canvas:document.getElementById("webgi-canvas")});await i(a),await a.addPlugin(s),await a.addPlugin(_),await a.addPlugin(r),a.defaultModes=a.defaultModes.filter(e=>e.title!=="Extras"),await p(a,{caching:!0,ground:!0,bloom:!0,depthTonemap:!0,enableDrop:!0,importPopup:!0,debug:!1}),await a.setupUi()}n();