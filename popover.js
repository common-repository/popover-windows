/*
// JaxScript 1.0
// JavaScript API for XML Web Services
// http://www.expandablebanners.com
//
// Copyright (c) 2014
// All rights reserved.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the following conditions are met:

	* Redistributions of source code must retain the above copyright notice, 
	  this list of conditions and the following disclaimer.
	* Redistributions in binary form must reproduce the above copyright notice, 
	  this list of conditions and the following disclaimer in the documentation 
	  and/or other materials provided with the distribution.
	* Neither the name of "JaxCore", nor "Dan Steinman" may be used to endorse 
	  or promote products derived from this software without specific prior 
	  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT 
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE.
*/
function occs(bid){
	ccs(bid);
}

function ocso(bid){
	cso(bid);
}

function ocis(bid){
	cis(bid);
}

function ccs(id){
	 var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
				    if(formpostrequest.responseText=="No"){
					   disableAd="Yes";
					}
				  }
				  else{
				  
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
					if(chk[2]=='Exp'){
				       var parameters="action=exp_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Pop'){
					    var parameters="action=pop_clicks&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}else{
				var parameters="action=clicks&id="+id;
				formpostrequest.open("POST", "http://www.popoverwindow.com/calculate.php", true);
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}

function cso(id){
	 var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
				      if(formpostrequest.responseText=="No"){
					    disableAd="Yes";
					}
				  }
				  else{
				 
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
				if(chk[2]=='Exp'){
				       var parameters="action=exp_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Pop'){
					    var parameters="action=pop_opens&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}else{
				var parameters="action=opens&id="+id;
				formpostrequest.open("POST", "http://www.popoverwindow.com/calculate.php", true);
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}

function cis(id){
	  var chk=id.split('|');
       var formpostrequest=new ajaxRequest();
				formpostrequest.onreadystatechange=function(){
				 if (formpostrequest.readyState==4){
				  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
					   if(formpostrequest.responseText=="No"){
					    disableAd="Yes";
					}
				  
				  }
				  else{
				  
				  }
				 }
				};
				if(chk[1]!='' && chk[1]=='Plugin'){
				if(chk[2]=='Exp'){
				       var parameters="action=exp_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Push'){
					    var parameters="action=push_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Slide'){
					    var parameters="action=slide_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}else if(chk[2]=='Pop'){
					    var parameters="action=pop_impressions&id="+chk[0];
				        formpostrequest.open("POST", adm_url+"/admin-ajax.php", true);
					}
				}else{
				var parameters="action=impressions&id="+id;
				formpostrequest.open("POST", "http://www.popoverwindow.com/calculate.php", true);
				}
				formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				formpostrequest.send(parameters);
}

function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}
function echo(o) {
var s = inspect(o);
var c = window.console;
if (c && c.log) c.log(s);
}
function hasProperty(o,p) {
if (isString(p)) {
if (p.indexOf('.')>0) {
var s = p.split('.');
for (var i=0;i<s.length;i++) {
o = o[s[i]];
if (!o) return false;
}
return true;
}
else return typeof o[p]!='undefined';
}
}
function exists(o,p) {
if (!!o && !!p) {
if (arguments.length>2) return existsArray(o,arguments,1);
if (isString(p)) return hasProperty(o,p);
if (isArray(p)) return existsArray(o,p);
}
return false;
}
function existsArray(o,a,start) {
if (!a.length) return false;
for (var i=start||0;i<a.length;i++)
if (!exists(o,a[i])) return false;
return true;
}
var type = {};
function enumerate(s) {
var o = {};
if (isString(s)) s = s.split(",");
if (isArray(s)) {
for (var i in s)
o[s[i]] = parseInt(i)+1;
return o;
}
}
function getFields(o) {
var a = [];
for (var i in o) {
a[a.length] = i;
}
return a;
}
function enumField(enm,field) {  
var i, c = 0;
for (i in enm) {
c = Math.max(c,enm[i]);
}
enm[field] = ++c;
return c;
}
function isType(t,o) {
var f = self['is'+t];
if (isFunction(f)) return f(o);
return false;
}
function areType(t,a) {
var f, i;
if (!!t && isArray(a)) {
for (i=0;i<a.length;i++) {
f = self['is'+t];
if (isFunction(f)) {
if (!f(a[i])) return false;
}
}
return true;
}
return false;
}
function defineType(t, fn, desc) {
if (typeof self['is'+t]=='undefined') {
var v = enumField(type,t);
self['is'+t] = fn;
}
else echo('addType() error: '+name+' is an invalid type');
}
defineType('Null', function(o) {
return o==undefined || typeof o=='undefined' || o==null || o==='';
},'an empty variable');
defineType('True', function(o) {
return o===true;
},'true');
defineType('False', function(o) {
return o===false;
},'false');
defineType('Boolean', function(o) {
return isTrue(o) || isFalse(o);
},'true or false');
defineType('Integer', function(o) {
return parseInt(o)==o;
},'a non-floating point number');
defineType('Float', function(o) {
return parseFloat(o)==Number(o);
},'an integer or floating point number');
defineType('String', function(o) {
return typeof o==='string';
},'JavaScript String object');
defineType('Object', function(o) {
return typeof o==='object';
},'a JavaScript object of any type');
defineType('Array', function(o) {
return Object.prototype.toString.apply(o) === '[object Array]';
},'a JavaScript Array object');
defineType('Function', function(f) {
return typeof f=='function';
},'a JavaScript function of any type');
defineType('Literal', function(o) {
if (isObject(o)) {
var c = 0, i, v;
for (i in o.prototype) c++;
if (c==0) {
for (i in o) {
v = o[i];
if (isObject(v) || isFunction(v)) return false;
}
return true;
}
}
return false;
},'a JavaScript object containing no functions or objects');
defineType('Enum', function(o) {
if (isLiteral(o)) {
for (var i in o) {
if (!isInteger(o[i])) return false;
}
return true;
}
return false;
},'a JavaScript literal containing only integers');
defineType('XML', function(o) {
if (isString(o)) {
o = trim(o);
if (o.indexOf('<')>-1 && o.indexOf('>')>-1) return true; 
}
},'a string containing xml tags');
defineType('Tag', function(o,type) {
return isNode(o) && !!o.nodeName && o.nodeName==type;
},'a Node whose nodeName is defined as "type"');
function arrayContains(a,o) {x
return arrayIndexOf(a,o)>-1;
};
function arrayIndexOf(a,o,s) {
if (isFunction(a.indexOf)) return a.indexOf(o);
for (var i=(s||0); i<a.length; i++)
if (a[i] === o) return i;
echo('arrayIndexOf() : object '+inspect(o)+' is not a member of Array('+inspect(a)+')');
return -1;
};
function arrayRemove(a,o) {
if (isArray(a)) {
var i = arrayIndexOf(a,o);
if (i>-1) a.splice(i,1);
return a;
}
echo('arrayRemove() : argument 0 is not an array: '+inspect(a));
}
function dialog() {
if (self.noDialog) return;
var o,s='';
for (var i=0;i<arguments.length;i++) {
o = arguments[i];
if (isObject(o)) s += inspect(o);
else if (s.toString) s += o.toString();
if (i<arguments.length-1) s += "\n";
}
if (!confirm(s)) {
if (confirm("Quit?")) self.noDialog = true;
}
}
function isReserved(w) {
var r = 'abstract,as,boolean,break,byte,case,catch,char,class,continue,const,debugger,'+
'default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,'+
'goto,if,implements,import,in,instanceof,int,interface,is,long,namespace,native,new,'+
'null,package,private,protected,public,return,short,static,super,switch,synchronized,'+
'this,throw,throws,transient,true,try,typeof,use,var,void,volatile,while,with';
return arrayContains(r.split(','),w);
}
function ucfirst(s) {
return s.charAt(0).toUpperCase()+s.substring(1);
}
function getSeconds(d) {
if (!d) d = new Date();
return d.getTime()/1000;
}
function parseNumber(t) {
if (isString(t)) {
t = t.replace(/[^0-9|\.|-]/g, '');
t = parseFloat(t);
if (isNaN(t)) return 0;
return t;
}
else if (isFloat(t)) return t;
else return 0;
}
function round(n,d) {
var p = !d? 1 : Math.pow(10,d);
return Math.round(parseFloat(n)*p)/p;
}
function trim(s) {
return isString(s)? s.replace(/^\s+|\s+$/g,'') : '';
};
function inspect(o,r) {
if (isString(o)) return o;
if (isFloat(o)) return o;
if (isObject(o)) {
var s = '{\n',t;
var b = (r==false)?'\t\t':'\t';
var v;
for (var i in o) {
v = o[i];
if (isString(v)) s += b+i+' : "'+v.replace('"','\"')+'"';
else if (isBoolean(v)) s += b+i+' : '+(v?'true':'false');
else if (isFloat(v)) s += b+i+' : '+o[i];
else if (isFunction(v)) s += b+i+' : "[Function]"';
else if (isArray(v))  s += b+i+' : "['+t+']"';
else if (isObject(v)) s += b+i+' : "[Object]"';
s += ',\n';
}
s = s.substring(0,s.length-2)+'\n';
if (r==false) s+= '\t';
s += '}';
return s;
}
};
function copy(t,s,p) {
if (!t) return alert('copy() target does not exist'); 
var i,j;
if (!!p) {
for (j in p) {
i = p[j];
t[i] = s[i];
}
}
else for (i in s) {
t[i] = s[i];
}
return t;
}
function print(s,d) {
if (jaxscript.isLoaded()) dom.append(s);
else document.write(s);
}
function println(s,d) {
if (!jaxscript.isBusy() && jaxscript.isLoaded()) {
var e = document.createElement('div');
e.className = "println";
e.innerHTML = s;
dom.append(e);
}
else document.write('<div class="println">'+s+'</div>');
}
var jaxscript = (function() {
var classes = {};
function getClasses() {
return getFields(classes);
}
function getClass(c) {
return isFunction(classes[c])? classes[c] : null;
}
function createClass(classId,proto,superId) {
function Constructor(a,b,d,e,f) {
if (isFunction(this[classId])) {
switch(arguments.length) {
case 0:
this[classId]();
case 1:
this[classId](a);
case 2:
this[classId](a,b);
case 3:
this[classId](a,b,d);
case 4:
this[classId](a,b,d,e);
case 5:
this[classId](a,b,d,e,f);
}
}
}
var c = classes[classId] = Constructor;
var s;
if (superId && isFunction(classes[superId])) {
s = classes[superId];
c.prototype = new s;
}
return defineClass(classId,c,proto,superId);
}
function defineClass(classId, c, proto, superId) {
var s;
if (superId) s = classes[superId];
if (isFunction(proto)) copy(c.prototype,proto());
copy(c.prototype,{
getClass : function() {
return c;
},
getSuper : function() {
return s;
},
callSuper : function(methodName) {
var a = new Array(arguments.length-1);
for (var i=1;i<arguments.length;i++) {
a[i-1] = arguments[i];
}
this.applySuper(methodName,a);
},
applySuper : function(methodName,a) {
this.getSuper().prototype[methodName].apply(this,a);
},
bindEvent : function(element, eventName, methodName) {
if (typeof this[methodName]=='function') {
var me = this;
var binding = {
element : element,
eventName : eventName,
methodName : methodName,
handler : function(e) {
me[methodName](e);
}
}
if (isNull(this.__bindings)) this.__bindings = [];
this.__bindings.push(binding);
dom.addEvent(element, eventName, binding.handler);
echo(classId+'.bindEvent(): binded "'+eventName+'" on '+element.nodeName+((element.id)?'#'+element.id:'')+' to [Object].'+methodName+'(e)');
return true;
}
else echo(classId+'.bindEvent() error: '+methodName+'(e) does not exist');
return false;
},
releaseEvent : function(element, eventName, methodName) {
if (isArray(this.__bindings)) {
for (var i=0;i<this.__bindings.length;i++) {
var binding = this.__bindings[i];
if (binding.element==element && binding.eventName==eventName && binding.methodName==methodName) {
dom.removeEvent(element, eventName, binding.handler);
arrayRemove(this.__bindings,binding);
echo(classId+'.releaseEvent(): released "'+eventName+'" on '+element.nodeName+((element.id)?'#'+element.id:'')+' from [Object].'+methodName+'(e)');
return true;
}
}
}
echo(classId+'.releaseEvent() error: could not find a "'+eventName+'" handler binded to "'+methodName+'()"');
return false;
}
});
copy(c,{
getClassId : function() {
return classId;
},
getSuperId : function() {
if (s) return superId;
},
extend : function(id, cons, p) {
echo('extending '+classId+' to '+id);
cons.prototype = new c; 
cons.prototype[classId] = c; 
defineClass(id, cons, p, classId);
},
implement : function(p,id) {
var omit = ['getClass','getSuper','callSuper','applySuper'];
for (var i in c.prototype) {
if (typeof p[i]=='undefined') {
p[i] = c.prototype[i];
}
}
return p;
},
isInstance : function(o) {
var v = false;
if (!!o && typeof o.getClass=='function') {
var cls = o.getClass();
if (cls.getClassId() == classId) return true;
else if (cls.getSuperId()) {
while (cls = classes[cls.getSuperId()]) {
if (cls.getClassId() == classId) return true;
}
}
}
else echo('o is not an instance of '+classId);
return v;
}
});
echo('jaxscript class '+classId+' defined');
return c;
}
var Class = createClass('Class');
var start = getSeconds();
var runs = [];
var busy = true;
var loaded = false;
var domloaded = false;
var supported = false;
var version = 0.1;
var feats = {};
var css = [];
var D = window.document;
function main() {
domloaded = true;
if (!jaxscript.allCSSLoaded()) {
setTimeout(main,1);
return;
}
busy = false;
loaded = true;
for (var i=0;i<runs.length;i++) {
runs[i]();
}
echo('jaxscript types are '+getFields(type).join(', '));
echo('jaxscript client is '+getUserAgent());
echo('jaxscript server is '+location.host);
echo('jaxscript '+version+' loaded in '+round(getSeconds()-start,3)+' seconds');
}
function allCSSLoaded() {
var c = jaxscript.css;
if (c.length==0 || features('activex')) return true;
var loaded = 0;
var s = D.styleSheets;
for (var i=0; i<s.length; i++) {
if (features('gecko')) {
try {
if (!s[i].cssRules) return false;
}
catch(e) {
return false;
}
}
if (s[i].cssRules) {
for (var j=0; j<c.length; j++) {
if (s[i].href==c[j].href && !s[i].disabled) loaded++;
}
}
}
return loaded==c.length;
}
function getUserAgent() {
return (typeof navigator=='object')? navigator.userAgent : '';
}
function getPlugin(s) {
var a = navigator.plugins;
if (a.length>0)
for (i=0;i<a.length;i++)
if (a[i].name.indexOf(s) > -1)
return a[i];
}
function addFeature(id,name,test) {
feats[id] = {
name : name,
test : test
};
}
function features(id,v) {
if (feats[id]) return feats[id].test(v);
return false;
}
addFeature('activex','ActiveX',function() {
return typeof ActiveXObject=='object' || typeof ActiveXObject=='function';
});
addFeature('fixed','CSS-P Fixed Position extension',function(v) {
return !features('activex');
});
addFeature('cookies','Browser cookies',function(v) {
D.cookie = "1";
return D.cookie.indexOf("1")>-1;
});
addFeature('dom','Document Object Model',function(v) {
if (!v) v = 1;
var cv = 0;
if (
( typeof D.addEventListener=='function' &&
(typeof DOMParser=='function'||typeof DOMParser=='object') &&
(typeof XMLSerializer=='function'||typeof XMLSerializer=='object') &&
(typeof XSLTProcessor=='function'||typeof XSLTProcessor=='object') ) ||
(features('activex') && typeof self.attachEvent=='object' && typeof D.getElementById=='object')
) cv = 2;
if (typeof D.adoptNode=='function') cv = 3;
return cv >= v;
});
addFeature('ecma','ECMAScript',function(v) {
if (!v) v = 1;
var cv = 0;
if (typeof [].pop=='function' && typeof parseFloat=='function' && typeof decodeURIComponent=='function')
cv = 3;
return cv >= v;
});
addFeature('flash','Adobe Shockwave Flash',function(v) {
return !!getPlugin("Shockwave Flash");
});
addFeature('gecko','Gecko HTML Rendering Engine',function() {
return getUserAgent().toLowerCase().indexOf("gecko")>-1 && !features("webkit");  
});
addFeature('webkit','WebKit HTML Rendering Engine',function() {
return getUserAgent().toLowerCase().indexOf("webkit")>-1;
});
addFeature('safari','Safari version of WebKit',function() {
return features("webkit") && getUserAgent().toLowerCase().indexOf("safari")>-1 && !features("chrome");  
});
addFeature('chrome','Chrome version of WebKit',function() {
return features("webkit") && getUserAgent().indexOf("Chrome")>-1;
});
addFeature('iphone','Apple iPhone/iPod',function() {
return features("webkit") && getUserAgent().indexOf("iPhone")>-1 || getUserAgent().indexOf("iPod")>-1;
});
addFeature('java','Sun Microsystems Java',function() {
return typeof java=='object' && !!getPlugin("Java");
});
addFeature('js','JavaScript',function(v) {
if (!v) v = 1;
var cv = 1.5; 
if (typeof [].indexOf=='function' && typeof [].forEach=='function')
cv = 1.6;
return cv > v;
});
addFeature('xhr','XMLHTTPRequest communication',function() {
return features('activex') || typeof XMLHttpRequest=='function' || typeof XMLHttpRequest=='object';
});
if (typeof D.onreadystatechange=='object') { 
supported = true;
D.onreadystatechange = function() {
if (D.readyState == "complete") {
main();
}
};
}
else if (typeof D.addEventListener=='function') {
supported = true;
D.addEventListener("DOMContentLoaded", main, true);  
}
if (!isSupported()) unsupported();
function isBusy() {
return busy;
}
function isLoaded() {
return domloaded; 
}
function isSupported() {
return supported;
}
function unsupported() {
if (confirm('Sorry. Your web browser is unsupported.\n\nWould you like to upgrade?'))
top.location = 'http://www.jaxcore.com/upgrade/';
};
function run(f, first) {
if (domloaded) f();
else if (first) runs.unshift(f);
else runs.push(f);
};
return {
Class : Class,
css : css,
main : main,
allCSSLoaded : allCSSLoaded,
createClass : createClass,
defineClass : defineClass,
getClasses : getClasses,
getClass : getClass,
getPlugin : getPlugin,
getUserAgent : getUserAgent,
features : features,
addFeature : addFeature,
isBusy : isBusy,
isLoaded : isLoaded,
isSupported : isSupported,
unsupported : unsupported,
run : run
};
})();
jaxscript.inspect = inspect;
defineType('Node', function(n,t) {
var b = (isObject(n) && exists(n,['nodeType','nodeName']));
if (b && isString(t))
return n.nodeName.toUpperCase()==t.toUpperCase();
return b;
},'a DOM Node');
defineType('Window', function(o) {
return o==window || o.nodeName=='frame' || o.nodeName=='iframe';  
},'a browser window or frame element');
defineType('Document', function(o) {
return isNode(o) && o.nodeType==1||o.nodeType==9;
},'a DOM Document');
defineType('Element', function(o) {
return isNode(o) && isChild(o,document.body);
},'a DOM Node that is a child of document.body');
defineType('Event', function(e) {
if (!!self.event) return e===self.event;
else return (isObject(e) && !!e.type);  
},'a DOM Event object');
var dom = jaxscript.dom = (function() {
function id(s,d) {
if (isObject(s)) return s;
if (isString(s)) {
if (!d) d = document;
var o = d.getElementById(s);
if (!!o) return o;
}
};
function dimensions(o,frame) {
var x=y=w=h=0;
var f = !!frame? frame : window;
var d = f.document;
var b = d.body;
var de = d.documentElement;
if (o=='#document') {
if (exists(f,'innerWidth','innerHeight','scrollMaxY','scrollMaxY')) { 
w = f.innerWidth + f.scrollMaxX;
h = f.innerHeight + f.scrollMaxY;
}
else if (exists(b,'scrollWidth','offsetWidth','scrollHeight','offsetHeight')) { 
w = (b.scrollWidth > b.offsetWidth)? b.scrollWidth : b.offsetWidth;
h = (b.scrollHeight > b.offsetHeight)? b.scrollHeight : b.offsetHeight;
}
else if (exists(f,'innerHeight','innerHeight')) { 
w = f.innerWidth,
h = f.innerHeight
}
else if (exists(b,'offsetWidth','offsetHeight')) {
echo('dimensions(document) : falling back to offsetWidth/Height');
w = b.offsetWidth;
h = b.offsetHeight;
}
if (exists(b,'scrollLeft','scrollTop')) {
x = b.scrollLeft;
y = b.scrollTop;
}
if (x==0 && y==0 && exists(de,'scrollLeft','scrollTop')) {
x = de.scrollLeft;
y = de.scrollTop;
}
}
else if (o=='#window') {
if (exists(f,'innerWidth','innerHeight')) {
w = f.innerWidth;
h = f.innerHeight;
}
else if (exists(b,'clientWidth','clientHeight')) {
w = b.clientWidth;
h = b.clientHeight;
}
else if (exists(de,'clientWidth','clientHeight')) {
w = de.clientWidth;
h = de.clientHeight;
}
if (jaxscript.features('activex')) {
x = f.screenLeft;
y = f.screenTop;
}
else {
x = f.screenX;
y = f.screenY;
}
}
else if (o=='#screen') {
w = screen.width;
h = screen.height;
}
else {
o = id(o);
if (!!o) {
var sx = 0;
if (b && b.scrollLeft) sx = b.scrollLeft;
if (de && de.scrollLeft) sx = de.scrollLeft;
var sy = 0;
if (b && b.scrollTop) sy = b.scrollTop;
if (de && de.scrollTop) sy = de.scrollTop;
var r;
if (o.getBoundingClientRect) { 
r = o.getBoundingClientRect();
x = r.left + sx;
y = r.top + sy;
w = r.right - r.left;
h = r.bottom - r.top;
}
else if (d.getBoxObjectFor) { 
r = d.getBoxObjectFor(o);
x = r.x;
y = r.y;
w = r.width;
h = r.height;
}
else {  
return offsetDimensions(o);
}
}
}
return {x:round(x),y:round(y),w:round(w),h:round(h)};
};
function offsetDimensions(o) {
var x=y=0;
var w = o.offsetWidth;
var h = o.offsetHeight;
while (o.offsetParent) {
x += o.offsetLeft;
y += o.offsetTop;
o = o.offsetParent;
}
var d = document;
x += (d.body.scrollLeft || d.documentElement.scrollLeft || 0);
y += (d.body.scrollTop || d.documentElement.scrollTop || 0);
return {x:x,y:y,w:w,h:h};
};
function addClass(n,c) { 
n = id(n);
if (!n) {
echo('dom.addClass() error: element not found '+n);
return;
}
if (n.nodeType==1) {
if (!hasClass(n,c)) {
if (isNull(n.className)) n.className = c;
else n.className += " "+c;
}
}
return n;
};
function children(n) {
n = id(n);
if (n && n.childNodes && n.childNodes.length>0) return n.childNodes;
else return [];
}
function findParent(n,tag) {
n = id(n);
while (n.parentNode) {
if (n.parentNode.tagName.toUpperCase()==tag.toUpperCase())
return n.parentNode;
n = n.parentNode;
}
};
function findClass(tagAndOrClass,parentNode) {
var node = !!parentNode? id(parentNode) : document.body;
var r = [];
if (!node) return r;
var n;
var dot = tagAndOrClass.indexOf('.');
if (dot>=0) {  
var tagname = tagAndOrClass.substring(0,dot);
var className = tagAndOrClass.substring(dot+1);
var nodes = node.getElementsByTagName(tagname);
for (var i=0;i<nodes.length;i++) {
nd = nodes[i];
if (hasClass(nd,className)) r.push(nd);
}
}
else {  
walkDOM(node, function(nd) {
if (hasClass(nd,cname)) r.push(nd);
});
}
return r;
};
function hasClass(n,cname) {
n = id(n);
return !!n.className && (n.className==cname || arrayIndexOf(n.className.split(' '),cname)>-1);
};
function cssLoaded(link,handler) {
var loaded = false;
var s = document.styleSheets;
for (var i=0;i<s.length;i++) {
if (s[i].href==link.href) {
try {
if (!!s[i].cssRules || !!s[i].rules) {
echo('loaded stylesheet '+link.href);
handler();
return;
}
}
catch(e) {}
}
}
setTimeout(function() {
cssLoaded(link,handler);
},10);
}
function insertTag(o) {
var s = document.createElement(o.tagName);
for (var i in o.attributes) {
s.setAttribute(i,o.attributes[i]);
}
if (o.attributes.type && typeof o.handler=='function') {
if (o.attributes.type=='text/javascript') {
var h = function() {
echo('loaded script '+s.src);
o.handler();
}
if (typeof s.onreadystatechange=='Object') {
s.onreadystatechange = function() {
if (s.readyState=='loaded') h();
};
return;
}
else if (jaxscript.features('webkit')) {
var t = setInterval(function() {
if (document.readyState=='complete') {
clearInterval(t);
h();
}
},10);
}
else s.onload = h;
}
if (o.attributes.type=='text/css') {
cssLoaded(s,o.handler);
}
}
if (o.after) after(s, o.after);
else if (o.before) before(s, o.before);
else if (o.prepend) prepend(s, o.prepend);
else if (o.append) {
if (o.append=='#head') append(s, document.getElementsByTagName('head')[0]);
else append(s, o.append);
}
else append(s);
return s;
};
function after(n, s) {
s.parentNode.insertBefore(id(n), s.nextSibling);
};
function before(n, s) {
s.parentNode.insertBefore(id(n), s);
}
function hasChildren(o) {
return isNode(o) && o.childNodes.length>0;
}
function prepend(n, p) {
if (jaxscript.isLoaded()) {
n = id(n);
if (!p && exists(document,'body')) p = document.body;
if (hasChildren(n)) before(n, p.childNodes[0]);
else append(n, p);
return n;
}
else echo("dom.prepend() error: cannot be called before the DOM is initialized");
}
function append(n, p) {
if (jaxscript.isLoaded()) {
n = id(n);
if (!p && exists(document,'body')) p = document.body;
if (!!p && !!p.appendChild) p.appendChild(n);
return n;
}
else echo("dom.append() error: cannot be called before the DOM is initialized");
}
function isChild(n,p) {
return isParent(p,n);
};
function isParent(p,n) {
p = id(p);
n = id(n);
if (jaxscript.features('activex') && typeof p.contains == 'function' && n.nodeType == 1) {  
return n==p || p.contains(n);
}
while (n) {
if (n===p) return true;
if (!!n.parentNode) n = n.parentNode;
else return false;
}
return false;
};
function isSibling(n,s) { 
s = id(s);
var c = id(n).parentNode.childNodes;
for (var i=0;i<c.length;i++)
if (c[i]==s) return true;
return false;
};
function loadCSS(css,fn) {
if (!jaxscript.isLoaded()) {
var i = jaxscript.css.length;
document.write('<link id="_sheet_'+i+'" rel="stylesheet" type="text/css" href="'+css+'" />');
jaxscript.css[i] = id('_sheet_'+i);
echo('wrote stylesheet '+css);
if (isFunction(fn)) {
jaxscript.run(function() {
fn();
});
}
}
else return insertTag({
tagName : 'link',
handler : fn,
attributes : {
href : css,
type : 'text/css',
rel : 'stylesheet'
},
append : '#head'
});
};
function loadJS(js,fn) {
if (!jaxscript.isLoaded()) {
document.write('<script type="text/javascript" src="'+js+'"><\/script>');
echo('wrote script '+js);
if (isFunction(fn)) {
jaxscript.run(function() {
fn();
});
}
}
else return insertTag({
tagName : 'script',
handler : fn,
attributes : {
src : js,
type : 'text/javascript'
},
append : '#head'
});
};
function loadDOM(url) {
var r = request({
url : url,
method : "get",
async : false
});
return r.responseXML;
};
function replaceClass(n,className,newClassName) {
n = id(n);
if (hasClass(n,className)) n.className = n.className.replace(className,newClassName);
return n;
};
function removeClass(n,c) {
if (hasClass(n,c)) n.className = trim(n.className.replace(c,'').replace('  ',''));
};
function walk(n, fn) {
if (n.nodeName && n.childNodes) {
fn(n);
n = n.firstChild;
while (n) {
walk(n,f);
n = n.nextSibling;
}
}
else if (isArray(n)) { 
for (var i in n) {
fn(n[i]);
}
}
};
function outerHTML(n,deep) {
if (!isNode(n)) return '';
if (n.outerHTML) return n.outerHTML;
else {
var d = document.createElement('div');
var clone = n.cloneNode(deep);
dom.append(clone,d);
return d.innerHTML;
}
}
function addEvent(n,e,h,p) {
n = id(n);
if (n) {
if (n.addEventListener) n.addEventListener(e,h,(p==null)?false:p);
else if (n.attachEvent) n.attachEvent("on"+e,h);
}
else echo('addEvent node does not exists');
}
function removeEvent(n,e,h,p) {
n = id(n);
if (n) {
if (n.removeEventListener) n.removeEventListener(e,h,(p==null)?false:p);
else if (n.detachEvent) n.detachEvent("on"+e,h);
}
else echo('addEvent node does not exists');
}
function cancelEvent(e) {
e.cancelBubble = true;
e.returnValue = false;
if (e.stopPropagation) e.stopPropagation();
if (e.preventDefault) e.preventDefault();
return false;
};
function eventPosition(e) {
if (window.event) {
e = window.event;
var b = document.body;
return {
x : e.clientX + b.scrollLeft,
y : e.clientY + b.scrollTop
};
}
else if (exists(e,'pageX','pageY')) return {x:e.pageX,y:e.pageY};
else return null;
};
function relatedTarget(e) {
var r = e.relatedTarget;
if (r) {
try {
r.nodeName;
}
catch (e) {
if (r.nodeType==3) return r.parentNode; 
echo('error: relatedTarget() had an invalid node');
return null;
}
return r;
}
if (window.event) {
if (e.type=="mouseover" && window.event.fromElement) return window.event.fromElement;
if (e.type=="mouseout" && window.event.toElement) return window.event.toElement;
}
}
function eventTarget(e) {
var t = (e && e.target)? e.target : window.event.srcElement;
return (t.nodeType == 3)? t.parentNode:t; 
};
function request(o) {
if (!jaxscript.features('xhr')) return unsupported();
o = o||{};
if (!o.method) o.method = "get";
if (o.async==null) o.async = true;
if (o.cache===false) url += url.indexOf('?')>0?'&':'?'+'nocache='+Math.random().toString().substring(2);
var r = (typeof XMLHttpRequest=='function' || typeof XMLHttpRequest=='object')? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
r.open(o.method,o.url,o.async);
r.onreadystatechange = function(){
if (r.readyState==4) {
if (r.status == 200 && typeof o.handler=='function') return o.handler(r);
if (typeof o.errorHandler=='function') o.errorHandler(r);
}
};
r.send('');
return r;
};
return {
id : id,
dimensions : dimensions,
offsetDimensions : offsetDimensions,
addClass : addClass,
children : children,
findParent : findParent,
findClass : findClass,
hasClass : hasClass,
insertTag : insertTag,
append : append,
prepend : prepend,
after : after,
before : before,
isChild : isChild,
isParent : isParent,
isSibling : isSibling,
loadCSS : loadCSS,
loadJS : loadJS,
loadDOM : loadDOM,
removeClass : removeClass,
replaceClass : replaceClass,
walk : walk,
outerHTML : outerHTML,
addEvent : addEvent,
removeEvent : removeEvent,
cancelEvent : cancelEvent,
eventPosition : eventPosition,
relatedTarget : relatedTarget,
eventTarget : eventTarget,
request : request
};
})();
function id(i) {
alert('id '+i);
}
defineType('CSSDelcaration', function(o) {
if (isString(o)) return o.indexOf(':')>1;
},'a CSS declaration (the stuff inside CSS brackets)');
defineType('CSSRule', function(o) {
if (isString(o)) return o.indexOf(':')>1;
},'a CSS Rule');
defineType('Style', isLiteral, 'a JavaScript literal representing CSS declarations');
var style = jaxscript.style = (function() {
function clip(n,i) {
return set(n,{
clip : (i&&i.length==4)? 'rect('+i[0]+'px '+i[1]+'px '+i[2]+'px '+i[3]+'px)' : 'auto'
});
}
function display(n,b) {
var s = b? 'block' : 'none';
return set(n,{
display : s
});
}
function getClip(n) {
n = dom.id(n);
var c = n.style.clip;
if (c && c.indexOf('rect(') == 0) {
c = c.replace("rect(","");
c = c.replace(")","");
var v = c.split(" ");
for (var i in v) v[i] = parseInt(v[i]);
return v;
}
else return [0, n.offsetWidth, n.offsetHeight, 0];
}
function getOpacity(n) {
n = dom.id(n);
return isFloat(n.style.opacity)? parseFloat(n.style.opacity) : 1;
}
function get(n,s) {
n = dom.id(n);
if (isString(s)) {
if (s=="opacity") return isFloat(n.style.opacity)? n.style.opacity : 1;
if (!!document.defaultView) return document.defaultView.getComputedStyle(n,"").getPropertyValue(transform.camel2dash(s));
else if (n.currentStyle) return n.currentStyle[s];
else if (n.style[s]) return n.style[s];
else if (isNode(n)) echo('error: style.get() could not obtain style for node '+node.nodeName+'#'+n.id);
}
}
function getXY(n) {
n = dom.id(n);
return {
x : parseInt(get(n,'left')),
y : parseInt(get(n,'top'))
}
};
var _z = 5000; 
function maxZ(n) {
return set(n,{zIndex:++_z});
}
function getSize(n) {
return {
w : parseInt(get(n,'width')),
h : parseInt(get(n,'height'))
}
}
function mk(s) {
var p = [
{node : type.Node},
{nodeId : type.String}
];
p[0][s] = p[1][s] = type.Integer;
return function(n,x) {
var o = {};
o[s] = px(x);
return set(n,o);
}
}
var left = mk('left');
var right = mk('right');
var top = mk('top');
var bottom = mk('bottom');
var width = mk('width');
var height = mk('height');
function move(n,x,y) {
return set(n,{
left:px(x),
top:px(y)
});
}
function opacity(n,f) {
n = dom.id(n);
f = parseFloat(f);
if (f<0) f = 0;
if (f>1) f = 1;
n.style.opacity = f;
if (jaxscript.features('activex')) n.style.filter = 'alpha(opacity='+f*100+')';
return n;
}
function px(i) {
return round(parseNumber(i))+'px';
}
function size(n,w,h) {
return set(n,{
width:px(w),
height:px(h)
});
}
function set(o,s) {
var n = dom.id(o);
if (!!n) {
if (isArray(n)) {  
for (var i=0;i<n.length;i++)
copy(n[i].style,s);
}
else if (!!n.style) {
copy(n.style,s);
return n;
}
}
echo('style.set() error: element '+(isString(o)?o:'')+' does not exist, properties were '+inspect(s));
}
function swap(a,b) {
display(a,0);
display(b,1);
}
function show(o) {
return visible(o,true);
}
function hide(o) {
return visible(o,false);
}
function visible(n,b) {
return set(n,{visibility:b?'visible':'hidden'});
}
function getRule(selector, stylesheet, returnIndex) {
var sheets = (!!stylesheet)? [stylesheet] : document.styleSheets;
var s,r,i,j;
for (i=0; i<sheets.length; i++) {
s = sheets[i];
r = (!!s.cssRules)? s.cssRules : s.rules;
for (j=0; j<r.length; j++) {
if (r[j].selectorText == selector) {
if (returnIndex) return j;
else return r[j];
}
}
}
if (returnIndex) return -1;
}
function createRule(selector,styles,stylesheet) {
if (!stylesheet) stylesheet = document.styleSheets[0];
if (typeof stylesheet.addRule=='object' || typeof stylesheet.addRule=='function') {
var r = stylesheet.addRule(selector, styles, 0);
}
else if (typeof stylesheet.insertRule=='function') {
var r = stylesheet.insertRule(selector+' {'+styles+'}', 0);
}
return getRule(selector, stylesheet);
}
function deleteRule(selector, stylesheet) {
var r = getRule(selector, stylesheet);
var i = getRule(selector, r.parentStyleSheet, true);
if (i>-1 && !!r && !!r.parentStyleSheet) {
if (r.parentStyleSheet.deleteRule) {
r.parentStyleSheet.deleteRule(i);
}
else if (r.parentStyleSheet.deleteRule) {
r.parentStyleSheet.removeRule(i);
}
}
}
return {
clip : clip,
display : display,
getClip : getClip,
getOpacity : getOpacity,
getSize : getSize,
get : get,
getXY : getXY,
maxZ : maxZ,
move : move,
opacity : opacity,
size : size,
set : set,
visible : visible,
left : left,
top : top,
right : right,
bottom : bottom,
width : width,
height : height,
show : show,
hide : hide,
getRule : getRule,
createRule : createRule,
deleteRule : deleteRule
}
})();var fx = jaxscript.fx = (function() {
function fadeIn(n,fn) {
fade(n,1,fn);
}
function fadeOut(n,fn) {
fade(n,0,fn);
}
function fadeCancel(n) {
if (!!n._fadeTimer) clearTimeout(n._fadeTimer);
}
function fade(n,limit,fn,inc,s) {
n = dom.id(n);
style.opacity(n, style.getOpacity(n));  
if (inc==null) inc = 0.1;
else inc = Math.abs(inc);
if (s==null) s = 50;
if (limit==null || limit<0) limit = 0;
if (limit>1) limit = 1;
if (style.getOpacity(n)>limit) inc = -inc;
fadeCancel(n);
fadeStep(n,limit,fn,inc,s);
};
function fadeStep(n,limit,fn,inc,s) {
var x = parseFloat(style.getOpacity(n) + inc).toFixed(1);
if (inc>0 && x>limit || inc<0 && x<limit) x = limit;
style.opacity(n,x);
if (x!=limit)
n._fadeTimer = setTimeout(function() {
fadeStep(n,limit,fn,inc,s);
},s);
else {
if (fn) fn();
}
};
return {
fade : fade,
fadeIn : fadeIn,
fadeOut : fadeOut,
fadeCancel : fadeCancel
}
})();
var transform = jaxscript.transform = (function() {
function dash2camel(s) {
var i;
while(s.indexOf('-')>-1) {
i = s.indexOf('-');
s = s.substring(0,i)+s.charAt(i+1).toUpperCase()+s.substring(i+2);
}
return s;
}
function camel2dash(s) {
var i;
while(s.search(/[A-Z]/)>-1) {
i = s.search(/[A-Z]/);
s = s.substring(0,i)+'-'+s.charAt(i).toLowerCase()+s.substring(i+1);
}
return s;
}
function style2css(s) {
var c = '';
for (var i in s) {
if (isFloat(s[i]) || isString(s[i])) {
c += dash2camel(i)+':'+s[i]+'; ';
}
}
return c;
}
function css2style(c) {
var s = {};
var p = c.split(';');
var x;
for (var i=0;i<p.length;i++) {
if (isString(p[i])) {
x = p[i].split(':');
if (x.length==2) s[transform.dash2camel(trim(x[0]))] = x[1];
}
}
return s;
}
function param2obj(url) {
if (!url) url = window.location.search;
if (url.indexOf('?')>-1) url = url.substring(url.indexOf('?')+1);
var o = {};
var q = url.length>1?url.split("&"):[];
for (var i=0;i<q.length;i++)
o[q[i].match(/^[^=]+/)] = unescape(q[i].replace(/^[^=]+=?/, ""));
return o;
}
function obj2param(o) { 
var i, a = [];
for (i in o) {
a[a.length] = i + '=' + encodeURIComponent(o[i]);
}
return a.join('&');
}
function attr2json(n,json) {
var a;
for (var i=0;i<n.attributes.length;i++) {
a = n.attributes[i];
json[a.nodeName] = trim(a.nodeValue);
}
return json;
}
function node2json(n) {
n = id(n);
var json;
var l = n.childNodes.length;
var i;
if (l==0) { 
if (n.attributes && n.attributes.length>0) {
json = attr2json(n,{});
}
}
else {
var childnodes = [];
var child;
var isarray = true;  
for (i=0;i<n.childNodes.length;i++) {
child = n.childNodes[i];
if (child.nodeName=="#text") {
continue;
}
l = childnodes.length;
childnodes[l] = child;
if (isarray && l>0) {
if (childnodes[l-1].nodeName != child.nodeName) isarray = false;
}
}
if (childnodes.length==0) {
var v = trim(n.childNodes[0].nodeValue);
json = (v=="")?null:v;
}
else if (childnodes.length==1) {
json = attr2json(n,{});
json[childnodes[0].nodeName] = node2json(childnodes[0]);
}
else {
if (isarray) {
var arrayname = childnodes[0].nodeName;
json = {};
json[arrayname] = [];
for (i=0;i<childnodes.length;i++) {
json[arrayname][i] = node2json(childnodes[i]);
}
}
else {
json = {};
for (i=0;i<childnodes.length;i++) {
child = childnodes[i];
json[child.nodeName] = node2json(child);
}
}
}
}
return json;
}
function dom2json(d) {
if (d.childNodes.length>=1) {
var n = d.childNodes[0];
var j = {};
j[n.nodeName] = node2json(n);
return j;
}
return {};
}
function dom2xml(n) {
if (typeof XMLSerializer=='function') return (new XMLSerializer()).serializeToString(n);
else if (n.xml) return n.xml;
echo('dom2xml() error: could not serialize DOM to XML, not supported');
}
function json2dom(json) {
return xml2dom(json2xml(json));
}
function xmlstr(s) {
if (s.indexOf('\n')>-1 && s.indexOf('<![CDATA[')==-1) return '<![CDATA[' + s + ']]>';
else return trim(s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace('\'','&apos;'));
}
function json2xml(o,tag,addDefinition) {
var xml = (addDefinition)? '<?xml version="1.0"?>\n':'';
if (isArray(o))
for (var i=0;i<o.length;i++)
xml += json2xml(o[i],tag);
else {
var start = (tag)?'<'+tag+'>':'';
var end = (tag)?'</'+tag+'>':'';
if (isInteger(o) || isFloat(o)) xml += start + o + end;
if (isBoolean(o)) xml += start + o + end;
else if (isString(o)) xml += start + xmlstr(o) + end;
else if (isObject(o)) {
xml += start;
for (var i in o)
xml += json2xml(o[i],i);
xml += end;
}
}
return xml;
}
function stripXML(xml) {
xml = xml.replace(/\r/g,'');
xml = xml.replace(/\n/g,'\uffff');
xml = xml.replace(/<\!(.*?)>/g,"");
xml = xml.replace(/<\?(.*?)\?>/g,"");
xml = xml.replace(/\uffff/g,'\n');
return trim(xml);
}
function xml2dom(xml) {
var d,p;
xml = stripXML(xml);
if (typeof DOMParser=='function' || typeof DOMParser=='object') {
try {
p = new DOMParser();
d = p.parseFromString(xml,"text/xml");
}
catch (e) {
echo('transform.xml2dom() error: '+e.message);
}
}
else if (jaxscript.features('activex')) {
try {
d = new ActiveXObject("Microsoft.XMLDOM");
d.async = false;
d.loadXML(xml);
}
catch (e) {
echo('transform.xml2dom() error: '+e.message);
}
}
return d;
}
function xml2json(xml) {
return dom2json(xml2dom(xml));
}
function obj2json(o, nullStrings, depth) {
if (!!o) {
var json = {};
for (var i in o) {
var v = o[i];
if (!!v) {
if (isArray(v)) {
json[i] = v;
}
else if (isObject(v)) {
var o_json = obj2json(v,nullStrings,(depth>1)?--depth:0);
if (o_json) json[i] = o_json;
}
else if (!isFunction(v)) json[i] = v;
}
else if (nullStrings) json[i] = '';
}
return json;
}
else if (nullStrings) return {};
}
function quote(s) {
var fn = function (a) {
var meta = {
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'"' : '\\"',
'\\': '\\\\'
}
var c = meta[a];
return typeof c === type.String ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
};
var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
return c.test(s)? '"' + s.replace(c, fn) + '"' : '"' + s + '"';
}
function json2string(o,k) {
var s = '';
if (isArray(o)) {
var a = [];
for (var i=0; i<o.length; i++) {
a.push(json2string(o[i]));
}
s = '[' +a.join(',') + ']';
}
else if (isObject(o)) {
var a = [];
for (var i in o) {
if (typeof o[i]!='function') {
a.push(quote(i) + ':' + json2string(o[i]));
}
}
s = '{' + a.join(',') + '}';
}
else if (isString(o)) s = quote(o);
else if (isInteger(o) || isFloat(o)) {
if (isFinite(o)) s = String(o);
else echo('transform.json2string','value of '+o+' is not finite');
}
else if (isBoolean(o)) s = String(o);
else if (isNull(o)) s = '""';
else echo('transform.json2string','value '+inspect(o)+' could not be converted to a JSON string');
if (isString(k)) return '{' + quote(k) + ':' + s + '}';
else return s;
}
function string2json(s) {
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if (cx.test(s)) {
s = s.replace(cx, function(a) {
echo('string2json() : string contains control characters : \n'+s);
return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
});
}
return eval('(' + s + ')');
}
function xslt(xsldom, xmldom, returnType) {
if (isString(xsldom)) xsldom = dom.loadDOM(xsldom);
if (isString(xmldom)) xmldom = dom.loadDOM(xmldom);
if (!!xsldom && !!xsldom.childNodes && !!xmldom && !!xmldom.childNodes) {
if ((typeof XSLTProcessor=='function' && typeof XMLSerializer=='function') || (typeof XSLTProcessor=='object' && typeof XMLSerializer=='object')) {
var p=new XSLTProcessor(),s=new XMLSerializer();
p.importStylesheet(xsldom);
if (returnType=="fragment") return p.transformToFragment(xmldom,document);
if (returnType=="document") return p.transformToDocument(xmldom);
var t = p.transformToFragment(xmldom,document);  
if (!!t.childNodes) {
return s.serializeToString(t,"text/xml");
}
else echo('transform.xslt() : transformation result had no nodes');
return '';
}
else if (typeof ActiveXObject=='function') {
var xml = xmldom.transformNode(xsldom);
if (returnType=="document" || returnType=="fragment") return xml2dom(xml);
else return xml;
}
else unsupported();
}
echo('transform.xslt() error : invalid DOM document(s)');
return (returnType=="dom")?null:"";
}
return {
dash2camel : dash2camel,
camel2dash : camel2dash,
style2css : style2css,
css2style : css2style,
param2obj : param2obj,
obj2param : obj2param,
attr2json : attr2json,
node2json : node2json,
dom2json : dom2json,
dom2xml : dom2xml,
json2dom : json2dom,
xmlstr : xmlstr,
json2xml : json2xml,
stripXML : stripXML,
xml2dom : xml2dom,
xml2json : xml2json,
obj2json : obj2json,
json2string : json2string,
string2json : string2json,
xslt : xslt
};
})();






/*
PopoverWindow JavaScript Component
Copyright (C) 2010 JaxCore.com

this component was purchased from:
http://www.PopoverWindow.com

Visit us today to purchase your very own window code generator,
You'll be creating custom windows instantly!
*/

var PopoverWindow = new function() {
	this.path = '';
	this.loadingURL = 'loading.html';
	this.ready = false;
	this.shown = false;
	this.autoURL = '';
	this.defaultCount = 0;
	
	// default options
	this.defaults = {

		// settings
		width : 500,
		height : 400,
		left : null,
		top : null,
		icon : 'default',
		title : 'PopoverWindow',
		footer: 'Footer Text',
		showOverlay : true,
		overlayClose : true,
		scrolling : true,
		showClose : true,
		fadeIn : true,
		fadeOut : true,
		drag : true,
		resize : true,
		roundedCorners : 0,
		zindex: 99999,
		shadow: true,
		extraClose:'',
		shadowOptions:"0px 0px 19px 6px #333",
		cookie: 'No',
		hours: 24,
		closeButton: 'closebig.png',
		// theme
		titleFont : 'sans-serif',
		titleColor : 'black',
		titleSize : '8pt',
		titleWeight : 'normal',
		windowColor : '#c0c0c0',
		overlayColor : '000',
		overlayOpacity : 0.7,
		pageBorder : true,
		pageBorderSize : 1,
		pageBorderColor : '888',
		pageBorderStyle : 'solid',
		titlePadding : 2,
		windowPadding : 5
		
	};
	this.options = null;
	
	// setting the path is important
	// it is relative to the webpage from which the popup is launched
	// or you can set the full URL such as "http://example.com/popover/media"
	// no trailing slash on the path is required

	this.setPath = function(path) {
		this.path = path;
		this.loadingURL = path + '/loading.html';
	};
	
	this.overlayClick = function() {
		if (this.options.overlayClose){ this.hide();if(this.options.extraClose!=''){eval(this.options.extraClose);}}
	}
	
	// assigns events
	this.init = function() {
		var pid = 'popover';
		PopoverWindow.insert(pid);
		
		if (dom.id(pid+'_main')) {
			this.elm = this.elements('popover');
			
			style.opacity(this.elm.overlay,0);
			
			var me = this;
			dom.addEvent(this.elm.overlay,'mousedown',function() {
				me.overlayClick();
			});
			dom.addEvent(this.elm.close,'mousedown',function() {
				me.hide();
				if(me.options.extraClose!=''){eval(me.options.extraClose);}
			});
			dom.addEvent(this.elm.close,'mouseover',function() {
				me.closeOver();
			});
			dom.addEvent(this.elm.close,'mouseout',function() {
				me.closeOut();
			});
			dom.addEvent(this.elm.title,'mousedown',function(e) {
				me.dragStart(e);
			});
			dom.addEvent(this.elm.resize,'mousedown',function(e) {
				me.resizeStart(e);
			});
			dom.addEvent(document,'mouseup',function(e) {
				me.dragEnd(e);
				me.resizeEnd(e);
			});
			
			style.opacity(this.elm.cover,0);
			dom.addEvent(document,'mousemove',function(e) {  //this.elm.cover
				me.dragMove(e);
				me.resizeMove(e);
			});
			
			dom.addEvent(window,'scroll',function() {
				me.reset();
			});
			dom.addEvent(window,'resize',function() {
				me.resize();
			});
			
			PopoverWindow.ready = true;
			if (this.autoURL) this.show(this.autoURL);
		}
		//else alert(overlay+"PopoverWindow Error: DIV#popover_main element not found");
	};
	
	this.insert = function(pid,generator) {
		if (!generator) {
			
			var overlay = document.createElement('div');
			overlay.id = pid+'_overlay';
			overlay.className = 'popover_overlay';
			
			document.body.appendChild(overlay);
			
			var mousecover = document.createElement('div');
			mousecover.id = pid+'_mousecover';
			mousecover.className = 'popover_mousecover';
			document.body.appendChild(mousecover);
		}
		
		var main = document.createElement('div');
		main.id = pid+'_main';
		main.className = 'popover_main';
		
		//if(this.defaults.outsideShadow){main.style="-moz-box-shadow: 0px 0px 19px 6px #000; -webkit-box-shadow: 0px 0px 19px 6px #000; box-shadow: 0px 0px 19px 6px #000;";}
		if (generator) main.style.position = 'relative';
		else main.style.position = (jaxscript.features('fixed'))? 'fixed':'absolute';
		
		main.innerHTML = '<div id="'+pid+'_titlebar" class="popover_titlebar">\
			<a id="'+pid+'_title" class="popover_title" href="javascript://" title="Click to move Window"></a>\
			<a id="'+pid+'_close" class="popover_close" href="javascript://" title="Close Window"><img src="'+this.path+'/img/'+this.defaults.closeButton+'"/></a>\
		</div>\
		<a id="'+pid+'_resize" class="popover_resize" href="javascript://"></a>\
		<div id="'+pid+'_content" class="popover_content">'+
			(generator? 
			'<div id="'+pid+'_iframe" class="popover_iframe"></div>'
			:
			'<iframe id="'+pid+'_iframe" class="popover_iframe" src="'+this.loadingURL+'" frameborder="0"></iframe>'
			)+
		'<div id="'+pid+'_footerbar" class="popover_footerbar">\
		<div id="'+pid+'_footer" class="popover_footer" href="javascript://"></div>\
		</div></div>';
		
		if (generator) dom.id('popover_generator').appendChild(main);
		else document.body.appendChild(main);
	};
	
	this.defaultLoad = function() {
		this.defaultCount++;
		if (this.defaultCount>1) {
			this.hide();
		}
	};
	
	this.closeOver = function() {
		//this.elm.close.style.backgroundImage = 'url('+this.path+'/img/closebig.png)';
	};
	this.closeOut = function() {
		//this.elm.close.style.backgroundImage = 'url('+this.path+'/img/closebig.png)';
	};
	
	this.setTheme = function(theme) {
		this.theme = theme;
	};
	
	this.setOptions = function(options) {
		if (!options) options = this.defaults;
		for (var i in this.defaults) {
			if (typeof options[i]=='undefined') {
				options[i] = this.defaults[i];
			}
			else {
				if (parseInt(options[i])==options[i]) options[i] = parseInt(options[i]);
			}
		}
		this.options = options;
		
		return options;
	};
	
	// colorSync is an optional feature to synchronize the background of the popup page
	// this is not necessary if you explicitly set the background color in the CSS of your popover page.
	// to the color assigned in the PopupWindow options
	// to use this feature inclue the following code in your popup page html:
	/*
	
	<script language="javascript">
	if (parent.PopoverWindow) parent.this.colorSync(this);
	</script>
	
	*/
	this.colorSync = function(iframe) {
		if (this.options && this.options.pageColor) {
			var body;
			if (iframe.document) body = iframe.document.body;
			if (iframe.contentWindow) iframe.contentWindow.document.body;
			if (body) body.style.backgroundColor = this.options.pageColor;
		}
	};
	
	this.elements = function(pid) {
		return {
			main : dom.id(pid+'_main'),
			content : dom.id(pid+'_content'),
			iframe : dom.id(pid+'_iframe'),
			overlay : dom.id(pid+'_overlay'),
			close : dom.id(pid+'_close'),
			title : dom.id(pid+'_title'),
			footer:dom.id(pid+'_footer'),
			resize : dom.id(pid+'_resize'),
			tab : dom.id(pid+'_tab'),
			titlebar : dom.id(pid+'_titlebar'),
			footerbar : dom.id(pid+'_footerbar'),
			cover : dom.id(pid+'_mousecover')
		}
	}
	
	this.show = function(url, options, generator, nwidth, nheight) {
		
	
		if (!jaxscript.isSupported()) {
			top.location = url;
			return;
		}

		// chrome doesn't redisplay the scrollbar if you hide it, and then show it
		//if (!generator && !jaxscript.supports('chrome') && !jaxscript.supports('activex')) document.body.style.overflow = "hidden";
		
		if (options) this.setOptions(options);
		var options = this.options;
		 if(options.width>=window.innerWidth){options.width=window.innerWidth-(window.innerWidth/20);}else if((window.innerWidth-options.width)<150){options.width=window.innerWidth-(window.innerWidth/20);}
		console.log(window.innerWidth+' '+options.width);
			if(url!=null &&  options.cookie=="Yes"){
				
			if(document.getElementById("popCookie")==null){
		    var popcook=document.createElement('div');
			popcook.id = 'popCookie';
			popcook.appendChild(this.elm.overlay);
			popcook.appendChild(this.elm.cover);
			popcook.appendChild(this.elm.main);
			document.body.appendChild(popcook);
			}
			
		
		  var hours = parseInt(options.hours);
			var popCookie = document.getElementById("popCookie");
if (readCookie("seenpopCookie")) {
    popCookie.style.display="none";
}else {
    popCookie.style.display="block";
    createCookie("seenpopCookie", "yes", hours);
}
		}
		if (!this.ready) {
			this.autoURL = url;
			return; // auto show on init?
		}
		var d = (generator)? this.elements('generator') : this.elm;
		
		if (!generator) {
			style.visible(d.overlay,false);
			if (options.overlayColor!=null) {
				if (options.overlayColor=='0') options.overlayColor = '000'
				d.overlay.style.backgroundColor = '#'+options.overlayColor;
			}
		}
		if(options.shadow){
		  
		    dom.id('popover_main').style.mozBoxShadow=options.shadowOptions;
		   dom.id('popover_main').style.webkitBoxShadow=options.shadowOptions;
		   dom.id('popover_main').style.boxShadow=options.shadowOptions;
		}else{
		  
		    dom.id('popover_main').style.mozBoxShadow="none";
		   dom.id('popover_main').style.webkitBoxShadow="none";
		   dom.id('popover_main').style.boxShadow="none";
		  
		}
		this.elm.main.style.zIndex = options.zindex;
		this.elm.overlay.style.zIndex = options.zindex-2;
		if (options.showClose) {
			d.close.innerHTML = '<img src="'+this.path+'/img/'+options.closeButton+'"/>';
			d.close.style.display = 'block';
			d.close.style.zIndex= parseInt(this.elm.main.style.zIndex)+2;
			if(options.title!=""){
			   d.close.style.right = -12+'px';
			   if(options.windowPadding>12){
			       d.close.style.right = -options.windowPadding+'px';
			   }
			}else{
				d.close.style.right = -20-options.windowPadding+'px';
				if(options.windowPadding>12){
			       d.close.style.right = -24-options.windowPadding+'px';
			   }
			}
			d.close.style.top = (options.windowPadding + options.titlePadding-20-options.windowPadding)+'px';
		}
		else {
			style.display(d.close,false);
		}
		console.log(options.roundedCorners);
		d.content.className = (parseInt(options.roundedCorners)!=0)? 'popover_content popover_roundcontent':'popover_content';
		d.titlebar.className = (parseInt(options.roundedCorners)!=0)? 'popover_titlebar popover_titlebarround':'popover_titlebar';
		
		d.iframe.scrolling = (options.scrolling)? 'auto':'no';
		
		if (generator) {
			options.width = 250;
			options.height = 200;
			if (!!options.pageBorderSize) {
				
			if (options.pageBorderColor=='0') options.pageBorderColor = '000';
			dom.id('generator_main').style.border = options.pageBorderSize+'px '+options.pageBorderStyle+' #'+options.pageBorderColor;
			
		}else{ 
		d.iframe.style.border = '0';
		dom.id('generator_main').style.border = '0';
		}
		}
				
		if (options.resize) {
			style.show(d.resize);
		}
		else {
			style.hide(d.resize);
		}
		
		d.content.style.padding = parseInt(options.windowPadding)+'px';
		
		if (!!options.pageBorderSize) {
			if (options.pageBorderColor=='0') options.pageBorderColor = '000';
			d.iframe.style.border = options.pageBorderSize+'px '+options.pageBorderStyle+' #'+options.pageBorderColor;
			d.main.style.border = options.pageBorderSize+'px '+options.pageBorderStyle+' #'+options.pageBorderColor;
		}
		else{ d.iframe.style.border = '0';
		d.main.style.border = '0';
		}
		
		d.iframe.style.backgroundColor = '#'+options.pageColor;
		
		if (options.icon) {
			d.title.style.paddingLeft = '20px';
			//d.footer.style.paddingLeft = '20px';
			var file = options.icon;
			if (file.indexOf('.')==-1) file += '.png';
			d.title.style.background = 'url('+this.path+'/img/'+file+') no-repeat center left';
		}
		else {
			d.title.style.paddingLeft = '0px';
			d.title.style.background = '';
			d.footer.style.paddingLeft = '0px';
			d.footer.style.background = '';
		}
		
		d.title.style.color = '#'+options.titleColor;
		d.title.style.fontFamily = options.titleFont;
		d.title.style.fontSize = options.titleSize;
		d.title.style.fontWeight = options.titleWeight;
		d.title.style.paddingTop = options.titlePadding+'px';
		d.title.style.paddingBottom = options.titlePadding+'px';
		
		d.footer.style.color = '#'+options.titleColor;
		d.footer.style.fontFamily = options.titleFont;
		d.footer.style.fontSize = options.titleSize;
		d.footer.style.fontWeight = options.titleWeight;
		d.footer.style.paddingTop = options.titlePadding+'px';
		d.footer.style.paddingBottom = options.titlePadding+'px';
		
		d.title.innerHTML = options.title;
		d.footer.innerHTML = options.footer;
		if(options.windowColor==0){
		     options.windowColor='000000';
		}
		d.content.style.backgroundColor = '#'+options.windowColor;
		//d.content.style.border=0;
		if(options.title!=""){
			d.titlebar.style.paddingLeft = options.windowPadding+'px';
			d.titlebar.style.paddingTop = options.windowPadding+'px';
			d.titlebar.style.paddingRight = options.windowPadding+'px';
		}else{
		    d.titlebar.style.paddingLeft = '0px';
			d.titlebar.style.paddingTop = '0px';
			d.titlebar.style.paddingRight = '0px';
			
		}
		
		d.titlebar.style.backgroundColor = '#'+options.windowColor;
		
		d.main.style.backgroundColor = '#'+options.windowColor;
		
		
		d.footerbar.style.paddingLeft = '0px';
		d.footerbar.style.paddingBottom = '0px';
		d.footerbar.style.backgroundColor = '#'+options.windowColor;
	   
		this.resizeWindow(options.width,options.height, generator);
		 d.main.style.borderRadius=options.roundedCorners+'px';
		  d.main.style.webkitBorderRadius=options.roundedCorners+'px';
		  d.main.style.mozBorderRadius=options.roundedCorners+'px';
		   d.iframe.style.borderRadius=options.roundedCorners+'px';
		  d.iframe.style.webkitBorderRadius=options.roundedCorners+'px';
		  d.iframe.style.mozBorderRadius=options.roundedCorners+'px';
		    d.content.style.borderRadius=options.roundedCorners+'px';
		  d.content.style.webkitBorderRadius=options.roundedCorners+'px';
		  d.content.style.mozBorderRadius=options.roundedCorners+'px';
		d.content.style.borderTopLeftRadius=options.roundedCorners+'px';
		  d.content.style.webkitBorderTopLeftRadius=options.roundedCorners+'px';
		  d.content.style.mozBorderTopLeftRadius=options.roundedCorners+'px';
		  d.content.style.borderTopRightRadius=options.roundedCorners+'px';
		  d.content.style.webkitBorderTopRightRadius=options.roundedCorners+'px';
		  d.content.style.mozBorderTopRightRadius=options.roundedCorners+'px'
		 
		   d.titlebar.style.border=0;
		  
		        d.titlebar.style.borderTopLeftRadius=options.roundedCorners+'px';
		 d.titlebar.style.webkitBorderTopLeftRadius=options.roundedCorners+'px';
		  d.titlebar.style.mozBorderTopLeftRadius=options.roundedCorners+'px';
		  d.titlebar.style.borderTopRightRadius=options.roundedCorners+'px';
		 d.titlebar.style.webkitBorderTopRightRadius=options.roundedCorners+'px';
		  d.titlebar.style.mozBorderTopRightRadius=options.roundedCorners+'px';
		  
		 if(options.title==""){
		  
		    d.content.style.borderTop=d.main.style.borderTop;
			// d.footerbar.style.border='none';
		  if(options.windowPadding<5){
		   d.content.style.borderBottom='none';
		   d.content.style.borderRight='none';
		   d.content.style.borderLeft='none';
		   }
		  }else{
		  d.content.style.borderTop='none';
		   d.content.style.borderRight='none';
		   d.content.style.borderLeft='none';
		   d.content.style.borderBottom='none';
		   d.titlebar.style.borderBottom='none';
		   d.titlebar.style.borderRight='none';
		   d.titlebar.style.borderLeft='none';
		  }
		  d.footerbar.style.border = 0;
		  if(options.footer!=""){
		      d.footerbar.style.borderBottomLeftRadius=options.roundedCorners+'px';
		 d.footerbar.style.webkitBorderBottomLeftRadius=options.roundedCorners+'px';
		  d.footerbar.style.mozBorderBottomLeftRadius=options.roundedCorners+'px';
		  d.footerbar.style.borderBottomRightRadius=options.roundedCorners+'px';
		 d.footerbar.style.webkitBorderBottomRightRadius=options.roundedCorners+'px';
		  d.footerbar.style.mozBorderBottomRightRadius=options.roundedCorners+'px'; 
		  }
		if (!generator) {
			this.resize(true);
			this.reset(true);
			
		}
		
		if (generator) {
			style.visible(d.main,true);
		}
		else {
			if (url) {
			    if(isUrl(url)){
				d.iframe.src = url;
				}else{
				 // d.iframe.body.innerHTML=document.getElementById(url).innerHTML;
				 
					 url=url.split('|').join('"');	
					  url=url.split("~").join("</");	
					url=url.split("^").join("'");
				  var doc = d.iframe.document;
					if(d.iframe.contentDocument)
						doc = d.iframe.contentDocument; // For NS6
					else if(d.iframe.contentWindow)
						doc = d.iframe.contentWindow.document; // For IE5.5 and IE6
					// Put the content in the iframe
					doc.open();
					doc.writeln('<style type="text/css">body{ margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px;}img{max-width:100%;}div{max-width:100%;}iframe{max-width:100%;}</style><base target="_parent" />'+url);
					doc.close();
				}
				style.visible(d.overlay,true);
				if (options.fadeIn) {
					var me = this;
					fx.fade(d.overlay,options.overlayOpacity,function() {
						style.visible(d.main,true);
						me.shown = true;
					},0.1,20);
				}
				else {
					style.opacity(d.overlay,options.overlayOpacity);
					style.visible(d.overlay,true);
					style.visible(d.main,true);
					this.shown = true;
				}
				 d.iframe.innerHTML='<style type="text/css">body{ margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px;}img{max-width:100%;}div{max-width:100%;}iframe{max-width:100%;}</style><base target="_parent" />'+d.iframe.innerHTML;
				 
			}
			
		}
		this.onShow();
		
	};
	
	this.resizeWindow = function(width,height,generator) {
		var d = (generator)? this.elements('generator') : this.elm;
		var options = this.options;
		
		if (width<50) width = 50;
		if (height<30) height = 30;
		style.size(d.iframe,width,height);
		
		var cw = parseInt(width)+parseInt(options.pageBorderSize)*2;
		if (jaxscript.features('activex')) {
			cw -= options.pageBorderSize*2;
		}
		d.content.style.width = cw+'px';
		
		var mainwidth = width+options.pageBorderSize*2+options.windowPadding*2;

		var titleDim = dom.dimensions(d.title);
		var footerDim =dom.dimensions(d.footer);
		
		if(options.footer=="" && options.title==""){
		   footerDim.h=0;
			
		}
		if(options.title==""){
		   titleDim.h=0;
		   
		}
		var mainheight = height+(options.pageBorderSize*2)+(options.windowPadding*2) + titleDim.h + footerDim.h;
		
		d.content.style.height = height + footerDim.h +options.windowPadding;
		
		style.size(d.main,mainwidth,mainheight);
		style.size(d.content,cw,height+footerDim.h+options.windowPadding);
		var tabd = dom.dimensions(d.title);
		var tabf =dom.dimensions(d.footer);
		
		
		var tbw = width+options.pageBorderSize*2;
		if (jaxscript.features('activex')) {
			tbw = dom.dimensions(d.content).w;
		}
		if(options.footer==""){
		     tabf.h=0;
		}
		if(options.title==""){
		  tabd.h=0;
		}
		style.size(d.titlebar,tbw,tabd.h);
		style.size(d.footerbar,tbw,tabf.h);
		var tbd = dom.dimensions(d.titlebar);
		d.content.style.top = tbd.h+'px';
         var tbdf = dom.dimensions(d.footerbar);
		d.content.style.bottom = tbdf.h+'px';
		var title_dim = dom.dimensions(d.title);
		var titleH = title_dim.h + options.windowPadding;
		var footer_dim = dom.dimensions(d.footer);
		var footerH = footer_dim.h + options.windowPadding;
		style.move(d.resize,width-15+parseInt(options.pageBorderSize)*2+parseInt(options.windowPadding)*2,height-16+parseInt(options.pageBorderSize)*2+parseInt(options.windowPadding)*2+titleH+footerH);
		diframe=dom.dimensions(d.iframe);
		style.size(d.content,cw,diframe.h+tbdf.h);
		dcontent=dom.dimensions(d.content);
		dtitlebar=dom.dimensions(d.titlebar);
		
		
		style.size(d.main,mainwidth,dcontent.h+dtitlebar.h);
		
	}
	
	this.update = function(options) {
		dom.id('generator_main').style.zIndex = options.zindex;
		dom.id('popover_main').style.zIndex = options.zindex;
		dom.id('popover_overlay').style.zIndex = options.zindex-2;
		dom.id('generator_main').style.zIndex = dom.id('popover_overlay').style.zIndex -2;
		if(options.shadow){
		   dom.id('generator_main').style.mozBoxShadow=options.shadowOptions;
		   dom.id('generator_main').style.webkitBoxShadow=options.shadowOptions;
		   dom.id('generator_main').style.boxShadow=options.shadowOptions;
		    dom.id('popover_main').style.mozBoxShadow=options.shadowOptions;
		   dom.id('popover_main').style.webkitBoxShadow=options.shadowOptions;
		   dom.id('popover_main').style.boxShadow=options.shadowOptions;
		}else{
		  dom.id('generator_main').style.mozBoxShadow="none";
		   dom.id('generator_main').style.webkitBoxShadow="none";
		   dom.id('generator_main').style.boxShadow="none";
		    dom.id('popover_main').style.mozBoxShadow="none";
		   dom.id('popover_main').style.webkitBoxShadow="none";
		   dom.id('popover_main').style.boxShadow="none";
		  
		}
		  
		  dom.id('generator_main').style.borderRadius=options.roundedCorners+'px';
		  dom.id('generator_main').style.webkitBorderRadius=options.roundedCorners+'px';
		  dom.id('generator_main').style.mozBorderRadius=options.roundedCorners+'px';
		
		this.show(null,options,true);
	}
	
	this.hide = function() {
		
		if (this.options.fadeOut) {
			style.visible(this.elm.main,false);
			
			var pop = this;
			
			fx.fade(this.elm.overlay,0,function() {
			    console.log('closing4');
				pop._hide();
				
			},0.1,20); 
		}
		else this._hide();
	};
	this._hide = function() {
		style.visible(this.elm.main,false);
		style.visible(this.elm.resize,false);
		style.visible(this.elm.overlay,false);
		//style.size(this.elm.overlay,0,0);
		//document.body.style.overflow = "auto";
		this.defaultCount = 0;
		this.elm.iframe.src = this.loadingURL;
		this.shown = false;
		this.onHide();
	};
	
	this.onShow = function() {};
	this.onHide = function() {};
	
	this.resize = function(override) {
		if (this.shown || override) {
			var win = dom.dimensions('#window');
			var page = dom.dimensions('#document');
			var w = win.w;
			var h = Math.max(page.h,win.h);
			//style.size(this.elm.overlay, w, h);
			style.height(this.elm.overlay, h);
		}
	};
	
	this.reset = function(override) {
		if (this.shown || override) {
			var window_size = dom.dimensions('#window');
			var page = dom.dimensions('#document');
			
			var main_size = dom.dimensions(this.elm.main);
			var content_size = dom.dimensions(this.elm.content);
			
			var x=y=0;
			
			var offsetX = (jaxscript.features('fixed'))? 0:page.x;
			var offsetY = (jaxscript.features('fixed'))? 0:page.y;
			x = offsetX + window_size.w/2-main_size.w/2;
			y = offsetY + window_size.h/2-content_size.h/2 - 30;
			
			if (x<0) x = 0;
			if (y<0) y = 0;
			
			if (this.options.left!=='') x = this.options.left;
			if (this.options.top!=='') y = this.options.top;
			
			style.move(this.elm.main,x,y);
		}
	};
	
	this.dragStart = function(e) {
		if (this.options.drag) {
			var target = dom.eventTarget(e);
			this.mainXY = style.getXY(this.elm.main);
			this.startPos = dom.eventPosition(e);
			var d = dom.dimensions(this.elm.overlay);
			this.isDragging = true;
			style.size(this.elm.cover, d.w, d.h);
			style.visible(this.elm.cover,true);
			
			return dom.cancelEvent(e);
		}
	};
	
	this.dragEnd = function(e) {
		var c = this.elm.cover;
		this.isDragging = false;
		style.size(c,0,0);
		style.visible(c,false);		
	};
	
	this.dragMove = function(e) {
		if (this.isDragging) {
			var currentPos = dom.eventPosition(e);
			var b = document.body;
			var dx = currentPos.x - this.startPos.x;
			var dy = currentPos.y - this.startPos.y;
			var x = this.mainXY.x + dx; // - this.docDim.x;
			var y = this.mainXY.y + dy; // - this.docDim.y;
			if (x<3) x=3;
			if (y<6) y=6;
			style.move(this.elm.main,x,y);
		}
	};
	
	this.resizeStart = function(e) {
		if (this.options.resize) {
			var target = dom.eventTarget(e);
			this.mainDim = dom.dimensions(this.elm.main);
			this.startPos = dom.eventPosition(e);
			
			this.resizeW = parseInt(this.elm.iframe.style.width);
			this.resizeH = parseInt(this.elm.iframe.style.height);
			
			this.minWidth = Math.max(dom.dimensions(this.elm.tab).w+20,80);
			
			var d = dom.dimensions(this.elm.overlay);
			
			this.isResizing = true;
			
			style.size(this.elm.cover, d.w, d.h);
			style.visible(this.elm.cover,true);
			this.elm.cover.style.cursor = 'resize';
			
			return dom.cancelEvent(e);
		}
	};
	
	this.resizeEnd = function(e) {
		this.isResizing = false;
		style.size(this.elm.cover,0,0);
		style.visible(this.elm.cover,false);
	};
	
	this.resizeMove = function(e) {
		if (!this.isResizing) return;
		var currentPos = dom.eventPosition(e);
		var dx = currentPos.x - this.startPos.x;
		var dy = currentPos.y - this.startPos.y;
		
		var nwidth = this.resizeW + dx;
		var nheight = this.resizeH + dy;
		
		this.resizeWindow(nwidth,nheight,false);
	};
	
	this.maximize = function(e) {
		style.move(this.elm.main,3,6);
		var window_size = dom.dimensions('#window');
		this.elm.iframe.style.width = window_size.w-40+'px';
		this.elm.iframe.style.height = window_size.h-60+'px';
	};

};

jaxscript.run(function() {
	PopoverWindow.init();
});

function createCookie(name,value,hours) {
if (hours) {
var date = new Date();
date.setTime(date.getTime()+(hours*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
 
function eraseCookie(name) {
createCookie(name,"",-1);
}

function isUrl(s) {
  var uc=s.split('.');
  console.log(uc[uc.length-1]);
  if(uc[uc.length-1]=="html" || uc[uc.length-1]=="htm" || uc[uc.length-1]=="php" || uc[uc.length-1]=="asp" || uc[uc.length-1]=="aspx" || uc[uc.length-1]=="xhtml" || uc[uc.length-1]=="jhtml" || uc[uc.length-1]=="jsp" || uc[uc.length-1]=="jspx" || uc[uc.length-1]=="phtml" || uc[uc.length-1]=="xml" || uc[uc.length-1]=="asx" || uc[uc.length-1]=="asmx") return true;
  else return false;

}
