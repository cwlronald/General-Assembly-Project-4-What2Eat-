(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},59:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(14),r=a.n(c),i=(a(59),a(8)),l=a.n(i),o=a(16),j=a(10),u=a(94),d=a(25),h=a(6),p=a(34),b=a(92),m=a(50),x=a(97),O=a(93),f=a(33),g=a(26),y=[{featureType:"administrative",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}],v=(a(61),a(17)),w=a.n(v);w.a.interceptors.request.use((function(e){return localStorage.access?e.headers.Authorization="Bearer ".concat(localStorage.access):delete e.headers.Authorization,e}),(function(e){return Promise.reject(e)})),w.a.interceptors.response.use((function(e){return e}),(function(e){var t,a=e.config,n=localStorage.refresh;return n&&401===e.response.status&&"token_not_valid"===(null===(t=e.response)||void 0===t?void 0:t.data.code)&&!a._retry?(a._retry=!0,w.a.post("".concat("http://localhost:8000","/api/token/refresh/"),{refresh:n}).then((function(e){if(200===e.status)return console.log(e.data),localStorage.setItem("access",e.data.access),w()(a)}))):Promise.reject(e)}));var N=w.a,k=a.p+"static/media/icon.3db2cad4.png",S=a(1);var _=function(e){var t,a=e.user,c=Object(n.useState)({}),r=Object(j.a)(c,2),i=r[0],u=r[1],d=Object(n.useState)(""),h=Object(j.a)(d,2),v=h[0],_=h[1],C=Object(n.useState)({}),T=Object(j.a)(C,2),P=T[0],$=T[1],F=Object(n.useState)(!1),L=Object(j.a)(F,2),E=L[0],A=L[1],I=Object(n.useState)(0),D=Object(j.a)(I,2),U=D[0],z=D[1],M={styles:y,disableDefaultUI:!0},R=Object(p.c)({googleMapsApiKey:"AIzaSyAbE5oW_KVEDundMDGXDUe94Fz5xwqqf0s",libraries:["places"]}),B=R.isLoaded,V=R.loadError,W=s.a.useRef(),q=s.a.useCallback((function(e){W.current=e}),[]),K=s.a.useCallback((function(e){var t=e.lat,a=e.lng;W.current.panTo({lat:t,lng:a}),W.current.setZoom(15)}),[]);if(V)return"Error Loading Maps";if(!B)return"Loading Maps";function G(){return(G=Object(o.a)(l.a.mark((function e(n){var s,c,r,o,j,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,s=n.target[1].value,c=n.target[2].value,t?(r=t,u(t)):r=i,o=a?a.id:"",!r){e.next=20;break}return e.next=9,w.a.post("/api/",{location:r,genre:s,price:c,user_id:o});case 9:j=e.sent,d=j.data,_(d),A(d.favorite),z(d.visits),h=d.geometry.location,$(h),K(h),window.location.href="#mainPageSearch",e.next=21;break;case 20:window.alert("Please enter the correct inputs!");case 21:e.next=28;break;case 23:e.prev=23,e.t0=e.catch(1),K(P),console.log(e.t0),window.alert("No restaurants found! Please change some inputs!");case 28:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function J(e){return H.apply(this,arguments)}function H(){return(H=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("api/set_restaurant_favorite/",{restaurant_id:v.place_id,user_id:a.id,restaurant_details:{place_id:v.place_id,name:v.name,lat:v.geometry.location.lat,lng:v.geometry.location.lng,vicitiny:v.vicinity}});case 3:A(!E),K(P),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(o.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"add"===t?(s="/api/visit_restaurant/",n=1):(s="/api/reduce_visit_restaurant/",n=0===U?0:-1),e.next=4,N.post(s,{restaurant_id:v.place_id,user_id:a.id,restaurant_details:{place_id:v.place_id,name:v.name,lat:v.geometry.location.lat,lng:v.geometry.location.lng,vicitiny:v.vicinity}});case 4:z(U+n),K(P),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Q(){var e=Object(f.a)(),a=e.ready,n=e.value,s=e.suggestions,c=s.status,r=s.data,i=e.setValue,j=e.clearSuggestions;function u(){return(u=Object(o.a)(l.a.mark((function e(a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(a,!1),j(),e.next=5,Object(f.b)({address:a});case 5:return n=e.sent,e.next=8,Object(f.c)(n[0]);case 8:s=e.sent,t=s,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(S.jsx)("div",{children:Object(S.jsxs)(g.a,{onSelect:function(e){return u.apply(this,arguments)},children:[Object(S.jsx)(g.b,{value:n,onChange:function(e){i(e.target.value)},disabled:!a,placeholder:"Enter current location",className:"mainPageInput"}),Object(S.jsx)(g.d,{children:"OK"===c&&r.map((function(e){var t=e.place_id,a=e.description;return Object(S.jsx)(g.c,{value:a,className:"searchDropDown"},t)}))})]})})}return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{className:"justify-content-center",children:Object(S.jsxs)(m.a,{className:"col-10 col-md-8",children:[Object(S.jsxs)(b.a,{className:"justify-content-center",children:[Object(S.jsx)("img",{src:k,width:"30",height:"35",className:"mt-2 mr-1"}),Object(S.jsx)("h1",{children:"What2Eat?"})]}),Object(S.jsx)(b.a,{className:"justify-content-center text-center",children:Object(S.jsx)("h5",{children:"Too busy to think about lunch? Is indecisive your middle name? Let W2E decide for you lah."})}),Object(S.jsx)(b.a,{className:"justify-content-center text-center",style:{fontSize:"10px"},children:"Searches are limited to a 500m radius because you're probably too lazy to walk anyway"}),Object(S.jsx)(b.a,{children:Object(S.jsx)(m.a,{className:"col-12",children:Object(S.jsxs)(x.a,{onSubmit:function(e){return G.apply(this,arguments)},children:[Object(S.jsx)(b.a,{className:"mb-3 mt-3",children:Object(S.jsx)(m.a,{children:Object(S.jsx)(Q,{})})}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(m.a,{className:"col-12 col-sm-12 col-md-6 col-lg-6 mb-3",children:Object(S.jsx)(x.a.Control,{placeholder:"Cuisine: Surprise Me!",className:"mainPageInput"})}),Object(S.jsx)(m.a,{className:"col-12 col-sm-12 col-md-6 col-lg-6",children:Object(S.jsxs)(x.a.Control,{as:"select",className:"mainPageInput",children:[Object(S.jsx)("option",{value:"Surprise Me!",children:"Price: Default $$"}),Object(S.jsx)("option",{value:"$",children:"$"}),Object(S.jsx)("option",{value:"$$",children:"$$"}),Object(S.jsx)("option",{value:"$$$",children:"$$$"}),Object(S.jsx)("option",{value:"$$$$",children:"$$$$"})]})})]}),Object(S.jsx)(b.a,{className:" mt-3 text-center",children:Object(S.jsx)(m.a,{className:"col-12",children:Object(S.jsx)(O.a,{type:"submit",variant:"danger",id:"mainPageSearch",style:{width:"100%"},children:v?"Something Else!":"Feed Me Now!"})})})]})})})]})}),v?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{className:"justify-content-center text-center",children:Object(S.jsxs)(m.a,{className:"col-10 col-md-8",children:[Object(S.jsx)("h5",{className:"mt-3",children:"Here you go friend, something to eat so you wouldn't starve."}),Object(S.jsx)("h3",{children:v.name}),Object(S.jsx)("h5",{children:v.vicinity}),Object(S.jsx)("h5",{children:v.rating?"Rating: ".concat(v.rating,"/5"):"No Rating"}),Object(S.jsx)(O.a,{onClick:function(){window.open("https://www.google.com/maps/search/?api=1&query=".concat(v.geometry.location.lat,"%2C").concat(v.geometry.location.lng,"&query_place_id=").concat(v.place_id),"_blank")},variant:"warning",style:{width:"100%"},children:"Open in GoogleMaps"}),a?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h5",{children:["Visits: ",U]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(b.a,{className:"mt-2 text-center",children:Object(S.jsx)(m.a,{className:"col-12",children:E?Object(S.jsx)(O.a,{variant:"success",onClick:J,style:{width:"100%"},children:"Favorite Place"}):Object(S.jsx)(O.a,{variant:"warning",onClick:J,style:{width:"100%"},children:"Add to favorites"})})}),Object(S.jsx)(b.a,{className:"mt-2  text-center",children:Object(S.jsx)(m.a,{children:Object(S.jsx)(O.a,{variant:"warning",onClick:function(){return X("add")},style:{width:"100%"},children:"Log Visit"})})}),Object(S.jsx)(b.a,{className:"mt-2  text-center",children:Object(S.jsx)(m.a,{children:Object(S.jsx)(O.a,{variant:"warning",onClick:function(){return X("minus")},style:{width:"100%"},children:"Remove Visit"})})})]})]}):Object(S.jsx)(S.Fragment,{})]})}),Object(S.jsx)(b.a,{className:"m-3",children:Object(S.jsx)(p.a,{mapContainerStyle:{width:"100vw",height:"50vw"},zoom:10,center:{lat:1.3521,lng:103.8198},options:M,onLoad:q,id:"mapsection",children:P?Object(S.jsx)(p.b,{position:{lat:P.lat,lng:P.lng},icon:{url:{logo:k},scaledSize:new window.google.maps.Size(30,30),origin:new window.google.maps.Point(0,0)}}):""})})]}):""]})},C=a(22),T=a(23);a(38);var P=function(e){var t=e.setAuth,a=Object(n.useState)({username:"",email:"",password:"",confirmPassword:""}),s=Object(j.a)(a,2),c=s[0],r=s[1],i=Object(h.f)();function d(){return(d=Object(o.a)(l.a.mark((function e(a){var n,s,r,o,j,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.a.post("/accounts/register/",c);case 4:return window.alert("Registration successful!"),e.next=7,N.post("/accounts/login/",c);case 7:n=e.sent,s=n.data,localStorage.setItem("access",s.access),localStorage.setItem("refresh",s.refresh),t(!0),i.push("/"),e.next=22;break;case 15:for(j in e.prev=15,e.t0=e.catch(1),r=e.t0.response.data,o=[],r)for(u in r[j])o.push("- "+r[j][u]);o.length<10?window.alert("The following errors have occured: \n"+o.join("\n")):window.alert("An error has occured, please try again!"),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function p(e){r(Object(T.a)(Object(T.a)({},c),{},Object(C.a)({},e.target.name,e.target.value)))}return Object(S.jsx)(u.a,{className:"justify-content-center",style:{maxWidth:"300px"},children:Object(S.jsxs)(x.a,{className:"FormBackground p-4 mt-5",children:[Object(S.jsx)("h3",{className:"text-center",children:"Sign Up"}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"User name"}),Object(S.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",onChange:p})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Email address"}),Object(S.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",onChange:p})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",onChange:p})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Confirm Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"confirmPassword",onChange:p})]}),Object(S.jsx)(O.a,{type:"submit",className:"btn btn-primary btn-block",variant:"danger",onClick:function(e){return d.apply(this,arguments)},children:"Sign Up"}),Object(S.jsx)("p",{className:"forgot-password text-center mt-1",children:Object(S.jsx)("a",{href:"/login",children:"Already registered? Click here to Login!"})})]})})};var $=function(e){var t=e.setAuth,a=Object(n.useState)({username:"",password:""}),s=Object(j.a)(a,2),c=s[0],r=s[1],i=Object(h.f)();function d(){return(d=Object(o.a)(l.a.mark((function e(a){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,N.post("/accounts/login/",c);case 4:n=e.sent,s=n.data,localStorage.setItem("access",s.access),localStorage.setItem("refresh",s.refresh),t(!0),i.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function p(e){r(Object(T.a)(Object(T.a)({},c),{},Object(C.a)({},e.target.name,e.target.value)))}return Object(S.jsx)(u.a,{className:"justify-content-center",style:{maxWidth:"300px"},children:Object(S.jsxs)(x.a,{className:"FormBackground p-4 mt-5",children:[Object(S.jsx)("h3",{className:"text-center",children:"Login"}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"User name"}),Object(S.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",onChange:p})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",onChange:p})]}),Object(S.jsx)(O.a,{type:"submit",className:"btn btn-primary btn-block",variant:"danger",onClick:function(e){return d.apply(this,arguments)},children:"Login"}),Object(S.jsx)("p",{className:"forgot-password text-center mt-1",children:Object(S.jsx)("a",{href:"/signup",children:"Not yet registered? Click here to Signup!"})})]})})},F=a(96),L=a(98);var E=function(e){var t=e.user,a=e.setUser,n=e.setAuth,s=Object(h.f)();return Object(S.jsx)(F.a,{style:{"background-color":"#97a97c"},expand:"md",children:Object(S.jsxs)(u.a,{children:[Object(S.jsx)(F.a.Brand,{href:"/",children:"What2Eat?"}),Object(S.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(F.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(S.jsx)(L.a,{className:"me-auto",children:(null===t||void 0===t?void 0:t.username)?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L.a.Link,{href:"/",style:{color:"black"},onClick:function(e){e.preventDefault(),localStorage.clear(),n(!1),a(null),s.push("/")},children:"Logout"}),Object(S.jsxs)(L.a.Link,{href:"/profile",style:{color:"black"},children:["Profile: ",t.username]})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L.a.Link,{href:"/signup",style:{color:"black"},children:"Signup"}),Object(S.jsx)(L.a.Link,{href:"/login",style:{color:"black"},children:"Login"})]})})})]})})},A=a(95);var I=function(e){var t=e.user,a=e.userRestaurants,s=Object(n.useState)(!1),c=Object(j.a)(s,2),r=c[0];return c[1],Object(S.jsx)(u.a,{className:"justify-content-center",style:{maxWidth:"500px"},children:r?Object(S.jsx)(S.Fragment,{}):Object(S.jsxs)("div",{className:"FormBackground p-4 mt-4 text-center",children:[Object(S.jsx)("h3",{className:"text-center",children:"Profile"}),Object(S.jsxs)("div",{className:!0,children:["Username: ",t.username]}),Object(S.jsxs)("div",{children:["Email: ",t.email]}),Object(S.jsxs)("div",{className:"text-center mt-3",children:[Object(S.jsx)("h4",{className:"text-center",children:"Places Visited"}),Object(S.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Restaurant"}),Object(S.jsx)("th",{children:"Vists"})]})}),Object(S.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[e.favorite?"\u2b50":"",e.restaurant_name]}),Object(S.jsx)("td",{children:e.visits})]})}))})]})]})]})})},D=a(54);a.n(D).a.config();var U=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({}),r=Object(j.a)(c,2),i=r[0],p=r[1],b=Object(n.useState)([]),m=Object(j.a)(b,2),x=m[0],O=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/accounts/user/");case 3:t=e.sent,a=t.data,p(a.user_profile),O(a.user_stats),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),s(!1),p(null),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(E,{user:i,setUser:s,setAuth:s}),Object(S.jsx)(u.a,{className:"justify-content-center mt-3",children:Object(S.jsxs)(h.c,{children:[Object(S.jsx)(h.a,{path:"/",exact:!0,children:Object(S.jsx)(_,{user:i})}),Object(S.jsx)(h.a,{path:"/signup",children:Object(S.jsx)(P,{setAuth:s})}),Object(S.jsx)(h.a,{path:"/login",children:Object(S.jsx)($,{setAuth:s})}),Object(S.jsx)(h.a,{path:"/profile",children:Object(S.jsx)(I,{user:i,userRestaurants:x})})]})})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(89);r.a.render(Object(S.jsx)(U,{}),document.getElementById("root")),z()}},[[90,1,2]]]);
//# sourceMappingURL=main.cd3fea33.chunk.js.map