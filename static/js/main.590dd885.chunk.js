(this["webpackJsonpbest-of-tech"]=this["webpackJsonpbest-of-tech"]||[]).push([[0],{408:function(e,a,t){e.exports=t(800)},413:function(e,a,t){},414:function(e,a,t){},430:function(e,a){},432:function(e,a){},461:function(e,a){},462:function(e,a){},506:function(e,a){},508:function(e,a){},531:function(e,a){},800:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(17),i=t.n(l),o=(t(413),t(35)),c=(t(414),t(146)),m=t(350),s=t(4),u=t(147),g=t.n(u),d=t(852),p=t(866),f=t(876),E=t(874),h=t(867),v=t(868),y=t(871),x=t(97),b=t(870),N=t(869),S=t(856),O=t(857),w=t(366),C=t(361),k=t.n(C),P=t(362),j=t.n(P),D=t(847),I=t(850),B=t(851),F=t(351),T=t.n(F),A=t(352),M=t.n(A);function H(e){return r.a.createElement("div",null,r.a.createElement(D.a,{button:!0},r.a.createElement(I.a,null,r.a.createElement(T.a,null)),r.a.createElement(B.a,{primary:"Portfolio"})),r.a.createElement(D.a,{button:!0,onClick:function(){localStorage.setItem("userAuth",!1),e.onSignOut()}},r.a.createElement(I.a,null,r.a.createElement(M.a,null)),r.a.createElement(B.a,{primary:"Sign Out"})))}var L=Object(d.a)({positive:{color:"green"},negative:{color:"red"},today:{padding:"8px"}}),Y=function(e){if(!e)return"";var a=Number(e);return a>0?"+"+a.toFixed(2)+"%":a.toFixed(2)+"%"};function z(e){var a=L(),t=function(e){for(var a=[],t=0;t<e.length;t++)a.push({id:t,name:e[t]["Index Name"],value:Y(e[t]["Daily Percentage Change"])});return a}(e.indexValues);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(E.a,{display:"flex"},r.a.createElement(E.a,null,r.a.createElement(x.a,{component:"h2",variant:"h6",color:"primary",className:a.today},"Today:")),t.map((function(e){return r.a.createElement(E.a,{flexGrow:1,key:e.id},r.a.createElement(x.a,{color:"textSecondary"},e.name),r.a.createElement(x.a,{className:e.value.indexOf("-")>-1?a.negative:a.positive},e.value))})))))}var J=t(38),R=t(32);function K(e){return r.a.createElement(x.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function V(e){var a=Object(J.a)(),t=function(e){for(var a,t,n=[],r=e.length-1;r>=0;r--)n.push((a=e[r].Date,t=Number(e[r]["Total Percent Change"]),{time:a,percentage:t}));return n}(e.portfolioHistory);return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Value Over Time"),r.a.createElement(R.d,null,r.a.createElement(R.c,{data:t,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(R.f,{dataKey:"time",stroke:a.palette.text.secondary}),r.a.createElement(R.g,{stroke:a.palette.text.secondary,domain:["auto","auto"]},r.a.createElement(R.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:a.palette.text.primary}},"% Change")),r.a.createElement(R.e,null),r.a.createElement(R.b,{type:"monotone",dataKey:"percentage",stroke:a.palette.primary.main,dot:!1}))))}var W=Object(d.a)({neutral:{flex:1},positive:{flex:1,color:"green"},negative:{flex:1,color:"red"}}),U=function(e){if(!e)return"";var a=Number(e);return a>0?"+"+a.toFixed(2)+"%":a.toFixed(2)+"%"};function X(e){var a=W(),t=U(e.yearToDatePerformance["Total Percent Change"]),n=U(e.yearToDatePerformance["Daily Percent Change"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Year to Date"),r.a.createElement(x.a,{component:"p",variant:"h5",className:t.indexOf("-")>-1?a.negative:a.positive},t),r.a.createElement(K,null,"Daily Change"),r.a.createElement(x.a,{component:"p",variant:"h5",className:n.indexOf("-")>-1?a.negative:a.positive},n),r.a.createElement(x.a,{color:"textSecondary",className:a.neutral},"as of ",function(){var e=new Date,a=String(e.getDate()),t=String(e.getMonth()+1),n=e.getFullYear(),r=e.getHours(),l=e.getMinutes(),i=r>=12?"pm":"am";return t+"/"+a+"/"+n+", "+(r=(r%=12)||12)+":"+(l=l<10?"0"+l:l)+i}()))}var Z=t(861),G=t(865),q=t(864),Q=t(862),_=t(863),$=t(860),ee=t(853),ae=t(859),te=t(855),ne=t(858),re=t(854);function le(e){var a=Object(J.a)(),t=function(e){for(var a,t,n=[],r=1;r<e.length;r++)n.push((a=e[r]["Daily Date"].split(" ")[0],t=Number(e[r]["Daily Price"]),{day:a,price:t}));return n}(e.data);return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.d,null,r.a.createElement(R.c,{data:t,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(R.f,{dataKey:"day",stroke:a.palette.text.secondary,minTickGap:15}),r.a.createElement(R.g,{stroke:a.palette.text.secondary,domain:["auto","auto"]},r.a.createElement(R.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:a.palette.text.primary}},"Price ($)")),r.a.createElement(R.e,null),r.a.createElement(R.b,{type:"monotone",dataKey:"price",stroke:a.palette.primary.main,dot:!1}))))}var ie=Object(d.a)((function(e){return{main:{display:"contents"},chart:{height:260},formControlHalf:{margin:e.spacing(1),width:"calc(50% - 16px)"},formControlFull:{margin:e.spacing(1),width:"calc(100% - 16px)"},selectEmpty:{marginTop:e.spacing(2)}}}));function oe(e){var a=ie(),t=function(){e.onClose()};return r.a.createElement("div",null,r.a.createElement(ee.a,{open:e.open,onClose:t,fullWidth:!0,maxWidth:"md","aria-labelledby":"form-dialog-title"},r.a.createElement(re.a,{id:"form-dialog-title"},e.name),r.a.createElement(te.a,null,r.a.createElement(S.a,{maxWidth:"lg",className:a.container},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("div",{className:a.chart},r.a.createElement(le,{data:e.chartData}))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(ne.a,null,e.description))))),r.a.createElement(ae.a,null,r.a.createElement($.a,{onClick:t,color:"primary"},"Close"))))}function ce(e,a){var t=Number(e)-a;return t>0?"+"+t:0===t?"-":t}var me=function(e,a){return Number(e).toFixed(2)+"%"},se=Object(d.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},negative:{color:"red"},positive:{color:"green"},name:{cursor:"pointer","&:hover":{textDecoration:"underline"}},rowIndex:{paddingLeft:"10px",width:"32px"}}}));function ue(e){var a=function(e){e.sort((function(e,a){return e["Portfolio Percentage"]<a["Portfolio Percentage"]?1:-1}));for(var a,t,n,r,l,i,o,c,m,s=[],u=0;u<e.length;u++)s.push((a=u,t=e[u].Name,n=e[u].Ticker,r=ce(e[u]["#"],u+1),l=me(e[u]["Portfolio Percentage"],2),i=me(e[u]["Daily Percentage Change"],2),o=me(e[u]["Monthly Percentage Change"],2),c=me(e[u]["Yearly Percentage Change"],2),m=e[u].Description,{id:a,name:t,ticker:n,movement:r,portfolioPercentage:l,dailyChange:i,monthlyChange:o,yearlyChange:c,description:m}));return s}(e.companies),t=se(),n=r.a.useState({open:!1,ticker:"",name:"",data:[],description:""}),l=Object(o.a)(n,2),i=l[0],c=l[1],m={CRM:"1LztegFflJaJzirrcvMpjM03rsc8V2YdBNhdtE61gY4k",SE:"1BGihn0NfrU47r-oqS8o2WPz7bh0PzBCei0a67G9lLFY",SHOP:"1ULuRyKN_oUvXZVoNa6hNMFbFFOWizRiP2CscZLq0PDc",AYX:"16TgJvOz6mO49Rfolei6lG3lxYgDdDo0Fs0taK1rY3cI",LBRDK:"1-9lef2HsWcNFLZXN69PNEOcSx9wQ1V0_Sj3s_llQVKw",COUP:"1oLS9w2w9R1tJTL4z3LnnY42KP2Br5MZRu-ysVoQa7fs",BABA:"1ZvWUHPj-u5TcKvMc-NQFfZJtg4KH1Y1UBE4OFgQaEO0",NFLX:"1OZ3MRzt0gmy4n96G9E-bq3wHBn-JxEcd0tm7Tk500gs",JD:"10tCxEAT1JCa5MjUFgg4JMXsuLGuJLCx4DYJFFJmZCB4",MSFT:"11Vw5gKfvHr0q_zZPhRXG7IsEopS0TUKMkOVIiHRkO_4",FB:"1-N6usJ-mzqbc4jhLJISQOYrpg7SmY7sAdiCXsUNgxjw",LYFT:"1mlFSu4ydLl6RRH_OU2nF4xHWyqJsOdqytyd7DNnCIhI",APPN:"1hz1VmrMr0R0Va3E2-g9XXtl6tzkYzVKUfvw5-5kqAlU",NOW:"1b36_XguxzCF3FekeTG8JZIIYstHLUV2dRDUUijHBNkg",AMZN:"1qESEwugnCADtDZ2Q5-E99l3g2h6XOihGB--TvTTKoZE",ADBE:"1jiRPBALjx8uE9PI2ZVazDnNTQ-uf17kIcN6LKVk2AMI",PINS:"1VXBdtPszJKf6Evj7KjzpHDNmHtfQBJ0QZP4_T5ads4A",SMAR:"1jOcWon0gXDs3TYyegpWoMHIDigEf6Rj1Q2LTTf3YGsY",MU:"1kyXMnkzPpE6OPWOHrryG3YjjJbn0823b8l-IZB82wB8",MIME:"1U1fIVOt8LYhah_hR71m6sfmnX0vIxOCVsEWbusjNZ8A",AAXN:"1bLfsxc4Bl9IAdpuKviA7JyiE7yn2qEMJzyEtsXtSiqw"};function s(e){e.preventDefault();var a=e.target.id,t=e.target.textContent||"",n=e.target.attributes.companydescription.value||"";g.a.init({key:m[a],simpleSheet:!0}).then((function(e,r){c({open:!0,ticker:a,name:t,data:e,description:n})}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Portfolio"),r.a.createElement(Z.a,{size:"small"},r.a.createElement(Q.a,null,r.a.createElement(_.a,null,r.a.createElement(q.a,{align:"left",padding:"none"}),r.a.createElement(q.a,{align:"left"},"Company"),r.a.createElement(q.a,{align:"left"},"Ticker"),r.a.createElement(q.a,{align:"right"},"Portfolio"),r.a.createElement(q.a,{align:"right"},"Day"),r.a.createElement(q.a,{align:"right"},"Month"),r.a.createElement(q.a,{align:"right"},"Year"))),r.a.createElement(G.a,null,a.map((function(e,a){return r.a.createElement(_.a,{key:e.id,hover:!0},r.a.createElement(q.a,{align:"left",className:t.rowIndex,padding:"none"},a+1),r.a.createElement(q.a,{align:"left"},r.a.createElement(x.a,{color:"primary",id:e.ticker,companydescription:e.description,className:t.name,onClick:s},e.name)),r.a.createElement(q.a,{align:"left"},e.ticker),r.a.createElement(q.a,{align:"right"},e.portfolioPercentage),r.a.createElement(q.a,{align:"right",className:e.dailyChange.indexOf("-")>-1?t.negative:t.positive},e.dailyChange),r.a.createElement(q.a,{align:"right",className:e.monthlyChange.indexOf("-")>-1?t.negative:t.positive},e.monthlyChange),r.a.createElement(q.a,{align:"right",className:e.yearlyChange.indexOf("-")>-1?t.negative:t.positive},e.yearlyChange))})))),r.a.createElement("div",{className:t.seeMore}),r.a.createElement(oe,{open:i.open,ticker:i.ticker,name:i.name,description:i.description,chartData:i.data,onClose:function(){c({open:!1,ticker:"",name:"",data:[],description:""})}}))}function ge(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Best of Tech ",(new Date).getFullYear(),".")}var de=Object(d.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},market:{padding:e.spacing(1),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:260}}}));function pe(e){var a=de(),t=r.a.useState([]),l=Object(o.a)(t,2),i=l[0],c=l[1],m=r.a.useState([]),u=Object(o.a)(m,2),d=u[0],C=u[1],P=r.a.useState(""),D=Object(o.a)(P,2),I=D[0],B=D[1],F=r.a.useState([]),T=Object(o.a)(F,2),A=T[0],M=T[1],L=r.a.useState(!1),Y=Object(o.a)(L,2),J=Y[0],R=Y[1],K=Object(s.a)(a.paper,a.fixedHeight);return Object(n.useEffect)((function(){g.a.init({key:"1UxY7rhbnhGl0uh8b-oL4beKRz5IAq_cHmn34XDOjeds",simpleSheet:!1}).then((function(e,a){console.log("Data succesfully fetched from Google Sheets!"),C(e.History.elements),c(e.Portfolio.elements),M(e.Market.elements);var t=e.History.elements[0];B(t)}))}),[]),r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement(h.a,{position:"absolute",className:Object(s.a)(a.appBar,J&&a.appBarShift)},r.a.createElement(v.a,{className:a.toolbar},r.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){R(!0)},className:Object(s.a)(a.menuButton,J&&a.menuButtonHidden)},r.a.createElement(k.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Illustrative Best of Tech Portfolio"))),r.a.createElement(f.a,{variant:"permanent",classes:{paper:Object(s.a)(a.drawerPaper,!J&&a.drawerPaperClose)},open:J},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(N.a,{onClick:function(){R(!1)}},r.a.createElement(j.a,null))),r.a.createElement(b.a,null),r.a.createElement(y.a,null,r.a.createElement(H,{onSignOut:e.onSignOut}))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:a.container},r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w.a,{className:a.market},r.a.createElement(z,{indexValues:A}))),r.a.createElement(O.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(w.a,{className:K},r.a.createElement(V,{portfolioHistory:d}))),r.a.createElement(O.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(w.a,{className:K},r.a.createElement(X,{yearToDatePerformance:I}))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w.a,{className:a.paper},r.a.createElement(ue,{companies:i})))),r.a.createElement(E.a,{pt:4},r.a.createElement(ge,null)))))}var fe=t(875),Ee=t(873),he=t(363),ve=t.n(he);function ye(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Best of Tech ",(new Date).getFullYear(),".")}var xe=Object(d.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/bU6JyhSI6zo)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function be(e){var a=xe(),t=r.a.useState(""),n=Object(o.a)(t,2),l=n[0],i=n[1],c=r.a.useState(""),m=Object(o.a)(c,2),s=m[0],u=m[1];return r.a.createElement(O.a,{container:!0,component:"main",className:a.root},r.a.createElement(p.a,null),r.a.createElement(O.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(O.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(fe.a,{className:a.avatar},r.a.createElement(ve.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(Ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement(Ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement($.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){"spencerwalsh@gmail.com"===l&&"kinesic"===s?(console.log("Successful Login"),e.onSignIn()):console.error("Failed Login")}},"Sign In"),r.a.createElement(E.a,{mt:5},r.a.createElement(ye,null))))))}var Ne=t(364),Se=t(872);var Oe=function(){var e=Object(Ne.a)({palette:{primary:{main:"rgb(8,134,150)"}},secondary:{main:"rgb(43,222,167)"}}),a=r.a.useState(!1),t=Object(o.a)(a,2),n=(t[0],t[1]);return"true"===localStorage.getItem("userAuth")?r.a.createElement("div",{className:"App"},r.a.createElement(Se.a,{theme:e},r.a.createElement(pe,{onSignOut:function(){console.log("Sign out"),localStorage.setItem("userAuth",!1),n(!1)}}))):r.a.createElement("div",{className:"App"},r.a.createElement(Se.a,{theme:e},r.a.createElement(be,{onSignIn:function(e,a){localStorage.setItem("userAuth",!0),n(!0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[408,1,2]]]);
//# sourceMappingURL=main.590dd885.chunk.js.map