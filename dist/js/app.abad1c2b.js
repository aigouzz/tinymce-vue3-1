(function(e){function t(t){for(var a,r,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8d325431"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"b4c781e0"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var p=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/tinymce-vue3/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1094:function(e,t,n){"use strict";n("2b68")},"2b68":function(e,t,n){},"33bf":function(e,t,n){"use strict";n("37bf")},"37bf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("5f6b");const r={id:"nav"},o={class:"container"};function i(e,t){const n=Object(a["y"])("router-link"),i=Object(a["y"])("router-view");return Object(a["s"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",r,[Object(a["g"])(n,{to:"/"},{default:Object(a["G"])(()=>[Object(a["f"])("Home")]),_:1}),Object(a["f"])(" | "),Object(a["g"])(n,{to:"/about"},{default:Object(a["G"])(()=>[Object(a["f"])("About")]),_:1})]),Object(a["e"])("div",o,[Object(a["g"])(i)])],64)}n("1094");var c=n("59c2"),l=n.n(c);const s={},u=l()(s,[["render",i]]);var p=u,d=n("76fc");const f={class:"home"},b=Object(a["e"])("p",{class:"tipx"}," 组件版，将tinymce封装成一个组件来调用(位于/src/components/Tinymce.vue) ",-1),m={key:0},g=["innerHTML"];function v(e,t,n,r,o,i){const c=Object(a["y"])("Tinymce");return Object(a["s"])(),Object(a["d"])("div",f,[b,Object(a["g"])(c,{value:r.val,"onUpdate:value":[t[0]||(t[0]=e=>r.val=e),i.updateValue]},null,8,["value","onUpdate:value"]),Object(a["e"])("button",{onClick:t[1]||(t[1]=e=>r.isText=!r.isText),style:{margin:"10px"}},"html切换"),r.isText?(Object(a["s"])(),Object(a["d"])("div",m,Object(a["B"])(r.val),1)):(Object(a["s"])(),Object(a["d"])("div",{key:1,innerHTML:r.val},null,8,g))])}const h={class:"tinymce-boxz"};function y(e,t,n,r,o,i){const c=Object(a["y"])("Editor");return Object(a["s"])(),Object(a["d"])("div",h,[Object(a["g"])(c,{modelValue:r.content,"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),"api-key":e.apiKey,init:e.init},null,8,["modelValue","api-key","init"])])}var j=n("9aa7"),O={name:"Tinymce",components:{Editor:j["a"]},props:{value:{type:String,default:""}},setup(e,t){const n=Object(a["x"])(e.value),r=Object(a["w"])({apiKey:"qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",init:{language:"zh_CN",placeholder:"在这里输入文字",min_width:320,min_height:220,height:500,resize:"both",branding:!1,font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",plugins:"print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave emoticons",toolbar:["fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ","styleselect formatselect fontselect fontsizeselect |  table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter"],paste_data_images:!0,images_upload_handler:(e,t)=>new Promise((t,n)=>{let a=new FileReader;a.readAsDataURL(e.blob()),a.onloadend=function(){const e=a.result;e.toString().length>52428800?n({message:"上传图片不能超过50MB"}):t(e)},a.onerror=e=>{n(e)}}),file_picker_types:"file image media",file_picker_callback:function(e,t,n){let a;a="image"==n.filetype?".jpg, .jpeg, .png, .gif, .ico, .svg":"media"==n.filetype?".mp3, .mp4, .avi, .mov":".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4, .jpg, .jpeg, .png, .gif, .ico, .svg";let r=document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept",a),r.click(),r.onchange=()=>{let t=r.files[0],n=new FileReader;n.readAsDataURL(t),n.onload=function(){let a="blobid"+(new Date).getTime(),r=tinymce.activeEditor.editorUpload.blobCache,o=n.result.split(",")[1],i=r.create(a,t,o);r.add(i),e(i.blobUri(),{title:t.name})}}}}});return Object(a["F"])(()=>{t.emit("update:value",n.value)}),{content:n,...Object(a["C"])(r)}}};n("8253"),n("33bf");const k=l()(O,[["render",y],["__scopeId","data-v-e9c81ca2"]]);var w=k,x=n("a7ff"),_={name:"Home",components:{Tinymce:w},setup(){const e=Object(x["o"])("Welcome to Your Vue.js App"),t=Object(x["o"])(!0);return{val:e,isText:t}},methods:{updateValue(e){console.log(e)}}};const T=l()(_,[["render",v]]);var A=T;const S=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))}],C=Object(d["a"])({history:Object(d["b"])("/tinymce-vue3/"),routes:S});var E=C,P=n("dccb"),H=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(p).use(H).use(E).mount("#app")},8253:function(e,t,n){"use strict";n("a03e")},a03e:function(e,t,n){}});
//# sourceMappingURL=app.abad1c2b.js.map