(this["webpackJsonppokemon-react"]=this["webpackJsonppokemon-react"]||[]).push([[0],{47:function(e,t,s){},48:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(34),o=s.n(i),r=(s(47),s(48),s(12)),l=s(2),d=s.p+"static/media/beka.da86c6d1.png";function j(){return Object(c.jsx)("div",{className:"Home-page",children:Object(c.jsxs)("div",{className:"Home-content",children:[Object(c.jsxs)("div",{className:"Home-content__left",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"Home-content__title",children:[Object(c.jsx)("span",{children:"Find"})," all your"]}),Object(c.jsx)("div",{className:"Home-content__title",children:"favorite"}),Object(c.jsx)("div",{className:"Home-content__title",children:"Pokemon"})]}),Object(c.jsx)("div",{className:"Home-content__text",children:"You can know the type of Pokemon, its strengths, disadvantages and abilities"}),Object(c.jsx)("button",{className:"Home-button",children:"See pokemons"})]}),Object(c.jsx)("img",{className:"Home-image",src:d,alt:"beka"})]})})}var m=s(23),A=s(9),h=s(7);function p(e){var t=e.search,s=e.onChange;return Object(c.jsx)("input",{value:t,onChange:s,className:"search-bar",type:"text",placeholder:"Search..",name:"search"})}var b=s(40);function O(e){var t=e.filterName,s=e.handleFilter,n=e.checked;return Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{checked:n,onChange:s,id:t,type:"checkbox"}),Object(c.jsx)("label",{htmlFor:t,children:t})]})}function g(e){var t=e.filter,s=e.filters,n=e.toggleList,a=e.handleFilter,i=e.checked,o=s.items,r=s.show;return Object(c.jsxs)("div",{className:"pokemon-filter",children:[Object(c.jsxs)("button",{onClick:n,children:[t," ",Object(c.jsx)(b.a,{className:"button-arrow"})]}),r&&Object(c.jsx)("ul",{className:"pokemon-filter__items",children:o.map((function(e){var t=i(e);return Object(c.jsx)(O,{checked:t,filterName:e,handleFilter:function(){return a(e)}},e)}))})]})}var x=s(35),u=s.n(x);function k(e){var t=e.name,s=e.weight,n=e.experience,a=e.img,i=e.color,o=e.width,r=e.setPokemon;return Object(c.jsxs)("div",{onClick:r,style:{width:o},className:"peka-card",children:[Object(c.jsxs)("div",{className:"peka-card__left",children:[Object(c.jsx)("h3",{className:"peka-name",children:t}),Object(c.jsxs)("div",{className:"peka-power",children:[Object(c.jsx)("div",{className:"peka-power__shape",children:s}),Object(c.jsx)("div",{className:"peka-power__shape",children:n})]}),Object(c.jsxs)("div",{className:"peka-power",children:[Object(c.jsx)("div",{children:"Weight"}),Object(c.jsx)("div",{children:"Experience"})]}),Object(c.jsxs)("div",{className:"peka-actions",children:[Object(c.jsx)("button",{className:"peka-actions__grass",children:" grass"}),Object(c.jsx)("button",{className:"peka-actions__poison",children:" poison"})]})]}),Object(c.jsx)("div",{className:"peka-card__img-container",style:{backgroundColor:i},children:Object(c.jsx)("img",{className:"peka-card__img",src:a,alt:""})})]})}var v=s(17),f=s.n(v);function N(e){var t=e.pokemon,s=t.name,n=t.img,a=t.weight,i=t.experience,o=t.abilities,r=t.colors,l=t.order;return Object(c.jsxs)("div",{className:"pokemon-model",children:[Object(c.jsx)("div",{onClick:e.closeModal,className:"model__close",children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgBxZcxdoJAEIaH9QJolZJok9LSkjLpvIHkJDE3MF06TZdSy3TapfQEPm8guYDkH9/CQ1xgdoHn/966iDvzf8KyOxDdWZ7pZBAEIXdoR2hLjkKeqVJqliSJj/aFXKvimF7xxHA4XKJbeJ43RYsGg4F/Op1+yFLI84buE+2JWTgfchFy7UoB2BykUSHXBIEBAjdkYY48c8NPYRGiV2OeaiyFqDA3QlzmAO5VhEu0pBphzOpwOLw2MM+EcX3MiVjpxDNhUKTnSCNzrTF/KJ04lkaZIBzMWccMAPogC+UhXMwx/p2fbz7O1gHpPChoT/pSWprP0+/ZUxDH8d73/T9APJNcDxZjb8yvADTELyDA4IXUskzmNwAaYts2RJm5EaBtiCrzUoC2IOrMKwGaQkjMWap2gFIJOUgaV3kFHFe4VKFp+xUDNDQXQ/Q6NBdB9Do2r4W4AhiNRly/LagbhZUlGZufz+cVWQiwezyiNvuBuSTj6hXdt0Ui0lXui8M6cQWRrgOiiqhgHvExLza86FjGz/Gn/TyAk3kqFwjKl2TQThJhMm8AceSPyxzQdcAj7uXYxTyVdO/Q+8Q6A9DB6zIIibkUorQky0H0ETxxMa+DMO2QXb+ccqE7Q4uxxmxML6d31z+tX3+ZwW6K7AAAAABJRU5ErkJggg==",alt:""})}),Object(c.jsxs)("div",{style:{backgroundColor:r[0]},className:"pokemon-model__left",children:[Object(c.jsx)("img",{src:n,alt:""}),Object(c.jsxs)("div",{style:{position:"absolute",bottom:"4px",right:"15px"},className:"peka-actions",children:[Object(c.jsxs)("button",{style:{width:"70px",borderRadius:"20px",padding:0,border:0,fontSize:"16px"},className:"peka-actions__grass",children:[" ","grass"]}),Object(c.jsxs)("button",{style:{width:"70px",borderRadius:"20px",padding:0,border:0,fontSize:"16px"},className:"peka-actions__poison",children:[" ","poison"]})]})]}),Object(c.jsxs)("div",{style:{backgroundColor:r[1]},className:"pokemon-model__right",children:[Object(c.jsxs)("div",{className:"pokemon-model__title",children:[Object(c.jsx)("div",{className:"pokemon-model__title-name",children:s}),Object(c.jsx)("div",{className:"pokemon-model__title-generation",children:"Generation 1"}),Object(c.jsx)("div",{className:"pokemon-model__title-order",children:l})]}),Object(c.jsxs)("div",{className:"pokemon-model__abilities",children:[Object(c.jsx)("div",{children:"Abilities"}),Object(c.jsx)("div",{children:o})]}),Object(c.jsxs)("div",{className:"pokemon-model__body",children:[Object(c.jsxs)("div",{className:"pokemon-model__health",children:[Object(c.jsx)("div",{children:"Healthy Points"}),Object(c.jsx)("div",{children:"1 000 000"})]}),Object(c.jsxs)("div",{className:"pokemon-model__experience",children:[Object(c.jsx)("div",{children:"Experience"}),Object(c.jsx)("div",{children:"1 000 000"})]})]}),Object(c.jsxs)("div",{className:"pokemon-model__footer",children:[Object(c.jsxs)("div",{className:"pokemon-model__footer-card",children:[Object(c.jsx)("div",{className:"pokemon-model__circle",children:i}),Object(c.jsx)("div",{className:"pokemon-model__circle-info",children:"Experience"})]}),Object(c.jsxs)("div",{className:"pokemon-model__footer-card",children:[Object(c.jsx)("div",{className:"pokemon-model__circle",children:a}),Object(c.jsx)("div",{className:"pokemon-model__circle-info",children:"Weight"})]}),Object(c.jsxs)("div",{className:"pokemon-model__footer-card",children:[Object(c.jsx)("div",{className:"pokemon-model__circle",children:i}),Object(c.jsx)("div",{className:"pokemon-model__circle-info",children:"Experience"})]}),Object(c.jsxs)("div",{className:"pokemon-model__footer-card",children:[Object(c.jsx)("div",{className:"pokemon-model__circle",children:a}),Object(c.jsx)("div",{className:"pokemon-model__circle-info",children:"Weight"})]})]})]})]})}var w={img:"",name:"",weight:"",experience:"",abilities:"",order:""},C={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:3,rows:2};function B(){var e=Object(n.useState)({type:{items:["Fire","Normal","Bug","Water","Grass"],show:!1},weight:{items:["< 50"," < 150","< 300","< 450"],show:!1},experience:{items:["< 100","< 200","< 300","< 400"],show:!1}}),t=Object(h.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(!1),o=Object(h.a)(i,2),r=o[0],l=o[1],d=Object(n.useState)({}),j=Object(h.a)(d,2),b=j[0],O=j[1],x=Object(n.useState)(""),v=Object(h.a)(x,2),B=v[0],E=v[1],I={fire:["#B23327","#D93E30"],water:["#5BC7FA","#35BAFF"],bug:["#F2CB07","#F2B807"],grass:["#64D368","#64D368"],normal:["#F89EAE","#F4B5C1"]},U=Object(n.useState)([]),S=Object(h.a)(U,2),Q=S[0],F=S[1],H=Object(n.useState)(w),J=Object(h.a)(H,2),D=J[0],M=J[1],y=function(e){return function(){var t=Object(A.a)({},s);t[e].show=!t[e].show,a(t)}},R=Object(n.useState)(C),K=Object(h.a)(R,2),q=K[0],L=K[1];Object(n.useEffect)((function(){for(var e=[],t=[],s=function(s){var c=f.a.get("https://pokeapi.co/api/v2/pokemon/".concat(s)).then((function(t){var c=t.data,n=c.abilities[0].ability.name,a=c.name,i=c.base_experience,o=c.weight,r=c.order,l="https://pokeres.bastionbot.org/images/pokemon/".concat(s,".png"),d=c.types[0].type.name;e.push({name:a,experience:i,weight:o,img:l,type:d,order:r,abilities:n})}));t.push(c)},c=1;c<=18;c++)s(c);Promise.all([].concat(t)).then((function(t){F(e)}));var n=function(){window.innerHeight>=1e3?L((function(e){return Object(A.a)(Object(A.a)({},e),{},{rows:3})})):window.innerHeight<1e3&&L((function(e){return Object(A.a)(Object(A.a)({},e),{},{rows:2})}))};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var V=function(e){var t={name:e.name,img:e.img,order:e.order,weight:e.weight,experience:e.experience,abilities:e.abilities,colors:I[e.type]};M(t),l(!0)},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["fire","normal","bug","water","grass"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_VALUE,n="100%",a=Q.reduce((function(c,n){return n.name.startsWith(B)&&-1!==e.indexOf(n.type)&&n.weight<t&&n.experience<s&&c.push(n),c}),[]);return(a.length<=6&&2===q.rows||a.length<=9&&3===q.rows)&&(n="30%"),a.map((function(e){return Object(c.jsx)(k,{setPokemon:function(){return V(e)},width:n,name:e.name,experience:e.experience,weight:e.weight,img:e.img,color:I[e.type][1]},e.name)}))},W=[],P=function(){l(!1),M(w)},T=function(e){return function(t){return"type"!==e?t=t.split("<")[1].trim():"type"===e&&(t=t.toLowerCase()),!(!b[e]||-1===b[e].indexOf(t))}},X=Q.length>0?function(){if(Object.keys(b).length>0){var e=b.weight?Math.max.apply(Math,Object(m.a)(b.weight)):Number.MAX_VALUE,t=b.experience?Math.max.apply(Math,Object(m.a)(b.experience)):Number.MAX_VALUE,s=b.type||["fire","normal","bug","water","grass"];W=Y(s,e,t)}else W=Y();return W}():[],G=function(e){return 2===q.rows&&e.length>6||3===q.rows&&e.length>9}(X);return Object(c.jsxs)("div",{children:[r?Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)("div",{onClick:P,className:"backdrop"})," ",Object(c.jsx)(N,{closeModal:P,pokemon:D})," "]}):null,Object(c.jsxs)("div",{className:"pokemon-page",children:[Object(c.jsxs)("div",{className:"pokemon-page__title",children:["800 ",Object(c.jsx)("span",{children:"Pokemons"})," for you to choose your favorite"]}),Object(c.jsx)(p,{search:B,onChange:function(e){return E(e.target.value)}}),Object(c.jsx)("div",{className:"pokemon-page__filters",children:Object.keys(s).map((function(e){return Object(c.jsx)(g,{checked:T(e),toggleList:y(e),filter:e,filters:s[e],handleFilter:(t=e,function(e){e=e.toLowerCase();var s=Object(A.a)({},b);"type"!==t&&(e=e.split("<")[1].trim()),s[t]&&-1!==s[t].indexOf(e)?(s[t].splice(s[t].indexOf(e),1),0===s[t].length&&delete s[t]):s[t]?s[t].push(e.toLowerCase()):s[t]=[e.toLowerCase()],O(s)})},e);var t}))})]}),Object(c.jsx)("div",{className:"slider-container",children:X&&G?Object(c.jsx)(u.a,Object(A.a)(Object(A.a)({className:"slick-slider"},q),{},{children:X})):Object(c.jsx)("div",{className:"pokemon-cards",children:X})})]})}var E=s(36),I=s(37),U=s(41),S=s(39);function Q(e){var t=e.to,s=e.children;return Object(c.jsx)(r.b,{activeStyle:{fontWeight:"bold",color:"white"},style:{color:"inherit",textDecoration:"inherit"},to:t,exact:!0,children:s})}function F(){return Object(c.jsxs)("header",{className:"main-header",children:[Object(c.jsx)("img",{className:"header-logo",src:"data:image/png;base64,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",alt:""}),Object(c.jsx)("nav",{className:"main-header__nav",children:Object(c.jsxs)("ul",{className:"main-header__links",children:[Object(c.jsx)("li",{children:Object(c.jsx)(Q,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(Q,{to:"/pokemon",children:"Pok\xe9dex"})}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(Q,{to:"/legendaries",children:"Legendaries"})]}),Object(c.jsx)("li",{children:"Documentation"})]})})]})}function H(e){return Object(c.jsxs)("footer",{style:{backgroundColor:e.footerColor},className:"footer",children:[Object(c.jsx)("div",{className:"footer-left",children:"Make with \u2764\ufe0f for the Pok\xe9Spartans team Platzi Master"}),Object(c.jsx)("div",{className:"footer-right",children:"Ours Team"})]})}var J=["/","/pokemon","/legendaries"],D=function(e){Object(U.a)(s,e);var t=Object(S.a)(s);function s(){var e;Object(E.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={footerColor:"#f5db13"},e}return Object(I.a)(s,[{key:"render",value:function(){var e=this.props.location.pathname,t=-1!==J.indexOf(e.toLowerCase());return Object(c.jsxs)(c.Fragment,{children:[t&&Object(c.jsx)(F,{}),this.props.children,t&&Object(c.jsx)(H,{footerColor:this.state.footerColor})]})}},{key:"componentDidMount",value:function(){"/pokemon"===this.props.location.pathname?this.setState({footerColor:"#F5F5F5"}):"/legendaries"===this.props.location.pathname&&this.setState({footerColor:"#212121"})}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&"/"===this.props.location.pathname?this.setState({footerColor:"#f5db13"}):this.props.location.pathname!==e.location.pathname&&"/pokemon"===this.props.location.pathname?this.setState({footerColor:"#F5F5F5"}):this.props.location.pathname!==e.location.pathname&&"/legendaries"===this.props.location.pathname&&this.setState({footerColor:"#212121"})}}]),s}(n.Component),M=Object(l.f)(D),y=s.p+"static/media/team.47970b49.png";function R(){return Object(c.jsx)("div",{className:"not-found",children:Object(c.jsxs)("div",{className:"not-found__content",children:[Object(c.jsx)("img",{src:y,alt:""}),Object(c.jsxs)("div",{className:"not-found__content-title",children:["The rocket team ",Object(c.jsx)("span",{children:"has won this time "})," "]}),Object(c.jsx)("button",{className:"not-found__content-button",children:Object(c.jsx)(Q,{to:"/",children:"Return"})})]})})}var K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAICAYAAABpomRnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dg9TsNAEAXg99YWwcFEaxASDYIKUYaWinR0cAHOQMEJqGngBhyAI1DkBrihAoRvgAEJKYq9k02USEmRn2qVYj5pR/u2fs0OMfb3bs8jxJdCZ6HUtK1rGHuPkIQoe1I/ZklSDDOH4/9z50YcH6DUPK1b0J+gfFld1e+kaZrz+8vajTp6heAISi3AvWegcYagBHmz2Tg1cRW3taRqFdJ/Q3BEW0QODaUqodQa8wX9MelxmVOkgFJLcPMCoRF8ysjSjELtOlpWNZdpgZn/a8cHCItdoL4b3aaffz92r+Cg6yk1w+y/+HGCkCRCsZ0k3UkeAJh9Qj6deEnrAAAAAElFTkSuQmCC";function q(e){var t=e.selectedCard,s=t.name,n=t.img;return Object(c.jsxs)("div",{className:"legendary__card-info",children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{src:n,alt:""})}),Object(c.jsxs)("div",{className:"card-info__right",children:[Object(c.jsx)("div",{className:"name",children:s}),Object(c.jsxs)("p",{className:"description",children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."," "]}),Object(c.jsxs)("div",{className:"properties",children:[Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Healthy Points"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]}),Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Experience"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]}),Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Attack"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]}),Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Defense"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]}),Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Special Attack"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]}),Object(c.jsxs)("div",{className:"properties-card",children:[Object(c.jsx)("div",{children:"Special Defense"}),Object(c.jsx)("div",{children:"1000,000"}),Object(c.jsx)("img",{src:K,alt:""})]})]})]})]})}function L(e){var t=e.name,s=e.img,n=e.setCard;return Object(c.jsxs)("div",{onClick:n,className:"pokemon-img__card",children:[Object(c.jsx)("div",{className:"pokemon-img__container",children:Object(c.jsx)("img",{src:s,alt:""})}),Object(c.jsxs)("div",{className:"pokemon-img__card-footer",children:[Object(c.jsx)("div",{children:t}),Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgBpZNBTBNBFIb/KYvS0OJCJKTUwzZGEiSxVU56sd68AV7UG0lREzzAxYCGRIk3EgTOHgqp8WAw0ShoPPWoB6gmKpGQbA8sUA1paaW0dnfGmd1u0+oaBf+mnbev733vzbxZgj8onRiWG1ube4jkCUmHZRlSfcYo7n4olTJxt+920ilH+tWRiIaUxqP+qEH3wsw4AlIHMEZBGOEGhUSB3bWR2a/fUuOBs7M1UFf1w5v7rUN7BT3BKA1zAvcQ0y8sxp8JIZaPsn6W3VHfPgwNO8Jej8tDumFM8zTZSq9gYCEssFgEVHxpqTS1eLdluAb2alRWdJ1NW/msvDA717KJzbehAmg6phbuyKEKjNUjam3BSrT7QpVtAUkZSsyP6Nncfj2mTJig8mLhcjFLlMLeau57EZ9XU8hmC6iWvVVCXKJm+MWYHJb4PHsqHbGqk6IM0Scf8W7Fjc7OIDTtE84Ff+DSRcUaRBlmF3W5EBSTJmtbdVbrLoLGvIGmfB5YT2FFO46JiTE0NDRA13VMPpiEf1mDXswhs7WDba2E3LZkNtLSRJuJwmVQQ4WDYrEYuk52wePxmLB4PI7Bm4NOoZDqJEWKRCLK0tKSY4C2rqH7TLdpZ9Jpfm5ZdHR0wOvx/hYbidwIcNi13oGB646wkdFbCAZPwe8/hi+rq5h/Oo9HsceOsYbBesnm5mY/P76oU0Aul8PC4kss885P8I6uXL4Kr9frCOMXoI+oalp2u0sqP0QZB1fS52sLuAKB5oxhGDP4P82JH/uaYmMjleDXJoR9it+K9+3tbaeFXXnRCaF9ol3sQwJUzkMNzOfzJQuFQ7wCnfs3EJspFvMXRF6lIadAPmGFL/d4rfN8Var+SjJmPOev0TMOieMgEnBVVf867Z/VfSKuCcUWYQAAAABJRU5ErkJggg==",alt:""})]})]})}function V(e){var t=e.pokemons,s=e.setCard,n=e.paging,a=e.handlePaggingRight,i=e.handlePaggingLeft;return Object(c.jsxs)("div",{className:"slider",children:[Object(c.jsx)("img",{className:"left-arrow",src:"data:image/png;base64,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",alt:"",onClick:i}),Object(c.jsx)("div",{className:"legendary__slider",children:function(){for(var e=[],a=n.start,i=n.end,o=function(n){var a=Object(c.jsx)(L,{setCard:function(){return s(t[n])},name:t[n].name,img:t[n].img},t[n].name);e.push(a)},r=a;r<i;r++)o(r);return e}()}),Object(c.jsx)("img",{className:"right-arrow",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA1CAYAAADPo4LiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAViSURBVHgB3ZlNSCRHFMdremZnVPzCL/xMBuJB9LAhKviFikoSPQV29WCUzLIhOQjJXk1g1cXNQVbIxUMwixK97IpE8OQhJgdxQQ0kQrwo4jqC39+K0zM9M/m/ttsde3Ws7mn3sA+Krh6run/93qv3XpUWppGjoyOXxWK5GwwG/42Pjx9k71oA8DtaMKT9hZ8FNIvSbkWEEIABXL7Q/L1qf39/sLCw0HbbIDKARgOX2s7OznBubq6DvdGKqSKQD+DqCjfIbrd/OTMz8ytA7nR2dpoOYYMDVsMRbx5os7VMT0+vlpWVPcGtDy3ATBJS7wrv4KioqB8A8hhd0ojATBIhEAgM4nrAO4FAtra2Hg8PD5sGItthe3v7E4fD8Qe6ibwTPR7PT2lpaaaYRv6Svr6+fwDyKfzjkHeiqhF0bSxkqRsRWRN4OXzTIiwvL9empKRM6HmAopEudCVmUCMWTd+6sbHhiomJ6Wc65PDw8NucnJxBoyChaoRCgv709PSBk5OTb5gOSUhI+MXtdrvQtTIDprk0ASYJEkxmZqZRkAcI8QSiK6BdRU3q9Dc3Nw/A3k+ZTpChoaHCkFwTsQh42B2sgO5weUXb4B8HCwsLJTSXFyTsIGXV2ADSgSX5I+MUWupra2ufFRQU/I1bP/0UbnxYJ1J8xF9dXf2EliLjFMxLyM7OnkCIz2XnzmoxDKFIoKmpSaqvr+/U4yMEkp+fzw3CJZQn8FA7TPNUj48cHBy8BkgeO4+sV4LopaMvsqLIeY4ao4V3Enzk9eLi4udFRUVLFIsUM1+I3sBCTuavrKx86PV6h3kn4aUfoiCamJ2d/Qh9qzb7GrUTPcS2t7f3nIod3kkoG1bHx8dLWltbt9j5B108zIhQQJMqKioe+v3+ed5JgiB8UFtb+x1Wjp2d+0hEEDIIgpK0vr5+X88kgDiREhxOp/OiBIi0Mgrgq0b0TNjd3X0VHR1tOzs7szY2NloihlD2Knd5x8N0blTtr+AbAvpUv8jvtzGDogC4eMcTwNjY2L2enp61uLi4IJZ4kK70N0OrwwjA6Ojo/fb29lWr1eoXRdGbnJzsWVpakutT3Zo4Pj7uQMBx8Y5XNdDd3e2GUwaQCH2o3kRsL6kKkzWhC0IB6OQdrwJ0dXW5kXf8cEifJEkie1MGyhDcjqkXAM53RACIjmswQQAQMgBSvJdp0jsXhBGAqakpWQOwv+SDIJGJCN3qHuVS7rjRMY0CtLW1/Uc+AJN4wSAiuoojIyNvAdwIoReAZH5+/l5LS8s0ZUokOQlQZwqA/7o510IgtH6PB/zMdAjs/aihoeGFCgDxIKJ65+bmJG36vhECAF8pG2VdAKi+XpIJVIDNzU3VCcNuiAQzAPCyjqqqqhfIBwFsrCWU/iIvwFsQ8IFqvQCoKXrr6ur6Y2Njg0lJSRKCkAfxQOQFILkwByZ/jPX8J9NxPIAyr7empuZZqA8gHPsoxfMCkAhmAFAcAIRsAqrM9QCQWADgVACcvJPIBPCBXtUJCQDnG14sZ1+4VXCd2PAglwkAIgAkIwAyhF4A7MaeASCo0YBhABIBk8d4Bp6enr4sLi6+cEKqCVJTU2kZ+iIBkCFwiD6G+P4buwGgpKTkEV7KVIDExESvsgoiAiBRl6gVDjoAB229DoC+VsmIIlaGh53XBBEDkKjBKlBeXv61dg+Br54OBSANAEA0E4AkNHcIdHY9OTn5AEVoFcL3QmlpaT8O0SyA8VFRQuF4ZWWF/MC0I+WrgGjD6wBMfFZWVjKuqXl5eckIx/H4PQr7BCt7R2KlI4CMjIwYOGIs7qPR7Mom9vb+36EVOibCRVC+XMA9e+/lf5k2x3gG3yilAAAAAElFTkSuQmCC",alt:"",onClick:a})]})}function Y(e){var t=e.type,s=e.pokemons,a=Object(n.useState)({name:s[0].name,img:s[0].img}),i=Object(h.a)(a,2),o=i[0],r=i[1],l=Object(n.useState)({start:0,end:6}),d=Object(h.a)(l,2),j=d[0],m=d[1];return Object(c.jsxs)("div",{className:"legendary-card",children:[Object(c.jsx)("div",{className:"legendary-card__title",children:t}),Object(c.jsx)(q,{selectedCard:o}),Object(c.jsx)(V,{handlePaggingLeft:function(){var e,t,c=j.start,n=j.end,a=s.length;0===c?(e=a-6,t=a):c-6<0?(e=0,t=c):n==a?(t=c,e=c-6):(e=c-6,t=n-6),m({start:e,end:t})},handlePaggingRight:function(){var e=j.start,t=j.end,c=s.length,n=e+6>=c?0:e+6,a=t===c?6:t+6>c?c:t+6;console.log(e,t),m({start:n,end:a})},paging:j,setCard:r,pokemons:s})]})}function W(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){for(var e=[],t=[],s=5;s<8;s++){var c=f.a.get("https://pokeapi.co/api/v2/type/".concat(s)).then((function(t){for(var s=t.data,c=s.name,n=[],a=s.pokemon.length>16?16:s.pokemon.length,i=1;i<a;i++){var o=s.pokemon[i].pokemon.name,r=s.pokemon[i].pokemon.url,l=+r.charAt(r.length-2);if(0!==l){var d="https://pokeres.bastionbot.org/images/pokemon/".concat(l,".png");n.push({name:o,img:d})}}e.push({type:c,pokemons:n})}));t.push(c)}Promise.all([].concat(t)).then((function(t){a(e)}))}),[]),Object(c.jsx)("div",{className:"Legendaries",children:s.length>0?s.map((function(e){return Object(c.jsx)(Y,{type:e.type,pokemons:e.pokemons},e.type)})):null})}function P(){return Object(c.jsx)(M,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/pokemon",component:B}),Object(c.jsx)(l.a,{path:"/legendaries",component:W}),Object(c.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(c.jsx)(l.a,{component:R})]})})}s(85),s(86);var T=function(){return Object(c.jsx)(r.a,{basename:"pokemon-react",children:Object(c.jsx)(P,{})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,88)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),X()}},[[87,1,2]]]);
//# sourceMappingURL=main.56061e4f.chunk.js.map