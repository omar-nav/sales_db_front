(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(58)},31:function(e,a,t){},33:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(24),c=t.n(o),r=(t(31),t(3)),i=t(4),s=t(6),m=t(5),u=t(7),d=(t(33),t(62)),p=t(61),v=t(59),E=t(8),h=t.n(E),b=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={sales:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://sales-db-keyence.herokuapp.com/showall").then(function(a){e.setState({sales:a.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Lista de Ventas")),l.a.createElement("div",{className:"showall"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," "),l.a.createElement("th",null,"Mes"),l.a.createElement("th",null,"A\xf1o"),l.a.createElement("th",null,"Vendedor"),l.a.createElement("th",null,"Monto"),l.a.createElement("th",null,"Cantidad"),l.a.createElement("th",null,"Equipo"),l.a.createElement("th",null,"Alcad\xeda"))),l.a.createElement("tbody",null,this.state.sales.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(v.a,{to:"/show/".concat(e._id)}," mostrar fila \xa0\xa0")),l.a.createElement("td",null,e.mes),l.a.createElement("td",null,e.a\u00f1o),l.a.createElement("td",null,e.vendedor),l.a.createElement("td",null,e.monto),l.a.createElement("td",null,e.cantidad),l.a.createElement("td",null,e.equipo),l.a.createElement("td",null,e.alcadia))}))))))}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).onChange=function(e){var a=t.state.sale;a[e.target.name]=e.target.value,t.setState({sale:a})},t.onSubmit=function(e){e.preventDefault();var a=t.state.sale,n=a.mes,l=a.a\u00f1o,o=a.vendedor,c=a.monto,r=a.cantidad,i=a.equipo,s=a.alcadia;h.a.put("http://localhost:3000/"+t.props.match.params.id,{mes:n,"a\xf1o":l,vendedor:o,monto:c,cantidad:r,equipo:i,alcadia:s}).then(function(e){t.props.history.push("/show/"+t.props.match.params.id)})},t.state={sale:{}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3000/"+this.props.match.params.id).then(function(a){e.setState({sale:a.data})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Agregar Venta")),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"mes"},"Mes:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"mes",name:"mes",type:"text",value:this.state.sale.mes,onChange:this.onChange,placeholder:"octubre"},l.a.createElement("option",{value:"enero"},"enero"),l.a.createElement("option",{value:"febrero"},"febrero"),l.a.createElement("option",{value:"marzo"},"marzo"),l.a.createElement("option",{value:"abril"},"abril"),l.a.createElement("option",{value:"mayo"},"mayo"),l.a.createElement("option",{value:"junio"},"junio"),l.a.createElement("option",{value:"julio"},"julio"),l.a.createElement("option",{value:"agosto"},"agosto"),l.a.createElement("option",{value:"septiembre"},"septiembre"),l.a.createElement("option",{value:"octubre"},"octubre"),l.a.createElement("option",{value:"noviembre"},"noviembre"),l.a.createElement("option",{value:"diciembre"},"diciembre")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"a\xf1o"},"A\xf1o:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"a\xf1o",name:"a\xf1o",type:"text",value:this.state.sale.a\u00f1o,onChange:this.onChange,placeholder:"2018"},l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"vendedor"},"Vendedor:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"vendedor",name:"vendedor",type:"text",value:this.state.sale.vendedor,onChange:this.onChange,placeholder:"A"},l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"C"},"B"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"E"},"E"),l.a.createElement("option",{value:"F"},"F"),l.a.createElement("option",{value:"G"},"G"),l.a.createElement("option",{value:"H"},"H")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-25"},l.a.createElement("label",{htmlFor:"monto"},"Monto:")),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{id:"monto",name:"monto",type:"text",value:this.state.sale.monto,onChange:this.onChange,placeholder:"777"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-25"},l.a.createElement("label",{htmlFor:"cantidad"},"Cantidad:")),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{id:"cantidad",name:"cantidad",type:"text",value:this.state.sale.cantidad,onChange:this.onChange,placeholder:"33"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"equipo"},"Equipo:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"equipo",name:"equipo",type:"text",value:this.state.sale.equipo,onChange:this.onChange,placeholder:"1"},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"alcadia"},"Alcad\xeda:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"alcadia",name:"alcadia",type:"text",value:this.state.sale.alcadia,onChange:this.onChange,placeholder:"Benito Ju\xe1rez"},l.a.createElement("option",{value:"Alvaro Obreg\xf3n"},"Alvaro Obreg\xf3n"),l.a.createElement("option",{value:"Azcapotzalco"},"Azcapotzalco"),l.a.createElement("option",{value:"Benito Ju\xe1rez"},"Benito Ju\xe1rez"),l.a.createElement("option",{value:"Coyoac\xe1n"},"Coyoac\xe1n"),l.a.createElement("option",{value:"Cuajimalpa de Morelo"},"Cuajimalpa de Morelo"),l.a.createElement("option",{value:"Cuaht\xe9moc"},"Cuaht\xe9moc"),l.a.createElement("option",{value:"Gustavo A Madero"},"Gustavo A Madero"),l.a.createElement("option",{value:"Iztacalco"},"Iztacalco"),l.a.createElement("option",{value:"Iztapalapa"},"Iztapalapa"),l.a.createElement("option",{value:"Magdalena Contreras"},"Magdalena Contreras"),l.a.createElement("option",{value:"Miguel Hidalgo"},"Miguel Hidalgo"),l.a.createElement("option",{value:"Milpa Alta"},"Milpa Alta"),l.a.createElement("option",{value:"Tl\xe1huac"},"Tl\xe1huac"),l.a.createElement("option",{value:"Tlalpan"},"Tlalpan"),l.a.createElement("option",{value:"Venustiano Carranza"},"Venustiano Carranza"),l.a.createElement("option",{value:"Xochimilco"},"Xochimilco")))),l.a.createElement("button",{onHover:"submit",type:"submit"},"Guardar cambios")))))}}]),a}(n.Component),y=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onChange=function(a){var t=e.state;t[a.target.name]=a.target.value,e.setState(t)},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=t.mes,l=t.a\u00f1o,o=t.vendedor,c=t.monto,r=t.cantidad,i=t.equipo,s=t.alcadia;h.a.post("http://localhost:3000/create",{mes:n,"a\xf1o":l,vendedor:o,monto:c,cantidad:r,equipo:i,alcadia:s}).then(function(a){e.props.history.push("/showall")})},e.state={mes:"enero","a\xf1o":"2017",vendedor:"",monto:"",cantidad:"",equipo:"",alcadia:""},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.mes,t=e.a\u00f1o,n=e.vendedor,o=e.monto,c=e.cantidad,r=e.equipo,i=e.alcadia;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Agregar Venta")),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"mes"},"Mes:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"mes",name:"mes",type:"text",value:a,onChange:this.onChange,placeholder:"octubre"},l.a.createElement("option",{value:"enero"},"enero"),l.a.createElement("option",{value:"febrero"},"febrero"),l.a.createElement("option",{value:"marzo"},"marzo"),l.a.createElement("option",{value:"abril"},"abril"),l.a.createElement("option",{value:"mayo"},"mayo"),l.a.createElement("option",{value:"junio"},"junio"),l.a.createElement("option",{value:"julio"},"julio"),l.a.createElement("option",{value:"agosto"},"agosto"),l.a.createElement("option",{value:"septiembre"},"septiembre"),l.a.createElement("option",{value:"octubre"},"octubre"),l.a.createElement("option",{value:"noviembre"},"noviembre"),l.a.createElement("option",{value:"diciembre"},"diciembre")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"a\xf1o"},"A\xf1o:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"a\xf1o",name:"a\xf1o",type:"text",value:t,onChange:this.onChange,placeholder:"2018"},l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"vendedor"},"Vendedor:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"vendedor",name:"vendedor",type:"text",value:n,onChange:this.onChange,placeholder:"A"},l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"B"},"B"),l.a.createElement("option",{value:"C"},"C"),l.a.createElement("option",{value:"D"},"D"),l.a.createElement("option",{value:"E"},"E"),l.a.createElement("option",{value:"F"},"F"),l.a.createElement("option",{value:"G"},"G"),l.a.createElement("option",{value:"H"},"H")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-25"},l.a.createElement("label",{htmlFor:"monto"},"Monto:")),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{id:"monto",name:"monto",type:"text",value:o,onChange:this.onChange,placeholder:"777"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-25"},l.a.createElement("label",{htmlFor:"cantidad"},"Cantidad:")),l.a.createElement("div",{class:"col-75"},l.a.createElement("input",{id:"cantidad",name:"cantidad",type:"text",value:c,onChange:this.onChange,placeholder:"33"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"equipo"},"Equipo:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"equipo",name:"equipo",type:"text",value:r,onChange:this.onChange,placeholder:"1"},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-25"},l.a.createElement("label",{htmlFor:"alcadia"},"Alcad\xeda:")),l.a.createElement("div",{className:"col-75"},l.a.createElement("select",{id:"alcadia",name:"alcadia",type:"text",value:i,onChange:this.onChange,placeholder:"Benito Ju\xe1rez"},l.a.createElement("option",{value:"Alvaro Obreg\xf3n"},"Alvaro Obreg\xf3n"),l.a.createElement("option",{value:"Azcapotzalco"},"Azcapotzalco"),l.a.createElement("option",{value:"Benito Ju\xe1rez"},"Benito Ju\xe1rez"),l.a.createElement("option",{value:"Coyoac\xe1n"},"Coyoac\xe1n"),l.a.createElement("option",{value:"Cuajimalpa de Morelo"},"Cuajimalpa de Morelo"),l.a.createElement("option",{value:"Cuaht\xe9moc"},"Cuaht\xe9moc"),l.a.createElement("option",{value:"Gustavo A Madero"},"Gustavo A Madero"),l.a.createElement("option",{value:"Iztacalco"},"Iztacalco"),l.a.createElement("option",{value:"Iztapalapa"},"Iztapalapa"),l.a.createElement("option",{value:"Magdalena Contreras"},"Magdalena Contreras"),l.a.createElement("option",{value:"Miguel Hidalgo"},"Miguel Hidalgo"),l.a.createElement("option",{value:"Milpa Alta"},"Milpa Alta"),l.a.createElement("option",{value:"Tl\xe1huac"},"Tl\xe1huac"),l.a.createElement("option",{value:"Tlalpan"},"Tlalpan"),l.a.createElement("option",{value:"Venustiano Carranza"},"Venustiano Carranza"),l.a.createElement("option",{value:"Xochimilco"},"Xochimilco")))),l.a.createElement("button",{onHover:"submit",type:"submit"},"Agregar")))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={sale:{}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://localhost:3000/"+this.props.match.params.id).then(function(a){e.setState({sale:a.data}),console.log(e.state.sale)})}},{key:"delete",value:function(e){var a=this;console.log(e),h.a.delete("http://localhost:3000/"+e).then(function(e){a.props.history.push("/showall")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"vendedor ",this.state.sale.vendedor)),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Mes"),l.a.createElement("p",{className:"show-individual2"}," ",this.state.sale.mes)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"A\xf1o"),l.a.createElement("p",{className:"show-individual2"}," ",this.state.sale.a\u00f1o)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Vendedor "),l.a.createElement("p",{className:"show-individual2"},this.state.sale.vendedor)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Monto"),l.a.createElement("p",{className:"show-individual2"},this.state.sale.monto)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Cantidad "),l.a.createElement("p",{className:"show-individual2"},this.state.sale.cantidad)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Equipo "),l.a.createElement("p",{className:"show-individual2"},this.state.sale.equipo)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"show-individual"},"Alcad\xeda "),l.a.createElement("p",{className:"show-individual2"},this.state.sale.alcadia)),l.a.createElement(v.a,{to:"/edit/".concat(this.state.sale._id),className:"btn btn-success"},"Editar"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.sale._id)},"Borrar"))))}}]),a}(n.Component),C=t(13),N=t.n(C),w=(t(23),null),j=null,x=null,O=0,M=0,A=0,I=0,z=0,k=0,H=0,q=0,F=0,V=0,S=0,B=0,D=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={isHidden:!0,sales:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden,sales:[]})}},{key:"componentDidMount",value:function(){var e=this;h.a.get("https://sales-db-keyence.herokuapp.com/showall").then(function(a){e.setState({sales:a.data}),w=e.state.sales.map(function(e){return e.mes}),j=e.state.sales.map(function(e){return e.a\u00f1o}),x=e.state.sales.map(function(e){return e.monto}),function(e,a){for(var t=0;t<e.length;t++)"enero"===e[t]&&"2017"===j[t]?O+=parseInt(a[t]):"febrero"===e[t]&&"2017"===j[t]?M+=parseInt(a[t]):"marzo"===e[t]&&"2017"===j[t]?A+=parseInt(a[t]):"abril"===e[t]&&"2017"===j[t]?I+=parseInt(a[t]):"mayo"===e[t]&&"2017"===j[t]?z+=parseInt(a[t]):"junio"===e[t]&&"2017"===j[t]?k+=parseInt(a[t]):"julio"===e[t]&&"2017"===j[t]?H+=parseInt(a[t]):"agosto"===e[t]&&"2017"===j[t]?q+=parseInt(a[t]):"septiembre"===e[t]&&"2017"===j[t]?F+=parseInt(a[t]):"octubre"===e[t]&&"2017"===j[t]?V+=parseInt(a[t]):"noviembre"===e[t]&&"2017"===j[t]?S+=parseInt(a[t]):"diciembre"===e[t]&&"2017"===j[t]?B+=parseInt(a[t]):B+=parseInt(0)}(w,x)})}},{key:"render",value:function(){var e=[{color:"steelblue",points:[{x:1,y:O},{x:2,y:M},{x:3,y:A},{x:4,y:I},{x:5,y:z},{x:6,y:k},{x:7,y:H},{x:8,y:q},{x:9,y:F},{x:10,y:V},{x:11,y:S},{x:12,y:B}]}];return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"lineChartTitle"},"Ventas por mes durante 2017"),l.a.createElement("button",{className:"displayChart",onClick:this.toggleHidden.bind(this)},"Mostrar gr\xe1fica"),l.a.createElement("div",null,this.state.isHidden&&l.a.createElement("img",{className:"loadingImage",src:"https://res.cloudinary.com/davd4ynha/image/upload/v1540342369/loading.gif",alt:"Loading",width:300,height:300}),!this.state.isHidden&&l.a.createElement(N.a,{width:600,height:400,data:e,xLabel:"Mes",yLabel:"$ MXN",hideYLabel:"true",onPointHover:function(e){return"mes: ".concat(e.x,"<br />monto: ").concat(e.y)}}))))}}]),a}(n.Component),G=null,L=null,T=null,J=0,X=0,$=0,_=0,P=0,W=0,Y=0,K=0,Q=0,R=0,U=0,Z=0,ee=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={isHidden:!0,sales:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden,sales:[]})}},{key:"componentDidMount",value:function(){var e=this;h.a.get("https://sales-db-keyence.herokuapp.com/showall").then(function(a){e.setState({sales:a.data}),G=e.state.sales.map(function(e){return e.mes}),L=e.state.sales.map(function(e){return e.a\u00f1o}),T=e.state.sales.map(function(e){return e.monto}),function(e,a){for(var t=0;t<e.length;t++)"enero"===e[t]&&"2018"===L[t]?J+=parseInt(a[t]):"febrero"===e[t]&&"2018"===L[t]?X+=parseInt(a[t]):"marzo"===e[t]&&"2018"===L[t]?$+=parseInt(a[t]):"abril"===e[t]&&"2018"===L[t]?_+=parseInt(a[t]):"mayo"===e[t]&&"2018"===L[t]?P+=parseInt(a[t]):"junio"===e[t]&&"2018"===L[t]?W+=parseInt(a[t]):"julio"===e[t]&&"2018"===L[t]?Y+=parseInt(a[t]):"agosto"===e[t]&&"2018"===L[t]?K+=parseInt(a[t]):"septiembre"===e[t]&&"2018"===L[t]?Q+=parseInt(a[t]):"octubre"===e[t]&&"2018"===L[t]?R+=parseInt(a[t]):"noviembre"===e[t]&&"2018"===L[t]?U+=parseInt(a[t]):"diciembre"===e[t]&&"2018"===L[t]?Z+=parseInt(a[t]):Z+=parseInt(0)}(G,T)})}},{key:"render",value:function(){var e=[{color:"steelblue",points:[{x:1,y:J},{x:2,y:X},{x:3,y:$},{x:4,y:_},{x:5,y:P},{x:6,y:W},{x:7,y:Y},{x:8,y:K},{x:9,y:Q},{x:10,y:R},{x:11,y:U},{x:12,y:Z}]}];return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"lineChartTitle"},"Ventas por mes durante 2018"),l.a.createElement("button",{className:"displayChart",onClick:this.toggleHidden.bind(this)},"Mostrar gr\xe1fica"),l.a.createElement("div",null,this.state.isHidden&&l.a.createElement("img",{className:"loadingImage",src:"https://res.cloudinary.com/davd4ynha/image/upload/v1540342369/loading.gif",alt:"Loading",width:300,height:300}),!this.state.isHidden&&l.a.createElement(N.a,{width:600,height:400,data:e,xLabel:"Mes",yLabel:"$ MXN",hideYLabel:"true",onPointHover:function(e){return"mes: ".concat(e.x,"<br />monto: ").concat(e.y)}}))))}}]),a}(n.Component),ae=function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:b}),l.a.createElement(p.a,{exact:!0,path:"/showall",component:b}),l.a.createElement(p.a,{exact:!0,path:"/edit/:id",component:g}),l.a.createElement(p.a,{exact:!0,path:"/create",component:y}),l.a.createElement(p.a,{exact:!0,path:"/show/:id",component:f}),l.a.createElement(p.a,{exlact:!0,path:"/line2017",component:D}),l.a.createElement(p.a,{exact:!0,path:"/line2018",component:ee}))},te=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{id:"logo-container"},l.a.createElement("a",{href:"https://www.keyence.com.mx/"},l.a.createElement("img",{id:"logo",src:"https://res.cloudinary.com/davd4ynha/image/upload/v1540307121/logo.png",alt:"Keyence Logo"}))),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/showall"},"Lista de Ventas")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/create"},"Agregar Venta")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/line2017"},"Gr\xe1fica 2017")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/line2018"},"Gr\xe1fica 2018")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://mapa-de-ventas.herokuapp.com/"},"Mapa de Ventas")))))}}]),a}(n.Component),ne=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(te,null),",",l.a.createElement(ae,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=t(60);c.a.render(l.a.createElement(function(){return l.a.createElement(le.a,null,l.a.createElement(ne,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.b8c39ef6.chunk.js.map