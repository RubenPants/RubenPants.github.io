(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3432c39d"],{"296d":function(t,e,i){},acca:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scrollbar",{attrs:{suppressScrollX:"true"}},[i("div",{staticClass:"container-fluid",style:"max-width: 1400px; height: "+t.windowHeight+"px;"},t._l(t.projectsInfo,(function(e){return i("card",{key:e.title,attrs:{title:e.title,description:e.text,keywords:e.keywords,date:e.date,image_path:e.image,image_width:e.image_width,image_height:e.image_height,url:e.url,windowWidth:t.windowWidth}})})),1)])},r=[],n=(i("96cf"),i("1da1")),s=i("5530"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.windowWidth>=768?i("b-row",{staticClass:"card-project"},[i("b-col",{staticClass:"image-project",attrs:{id:"image-project-"+t.title,cols:"3"},on:{click:function(e){return e.preventDefault(),t.redirect(e)},mouseover:t.hover,mouseleave:t.restore_hover}},[t.isMounted?i("imageComponent",{attrs:{width:t.getImageWidth(),height:t.getImageHeight(),image_width:t.image_width,image_height:t.image_height,image_path:t.image_path}}):t._e()],1),i("b-col",[i("div",{staticClass:"title-project",attrs:{id:"title-project-"+t.title},on:{click:function(e){return e.preventDefault(),t.redirect(e)},mouseover:t.hover,mouseleave:t.restore_hover}},[t._v(" "+t._s(t.title)+" ")]),i("vue-custom-scrollbar",{attrs:{suppressScrollX:"true"}},[i("div",{staticClass:"description-project",domProps:{innerHTML:t._s(t.description)}})]),i("div",{staticClass:"footer-project"},[i("div",{staticStyle:{"text-align":"left",width:"80%"}},[t._v(" "+t._s(t.keywords)+" ")]),i("div",{staticStyle:{"text-align":"right",width:"20%"}},[t._v(" "+t._s(t.date)+" ")])])],1)],1):i("b-row",{staticClass:"card-project-mobile"},[i("b-col",[i("b-row",{staticClass:"image-project-mobile",attrs:{id:"image-project-"+t.title},on:{click:function(e){return e.preventDefault(),t.redirect(e)},mouseover:t.hover,mouseleave:t.restore_hover}},[t.isMounted?i("imageComponent",{attrs:{width:t.getImageWidth(),height:t.getImageHeight(),image_width:t.image_width,image_height:t.image_height,image_path:t.image_path}}):t._e()],1),i("div",{staticClass:"title-project-mobile",attrs:{id:"title-project-"+t.title},on:{click:function(e){return e.preventDefault(),t.redirect(e)},mouseover:t.hover,mouseleave:t.restore_hover}},[t._v(" "+t._s(t.title)+" ")]),i("vue-custom-scrollbar",{attrs:{suppressScrollX:"true"}},[i("div",{staticClass:"description-project-mobile",domProps:{innerHTML:t._s(t.description)}})]),i("div",{staticClass:"footer-project-mobile"},[i("div",{staticStyle:{position:"absolute",bottom:"2px",width:"75%"}},[t._v(" "+t._s(t.keywords)+" ")]),i("div",{staticStyle:{position:"absolute",bottom:"2px",right:"6px"}},[t._v(" "+t._s(t.date)+" ")])])],1)],1)},c=[],d=i("b3f1"),l=i("4b70"),u=i.n(l),h={name:"CardProject",components:{imageComponent:d["a"],vueCustomScrollbar:u.a},data:function(){return{isMounted:!1}},props:["title","description","keywords","date","image_path","image_width","image_height","url","windowWidth"],methods:{redirect:function(){window.open(this.url)},hover:function(){document.getElementById("image-project-"+this.title).style.opacity=.9,document.getElementById("title-project-"+this.title).style.color="#4f5b62",document.getElementById("image-project-"+this.title).style.cursor="pointer",document.getElementById("title-project-"+this.title).style.cursor="pointer"},restore_hover:function(){document.getElementById("image-project-"+this.title).style.opacity=1,document.getElementById("title-project-"+this.title).style.color="#212529"},getImageHeight:function(){return document.getElementById("image-project-"+this.title).getBoundingClientRect().height},getImageWidth:function(){return document.getElementById("image-project-"+this.title).getBoundingClientRect().width}},mounted:function(){this.isMounted=!0}},m=h,g=(i("ed66"),i("2877")),p=Object(g["a"])(m,a,c,!1,null,null,null),w=p.exports,v=i("2f62"),_={name:"Projects",components:{card:w,scrollbar:u.a},computed:Object(s["a"])({},Object(v["b"])(["projectsInfo"])),data:function(){return{windowWidth:window.innerWidth,windowHeight:window.innerHeight-72}},mounted:function(){var t=this;this.fetchData(),window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth,t.windowHeight=window.innerHeight-72}))},methods:{fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchProjects");case 2:case"end":return e.stop()}}),e)})))()}}},f=_,j=Object(g["a"])(f,o,r,!1,null,null,null);e["default"]=j.exports},ed66:function(t,e,i){"use strict";var o=i("296d"),r=i.n(o);r.a}}]);
//# sourceMappingURL=chunk-3432c39d.42017595.js.map