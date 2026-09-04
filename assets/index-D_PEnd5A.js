(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="173",Fl=0,ba=1,Bl=2,Nc=1,Oc=2,xn=3,On=0,Oe=1,Ne=2,Dn=0,Ti=1,wa=2,Ta=3,Aa=4,kl=5,Zn=100,zl=101,Gl=102,Hl=103,Vl=104,Wl=200,Xl=201,ql=202,Yl=203,eo=204,no=205,Kl=206,$l=207,Zl=208,Jl=209,jl=210,Ql=211,th=212,eh=213,nh=214,io=0,so=1,ro=2,Ri=3,oo=4,ao=5,co=6,lo=7,Fc=0,ih=1,sh=2,Un=0,rh=1,oh=2,ah=3,Bc=4,ch=5,lh=6,hh=7,kc=300,Li=301,Pi=302,ho=303,uo=304,cr=306,fo=1e3,jn=1001,po=1002,ze=1003,uh=1004,ms=1005,an=1006,gr=1007,Qn=1008,En=1009,zc=1010,Gc=1011,os=1012,$o=1013,ti=1014,cn=1015,as=1016,Zo=1017,Jo=1018,Ii=1020,Hc=35902,Vc=1021,Wc=1022,nn=1023,Xc=1024,qc=1025,Ai=1026,Di=1027,jo=1028,Qo=1029,Yc=1030,ta=1031,ea=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,yo=37492,Mo=37496,So=37808,Eo=37809,bo=37810,wo=37811,To=37812,Ao=37813,Co=37814,Ro=37815,Lo=37816,Po=37817,Io=37818,Do=37819,Uo=37820,No=37821,Ks=36492,Oo=36494,Fo=36495,Kc=36283,Bo=36284,ko=36285,zo=36286,dh=3200,fh=3201,$c=0,ph=1,Pn="",Xe="srgb",Ui="srgb-linear",nr="linear",te="srgb",ri=7680,Ca=519,mh=512,gh=513,_h=514,Zc=515,vh=516,xh=517,yh=518,Mh=519,Go=35044,Ra="300 es",yn=2e3,ir=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let La=1234567;const ns=Math.PI/180,Ni=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ft(i,t,e){return Math.max(t,Math.min(e,i))}function na(i,t){return(i%t+t)%t}function Sh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eh(i,t,e){return i!==t?(e-i)/(t-i):0}function is(i,t,e){return(1-e)*i+e*t}function bh(i,t,e,n){return is(i,t,1-Math.exp(-e*n))}function wh(i,t=1){return t-Math.abs(na(i,t*2)-t)}function Th(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ah(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ch(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rh(i,t){return i+Math.random()*(t-i)}function Lh(i){return i*(.5-Math.random())}function Ph(i){i!==void 0&&(La=i);let t=La+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ih(i){return i*ns}function Dh(i){return i*Ni}function Uh(i){return(i&i-1)===0&&i!==0}function Nh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bh={DEG2RAD:ns,RAD2DEG:Ni,generateUUID:Mn,clamp:Ft,euclideanModulo:na,mapLinear:Sh,inverseLerp:Eh,lerp:is,damp:bh,pingpong:wh,smoothstep:Th,smootherstep:Ah,randInt:Ch,randFloat:Rh,randFloatSpread:Lh,seededRandom:Ph,degToRad:Ih,radToDeg:Dh,isPowerOfTwo:Uh,ceilPowerOfTwo:Nh,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:Fh,normalize:Qt,denormalize:en};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],b=s[1],_=s[4],v=s[7],C=s[2],R=s[5],L=s[8];return r[0]=o*x+a*b+c*C,r[3]=o*m+a*_+c*R,r[6]=o*d+a*v+c*L,r[1]=l*x+h*b+u*C,r[4]=l*m+h*_+u*R,r[7]=l*d+h*v+u*L,r[2]=f*x+p*b+g*C,r[5]=f*m+p*_+g*R,r[8]=f*d+p*v+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Ut;function Jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){const i=sr("canvas");return i.style.display="block",i}const Pa={};function bi(i){i in Pa||(Pa[i]=!0,console.warn(i))}function zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ia=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Da=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?nr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:t,whitePoint:n,transfer:nr,toXYZ:Ia,fromXYZ:Da,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Ia,fromXYZ:Da,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const Yt=Vh();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class Wh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=sr("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xh=0;class jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vr(s[o].image)):r.push(vr(s[o]))}else r=vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Ce extends Bi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=jn,s=jn,r=an,o=Qn,a=nn,c=En,l=Ce.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Mn(),this.name="",this.source=new jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=kc;Ce.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(p+1)/2,C=(d+1)/2,R=(h+f)/4,L=(u+x)/4,w=(g+m)/4;return _>v&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=L/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=L/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yh extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*x,b=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const C=Math.sqrt(_),R=Math.atan2(C,d*b);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*b;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new T,Ua=new cs;class ii{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),_s.subVectors(this.max,Vi),ai.subVectors(t.a,Vi),ci.subVectors(t.b,Vi),li.subVectors(t.c,Vi),wn.subVectors(ci,ai),Tn.subVectors(li,ci),Gn.subVectors(ai,li);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!yr(e,ai,ci,li,_s)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,ai,ci,li,_s))?!1:(vs.crossVectors(wn,Tn),e=[vs.x,vs.y,vs.z],yr(e,ai,ci,li,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new T,new T,new T,new T,new T,new T,new T,new T],Ze=new T,gs=new ii,ai=new T,ci=new T,li=new T,wn=new T,Tn=new T,Gn=new T,Vi=new T,_s=new T,vs=new T,Hn=new T;function yr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);const a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $h=new ii,Wi=new T,Mr=new T;class ls{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Mr)),this.expandByPoint(Wi.copy(t.center).sub(Mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new T,Sr=new T,xs=new T,An=new T,Er=new T,ys=new T,br=new T;class Zh{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xs),a=An.dot(this.direction),c=-An.dot(xs),l=An.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sr).addScaledVector(xs,f),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){Er.subVectors(e,t),ys.subVectors(n,t),br.crossVectors(Er,ys);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(ys.crossVectors(An,ys));if(c<0)return null;const l=a*this.direction.dot(Er.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,jh)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Cn.crossVectors(n,Be),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Cn.crossVectors(n,Be)),Cn.normalize(),Ms.crossVectors(Be,Cn),s[0]=Cn.x,s[4]=Ms.x,s[8]=Be.x,s[1]=Cn.y,s[5]=Ms.y,s[9]=Be.y,s[2]=Cn.z,s[6]=Ms.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],b=n[3],_=n[7],v=n[11],C=n[15],R=s[0],L=s[4],w=s[8],E=s[12],y=s[1],P=s[5],B=s[9],F=s[13],W=s[2],Y=s[6],V=s[10],J=s[14],z=s[3],it=s[7],lt=s[11],St=s[15];return r[0]=o*R+a*y+c*W+l*z,r[4]=o*L+a*P+c*Y+l*it,r[8]=o*w+a*B+c*V+l*lt,r[12]=o*E+a*F+c*J+l*St,r[1]=h*R+u*y+f*W+p*z,r[5]=h*L+u*P+f*Y+p*it,r[9]=h*w+u*B+f*V+p*lt,r[13]=h*E+u*F+f*J+p*St,r[2]=g*R+x*y+m*W+d*z,r[6]=g*L+x*P+m*Y+d*it,r[10]=g*w+x*B+m*V+d*lt,r[14]=g*E+x*F+m*J+d*St,r[3]=b*R+_*y+v*W+C*z,r[7]=b*L+_*P+v*Y+C*it,r[11]=b*w+_*B+v*V+C*lt,r[15]=b*E+_*F+v*J+C*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],b=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,_=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,v=h*x*l-g*u*l+g*a*p-o*x*p-h*a*d+o*u*d,C=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,R=e*b+n*_+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=b*L,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*L,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*d+n*c*d)*L,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*L,t[4]=_*L,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*L,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*L,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*L,t[8]=v*L,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*L,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*d+e*a*d)*L,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*L,t[12]=C*L,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*L,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*L,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,b=c*l,_=c*h,v=c*u,C=n.x,R=n.y,L=n.z;return s[0]=(1-(x+d))*C,s[1]=(p+v)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(f+d))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+_)*L,s[9]=(m-b)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),a=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const l=1/r,h=1/o,u=1/a;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ir)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h;let g,x;if(a===yn)g=(o+r)*u,x=-2*u;else if(a===ir)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new T,Je=new ne,Jh=new T(0,0,0),jh=new T(1,1,1),Cn=new T,Ms=new T,Be=new T,Na=new ne,Oa=new cs;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qh=0;const Fa=new T,ui=new cs,mn=new ne,Ss=new T,Xi=new T,tu=new T,eu=new cs,Ba=new T(1,0,0),ka=new T(0,1,0),za=new T(0,0,1),Ga={type:"added"},nu={type:"removed"},di={type:"childadded",child:null},wr={type:"childremoved",child:null};class oe extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new T,e=new hn,n=new cs,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ut}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(Ba,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ba,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Xi,Ss,this.up):mn.lookAt(Ss,Xi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ga),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ga),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}oe.DEFAULT_UP=new T(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new T,gn=new T,Tr=new T,_n=new T,fi=new T,pi=new T,Ha=new T,Ar=new T,Cr=new T,Rr=new T,Lr=new ee,Pr=new ee,Ir=new ee;class Ye{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),gn.subVectors(n,e),Tr.subVectors(t,e);const o=je.dot(je),a=je.dot(gn),c=je.dot(Tr),l=gn.dot(gn),h=gn.dot(Tr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lr.setScalar(0),Pr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lr,r.x),o.addScaledVector(Pr,r.y),o.addScaledVector(Ir,r.z),o}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),gn.subVectors(t,e),je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),pi.subVectors(r,n),Ar.subVectors(t,n);const c=fi.dot(Ar),l=pi.dot(Ar);if(c<=0&&l<=0)return e.copy(n);Cr.subVectors(t,s);const h=fi.dot(Cr),u=pi.dot(Cr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(fi,o);Rr.subVectors(t,r);const p=fi.dot(Rr),g=pi.dot(Rr);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(pi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ha.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ha,a);const d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(fi,o).addScaledVector(pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=na(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=el[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Yt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ft(Ae.r*255,0,255))*65536+Math.round(Ft(Ae.g*255,0,255))*256+Math.round(Ft(Ae.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Xe){Yt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Es);const n=is(Rn.h,Es.h,e),s=is(Rn.s,Es.s,e),r=is(Rn.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new vt;vt.NAMES=el;let iu=0;class ki extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ti,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new T,bs=new gt;let su=0;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:su++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Go&&(t.usage=this.usage),t}}class nl extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class il extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ru=0;const We=new ne,Ur=new oe,mi=new T,ke=new ii,qi=new ii,Me=new T;class Re extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?il:nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ke.min,qi.min),ke.expandByPoint(Me),Me.addVectors(ke.max,qi.max),ke.expandByPoint(Me)):(ke.expandByPoint(qi.min),ke.expandByPoint(qi.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(t,l),Me.add(mi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new T,c[w]=new T;const l=new T,h=new T,u=new T,f=new gt,p=new gt,g=new gt,x=new T,m=new T;function d(w,E,y){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[w].add(x),a[E].add(x),a[y].add(x),c[w].add(m),c[E].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,E=b.length;w<E;++w){const y=b[w],P=y.start,B=y.count;for(let F=P,W=P+B;F<W;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new T,v=new T,C=new T,R=new T;function L(w){C.fromBufferAttribute(s,w),R.copy(C);const E=a[w];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),v.crossVectors(R,E);const P=v.dot(c[w])<0?-1:1;o.setXYZW(w,_.x,_.y,_.z,P)}for(let w=0,E=b.length;w<E;++w){const y=b[w],P=y.start,B=y.count;for(let F=P,W=P+B;F<W;F+=3)L(t.getX(F+0)),L(t.getX(F+1)),L(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new ne,Vn=new Zh,ws=new ls,Wa=new T,Ts=new T,As=new T,Cs=new T,Nr=new T,Rs=new T,Xa=new T,Ls=new T;class Z extends oe{constructor(t=new Re,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Nr.fromBufferAttribute(u,t),o?Rs.addScaledVector(Nr,h):Rs.addScaledVector(Nr.sub(e),h))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(ws.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ws,Wa)===null||Vn.origin.distanceToSquared(Wa)>(t.far-t.near)**2))&&(Va.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,C=_;v<C;v+=3){const R=a.getX(v),L=a.getX(v+1),w=a.getX(v+2);s=Ps(this,d,t,n,l,h,u,R,L,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Ps(this,o,t,n,l,h,u,b,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,C=_;v<C;v+=3){const R=v,L=v+1,w=v+2;s=Ps(this,d,t,n,l,h,u,R,L,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=m,_=m+1,v=m+2;s=Ps(this,o,t,n,l,h,u,b,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ou(i,t,e,n,s,r,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Ps(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ts),i.getVertexPosition(c,As),i.getVertexPosition(l,Cs);const h=ou(i,t,e,n,Ts,As,Cs,Xa);if(h){const u=new T;Ye.getBarycoord(Xa,Ts,As,Cs,u),s&&(h.uv=Ye.getInterpolatedAttribute(s,a,c,l,u,new gt)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,a,c,l,u,new gt)),o&&(h.normal=Ye.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new T,materialIndex:0};Ye.getNormal(Ts,As,Cs,f.normal),h.face=f,h.barycoord=u}return h}class Mt extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,d,b,_,v,C,R,L,w,E){const y=v/L,P=C/w,B=v/2,F=C/2,W=R/2,Y=L+1,V=w+1;let J=0,z=0;const it=new T;for(let lt=0;lt<V;lt++){const St=lt*P-F;for(let Bt=0;Bt<Y;Bt++){const ie=Bt*y-B;it[x]=ie*b,it[m]=St*_,it[d]=W,l.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[d]=R>0?1:-1,h.push(it.x,it.y,it.z),u.push(Bt/L),u.push(1-lt/w),J+=1}}for(let lt=0;lt<w;lt++)for(let St=0;St<L;St++){const Bt=f+St+Y*lt,ie=f+St+Y*(lt+1),q=f+(St+1)+Y*(lt+1),et=f+(St+1)+Y*lt;c.push(Bt,ie,et),c.push(ie,q,et),z+=6}a.addGroup(p,z,E),p+=z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const cu={clone:Oi,merge:Ie};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rl extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new T,qa=new gt,Ya=new gt;class Ue extends rl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,qa,Ya),e.subVectors(Ya,qa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class uu extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new Ue(gi,_i,t,e);r.layers=this.layers,this.add(r);const o=new Ue(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new Ue(gi,_i,t,e);a.layers=this.layers,this.add(a);const c=new Ue(gi,_i,t,e);c.layers=this.layers,this.add(c);const l=new Ue(gi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ol extends Ce{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class du extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Dn});r.uniforms.tEquirect.value=e;const o=new Z(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=an),new uu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ge extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fu={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pu extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new T;class rr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hs extends ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const Yi=new T,xi=new T,yi=new T,Mi=new gt,Ki=new gt,al=new ne,Is=new T,$i=new T,Ds=new T,Ka=new gt,Fr=new gt,$a=new gt;class lr extends oe{constructor(t=new hs){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mu(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new rr(n,3,0,!1)),vi.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),al.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Us(Is.set(-.5,-.5,0),yi,o,xi,s,r),Us($i.set(.5,-.5,0),yi,o,xi,s,r),Us(Ds.set(.5,.5,0),yi,o,xi,s,r),Ka.set(0,0),Fr.set(1,0),$a.set(1,1);let a=t.ray.intersectTriangle(Is,$i,Ds,!1,Yi);if(a===null&&(Us($i.set(-.5,.5,0),yi,o,xi,s,r),Fr.set(0,1),a=t.ray.intersectTriangle(Is,Ds,$i,!1,Yi),a===null))return;const c=t.ray.origin.distanceTo(Yi);c<t.near||c>t.far||e.push({distance:c,point:Yi.clone(),uv:Ye.getInterpolation(Yi,Is,$i,Ds,Ka,Fr,$a,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Us(i,t,e,n,s,r){Mi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ki.x=r*Mi.x-s*Mi.y,Ki.y=s*Mi.x+r*Mi.y):Ki.copy(Mi),i.copy(t),i.x+=Ki.x,i.y+=Ki.y,i.applyMatrix4(al)}class gu extends Ce{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ze,h=ze,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new ne,Ja=new ne,Ns=[],ja=new ii,_u=new ne,Zi=new Z,Ji=new ls;class In extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_u)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),ja.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(ja)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),Ji.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),t.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Si),Ja.multiplyMatrices(n,Si),Zi.matrixWorld=Ja,Zi.raycast(t,Ns);for(let o=0,a=Ns.length;o<a;o++){const c=Ns[o];c.instanceId=r,c.object=this,e.push(c)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gu(new Float32Array(s*this.count),s,this.count,jo,cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Br=new T,vu=new T,xu=new Ut;class Kn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Br.subVectors(n,e).cross(vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xu.getNormalMatrix(t),s=this.coplanarPoint(Br).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new ls,Os=new T;class sa{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],b=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+o,f+h,m+g,v+b).normalize(),n[3].setComponents(c-o,f-h,m-g,v-b).normalize(),n[4].setComponents(c-a,f-u,m-x,v-_).normalize(),e===yn)n[5].setComponents(c+a,f+u,m+x,v+_).normalize();else if(e===ir)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Os.x=s.normal.x>0?t.max.x:t.min.x,Os.y=s.normal.y>0?t.max.y:t.min.y,Os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fi extends Ce{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cl extends Ce{constructor(t,e,n,s,r,o,a,c,l,h=Ai){if(h!==Ai&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ti),n===void 0&&h===Di&&(n=Ii),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,c=new ne;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ft(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ft(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ll extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yu extends ll{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ra(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Fs=new T,kr=new ra,zr=new ra,Gr=new ra;class $s extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fs.subVectors(s[0],s[1]).add(s[0]),l=Fs);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),zr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Gr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Gr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(kr.calc(c),zr.calc(c),Gr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qa(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Mu(i,t){const e=1-i;return e*e*t}function Su(i,t){return 2*(1-i)*i*t}function Eu(i,t){return i*i*t}function ss(i,t,e,n){return Mu(i,t)+Su(i,e)+Eu(i,n)}function bu(i,t){const e=1-i;return e*e*e*t}function wu(i,t){const e=1-i;return 3*e*e*i*t}function Tu(i,t){return 3*(1-i)*i*i*t}function Au(i,t){return i*i*i*t}function rs(i,t,e,n,s){return bu(i,t)+wu(i,e)+Tu(i,n)+Au(i,s)}class Cu extends bn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ru extends bn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y),rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lu extends bn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends bn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends bn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hl extends bn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y),ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Qa(a,c.x,l.x,h.x,u.x),Qa(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Uu=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:$s,CubicBezierCurve:Cu,CubicBezierCurve3:Ru,EllipseCurve:ll,LineCurve:Lu,LineCurve3:Pu,QuadraticBezierCurve:Iu,QuadraticBezierCurve3:hl,SplineCurve:Du});class Ee extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2));function b(){const v=new T,C=new T;let R=0;const L=(e-t)/n;for(let w=0;w<=r;w++){const E=[],y=w/r,P=y*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,W=F*c+a,Y=Math.sin(W),V=Math.cos(W);C.x=P*Y,C.y=-y*n+m,C.z=P*V,u.push(C.x,C.y,C.z),v.set(Y,L,V).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-y),E.push(g++)}x.push(E)}for(let w=0;w<s;w++)for(let E=0;E<r;E++){const y=x[E][w],P=x[E+1][w],B=x[E+1][w+1],F=x[E][w+1];(t>0||E!==0)&&(h.push(y,P,F),R+=3),(e>0||E!==r-1)&&(h.push(P,B,F),R+=3)}l.addGroup(d,R,0),d+=R}function _(v){const C=g,R=new gt,L=new T;let w=0;const E=v===!0?t:e,y=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let B=0;B<=s;B++){const W=B/s*c+a,Y=Math.cos(W),V=Math.sin(W);L.x=E*V,L.y=m*y,L.z=E*Y,u.push(L.x,L.y,L.z),f.push(0,y,0),R.x=Y*.5+.5,R.y=V*.5*y+.5,p.push(R.x,R.y),g++}for(let B=0;B<s;B++){const F=C+B,W=P+B;v===!0?h.push(W,W+1,F):h.push(W+1,W,F),w+=3}l.addGroup(d,w,v===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new oa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const _=new T,v=new T,C=new T;for(let R=0;R<e.length;R+=3)p(e[R+0],_),p(e[R+1],v),p(e[R+2],C),c(_,v,C,b)}function c(b,_,v,C){const R=C+1,L=[];for(let w=0;w<=R;w++){L[w]=[];const E=b.clone().lerp(v,w/R),y=_.clone().lerp(v,w/R),P=R-w;for(let B=0;B<=P;B++)B===0&&w===R?L[w][B]=E:L[w][B]=E.clone().lerp(y,B/P)}for(let w=0;w<R;w++)for(let E=0;E<2*(R-w)-1;E++){const y=Math.floor(E/2);E%2===0?(f(L[w][y+1]),f(L[w+1][y]),f(L[w][y])):(f(L[w][y+1]),f(L[w+1][y+1]),f(L[w+1][y]))}}function l(b){const _=new T;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(b),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const b=new T;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];const v=m(b)/2/Math.PI+.5,C=d(b)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const _=o[b+0],v=o[b+2],C=o[b+4],R=Math.max(_,v,C),L=Math.min(_,v,C);R>.9&&L<.1&&(_<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,_){const v=b*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const b=new T,_=new T,v=new T,C=new T,R=new gt,L=new gt,w=new gt;for(let E=0,y=0;E<r.length;E+=9,y+=6){b.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),R.set(o[y+0],o[y+1]),L.set(o[y+2],o[y+3]),w.set(o[y+4],o[y+5]),C.copy(b).add(_).add(v).divideScalar(3);const P=m(C);x(R,y+0,b,P),x(L,y+2,_,P),x(w,y+4,v,P)}}function x(b,_,v,C){C<0&&b.x===1&&(o[_]=b.x-1),v.x===0&&v.z===0&&(o[_]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.vertices,t.indices,t.radius,t.details)}}class aa extends us{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new aa(t.radius,t.detail)}}class or extends us{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class hr extends us{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hr(t.radius,t.detail)}}class Bn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const b=d*f-o;for(let _=0;_<l;_++){const v=_*u-r;g.push(v,-b,0),x.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const _=b+l*d,v=b+l*(d+1),C=b+1+l*(d+1),R=b+1+l*d;p.push(_,v,R),p.push(v,C,R)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ni extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,p=new T,g=new gt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const b=d+m,_=b,v=b+n+1,C=b+n+2,R=b+1;a.push(_,v,R),a.push(v,C,R)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ca extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,f=new T,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const b=[],_=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const R=C/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+v,1-_),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const _=h[d][b+1],v=h[d][b],C=h[d+1][b],R=h[d+1][b+1];(d!==0||o>0)&&p.push(_,v,R),(d!==n-1||c<Math.PI)&&p.push(v,C,R)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,u=new T,f=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(x,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ar extends Re{constructor(t=new hl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,c=new T,l=new gt;let h=new T;const u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(p,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),b(),d()}function m(_){h=t.getPointAt(_/e,h);const v=o.normals[_],C=o.binormals[_];for(let R=0;R<=s;R++){const L=R/s*Math.PI*2,w=Math.sin(L),E=-Math.cos(L);c.x=E*v.x+w*C.x,c.y=E*v.y+w*C.y,c.z=E*v.z+w*C.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const C=(s+1)*(_-1)+(v-1),R=(s+1)*_+(v-1),L=(s+1)*_+v,w=(s+1)*(_-1)+v;g.push(C,R,w),g.push(R,L,w)}}function b(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)l.x=_/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ar(new Uu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class It extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nu extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ou extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ds extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fu extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hr=new ne,tc=new T,ec=new T;class ha{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bu extends ha{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ni*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ku extends ds{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nc=new ne,ji=new T,Vr=new T;class zu extends ha{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(ji),Vr.copy(n.position),Vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vr),n.updateMatrixWorld(),s.makeTranslation(-ji.x,-ji.y,-ji.z),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}}class ul extends ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dl extends rl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gu extends ha{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new Gu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vu extends ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wu extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Xu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ic();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ic(){return performance.now()}function sc(i,t,e,n){const s=qu(n);switch(e){case Vc:return i*t;case Xc:return i*t;case qc:return i*t*2;case jo:return i*t/s.components*s.byteLength;case Qo:return i*t/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case ta:return i*t*2/s.components*s.byteLength;case Wc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ea:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Oo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(i){switch(i){case En:case zc:return{byteLength:1,components:1};case os:case Gc:case as:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case ti:case $o:case cn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Ku,alphahash_pars_fragment:$u,alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:ju,alphatest_pars_fragment:Qu,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:od,iridescence_fragment:ad,bumpmap_pars_fragment:cd,clipping_planes_fragment:ld,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:_d,cube_uv_reflection_fragment:vd,defaultnormal_vertex:xd,displacementmap_pars_vertex:yd,displacementmap_vertex:Md,emissivemap_fragment:Sd,emissivemap_pars_fragment:Ed,colorspace_fragment:bd,colorspace_pars_fragment:wd,envmap_fragment:Td,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Cd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:zd,envmap_vertex:Ld,fog_vertex:Pd,fog_pars_vertex:Id,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Od,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Bd,lights_pars_begin:kd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:Kd,lights_fragment_end:$d,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Qd,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:of,morphinstance_vertex:af,morphcolor_vertex:cf,morphnormal_vertex:lf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:Ef,premultiplied_alpha_fragment:bf,project_vertex:wf,dithering_fragment:Tf,dithering_pars_fragment:Af,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Pf,shadowmap_vertex:If,shadowmask_pars_fragment:Df,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Of,skinnormal_vertex:Ff,specularmap_fragment:Bf,specularmap_pars_fragment:kf,tonemapping_fragment:zf,tonemapping_pars_fragment:Gf,transmission_fragment:Hf,transmission_pars_fragment:Vf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:Kf,background_frag:$f,backgroundCube_vert:Zf,backgroundCube_frag:Jf,cube_vert:jf,cube_frag:Qf,depth_vert:tp,depth_frag:ep,distanceRGBA_vert:np,distanceRGBA_frag:ip,equirect_vert:sp,equirect_frag:rp,linedashed_vert:op,linedashed_frag:ap,meshbasic_vert:cp,meshbasic_frag:lp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:_p,meshphysical_vert:vp,meshphysical_frag:xp,meshtoon_vert:yp,meshtoon_frag:Mp,points_vert:Sp,points_frag:Ep,shadow_vert:bp,shadow_frag:wp,sprite_vert:Tp,sprite_frag:Ap},nt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},on={basic:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ie([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ie([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ie([nt.points,nt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ie([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ie([nt.common,nt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ie([nt.sprite,nt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ie([nt.common,nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ie([nt.lights,nt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};on.physical={uniforms:Ie([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Bs={r:0,b:0,g:0},Xn=new hn,Cp=new ne;function Rp(i,t,e,n,s,r,o){const a=new vt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const C=g(_);C===null?d(a,c):C&&C.isColor&&(d(C,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===cr)?(h===void 0&&(h=new Z(new Mt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Oi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(v.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(Xn)),h.material.toneMapped=Yt.getTransfer(C.colorSpace)!==te,(u!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Z(new Bn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Oi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(C.colorSpace)!==te,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,v){_.getRGB(Bs,sl(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(a,c)},render:x,addToRenderList:m,dispose:b}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,P,B,F,W){let Y=!1;const V=u(F,B,P);r!==V&&(r=V,l(r.object)),Y=p(y,F,B,W),Y&&g(y,F,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(y,P,B,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,B){const F=B.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let V=Y[F];return V===void 0&&(V=f(c()),Y[F]=V),V}function f(y){const P=[],B=[],F=[];for(let W=0;W<e;W++)P[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,P,B,F){const W=r.attributes,Y=P.attributes;let V=0;const J=B.getAttributes();for(const z in J)if(J[z].location>=0){const lt=W[z];let St=Y[z];if(St===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(y,P,B,F){const W={},Y=P.attributes;let V=0;const J=B.getAttributes();for(const z in J)if(J[z].location>=0){let lt=Y[z];lt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),W[z]=St,V++}r.attributes=W,r.attributesNum=V,r.index=F}function x(){const y=r.newAttributes;for(let P=0,B=y.length;P<B;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const B=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),W[y]!==P&&(i.vertexAttribDivisor(y,P),W[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==y[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function _(y,P,B,F,W,Y,V){V===!0?i.vertexAttribIPointer(y,P,B,W,Y):i.vertexAttribPointer(y,P,B,F,W,Y)}function v(y,P,B,F){x();const W=F.attributes,Y=B.getAttributes(),V=P.defaultAttributeValues;for(const J in Y){const z=Y[J];if(z.location>=0){let it=W[J];if(it===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const lt=it.normalized,St=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;const ie=Bt.buffer,q=Bt.type,et=Bt.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===$o;if(it.isInterleavedBufferAttribute){const ot=it.data,At=ot.stride,Kt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let Ct=0;Ct<z.locationSize;Ct++)d(z.location+Ct,ot.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ct=0;Ct<z.locationSize;Ct++)m(z.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Ct=0;Ct<z.locationSize;Ct++)_(z.location+Ct,St/z.locationSize,q,lt,At*et,(Kt+St/z.locationSize*Ct)*et,_t)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<z.locationSize;ot++)d(z.location+ot,it.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<z.locationSize;ot++)m(z.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ot=0;ot<z.locationSize;ot++)_(z.location+ot,St/z.locationSize,q,lt,St*et,St/z.locationSize*ot*et,_t)}}else if(V!==void 0){const lt=V[J];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(z.location,lt);break;case 3:i.vertexAttrib3fv(z.location,lt);break;case 4:i.vertexAttrib4fv(z.location,lt);break;default:i.vertexAttrib1fv(z.location,lt)}}}}b()}function C(){w();for(const y in n){const P=n[y];for(const B in P){const F=P[B];for(const W in F)h(F[W].object),delete F[W];delete P[B]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const B in P){const F=P[B];for(const W in F)h(F[W].object),delete F[W];delete P[B]}delete n[y.id]}function L(y){for(const P in n){const B=n[P];if(B[y.id]===void 0)continue;const F=B[y.id];for(const W in F)h(F[W].object),delete F[W];delete B[y.id]}}function w(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Pp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==nn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const w=L===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==En&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==cn&&!w)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function Dp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Kn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,_=b*4;let v=d.clippingState||null;c.value=v,v=h(g,f,_,p);for(let C=0;C!==_;++C)v[C]=e[C];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,v=p;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Up(i){let t=new WeakMap;function e(o,a){return a===ho?o.mapping=Li:a===uo&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===uo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new du(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const wi=4,rc=[.125,.215,.35,.446,.526,.582],Jn=20,Wr=new dl,oc=new vt;let Xr=null,qr=0,Yr=0,Kr=!1;const $n=(1+Math.sqrt(5))/2,Ei=1/$n,ac=[new T(-$n,Ei,0),new T($n,Ei,0),new T(-Ei,0,$n),new T(Ei,0,$n),new T(0,$n,-Ei),new T(0,$n,Ei),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Kr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:as,format:nn,colorSpace:Ui,depthBuffer:!1},s=lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s){const a=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(oc),h.toneMapping=Un,h.autoClear=!1;const p=new $t({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Z(new Mt,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(oc),x=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const _=this._cubeSize;ks(s,b*_,d>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ac[(s-r-1)%ac.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Z(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const d=[];let b=0;for(let L=0;L<Jn;++L){const w=L/x,E=Math.exp(-w*w/2);d.push(E),L===0?b+=E:L<m&&(b+=2*E)}for(let L=0;L<d.length;L++)d[L]=d[L]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[s],C=3*v*(s>_-wi?s-_+wi:0),R=4*(this._cubeSize-v);ks(e,C,R,3*v,2*v),c.setRenderTarget(e),c.render(u,Wr)}}function Np(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+rc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-wi?c=rc[o-i+wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,w=R>2?0:-1,E=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];b.set(E,x*g*R),_.set(f,m*g*R);const y=[R,R,R,R,R,R];v.set(y,d*g*R)}const C=new Re;C.setAttribute("position",new be(b,x)),C.setAttribute("uv",new be(_,m)),C.setAttribute("faceIndex",new be(v,d)),t.push(C),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lc(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(Jn),s=new T(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function uc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ho||c===uo,h=c===Li||c===Pi;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new cc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new cc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let _=0,v=b.length;_<v;_+=3){const C=b[_+0],R=b[_+1],L=b[_+2];f.push(C,R,R,L,L,C)}}else if(g!==void 0){const b=g.array;x=g.version;for(let _=0,v=b.length/3-1;_<v;_+=3){const C=_+0,R=_+1,L=_+2;f.push(C,R,R,L,L,C)}}else return;const m=new(Jc(f)?il:nl)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function zp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hp(i,t,e){const n=new WeakMap,s=new ee;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>t.maxTextureSize&&(R=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const L=new Float32Array(C*R*4*u),w=new Qc(L,C,R,u);w.type=cn,w.needsUpdate=!0;const E=v*4;for(let P=0;P<u;P++){const B=d[P],F=b[P],W=_[P],Y=C*R*4*P;for(let V=0;V<B.count;V++){const J=V*E;g===!0&&(s.fromBufferAttribute(B,V),L[Y+J+0]=s.x,L[Y+J+1]=s.y,L[Y+J+2]=s.z,L[Y+J+3]=0),x===!0&&(s.fromBufferAttribute(F,V),L[Y+J+4]=s.x,L[Y+J+5]=s.y,L[Y+J+6]=s.z,L[Y+J+7]=0),m===!0&&(s.fromBufferAttribute(W,V),L[Y+J+8]=s.x,L[Y+J+9]=s.y,L[Y+J+10]=s.z,L[Y+J+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new gt(C,R)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const pl=new Ce,dc=new cl(1,1),ml=new Qc,gl=new Kh,_l=new ol,fc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=fc[s];if(r===void 0&&(r=new Float32Array(s),fc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;_c.set(n),i.uniformMatrix2fv(this.addr,!1,_c),ye(e,n)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),ye(e,n)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),ye(e,n)}}function Jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dc.compareFunction=Zc,r=dc):r=pl,e.setTexture2D(t||r,s)}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gl,s)}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_l,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ml,s)}function lm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Kp;case 35675:return $p;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return jp;case 35668:case 35672:return Qp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(i,t){i.uniform1fv(this.addr,t)}function um(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function dm(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function fm(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function pm(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mm(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gm(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _m(i,t){i.uniform1iv(this.addr,t)}function vm(i,t){i.uniform2iv(this.addr,t)}function xm(i,t){i.uniform3iv(this.addr,t)}function ym(i,t){i.uniform4iv(this.addr,t)}function Mm(i,t){i.uniform1uiv(this.addr,t)}function Sm(i,t){i.uniform2uiv(this.addr,t)}function Em(i,t){i.uniform3uiv(this.addr,t)}function bm(i,t){i.uniform4uiv(this.addr,t)}function wm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pl,r[o])}function Tm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gl,r[o])}function Am(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_l,r[o])}function Cm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ml,r[o])}function Rm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return Em;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}class Lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lm(e.type)}}class Pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rm(e.type)}}class Im{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function Dm(i,t,e){const n=i.name,s=n.length;for($r.lastIndex=0;;){const r=$r.exec(n),o=$r.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vc(e,l===void 0?new Lm(a,i,t):new Pm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Im(a),vc(e,u)),e=u}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Um=37297;let Nm=0;function Om(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yc=new Ut;function Fm(i){Yt._getMatrix(yc,Yt.workingColorSpace,i);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case nr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Om(i.getShaderSource(t),o)}else return s}function Bm(i,t){const e=Fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function km(i,t){let e;switch(t){case rh:e="Linear";break;case oh:e="Reinhard";break;case ah:e="Cineon";break;case Bc:e="ACESFilmic";break;case lh:e="AgX";break;case hh:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new T;function zm(){Yt.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function Hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ts(i){return i!==""}function Sc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(Wm,qm)}const Xm=new Map;function qm(i,t){let e=Ot[t];if(e===void 0){const n=Xm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(Ym,Km)}function Km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Pi:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function jm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fc:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function Qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$m(e),l=Zm(e),h=Jm(e),u=jm(e),f=Qm(e),p=Gm(e),g=Hm(r),x=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),d.length>0&&(d+=`
`)):(m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),d=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Un?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Bm("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=Ho(o),o=Sc(o,e),o=Ec(o,e),a=Ho(a),a=Sc(a,e),a=Ec(a,e),o=bc(o),a=bc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=b+m+o,v=b+d+a,C=xc(s,s.VERTEX_SHADER,_),R=xc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(C).trim(),W=s.getShaderInfoLog(R).trim();let Y=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,R);else{const J=Mc(s,C,"vertex"),z=Mc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+J+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(C),s.deleteShader(R),w=new Zs(s,x),E=Vm(s,x)}let w;this.getUniforms=function(){return w===void 0&&L(this),w};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Um)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let eg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ig(t),e.set(t,n)),n}}class ig{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}}function sg(i,t,e,n,s,r,o){const a=new tl,c=new ng,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,P,B,F){const W=B.fog,Y=F.geometry,V=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),z=J&&J.mapping===cr?J.image.height:null,it=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=lt!==void 0?lt.length:0;let Bt=0;Y.morphAttributes.position!==void 0&&(Bt=1),Y.morphAttributes.normal!==void 0&&(Bt=2),Y.morphAttributes.color!==void 0&&(Bt=3);let ie,q,et,_t;if(it){const jt=on[it];ie=jt.vertexShader,q=jt.fragmentShader}else ie=E.vertexShader,q=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const ot=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Kt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,fe=!!E.map,le=!!E.matcap,zt=!!J,I=!!E.aoMap,Ge=!!E.lightMap,Gt=!!E.bumpMap,Ht=!!E.normalMap,Et=!!E.displacementMap,re=!!E.emissiveMap,yt=!!E.metalnessMap,A=!!E.roughnessMap,M=E.anisotropy>0,O=E.clearcoat>0,K=E.dispersion>0,j=E.iridescence>0,X=E.sheen>0,xt=E.transmission>0,at=M&&!!E.anisotropyMap,dt=O&&!!E.clearcoatMap,Wt=O&&!!E.clearcoatNormalMap,tt=O&&!!E.clearcoatRoughnessMap,ft=j&&!!E.iridescenceMap,Tt=j&&!!E.iridescenceThicknessMap,Rt=X&&!!E.sheenColorMap,pt=X&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Nt=!!E.specularColorMap,se=!!E.specularIntensityMap,D=xt&&!!E.transmissionMap,st=xt&&!!E.thicknessMap,H=!!E.gradientMap,$=!!E.alphaMap,ht=E.alphaTest>0,ct=!!E.alphaHash,Dt=!!E.extensions;let ue=Un;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=i.toneMapping);const we={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:q,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&F.instanceColor!==null,instancingMorph:Kt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ui,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:le,envMap:zt,envMapMode:zt&&J.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:Ge,bumpMap:Gt,normalMap:Ht,displacementMap:f&&Et,emissiveMap:re,normalMapObjectSpace:Ht&&E.normalMapType===ph,normalMapTangentSpace:Ht&&E.normalMapType===$c,metalnessMap:yt,roughnessMap:A,anisotropy:M,anisotropyMap:at,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Nt,specularIntensityMap:se,transmission:xt,transmissionMap:D,thicknessMap:st,gradientMap:H,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ct,combine:E.combine,mapUv:fe&&x(E.map.channel),aoMapUv:I&&x(E.aoMap.channel),lightMapUv:Ge&&x(E.lightMap.channel),bumpMapUv:Gt&&x(E.bumpMap.channel),normalMapUv:Ht&&x(E.normalMap.channel),displacementMapUv:Et&&x(E.displacementMap.channel),emissiveMapUv:re&&x(E.emissiveMap.channel),metalnessMapUv:yt&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:at&&x(E.anisotropyMap.channel),clearcoatMapUv:dt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(E.sheenRoughnessMap.channel),specularMapUv:Vt&&x(E.specularMap.channel),specularColorMapUv:Nt&&x(E.specularColorMap.channel),specularIntensityMapUv:se&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:st&&x(E.thicknessMap.channel),alphaMapUv:$&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ht||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(fe||$),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ne,flipSided:E.side===Oe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(b(y,E),_(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=g[E.type];let P;if(y){const B=on[y];P=cu.clone(B.uniforms)}else P=E.uniforms;return P}function C(E,y){let P;for(let B=0,F=h.length;B<F;B++){const W=h[B];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new tg(i,y,E,r),h.push(P)),P}function R(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function L(E){c.remove(E)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:w}}function rg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ac(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,x,m){const d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||og),n.length>1&&n.sort(f||Tc),s.length>1&&s.sort(f||Tc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ag(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ac,i.set(n,[o])):s>=r.length?(o=new Ac,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new vt};break;case"SpotLight":e={position:new T,direction:new T,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hg=0;function ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dg(i){const t=new cg,e=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new ne,o=new ne;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,_=0,v=0,C=0,R=0,L=0;l.sort(ug);for(let E=0,y=l.length;E<y;E++){const P=l[E],B=P.color,F=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);L++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,z=e.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=V,p++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[x]=V;const J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Y,v++}x++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const J=P.shadow,z=e.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==b||w.numPointShadows!==_||w.numSpotShadows!==v||w.numSpotMaps!==C||w.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,w.directionalLength=p,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=b,w.numPointShadows=_,w.numSpotShadows=v,w.numSpotMaps=C,w.numLightProbes=L,n.version=hg++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const _=l[d];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Cc(i){const t=new dg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Cc(i),t.set(s,[a])):r>=o.length?(a=new Cc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gg(i,t,e){let n=new sa;const s=new gt,r=new gt,o=new ee,a=new Nu({depthPacking:fh}),c=new Ou,l={},h=e.maxTextureSize,u={[On]:Oe,[Oe]:On,[Ne]:Ne},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Z(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let d=this.type;this.render=function(R,L,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Dn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=d!==xn&&this.type===xn,W=d===xn&&this.type!==xn;for(let Y=0,V=R.length;Y<V;Y++){const J=R[Y],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const it=z.getFrameExtents();if(s.multiply(it),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,z.mapSize.y=r.y)),z.map===null||F===!0||W===!0){const St=this.type!==xn?{minFilter:ze,magFilter:ze}:{};z.map!==null&&z.map.dispose(),z.map=new ei(s.x,s.y,St),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const lt=z.getViewportCount();for(let St=0;St<lt;St++){const Bt=z.getViewport(St);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(o),z.updateMatrices(J,St),n=z.getFrustum(),v(L,w,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===xn&&b(z,w),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,P)};function b(R,L){const w=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,w,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,w,p,x,null)}function _(R,L,w,E){let y=null;const P=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=w.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const B=y.uuid,F=L.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let Y=W[F];Y===void 0&&(Y=y.clone(),W[F]=Y,L.addEventListener("dispose",C)),y=Y}if(y.visible=L.visible,y.wireframe=L.wireframe,E===xn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:u[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=w}return y}function v(R,L,w,E,y){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const F=t.update(R),W=R.material;if(Array.isArray(W)){const Y=F.groups;for(let V=0,J=Y.length;V<J;V++){const z=Y[V],it=W[z.materialIndex];if(it&&it.visible){const lt=_(R,it,E,y);R.onBeforeShadow(i,R,L,w,F,lt,z),i.renderBufferDirect(w,null,F,lt,R,z),R.onAfterShadow(i,R,L,w,F,lt,z)}}}else if(W.visible){const Y=_(R,W,E,y);R.onBeforeShadow(i,R,L,w,F,Y,null),i.renderBufferDirect(w,null,F,Y,R,null),R.onAfterShadow(i,R,L,w,F,Y,null)}}const B=R.children;for(let F=0,W=B.length;F<W;F++)v(B[F],L,w,E,y)}function C(R){R.target.removeEventListener("dispose",C);for(const w in l){const E=l[w],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const _g={[io]:so,[ro]:co,[oo]:lo,[Ri]:ao,[so]:io,[co]:ro,[lo]:oo,[ao]:Ri};function vg(i,t){function e(){let D=!1;const st=new ee;let H=null;const $=new ee(0,0,0,0);return{setMask:function(ht){H!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Dt,ue,we){we===!0&&(ht*=ue,ct*=ue,Dt*=ue),st.set(ht,ct,Dt,ue),$.equals(st)===!1&&(i.clearColor(ht,ct,Dt,ue),$.copy(st))},reset:function(){D=!1,H=null,$.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,H=null,$=null,ht=null;return{setReversed:function(ct){if(st!==ct){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=ht;ht=null,this.setClear(ue)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?ot(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ct){H!==ct&&!D&&(i.depthMask(ct),H=ct)},setFunc:function(ct){if(st&&(ct=_g[ct]),$!==ct){switch(ct){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){D=!1,H=null,$=null,ht=null,st=!1}}}function s(){let D=!1,st=null,H=null,$=null,ht=null,ct=null,Dt=null,ue=null,we=null;return{setTest:function(jt){D||(jt?ot(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(jt){st!==jt&&!D&&(i.stencilMask(jt),st=jt)},setFunc:function(jt,Ke,dn){(H!==jt||$!==Ke||ht!==dn)&&(i.stencilFunc(jt,Ke,dn),H=jt,$=Ke,ht=dn)},setOp:function(jt,Ke,dn){(ct!==jt||Dt!==Ke||ue!==dn)&&(i.stencilOp(jt,Ke,dn),ct=jt,Dt=Ke,ue=dn)},setLocked:function(jt){D=jt},setClear:function(jt){we!==jt&&(i.clearStencil(jt),we=jt)},reset:function(){D=!1,st=null,H=null,$=null,ht=null,ct=null,Dt=null,ue=null,we=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,_=null,v=null,C=null,R=null,L=new vt(0,0,0),w=0,E=!1,y=null,P=null,B=null,F=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=J>=2);let it=null,lt={};const St=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ie=new ee().fromArray(St),q=new ee().fromArray(Bt);function et(D,st,H,$){const ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<H;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}const _t={};_t[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Ri),Gt(!1),Ht(ba),ot(i.CULL_FACE),I(Dn);function ot(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Kt(D,st){return u[D]!==st?(i.bindFramebuffer(D,st),u[D]=st,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(D,st){let H=p,$=!1;if(D){H=f.get(st),H===void 0&&(H=[],f.set(st,H));const ht=D.textures;if(H.length!==ht.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=ht.length;ct<Dt;ct++)H[ct]=i.COLOR_ATTACHMENT0+ct;H.length=ht.length,$=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,$=!0);$&&i.drawBuffers(H)}function fe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const le={[Zn]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};le[Hl]=i.MIN,le[Vl]=i.MAX;const zt={[Wl]:i.ZERO,[Xl]:i.ONE,[ql]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[Jl]:i.ONE_MINUS_DST_COLOR,[$l]:i.ONE_MINUS_DST_ALPHA,[Ql]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,st,H,$,ht,ct,Dt,ue,we,jt){if(D===Dn){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),D!==kl){if(D!==m||jt!==E){if((d!==Zn||v!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,v=Zn),jt)switch(D){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,_=null,C=null,R=null,L.set(0,0,0),w=0,m=D,E=jt}return}ht=ht||st,ct=ct||H,Dt=Dt||$,(st!==d||ht!==v)&&(i.blendEquationSeparate(le[st],le[ht]),d=st,v=ht),(H!==b||$!==_||ct!==C||Dt!==R)&&(i.blendFuncSeparate(zt[H],zt[$],zt[ct],zt[Dt]),b=H,_=$,C=ct,R=Dt),(ue.equals(L)===!1||we!==w)&&(i.blendColor(ue.r,ue.g,ue.b,we),L.copy(ue),w=we),m=D,E=!1}function Ge(D,st){D.side===Ne?At(i.CULL_FACE):ot(i.CULL_FACE);let H=D.side===Oe;st&&(H=!H),Gt(H),D.blending===Ti&&D.transparent===!1?I(Dn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Ht(D){D!==Fl?(ot(i.CULL_FACE),D!==P&&(D===ba?i.cullFace(i.BACK):D===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),P=D}function Et(D){D!==B&&(V&&i.lineWidth(D),B=D)}function re(D,st,H){D?(ot(i.POLYGON_OFFSET_FILL),(F!==st||W!==H)&&(i.polygonOffset(st,H),F=st,W=H)):At(i.POLYGON_OFFSET_FILL)}function yt(D){D?ot(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+Y-1),it!==D&&(i.activeTexture(D),it=D)}function M(D,st,H){H===void 0&&(it===null?H=i.TEXTURE0+Y-1:H=it);let $=lt[H];$===void 0&&($={type:void 0,texture:void 0},lt[H]=$),($.type!==D||$.texture!==st)&&(it!==H&&(i.activeTexture(H),it=H),i.bindTexture(D,st||_t[D]),$.type=D,$.texture=st)}function O(){const D=lt[it];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){ie.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function pt(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Vt(D,st){let H=l.get(st);H===void 0&&(H=new WeakMap,l.set(st,H));let $=H.get(D);$===void 0&&($=i.getUniformBlockIndex(st,D.name),H.set(D,$))}function Nt(D,st){const $=l.get(st).get(D);c.get(st)!==$&&(i.uniformBlockBinding(st,$,D.__bindingPointIndex),c.set(st,$))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,lt={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,_=null,v=null,C=null,R=null,L=new vt(0,0,0),w=0,E=!1,y=null,P=null,B=null,F=null,W=null,ie.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:Kt,drawBuffers:Ct,useProgram:fe,setBlending:I,setMaterial:Ge,setFlipSided:Gt,setCullFace:Ht,setLineWidth:Et,setPolygonOffset:re,setScissorTest:yt,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:se}}function xg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):sr("canvas")}function x(A,M,O){let K=1;const j=yt(A);if((j.width>O||j.height>O)&&(K=O/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(K*j.width),xt=Math.floor(K*j.height);u===void 0&&(u=g(X,xt));const at=M?g(X,xt):u;return at.width=X,at.height=xt,at.getContext("2d").drawImage(A,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+xt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,M,O,K,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=M;if(M===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),M===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),M===i.RGBA){const xt=j?nr:Yt.getTransfer(K);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=xt===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,M){let O;return A?M===null||M===ti||M===Ii?O=i.DEPTH24_STENCIL8:M===cn?O=i.DEPTH32F_STENCIL8:M===os&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===Ii?O=i.DEPTH_COMPONENT24:M===cn?O=i.DEPTH_COMPONENT32F:M===os&&(O=i.DEPTH_COMPONENT16),O}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M)}function L(A){const M=A.target;M.removeEventListener("dispose",L),y(M)}function w(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,K=f.get(O);if(K){const j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(K).length===0&&f.delete(O)}n.remove(A)}function E(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const O=A.source,K=f.get(O);delete K[M.__cacheKey],o.memory.textures--}function y(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[K][j]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let K=0,j=O.length;K<j;K++){const X=n.get(O[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(A)}let P=0;function B(){P=0}function F(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function W(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Y(A,M){const O=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,A,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function V(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function J(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function z(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const it={[fo]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},lt={[ze]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[gr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},St={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Zc]:i.LEQUAL,[_h]:i.EQUAL,[yh]:i.GEQUAL,[vh]:i.GREATER,[xh]:i.NOTEQUAL};function Bt(A,M){if(M.type===cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===gr||M.magFilter===ms||M.magFilter===Qn||M.minFilter===an||M.minFilter===gr||M.minFilter===ms||M.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,it[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,it[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,it[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,St[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==ms&&M.minFilter!==Qn||M.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const K=M.source;let j=f.get(K);j===void 0&&(j={},f.set(K,j));const X=W(M);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[X].usedTimes++;const xt=j[A.__cacheKey];xt!==void 0&&(j[A.__cacheKey].usedTimes--,xt.usedTimes===0&&E(M)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return O}function q(A,M,O){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const j=ie(A,M),X=M.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+O);const xt=n.get(X);if(X.version!==xt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const at=Yt.getPrimaries(Yt.workingColorSpace),dt=M.colorSpace===Pn?null:Yt.getPrimaries(M.colorSpace),Wt=M.colorSpace===Pn||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=x(M.image,!1,s.maxTextureSize);tt=re(M,tt);const ft=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type);let Rt=_(M.internalFormat,ft,Tt,M.colorSpace,M.isVideoTexture);Bt(K,M);let pt;const Vt=M.mipmaps,Nt=M.isVideoTexture!==!0,se=xt.__version===void 0||j===!0,D=X.dataReady,st=C(M,tt);if(M.isDepthTexture)Rt=v(M.format===Di,M.type),se&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,Tt,null));else if(M.isDataTexture)if(Vt.length>0){Nt&&se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,H,Rt,pt.width,pt.height,0,ft,Tt,pt.data);M.generateMipmaps=!1}else Nt?(se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,Tt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,ft,Tt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Vt[0].width,Vt[0].height,tt.depth);for(let H=0,$=Vt.length;H<$;H++)if(pt=Vt[H],M.format!==nn)if(ft!==null)if(Nt){if(D)if(M.layerUpdates.size>0){const ht=sc(pt.width,pt.height,M.format,M.type);for(const ct of M.layerUpdates){const Dt=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ct,pt.width,pt.height,1,ft,Dt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Rt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,tt.depth,ft,Tt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Rt,pt.width,pt.height,tt.depth,0,ft,Tt,pt.data)}else{Nt&&se&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],M.format!==nn?ft!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,H,Rt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(M.isDataArrayTexture)if(Nt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,tt.width,tt.height,tt.depth),D)if(M.layerUpdates.size>0){const H=sc(tt.width,tt.height,M.format,M.type);for(const $ of M.layerUpdates){const ht=tt.data.subarray($*H/tt.data.BYTES_PER_ELEMENT,($+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,ft,Tt,ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,ft,Tt,tt.data);else if(M.isData3DTexture)Nt?(se&&e.texStorage3D(i.TEXTURE_3D,st,Rt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,ft,Tt,tt.data);else if(M.isFramebufferTexture){if(se)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,Rt,tt.width,tt.height);else{let H=tt.width,$=tt.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,H,$,0,ft,Tt,null),H>>=1,$>>=1}}else if(Vt.length>0){if(Nt&&se){const H=yt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,H.width,H.height)}for(let H=0,$=Vt.length;H<$;H++)pt=Vt[H],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ft,Tt,pt):e.texImage2D(i.TEXTURE_2D,H,Rt,ft,Tt,pt);M.generateMipmaps=!1}else if(Nt){if(se){const H=yt(tt);e.texStorage2D(i.TEXTURE_2D,st,Rt,H.width,H.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,Tt,tt);m(M)&&d(K),xt.__version=X.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function et(A,M,O){if(M.image.length!==6)return;const K=ie(A,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const X=n.get(j);if(j.version!==X.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const xt=Yt.getPrimaries(Yt.workingColorSpace),at=M.colorSpace===Pn?null:Yt.getPrimaries(M.colorSpace),dt=M.colorSpace===Pn||xt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!tt?ft[$]=x(M.image[$],!0,s.maxCubemapSize):ft[$]=tt?M.image[$].image:M.image[$],ft[$]=re(M,ft[$]);const Tt=ft[0],Rt=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),Vt=_(M.internalFormat,Rt,pt,M.colorSpace),Nt=M.isVideoTexture!==!0,se=X.__version===void 0||K===!0,D=j.dataReady;let st=C(M,Tt);Bt(i.TEXTURE_CUBE_MAP,M);let H;if(Wt){Nt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,Tt.width,Tt.height);for(let $=0;$<6;$++){H=ft[$].mipmaps;for(let ht=0;ht<H.length;ht++){const ct=H[ht];M.format!==nn?Rt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Vt,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(H=M.mipmaps,Nt&&se){H.length>0&&st++;const $=yt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Rt,pt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,ft[$].width,ft[$].height,0,Rt,pt,ft[$].data);for(let ht=0;ht<H.length;ht++){const Dt=H[ht].image[$].image;Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Dt.width,Dt.height,Rt,pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Dt.width,Dt.height,0,Rt,pt,Dt.data)}}else{Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,pt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Rt,pt,ft[$]);for(let ht=0;ht<H.length;ht++){const ct=H[ht];Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Rt,pt,ct.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Vt,Rt,pt,ct.image[$])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),X.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _t(A,M,O,K,j,X){const xt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),dt=_(O.internalFormat,xt,at,O.colorSpace),Wt=n.get(M),tt=n.get(O);if(tt.__renderTarget=M,!Wt.__hasExternalTextures){const ft=Math.max(1,M.width>>X),Tt=Math.max(1,M.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,X,dt,ft,Tt,M.depth,0,xt,at,null):e.texImage2D(j,X,dt,ft,Tt,0,xt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,tt.__webglTexture,0,Gt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,tt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,X=v(M.stencilBuffer,j),xt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Gt(M);Ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,X,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,X,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,X,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,A)}else{const K=M.textures;for(let j=0;j<K.length;j++){const X=K[j],xt=r.convert(X.format,X.colorSpace),at=r.convert(X.type),dt=_(X.internalFormat,xt,at,X.colorSpace),Wt=Gt(M);O&&Ht(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,dt,M.width,M.height):Ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,dt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const j=K.__webglTexture,X=Gt(M);if(M.depthTexture.format===Ai)Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===Di)Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=K}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[K],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,M,O){const K=n.get(A);M!==void 0&&_t(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Kt(A)}function fe(A){const M=A.texture,O=n.get(A),K=n.get(M);A.addEventListener("dispose",L);const j=A.textures,X=A.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let dt=0;dt<M.mipmaps.length;dt++)O.__webglFramebuffer[at][dt]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let at=0,dt=j.length;at<dt;at++){const Wt=n.get(j[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ht(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const dt=j[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Wt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),ft=_(dt.internalFormat,Wt,tt,dt.colorSpace,A.isXRRenderTarget===!0),Tt=Gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(O.__webglFramebuffer[at][dt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else _t(O.__webglFramebuffer[at],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,dt=j.length;at<dt;at++){const Wt=j[at],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Bt(i.TEXTURE_2D,Wt),_t(O.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Wt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Bt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(O.__webglFramebuffer[dt],A,M,i.COLOR_ATTACHMENT0,at,dt);else _t(O.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,at,0);m(M)&&d(at),e.unbindTexture()}A.depthBuffer&&Kt(A)}function le(A){const M=A.textures;for(let O=0,K=M.length;O<K;O++){const j=M[O];if(m(j)){const X=b(A),xt=n.get(j).__webglTexture;e.bindTexture(X,xt),d(X),e.unbindTexture()}}}const zt=[],I=[];function Ge(A){if(A.samples>0){if(Ht(A)===!1){const M=A.textures,O=A.width,K=A.height;let j=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),at=M.length>1;if(at)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,j,i.NEAREST),c===!0&&(zt.length=0,I.length=0,zt.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(zt.push(X),I.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[dt]);const Wt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function Ht(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Et(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function re(A,M){const O=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ui&&O!==Pn&&(Yt.getTransfer(O)===te?(K!==nn||j!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Ct,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ht}function yg(i,t){function e(n,s=Pn){let r;const o=Yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Vc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===nn)return i.RGBA;if(n===Xc)return i.LUMINANCE;if(n===qc)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Yc)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===yo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===Eo||n===bo||n===wo||n===To||n===Ao||n===Co||n===Ro||n===Lo||n===Po||n===Io||n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Oo||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Bo||n===ko||n===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bg extends Bi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const x=new Eg,m=e.getContextAttributes();let d=null,b=null;const _=[],v=[],C=new gt;let R=null;const L=new Ue;L.viewport=new ee;const w=new Ue;w.viewport=new ee;const E=[L,w],y=new Wu;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=_[q];return et===void 0&&(et=new Or,_[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=_[q];return et===void 0&&(et=new Or,_[q]=et),et.getGripSpace()},this.getHand=function(q){let et=_[q];return et===void 0&&(et=new Or,_[q]=et),et.getHandSpace()};function F(q){const et=v.indexOf(q.inputSource);if(et===-1)return;const _t=_[et];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<_.length;q++){const et=v[q];et!==null&&(v[q]=null,_[q].disconnect(et))}P=null,B=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,ot=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?Di:Ai,ot=m.stencil?Ii:ti);const Kt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ei(f.textureWidth,f.textureHeight,{format:nn,type:En,depthTexture:new cl(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ei(p.framebufferWidth,p.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let et=0;et<q.removed.length;et++){const _t=q.removed[et],ot=v.indexOf(_t);ot>=0&&(v[ot]=null,_[ot].disconnect(_t))}for(let et=0;et<q.added.length;et++){const _t=q.added[et];let ot=v.indexOf(_t);if(ot===-1){for(let Kt=0;Kt<_.length;Kt++)if(Kt>=v.length){v.push(_t),ot=Kt;break}else if(v[Kt]===null){v[Kt]=_t,ot=Kt;break}if(ot===-1)break}const At=_[ot];At&&At.connect(_t)}}const V=new T,J=new T;function z(q,et,_t){V.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(_t.matrixWorld);const ot=V.distanceTo(J),At=et.projectionMatrix.elements,Kt=_t.projectionMatrix.elements,Ct=At[14]/(At[10]-1),fe=At[14]/(At[10]+1),le=(At[9]+1)/At[5],zt=(At[9]-1)/At[5],I=(At[8]-1)/At[0],Ge=(Kt[8]+1)/Kt[0],Gt=Ct*I,Ht=Ct*Ge,Et=ot/(-I+Ge),re=Et*-I;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ct+Et,A=fe+Et,M=Gt-re,O=Ht+(ot-re),K=le*fe/A*yt,j=zt*fe/A*yt;q.projectionMatrix.makePerspective(M,O,K,j,yt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,_t=q.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),y.near=w.near=L.near=et,y.far=w.far=L.far=_t,(P!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,B=y.far),L.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,y.layers.mask=L.layers.mask|w.layers.mask;const ot=q.parent,At=y.cameras;it(y,ot);for(let Kt=0;Kt<At.length;Kt++)it(At[Kt],ot);At.length===2?z(y,L,w):y.projectionMatrix.copy(L.projectionMatrix),lt(q,y,ot)};function lt(q,et,_t){_t===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ni*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let St=null;function Bt(q,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ot=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Ct=0;Ct<_t.length;Ct++){const fe=_t[Ct];let le=null;if(p!==null)le=p.getViewport(fe);else{const I=u.getViewSubImage(f,fe);le=I.viewport,Ct===0&&(t.setRenderTargetTextures(b,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(b))}let zt=E[Ct];zt===void 0&&(zt=new Ue,zt.layers.enable(Ct),zt.viewport=new ee,E[Ct]=zt),zt.matrix.fromArray(fe.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(fe.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(y.matrix.copy(zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(zt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ct=u.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,s.renderState)}}for(let _t=0;_t<_.length;_t++){const ot=v[_t],At=_[_t];ot!==null&&At!==void 0&&At.update(ot,et,l||o)}St&&St(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ie=new fl;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const qn=new hn,wg=new ne;function Tg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,sl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Oe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Oe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,qn.copy(v),qn.x*=-1,qn.y*=-1,qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(qn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ag(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){const v=_.program;n.uniformBlockBinding(b,v)}function l(b,_){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(b,C);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const _=u();b.__bindingPointIndex=_;const v=i.createBuffer(),C=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=s[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,L=v.length;R<L;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,y=w.length;E<y;E++){const P=w[E];if(p(P,R,E,C)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],J=x(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,v,C){const R=b.value,L=_+"_"+v;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{const w=C[L];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return C[L]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(b){const _=b.uniforms;let v=0;const C=16;for(let L=0,w=_.length;L<w;L++){const E=Array.isArray(_[L])?_[L]:[_[L]];for(let y=0,P=E.length;y<P;y++){const B=E[y],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=F.length;W<Y;W++){const V=F[W],J=x(V),z=v%C,it=z%J.boundary,lt=z+it;v+=it,lt!==0&&C-lt<J.storage&&(v+=C-lt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}const R=v%C;return R>0&&(v+=C-R),b.__size=v,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Cg{constructor(t={}){const{canvas:e=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let C=!1,R=0,L=0,w=null,E=-1,y=null;const P=new ee,B=new ee;let F=null;const W=new vt(0);let Y=0,V=e.width,J=e.height,z=1,it=null,lt=null;const St=new ee(0,0,V,J),Bt=new ee(0,0,V,J);let ie=!1;const q=new sa;let et=!1,_t=!1;this.transmissionResolutionScale=1;const ot=new ne,At=new ne,Kt=new T,Ct=new ee,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function zt(){return w===null?z:1}let I=n;function Ge(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const U="webgl2";if(I=Ge(U,S),I===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Ht,Et,re,yt,A,M,O,K,j,X,xt,at,dt,Wt,tt,ft,Tt,Rt,pt,Vt,Nt,se,D;function st(){Gt=new Bp(I),Gt.init(),Nt=new yg(I,Gt),Ht=new Ip(I,Gt,t,Nt),Et=new vg(I,Gt),Ht.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),re=new Gp(I),yt=new rg,A=new xg(I,Gt,Et,yt,Ht,Nt,re),M=new Up(v),O=new Fp(v),K=new Yu(I),se=new Lp(I,K),j=new kp(I,K,re,se),X=new Vp(I,j,K,re),Rt=new Hp(I,Ht,A),tt=new Dp(yt),xt=new sg(v,M,O,Gt,Ht,se,tt),at=new Tg(v,yt),dt=new ag,Wt=new fg(Gt),Tt=new Rp(v,M,O,Et,X,p,c),ft=new gg(v,X,Ht),D=new Ag(I,re,Ht,Et),pt=new Pp(I,Gt,re),Vt=new zp(I,Gt,re),re.programs=xt.programs,v.capabilities=Ht,v.extensions=Gt,v.properties=yt,v.renderLists=dt,v.shadowMap=ft,v.state=Et,v.info=re}st();const H=new bg(v,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(V,J,!1))},this.getSize=function(S){return S.set(V,J)},this.setSize=function(S,U,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,J=U,e.width=Math.floor(S*z),e.height=Math.floor(U*z),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*z,J*z).floor()},this.setDrawingBufferSize=function(S,U,k){V=S,J=U,z=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,U,k,G){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,U,k,G),Et.viewport(P.copy(St).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,U,k,G){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,U,k,G),Et.scissor(B.copy(Bt).multiplyScalar(z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){Et.setScissorTest(ie=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let G=0;if(S){let N=!1;if(w!==null){const Q=w.texture.format;N=Q===ea||Q===ta||Q===Qo}if(N){const Q=w.texture.type,rt=Q===En||Q===ti||Q===os||Q===Ii||Q===Zo||Q===Jo,ut=Tt.getClearColor(),mt=Tt.getClearAlpha(),Lt=ut.r,Pt=ut.g,bt=ut.b;rt?(g[0]=Lt,g[1]=Pt,g[2]=bt,g[3]=mt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Lt,x[1]=Pt,x[2]=bt,x[3]=mt,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Tt.dispose(),dt.dispose(),Wt.dispose(),yt.dispose(),M.dispose(),O.dispose(),X.dispose(),se.dispose(),D.dispose(),xt.dispose(),H.dispose(),H.removeEventListener("sessionstart",_a),H.removeEventListener("sessionend",va),kn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=re.autoReset,U=ft.enabled,k=ft.autoUpdate,G=ft.needsUpdate,N=ft.type;st(),re.autoReset=S,ft.enabled=U,ft.autoUpdate=k,ft.needsUpdate=G,ft.type=N}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Dt(S){const U=S.target;U.removeEventListener("dispose",Dt),ue(U)}function ue(S){we(S),yt.remove(S)}function we(S){const U=yt.get(S).programs;U!==void 0&&(U.forEach(function(k){xt.releaseProgram(k)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,G,N,Q){U===null&&(U=fe);const rt=N.isMesh&&N.matrixWorld.determinant()<0,ut=Pl(S,U,k,G,N);Et.setMaterial(G,rt);let mt=k.index,Lt=1;if(G.wireframe===!0){if(mt=j.getWireframeAttribute(k),mt===void 0)return;Lt=2}const Pt=k.drawRange,bt=k.attributes.position;let Xt=Pt.start*Lt,Zt=(Pt.start+Pt.count)*Lt;Q!==null&&(Xt=Math.max(Xt,Q.start*Lt),Zt=Math.min(Zt,(Q.start+Q.count)*Lt)),mt!==null?(Xt=Math.max(Xt,0),Zt=Math.min(Zt,mt.count)):bt!=null&&(Xt=Math.max(Xt,0),Zt=Math.min(Zt,bt.count));const pe=Zt-Xt;if(pe<0||pe===1/0)return;se.setup(N,G,ut,k,mt);let de,qt=pt;if(mt!==null&&(de=K.get(mt),qt=Vt,qt.setIndex(de)),N.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*zt()),qt.setMode(I.LINES)):qt.setMode(I.TRIANGLES);else if(N.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),Et.setLineWidth(wt*zt()),N.isLineSegments?qt.setMode(I.LINES):N.isLineLoop?qt.setMode(I.LINE_LOOP):qt.setMode(I.LINE_STRIP)}else N.isPoints?qt.setMode(I.POINTS):N.isSprite&&qt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,Se=N._multiDrawCounts,Jt=N._multiDrawCount,$e=mt?K.get(mt).bytesPerElement:1,si=yt.get(G).currentProgram.getUniforms();for(let Fe=0;Fe<Jt;Fe++)si.setValue(I,"_gl_DrawID",Fe),qt.render(wt[Fe]/$e,Se[Fe])}else if(N.isInstancedMesh)qt.renderInstances(Xt,pe,N.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,wt);qt.renderInstances(Xt,pe,Se)}else qt.render(Xt,pe)};function jt(S,U,k){S.transparent===!0&&S.side===Ne&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,ps(S,U,k),S.side=On,S.needsUpdate=!0,ps(S,U,k),S.side=Ne):ps(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),d=Wt.get(k),d.init(U),_.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let rt=0;rt<Q.length;rt++){const ut=Q[rt];jt(ut,k,N),G.add(ut)}else jt(Q,k,N),G.add(Q)}),_.pop(),d=null,G},this.compileAsync=function(S,U,k=null){const G=this.compile(S,U,k);return new Promise(N=>{function Q(){if(G.forEach(function(rt){yt.get(rt).currentProgram.isReady()&&G.delete(rt)}),G.size===0){N(S);return}setTimeout(Q,10)}Gt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ke=null;function dn(S){Ke&&Ke(S)}function _a(){kn.stop()}function va(){kn.start()}const kn=new fl;kn.setAnimationLoop(dn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(S){Ke=S,H.setAnimationLoop(S),S===null?kn.stop():kn.start()},H.addEventListener("sessionstart",_a),H.addEventListener("sessionend",va),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,w),d=Wt.get(S,_.length),d.init(U),_.push(d),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(At),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),m=dt.get(S,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&pr(Q,U,-1/0,v.sortObjects)}pr(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,lt),le=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,le&&Tt.addToRenderList(m,S),this.info.render.frame++,et===!0&&tt.beginShadows();const k=d.state.shadowsArray;ft.render(k,S,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let rt=0,ut=Q.length;rt<ut;rt++){const mt=Q[rt];ya(G,N,S,mt)}le&&Tt.render(S);for(let rt=0,ut=Q.length;rt<ut;rt++){const mt=Q[rt];xa(m,S,mt,mt.viewport)}}else N.length>0&&ya(G,N,S,U),le&&Tt.render(S),xa(m,S,U);w!==null&&L===0&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,U),se.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?(d=_[_.length-1],et===!0&&tt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pr(S,U,k,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){G&&Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const rt=X.update(S),ut=S.material;ut.visible&&m.push(S,rt,ut,k,Ct.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const rt=X.update(S),ut=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ct.copy(S.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ct.copy(rt.boundingSphere.center)),Ct.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(ut)){const mt=rt.groups;for(let Lt=0,Pt=mt.length;Lt<Pt;Lt++){const bt=mt[Lt],Xt=ut[bt.materialIndex];Xt&&Xt.visible&&m.push(S,rt,Xt,k,Ct.z,bt)}}else ut.visible&&m.push(S,rt,ut,k,Ct.z,null)}}const Q=S.children;for(let rt=0,ut=Q.length;rt<ut;rt++)pr(Q[rt],U,k,G)}function xa(S,U,k,G){const N=S.opaque,Q=S.transmissive,rt=S.transparent;d.setupLightsView(k),et===!0&&tt.setGlobalState(v.clippingPlanes,k),G&&Et.viewport(P.copy(G)),N.length>0&&fs(N,U,k),Q.length>0&&fs(Q,U,k),rt.length>0&&fs(rt,U,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ya(S,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new ei(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?as:En,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[G.id],rt=G.viewport||P;Q.setSize(rt.z*v.transmissionResolutionScale,rt.w*v.transmissionResolutionScale);const ut=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),le&&Tt.render(k);const mt=v.toneMapping;v.toneMapping=Un;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),et===!0&&tt.setGlobalState(v.clippingPlanes,G),fs(S,k,G),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let bt=0,Xt=U.length;bt<Xt;bt++){const Zt=U[bt],pe=Zt.object,de=Zt.geometry,qt=Zt.material,wt=Zt.group;if(qt.side===Ne&&pe.layers.test(G.layers)){const Se=qt.side;qt.side=Oe,qt.needsUpdate=!0,Ma(pe,k,G,de,qt,wt),qt.side=Se,qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}v.setRenderTarget(ut),v.setClearColor(W,Y),Lt!==void 0&&(G.viewport=Lt),v.toneMapping=mt}function fs(S,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=S.length;N<Q;N++){const rt=S[N],ut=rt.object,mt=rt.geometry,Lt=G===null?rt.material:G,Pt=rt.group;ut.layers.test(k.layers)&&Ma(ut,U,k,mt,Lt,Pt)}}function Ma(S,U,k,G,N,Q){S.onBeforeRender(v,U,k,G,N,Q),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,k,G,S,Q),N.transparent===!0&&N.side===Ne&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,v.renderBufferDirect(k,U,G,N,S,Q),N.side=On,N.needsUpdate=!0,v.renderBufferDirect(k,U,G,N,S,Q),N.side=Ne):v.renderBufferDirect(k,U,G,N,S,Q),S.onAfterRender(v,U,k,G,N,Q)}function ps(S,U,k){U.isScene!==!0&&(U=fe);const G=yt.get(S),N=d.state.lights,Q=d.state.shadowsArray,rt=N.state.version,ut=xt.getParameters(S,N.state,Q,U,k),mt=xt.getProgramCacheKey(ut);let Lt=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?O:M).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Dt),Lt=new Map,G.programs=Lt);let Pt=Lt.get(mt);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===rt)return Ea(S,ut),Pt}else ut.uniforms=xt.getUniforms(S),S.onBeforeCompile(ut,v),Pt=xt.acquireProgram(ut,mt),Lt.set(mt,Pt),G.uniforms=ut.uniforms;const bt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=tt.uniform),Ea(S,ut),G.needsLights=Dl(S),G.lightsStateVersion=rt,G.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function Sa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Zs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ea(S,U){const k=yt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Pl(S,U,k,G,N){U.isScene!==!0&&(U=fe),A.resetTextureUnits();const Q=U.fog,rt=G.isMeshStandardMaterial?U.environment:null,ut=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ui,mt=(G.isMeshStandardMaterial?O:M).get(G.envMap||rt),Lt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,Zt=!!k.morphAttributes.color;let pe=Un;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pe=v.toneMapping);const de=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=de!==void 0?de.length:0,wt=yt.get(G),Se=d.state.lights;if(et===!0&&(_t===!0||S!==y)){const Le=S===y&&G.id===E;tt.setState(G,S,Le)}let Jt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Se.state.version||wt.outputColorSpace!==ut||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==mt||G.fog===!0&&wt.fog!==Q||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Pt||wt.morphTargets!==bt||wt.morphNormals!==Xt||wt.morphColors!==Zt||wt.toneMapping!==pe||wt.morphTargetsCount!==qt)&&(Jt=!0):(Jt=!0,wt.__version=G.version);let $e=wt.currentProgram;Jt===!0&&($e=ps(G,U,N));let si=!1,Fe=!1,Hi=!1;const ce=$e.getUniforms(),He=wt.uniforms;if(Et.useProgram($e.program)&&(si=!0,Fe=!0,Hi=!0),G.id!==E&&(E=G.id,Fe=!0),si||y!==S){Et.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),Gh(ot),Hh(ot),ce.setValue(I,"projectionMatrix",ot)):ce.setValue(I,"projectionMatrix",S.projectionMatrix),ce.setValue(I,"viewMatrix",S.matrixWorldInverse);const De=ce.map.cameraPosition;De!==void 0&&De.setValue(I,Kt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ce.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Fe=!0,Hi=!0)}if(N.isSkinnedMesh){ce.setOptional(I,N,"bindMatrix"),ce.setOptional(I,N,"bindMatrixInverse");const Le=N.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ce.setValue(I,"boneTexture",Le.boneTexture,A))}N.isBatchedMesh&&(ce.setOptional(I,N,"batchingTexture"),ce.setValue(I,"batchingTexture",N._matricesTexture,A),ce.setOptional(I,N,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",N._indirectTexture,A),ce.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",N._colorsTexture,A));const Ve=k.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&Rt.update(N,k,$e),(Fe||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,ce.setValue(I,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(He.envMap.value=mt,He.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),Fe&&(ce.setValue(I,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Il(He,Hi),Q&&G.fog===!0&&at.refreshFogUniforms(He,Q),at.refreshMaterialUniforms(He,G,z,J,d.state.transmissionRenderTarget[S.id]),Zs.upload(I,Sa(wt),He,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zs.upload(I,Sa(wt),He,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ce.setValue(I,"center",N.center),ce.setValue(I,"modelViewMatrix",N.modelViewMatrix),ce.setValue(I,"normalMatrix",N.normalMatrix),ce.setValue(I,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Le=G.uniformsGroups;for(let De=0,mr=Le.length;De<mr;De++){const zn=Le[De];D.update(zn,$e),D.bind(zn,$e)}}return $e}function Il(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Dl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,U,k){yt.get(S.texture).__webglTexture=U,yt.get(S.depthTexture).__webglTexture=k;const G=yt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=yt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Ul=I.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){w=S,R=U,L=k;let G=!0,N=null,Q=!1,rt=!1;if(S){const mt=yt.get(S);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(mt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(mt.__hasExternalTextures)A.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const bt=S.depthTexture;if(mt.__boundDepthTexture!==bt){if(bt!==null&&yt.has(bt)&&(S.width!==bt.image.width||S.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(rt=!0);const Pt=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?N=Pt[U][k]:N=Pt[U],Q=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?N=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[k]:N=Pt,P.copy(S.viewport),B.copy(S.scissor),F=S.scissorTest}else P.copy(St).multiplyScalar(z).floor(),B.copy(Bt).multiplyScalar(z).floor(),F=ie;if(k!==0&&(N=Ul),Et.bindFramebuffer(I.FRAMEBUFFER,N)&&G&&Et.drawBuffers(S,N),Et.viewport(P),Et.scissor(B),Et.setScissorTest(F),Q){const mt=yt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(rt){const mt=yt.get(S.texture),Lt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,k,Lt)}else if(S!==null&&k!==0){const mt=yt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(S,U,k,G,N,Q,rt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){Et.bindFramebuffer(I.FRAMEBUFFER,ut);try{const mt=S.texture,Lt=mt.format,Pt=mt.type;if(!Ht.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&k>=0&&k<=S.height-N&&I.readPixels(U,k,G,N,Nt.convert(Lt),Nt.convert(Pt),Q)}finally{const mt=w!==null?yt.get(w).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,G,N,Q,rt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){const mt=S.texture,Lt=mt.format,Pt=mt.type;if(!Ht.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&k>=0&&k<=S.height-N){Et.bindFramebuffer(I.FRAMEBUFFER,ut);const bt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(U,k,G,N,Nt.convert(Lt),Nt.convert(Pt),0);const Xt=w!==null?yt.get(w).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,Xt);const Zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await zh(I,Zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(bt),I.deleteSync(Zt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-k),N=Math.floor(S.image.width*G),Q=Math.floor(S.image.height*G),rt=U!==null?U.x:0,ut=U!==null?U.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,rt,ut,N,Q),Et.unbindTexture()};const Nl=I.createFramebuffer(),Ol=I.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,G=null,N=0,Q=null){S.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],Q=arguments[3]||0,k=null),Q===null&&(N!==0?(bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let rt,ut,mt,Lt,Pt,bt,Xt,Zt,pe;const de=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(k!==null)rt=k.max.x-k.min.x,ut=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Lt=k.min.x,Pt=k.min.y,bt=k.isBox3?k.min.z:0;else{const Ve=Math.pow(2,-N);rt=Math.floor(de.width*Ve),ut=Math.floor(de.height*Ve),S.isDataArrayTexture?mt=de.depth:S.isData3DTexture?mt=Math.floor(de.depth*Ve):mt=1,Lt=0,Pt=0,bt=0}G!==null?(Xt=G.x,Zt=G.y,pe=G.z):(Xt=0,Zt=0,pe=0);const qt=Nt.convert(U.format),wt=Nt.convert(U.type);let Se;U.isData3DTexture?(A.setTexture3D(U,0),Se=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Se=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Se=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),si=I.getParameter(I.UNPACK_SKIP_PIXELS),Fe=I.getParameter(I.UNPACK_SKIP_ROWS),Hi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bt);const ce=S.isDataArrayTexture||S.isData3DTexture,He=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ve=yt.get(S),Le=yt.get(U),De=yt.get(Ve.__renderTarget),mr=yt.get(Le.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,De.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let zn=0;zn<mt;zn++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(S).__webglTexture,N,bt+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,Q,pe+zn)),I.blitFramebuffer(Lt,Pt,rt,ut,Xt,Zt,rt,ut,I.DEPTH_BUFFER_BIT,I.NEAREST);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||yt.has(S)){const Ve=yt.get(S),Le=yt.get(U);Et.bindFramebuffer(I.READ_FRAMEBUFFER,Nl),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ol);for(let De=0;De<mt;De++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ve.__webglTexture,N,bt+De):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ve.__webglTexture,N),He?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,Q,pe+De):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,Q),N!==0?I.blitFramebuffer(Lt,Pt,rt,ut,Xt,Zt,rt,ut,I.COLOR_BUFFER_BIT,I.NEAREST):He?I.copyTexSubImage3D(Se,Q,Xt,Zt,pe+De,Lt,Pt,rt,ut):I.copyTexSubImage2D(Se,Q,Xt,Zt,Lt,Pt,rt,ut);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else He?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Se,Q,Xt,Zt,pe,rt,ut,mt,qt,wt,de.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,Q,Xt,Zt,pe,rt,ut,mt,qt,de.data):I.texSubImage3D(Se,Q,Xt,Zt,pe,rt,ut,mt,qt,wt,de):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Xt,Zt,rt,ut,qt,wt,de.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Xt,Zt,de.width,de.height,qt,de.data):I.texSubImage2D(I.TEXTURE_2D,Q,Xt,Zt,rt,ut,qt,wt,de);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,si),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hi),Q===0&&U.generateMipmaps&&I.generateMipmap(Se),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,G=null,N=0){return S.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,G,N)},this.initRenderTarget=function(S){yt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){R=0,L=0,w=null,Et.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Rg{constructor(t){this.container=t,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new pu,this.scene.background=new vt(264212),this.scene.fog=new ia(330264,.013),this.camera=new Ue(55,this.width/this.height,.1,400),this.camera.position.set(0,10,18),this.renderer=new Cg({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oc,this.renderer.toneMapping=Bc,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.setupLights(),window.addEventListener("resize",this.onWindowResize.bind(this))}setupLights(){this.ambientLight=new Vu(528418,.45),this.scene.add(this.ambientLight),this.hemiLight=new Fu(1973067,132631,.5),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new Hu(6333946,.9),this.dirLight.position.set(-30,48,-25),this.dirLight.castShadow=!0;const t=35;this.dirLight.shadow.camera.left=-t,this.dirLight.shadow.camera.right=t,this.dirLight.shadow.camera.top=t,this.dirLight.shadow.camera.bottom=-t,this.dirLight.shadow.camera.near=5,this.dirLight.shadow.camera.far=120,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight)}onWindowResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}render(){this.renderer.render(this.scene,this.camera)}}class Lg{constructor(t){this.scene=t,this.group=new ge,this.chunks=[],this.chunkSize=50,this.gridCount=6,this.cullDistanceSq=19600,this.initMaterials(),this.buildSpatialGridChunks(),this.buildRoadNetwork(),this.buildInstancedSkyscrapers(),this.buildPerimeterBarrier(),this.scene.add(this.group)}initMaterials(){this.materials={ground:new It({color:593174,roughness:.9,metalness:.1,flatShading:!0}),sidewalk:new It({color:1712947,roughness:.75,metalness:.25}),curb:new $t({color:61695}),asphalt:new It({color:1185828,roughness:.8,metalness:.2}),expressway:new It({color:988448,roughness:.75,metalness:.35}),markingYellow:new $t({color:16755200}),markingWhite:new $t({color:14870768}),parkGrass:new It({color:993566,roughness:.85,metalness:.1}),barrierNeon:new $t({color:61695}),buildingGlass:new It({color:794160,metalness:.85,roughness:.15,emissive:8755,emissiveIntensity:.4}),buildingResidential:new It({color:1449258,metalness:.6,roughness:.4,emissive:1575712,emissiveIntensity:.3}),buildingDatacenter:new It({color:1119778,metalness:.7,roughness:.35}),buildingSpire:new It({color:1581618,metalness:.9,roughness:.1,emissive:13124,emissiveIntensity:.5})}}buildSpatialGridChunks(){const e=new Bn(this.chunkSize,this.chunkSize);e.rotateX(-Math.PI/2);for(let n=0;n<this.gridCount;n++)for(let s=0;s<this.gridCount;s++){const r=-150+(n+.5)*this.chunkSize,o=-150+(s+.5)*this.chunkSize,a=new ge;a.position.set(r,0,o);const c=new Z(e,this.materials.ground);c.position.y=0,c.receiveShadow=!0,a.add(c),this.group.add(a),this.chunks.push({group:a,x:r,z:o})}}buildRoadNetwork(){const t=new ge,e=new Mt(12,.08,280),n=new Z(e,this.materials.asphalt);n.position.set(0,.04,0),n.receiveShadow=!0,t.add(n);const s=new Mt(.25,.02,280),r=new Z(s,this.materials.markingYellow);r.position.set(-.2,.09,0);const o=new Z(s,this.materials.markingYellow);o.position.set(.2,.09,0),t.add(r),t.add(o);const a=new Mt(.2,.02,280),c=new Z(a,this.materials.markingWhite);c.position.set(-5.4,.09,0);const l=new Z(a,this.materials.markingWhite);l.position.set(5.4,.09,0),t.add(c),t.add(l);const h=new Mt(280,.08,12),u=new Z(h,this.materials.asphalt);u.position.set(0,.04,0),u.receiveShadow=!0,t.add(u);const f=new Mt(280,.02,.25),p=new Z(f,this.materials.markingYellow);p.position.set(0,.09,-.2);const g=new Z(f,this.materials.markingYellow);g.position.set(0,.09,.2),t.add(p),t.add(g);const x=new Ee(24,24,.16,32),m=new Z(x,this.materials.sidewalk);m.position.set(0,.08,0),m.receiveShadow=!0,t.add(m);const d=new ni(23.6,24.1,48);d.rotateX(-Math.PI/2);const b=new Z(d,this.materials.curb);b.position.set(0,.17,0),t.add(b);const _=new ni(24.2,34,48);_.rotateX(-Math.PI/2);const v=new Z(_,this.materials.asphalt);v.position.set(0,.05,0),v.receiveShadow=!0,t.add(v),[{x:0,z:-105,w:220,d:14},{x:0,z:105,w:220,d:14},{x:-105,z:0,w:14,d:220},{x:105,z:0,w:14,d:220}].forEach(w=>{const E=new Mt(w.w,.14,w.d),y=new Z(E,this.materials.expressway);y.position.set(w.x,.07,w.z),y.receiveShadow=!0,t.add(y);const P=new Mt(w.w,.45,.35),B=new Z(P,this.materials.sidewalk),F=new Z(P,this.materials.sidewalk);w.w>w.d?(B.position.set(w.x,.28,w.z-w.d*.5+.2),F.position.set(w.x,.28,w.z+w.d*.5-.2)):(B.position.set(w.x-w.w*.5+.2,.28,w.z),F.position.set(w.x+w.w*.5-.2,.28,w.z)),t.add(B),t.add(F)});const R=[{x:-38,z:-38},{x:38,z:-38},{x:-38,z:38},{x:38,z:38}],L=new Mt(26,.12,26);R.forEach(w=>{const E=new Z(L,this.materials.parkGrass);E.position.set(w.x,.06,w.z),E.receiveShadow=!0,t.add(E);const y=new Mt(26.4,.18,.35),P=new Z(y,this.materials.curb);P.position.set(w.x,.12,w.z-13.1);const B=new Z(y,this.materials.curb);B.position.set(w.x,.12,w.z+13.1),t.add(P),t.add(B)}),this.group.add(t)}buildInstancedSkyscrapers(){const t=new oe,e=28,n=36,s=32,r=16,o=new Mt(14,55,14),a=new Mt(11,38,11),c=new Mt(18,22,18),l=new Ee(1.5,7,72,8),h=new In(o,this.materials.buildingGlass,e),u=new In(a,this.materials.buildingResidential,n),f=new In(c,this.materials.buildingDatacenter,s),p=new In(l,this.materials.buildingSpire,r);h.castShadow=!1,h.receiveShadow=!0,u.castShadow=!1,u.receiveShadow=!0,f.castShadow=!1,f.receiveShadow=!0,p.castShadow=!1,p.receiveShadow=!0;let g=0,x=0,m=0,d=0;[{x:30,z:-76,type:"corp",hScale:1.2},{x:48,z:-76,type:"res",hScale:1.1},{x:68,z:-76,type:"corp",hScale:.9},{x:30,z:-38,type:"res",hScale:1},{x:68,z:-38,type:"data",hScale:1.1},{x:78,z:-55,type:"spire",hScale:1.3},{x:48,z:-40,type:"corp",hScale:1.4},{x:68,z:-20,type:"res",hScale:.9},{x:80,z:-80,type:"corp",hScale:1.1},{x:30,z:76,type:"res",hScale:1.1},{x:48,z:76,type:"data",hScale:1.2},{x:68,z:76,type:"corp",hScale:1},{x:30,z:38,type:"data",hScale:1},{x:68,z:38,type:"res",hScale:1.3},{x:78,z:55,type:"spire",hScale:1.2},{x:48,z:40,type:"res",hScale:.9},{x:68,z:20,type:"corp",hScale:1.1},{x:80,z:80,type:"res",hScale:1.2},{x:-30,z:76,type:"data",hScale:1.3},{x:-48,z:76,type:"corp",hScale:1},{x:-68,z:76,type:"data",hScale:1.1},{x:-30,z:38,type:"res",hScale:1},{x:-68,z:38,type:"spire",hScale:1.4},{x:-78,z:55,type:"data",hScale:1},{x:-48,z:40,type:"corp",hScale:1.2},{x:-68,z:20,type:"data",hScale:.9},{x:-80,z:80,type:"corp",hScale:1.1},{x:-30,z:-76,type:"corp",hScale:1.1},{x:-48,z:-76,type:"data",hScale:1.2},{x:-68,z:-76,type:"res",hScale:1},{x:-30,z:-38,type:"spire",hScale:1.3},{x:-68,z:-38,type:"corp",hScale:1.2},{x:-78,z:-55,type:"res",hScale:1.1},{x:-48,z:-40,type:"data",hScale:1},{x:-68,z:-20,type:"corp",hScale:1.3},{x:-80,z:-80,type:"spire",hScale:1.2},{x:125,z:-50,type:"corp",hScale:1.5},{x:125,z:0,type:"spire",hScale:1.4},{x:125,z:50,type:"res",hScale:1.2},{x:-125,z:-50,type:"data",hScale:1.3},{x:-125,z:0,type:"spire",hScale:1.5},{x:-125,z:50,type:"corp",hScale:1.3},{x:-50,z:-125,type:"corp",hScale:1.4},{x:0,z:-125,type:"spire",hScale:1.6},{x:50,z:-125,type:"res",hScale:1.2},{x:-50,z:125,type:"data",hScale:1.3},{x:0,z:125,type:"spire",hScale:1.5},{x:50,z:125,type:"corp",hScale:1.4}].forEach(_=>{const v=_.hScale||1;_.type==="corp"&&g<e?(t.position.set(_.x,27.5*v,_.z),t.scale.set(1,v,1),t.updateMatrix(),h.setMatrixAt(g++,t.matrix)):_.type==="res"&&x<n?(t.position.set(_.x,19*v,_.z),t.scale.set(1,v,1),t.updateMatrix(),u.setMatrixAt(x++,t.matrix)):_.type==="data"&&m<s?(t.position.set(_.x,11*v,_.z),t.scale.set(1,v,1),t.updateMatrix(),f.setMatrixAt(m++,t.matrix)):_.type==="spire"&&d<r&&(t.position.set(_.x,36*v,_.z),t.scale.set(1,v,1),t.updateMatrix(),p.setMatrixAt(d++,t.matrix))});for(let _=g;_<e;_++)t.position.set(0,-200,0),t.scale.set(0,0,0),t.updateMatrix(),h.setMatrixAt(_,t.matrix);for(let _=x;_<n;_++)t.position.set(0,-200,0),t.scale.set(0,0,0),t.updateMatrix(),u.setMatrixAt(_,t.matrix);for(let _=m;_<s;_++)t.position.set(0,-200,0),t.scale.set(0,0,0),t.updateMatrix(),f.setMatrixAt(_,t.matrix);for(let _=d;_<r;_++)t.position.set(0,-200,0),t.scale.set(0,0,0),t.updateMatrix(),p.setMatrixAt(_,t.matrix);h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,this.group.add(h),this.group.add(u),this.group.add(f),this.group.add(p)}buildPerimeterBarrier(){const t=new $t({color:61695,transparent:!0,opacity:.6}),e=new Mt(300,1.8,.4),n=new Mt(.4,1.8,300),s=new Z(e,t);s.position.set(0,.9,-149);const r=new Z(e,t);r.position.set(0,.9,149);const o=new Z(n,t);o.position.set(-149,.9,0);const a=new Z(n,t);a.position.set(149,.9,0),this.group.add(s),this.group.add(r),this.group.add(o),this.group.add(a)}update(t,e,n){if(!n)return;const s=n.x,r=n.z;for(let o=0;o<this.chunks.length;o++){const a=this.chunks[o],c=s-a.x,l=r-a.z,h=c*c+l*l;a.group.visible=h<=this.cullDistanceSq}}}class Pg{constructor(t){this.scene=t,this.group=new ge,this.roadHalfWidth=5,this.controlPoints=[new T(0,.22,-68),new T(45,.22,-55),new T(105,.28,-25),new T(105,.28,45),new T(75,.28,105),new T(0,.22,75),new T(0,.22,24),new T(-50,.22,0),new T(-105,.28,-25),new T(-75,.28,-105),new T(-25,.22,-100),new T(0,.22,-85)],this.curve=new $s(this.controlPoints,!0,"catmullrom",.25),this.sampleCount=260,this.trackSamples=this.curve.getSpacedPoints(this.sampleCount),this.buildRoadDeck(),this.buildApexKerbs(),this.buildTireBarriers(),this.buildStartFinishGantry(),this.scene.add(this.group)}buildRoadDeck(){const t=this.trackSamples,e=t.length*2,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=[],a=[],c=[],l=new T(0,1,0);for(let v=0;v<t.length;v++){const C=t[v],R=t[(v+1)%t.length],L=new T().subVectors(R,C).normalize(),w=new T().crossVectors(L,l).normalize(),y=Math.hypot(C.x,C.z)>70?.08:0,P=(C.x>0?-1:1)*y,B=C.x-w.x*this.roadHalfWidth,F=C.y-P,W=C.z-w.z*this.roadHalfWidth,Y=C.x+w.x*this.roadHalfWidth,V=C.y+P,J=C.z+w.z*this.roadHalfWidth,z=v*2;n[z*3]=B,n[z*3+1]=F,n[z*3+2]=W,n[(z+1)*3]=Y,n[(z+1)*3+1]=V,n[(z+1)*3+2]=J,s[z*3]=0,s[z*3+1]=1,s[z*3+2]=0,s[(z+1)*3]=0,s[(z+1)*3+1]=1,s[(z+1)*3+2]=0;const it=v/t.length*45;r[z*2]=0,r[z*2+1]=it,r[(z+1)*2]=1,r[(z+1)*2+1]=it;const lt=.45;o.push(new T(C.x-w.x*(this.roadHalfWidth-lt),F+.02,C.z-w.z*(this.roadHalfWidth-lt))),a.push(new T(C.x+w.x*(this.roadHalfWidth-lt),V+.02,C.z+w.z*(this.roadHalfWidth-lt))),v%2===0&&c.push(new T(C.x,C.y+.02,C.z))}const h=[];for(let v=0;v<t.length;v++){const C=(v+1)%t.length,R=v*2,L=v*2+1,w=C*2,E=C*2+1;h.push(R,L,w),h.push(w,L,E)}const u=new Re;u.setAttribute("position",new be(n,3)),u.setAttribute("normal",new be(s,3)),u.setAttribute("uv",new be(r,2)),u.setIndex(h);const f=new It({color:1448738,roughness:.85,metalness:.15,flatShading:!0});this.roadMesh=new Z(u,f),this.roadMesh.receiveShadow=!0,this.group.add(this.roadMesh);const p=new $t({color:16777215,side:Ne}),g=new $s(o,!0),x=new ar(g,200,.08,4,!0),m=new Z(x,p);this.group.add(m);const d=new $s(a,!0),b=new ar(d,200,.08,4,!0),_=new Z(b,p);this.group.add(_),this.buildPillars()}buildPillars(){const t=new Ee(.7,.85,4,8),e=new It({color:988970,roughness:.9,flatShading:!0}),n=new Mt(11.2,.4,1.4);for(let s=0;s<this.trackSamples.length;s+=18){const r=this.trackSamples[s];if(r.y>=.38){const o=new Z(t,e);o.position.set(r.x,-1.6,r.z),o.receiveShadow=!0,this.group.add(o);const a=new Z(n,e);a.position.set(r.x,r.y-.25,r.z),this.group.add(a)}}}buildApexKerbs(){const t=new Mt(.9,.14,1.3),e=new It({color:15606306,roughness:.6,metalness:.1}),n=new It({color:16777215,roughness:.6,metalness:.1}),s=[{start:30,end:55},{start:95,end:125},{start:160,end:190},{start:220,end:245}];let r=0;s.forEach(p=>{r+=p.end-p.start});const o=Math.ceil(r/2),a=new In(t,e,o),c=new In(t,n,o);a.castShadow=!1,a.receiveShadow=!0,c.castShadow=!1,c.receiveShadow=!0;const l=new oe,h=new T(0,1,0);let u=0,f=0;s.forEach(p=>{for(let g=p.start;g<p.end;g++){const x=this.trackSamples[g%this.trackSamples.length],m=this.trackSamples[(g+1)%this.trackSamples.length],d=new T().subVectors(m,x).normalize(),b=new T().crossVectors(d,h).normalize(),_=new T(x.x+b.x*(this.roadHalfWidth+.45),x.y+.07,x.z+b.z*(this.roadHalfWidth+.45));l.position.copy(_),l.quaternion.setFromUnitVectors(new T(0,0,1),d),l.updateMatrix(),(g-p.start)%2===0?u<o&&a.setMatrixAt(u++,l.matrix):f<o&&c.setMatrixAt(f++,l.matrix)}}),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,this.group.add(a),this.group.add(c)}buildTireBarriers(){const t=new Ee(.55,.55,1.2,10),e=new It({color:1579035,roughness:.9,flatShading:!0}),n=[{start:20,end:50},{start:85,end:115},{start:150,end:180},{start:215,end:245}];let s=0;n.forEach(l=>{s+=Math.floor((l.end-l.start)/2)});const r=new In(t,e,s);r.castShadow=!1,r.receiveShadow=!0;const o=new oe,a=new T(0,1,0);let c=0;n.forEach(l=>{for(let h=l.start;h<l.end;h+=2){const u=this.trackSamples[h%this.trackSamples.length],f=this.trackSamples[(h+1)%this.trackSamples.length],p=new T().subVectors(f,u).normalize(),g=new T().crossVectors(p,a).normalize(),x=new T(u.x-g.x*(this.roadHalfWidth+1.2),u.y+.6,u.z-g.z*(this.roadHalfWidth+1.2));o.position.copy(x),o.updateMatrix(),c<s&&r.setMatrixAt(c++,o.matrix)}}),r.instanceMatrix.needsUpdate=!0,this.group.add(r)}buildStartFinishGantry(){const t=new ge;t.position.set(0,.22,-68);const e=new It({color:988970,metalness:.85,roughness:.25}),n=new Mt(.8,7.5,.8),s=new Z(n,e);s.position.set(-6.2,3.75,0),s.castShadow=!1,t.add(s);const r=new Z(n,e);r.position.set(6.2,3.75,0),r.castShadow=!1,t.add(r);const o=new Mt(13.2,.9,1.2),a=new Z(o,e);a.position.set(0,7.1,0),t.add(a),this.startLights=[];const c=new ca(.35,12,12);for(let L=0;L<5;L++){const w=new $t({color:3342336}),E=new Z(c,w);E.position.set(-3.2+L*1.6,7.1,.65),t.add(E),this.startLights.push({mesh:E,mat:w})}const l=document.createElement("canvas");l.width=256,l.height=64;const h=l.getContext("2d"),u=16,f=4,p=l.width/u,g=l.height/f;for(let L=0;L<f;L++)for(let w=0;w<u;w++)h.fillStyle=(L+w)%2===0?"#ffffff":"#111111",h.fillRect(w*p,L*g,p,g);const x=new Fi(l),m=new $t({map:x,side:Ne}),d=new Z(new Bn(10,1.8),m);d.rotation.x=-Math.PI/2,d.position.set(0,.025,0),t.add(d);const b=document.createElement("canvas");b.width=512,b.height=128;const _=b.getContext("2d");_.fillStyle="rgba(10, 20, 35, 0.9)",_.fillRect(0,0,512,128),_.strokeStyle="#00f0ff",_.lineWidth=4,_.strokeRect(4,4,504,120),_.fillStyle="#00f0ff",_.font='bold 36px "Segoe UI", sans-serif',_.textAlign="center",_.fillText("🏁 GRAND PRIX CIRCUIT",256,55),_.fillStyle="#00ff88",_.font='bold 24px "Cairo", sans-serif',_.fillText("حلبة الجائزة الكبرى // TIME TRIAL",256,100);const v=new Fi(b),C=new $t({map:v,transparent:!0,opacity:.95}),R=new Z(new Bn(7.2,1.8),C);R.position.set(0,5.2,.65),t.add(R),this.group.add(t)}isPointOnTrack(t){const e=t.x,n=t.z;let s=1/0;for(let r=0;r<this.trackSamples.length;r+=4){const o=this.trackSamples[r],a=e-o.x,c=n-o.z,l=a*a+c*c;l<s&&(s=l)}return s<=55}update(t){if(this.startLights&&this.startLights.length===5){const e=t*1.5%6;this.startLights.forEach((n,s)=>{if(e<4){const r=e>s*.8;n.mat.color.setHex(r?16711731:2228224)}else n.mat.color.setHex(65416)})}}}class Ig{constructor(){this.ctx=null,this.isMuted=!1,this.isInitialized=!1,this.engineMasterGain=null,this.engineOsc=null,this.engineFilter=null,this.isEngineRunning=!1,this.lastAudioUpdate=0,this.lastRatio=-1,this.masterGain=null,this.skidNoiseBuffer=null}init(){if(!this.isInitialized)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.5,this.masterGain.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*.2);this.skidNoiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.skidNoiseBuffer.getChannelData(0);for(let s=0;s<e;s++)n[s]=(Math.random()*2-1)*.5;this.initEngineAudio(),this.isInitialized=!0}catch(t){console.warn("Web Audio API not supported or blocked:",t)}}resumeContext(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}initEngineAudio(){!this.ctx||this.isEngineRunning||(this.engineMasterGain=this.ctx.createGain(),this.engineMasterGain.gain.value=0,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=180,this.engineFilter.Q.value=2.5,this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=50,this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineMasterGain),this.engineMasterGain.connect(this.masterGain),this.engineOsc.start(),this.isEngineRunning=!0)}updateEngine(t){if(!this.isInitialized||!this.isEngineRunning||this.isMuted)return;const e=Math.min(Math.max(Math.abs(t||0),0),1),n=this.ctx.currentTime;if(e<.02){this.lastRatio!==0&&(this.engineMasterGain.gain.setTargetAtTime(0,n,.05),this.lastRatio=0);return}if(n-this.lastAudioUpdate<.033&&Math.abs(e-this.lastRatio)<.015)return;this.lastAudioUpdate=n,this.lastRatio=e;const s=50+e*160,r=180+e*620,o=.04+e*.12;this.engineOsc.frequency.setTargetAtTime(s,n,.06),this.engineFilter.frequency.setTargetAtTime(r,n,.06),this.engineMasterGain.gain.setTargetAtTime(o,n,.06)}playPodChime(){if(!this.isInitialized||this.isMuted)return;this.resumeContext();const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+s*.08),o.gain.setValueAtTime(0,t+s*.08),o.gain.linearRampToValueAtTime(.18,t+s*.08+.02),o.gain.exponentialRampToValueAtTime(.001,t+s*.08+.6),r.connect(o),o.connect(this.masterGain),r.start(t+s*.08),r.stop(t+s*.08+.65)})}playClick(){if(!this.isInitialized||this.isMuted)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(400,t+.05),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.06)}playBrakeSkid(){if(!this.isInitialized||this.isMuted||!this.skidNoiseBuffer)return;this.resumeContext();const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.skidNoiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1200,t),n.Q.value=3;const s=this.ctx.createGain();s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(s),s.connect(this.masterGain),e.start(t),e.stop(t+.16)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&(this.masterGain.gain.value=this.isMuted?0:.5),this.isMuted}}const he=new Ig;class Dg{constructor(t={}){this.callbacks=t,this.checkpoints=[{id:0,name:"Start / Finish Gantry (North Avenue)",pos:new T(0,.22,-68),radius:9.5},{id:1,name:"Sector 1 (Downtown Chicane)",pos:new T(45,.22,-55),radius:9.5},{id:2,name:"East Expressway Sprint",pos:new T(105,.28,45),radius:10.5},{id:3,name:"Sector 2 (South AI Quarter)",pos:new T(0,.22,75),radius:9.5},{id:4,name:"Sector 3 (Central Plaza Roundabout)",pos:new T(0,.22,24),radius:9.5},{id:5,name:"West Tech Park / Expressway Entry",pos:new T(-105,.28,-25),radius:10.5}],this.state="IDLE",this.currentLap=1,this.lapStartTime=0,this.currentLapTime=0,this.lastLapTime=null,this.nextCheckpointIndex=0,this.sectorTimes=[];const e=localStorage.getItem("gmudz_gp_best_lap");this.bestLapTime=e?parseFloat(e):null}getBestLapTime(){return this.bestLapTime}formatTime(t){if(t==null||isNaN(t))return"--:--.---";const e=Math.floor(t/60),n=Math.floor(t%60),s=Math.floor(t*1e3%1e3);return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}.${s.toString().padStart(3,"0")}`}update(t){const e=performance.now(),n=this.checkpoints[this.nextCheckpointIndex];if(Math.hypot(t.x-n.pos.x,t.z-n.pos.z)<n.radius)if(this.nextCheckpointIndex===0){if(this.state==="IDLE")this.state="IN_LAP",this.lapStartTime=e,this.nextCheckpointIndex=1,this.sectorTimes=[],he.playClick();else if(this.state==="IN_LAP"){const r=(e-this.lapStartTime)/1e3;this.lastLapTime=r;let o=!1;(this.bestLapTime===null||r<this.bestLapTime)&&(this.bestLapTime=r,localStorage.setItem("gmudz_gp_best_lap",r.toFixed(3)),o=!0),he.playPodChime(),this.callbacks.onLapFinished&&this.callbacks.onLapFinished({lapNumber:this.currentLap,lapTime:r,lapTimeStr:this.formatTime(r),isNewRecord:o,bestLapTime:this.bestLapTime,bestLapTimeStr:this.formatTime(this.bestLapTime)}),this.currentLap++,this.lapStartTime=e,this.nextCheckpointIndex=1,this.sectorTimes=[]}}else{const r=(e-this.lapStartTime)/1e3;this.sectorTimes.push(r),this.callbacks.onSector&&this.callbacks.onSector({checkpointId:this.nextCheckpointIndex,checkpointName:n.name,splitTime:r,splitTimeStr:this.formatTime(r)}),this.nextCheckpointIndex=(this.nextCheckpointIndex+1)%this.checkpoints.length}this.state==="IN_LAP"?this.currentLapTime=(e-this.lapStartTime)/1e3:this.currentLapTime=0,this.callbacks.onTick&&this.callbacks.onTick({inLap:this.state==="IN_LAP",currentLap:this.currentLap,currentLapTime:this.currentLapTime,currentLapTimeStr:this.formatTime(this.currentLapTime),bestLapTime:this.bestLapTime,bestLapTimeStr:this.formatTime(this.bestLapTime),nextCheckpoint:this.nextCheckpointIndex})}reset(){this.state="IDLE",this.currentLap=1,this.lapStartTime=0,this.currentLapTime=0,this.nextCheckpointIndex=0,this.sectorTimes=[]}}const ve={profile:{title:{en:"Full-Stack Architect, Mobile Engineer & Systems Developer",ar:"مهندس برمجيات شامل، مطور تطبيقات وأنظمة منخفضة المستوى"}},projects:[{id:"qticket",slug:"qticket",podIndex:0,color:"#00f0ff",colorName:"Cyber Cyan",position:{x:0,y:.2,z:-52},brandType:"svg",status:{en:"Enterprise Production",ar:"منظومة مؤسسية نشطة"},title:{en:"QTicket",ar:"كيو تيكت (QTicket)"},tagline:{en:"Enterprise Multi-Tenant SaaS Ticketing & Reservation Platform",ar:"منصة سحابية متكاملة متعددة المستأجرين لإدارة الحجوزات والتذاكر"},category:{en:"Multi-Tenant SaaS / Enterprise Architecture",ar:"برمجيات كخدمة (SaaS) / معمارية مؤسسية"},role:{en:"Founder, Technical Lead & Full-Stack Architect",ar:"المؤسس والقائد التقني ومعماري البرمجيات"},summary:{en:'An enterprise-grade multi-tenant SaaS reservation and ticketing platform engineered from the ground up with Clean Architecture and ASP.NET Core. Features fine-grained tenant schema isolation, strict Role-Based Access Control (RBAC), multi-gateway payment reconciliation, immutable audit logging with cryptographic hashing, and an embedded proprietary AI assistant "Bawsala AI" designed to eliminate enterprise data leakage.',ar:'منصة حجوزات وتذاكر سحابية متعددة المستأجرين (Multi-Tenant SaaS) صُممت وهُندست بالكامل من الصفر باستخدام معمارية Clean Architecture وتقنيات ASP.NET Core الحديثة. تتميز بعزل بيانات المستأجرين على مستوى قواعد البيانات، نظام أذونات وتحكم بالوصول صارم (RBAC)، تسويات مالية تلقائية متعددة البوابات، سجلات تدقيق غير قابلة للتعديل مشفرة رقمياً، ومساعد ذكاء اصطناعي داخلي "بوصلة AI" لمنع تسريب البيانات الحساسة.'},highlights:{en:["Domain-Driven Design (DDD) & Clean Architecture utilizing ASP.NET Core and Supabase PostgreSQL","Strict tenant isolation with dynamic connection tenancy resolution and zero-leak access policies","High-precision financial refund pipelines with transactional idempotency and automated dispute management",'Proprietary "Bawsala AI" assistant acting as a secure semantic firewall against sensitive data exfiltration'],ar:["تصميم موجه بالمجال (DDD) ومعمارية Clean Architecture مع محرك ASP.NET Core وقاعدة Supabase","عزل تام ومنهجي لبيانات كل مستأجر مع مفاتيح أمان ديناميكية وسياسات انعدام التسريب","أتمتة شاملة لعمليات الإرجاع المالي وضمان موثوقية المعاملات وتتبع النزاعات لحظياً",'دمج مساعد الذكاء الاصطناعي "بوصلة AI" ليعمل كجدار ناري دلالي يمنع تسريب البيانات المؤسسية']},techStack:[{name:"ASP.NET Core",color:"#512bd4"},{name:"C#",color:"#239120"},{name:"Supabase RLS",color:"#3ecf8e"},{name:"Clean Architecture",color:"#00f0ff"},{name:"Bawsala AI",color:"#ffaa00"},{name:"RBAC / Security",color:"#ff3366"}],metrics:{en:{tenancy:"Zero Data Leak",architecture:"Clean / DDD",uptime:"99.98% Cloud"},ar:{tenancy:"عزل تام للبيانات",architecture:"معمارية نظيفة / DDD",uptime:"جاهزية سحابية 99.98%"}},links:{demo:"https://qticket.net",github:"https://github.com/gmudz/Qticket",caseStudy:"https://qticket.net"},logoSvg:`<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f0ff"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <filter id="qtGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <rect x="14" y="24" width="92" height="72" rx="16" fill="#0b1329" stroke="url(#qtGrad)" stroke-width="3.5" filter="url(#qtGlow)"/>
        <path d="M14 60 C24 60 24 50 24 50 L24 70 C24 70 24 60 14 60" fill="#00f0ff"/>
        <path d="M106 60 C96 60 96 50 96 50 L96 70 C96 70 96 60 106 60" fill="#00f0ff"/>
        <circle cx="40" cy="46" r="6" fill="#00f0ff"/>
        <rect x="54" y="42" width="34" height="8" rx="4" fill="#38bdf8"/>
        <line x1="38" y1="62" x2="88" y2="62" stroke="#334155" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/>
        <path d="M42 76 L48 82 L64 68" stroke="#00ff88" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="82" cy="76" r="6" fill="#ffaa00"/>
      </svg>`,bannerGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)"},{id:"laffeh",slug:"laffeh",podIndex:1,color:"#ff6b35",colorName:"Sunset Orange",position:{x:52,y:.2,z:0},brandType:"svg",status:{en:"Commercial Live Ecosystem",ar:"منظومة تجارية متكاملة"},title:{en:"Laffeh Food Delivery Ecosystem",ar:"منظومة لفة للتوصيل السريع (Laffeh)"},tagline:{en:"End-to-End Real-Time Multi-App Food Delivery Network",ar:"منظومة متكاملة لتوصيل الأطعمة متعددة التطبيقات في الوقت الفعلي"},category:{en:"Mobile Ecosystem & Real-Time Sync",ar:"تطبيقات الهاتف والأنظمة المتزامنة لحظياً"},role:{en:"Founder CEO & Lead Mobile/Backend Engineer",ar:"المؤسس، المدير التنفيذي ومطور التطبيقات والنظام الخلفي"},summary:{en:"A commercial food delivery network operating across the Istanbul metropolitan area, powered by 4 custom-engineered Flutter applications: Customer Ordering App, Courier Telemetry & Navigation App, Restaurant Order Management Tablet Console, and Central Dispatch Operations Dashboard. Built with battery-conscious background GPS telemetry, sub-second WebSocket dispatch pipelines, and automated merchant settlements.",ar:"شبكة تجارية متكاملة لطلب وتوصيل الوجبات تعمل في نطاق إسطنبول الكبرى، تعمل عبر 4 تطبيقات فلاتر متزامنة لحظياً: تطبيق العميل للطلب السلس، تطبيق السائق المزود بملاحة وتتبع GPS حي موفر للطاقة في الخلفية، لوحة تحكم المطاعم للأجهزة اللوحية، ولوحة الإدارة المركزية لتوزيع الطلبات عبر WebSockets مع تسويات مالية آلية."},highlights:{en:["Synchronized 4-tier mobile ecosystem (Customer, Courier, Restaurant, Admin) developed with Flutter/Dart","Optimized background GPS courier telemetry utilizing Kalman filters for battery-efficient sub-second precision","Resilient WebSocket event bus handling concurrent order surge without dropped state","Automated cloud merchant settlement workflows integrated with payment gateways and thermal POS printing"],ar:["منظومة هاتفية رباعية متكاملة (العميل، السائق، المطعم، الإدارة) مطورة بالكامل عبر Flutter/Dart","تتبع GPS فائق الدقة للسائقين في الخلفية مع خوارزميات ترشيح ذكية تحافظ على بطارية الهاتف","ناقل أحداث WebSocket عالي الاعتمادية لمعالجة آلاف الطلبات المتزامنة في ساعات الذروة دون فقدان الاتصال","أتمتة الحسابات والتسويات المالية للمطاعم والتكامل مع بوابات الدفع وطابعات الفواتير الحرارية"]},techStack:[{name:"Flutter",color:"#02569b"},{name:"Dart",color:"#0175c2"},{name:"WebSockets",color:"#ffaa00"},{name:"Real-time GPS",color:"#00ff88"},{name:"Cloud Infrastructure",color:"#bf55ec"},{name:"Clean Architecture",color:"#3ecf8e"}],metrics:{en:{apps:"4 Synchronized Apps",telemetry:"Sub-second GPS",coverage:"Istanbul Metro"},ar:{apps:"4 تطبيقات متزامنة",telemetry:"تحديث لحظي للـ GPS",coverage:"نطاق إسطنبول الكبرى"}},links:{demo:"https://laffeh.live",github:"https://github.com/gmudz/Laffeh",caseStudy:"https://laffeh.live"},logoSvg:`<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff6b35"/>
            <stop offset="100%" stop-color="#ea580c"/>
          </linearGradient>
          <filter id="lfGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <circle cx="60" cy="60" r="48" fill="#140f0d" stroke="url(#lfGrad)" stroke-width="3.5" filter="url(#lfGlow)"/>
        <path d="M34 68 C34 52 46 42 60 42 C74 42 86 52 86 68 Z" fill="#ff6b35" opacity="0.3" stroke="#ff6b35" stroke-width="3"/>
        <line x1="28" y1="72" x2="92" y2="72" stroke="#ff6b35" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="60" cy="34" r="5" fill="#ffaa00"/>
        <path d="M52 80 L60 92 L68 80 Z" fill="#ff6b35"/>
        <circle cx="60" cy="56" r="5" fill="#ffffff"/>
      </svg>`,bannerGradient:"linear-gradient(135deg, rgba(255, 107, 53, 0.25) 0%, rgba(20, 15, 13, 0.95) 100%)"},{id:"callcenter",slug:"callcenter",podIndex:2,color:"#00ff88",colorName:"Neon Emerald",position:{x:0,y:.2,z:52},brandType:"ascii",status:{en:"Open Source AI Core",ar:"نواة ذكاء اصطناعي مفتوحة"},title:{en:"Ultimate Call Center Agent",ar:"وكيل مركز الاتصال الذكي (AI Copilot)"},tagline:{en:"Enterprise Real-Time AI Sales Copilot & Arabic Dialect Engine",ar:"مساعد ذكي لحظي لمراكز الاتصال يدعم اللهجات العربية ومراقبة الجودة"},category:{en:"Enterprise AI & Speech Intelligence",ar:"ذكاء اصطناعي مؤسسي ومعالجة الصوتيات لحظياً"},role:{en:"AI Systems Architect & Open-Source Creator",ar:"معماري أنظمة الذكاء الاصطناعي ومطور المشروع"},summary:{en:"An enterprise-grade real-time AI sales copilot built for high-stakes financial brokerage call centers. Integrates a sub-300ms audio streaming pipeline with customized Automatic Speech Recognition (ASR) fine-tuned for Arabic dialects (Gulf, Levantine, Egyptian). Generates dynamic objection battle-cards, cross-references live financial market telemetry, and performs real-time regulatory compliance scoring against mandatory disclosure guidelines.",ar:"مساعد ذكي متقدم لممثلي المبيعات في مراكز الاتصال وشركات الوساطة المالية يعمل بالوقت الفعلي. يتضمن مسار معالجة صوتية فائق السرعة (أقل من 300 مللي ثانية) مع نموذج تعرف صوتي مدرب خصيصاً على اللهجات العربية المختلفة (الخليجية، الشامية، المصرية). يوفر بطاقات استجابة سريعة للاعتراضات، ربطاً حياً بمؤشرات الأسواق المالية، وتدقيقاً آلياً للامتثال التنظيمي لمنع المخالفات القانونية."},highlights:{en:["Ultra-low-latency bidirectional audio streaming processing voice packets under 300ms","Specialized multi-dialect Arabic NLP tokenizers handling colloquial nuances and code-switching","Contextual RAG battle-card retrieval surfacing real-time competitive counter-arguments during active calls","VoIP / SIP telecommunication hook integrating directly into enterprise PBX call distribution trunks"],ar:["معالجة صوتية ثنائية الاتجاه فائقة السرعة تتعامل مع حزم الصوت في أقل من 300 مللي ثانية","نماذج لغوية متخصصة في اللهجات العربية تفهم المصطلحات الدارجة والخلط اللغوي بين العربية والإنجليزية","نظام RAG استرجاعي سياقي يظهر حججاً مضادة فورية لممثل المبيعات للرد على تردد أو اعتراضات العميل","تكامل مع بروتوكولات الاتصال الهاتفي المؤسسي VoIP / SIP وربط مباشر مع سنترالات PBX"]},techStack:[{name:"Python",color:"#3776ab"},{name:"Arabic NLP",color:"#00ff88"},{name:"Real-Time Audio",color:"#ff3366"},{name:"LLM Orchestration",color:"#bf55ec"},{name:"VoIP / SIP",color:"#00f0ff"},{name:"WebSockets",color:"#ffaa00"}],metrics:{en:{latency:"< 300ms Stream",dialects:"Multi-Arabic",compliance:"Real-Time Auditor"},ar:{latency:"معالجة أقل من 300ms",dialects:"دعم اللهجات العربية",compliance:"تدقيق امتثال فوري"}},links:{demo:"https://github.com/gmudz/UltimateCallCenterAgent",github:"https://github.com/gmudz/UltimateCallCenterAgent",caseStudy:"https://github.com/gmudz/UltimateCallCenterAgent#architecture"},asciiArt:`
  ___ ___   _   ___  ___ ___ _____ 
 | _ \\ __| /_\\ |   \\| __|_ _|_   _|
 |   / _| / _ \\| |) | _| | |  | |  
 |_|_\\___/_/ \\_\\___/|___|___| |_|  
 [AI_AUDIO_PIPELINE: ARABIC_DIALECT_V2.5_ONLINE]
 [LATENCY: 284ms | CHANNELS: DUAL_VOIP_SIP | STATUS: ACTIVE]
      `,bannerGradient:"linear-gradient(135deg, rgba(0, 255, 136, 0.22) 0%, rgba(5, 20, 15, 0.95) 100%)"},{id:"kernel",slug:"kernel",podIndex:3,color:"#ffaa00",colorName:"Cyber Gold",position:{x:-52,y:.2,z:0},brandType:"ascii",status:{en:"Embedded / Systems",ar:"أنظمة مدمجة ونواة"},title:{en:"Snapdragon 732G Kernel & SedOS",ar:"نواة لينكس لسنابدراجون 732G وتوزيعة SedOS"},tagline:{en:"Custom Linux Kernel, Droidian Toolchain & Independent OS",ar:"تعديل نواة لينكس، أدوات تشغيل Droidian وبناء توزيعة مستقلة"},category:{en:"Embedded Systems & Operating System Internals",ar:"الأنظمة المدمجة وتطوير نوى أنظمة التشغيل"},role:{en:"Systems Engineer & Kernel Developer",ar:"مهندس أنظمة ومطور نوى النظم"},summary:{en:"A deep low-level systems engineering project establishing mainline Linux kernel compatibility and a custom Droidian GNU/Linux boot toolchain on the Qualcomm Snapdragon 732G (SM7150 platform for Xiaomi Redmi Note 10 Pro / sweet). Encompasses Device Tree Source (DTS) writing for display, touchscreen, and power controllers. Additionally developed SedOS: an independent Linux distribution with kernel-level performance tuning and customized init packages.",ar:"مشروع هندسة أنظمة منخفض المستوى يهدف إلى تشغيل وتكييف نواة لينكس الحديثة (Mainline Linux Kernel) وأدوات إقلاع توزيعة Droidian على معالجات كوالكوم سنابدراجون 732G (منصة SM7150 لهاتف Redmi Note 10 Pro). يتضمن كتابة ملفات شجرة الأجهزة (DTS) لتعريف الشاشات واللمس وإدارة الطاقة، بالإضافة إلى تطوير توزيعة SedOS المستقلة مع تحسينات عميقة على مستوى النواة وحزم الإقلاع."},highlights:{en:["Mainline Linux 6.x kernel porting for Qualcomm Snapdragon 732G architecture (ARM64)","Custom Device Tree Source (DTS) definitions enabling MIPI-DSI display panels and I2C touch digitizers","Droidian GNU/Linux rootfs bootchain and Hardware Abstraction Layer (HAL) bypass for pure Linux","SedOS independent Linux distribution with kernel-level scheduling and package management"],ar:["تكييف وتجميع نواة لينكس 6.x لمعمارية معالجات كوالكوم سنابدراجون 732G (ARM64)","كتابة وتجميع ملفات شجرة الأجهزة (DTS) لتشغيل شاشات MIPI-DSI ولوحات اللمس عبر ناقل I2C","بناء مسار إقلاع نظام Droidian وتجاوز طبقات أندرويد لتشغيل نظام جنو/لينكس كامل","تطوير توزيعة SedOS المستقلة مع تحسين جدولة المعالجة وإدارة الحزم المخصصة"]},techStack:[{name:"C",color:"#a8b9cc"},{name:"Linux Kernel",color:"#ffaa00"},{name:"ARM64",color:"#00f0ff"},{name:"Device Trees (DTS)",color:"#3ecf8e"},{name:"Android Internals",color:"#3ddc84"},{name:"SedOS Core",color:"#bf55ec"}],metrics:{en:{arch:"ARM64 / SM7150",os:"GNU/Linux Pure",drivers:"DSI / Touch / PMIC"},ar:{arch:"معمارية ARM64",os:"جنو/لينكس نقي",drivers:"الشاشة / اللمس / الطاقة"}},links:{demo:"https://github.com/gmudz/Snapdragon-732G-Linux-Kernel",github:"https://github.com/gmudz/Snapdragon-732G-Linux-Kernel",caseStudy:"https://github.com/gmudz/LinuxMacOSUI"},asciiArt:`
  _    _                 _  __                    _ 
 | |  (_)_ _ _  ___ __  | |/ /___ _ _ _ _  ___ | |
 | |__| | ' \\ || \\ \\ /  | ' </ -_) '_| ' \\/ -_)| |
 |____|_|_||_\\_,_/\\_\\_\\  |_|\\_\\___|_| |_||_\\___||_|
 [BOOT: QUALCOMM_SM7150_MAINLINE_V6.1_AARCH64_OK]
 [INIT: DROIDIAN_ROOTFS_MOUNTED | SEDOS_CORE_READY]
      `,bannerGradient:"linear-gradient(135deg, rgba(255, 170, 0, 0.22) 0%, rgba(20, 15, 5, 0.95) 100%)"}],waypoints:[{id:"waypoint-1",index:0,position:{x:0,y:.2,z:-10},type:"experience",icon:"briefcase",title:{en:"Founder CEO & Full-Stack Lead",ar:"المؤسس، المدير التنفيذي وقائد البرمجيات"},organization:{en:"Laffeh & QTicket",ar:"منصتي لفة وكيو تيكت (Laffeh & QTicket)"},period:{en:"2024 — Present | Istanbul, Türkiye",ar:"2024 — الآن | إسطنبول، تركيا"},description:{en:"Single-handedly architected and engineered two enterprise platforms: Laffeh (real-time food delivery ecosystem) and QTicket (multi-tenant SaaS reservation platform). Built mobile, backend, frontend, and cloud infrastructure layers with Clean Architecture.",ar:"تأسيس وقيادة منصتين تقنيتين متكاملتين: لفة (منظومة توصيل طلبات لحظية) وكيو تيكت (منصة حجز تذاكر سحابية). بناء وتطوير كامل الأنظمة الخلفية، التطبيقات، والواجهات السحابية باستخدام معمارية Clean Architecture."}},{id:"waypoint-2",index:1,position:{x:10,y:.2,z:0},type:"experience",icon:"server",title:{en:"Technical Support & Network Operations Specialist",ar:"أخصائي الدعم الفني وإدارة عمليات الشبكات"},organization:{en:"ALQABIDA Group",ar:"مجموعة القابضة (ALQABIDA)"},period:{en:"2026 | Istanbul, Türkiye",ar:"2026 | إسطنبول، تركيا"},description:{en:"Server-level resource sharing, enterprise VoIP/SIP telecommunication (MicroSIP), PBX/PABX telephone exchange management, PSTN Trunks integration, and secure VPN infrastructure across multi-company corporate divisions.",ar:"إدارة مشاركة موارد الخوادم، شبكات الاتصال الصوتي المؤسسية VoIP/SIP، أنظمة السنترال PBX/PABX وخطوط PSTN، وإعداد بنية الاتصال المشفر والشبكات الخاصة الافتراضية VPN بين الشركات."}},{id:"waypoint-3",index:2,position:{x:0,y:.2,z:10},type:"education",icon:"graduation-cap",title:{en:"B.Sc. in Computer Engineering & Graphic Design",ar:"بكالوريوس هندسة الحاسوب ودراسات التصميم الجرافيكي"},organization:{en:"Bartın University",ar:"جامعة بارتن (Bartın University)"},period:{en:"2022 — 2026 | Türkiye",ar:"2022 — 2026 | تركيا"},description:{en:"Comprehensive academic grounding in computer architecture, systems programming, artificial intelligence, algorithms, combined with formal graphic design and visual communication studies.",ar:"تكوين أكاديمي هندسي متين في معمارية الحاسوب، البرمجة منخفضة المستوى، خوارزميات الذكاء الاصطناعي، متزامناً مع دراسات التصميم الجرافيكي والتواصل البصري."}}],skillsMatrix:{title:{en:"Core Technical Arsenal",ar:"ترسانة المهارات التقنية الأساسية"},subtitle:{en:"Specialized proficiency across Mobile, Cloud, AI, and Systems",ar:"خبرات هندسية متخصصة في الهواتف، السحابة، الذكاء الاصطناعي والأنظمة"},categories:[{id:"mobile",name:{en:"Mobile & Client Apps",ar:"تطبيقات الهواتف والواجهات"},color:"#02569b",skills:["Flutter","Dart",".NET MAUI","React Native","JavaScript","HTML5 / CSS3","Tailwind","Bootstrap"]},{id:"backend",name:{en:"Backend, Cloud & Architecture",ar:"الأنظمة الخلفية والسحابة"},color:"#512bd4",skills:["ASP.NET Core","C#","Node.js","Clean Architecture","Supabase RLS","Redis","Docker","Oracle Cloud","DigitalOcean"]},{id:"ai",name:{en:"AI, Deep Learning & Voice",ar:"الذكاء الاصطناعي ومعالجة الصوت"},color:"#00ff88",skills:["Arabic NLP","Real-Time Audio","DeepSeek","Kimi K2.5","CNN","RNN","LSTM","Ollama","Edge AI","MCP Protocols"]},{id:"systems",name:{en:"Systems, Kernel & Networking",ar:"الأنظمة المنخفضة والشبكات"},color:"#ffaa00",skills:["C / C++","Linux Kernel","ARM64","Device Trees (DTS)","Android Internals","VoIP / SIP","PBX / PABX","VPN / Tunneling","RBAC & Auditing"]}]},ui:{brand:{en:"MURAD ASHKAR // 3D CAMPUS",ar:"مراد أشقر // الحرم التفاعلي"},tagline:{en:"3D Interactive Cyber City & Real-Time World",ar:"مدينة سبرانية تفاعلية ثلاثية الأبعاد بالوقت الفعلي"},pilot:{en:"Pilot",ar:"الطيار"},onlinePilots:{en:"Pilots Online",ar:"متصلون الآن"},singlePilot:{en:"Pilot Online",ar:"متصل الآن"},controlsHintDrive:{en:"Drive / Steer",ar:"قيادة / توجيه"},controlsHintBrake:{en:"Handbrake / Drift",ar:"فرامل اليد / تفحيط"},controlsHintExplore:{en:"Explore District / Landmark",ar:"استكشاف الحي / المعلم"},parkedAt:{en:"Parked at",ar:"أنت متوقف عند"},pressEOrTap:{en:"Click or press E to view",ar:"انقر أو اضغط E للاستعراض"},touchGas:{en:"GAS",ar:"انطلاق"},touchRev:{en:"REV",ar:"رجوع"},touchBrake:{en:"BRAKE",ar:"فرامل"},envDay:{en:"☀️ Day",ar:"☀️ نهار"},envSunset:{en:"🌅 Sunset",ar:"🌅 غروب"},envNight:{en:"🌙 Night",ar:"🌙 ليل"},mapButton:{en:"🗺️ Map",ar:"🗺️ الخريطة"},mapTitle:{en:"Cyber City Tactical Satellite Map",ar:"خريطة المدينة التكتيكية عبر الأقمار الاصطناعية"},mapSubtitle:{en:"Click any district or landmark to engage Autonomous Autopilot",ar:"انقر على أي حي أو معلم لتفعيل القيادة الذاتية الفورية"},autopilotActive:{en:"Autopilot Active: Navigating to",ar:"الطيار الآلي مفعّل: التوجه إلى"},autopilotCancelHint:{en:"Press WASD or tap screen to cancel autopilot",ar:"اضغط أي مفتاح تحكم أو المس الشاشة لإلغاء الطيار الآلي"},autopilotDisengaged:{en:"Autopilot disengaged. Manual control resumed.",ar:"تم إلغاء الطيار الآلي. تم استئناف التحكم اليدوي."},autopilotArrived:{en:"Arrived at destination!",ar:"تم الوصول إلى الوجهة بنجاح!"},destCentral:{en:"Central Innovation Plaza & Monolith",ar:"ساحة الابتكار المركزية والمسلة التقنية"},destNorth:{en:"Financial District // QTicket Global HQ",ar:"المنطقة المالية // المقر الرئيسي لـ QTicket"},destEast:{en:"Logistics Hub // Laffeh Fulfillment Center",ar:"المركز اللوجستي // مركز توزيع لفة"},destSouth:{en:"Telecom Quarter // Call Center AI Spire",ar:"حي الاتصالات // برج الذكاء الاصطناعي"},destWest:{en:"Silicon Park // Snapdragon & SedOS Foundry",ar:"واحة السيليكون // مسبك سنابدراجون و SedOS"},destRaceTrack:{en:"City Street Circuit // Grand Prix",ar:"حلبة شوارع المدينة // الجائزة الكبرى"},raceTrackSubtitle:{en:"High-speed banked downtown circuit & checkpoint time-trial",ar:"مضمار شوارع المدينة عالي السرعة وتحدي النقاط الزمنية"},lapTimerLap:{en:"LAP",ar:"دورة"},lapTimerBest:{en:"BEST",ar:"الأفضل"},lapTimerCurrent:{en:"TIME",ar:"الوقت"},lapTimerSector:{en:"SECTOR",ar:"قطاع"},newLapRecord:{en:"🏁 NEW LAP RECORD!",ar:"🏁 رقم قياسي جديد للحلبة!"},lapCompleted:{en:"Lap Completed",ar:"اكتملت الدورة بنجاح"},driftScore:{en:"DRIFT",ar:"تفحيط"},driftPts:{en:"PTS",ar:"نقطة"},paceCarActive:{en:"Autopilot Pace-Car: Lapping Circuit",ar:"الطيار الآلي (سيارة الأمان): قيادة ذاتية حول الحلبة"},modalRole:{en:"Role & Scope",ar:"الدور والمسؤولية"},modalHighlights:{en:"Architecture Highlights",ar:"أبرز معالم المعمارية التقنية"},modalMetrics:{en:"Scale & Performance Metrics",ar:"مؤشرات الأداء والمقاييس"},modalTechStack:{en:"Technologies & Frameworks",ar:"التقنيات وأطر العمل"},liveDemo:{en:"Live Platform",ar:"زيارة المنصة"},sourceCode:{en:"GitHub Repository",ar:"المستودع البرمجي"},caseStudy:{en:"Case Study",ar:"تفاصيل المشروع"},skillsMatrixTitle:{en:"Central Tech Monolith",ar:"مسلة المهارات والتقنيات"},waypointTitle:{en:"Career Milestone Checkpoint",ar:"محطة مسار مهني وأكاديمي"},ballHint:{en:"Cyber Soccer Playground: Ram the ball to play!",ar:"ملعب الكرة الإلكتروني: اصدم الكرة بسيارتك لتلعب!"},speedUnit:{en:"KM/H",ar:"كم/س"}}};class Ug{constructor(t){this.scene=t,this.pavilions=[],this.group=new ge,this.currentLanguage="en",this.activePavilion=null,this.activationRadius=6.8,this.droneRotors=[],this.soundwaveBars=[],this.tickerMesh=null,this.coolingPipes=[],this.buildCorporateLandmarks(),this.scene.add(this.group)}buildCorporateLandmarks(){ve.projects.forEach((t,e)=>{const n=new ge;n.position.set(t.position.x,0,t.position.z);const s=new vt(t.color),r=new Ee(8.5,9,.25,16),o=new It({color:1251622,metalness:.8,roughness:.2}),a=new Z(r,o);a.position.y=.12,a.receiveShadow=!0,n.add(a);const c=new ni(6.5,7.2,32);c.rotateX(-Math.PI/2);const l=new $t({color:s,side:Ne,transparent:!0,opacity:.85}),h=new Z(c,l);h.position.y=.26,n.add(h),t.id==="qticket"?this.buildQTicketHQ(n,s):t.id==="laffeh"?this.buildLaffehDepot(n,s):t.id==="callcenter"?this.buildCallCenterSpire(n,s):t.id==="kernel"&&this.buildTechFoundry(n,s);const u=this.createSignSprite(t.title[this.currentLanguage],t.color);u.position.set(0,7.5,0),n.add(u);const f=new ul(s,2.5,18,1.8);f.position.set(0,4,0),n.add(f);const p={index:e,project:t,position:new T(t.position.x,0,t.position.z),signSprite:u,ringMat:l,light:f,isPlayerInside:!1};this.pavilions.push(p),this.group.add(n)})}buildQTicketHQ(t,e){const n=new Mt(16,54,16),s=new It({color:662574,metalness:.9,roughness:.1,emissive:8762,emissiveIntensity:.5}),r=new Z(n,s);r.position.set(0,27,-8),r.receiveShadow=!0,t.add(r);const o=new Ee(6.5,6.5,.4,24),a=new It({color:1976635,roughness:.7}),c=new Z(o,a);c.position.set(0,54.2,-8),t.add(c);const l=new ni(5.4,5.8,32);l.rotateX(-Math.PI/2);const h=new $t({color:16763904}),u=new Z(l,h);u.position.set(0,54.42,-8),t.add(u);const f=new Mt(.5,.04,3.2),p=new $t({color:16763904}),g=new Z(f,p);g.position.set(-1.2,54.43,-8);const x=new Z(f,p);x.position.set(1.2,54.43,-8);const m=new Mt(2.4,.04,.5),d=new Z(m,p);d.position.set(0,54.43,-8),t.add(g),t.add(x),t.add(d);const b=new Mt(14,.25,8),_=new It({color:61695,metalness:.8,roughness:.2,transparent:!0,opacity:.8}),v=new Z(b,_);v.position.set(0,4.5,1.5),t.add(v);const C=new Mt(14.2,1.2,.1),R=new $t({color:61695});this.tickerMesh=new Z(C,R),this.tickerMesh.position.set(0,4.8,5.55),t.add(this.tickerMesh)}buildLaffehDepot(t,e){const n=new Mt(24,14,18),s=new It({color:1385006,roughness:.5,metalness:.6}),r=new Z(n,s);r.position.set(6,7,0),r.receiveShadow=!0,t.add(r);const o=new Mt(.2,4.2,3.4),a=new It({color:3359061,metalness:.8}),c=new $t({color:65416});[-5,0,5].forEach(_=>{const v=new Z(o,a);v.position.set(-6.1,2.1,_),t.add(v);const C=new Mt(.25,4.4,3.6),R=new Z(C,c);R.position.set(-6.05,2.2,_),t.add(R)});const l=new Mt(4.2,2.2,2),h=new It({color:65416,roughness:.4}),u=new Z(l,h);u.position.set(-9.5,1.2,0),t.add(u);const f=new ge;f.position.set(4,15.5,0);const p=new Mt(1.6,.35,1.6),g=new It({color:988970,metalness:.8}),x=new Z(p,g);f.add(x);const m=new Mt(1.4,.04,.16),d=new $t({color:65416});[{x:-.9,z:-.9},{x:.9,z:-.9},{x:-.9,z:.9},{x:.9,z:.9}].forEach(_=>{const v=new Z(m,d);v.position.set(_.x,.3,_.z),f.add(v),this.droneRotors.push(v)}),t.add(f)}buildCallCenterSpire(t,e){const n=new Ee(1.2,6.5,52,12),s=new It({color:2036779,metalness:.9,roughness:.2,emissive:2821414,emissiveIntensity:.4}),r=new Z(n,s);r.position.set(0,26,-6),r.receiveShadow=!0,t.add(r);const o=[8.5,6.8,5],a=[22,34,46];o.forEach((m,d)=>{const b=new la(m,.18,8,32);b.rotateX(Math.PI/2);const _=new $t({color:16724838}),v=new Z(b,_);v.position.set(0,a[d],-6),t.add(v)});const c=new Mt(.35,1,.35),l=new $t({color:16724838});for(let m=0;m<12;m++){const d=new Z(c,l);d.position.set(-3.3+m*.6,2.5,1.2),t.add(d),this.soundwaveBars.push(d)}const h=new Mt(1.6,1.2,1.2),u=new It({color:988970,metalness:.8}),f=new Z(h,u);f.position.set(0,.6,2.4),t.add(f);const p=new Bn(1.2,.8),g=new $t({color:65416}),x=new Z(p,g);x.position.set(0,.8,3.01),t.add(x)}buildTechFoundry(t,e){const n=new Mt(22,16,20),s=new It({color:1449e3,metalness:.85,roughness:.25}),r=new Z(n,s);r.position.set(-6,8,0),r.receiveShadow=!0,t.add(r);const o=new Mt(22.2,.6,20.2),a=new $t({color:16755200}),c=new Z(o,a);c.position.set(-6,6,0),t.add(c);const l=new Ee(.3,.3,15,12),h=new It({color:16755200,emissive:16742144,emissiveIntensity:.7,metalness:.9,roughness:.1});[-4,-1,2,5].forEach(g=>{const x=new Z(l,h);x.position.set(5.3,7.5,g),t.add(x),this.coolingPipes.push(x)});const u=new Mt(2.4,2.4,.3),f=new It({color:16755200,metalness:.95,roughness:.1}),p=new Z(u,f);p.position.set(2.5,2.2,0),p.rotation.y=Math.PI/4,p.rotation.x=Math.PI/6,t.add(p)}createSignSprite(t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");this.drawSignCanvas(s,n.width,n.height,t,e);const r=new Fi(n),o=new hs({map:r,transparent:!0,depthTest:!1}),a=new lr(o);return a.scale.set(5.6,1.4,1),a.userData={canvas:n,ctx:s,texture:r,colorHex:e},a}drawSignCanvas(t,e,n,s,r){t.clearRect(0,0,e,n),t.fillStyle="rgba(10, 15, 29, 0.92)",t.strokeStyle=r,t.lineWidth=4,t.beginPath(),t.roundRect(16,16,e-32,n-32,28),t.fill(),t.stroke(),t.shadowColor=r,t.shadowBlur=10,t.fillStyle="#ffffff",t.font='bold 34px "Segoe UI", "Cairo", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(s,e/2,n/2)}setLanguage(t){this.currentLanguage=t,this.pavilions.forEach(e=>{const n=e.project.title[t]||e.project.title.en,{ctx:s,canvas:r,texture:o,colorHex:a}=e.signSprite.userData;this.drawSignCanvas(s,r.width,r.height,n,a),o.needsUpdate=!0})}checkProximity(t){let e=null;const n=t.x,s=t.z;for(let o=0;o<this.pavilions.length;o++){const a=this.pavilions[o],c=a.position.x-n,l=a.position.z-s;if(Math.hypot(c,l)<this.activationRadius){e=a;break}}const r=this.activePavilion;return e!==r?(r&&(r.isPlayerInside=!1),e&&(e.isPlayerInside=!0),this.activePavilion=e,{hasChanged:!0,activePavilion:e,previousPavilion:r}):{hasChanged:!1,activePavilion:e,previousPavilion:r}}update(t){for(let n=0;n<this.droneRotors.length;n++)this.droneRotors[n].rotation.y=t*24;for(let n=0;n<this.soundwaveBars.length;n++){const s=.5+Math.abs(Math.sin(t*6+n*.75))*3.5;this.soundwaveBars[n].scale.y=s,this.soundwaveBars[n].position.y=2+s*.5}const e=.5+Math.sin(t*3.5)*.4;for(let n=0;n<this.coolingPipes.length;n++)this.coolingPipes[n].material.emissiveIntensity=e;this.pavilions.forEach(n=>{if(n.isPlayerInside){const s=.85+Math.sin(t*7)*.15;n.ringMat.opacity=s,n.light.intensity=4.2}else n.ringMat.opacity=.6,n.light.intensity=2.2})}}class Ng{constructor(t){this.scene=t,this.group=new ge,this.position=new T(0,.2,0),this.group.position.copy(this.position),this.currentLanguage="en",this.activationRadius=4.8,this.isPlayerNear=!1,this.orbitRunes=[],this.buildMonolith(),this.scene.add(this.group)}buildMonolith(){const t=new Ee(2.4,2.8,.4,8),e=new It({color:988970,metalness:.8,roughness:.2,flatShading:!0}),n=new Z(t,e);n.position.y=.2,n.receiveShadow=!0,this.group.add(n);const s=new ni(2,2.3,32);this.ringMat=new $t({color:61695,side:Ne,transparent:!0,opacity:.85});const r=new Z(s,this.ringMat);r.rotation.x=-Math.PI/2,r.position.y=.41,this.group.add(r);const o=new oa(1.2,7.5,4),a=new It({color:1976635,emissive:11069,emissiveIntensity:.5,roughness:.15,metalness:.85,flatShading:!0});this.obelisk=new Z(o,a),this.obelisk.position.y=4.5,this.obelisk.castShadow=!1,this.obelisk.receiveShadow=!0,this.group.add(this.obelisk);const c=new hr(.55,0),l=new $t({color:61695});this.apex=new Z(c,l),this.apex.position.y=8.4,this.group.add(this.apex),this.light=new ul(61695,3,16,1.8),this.light.position.y=8.5,this.group.add(this.light),ve.skillsMatrix.categories.forEach((h,u)=>{const f=this.createRuneSprite(h.name[this.currentLanguage],h.color);f.userData={category:h,initialAngle:u/4*Math.PI*2,dist:3.5,height:3.2+u%2*1},this.orbitRunes.push(f),this.group.add(f)})}createRuneSprite(t,e){const n=document.createElement("canvas");n.width=256,n.height=80;const s=n.getContext("2d");this.drawRuneCanvas(s,n.width,n.height,t,e);const r=new Fi(n),o=new hs({map:r,transparent:!0,depthTest:!1}),a=new lr(o);return a.scale.set(2.8,.88,1),a.userData={...a.userData,canvas:n,ctx:s,texture:r,colorHex:e},a}drawRuneCanvas(t,e,n,s,r){t.clearRect(0,0,e,n),t.fillStyle="rgba(15, 23, 42, 0.88)",t.strokeStyle=r,t.lineWidth=3,t.beginPath(),t.roundRect(10,10,e-20,n-20,20),t.fill(),t.stroke(),t.fillStyle="#ffffff",t.font='bold 22px "Segoe UI", "Cairo", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(s,e/2,n/2)}setLanguage(t){this.currentLanguage=t,this.orbitRunes.forEach(e=>{const{ctx:n,canvas:s,texture:r,colorHex:o,category:a}=e.userData,c=a.name[t]||a.name.en;this.drawRuneCanvas(n,s.width,s.height,c,o),r.needsUpdate=!0})}checkProximity(t){const n=Math.hypot(this.position.x-t.x,this.position.z-t.z)<this.activationRadius,s=n!==this.isPlayerNear;return this.isPlayerNear=n,{isNear:n,hasChanged:s,data:ve.skillsMatrix}}update(t){if(this.obelisk.rotation.y=t*.4,this.obelisk.position.y=4.5+Math.sin(t*1.5)*.2,this.apex.rotation.y=-t*.8,this.apex.position.y=8.4+Math.sin(t*1.5)*.2,this.orbitRunes.forEach(e=>{const n=e.userData.initialAngle+t*.35;e.position.x=Math.cos(n)*e.userData.dist,e.position.z=Math.sin(n)*e.userData.dist,e.position.y=e.userData.height+Math.sin(t*2+e.userData.initialAngle)*.25}),this.isPlayerNear){const e=.8+Math.sin(t*8)*.2;this.ringMat.opacity=e,this.light.intensity=4.5+e*2}else this.ringMat.opacity=.6,this.light.intensity=3}}class Og{constructor(t){this.scene=t,this.waypoints=[],this.group=new ge,this.currentLanguage="en",this.activeWaypoint=null,this.activationRadius=3.6,this.buildWaypoints(),this.scene.add(this.group)}buildWaypoints(){ve.waypoints.forEach((t,e)=>{const n=new ge;n.position.set(t.position.x,t.position.y,t.position.z);const s=t.type==="experience"?61695:16755200,r=new Ee(.18,.22,3.2,8),o=new It({color:1976635,metalness:.8,roughness:.3});let a=0,c=0;Math.abs(t.position.x)>1?c=2.4:a=2.4;const l=new Z(r,o);l.position.set(-a,1.6,-c),n.add(l);const h=new Z(r,o);h.position.set(a,1.6,c),n.add(h);const u=new Mt(a?a*2+.4:.4,.2,c?c*2+.4:.4),f=new It({color:988970,metalness:.9,roughness:.2}),p=new Z(u,f);p.position.y=3.2,n.add(p);const g=new Mt(a?a*2:.25,.08,c?c*2:.25),x=new $t({color:s}),m=new Z(g,x);m.position.y=3.32,n.add(m);const d=new hr(.4,0),b=new It({color:s,emissive:s,emissiveIntensity:.8}),_=new Z(d,b);_.position.y=3.8,n.add(_);const v=this.createSignSprite(t.title[this.currentLanguage],s);v.position.y=4.6,n.add(v);const C={index:e,data:t,position:new T(t.position.x,0,t.position.z),gem:_,sprite:v,isPlayerInside:!1};this.waypoints.push(C),this.group.add(n)})}createSignSprite(t,e){const n=document.createElement("canvas");n.width=384,n.height=96;const s=n.getContext("2d");this.drawCanvas(s,n.width,n.height,t,e);const r=new Fi(n),o=new hs({map:r,transparent:!0,depthTest:!1}),a=new lr(o);return a.scale.set(3.4,.85,1),a.userData={canvas:n,ctx:s,texture:r,colorHex:e},a}drawCanvas(t,e,n,s,r){t.clearRect(0,0,e,n),t.fillStyle="rgba(15, 23, 42, 0.88)",t.strokeStyle=typeof r=="number"?`#${r.toString(16).padStart(6,"0")}`:r,t.lineWidth=3,t.beginPath(),t.roundRect(10,10,e-20,n-20,20),t.fill(),t.stroke(),t.fillStyle="#ffffff",t.font='bold 20px "Segoe UI", "Cairo", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(s,e/2,n/2)}setLanguage(t){this.currentLanguage=t,this.waypoints.forEach(e=>{const n=e.data.title[t]||e.data.title.en,{ctx:s,canvas:r,texture:o,colorHex:a}=e.sprite.userData;this.drawCanvas(s,r.width,r.height,n,a),o.needsUpdate=!0})}checkProximity(t){let e=null;for(let s=0;s<this.waypoints.length;s++){const r=this.waypoints[s];if(Math.hypot(r.position.x-t.x,r.position.z-t.z)<this.activationRadius){e=r;break}}const n=this.activeWaypoint;return e!==n?(n&&(n.isPlayerInside=!1),e&&(e.isPlayerInside=!0),this.activeWaypoint=e,{hasChanged:!0,activeWaypoint:e,previousWaypoint:n}):{hasChanged:!1,activeWaypoint:e,previousWaypoint:n}}update(t){this.waypoints.forEach(e=>{e.gem.rotation.y=t*1.5,e.gem.rotation.x=Math.sin(t*2)*.3})}}class Fg{constructor(t){this.scene=t,this.radius=.95,this.position=new T(4,this.radius,4),this.velocity=new T(0,0,0),this.friction=.982,this.islandRadiusLimit=21,this.monolithPedestalRadius=2.8,this.createBallModel(),this.scene.add(this.mesh)}createBallModel(){const t=new or(this.radius,1),e=new It({color:15857145,roughness:.3,metalness:.7,flatShading:!0});this.mesh=new Z(t,e),this.mesh.position.copy(this.position),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;const n=new or(this.radius*1.01,1),s=new $t({color:61695,wireframe:!0,transparent:!0,opacity:.6}),r=new Z(n,s);this.mesh.add(r)}checkVehicleCollision(t,e){const n=t.position,s=this.position.x-n.x,r=this.position.z-n.z,o=Math.sqrt(s*s+r*r),c=this.radius+1.35;if(o<c&&o>.001){const l=s/o,h=r/o,u=c-o;this.position.x+=l*u,this.position.z+=h*u;const f=Math.abs(t.speed),p=Math.max(f*1.4,4);this.velocity.x=l*p,this.velocity.z=h*p,e&&e(p)}}update(t){t>.1&&(t=.1),this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.velocity.x*=this.friction,this.velocity.z*=this.friction,this.velocity.lengthSq()<.001&&this.velocity.set(0,0,0);const e=Math.sqrt(this.position.x*this.position.x+this.position.z*this.position.z);if(e>this.islandRadiusLimit){const s=Math.atan2(this.position.z,this.position.x);this.position.x=Math.cos(s)*this.islandRadiusLimit,this.position.z=Math.sin(s)*this.islandRadiusLimit,this.velocity.x*=-.7,this.velocity.z*=-.7}if(e<this.monolithPedestalRadius){const s=Math.atan2(this.position.z,this.position.x);this.position.x=Math.cos(s)*this.monolithPedestalRadius,this.position.z=Math.sin(s)*this.monolithPedestalRadius,this.velocity.x*=-.7,this.velocity.z*=-.7}this.mesh.position.copy(this.position),this.velocity.length()>.01&&(this.mesh.rotation.x+=this.velocity.z*t/this.radius,this.mesh.rotation.z-=this.velocity.x*t/this.radius)}}class Bg{constructor(t,e){this.sceneManager=t,this.vehicle=e,this.currentMode="day",this.currentLanguage="en",this.presets={day:{id:"day",icon:"☀️",bgColor:new vt(14083826),fogColor:new vt(14083826),fogDensity:.0055,ambientColor:new vt(9349315),ambientIntensity:.85,hemiSkyColor:new vt(14544639),hemiGroundColor:new vt(7048258),hemiIntensity:1.15,dirColor:new vt(16775917),dirIntensity:2.3,dirPosition:new T(45,55,35),headlightIntensity:0,headlightColor:16777215},sunset:{id:"sunset",icon:"🌅",bgColor:new vt(1837860),fogColor:new vt(2362923),fogDensity:.009,ambientColor:new vt(8138002),ambientIntensity:.85,hemiSkyColor:new vt(16347926),hemiGroundColor:new vt(3215366),hemiIntensity:.95,dirColor:new vt(16486972),dirIntensity:2.4,dirPosition:new T(55,18,-35),headlightIntensity:1.4,headlightColor:16772565},night:{id:"night",icon:"🌙",bgColor:new vt(264212),fogColor:new vt(330264),fogDensity:.013,ambientColor:new vt(528418),ambientIntensity:.45,hemiSkyColor:new vt(1973067),hemiGroundColor:new vt(132631),hemiIntensity:.5,dirColor:new vt(6333946),dirIntensity:.9,dirPosition:new T(-30,48,-25),headlightIntensity:3.4,headlightColor:16777215}},this.target=this.presets[this.currentMode],this.currentHeadlightIntensity=this.target.headlightIntensity,this.scene=t.scene,this.ambientLight=t.ambientLight,this.hemiLight=t.hemiLight,this.dirLight=t.dirLight,this.applyTargetImmediate()}applyTargetImmediate(){const t=this.target;this.scene.background.copy(t.bgColor),this.scene.fog&&(this.scene.fog.color.copy(t.fogColor),this.scene.fog.density=t.fogDensity),this.ambientLight&&(this.ambientLight.color.copy(t.ambientColor),this.ambientLight.intensity=t.ambientIntensity),this.hemiLight&&(this.hemiLight.color.copy(t.hemiSkyColor),this.hemiLight.groundColor.copy(t.hemiGroundColor),this.hemiLight.intensity=t.hemiIntensity),this.dirLight&&(this.dirLight.color.copy(t.dirColor),this.dirLight.intensity=t.dirIntensity,this.dirLight.position.copy(t.dirPosition)),this.vehicle&&this.vehicle.setHeadlights(t.headlightIntensity,t.headlightColor)}setMode(t){this.presets[t]&&(this.currentMode=t,this.target=this.presets[t])}cycleMode(){const t=["day","sunset","night"],e=(t.indexOf(this.currentMode)+1)%t.length;return this.setMode(t[e]),this.currentMode}getModeLabel(){const t=ve.ui,e=this.currentLanguage;return this.currentMode==="day"?t.envDay[e]:this.currentMode==="sunset"?t.envSunset[e]:t.envNight[e]}setLanguage(t){this.currentLanguage=t}update(t){t>.1&&(t=.1);const e=Math.min(3.5*t,1),n=this.target;if(this.scene.background.lerp(n.bgColor,e),this.scene.fog&&(this.scene.fog.color.lerp(n.fogColor,e),this.scene.fog.density+=(n.fogDensity-this.scene.fog.density)*e),this.ambientLight&&(this.ambientLight.color.lerp(n.ambientColor,e),this.ambientLight.intensity+=(n.ambientIntensity-this.ambientLight.intensity)*e),this.hemiLight&&(this.hemiLight.color.lerp(n.hemiSkyColor,e),this.hemiLight.groundColor.lerp(n.hemiGroundColor,e),this.hemiLight.intensity+=(n.hemiIntensity-this.hemiLight.intensity)*e),this.dirLight){this.dirLight.color.lerp(n.dirColor,e),this.dirLight.intensity+=(n.dirIntensity-this.dirLight.intensity)*e;const s=this.vehicle?this.vehicle.position.x:0,r=this.vehicle?this.vehicle.position.z:0;this.dirLight.position.set(s+n.dirPosition.x,n.dirPosition.y,r+n.dirPosition.z),this.dirLight.target.position.set(s,0,r),this.dirLight.target.updateMatrixWorld()}this.vehicle&&(this.currentHeadlightIntensity+=(n.headlightIntensity-this.currentHeadlightIntensity)*e,this.vehicle.setHeadlights(this.currentHeadlightIntensity,n.headlightColor))}}const Zr=new T,Jr=new T,Rc=new T,Gs={isDrifting:!1,score:0,multiplier:1};class kg{constructor(t){this.scene=t,this.maxSegments=160,this.segmentIndex=0,this.activeSegmentsCount=0;const e=this.maxSegments*6;this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*4),this.geometry=new Re,this.geometry.setAttribute("position",new be(this.positions,3)),this.geometry.setAttribute("color",new be(this.colors,4)),this.material=new $t({vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4,side:Ne}),this.mesh=new Z(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.lastLeft=new T,this.lastRight=new T,this.hasLast=!1}addSkid(t,e,n=.65){if(this.hasLast){const s=t.distanceTo(this.lastLeft);s>.35&&s<4&&(this.writeQuad(this.lastLeft,t,.22,n),this.writeQuad(this.lastRight,e,.22,n),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.activeSegmentsCount=Math.min(this.maxSegments,this.activeSegmentsCount+2))}this.lastLeft.copy(t),this.lastRight.copy(e),this.hasLast=!0}resetLastPoints(){this.hasLast=!1}writeQuad(t,e,n,s){let r=e.x-t.x,o=e.z-t.z;const a=Math.hypot(r,o);if(a<1e-4)return;r/=a,o/=a;const c=n*.5,l=-o*c,h=r*c,u=t.x-l,f=t.z-h,p=t.x+l,g=t.z+h,x=e.x-l,m=e.z-h,d=e.x+l,b=e.z+h,_=this.segmentIndex*18,v=this.segmentIndex*24,C=this.positions;C[_]=u,C[_+1]=.035,C[_+2]=f,C[_+3]=p,C[_+4]=.035,C[_+5]=g,C[_+6]=x,C[_+7]=.035,C[_+8]=m,C[_+9]=x,C[_+10]=.035,C[_+11]=m,C[_+12]=p,C[_+13]=.035,C[_+14]=g,C[_+15]=d,C[_+16]=.035,C[_+17]=b;const R=this.colors;for(let L=0;L<6;L++){const w=v+L*4;R[w]=.08,R[w+1]=.09,R[w+2]=.12,R[w+3]=s}this.segmentIndex=(this.segmentIndex+1)%this.maxSegments}update(t){if(this.activeSegmentsCount<=0)return;const e=this.maxSegments*6;let n=!1,s=0;for(let r=0;r<e;r++){const o=r*4+3;this.colors[o]>.005&&(this.colors[o]=Math.max(0,this.colors[o]-.14*t),n=!0,s++)}s===0&&(this.activeSegmentsCount=0),n&&(this.geometry.attributes.color.needsUpdate=!0)}}class zg{constructor(t){this.scene=t,this.maxParticles=30,this.particles=[],this.activeCount=0;const e=new aa(.24,0),n=new $t({color:14870768,transparent:!0,opacity:.32,depthWrite:!1});this.instancedMesh=new In(e,n,this.maxParticles),this.instancedMesh.frustumCulled=!1,this.dummy=new oe,this.scene.add(this.instancedMesh);for(let s=0;s<this.maxParticles;s++)this.particles.push({x:0,y:-50,z:0,vx:0,vy:0,vz:0,scale:.1,life:0,maxLife:1,active:!1}),this.dummy.position.set(0,-50,0),this.dummy.scale.set(.001,.001,.001),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(s,this.dummy.matrix);this.instancedMesh.instanceMatrix.needsUpdate=!0,this.poolIndex=0}emit(t,e){const n=this.particles[this.poolIndex];n.active||this.activeCount++,n.active=!0,n.x=t.x+(Math.random()-.5)*.25,n.y=Math.max(t.y,.18),n.z=t.z+(Math.random()-.5)*.25,n.vx=e.x*.2+(Math.random()-.5)*.9,n.vy=.8+Math.random()*.9,n.vz=e.z*.2+(Math.random()-.5)*.9,n.scale=.28+Math.random()*.2,n.life=.6+Math.random()*.4,n.maxLife=n.life,this.poolIndex=(this.poolIndex+1)%this.maxParticles}update(t){if(this.activeCount<=0)return;let e=!1,n=0;for(let s=0;s<this.maxParticles;s++){const r=this.particles[s];if(!r.active)continue;if(r.life-=t,r.life<=0){r.active=!1,this.dummy.position.set(0,-50,0),this.dummy.scale.set(.001,.001,.001),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(s,this.dummy.matrix),e=!0;continue}n++,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.scale+=2.2*t;const o=1-r.life/r.maxLife,a=r.scale*(1-o*.25);this.dummy.position.set(r.x,r.y,r.z),this.dummy.scale.set(a,a,a),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(s,this.dummy.matrix),e=!0}this.activeCount=n,e&&(this.instancedMesh.instanceMatrix.needsUpdate=!0)}}class Gg{constructor(t,e={}){this.scene=t,this.color=e.color||61695,this.emissive=e.emissive||13124,this.name=e.name||"Pilot-1",this.position=new T(e.x||0,e.y||.35,e.z||-3.5),this.prevPosition=this.position.clone(),this.velocity=new T(0,0,0),this.rotationY=e.rotY||0,this.speed=0,this.lateralSpeed=0,this.maxSpeed=22,this.maxReverseSpeed=-8.5,this.acceleration=24,this.reverseAccel=14,this.brakeDecel=34,this.friction=5.2,this.steerAngle=0,this.targetSteerAngle=0,this.baseMaxSteerAngle=.58,this.turnSpeedFactor=2.1,this.isDrifting=!1,this.driftScore=0,this.driftMultiplier=1,this.bodyRoll=0,this.bodyPitch=0,this.inputs={forward:!1,backward:!1,left:!1,right:!1,brake:!1,touchSteer:0,touchThrottle:0},this.autopilotInput=null,this.onManualInput=null,this.raceTrack=null,this.createCarModel(),this.scene.add(this.meshGroup),this.skidSystem=new kg(this.scene),this.smokeSystem=new zg(this.scene),this.setupKeyboard()}setRaceTrack(t){this.raceTrack=t}createCarModel(){this.meshGroup=new ge,this.meshGroup.position.copy(this.position),this.meshGroup.rotation.y=this.rotationY,this.bodyContainer=new ge,this.meshGroup.add(this.bodyContainer),this.bodyMat=new It({color:this.color,roughness:.25,metalness:.85,emissive:this.emissive,emissiveIntensity:.25});const t=new It({color:988970,roughness:.4,metalness:.6}),e=new It({color:330516,roughness:.1,metalness:.95,transparent:!0,opacity:.92});this.rimMat=new It({color:3718648,metalness:.9,roughness:.2});const n=new It({color:1120295,roughness:.8,metalness:.1}),s=new Mt(1.4,.4,2.8),r=new Z(s,this.bodyMat);r.position.y=.35,r.castShadow=!0,r.receiveShadow=!0,this.bodyContainer.add(r);const o=new Mt(1.36,.18,1),a=new Z(o,t);a.position.set(0,.38,.9),a.castShadow=!0,this.bodyContainer.add(a);const c=new Mt(1.1,.45,1.3),l=new Z(c,e);l.position.set(0,.68,-.1),l.castShadow=!0,this.bodyContainer.add(l);const h=new Mt(1.5,.08,.35),u=new Z(h,t);u.position.set(0,.85,-1.25),u.castShadow=!0,this.bodyContainer.add(u);const f=new Mt(.06,.35,.08),p=new Z(f,t);p.position.set(-.5,.68,-1.25);const g=new Z(f,t);g.position.set(.5,.68,-1.25),this.bodyContainer.add(p),this.bodyContainer.add(g);const x=new Mt(.3,.12,.08);this.headlightMat=new $t({color:16777215});const m=new Z(x,this.headlightMat);m.position.set(-.52,.38,1.4);const d=new Z(x,this.headlightMat);d.position.set(.52,.38,1.4),this.bodyContainer.add(m),this.bodyContainer.add(d),this.headlightSpot=new ku(16777215,0,24,Math.PI/5,.4),this.headlightSpot.position.set(0,.45,1.4),this.headlightTarget=new oe,this.headlightTarget.position.set(0,0,16),this.meshGroup.add(this.headlightSpot),this.meshGroup.add(this.headlightTarget),this.headlightSpot.target=this.headlightTarget,this.taillightMat=new $t({color:10027008});const b=new Mt(1.2,.1,.08);this.taillight=new Z(b,this.taillightMat),this.taillight.position.set(0,.42,-1.41),this.bodyContainer.add(this.taillight),this.wheels=[],this.frontWheelGroups=[],this.rearWheelGroups=[];const _=new Ee(.32,.32,.24,12);_.rotateZ(Math.PI/2);const v=new Ee(.2,.2,.25,12);v.rotateZ(Math.PI/2),[{x:-.75,y:.26,z:.85,isFront:!0},{x:.75,y:.26,z:.85,isFront:!0},{x:-.75,y:.26,z:-.9,isFront:!1},{x:.75,y:.26,z:-.9,isFront:!1}].forEach(R=>{const L=new ge;L.position.set(R.x,R.y,R.z);const w=new Z(_,n);w.castShadow=!0;const E=new Z(v,this.rimMat);w.add(E),L.add(w),this.meshGroup.add(L),this.wheels.push(w),R.isFront?this.frontWheelGroups.push(L):this.rearWheelGroups.push(L)})}setColor(t){this.color=t,this.bodyMat&&this.bodyMat.color.setHex(t)}setHeadlights(t,e=2.4,n=16777215){this.headlightSpot&&(this.headlightSpot.intensity=e,this.headlightSpot.color.set(n)),this.headlightMat&&this.headlightMat.color.set(e>.5?16777215:8947848)}setupKeyboard(){window.addEventListener("keydown",t=>{["ArrowUp","KeyW","ArrowDown","KeyS","ArrowLeft","KeyA","ArrowRight","KeyD","Space"].includes(t.code)&&this.onManualInput&&this.onManualInput(),["ArrowUp","KeyW"].includes(t.code)&&(this.inputs.forward=!0),["ArrowDown","KeyS"].includes(t.code)&&(this.inputs.backward=!0),["ArrowLeft","KeyA"].includes(t.code)&&(this.inputs.left=!0),["ArrowRight","KeyD"].includes(t.code)&&(this.inputs.right=!0),["Space"].includes(t.code)&&(this.inputs.brake=!0)}),window.addEventListener("keyup",t=>{["ArrowUp","KeyW"].includes(t.code)&&(this.inputs.forward=!1),["ArrowDown","KeyS"].includes(t.code)&&(this.inputs.backward=!1),["ArrowLeft","KeyA"].includes(t.code)&&(this.inputs.left=!1),["ArrowRight","KeyD"].includes(t.code)&&(this.inputs.right=!1),["Space"].includes(t.code)&&(this.inputs.brake=!1)})}setTouchInput(t){(Math.abs(t.steer||0)>.05||Math.abs(t.throttle||0)>.05||t.brake)&&this.onManualInput&&this.onManualInput(),this.inputs.touchSteer=t.steer||0,this.inputs.touchThrottle=t.throttle||0,this.inputs.brake=t.brake||!1}setAutopilotInput(t){this.autopilotInput=t}update(t){t>.1&&(t=.1);let e=0;this.inputs.left&&(e-=1),this.inputs.right&&(e+=1),Math.abs(this.inputs.touchSteer)>.05&&(e=this.inputs.touchSteer);let n=0;this.inputs.forward&&(n+=1),this.inputs.backward&&(n-=1),Math.abs(this.inputs.touchThrottle)>.05&&(n=this.inputs.touchThrottle);let s=this.inputs.brake;this.autopilotInput&&this.autopilotInput.active&&(e=this.autopilotInput.steer,n=this.autopilotInput.throttle,s=this.autopilotInput.brake);const r=Math.abs(this.speed)/this.maxSpeed,o=this.baseMaxSteerAngle/(1+r*1.5);this.targetSteerAngle=e*o;const a=Bh.lerp(14,8.5,r);if(this.steerAngle+=(this.targetSteerAngle-this.steerAngle)*Math.min(a*t,1),s){const w=this.brakeDecel*t;this.speed>0?this.speed=Math.max(0,this.speed-w):this.speed<0&&(this.speed=Math.min(0,this.speed+w)),this.taillightMat.color.setHex(16716032)}else if(n>0)this.speed=Math.min(this.maxSpeed,this.speed+this.acceleration*n*t),this.taillightMat.color.setHex(6684672);else if(n<0)this.speed=Math.max(this.maxReverseSpeed,this.speed+this.reverseAccel*n*t),this.taillightMat.color.setHex(16777215);else{const w=this.friction*t;this.speed>0?this.speed=Math.max(0,this.speed-w):this.speed<0&&(this.speed=Math.min(0,this.speed+w)),this.taillightMat.color.setHex(6684672)}const c=s&&Math.abs(this.speed)>.05,h=Math.abs(this.speed*this.steerAngle*this.turnSpeedFactor)>8&&Math.abs(this.steerAngle)>.16;if(this.isDrifting=c||h&&Math.abs(this.speed)>6,Math.abs(this.speed)>.05){const w=this.speed/this.maxSpeed;let E=this.steerAngle*w*this.turnSpeedFactor*t;if(this.isDrifting){const y=this.steerAngle*(Math.abs(this.speed)/this.maxSpeed)*1.5*t;E+=y}this.rotationY-=E}const u=this.isDrifting?-this.steerAngle*Math.abs(this.speed)*.72:0,f=this.isDrifting?3.6:16;this.lateralSpeed+=(u-this.lateralSpeed)*Math.min(f*t,1),this.isDrifting&&Math.abs(this.lateralSpeed)>1.2&&Math.abs(this.speed)>5?(this.driftScore+=Math.round(Math.abs(this.lateralSpeed)*80*t*this.driftMultiplier),this.driftMultiplier=Math.min(4,this.driftMultiplier+t*.5)):this.driftMultiplier=Math.max(1,this.driftMultiplier-t*1.5),this.prevPosition.copy(this.position);const p=Math.sin(this.rotationY),g=Math.cos(this.rotationY),x=Math.cos(this.rotationY),m=-Math.sin(this.rotationY);this.velocity.x=p*this.speed+x*this.lateralSpeed,this.velocity.z=g*this.speed+m*this.lateralSpeed,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.checkCityBoundaries(),this.meshGroup.position.copy(this.position),this.meshGroup.rotation.y=this.rotationY;const b=-(this.speed*this.steerAngle*.16+this.lateralSpeed*.1),_=(n>0?-.07:s?.14:0)*(Math.abs(this.speed)/this.maxSpeed);this.bodyRoll+=(b-this.bodyRoll)*9*t,this.bodyPitch+=(_-this.bodyPitch)*9*t,this.bodyContainer.rotation.z=this.bodyRoll,this.bodyContainer.rotation.x=this.bodyPitch,this.frontWheelGroups.forEach(w=>{w.rotation.y=-this.steerAngle});const v=this.speed*t/.32;this.wheels.forEach(w=>{w.rotation.x+=v});const C=this.lateralSpeed,L=Math.abs(C)>3.2||c&&Math.abs(this.speed)>.05;this.updateFX(t,L)}updateFX(t,e){this.skidSystem&&this.skidSystem.update(t),this.smokeSystem&&this.smokeSystem.update(t),e&&this.rearWheelGroups.length>=2?(this.meshGroup.updateMatrixWorld(),Zr.set(-.75,.02,-.9).applyMatrix4(this.meshGroup.matrixWorld),Jr.set(.75,.02,-.9).applyMatrix4(this.meshGroup.matrixWorld),this.skidSystem&&this.skidSystem.addSkid(Zr,Jr,.65),this.smokeSystem&&(this.smokeSystem.emit(Zr,this.velocity),this.smokeSystem.emit(Jr,this.velocity))):this.skidSystem&&this.skidSystem.resetLastPoints()}checkCityBoundaries(){const t=this.position.x,e=this.position.z,n=146;let s=!1;t<-n?(this.position.x=-n,s=!0):t>n&&(this.position.x=n,s=!0),e<-n?(this.position.z=-n,s=!0):e>n&&(this.position.z=n,s=!0),s&&(this.speed*=-.3,this.velocity.set(0,0,0),this.lateralSpeed=0)}updateCamera(t,e){const n=this.position,s=this.rotationY,r=7.5+Math.abs(this.speed)/this.maxSpeed*1.5,o=3.8,a=n.x-Math.sin(s)*r,c=n.z-Math.cos(s)*r,l=n.y+o,h=1-Math.exp(-6*e);t.position.x+=(a-t.position.x)*h,t.position.y+=(l-t.position.y)*h,t.position.z+=(c-t.position.z)*h;const u=3.5;Rc.set(n.x+Math.sin(s)*u,n.y+.8,n.z+Math.cos(s)*u),t.lookAt(Rc);const f=55+Math.abs(this.speed)/this.maxSpeed*8;Math.abs(t.fov-f)>.15&&(t.fov+=(f-t.fov)*h,t.updateProjectionMatrix())}getSpeedKmH(){return Math.round(Math.abs(this.speed)*5.2)}getSpeedRatio(){return this.speed/this.maxSpeed}getDriftData(){return Gs.isDrifting=this.isDrifting,Gs.score=this.driftScore,Gs.multiplier=this.driftMultiplier,Gs}}const un=Object.create(null);un.open="0";un.close="1";un.ping="2";un.pong="3";un.message="4";un.upgrade="5";un.noop="6";const Js=Object.create(null);Object.keys(un).forEach(i=>{Js[un[i]]=i});const Vo={type:"error",data:"parser error"},vl=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",xl=typeof ArrayBuffer=="function",yl=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,da=({type:i,data:t},e,n)=>vl&&t instanceof Blob?e?n(t):Lc(t,n):xl&&(t instanceof ArrayBuffer||yl(t))?e?n(t):Lc(new Blob([t]),n):n(un[i]+(t||"")),Lc=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function Pc(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let jr;function Hg(i,t){if(vl&&i.data instanceof Blob)return i.data.arrayBuffer().then(Pc).then(t);if(xl&&(i.data instanceof ArrayBuffer||yl(i.data)))return t(Pc(i.data));da(i,!1,e=>{jr||(jr=new TextEncoder),t(jr.encode(e))})}const Ic="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",es=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Ic.length;i++)es[Ic.charCodeAt(i)]=i;const Vg=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,c;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(n=0;n<e;n+=4)r=es[i.charCodeAt(n)],o=es[i.charCodeAt(n+1)],a=es[i.charCodeAt(n+2)],c=es[i.charCodeAt(n+3)],h[s++]=r<<2|o>>4,h[s++]=(o&15)<<4|a>>2,h[s++]=(a&3)<<6|c&63;return l},Wg=typeof ArrayBuffer=="function",fa=(i,t)=>{if(typeof i!="string")return{type:"message",data:Ml(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:Xg(i.substring(1),t)}:Js[e]?i.length>1?{type:Js[e],data:i.substring(1)}:{type:Js[e]}:Vo},Xg=(i,t)=>{if(Wg){const e=Vg(i);return Ml(e,t)}else return{base64:!0,data:i}},Ml=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Sl="",qg=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{da(r,!1,a=>{n[o]=a,++s===e&&t(n.join(Sl))})})},Yg=(i,t)=>{const e=i.split(Sl),n=[];for(let s=0;s<e.length;s++){const r=fa(e[s],t);if(n.push(r),r.type==="error")break}return n};function Kg(){return new TransformStream({transform(i,t){Hg(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let Qr;function Hs(i){return i.reduce((t,e)=>t+e.length,0)}function Vs(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function $g(i,t){Qr||(Qr=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(Hs(e)<1)break;const c=Vs(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Hs(e)<2)break;const c=Vs(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(Hs(e)<8)break;const c=Vs(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Vo);break}s=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(Hs(e)<s)break;const c=Vs(e,s);a.enqueue(fa(r?c:Qr.decode(c),t)),n=0}if(s===0||s>i){a.enqueue(Vo);break}}}})}const El=4;function _e(i){if(i)return Zg(i)}function Zg(i){for(var t in _e.prototype)i[t]=_e.prototype[t];return i}_e.prototype.on=_e.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};_e.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};_e.prototype.off=_e.prototype.removeListener=_e.prototype.removeAllListeners=_e.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};_e.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};_e.prototype.emitReserved=_e.prototype.emit;_e.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};_e.prototype.hasListeners=function(i){return!!this.listeners(i).length};const dr=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),qe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Jg="arraybuffer";function bl(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const jg=qe.setTimeout,Qg=qe.clearTimeout;function fr(i,t){t.useNativeTimers?(i.setTimeoutFn=jg.bind(qe),i.clearTimeoutFn=Qg.bind(qe)):(i.setTimeoutFn=qe.setTimeout.bind(qe),i.clearTimeoutFn=qe.clearTimeout.bind(qe))}const t0=1.33;function e0(i){return typeof i=="string"?n0(i):Math.ceil((i.byteLength||i.size)*t0)}function n0(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function wl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function i0(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function s0(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class r0 extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class pa extends _e{constructor(t){super(),this.writable=!1,fr(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new r0(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=fa(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=i0(t);return e.length?"?"+e:""}}class o0 extends pa{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Yg(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,qg(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=wl()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let Tl=!1;try{Tl=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const a0=Tl;function c0(){}class l0 extends o0{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class ln extends _e{constructor(t,e,n){super(),this.createRequest=t,fr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=bl(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=ln.requestsCount++,ln.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=c0,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ln.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ln.requestsCount=0;ln.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Dc);else if(typeof addEventListener=="function"){const i="onpagehide"in qe?"pagehide":"unload";addEventListener(i,Dc,!1)}}function Dc(){for(let i in ln.requests)ln.requests.hasOwnProperty(i)&&ln.requests[i].abort()}const h0=(function(){const i=Al({xdomain:!1});return i&&i.responseType!==null})();class u0 extends l0{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=h0&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new ln(Al,this.uri(),t)}}function Al(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||a0))return new XMLHttpRequest}catch{}if(!t)try{return new qe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Cl=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class d0 extends pa{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Cl?{}:bl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;da(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&dr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=wl()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const to=qe.WebSocket||qe.MozWebSocket;class f0 extends d0{createSocket(t,e,n){return Cl?new to(t,e,n):e?new to(t,e):new to(t)}doWrite(t,e){this.ws.send(e)}}class p0 extends pa{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=$g(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=Kg();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&dr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const m0={websocket:f0,webtransport:p0,polling:u0},g0=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_0=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Wo(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=g0.exec(i||""),r={},o=14;for(;o--;)r[_0[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=v0(r,r.path),r.queryKey=x0(r,r.query),r}function v0(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function x0(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const Xo=typeof addEventListener=="function"&&typeof removeEventListener=="function",js=[];Xo&&addEventListener("offline",()=>{js.forEach(i=>i())},!1);class Nn extends _e{constructor(t,e){if(super(),this.binaryType=Jg,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=Wo(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=Wo(e.host).host);fr(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=s0(this.opts.query)),Xo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},js.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=El,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Nn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",Nn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=e0(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,dr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Nn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Xo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=js.indexOf(this._offlineEventListener);n!==-1&&js.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}Nn.protocol=El;class y0 extends Nn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;Nn.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",u=>{if(!n)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Nn.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){n||(n=!0,h(),e.close(),e=null)}const o=u=>{const f=new Error("probe error: "+u);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function c(){o("socket closed")}function l(u){e&&u.name!==e.name&&r()}const h=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let M0=class extends y0{constructor(t,e={}){const n=typeof t=="object",s=n?{...t}:{...e};(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(r=>m0[r]).filter(r=>!!r)),super(n?s:t,s)}};function S0(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=Wo(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const E0=typeof ArrayBuffer=="function",b0=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Rl=Object.prototype.toString,w0=typeof Blob=="function"||typeof Blob<"u"&&Rl.call(Blob)==="[object BlobConstructor]",T0=typeof File=="function"||typeof File<"u"&&Rl.call(File)==="[object FileConstructor]";function ma(i){return E0&&(i instanceof ArrayBuffer||b0(i))||w0&&i instanceof Blob||T0&&i instanceof File}function Qs(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(Qs(i[e]))return!0;return!1}if(ma(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Qs(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&Qs(i[e]))return!0;return!1}function A0(i){const t=[],e=i.data,n=i;return n.data=tr(e,t),n.attachments=t.length,{packet:n,buffers:t}}function tr(i,t,e){if(!i)return i;if(ma(i)){const n={_placeholder:!0,num:t.length};return t.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=tr(i[s],t);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!e)return tr(i.toJSON(),t,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=tr(i[s],t));return n}return i}function C0(i,t){return i.data=qo(i.data,t),delete i.attachments,i}function qo(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=qo(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=qo(i[e],t));return i}const R0=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var kt;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(kt||(kt={}));class L0{constructor(t){this.replacer=t}encode(t){return(t.type===kt.EVENT||t.type===kt.ACK)&&Qs(t)?this.encodeAsBinary({type:t.type===kt.EVENT?kt.BINARY_EVENT:kt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===kt.BINARY_EVENT||t.type===kt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=A0(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class ga extends _e{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===kt.BINARY_EVENT;n||e.type===kt.BINARY_ACK?(e.type=n?kt.EVENT:kt.ACK,this.reconstructor=new P0(e)):super.emitReserved("decoded",e)}else if(ma(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(kt[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===kt.BINARY_EVENT||n.type===kt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!I0(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(ga.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case kt.CONNECT:return Uc(e);case kt.DISCONNECT:return e===void 0;case kt.CONNECT_ERROR:return typeof e=="string"||Uc(e);case kt.EVENT:case kt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&R0.indexOf(e[0])===-1);case kt.ACK:case kt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class P0{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=C0(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const I0=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function Uc(i){return Object.prototype.toString.call(i)==="[object Object]"}const D0=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ga,Encoder:L0,get PacketType(){return kt}},Symbol.toStringTag,{value:"Module"}));function tn(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const U0=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ll extends _e{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[tn(t,"open",this.onopen.bind(this)),tn(t,"packet",this.onpacket.bind(this)),tn(t,"error",this.onerror.bind(this)),tn(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(U0.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:kt.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,u=e.pop();this._registerAckCallback(h,u),o.id=h}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:kt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case kt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case kt.EVENT:case kt.BINARY_EVENT:this.onevent(t);break;case kt.ACK:case kt.BINARY_ACK:this.onack(t);break;case kt.DISCONNECT:this.ondisconnect();break;case kt.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:kt.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:kt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function Gi(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Gi.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};Gi.prototype.reset=function(){this.attempts=0};Gi.prototype.setMin=function(i){this.ms=i};Gi.prototype.setMax=function(i){this.max=i};Gi.prototype.setJitter=function(i){this.jitter=i};class Yo extends _e{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,fr(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Gi({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||D0;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new M0(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=tn(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=tn(e,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(tn(t,"ping",this.onping.bind(this)),tn(t,"data",this.ondata.bind(this)),tn(t,"error",this.onerror.bind(this)),tn(t,"close",this.onclose.bind(this)),tn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){dr(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ll(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Qi={};function er(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=S0(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=Qi[s]&&r in Qi[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new Yo(n,t):(Qi[s]||(Qi[s]=new Yo(n,t)),c=Qi[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(er,{Manager:Yo,Socket:Ll,io:er,connect:er});class N0{constructor(t,e){this.scene=t,this.id=e.id,this.name=e.name||"Pilot",this.color=e.color||"#ff3366",this.currentPosition=new T(e.x||0,e.y||.35,e.z||-3.5),this.targetPosition=new T(e.x||0,e.y||.35,e.z||-3.5),this.currentRotationY=e.rotY||0,this.targetRotationY=e.rotY||0,this.speed=0,this.steer=0,this.createCarModel(),this.createNameTag(),this.scene.add(this.meshGroup)}createCarModel(){this.meshGroup=new ge,this.meshGroup.position.copy(this.currentPosition),this.meshGroup.rotation.y=this.currentRotationY;const t=new It({color:new vt(this.color),roughness:.25,metalness:.8,flatShading:!0}),e=new It({color:1120295,roughness:.4,metalness:.6,flatShading:!0}),n=new It({color:988970,roughness:.1,metalness:.9,transparent:!0,opacity:.75}),s=new It({color:1841431,roughness:.9,flatShading:!0}),r=new Mt(1.4,.4,2.8),o=new Z(r,t);o.position.y=.25,o.castShadow=!0,o.receiveShadow=!0,this.meshGroup.add(o);const a=new Mt(1.36,.18,1),c=new Z(a,e);c.position.set(0,.38,.8),c.rotation.x=.12,this.meshGroup.add(c);const l=new Mt(1.1,.45,1.3),h=new Z(l,n);h.position.set(0,.62,-.2),this.meshGroup.add(h);const u=new Mt(1.5,.08,.35),f=new Z(u,e);f.position.set(0,.85,-1.35),this.meshGroup.add(f);const p=new Mt(.3,.12,.08),g=new $t({color:16777215}),x=new Z(p,g);x.position.set(-.45,.28,1.41);const m=new Z(p,g);m.position.set(.45,.28,1.41),this.meshGroup.add(x),this.meshGroup.add(m);const d=new Mt(1.2,.1,.08),b=new $t({color:16720418}),_=new Z(d,b);_.position.set(0,.32,-1.41),this.meshGroup.add(_),this.wheels=[],this.frontWheelMounts=[];const v=new Ee(.32,.32,.24,12);v.rotateZ(Math.PI/2);const C=new Ee(.2,.2,.25,12);C.rotateZ(Math.PI/2);const R=new It({color:new vt(this.color),roughness:.3,metalness:.9});[{x:-.75,y:.18,z:.9,front:!0},{x:.75,y:.18,z:.9,front:!0},{x:-.75,y:.18,z:-.9,front:!1},{x:.75,y:.18,z:-.9,front:!1}].forEach(w=>{const E=new ge;E.position.set(w.x,w.y,w.z);const y=new Z(v,s);y.castShadow=!0;const P=new Z(C,R);y.add(P),E.add(y),this.meshGroup.add(E),this.wheels.push(y),w.front&&this.frontWheelMounts.push(E)})}createNameTag(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.fillStyle="rgba(15, 23, 42, 0.85)",e.strokeStyle=this.color,e.lineWidth=4,e.beginPath(),e.roundRect(8,8,240,48,24),e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font='bold 22px system-ui, "Cairo", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(this.name,128,32);const n=new Fi(t),s=new hs({map:n,transparent:!0,depthTest:!1});this.nameTagSprite=new lr(s),this.nameTagSprite.position.set(0,1.8,0),this.nameTagSprite.scale.set(2.4,.6,1),this.meshGroup.add(this.nameTagSprite)}setNetworkState(t){typeof t.x=="number"&&typeof t.z=="number"&&this.targetPosition.set(t.x,typeof t.y=="number"?t.y:.35,t.z),typeof t.rotY=="number"&&(this.targetRotationY=t.rotY),typeof t.speed=="number"&&(this.speed=t.speed),typeof t.steer=="number"&&(this.steer=t.steer)}update(t){t>.1&&(t=.1);const e=Math.min(14*t,1);this.currentPosition.lerp(this.targetPosition,e),this.meshGroup.position.copy(this.currentPosition);let n=this.targetRotationY-this.currentRotationY;n=Math.atan2(Math.sin(n),Math.cos(n)),this.currentRotationY+=n*Math.min(12*t,1),this.meshGroup.rotation.y=this.currentRotationY;const s=this.speed*t/.32;this.wheels.forEach(r=>{r.rotation.x+=s}),this.frontWheelMounts.forEach(r=>{r.rotation.y=-this.steer})}destroy(){this.scene.remove(this.meshGroup)}}const Yn={x:0,y:0,z:0,rotY:0,speed:0,steer:0};class O0{constructor(t,e){this.scene=t,this.onPlayerCountChange=e,this.socket=null,this.myId=null,this.myPilotInfo=null,this.remotePlayers=new Map,this.lastSendTime=0,this.sendInterval=1e3/25,this.connectionStatus="connecting",this.connect()}connect(){const t=window.location.port==="5173"?"http://localhost:3001":window.location.origin;this.socket=er(t,{transports:["websocket","polling"],reconnectionAttempts:10,reconnectionDelay:1e3}),this.socket.on("connect",()=>{this.myId=this.socket.id,this.connectionStatus="connected",console.log(`[Network] Connected as ${this.myId}`),this.notifyStatus()}),this.socket.on("currentPlayers",e=>{const{yourId:n,players:s}=e;this.myId=n;for(const[r,o]of Object.entries(s))r===this.myId?this.myPilotInfo=o:this.addRemotePlayer(o);this.notifyStatus()}),this.socket.on("playerJoined",e=>{e.id!==this.myId&&(console.log(`[Network] Player joined: ${e.name}`),this.addRemotePlayer(e),this.notifyStatus())}),this.socket.on("serverUpdate",e=>{for(const[n,s]of Object.entries(e))n!==this.myId&&this.remotePlayers.has(n)&&this.remotePlayers.get(n).setNetworkState(s)}),this.socket.on("playerDisconnected",e=>{this.remotePlayers.has(e)&&(this.remotePlayers.get(e).destroy(),this.remotePlayers.delete(e),console.log(`[Network] Player left: ${e}`),this.notifyStatus())}),this.socket.on("disconnect",()=>{this.connectionStatus="disconnected",console.log("[Network] Disconnected from server"),this.notifyStatus()})}addRemotePlayer(t){if(this.remotePlayers.has(t.id))return;const e=new N0(this.scene,t);this.remotePlayers.set(t.id,e)}notifyStatus(){const t=this.remotePlayers.size+(this.myPilotInfo?1:0);this.onPlayerCountChange&&this.onPlayerCountChange(t,this.connectionStatus,this.myPilotInfo)}sendMovement(t,e,n,s,r,o){if(!this.socket||!this.socket.connected)return;const a=performance.now();a-this.lastSendTime<40||(this.lastSendTime=a,Yn.x=Math.round(t*100)/100,Yn.y=Math.round(e*100)/100,Yn.z=Math.round(n*100)/100,Yn.rotY=Math.round(s*1e3)/1e3,Yn.speed=Math.round(r*100)/100,Yn.steer=Math.round(o*100)/100,this.socket.emit("playerMove",Yn))}update(t){for(const e of this.remotePlayers.values())e.update(t)}}class F0{constructor(){this.currentLanguage="en",this.projectModal=document.getElementById("project-modal"),this.projectCard=document.getElementById("modal-card"),this.projectCloseBtn=document.getElementById("modal-close-btn"),this.bannerContainer=document.getElementById("modal-banner-container"),this.logoContainer=document.getElementById("modal-logo-container"),this.statusBadgeEl=document.getElementById("modal-status-badge"),this.titleEl=document.getElementById("modal-title"),this.categoryEl=document.getElementById("modal-category"),this.taglineEl=document.getElementById("modal-tagline"),this.roleLabelEl=document.getElementById("modal-role-label"),this.roleValEl=document.getElementById("modal-role-val"),this.summaryEl=document.getElementById("modal-summary"),this.secHighlightsEl=document.getElementById("modal-sec-highlights"),this.highlightsEl=document.getElementById("modal-highlights"),this.secMetricsEl=document.getElementById("modal-sec-metrics"),this.metricsEl=document.getElementById("modal-metrics"),this.secTechEl=document.getElementById("modal-sec-tech"),this.techStackEl=document.getElementById("modal-tech-stack"),this.demoLink=document.getElementById("modal-link-demo"),this.githubLink=document.getElementById("modal-link-github"),this.caseStudyLink=document.getElementById("modal-link-casestudy"),this.btnLabelDemo=document.getElementById("btn-label-demo"),this.btnLabelGithub=document.getElementById("btn-label-github"),this.btnLabelCase=document.getElementById("btn-label-case"),this.monolithModal=document.getElementById("monolith-modal"),this.monolithCloseBtn=document.getElementById("monolith-close-btn"),this.monolithBadgeEl=document.getElementById("monolith-badge-label"),this.monolithTitleEl=document.getElementById("monolith-title"),this.monolithSubtitleEl=document.getElementById("monolith-subtitle"),this.monolithGridEl=document.getElementById("monolith-grid"),this.waypointModal=document.getElementById("waypoint-modal"),this.waypointCloseBtn=document.getElementById("waypoint-close-btn"),this.waypointBadgeEl=document.getElementById("waypoint-badge-label"),this.waypointTitleEl=document.getElementById("waypoint-title"),this.waypointOrgEl=document.getElementById("waypoint-org"),this.waypointPeriodEl=document.getElementById("waypoint-period"),this.waypointDescEl=document.getElementById("waypoint-desc"),this.activeType=null,this.activeData=null,this.setupListeners()}setupListeners(){this.projectCloseBtn&&this.projectCloseBtn.addEventListener("click",()=>this.close()),this.projectModal&&this.projectModal.addEventListener("click",t=>{t.target===this.projectModal&&this.close()}),this.monolithCloseBtn&&this.monolithCloseBtn.addEventListener("click",()=>this.close()),this.monolithModal&&this.monolithModal.addEventListener("click",t=>{t.target===this.monolithModal&&this.close()}),this.waypointCloseBtn&&this.waypointCloseBtn.addEventListener("click",()=>this.close()),this.waypointModal&&this.waypointModal.addEventListener("click",t=>{t.target===this.waypointModal&&this.close()}),window.addEventListener("keydown",t=>{t.code==="Escape"&&this.activeType&&this.close()})}setLanguage(t){this.currentLanguage=t,this.activeType==="project"&&this.activeData?this.renderProject(this.activeData):this.activeType==="monolith"&&this.activeData?this.renderMonolith(this.activeData):this.activeType==="waypoint"&&this.activeData&&this.renderWaypoint(this.activeData)}openProject(t){this.closeAll(),this.activeType="project",this.activeData=t,this.renderProject(t),he.playClick(),this.projectModal&&(this.projectModal.classList.remove("hidden"),this.projectModal.classList.add("visible"))}renderProject(t){const e=this.currentLanguage,n=ve.ui;this.projectCard&&(t.brandType==="ascii"?(this.projectCard.classList.add("crt-terminal-card"),this.projectCard.style.borderColor=`${t.color}66`):(this.projectCard.classList.remove("crt-terminal-card"),this.projectCard.style.borderColor="var(--panel-border)")),this.bannerContainer&&(this.bannerContainer.style.background=t.bannerGradient||"#0f172a",t.brandType==="ascii"?(this.bannerContainer.className="modal-banner banner-terminal-mode",this.bannerContainer.innerHTML=`
          <div class="terminal-banner-box">
            <div class="terminal-banner-bar">
              <div class="terminal-dots">
                <span class="t-dot red"></span>
                <span class="t-dot yellow"></span>
                <span class="t-dot green"></span>
              </div>
              <span class="terminal-banner-label">TTY1: /dev/${t.id} // [${t.category[e]}]</span>
              <span class="status-chip" style="border-color: ${t.color}; color: ${t.color}">
                ${t.status[e]}
              </span>
            </div>
            <div class="terminal-screen-crt">
              <div class="terminal-scanlines"></div>
              <pre class="terminal-ascii-pre" style="color: ${t.color}; text-shadow: 0 0 10px ${t.color}99;">${t.asciiArt.trim()}</pre>
            </div>
          </div>
        `):(this.bannerContainer.className="modal-banner banner-svg-mode",this.bannerContainer.innerHTML=`
          <div class="modal-logo-badge">${t.logoSvg||""}</div>
          <div class="modal-banner-chips">
            <span class="status-chip" style="border-color: ${t.color}; color: ${t.color}">
              ${t.status[e]}
            </span>
            <span class="category-chip" style="border-color: ${t.color}66; color: ${t.color}">
              ${t.category[e]}
            </span>
          </div>
        `)),this.titleEl&&(this.titleEl.textContent=t.title[e]),this.taglineEl&&(this.taglineEl.textContent=t.tagline[e]),this.roleLabelEl&&(this.roleLabelEl.textContent=`${n.modalRole[e]}:`),this.roleValEl&&(this.roleValEl.textContent=t.role[e],this.roleValEl.style.color=t.color),this.summaryEl&&(this.summaryEl.textContent=t.summary[e]),this.secHighlightsEl&&(this.secHighlightsEl.textContent=n.modalHighlights[e]),this.secMetricsEl&&(this.secMetricsEl.textContent=n.modalMetrics[e]),this.secTechEl&&(this.secTechEl.textContent=n.modalTechStack[e]),this.highlightsEl&&(this.highlightsEl.innerHTML=t.highlights[e].map(s=>`<li><span class="bullet" style="color: ${t.color}">▸</span> ${s}</li>`).join("")),this.metricsEl&&t.metrics[e]&&(this.metricsEl.innerHTML=Object.entries(t.metrics[e]).map(([s,r])=>`
          <div class="metric-box">
            <span class="metric-val" style="color: ${t.color}">${r}</span>
            <span class="metric-key">${s.toUpperCase()}</span>
          </div>
        `).join("")),this.techStackEl&&(this.techStackEl.innerHTML=t.techStack.map(s=>`<span class="tech-badge" style="border-color: ${s.color}66; color: #fff;">${s.name}</span>`).join("")),this.btnLabelDemo&&(this.btnLabelDemo.textContent=n.liveDemo[e]),this.btnLabelGithub&&(this.btnLabelGithub.textContent=n.sourceCode[e]),this.btnLabelCase&&(this.btnLabelCase.textContent=n.caseStudy[e]),this.demoLink&&(this.demoLink.href=t.links.demo,this.demoLink.style.display=t.links.demo?"inline-flex":"none"),this.githubLink&&(this.githubLink.href=t.links.github,this.githubLink.style.display=t.links.github?"inline-flex":"none"),this.caseStudyLink&&(this.caseStudyLink.href=t.links.caseStudy,this.caseStudyLink.style.display=t.links.caseStudy?"inline-flex":"none"),this.projectCard&&(this.projectCard.style.boxShadow=`0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px ${t.color}33`)}openMonolith(t){this.closeAll(),this.activeType="monolith",this.activeData=t,this.renderMonolith(t),he.playClick(),this.monolithModal&&(this.monolithModal.classList.remove("hidden"),this.monolithModal.classList.add("visible"))}renderMonolith(t){const e=this.currentLanguage,n=ve.ui;this.monolithBadgeEl&&(this.monolithBadgeEl.textContent=n.skillsMatrixTitle[e]),this.monolithTitleEl&&(this.monolithTitleEl.textContent=t.title[e]),this.monolithSubtitleEl&&(this.monolithSubtitleEl.textContent=t.subtitle[e]),this.monolithGridEl&&(this.monolithGridEl.innerHTML=t.categories.map(s=>`
          <div class="monolith-category-card" style="border-top: 3px solid ${s.color};">
            <h4 class="monolith-category-title" style="color: ${s.color};">${s.name[e]}</h4>
            <div class="monolith-skill-chips">
              ${s.skills.map(r=>`<span class="monolith-skill-chip">${r}</span>`).join("")}
            </div>
          </div>
        `).join(""))}openWaypoint(t){this.closeAll(),this.activeType="waypoint",this.activeData=t,this.renderWaypoint(t),he.playClick(),this.waypointModal&&(this.waypointModal.classList.remove("hidden"),this.waypointModal.classList.add("visible"))}renderWaypoint(t){const e=this.currentLanguage,n=ve.ui;this.waypointBadgeEl&&(this.waypointBadgeEl.textContent=n.waypointTitle[e]),this.waypointTitleEl&&(this.waypointTitleEl.textContent=t.title[e]),this.waypointOrgEl&&(this.waypointOrgEl.textContent=t.organization[e]),this.waypointPeriodEl&&(this.waypointPeriodEl.textContent=t.period[e]),this.waypointDescEl&&(this.waypointDescEl.textContent=t.description[e])}closeAll(){this.projectModal&&(this.projectModal.classList.remove("visible"),this.projectModal.classList.add("hidden")),this.monolithModal&&(this.monolithModal.classList.remove("visible"),this.monolithModal.classList.add("hidden")),this.waypointModal&&(this.waypointModal.classList.remove("visible"),this.waypointModal.classList.add("hidden"))}close(){this.activeType&&(this.activeType=null,this.activeData=null,he.playClick(),this.closeAll())}isOpen(){return this.activeType!==null}}class B0{constructor(t={}){this.callbacks=t,this.currentLanguage="en",this.currentContext=null,this.playerCount=1,this.currentEnvMode="night",this.brandTitleEl=document.getElementById("brand-title"),this.brandSubtitleEl=document.getElementById("brand-subtitle"),this.langBtn=document.getElementById("lang-toggle-btn"),this.langLabelEl=document.getElementById("lang-current-label"),this.envBtn=document.getElementById("env-toggle-btn"),this.envLabelEl=document.getElementById("env-mode-label"),this.speedValueEl=document.getElementById("speed-value"),this.speedUnitEl=document.getElementById("speed-unit-label"),this.speedBarEl=document.getElementById("speed-bar-fill"),this.gearEl=document.getElementById("gear-indicator"),this.playerCountEl=document.getElementById("player-count"),this.pingDotEl=document.getElementById("ping-indicator"),this.playerNameEl=document.getElementById("player-name-badge"),this.promptEl=document.getElementById("interaction-prompt"),this.promptTitleEl=document.getElementById("prompt-project-title"),this.promptPrefixEl=document.getElementById("prompt-prefix"),this.promptSuffixEl=document.getElementById("prompt-suffix"),this.promptKeyEl=document.getElementById("prompt-key-label"),this.hintDriveEl=document.getElementById("hint-drive-text"),this.hintBrakeEl=document.getElementById("hint-brake-text"),this.hintExploreEl=document.getElementById("hint-explore-text"),this.audioBtn=document.getElementById("audio-toggle-btn"),this.audioIcon=document.getElementById("audio-icon"),this.mapBtn=document.getElementById("map-toggle-btn"),this.mapBtnLabel=document.getElementById("map-btn-label"),this.apBanner=document.getElementById("autopilot-banner"),this.apLabelTitle=document.getElementById("ap-label-title"),this.apDestName=document.getElementById("ap-dest-name"),this.apHintText=document.getElementById("ap-hint-text"),this.apCancelBtn=document.getElementById("ap-cancel-btn"),this.currentApDest=null,this.lapTimerEl=document.getElementById("hud-lap-timer"),this.lapNumEl=document.getElementById("lap-current-num"),this.lapLabelEl=document.getElementById("lap-label-tag"),this.bestLabelEl=document.getElementById("best-label-tag"),this.bestTimeEl=document.getElementById("best-time-val"),this.currentLapTimeEl=document.getElementById("current-lap-val"),this.sectorStripEl=document.getElementById("lap-sectors-strip"),this.driftWidget=document.getElementById("hud-drift-widget"),this.driftTitleEl=document.getElementById("drift-label-text"),this.driftPointsEl=document.getElementById("drift-points-val"),this.driftPtsLabel=document.getElementById("drift-pts-label"),this.driftMultEl=document.getElementById("drift-mult-val"),this.finishBanner=document.getElementById("finish-celebration-banner"),this.finishTitleEl=document.getElementById("finish-title-text"),this.finishTimeEl=document.getElementById("finish-time-sub"),this.finishTimeout=null,this.btnGas=document.getElementById("btn-gas"),this.btnRev=document.getElementById("btn-rev"),this.btnBrake=document.getElementById("btn-brake"),this.setupListeners(),this.setLanguage("en")}setupListeners(){this.langBtn&&this.langBtn.addEventListener("click",()=>{he.playClick();const t=this.currentLanguage==="en"?"ar":"en";this.setLanguage(t),this.callbacks.onLanguageChange&&this.callbacks.onLanguageChange(t)}),this.envBtn&&this.envBtn.addEventListener("click",()=>{if(he.playClick(),this.callbacks.onToggleEnvironment){const t=this.callbacks.onToggleEnvironment();this.setEnvironmentMode(t)}}),this.audioBtn&&this.audioBtn.addEventListener("click",()=>{he.init();const t=he.toggleMute();this.updateAudioIcon(t)}),this.mapBtn&&this.mapBtn.addEventListener("click",()=>{he.playClick(),this.callbacks.onToggleMap&&this.callbacks.onToggleMap()}),this.apCancelBtn&&this.apCancelBtn.addEventListener("click",()=>{he.playClick(),this.callbacks.onCancelAutopilot&&this.callbacks.onCancelAutopilot()}),this.promptEl&&this.promptEl.addEventListener("click",()=>{this.triggerInteraction()}),window.addEventListener("keydown",t=>{(t.code==="KeyE"||t.code==="Enter")&&this.currentContext&&this.triggerInteraction()}),window.addEventListener("resize",()=>{this.updateControlsKey()})}triggerInteraction(){this.currentContext&&(this.currentContext.type==="project"&&this.callbacks.onOpenProject?this.callbacks.onOpenProject(this.currentContext.data):this.currentContext.type==="monolith"&&this.callbacks.onOpenMonolith?this.callbacks.onOpenMonolith(this.currentContext.data):this.currentContext.type==="waypoint"&&this.callbacks.onOpenWaypoint&&this.callbacks.onOpenWaypoint(this.currentContext.data))}setEnvironmentMode(t){if(this.currentEnvMode=t,!this.envLabelEl)return;const e=ve.ui,n=this.currentLanguage;t==="day"?this.envLabelEl.textContent=e.envDay[n]:t==="sunset"?this.envLabelEl.textContent=e.envSunset[n]:this.envLabelEl.textContent=e.envNight[n]}setLanguage(t){this.currentLanguage=t;const e=ve.ui,n=ve.profile;document.documentElement.lang=t,document.documentElement.dir=t==="ar"?"rtl":"ltr",this.langLabelEl&&(this.langLabelEl.textContent=t==="en"?"العربية":"English"),this.brandTitleEl&&(this.brandTitleEl.textContent=e.brand[t]),this.brandSubtitleEl&&(this.brandSubtitleEl.textContent=n.title[t]),this.speedUnitEl&&(this.speedUnitEl.textContent=e.speedUnit[t]),this.hintDriveEl&&(this.hintDriveEl.textContent=e.controlsHintDrive[t]),this.hintBrakeEl&&(this.hintBrakeEl.textContent=e.controlsHintBrake[t]),this.hintExploreEl&&(this.hintExploreEl.textContent=e.controlsHintExplore[t]),this.btnGas&&(this.btnGas.textContent=e.touchGas[t]),this.btnRev&&(this.btnRev.textContent=e.touchRev[t]),this.btnBrake&&(this.btnBrake.textContent=e.touchBrake[t]),this.mapBtnLabel&&(this.mapBtnLabel.textContent=t==="ar"?"الخريطة":"Map"),this.setEnvironmentMode(this.currentEnvMode),this.lapLabelEl&&(this.lapLabelEl.textContent=e.lapTimerLap[t]),this.bestLabelEl&&(this.bestLabelEl.textContent=`${e.lapTimerBest[t]}:`),this.driftTitleEl&&(this.driftTitleEl.textContent=e.driftScore[t]),this.driftPtsLabel&&(this.driftPtsLabel.textContent=e.driftPts[t]),this.updatePlayerCountText(),this.currentContext&&this.showPrompt(this.currentContext),this.updateAutopilotText(),this.updateControlsKey()}showAutopilot(t){this.currentApDest=t,this.apBanner&&(this.updateAutopilotText(),this.apBanner.classList.remove("hidden"),this.apBanner.classList.add("visible"))}hideAutopilot(){this.currentApDest=null,this.apBanner&&(this.apBanner.classList.remove("visible"),this.apBanner.classList.add("hidden"))}updateAutopilotText(){if(!this.currentApDest||!this.apBanner)return;const t=ve.ui,e=this.currentLanguage;this.apLabelTitle&&(this.apLabelTitle.textContent=`${t.autopilotActive[e]}:`),this.apHintText&&(this.apHintText.textContent=t.autopilotCancelHint[e]);let n=this.currentApDest;this.currentApDest==="qticket"?n=t.destNorth[e]:this.currentApDest==="laffeh"?n=t.destEast[e]:this.currentApDest==="callcenter"?n=t.destSouth[e]:this.currentApDest==="kernel"?n=t.destWest[e]:this.currentApDest==="hub"?n=t.destCentral[e]:this.currentApDest==="racetrack"&&(n=t.destRaceTrack[e]),this.apDestName&&(this.apDestName.textContent=n)}updateControlsKey(){const t="ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=850;this.promptKeyEl&&(this.promptKeyEl.textContent=t?this.currentLanguage==="ar"?"المس":"TAP":"E")}updatePlayerCountText(){if(!this.playerCountEl)return;const t=ve.ui;this.playerCount===1?this.playerCountEl.textContent=`1 ${t.singlePilot[this.currentLanguage]}`:this.playerCountEl.textContent=`${this.playerCount} ${t.onlinePilots[this.currentLanguage]}`}updateAudioIcon(t){this.audioIcon&&(t?this.audioIcon.innerHTML=`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
        </svg>
      `:this.audioIcon.innerHTML=`
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `)}updateSpeed(t,e){if(this.speedValueEl&&(this.speedValueEl.textContent=t),this.speedBarEl){const n=Math.min(Math.abs(e)*100,100);this.speedBarEl.style.width=`${n}%`}this.gearEl&&(e>.05?(this.gearEl.textContent="D",this.gearEl.className="gear-badge gear-d"):e<-.05?(this.gearEl.textContent="R",this.gearEl.className="gear-badge gear-r"):(this.gearEl.textContent="P",this.gearEl.className="gear-badge gear-p"))}updateLapTimer(t){!this.lapTimerEl||!t||(this.lapNumEl&&(this.lapNumEl.textContent=t.currentLap||1),this.currentLapTimeEl&&(this.currentLapTimeEl.textContent=t.currentLapTimeStr||"00:00.000"),this.bestTimeEl&&(this.bestTimeEl.textContent=t.bestLapTimeStr||"--:--.---"),this.sectorStripEl&&t.nextCheckpoint!==void 0&&this.sectorStripEl.querySelectorAll(".sector-dot").forEach((n,s)=>{s<t.nextCheckpoint?n.className="sector-dot passed":s===t.nextCheckpoint?n.className="sector-dot active":n.className="sector-dot"}))}showLapFinishedBanner(t){if(!this.finishBanner||!t)return;const e=ve.ui,n=this.currentLanguage;if(this.finishTitleEl&&(this.finishTitleEl.textContent=t.isNewRecord?e.newLapRecord[n]:`🏁 ${e.lapCompleted[n]}`,this.finishTitleEl.style.color=t.isNewRecord?"#00ff88":"#00f0ff"),this.finishTimeEl){const s=`${e.lapTimerLap[n]} ${t.lapNumber}`;this.finishTimeEl.textContent=`${s}: ${t.lapTimeStr} ${t.isNewRecord?"⚡":""}`}this.finishBanner.classList.remove("hidden"),this.finishBanner.classList.add("visible"),this.finishTimeout&&clearTimeout(this.finishTimeout),this.finishTimeout=setTimeout(()=>{this.finishBanner&&(this.finishBanner.classList.remove("visible"),this.finishBanner.classList.add("hidden"))},4500)}updateDriftWidget(t){!this.driftWidget||!t||(t.isDrifting||t.currentCombo>5?(this.driftWidget.classList.remove("hidden"),this.driftWidget.classList.add("visible"),this.driftPointsEl&&(this.driftPointsEl.textContent=Math.floor(t.currentCombo)),this.driftMultEl&&(this.driftMultEl.textContent=`x${t.driftMultiplier.toFixed(1)}`)):this.driftWidget.classList.contains("visible")&&(this.driftWidget.classList.remove("visible"),this.driftWidget.classList.add("hidden")))}updateMultiplayer(t,e,n){if(this.playerCount=t,this.updatePlayerCountText(),this.pingDotEl&&(this.pingDotEl.className=`status-dot ${e}`),this.playerNameEl&&n){const r=ve.ui.pilot[this.currentLanguage],o=n.name.replace(/^Pilot-/,"");this.playerNameEl.textContent=`${r}-${o}`,this.playerNameEl.style.borderColor=n.color,this.playerNameEl.style.color=n.color}}showPrompt(t){if(this.currentContext=t,!!this.promptEl)if(t){const e=this.currentLanguage,n=ve.ui;this.promptPrefixEl&&(this.promptPrefixEl.textContent=`${n.parkedAt[e]} `),this.promptSuffixEl&&(this.promptSuffixEl.textContent=` — ${n.pressEOrTap[e]}`);let s="",r="#00f0ff";t.type==="project"?(s=t.data.title[e],r=t.data.color):t.type==="monolith"?(s=n.skillsMatrixTitle[e],r="#00f0ff"):t.type==="waypoint"&&(s=t.data.title[e],r="#ffaa00"),this.promptTitleEl&&(this.promptTitleEl.textContent=s,this.promptTitleEl.style.color=r),this.promptEl.classList.remove("hidden"),this.promptEl.classList.add("visible")}else this.promptEl.classList.remove("visible"),this.promptEl.classList.add("hidden")}}class k0{constructor(t){this.onInputChange=t,this.state={steer:0,throttle:0,brake:!1},this.joystickActive=!1,this.joystickTouchId=null,this.touchStartX=0,this.touchStartY=0,this.maxRadius=45,this.dom={container:document.getElementById("touch-controls"),joystickZone:document.getElementById("joystick-zone"),joystickBase:document.getElementById("joystick-base"),joystickKnob:document.getElementById("joystick-knob"),btnGas:document.getElementById("btn-gas"),btnRev:document.getElementById("btn-rev"),btnBrake:document.getElementById("btn-brake")},this.checkVisibility(),this.setupListeners()}checkVisibility(){const t="ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=850;this.dom.container&&(this.dom.container.style.display=t?"flex":"none")}setupListeners(){if(window.addEventListener("resize",()=>this.checkVisibility()),!this.dom.joystickZone)return;this.dom.joystickZone.addEventListener("touchstart",e=>{if(e.preventDefault(),this.joystickActive)return;const n=e.changedTouches[0];this.joystickActive=!0,this.joystickTouchId=n.identifier;const s=this.dom.joystickZone.getBoundingClientRect();this.touchStartX=s.left+s.width/2,this.touchStartY=s.top+s.height/2,this.updateJoystickKnob(n.clientX,n.clientY)},{passive:!1}),window.addEventListener("touchmove",e=>{if(this.joystickActive)for(let n=0;n<e.changedTouches.length;n++){const s=e.changedTouches[n];if(s.identifier===this.joystickTouchId){e.preventDefault(),this.updateJoystickKnob(s.clientX,s.clientY);break}}},{passive:!1});const t=e=>{if(this.joystickActive){for(let n=0;n<e.changedTouches.length;n++)if(e.changedTouches[n].identifier===this.joystickTouchId){this.joystickActive=!1,this.joystickTouchId=null,this.state.steer=0,this.dom.joystickKnob&&(this.dom.joystickKnob.style.transform="translate(0px, 0px)"),this.emit();break}}};window.addEventListener("touchend",t),window.addEventListener("touchcancel",t),this.setupButton(this.dom.btnGas,e=>{e?(this.state.throttle=1,this.state.brake=!1):this.state.throttle===1&&(this.state.throttle=0),this.emit()}),this.setupButton(this.dom.btnRev,e=>{e?(this.state.throttle=-1,this.state.brake=!1):this.state.throttle===-1&&(this.state.throttle=0),this.emit()}),this.setupButton(this.dom.btnBrake,e=>{this.state.brake=e,e&&(this.state.throttle=0),this.emit()})}updateJoystickKnob(t,e){let n=t-this.touchStartX,s=e-this.touchStartY;const r=Math.sqrt(n*n+s*s);r>this.maxRadius&&(n=n/r*this.maxRadius,s=s/r*this.maxRadius),this.dom.joystickKnob&&(this.dom.joystickKnob.style.transform=`translate(${n}px, ${s}px)`),this.state.steer=n/this.maxRadius,this.emit()}setupButton(t,e){t&&(t.addEventListener("touchstart",n=>{n.preventDefault(),t.classList.add("active"),e(!0)},{passive:!1}),t.addEventListener("touchend",n=>{n.preventDefault(),t.classList.remove("active"),e(!1)},{passive:!1}),t.addEventListener("touchcancel",n=>{t.classList.remove("active"),e(!1)}))}emit(){this.onInputChange&&this.onInputChange(this.state)}}const Qe={hub_center:{id:"hub_center",nameKey:"destCentral",x:0,z:0,zone:"hub",neighbors:["plaza_n","plaza_e","plaza_s","plaza_w"]},plaza_n:{id:"plaza_n",x:0,z:-22,zone:"plaza",neighbors:["hub_center","plaza_e","plaza_w","n_ave_mid"]},plaza_e:{id:"plaza_e",x:22,z:0,zone:"plaza",neighbors:["hub_center","plaza_n","plaza_s","e_ave_mid"]},plaza_s:{id:"plaza_s",x:0,z:22,zone:"plaza",neighbors:["hub_center","plaza_e","plaza_w","s_ave_mid"]},plaza_w:{id:"plaza_w",x:-22,z:0,zone:"plaza",neighbors:["hub_center","plaza_n","plaza_s","w_ave_mid"]},n_ave_mid:{id:"n_ave_mid",x:0,z:-38,zone:"north_ave",neighbors:["plaza_n","n_station"]},n_station:{id:"n_station",nameKey:"destNorth",projectId:"qticket",x:0,z:-52,zone:"financial",neighbors:["n_ave_mid","track_start","track_t1"]},track_start:{id:"track_start",nameKey:"destRaceTrack",x:0,z:-68,zone:"circuit",neighbors:["n_station","n_hwy_ramp","track_t1","track_t11"]},n_hwy_ramp:{id:"n_hwy_ramp",x:0,z:-90,zone:"north_ave",neighbors:["track_start","hwy_n"]},hwy_n:{id:"hwy_n",x:0,z:-105,zone:"highway",neighbors:["n_hwy_ramp","hwy_ne","hwy_nw"]},e_ave_mid:{id:"e_ave_mid",x:38,z:0,zone:"east_ave",neighbors:["plaza_e","e_station"]},e_station:{id:"e_station",nameKey:"destEast",projectId:"laffeh",x:52,z:0,zone:"logistics",neighbors:["e_ave_mid","e_hwy_ramp","track_t2"]},e_hwy_ramp:{id:"e_hwy_ramp",x:90,z:0,zone:"east_ave",neighbors:["e_station","hwy_e"]},hwy_e:{id:"hwy_e",x:105,z:0,zone:"highway",neighbors:["e_hwy_ramp","hwy_ne","hwy_se","track_t2"]},s_ave_mid:{id:"s_ave_mid",x:0,z:38,zone:"south_ave",neighbors:["plaza_s","s_station"]},s_station:{id:"s_station",nameKey:"destSouth",projectId:"callcenter",x:0,z:52,zone:"telecom",neighbors:["s_ave_mid","s_ave_outer"]},s_ave_outer:{id:"s_ave_outer",x:0,z:75,zone:"south_ave",neighbors:["s_station","s_hwy_ramp","track_t5"]},s_hwy_ramp:{id:"s_hwy_ramp",x:0,z:90,zone:"south_ave",neighbors:["s_ave_outer","hwy_s"]},hwy_s:{id:"hwy_s",x:0,z:105,zone:"highway",neighbors:["s_hwy_ramp","hwy_se","hwy_sw"]},w_ave_mid:{id:"w_ave_mid",x:-38,z:0,zone:"west_ave",neighbors:["plaza_w","w_station"]},w_station:{id:"w_station",nameKey:"destWest",projectId:"kernel",x:-52,z:0,zone:"silicon",neighbors:["w_ave_mid","w_hwy_ramp","track_t7"]},w_hwy_ramp:{id:"w_hwy_ramp",x:-90,z:0,zone:"west_ave",neighbors:["w_station","hwy_w"]},hwy_w:{id:"hwy_w",x:-105,z:0,zone:"highway",neighbors:["w_hwy_ramp","hwy_sw","hwy_nw","track_t8"]},hwy_ne:{id:"hwy_ne",x:74,z:-74,zone:"highway",neighbors:["hwy_n","hwy_e"]},hwy_se:{id:"hwy_se",x:74,z:74,zone:"highway",neighbors:["hwy_e","hwy_s","track_t4"]},hwy_sw:{id:"hwy_sw",x:-74,z:74,zone:"highway",neighbors:["hwy_s","hwy_w"]},hwy_nw:{id:"hwy_nw",x:-74,z:-74,zone:"highway",neighbors:["hwy_w","hwy_n","track_t9"]},track_t1:{id:"track_t1",x:45,z:-55,zone:"circuit",neighbors:["track_start","track_t2","n_station"]},track_t2:{id:"track_t2",x:105,z:-25,zone:"circuit",neighbors:["track_t1","track_t3","e_station","hwy_e"]},track_t3:{id:"track_t3",x:105,z:45,zone:"circuit",neighbors:["track_t2","track_t4"]},track_t4:{id:"track_t4",x:75,z:105,zone:"circuit",neighbors:["track_t3","track_t5","hwy_se","hwy_s"]},track_t5:{id:"track_t5",x:0,z:75,zone:"circuit",neighbors:["track_t4","track_t6","s_ave_outer"]},track_t6:{id:"track_t6",x:0,z:24,zone:"circuit",neighbors:["track_t5","track_t7","plaza_s"]},track_t7:{id:"track_t7",x:-50,z:0,zone:"circuit",neighbors:["track_t6","track_t8","w_station"]},track_t8:{id:"track_t8",x:-105,z:-25,zone:"circuit",neighbors:["track_t7","track_t9","hwy_w"]},track_t9:{id:"track_t9",x:-75,z:-105,zone:"circuit",neighbors:["track_t8","track_t10","hwy_nw"]},track_t10:{id:"track_t10",x:-25,z:-100,zone:"circuit",neighbors:["track_t9","track_t11"]},track_t11:{id:"track_t11",x:0,z:-85,zone:"circuit",neighbors:["track_t10","track_start"]}},z0={qticket:"n_station",north:"n_station",laffeh:"e_station",east:"e_station",callcenter:"s_station",south:"s_station",kernel:"w_station",west:"w_station",hub:"hub_center",center:"hub_center",racetrack:"track_start",circuit:"track_start",track:"track_start",highway:"hwy_n"},sn={steer:0,throttle:0,brake:!1,active:!1};class G0{constructor(t,e={}){this.vehicle=t,this.callbacks=e,this.active=!1,this.targetDestination=null,this.targetNodeId=null,this.waypointPath=[],this.currentWaypointIndex=0,this.vehicle.onManualInput=()=>{this.active&&this.disengage("manual")}}findPath(t,e){if(t===e)return[Qe[t]];const n={},s={},r=new Set(Object.keys(Qe));for(const c of Object.keys(Qe))n[c]=1/0;for(n[t]=0;r.size>0;){let c=null,l=1/0;for(const u of r)n[u]<l&&(l=n[u],c=u);if(!c||l===1/0||c===e)break;r.delete(c);const h=Qe[c];for(const u of h.neighbors){if(!r.has(u))continue;const f=Qe[u];if(!f)continue;const p=Math.hypot(f.x-h.x,f.z-h.z),g=n[c]+p;g<n[u]&&(n[u]=g,s[u]=c)}}const o=[];let a=e;for(;a;)o.unshift(Qe[a]),a=s[a];return o}getClosestNavNode(t){let e="hub_center",n=1/0;const s=t.x,r=t.z;for(const o in Qe){const a=Qe[o],c=Math.hypot(s-a.x,r-a.z);c<n&&(n=c,e=o)}return e}navigate(t){const e=z0[t]||t;if(!Qe[e])return console.warn(`[Autopilot] Unknown destination: ${t}`),!1;const n=this.getClosestNavNode(this.vehicle.position),s=this.findPath(n,e);if(s.length===0)return console.warn(`[Autopilot] No path found from ${n} to ${e}`),!1;this.active=!0,this.targetDestination=t,this.targetNodeId=e,this.waypointPath=s,this.currentWaypointIndex=0;const r=s[0];return Math.hypot(this.vehicle.position.x-r.x,this.vehicle.position.z-r.z)<3&&s.length>1&&(this.currentWaypointIndex=1),this.callbacks.onStateChange&&this.callbacks.onStateChange({active:!0,destination:t,targetNode:Qe[e],path:this.waypointPath}),!0}disengage(t="manual"){if(!this.active)return;this.active=!1;const e=this.targetDestination;this.targetDestination=null,this.targetNodeId=null,this.waypointPath=[],this.currentWaypointIndex=0,this.vehicle.setAutopilotInput(null),this.callbacks.onDisengaged&&this.callbacks.onDisengaged(t,e),this.callbacks.onStateChange&&this.callbacks.onStateChange({active:!1,destination:null,targetNode:null,path:[]})}arrive(){const t=this.targetDestination,e=Qe[this.targetNodeId];this.active=!1,this.targetDestination=null,this.targetNodeId=null,this.waypointPath=[],this.currentWaypointIndex=0,sn.steer=0,sn.throttle=0,sn.brake=!0,sn.active=!1,this.vehicle.setAutopilotInput(sn),this.vehicle.speed=0,this.callbacks.onArrived&&this.callbacks.onArrived(t,e),this.callbacks.onStateChange&&this.callbacks.onStateChange({active:!1,destination:null,targetNode:null,path:[]})}update(t){if(!this.active||this.waypointPath.length===0)return;const e=this.waypointPath[this.currentWaypointIndex];if(!e){this.arrive();return}const n=this.vehicle.position.x,s=this.vehicle.position.z,r=e.x-n,o=e.z-s,a=Math.hypot(r,o),c=this.currentWaypointIndex===this.waypointPath.length-1;if(a<(c?2.8:3.8))if(c){this.arrive();return}else{this.currentWaypointIndex++;return}let u=Math.atan2(r,o)-this.vehicle.rotationY;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;const p=-Math.max(-1,Math.min(1,u*2.4)),g=Math.abs(u);let x=.68,m=!1;g>1.1?this.vehicle.speed>3.8?(m=!0,x=0):x=.35:g>.5?this.vehicle.speed>6.8?(m=!0,x=0):x=.52:c&&a<14?x=Math.max(.24,a/14*.5):x=.78,sn.steer=p,sn.throttle=x,sn.brake=m,sn.active=!0,this.vehicle.setAutopilotInput(sn)}}const rn=new T;class H0{constructor(t={}){this.callbacks=t,this.isOpenState=!1,this.currentLanguage="en",this.markersData=[{id:"qticket",nameKey:"destNorth",icon:"🏢",color:"#00f0ff",coords:new T(0,1.2,-52),badgeText:{en:"Financial District // QTicket HQ",ar:"المنطقة المالية // المقر الرئيسي"}},{id:"laffeh",nameKey:"destEast",icon:"🚚",color:"#ff6b35",coords:new T(52,1.2,0),badgeText:{en:"Logistics Hub // Laffeh Depot",ar:"المركز اللوجستي // مركز التوزيع"}},{id:"callcenter",nameKey:"destSouth",icon:"🎙️",color:"#00ff88",coords:new T(0,1.2,52),badgeText:{en:"Telecom Quarter // AI Spire",ar:"حي الاتصالات // برج الذكاء الاصطناعي"}},{id:"kernel",nameKey:"destWest",icon:"⚙️",color:"#ffaa00",coords:new T(-52,1.2,0),badgeText:{en:"Silicon Park // Tech Foundry",ar:"واحة السيليكون // مسبك التكنولوجيا"}},{id:"hub",nameKey:"destCentral",icon:"🏛️",color:"#bf55ec",coords:new T(0,1.2,0),badgeText:{en:"Innovation Plaza // Monolith",ar:"ساحة الابتكار // المسلة التقنية"}},{id:"racetrack",nameKey:"destRaceTrack",icon:"🏁",color:"#ff2255",coords:new T(0,1.2,-68),badgeText:{en:"City Street Circuit // Grand Prix",ar:"حلبة شوارع المدينة // الجائزة الكبرى"}}],this.containerEl=document.getElementById("map-overlay"),this.titleEl=document.getElementById("map-title"),this.subtitleEl=document.getElementById("map-subtitle"),this.closeBtn=document.getElementById("map-close-btn"),this.markersLayer=document.getElementById("map-markers-layer"),this.hintEl=document.getElementById("map-hint-instruction"),this.markerElements=new Map,this.playerMarkerEl=null,this.initDOM(),this.setupListeners()}initDOM(){this.markersLayer&&(this.markersLayer.innerHTML="",this.markersData.forEach(t=>{const e=document.createElement("div");e.className="radar-pin",e.dataset.id=t.id,e.style.setProperty("--pin-color",t.color);const n=t.badgeText[this.currentLanguage]||t.badgeText.en;e.innerHTML=`
        <div class="radar-pulse"></div>
        <div class="radar-content glass">
          <div class="radar-header">
            <span class="radar-icon">${t.icon}</span>
            <span class="radar-name">${ve.ui[t.nameKey][this.currentLanguage]}</span>
          </div>
          <div class="radar-badge" style="border-color: ${t.color}88; color: ${t.color}">
            ${n}
          </div>
          <div class="radar-action">
            <span class="radar-nav-icon">⚡</span>
            <span class="radar-action-text">${this.currentLanguage==="ar"?"انقر للتنقل الآلي":"Click to Autopilot"}</span>
          </div>
        </div>
      `,e.addEventListener("click",s=>{s.stopPropagation(),this.selectDestination(t.id)}),this.markersLayer.appendChild(e),this.markerElements.set(t.id,e)}),this.playerMarkerEl=document.createElement("div"),this.playerMarkerEl.className="player-radar-blip",this.playerMarkerEl.innerHTML=`
      <div class="blip-ring"></div>
      <div class="blip-dot"></div>
      <div class="blip-label">${this.currentLanguage==="ar"?"موقعك الحالي":"YOU ARE HERE"}</div>
    `,this.markersLayer.appendChild(this.playerMarkerEl))}setupListeners(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.containerEl&&this.containerEl.addEventListener("click",t=>{(t.target===this.containerEl||t.target===this.markersLayer)&&this.close()}),window.addEventListener("keydown",t=>{if(t.code==="KeyM"){if(["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;this.toggle()}else t.code==="Escape"&&this.isOpenState&&this.close()})}setLanguage(t){this.currentLanguage=t;const e=ve.ui;if(this.titleEl&&(this.titleEl.textContent=e.mapTitle[t]),this.subtitleEl&&(this.subtitleEl.textContent=e.mapSubtitle[t]),this.hintEl&&(this.hintEl.textContent=`${e.mapSubtitle[t]} // [M / ESC]`),this.markersData.forEach(n=>{const s=this.markerElements.get(n.id);if(s){const r=s.querySelector(".radar-name");r&&e[n.nameKey]&&(r.textContent=e[n.nameKey][t]);const o=s.querySelector(".radar-badge");o&&n.badgeText&&(o.textContent=n.badgeText[t]||n.badgeText.en);const a=s.querySelector(".radar-action-text");a&&(a.textContent=t==="ar"?"انقر للتنقل الآلي":"Click to Autopilot")}}),this.playerMarkerEl){const n=this.playerMarkerEl.querySelector(".blip-label");n&&(n.textContent=t==="ar"?"موقعك الحالي":"YOU ARE HERE")}}open(){this.isOpenState=!0,he.playClick(),this.containerEl&&(this.containerEl.classList.remove("hidden"),this.containerEl.classList.add("visible")),this.callbacks.onOpen&&this.callbacks.onOpen()}close(){this.isOpenState&&(this.isOpenState=!1,he.playClick(),this.containerEl&&(this.containerEl.classList.remove("visible"),this.containerEl.classList.add("hidden")),this.callbacks.onClose&&this.callbacks.onClose())}toggle(){this.isOpenState?this.close():this.open()}isOpen(){return this.isOpenState}selectDestination(t){he.playPodChime(),this.close(),this.callbacks.onSelectDestination&&this.callbacks.onSelectDestination(t)}update(t,e){if(!this.isOpenState||!t)return;const n=window.innerWidth/2,s=window.innerHeight/2;if(this.markersData.forEach(r=>{const o=this.markerElements.get(r.id);if(o)if(rn.copy(r.coords),rn.project(t),rn.z<1){const a=rn.x*n+n,c=-(rn.y*s)+s;o.style.transform=`translate(-50%, -50%) translate(${a}px, ${c}px)`,o.style.opacity="1",o.style.pointerEvents="auto"}else o.style.opacity="0",o.style.pointerEvents="none"}),this.playerMarkerEl&&e)if(rn.set(e.x,e.y+.8,e.z),rn.project(t),rn.z<1){const r=rn.x*n+n,o=-(rn.y*s)+s;this.playerMarkerEl.style.transform=`translate(-50%, -50%) translate(${r}px, ${o}px)`,this.playerMarkerEl.style.opacity="1"}else this.playerMarkerEl.style.opacity="0"}}const vn={type:"",data:null};class V0{constructor(){this.container=document.getElementById("canvas-container"),this.clock=new Xu,this.audioInitialized=!1,this.currentLanguage="en",this.isMapMode=!1,this.mapCameraPos=new T(0,145,15),this.mapCameraLookAt=new T(0,0,0),this.currentCameraLookAt=new T(0,0,0),this.sceneManager=new Rg(this.container),this.cityWorld=new Lg(this.sceneManager.scene),this.raceTrack=new Pg(this.sceneManager.scene),this.pavilions=new Ug(this.sceneManager.scene),this.monolith=new Ng(this.sceneManager.scene),this.waypoints=new Og(this.sceneManager.scene),this.ball=new Fg(this.sceneManager.scene),this.vehicle=new Gg(this.sceneManager.scene,{x:0,y:.35,z:-4,color:61695,name:"Pilot-1"}),this.vehicle.setRaceTrack(this.raceTrack),this.lapTimer=new Dg({onTick:t=>{this.hud.updateLapTimer(t)},onSector:t=>{he.playClick()},onLapFinished:t=>{this.hud.showLapFinishedBanner(t)}}),this.environment=new Bg(this.sceneManager,this.vehicle),this.modalManager=new F0,this.autopilot=new G0(this.vehicle,{onArrived:(t,e)=>{if(he.playPodChime(),this.hud.hideAutopilot(),e&&e.projectId){const n=ve.projects.find(s=>s.id===e.projectId);n&&this.modalManager.openProject(n)}},onDisengaged:(t,e)=>{this.hud.hideAutopilot()},onStateChange:t=>{t.active?this.hud.showAutopilot(t.destination):this.hud.hideAutopilot()}}),this.mapOverlay=new H0({onOpen:()=>{this.isMapMode=!0},onClose:()=>{this.isMapMode=!1},onSelectDestination:t=>{this.isMapMode=!1,this.autopilot.navigate(t)}}),this.hud=new B0({onLanguageChange:t=>this.onLanguageChange(t),onToggleEnvironment:()=>(this.environment.cycleMode(),this.environment.currentMode),onToggleMap:()=>{this.mapOverlay.toggle()},onCancelAutopilot:()=>{this.autopilot.disengage("manual")},onOpenProject:t=>this.modalManager.openProject(t),onOpenMonolith:t=>this.modalManager.openMonolith(t),onOpenWaypoint:t=>this.modalManager.openWaypoint(t)}),this.hud.setEnvironmentMode(this.environment.currentMode),this.touchControls=new k0(t=>{this.vehicle.setTouchInput(t)}),this.socketClient=new O0(this.sceneManager.scene,(t,e,n)=>{this.hud.updateMultiplayer(t,e,n),n&&n.color&&this.vehicle.setColor(new vt(n.color).getHex())}),this.setupAudioTrigger(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}onLanguageChange(t){this.currentLanguage=t,this.environment.setLanguage(t),this.pavilions.setLanguage(t),this.monolith.setLanguage(t),this.waypoints.setLanguage(t),this.modalManager.setLanguage(t),this.mapOverlay.setLanguage(t),this.hud.currentLanguage!==t&&this.hud.setLanguage(t)}setupAudioTrigger(){const t=()=>{this.audioInitialized||(he.init(),this.audioInitialized=!0),he.resumeContext()};window.addEventListener("keydown",t,{once:!0}),window.addEventListener("mousedown",t,{once:!0}),window.addEventListener("touchstart",t,{once:!0})}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();if(this.environment.update(t),this.autopilot.update(t),this.vehicle.update(t),this.isMapMode){const a=1-Math.exp(-5*t),c=this.sceneManager.camera;c.position.lerp(this.mapCameraPos,a),this.currentCameraLookAt.lerp(this.mapCameraLookAt,a),c.lookAt(this.currentCameraLookAt),Math.abs(c.fov-46)>.15&&(c.fov+=(46-c.fov)*a,c.updateProjectionMatrix()),this.mapOverlay.update(c,this.vehicle.position)}else this.vehicle.updateCamera(this.sceneManager.camera,t),this.currentCameraLookAt.copy(this.vehicle.position);this.ball.checkVehicleCollision(this.vehicle,a=>{he.playClick()}),this.ball.update(t),this.cityWorld.update(t,e,this.vehicle.position),this.raceTrack.update(e),this.pavilions.update(e),this.monolith.update(e),this.waypoints.update(e),this.lapTimer.update(this.vehicle.position),this.hud.updateDriftWidget(this.vehicle.getDriftData());let n=null;const s=this.pavilions.checkProximity(this.vehicle.position);if(s.activePavilion&&(vn.type="project",vn.data=s.activePavilion.project,n=vn,s.hasChanged&&(he.playPodChime(),this.modalManager.openProject(s.activePavilion.project))),!n){const a=this.monolith.checkProximity(this.vehicle.position);a.isNear&&(vn.type="monolith",vn.data=a.data,n=vn)}if(!n){const a=this.waypoints.checkProximity(this.vehicle.position);a.activeWaypoint&&(vn.type="waypoint",vn.data=a.activeWaypoint.data,n=vn,a.hasChanged&&(he.playClick(),this.modalManager.openWaypoint(a.activeWaypoint.data)))}this.hud.showPrompt(n),!n&&this.modalManager.isOpen()&&this.modalManager.close(),this.socketClient.sendMovement(this.vehicle.position.x,this.vehicle.position.y,this.vehicle.position.z,this.vehicle.rotationY,this.vehicle.speed,this.vehicle.steerAngle),this.socketClient.update(t);const r=this.vehicle.getSpeedKmH(),o=this.vehicle.getSpeedRatio();this.hud.updateSpeed(r,o),he.updateEngine(o),this.sceneManager.render()}}window.addEventListener("DOMContentLoaded",()=>{new V0});
