(this.webpackJsonpPokemon=this.webpackJsonpPokemon||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(58),i=a.n(n),r=a(20),s=a(6),o=a(59),c=a.n(o),l=a(0);function d(e){return Object(l.jsx)("div",Object(s.a)(Object(s.a)({},e),{},{className:c.a.root}))}var m=a(19),p=a(44),_=a.n(p),k=a(60),x=a(3),j=a(1),u=a(29),h=a.n(u),b=a(61),v=a.n(b),y=a(62),f=a.n(y),O=a(63),C=a(64);function g(e){var t=e.color,a=e.size,n={loop:!0,autoplay:!0,animationData:"#fff"===t||"#ffffff"===t||"white"===t?C:O,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(l.jsx)(f.a,{options:n,height:a||30,width:a||30,isStopped:!1,isPaused:!1})}var E=a(65),D=a.n(E);function S(e){return Object(l.jsx)("img",Object(s.a)(Object(s.a)({},e),{},{alt:"Pok\xe9mon",className:D.a.root,src:"/logo.png"}))}function A(e){var t=e.list,a=e.placeholder,n=e.value,i=e.onChange,r=e.onClick,s=e.loading,o=e.error;return Object(l.jsxs)("div",{className:h.a.SearchListWrap,children:[Object(l.jsxs)("div",{className:h.a.searchHeader,children:[Object(l.jsx)(S,{}),Object(l.jsxs)("div",{className:h.a.search,children:[Object(l.jsx)("input",{placeholder:null!==a&&void 0!==a?a:"",value:null!==n&&void 0!==n?n:"",type:"text",onChange:i}),Object(l.jsx)(v.a,{icon:"search",size:"25"})]})]}),s?Object(l.jsx)(g,{}):o?Object(l.jsx)("p",{children:"Something went wrong"}):Object(l.jsx)("ul",{children:t&&t.length>0?t.map((function(e){var t=e.id,a=e.name;return Object(l.jsx)("li",{onClick:function(){return r(a)},children:a},t)})):Object(l.jsxs)("li",{children:["No results for: ",n]})})]})}var w=a(9),V=a.n(w);function B(e){var t=e.cards,a=e.handleCardClick;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:V.a.cardContainer,children:t.map((function(e,t){return Object(l.jsx)("div",{className:e?"".concat(V.a.cardItem," ").concat(V.a[e.types[0].name]," ").concat(V.a.__active):V.a.cardItem,onClick:function(){return a(e,t)},children:e?Object(l.jsxs)("div",{className:V.a.cardItemInner,children:[Object(l.jsx)("img",{src:e.image,alt:e.name}),Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{children:e.abilities.map((function(e,t){return e?Object(l.jsx)("div",{className:V.a.ability,children:Object(l.jsx)("p",{children:e.name})},t):Object(l.jsx)("div",{},t)}))})]}):"Empty"},t)}))})})}var N=a(5),P=a.n(N);function M(e){var t=e.title,a=e.subtitle,n=e.handleClose,i=e.children,r=e.handleAction,s=e.button_text,o=e.open;return Object(l.jsxs)("div",{className:o?"".concat(P.a.detailView," ").concat(P.a._shown):P.a.detailView,children:[Object(l.jsx)("div",{className:P.a.detailHeader,children:Object(l.jsx)("div",{className:P.a.titles,children:Object(l.jsxs)("h2",{children:[t,Object(l.jsx)("span",{children:a})]})})}),Object(l.jsx)("div",{className:P.a.detailBody,children:i}),Object(l.jsxs)("div",{className:P.a.detailFooter,children:[Object(l.jsx)("button",{className:P.a.btn,onClick:function(){return r()},children:s}),Object(l.jsx)("button",{className:P.a.btnCancel,onClick:function(){return n()},children:"Cancel"})]})]})}var T=a(45),G=a(2),I=a.n(G);function F(e){var t=e.data,a=e.name,n=e.abilities,i=e.setAbilities,r=Object(j.useState)(!1),s=Object(x.a)(r,2),o=s[0],c=s[1],d=Object(j.useState)(0),p=Object(x.a)(d,2),_=p[0],k=p[1];function u(e,t,a){switch(a){case"delete":e&&i((function(e){var a=Object(m.a)(e);return a[t]=!1,a}));break;case"add":var r=n.findIndex((function(e){return!1===e}));-1!==r&&i((function(t){var a=Object(m.a)(t);return a[r]=e,a}))}}return Object(j.useEffect)((function(){if(a){var e=[];t.moves.map((function(t){var a=e.findIndex((function(e){return e.name===t.learnMethod}));if(-1!==a){t.learnMethod;var n=Object(T.a)(t,["learnMethod"]);e[a].moves.push(n)}else{t.learnMethod;var i=Object(T.a)(t,["learnMethod"]);e.push({name:t.learnMethod,moves:[i]})}}));var r=[];n.map((function(e,a){var n,i=null!==(n=t.abilities[a])&&void 0!==n&&n;r.push(i)})),i(r),c(e)}}),[a]),Object(l.jsxs)("section",{className:I.a.section,children:[Object(l.jsx)("img",{src:t.image,alt:t.name,style:{width:"200px",height:"200px"}}),Object(l.jsx)("h2",{children:"Stats"}),Object(l.jsx)("ul",{children:t.stats.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("h4",{children:e.name.replace(/-/g," ")}),Object(l.jsx)("span",{children:e.value})]},t)}))}),Object(l.jsxs)("div",{className:I.a.selectedMovesWrap,children:[Object(l.jsx)("h2",{children:"Selected moves"}),Object(l.jsx)("div",{className:I.a.selectedMoves,children:n.map((function(e,t){var a;return Object(l.jsx)("div",{className:I.a.selectedMovesItem,onClick:function(){return u(e,t,"delete")},children:e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:null!==(a=e.learnMethod)&&void 0!==a?a:"Level up"}),Object(l.jsx)("p",{children:e.name})]}):Object(l.jsx)("p",{children:"Empty"})},t)}))})]}),Object(l.jsxs)("div",{className:I.a.movesMenu,children:[Object(l.jsx)("h2",{children:"Moves"}),Object(l.jsx)("div",{className:I.a.movesMenuHeader,children:o&&o.map((function(e,t){return Object(l.jsxs)("div",{onClick:function(){return k(t)},className:I.a.learnMethods,children:[Object(l.jsx)("h4",{children:e.name}),Object(l.jsx)("div",{className:_===t?"".concat(I.a.underline," ").concat(I.a.__active):I.a.underline})]},t)}))}),Object(l.jsx)("div",{className:I.a.moveBullets,children:o&&o[_].moves.map((function(e,t){return Object(l.jsx)("div",{className:I.a.bullet,onClick:function(){return u(e,t,"add")},children:e.name},t)}))})]})]})}function L(e){var t=Object(j.useState)(""),a=Object(x.a)(t,2),n=a[0],i=a[1],o=Object(j.useState)(!1),c=Object(x.a)(o,2),d=c[0],p=c[1],u=Object(j.useState)(!1),h=Object(x.a)(u,2),b=h[0],v=h[1],y=Object(j.useState)(!1),f=Object(x.a)(y,2),O=f[0],C=f[1],E=Object(j.useState)(!1),D=Object(x.a)(E,2),S=D[0],w=D[1],V=Object(j.useState)(new Array(6).fill(!1)),N=Object(x.a)(V,2),P=N[0],T=N[1],G=Object(j.useState)(new Array(4).fill(!1)),I=Object(x.a)(G,2),L=I[0],H=I[1],z=Object(r.d)("{    \n    Pokemons(first: 151) {\n        id\n        name\n    }\n}",{variables:{limit:10}}),W=z.loading,q=z.error,J=z.data,R=Object(r.c)("\nquery Pokemon($name: String!) {\n    Pokemon(name: $name) {\n        id\n        name\n        image\n        abilities {\n          name\n        }\n        stats {\n          name\n          value\n        }\n        types {\n          name\n        }\n        moves {\n          name \n          type\n          learnMethod\n        }\n      }\n}"),X=Object(x.a)(R,1)[0];function K(){w(!1),v(!1),C(!1)}return Object(j.useEffect)((function(){(null===J||void 0===J?void 0:J.Pokemons)&&p(J.Pokemons)}),[J]),Object(j.useEffect)(Object(k.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=6;break}return C(!1),e.next=4,X({variables:{name:S}});case 4:t=e.sent,C(t);case 6:case"end":return e.stop()}}),e)}))),[S]),Object(j.useEffect)((function(){var e;if(b&&(null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.Pokemon)){var t=P.findIndex((function(e){return!1===e}));-1!==t&&T((function(e){var a=Object(m.a)(e);return a[t]=Object(s.a)(Object(s.a)({},O.data.Pokemon),{},{abilities:L}),a}))}K()}),[b]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A,{onClick:function(e){return w(e)},loading:W,error:q,list:d,value:n,placeholder:"Search a Pok\xe9mon",onChange:function(e){var t=J.Pokemons.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.target.value.toLowerCase())}));p(t),i(e.target.value)}}),Object(l.jsx)(B,{cards:P,handleCardClick:function(e,t){e&&T((function(e){var a=Object(m.a)(e);return a[t]=!1,a}))}}),Object(l.jsx)(M,{button_text:"Save",title:"Add "+S,subtitle:"to squad",handleClose:function(){return K()},handleAction:function(){return v(!0)},open:S,children:(null===O||void 0===O?void 0:O.data)?Object(l.jsx)(F,{name:S,data:null===O||void 0===O?void 0:O.data.Pokemon,abilities:L,setAbilities:H}):Object(l.jsx)(g,{})})]})}var H=new r.b({url:"https://p5k91xxvoq.sse.codesandbox.io/"});function z(){return Object(l.jsx)(r.a.Provider,{value:H,children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{children:Object(l.jsx)(L,{})})})})}a(127),a(128);i.a.render(Object(l.jsx)(z,{}),document.getElementById("root"))},2:function(e,t,a){e.exports={section:"DetailContent_section__7gRwT",selectedMovesWrap:"DetailContent_selectedMovesWrap__KNWpZ",selectedMoves:"DetailContent_selectedMoves__1F8NF",selectedMovesItem:"DetailContent_selectedMovesItem__1ASQu",movesMenu:"DetailContent_movesMenu__1bTto",movesMenuHeader:"DetailContent_movesMenuHeader__19-Ut",learnMethods:"DetailContent_learnMethods__3Yze3",underline:"DetailContent_underline__2_1zM",__active:"DetailContent___active__2oRfX",_active:"DetailContent__active__3ESPI",moveBullets:"DetailContent_moveBullets__2pSr5",bullet:"DetailContent_bullet__ltrK-"}},29:function(e,t,a){e.exports={SearchListWrap:"SearchList_SearchListWrap__2AGOu",searchHeader:"SearchList_searchHeader__12XLD",search:"SearchList_search__2Tp2j"}},5:function(e,t,a){e.exports={detailView:"DetailView_detailView__1zNfN",detailHeader:"DetailView_detailHeader__3v7zH",titles:"DetailView_titles__2dN_L",detailBody:"DetailView_detailBody__3r5KB",detailFooter:"DetailView_detailFooter___bBBq",btn:"DetailView_btn__3oT1U",btnCancel:"DetailView_btnCancel__1T9RZ",_shown:"DetailView__shown__10TYC"}},59:function(e,t,a){e.exports={root:"Container_root__3E1fS"}},63:function(e){e.exports=JSON.parse('{"v":"4.6.0","fr":29.9700012207031,"ip":0,"op":49.0000019958109,"w":200,"h":200,"nm":"loading_ring_medium","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"green ring 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":49.0000019958109}]},"p":{"a":0,"k":[100,100,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[200,200,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.644],"y":[0]},"n":["0p667_1_0p644_0"],"t":10,"s":[0],"e":[100]},{"t":50.0000020365418}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":-1,"s":[0],"e":[100]},{"t":37.0000015070409}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":0,"op":50.0000020365418,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"flamingo ring 3","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.785],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p785_1_1_0"],"t":17,"s":[14.2],"e":[360]},{"t":50.0000020365418}]},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[0],"e":[1]},{"t":44.0000017921567}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":20,"s":[0],"e":[1]},{"t":44.0000017921567}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":17.0000006924242,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"flamingo ring 2","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.612],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p612_1_1_0"],"t":17,"s":[14.2],"e":[360]},{"t":50.0000020365418}]},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[0],"e":[13.7]},{"t":44.0000017921567}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":20,"s":[0],"e":[13.7]},{"t":44.0000017921567}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":17.0000006924242,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"flaming ring 1","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p667_1_1_0"],"t":8,"s":[0],"e":[100]},{"t":48.0000019550801}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p667_1_1_0"],"t":-1,"s":[0],"e":[100]},{"t":37.0000015070409}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":15.0000006109625,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1}]}')},64:function(e){e.exports=JSON.parse('{"v":"4.6.0","fr":29.9700012207031,"ip":0,"op":49.0000019958109,"w":200,"h":200,"nm":"loading_ring_medium","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"green ring 1","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":49.0000019958109}]},"p":{"a":0,"k":[100,100,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[200,200,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.644],"y":[0]},"n":["0p667_1_0p644_0"],"t":10,"s":[0],"e":[100]},{"t":50.0000020365418}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":-1,"s":[0],"e":[100]},{"t":37.0000015070409}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":0,"op":50.0000020365418,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"flamingo ring 3","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.785],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p785_1_1_0"],"t":17,"s":[14.2],"e":[360]},{"t":50.0000020365418}]},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[0],"e":[1]},{"t":44.0000017921567}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":20,"s":[0],"e":[1]},{"t":44.0000017921567}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":17.0000006924242,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"flamingo ring 2","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.612],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p612_1_1_0"],"t":17,"s":[14.2],"e":[360]},{"t":50.0000020365418}]},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[0],"e":[13.7]},{"t":44.0000017921567}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":20,"s":[0],"e":[13.7]},{"t":44.0000017921567}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":17.0000006924242,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"flaming ring 1","parent":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[54,54]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":6},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"mn":"ADBE Vector Group"},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p667_1_1_0"],"t":8,"s":[0],"e":[100]},{"t":48.0000019550801}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"n":["0p667_1_1_0"],"t":-1,"s":[0],"e":[100]},{"t":37.0000015070409}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"}],"ip":15.0000006109625,"op":44.0000017921567,"st":-1.00000004073083,"bm":0,"sr":1}]}')},65:function(e,t,a){e.exports={root:"Logo_root__4WC0N"}},9:function(e,t,a){e.exports={cardContainer:"CardContainer_cardContainer__1AmPe",cardItem:"CardContainer_cardItem__1VRGA",cardItemInner:"CardContainer_cardItemInner__gX0qJ",ability:"CardContainer_ability__3LwbA",__active:"CardContainer___active__2rlqL",normal:"CardContainer_normal__o881P",fire:"CardContainer_fire__1z3q7",water:"CardContainer_water__2wdIE",electric:"CardContainer_electric__1SJs2",grass:"CardContainer_grass__387zP",ice:"CardContainer_ice__MWv6_",fighting:"CardContainer_fighting__2U_Nx",poison:"CardContainer_poison__i3KZz",ground:"CardContainer_ground__1hjOm",flying:"CardContainer_flying__186Ag",psychic:"CardContainer_psychic__12Xmy",bug:"CardContainer_bug__3QXPg",rock:"CardContainer_rock__1JS9G",ghost:"CardContainer_ghost__2G4lB",dragon:"CardContainer_dragon__3fNPi",dark:"CardContainer_dark__qT0jp",steel:"CardContainer_steel__1v8AC",fairy:"CardContainer_fairy__voAYD"}}},[[129,1,2]]]);
//# sourceMappingURL=main.c272d520.chunk.js.map