(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{d4c3e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppLayout",[s("div",{staticClass:"d-flex justify-content-between"},[s("h2",{staticClass:"section-title mb-3 text-secondary"},[t._v("filter for "+t._s(t.$route.params.tabName))]),s("b-icon",{staticClass:"mr-5 text-secondary svg",staticStyle:{width:"30px",height:"30px",cursor:"pointer"},attrs:{icon:"arrow-left-circle-fill"},on:{click:function(e){return t.back()}}})],1),s("div",{staticClass:"container"},[s("div",{staticClass:"row movies-list"},t._l(t.movies.searchMovieResults,(function(t){return s("Cards",{key:"search"+t.id,staticClass:"col-6 col-sm-3 movie text-center mb-3",attrs:{movie:t}})})),1)])])],1)},a=[],c=s("5530"),o=s("dead"),n=s("2f62"),r=s("6210"),l={components:{Cards:r["a"],AppLayout:o["a"]},methods:{back:function(){this.$router.push("/")}},computed:Object(c["a"])({},Object(n["d"])(["movies"])),mounted:function(){}},u=l,d=s("2877"),v=Object(d["a"])(u,i,a,!1,null,null,null);e["default"]=v.exports},f820:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SimpleLayout",[s("div",{attrs:{id:"about-movie"}},[s("div",{staticClass:"container-fluid about-container"},[s("b-icon",{staticClass:"mr-5 text-secondary svg position-absolute",staticStyle:{width:"30px",height:"30px",cursor:"pointer",top:"-50px"},attrs:{icon:"arrow-left-circle-fill"},on:{click:function(e){return t.back()}}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"iframe-container"},[s("iframe",{staticClass:"responsive-iframe",attrs:{src:"https://www.youtube.com/embed/"+t.trailerId+"?controls=0"}},[s("p",{staticClass:"h1 play-btn"},[s("b-icon",{attrs:{icon:"play-btn","font-scale":"2.0",variant:"warning",animation:"fade"}})],1)])])]),s("div",{staticClass:"col-md-4 mt-4 pd-md-3"},[s("div",{staticClass:"text-center text-md-start"},[s("h2",{staticClass:"title pb-1 text-left text-secondary"},[t._v(t._s(t.clickedMovie.title))]),s("p",{staticClass:"mt-3 text-secondary text-bold"},[t._v(t._s(t.clickedMovie.overview))]),s("b-button",{attrs:{variant:"warning"}},[t._v("download")])],1)])])],1)])])},a=[],c=s("5530"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid"},[s("router-link",{attrs:{to:"/movie/movieName"}}),t._t("default")],2)])},n=[],r=s("2877"),l={},u=Object(r["a"])(l,o,n,!1,null,null,null),d=u.exports,v=s("2f62"),m={computed:Object(c["a"])({},Object(v["d"])(["trailerId","clickedMovie"])),components:{SimpleLayout:d},methods:{back:function(){this.$router.push("/")}}},p=m,f=Object(r["a"])(p,i,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=about.d063be1c.js.map