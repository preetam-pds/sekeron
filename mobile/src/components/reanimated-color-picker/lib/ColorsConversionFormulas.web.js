var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.RGB_HSV=exports.RGB_FORMAT=exports.RGBA_FORMAT=exports.HSV_HSL=exports.HSV_FORMAT=exports.HSVA_FORMAT=exports.HSL_RGB=exports.HSL_HSV=exports.HSL_HEX=exports.HSL_FORMAT=exports.HSLA_FORMAT=exports.HEX_RGB=exports.HEX_HSV=exports.HEX_FORMAT=exports.CONTRAST_RATIO=exports.COLOR_HSVA=exports.COLOR_HEX=exports.ALPHA_HEX=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _NamedColors=_interopRequireDefault(require("./NamedColors"));var HSL_RGB=function HSL_RGB(h,s,l){s/=100;l/=100;var k=function k(n){return(n+h/30)%12;};var a=s*Math.min(l,1-l);var f=function f(n){return l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));};return{r:Math.round(255*f(0)),g:Math.round(255*f(8)),b:Math.round(255*f(4))};};exports.HSL_RGB=HSL_RGB;var ALPHA_HEX=function ALPHA_HEX(number){var op=Math.floor(number/100*255);var hex=op.toString(16);return op<16?'0'+hex:hex;};exports.ALPHA_HEX=ALPHA_HEX;var HSL_HEX=function HSL_HEX(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100;var f=function f(n){var k=(n+h/30)%12;var color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,'0');};return"#"+f(0)+f(8)+f(4);};exports.HSL_HEX=HSL_HEX;var HSV_HSL=function HSV_HSL(h,s,b){s/=100;b/=100;var l=(2-s)*b/2;if(l!==0)s=Math.round((l===1?0:l<0.5?s*b/(l*2):s*b/(2-l*2))*100);l=Math.round(l*100);return{h:h,s:s,l:l};};exports.HSV_HSL=HSV_HSL;var RGB_HSV=function RGB_HSV(r,g,b){var rabs,gabs,babs,rr,gg,bb,h,s,v,diff,diffc,percentRoundFn;rabs=r/255;gabs=g/255;babs=b/255;v=Math.max(rabs,gabs,babs),diff=v-Math.min(rabs,gabs,babs);diffc=function diffc(c){return(v-c)/6/diff+1/2;};percentRoundFn=function percentRoundFn(num){return Math.round(num*100)/100;};if(diff===0){h=s=0;}else{s=diff/v;rr=diffc(rabs);gg=diffc(gabs);bb=diffc(babs);if(rabs===v){h=bb-gg;}else if(gabs===v){h=1/3+rr-bb;}else if(babs===v){h=2/3+gg-rr;}if(h<0){h+=1;}else if(h>1){h-=1;}}return{h:Math.round(h*360),s:percentRoundFn(s*100),b:percentRoundFn(v*100)};};exports.RGB_HSV=RGB_HSV;var HEX_RGB=function HEX_RGB(hex){var isValidHex=function isValidHex(h){return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(h);};var getChunksFromString=function getChunksFromString(st,chunkSize){return st.match(new RegExp(".{"+chunkSize+"}",'g'));};var convertHexUnitTo256=function convertHexUnitTo256(hexStr){return parseInt(hexStr.repeat(2/hexStr.length),16);};if(!isValidHex(hex))throw new Error('Invalid HEX');var chunkSize=Math.floor((hex.length-1)/3);var hexArr=getChunksFromString(hex.slice(1),chunkSize);var _hexArr$map=hexArr.map(convertHexUnitTo256),_hexArr$map2=(0,_slicedToArray2.default)(_hexArr$map,4),r=_hexArr$map2[0],g=_hexArr$map2[1],b=_hexArr$map2[2],a=_hexArr$map2[3];var alpha=Math.round(a/255*100);return{r:r,g:g,b:b,a:!isNaN(alpha)?alpha:100};};exports.HEX_RGB=HEX_RGB;var HEX_HSV=function HEX_HSV(hex){var _HEX_RGB=HEX_RGB(hex),r=_HEX_RGB.r,g=_HEX_RGB.g,b=_HEX_RGB.b,a=_HEX_RGB.a;return(0,_extends2.default)({},RGB_HSV(r,g,b),{a:a});};exports.HEX_HSV=HEX_HSV;var HSL_HSV=function HSL_HSV(h,s,l){var _HSL_RGB=HSL_RGB(h,s,l),r=_HSL_RGB.r,g=_HSL_RGB.g,b=_HSL_RGB.b;return RGB_HSV(r,g,b);};exports.HSL_HSV=HSL_HSV;var COLOR_HSVA=function COLOR_HSVA(colorStr){colorStr=colorStr.toLowerCase().trim();var isRgba=colorStr.startsWith('rgba');var isRgb=colorStr.startsWith('rgb');var isHex=colorStr.startsWith('#');var isNamedColor=_NamedColors.default.hasOwnProperty(colorStr);var isHsla=colorStr.startsWith('hsla');var isHsl=colorStr.startsWith('hsl');var isHsva=colorStr.startsWith('hsva');var isHsv=colorStr.startsWith('hsv');var regex=/\(([^)]+)/;if(isRgba){var _colorStr$match;var match=(_colorStr$match=colorStr.match(regex))==null?void 0:_colorStr$match[1];if(!match)throw new Error('Invalid RGBA value');var colorValues=match.split(',');if(colorValues.length!==4)throw new Error('Invalid RGBA value');var _colorValues$map=colorValues.map(function(v){return+v;}),_colorValues$map2=(0,_slicedToArray2.default)(_colorValues$map,4),r=_colorValues$map2[0],g=_colorValues$map2[1],b=_colorValues$map2[2],a=_colorValues$map2[3];if(isNaN(r)||isNaN(g)||isNaN(b)||isNaN(a))throw new Error('Invalid RGBA value');return(0,_extends2.default)({},RGB_HSV(r,g,b),{a:Math.round(a*100)});}if(isRgb){var _colorStr$match2;var _match=(_colorStr$match2=colorStr.match(regex))==null?void 0:_colorStr$match2[1];if(!_match)throw new Error('Invalid RGB value');var _colorValues=_match.split(',');if(_colorValues.length!==3)throw new Error('Invalid RGB value');var _colorValues$map3=_colorValues.map(function(v){return+v;}),_colorValues$map4=(0,_slicedToArray2.default)(_colorValues$map3,3),_r=_colorValues$map4[0],_g=_colorValues$map4[1],_b=_colorValues$map4[2];if(isNaN(_r)||isNaN(_g)||isNaN(_b))throw new Error('Invalid RGB value');return(0,_extends2.default)({},RGB_HSV(_r,_g,_b),{a:100});}if(isHex)return HEX_HSV(colorStr);if(isNamedColor)return HEX_HSV(_NamedColors.default[colorStr]);if(isHsla){var _colorStr$match3;var _match2=(_colorStr$match3=colorStr.match(regex))==null?void 0:_colorStr$match3[1];if(!_match2)throw new Error('Invalid HSLA value');var _colorValues2=_match2.split(',');if(_colorValues2.length!==4)throw new Error('Invalid HSLA value');var _colorValues2$map=_colorValues2.map(function(v){return+v.replace('%','').replace('deg','');}),_colorValues2$map2=(0,_slicedToArray2.default)(_colorValues2$map,4),h=_colorValues2$map2[0],s=_colorValues2$map2[1],l=_colorValues2$map2[2],_a=_colorValues2$map2[3];if(isNaN(h)||isNaN(s)||isNaN(l)||isNaN(_a))throw new Error('Invalid HSLA value');return(0,_extends2.default)({},HSL_HSV(h,s,l),{a:Math.round(_a*100)});}if(isHsl){var _colorStr$match4;var _match3=(_colorStr$match4=colorStr.match(regex))==null?void 0:_colorStr$match4[1];if(!_match3)throw new Error('Invalid HSL value');var _colorValues3=_match3.split(',');if(_colorValues3.length!==3)throw new Error('Invalid HSL value');var _colorValues3$map=_colorValues3.map(function(v){return+v.replace('%','').replace('deg','');}),_colorValues3$map2=(0,_slicedToArray2.default)(_colorValues3$map,3),_h=_colorValues3$map2[0],_s=_colorValues3$map2[1],_l=_colorValues3$map2[2];if(isNaN(_h)||isNaN(_s)||isNaN(_l))throw new Error('Invalid HSL value');return(0,_extends2.default)({},HSL_HSV(_h,_s,_l),{a:100});}if(isHsva){var _colorStr$match5;var _match4=(_colorStr$match5=colorStr.match(regex))==null?void 0:_colorStr$match5[1];if(!_match4)throw new Error('Invalid HSVA value');var _colorValues4=_match4.split(',');if(_colorValues4.length!==4)throw new Error('Invalid HSVA value');var _colorValues4$map=_colorValues4.map(function(n){return+n.replace('%','').replace('deg','');}),_colorValues4$map2=(0,_slicedToArray2.default)(_colorValues4$map,4),_h2=_colorValues4$map2[0],_s2=_colorValues4$map2[1],_b2=_colorValues4$map2[2],_a2=_colorValues4$map2[3];if(isNaN(_h2)||isNaN(_s2)||isNaN(_b2)||isNaN(_a2))throw new Error('Invalid HSVA value');return{h:_h2,s:_s2,b:_b2,a:Math.round(_a2*100)};}if(isHsv){var _colorStr$match6;var _match5=(_colorStr$match6=colorStr.match(regex))==null?void 0:_colorStr$match6[1];if(!_match5)throw new Error('Invalid HSV value');var _colorValues5=_match5.split(',');if(_colorValues5.length!==3)throw new Error('Invalid HSV value');var _colorValues5$map=_colorValues5.map(function(n){return+n.replace('%','').replace('deg','');}),_colorValues5$map2=(0,_slicedToArray2.default)(_colorValues5$map,3),_h3=_colorValues5$map2[0],_s3=_colorValues5$map2[1],_b3=_colorValues5$map2[2];if(isNaN(_h3)||isNaN(_s3)||isNaN(_b3))throw new Error('Invalid HSV value');return{h:_h3,s:_s3,b:_b3,a:100};}throw new Error('Invalid color');};exports.COLOR_HSVA=COLOR_HSVA;var COLOR_HEX=function COLOR_HEX(color){var isValidHex=/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(color);if(isValidHex)return color;var _COLOR_HSVA=COLOR_HSVA(color),h=_COLOR_HSVA.h,s=_COLOR_HSVA.s,b=_COLOR_HSVA.b;var hsl=HSV_HSL(h,s,b);return HSL_HEX(hsl.h,hsl.s,hsl.l);};exports.COLOR_HEX=COLOR_HEX;var luminanceRGB=function luminanceRGB(r,g,b){var a=[r,g,b].map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);});return a[0]*0.2126+a[1]*0.7152+a[2]*0.0722;};var luminanceHEX=function luminanceHEX(hex){var _HEX_RGB2=HEX_RGB(hex),r=_HEX_RGB2.r,g=_HEX_RGB2.g,b=_HEX_RGB2.b;var a=[r,g,b].map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);});return a[0]*0.2126+a[1]*0.7152+a[2]*0.0722;};var CONTRAST_RATIO=function CONTRAST_RATIO(_ref,hex){var h=_ref.h,s=_ref.s,b=_ref.b;var hsl=HSV_HSL(h,s,b),_HSL_RGB2=HSL_RGB(hsl.h,hsl.s,hsl.l),red=_HSL_RGB2.r,green=_HSL_RGB2.g,blue=_HSL_RGB2.b,lum1=luminanceRGB(red,green,blue),lum2=luminanceHEX(hex),brightest=Math.max(lum1,lum2),darkest=Math.min(lum1,lum2);return+((brightest+0.05)/(darkest+0.05)).toFixed(1);};exports.CONTRAST_RATIO=CONTRAST_RATIO;var HSL_FORMAT=function HSL_FORMAT(color){var _HSV_HSL=HSV_HSL(color.h,color.s,color.b),h=_HSV_HSL.h,s=_HSV_HSL.s,l=_HSV_HSL.l;return"hsl("+h+", "+s+"%, "+l+"%)";};exports.HSL_FORMAT=HSL_FORMAT;var HSLA_FORMAT=function HSLA_FORMAT(color){var _HSV_HSL2=HSV_HSL(color.h,color.s,color.b),h=_HSV_HSL2.h,s=_HSV_HSL2.s,l=_HSV_HSL2.l;return"hsla("+h+", "+s+"%, "+l+"%, "+color.a/100+")";};exports.HSLA_FORMAT=HSLA_FORMAT;var HEX_FORMAT=function HEX_FORMAT(color){var _HSV_HSL3=HSV_HSL(color.h,color.s,color.b),h=_HSV_HSL3.h,s=_HSV_HSL3.s,l=_HSV_HSL3.l;return HSL_HEX(h,s,l)+(color.a===100?'':ALPHA_HEX(color.a));};exports.HEX_FORMAT=HEX_FORMAT;var RGB_FORMAT=function RGB_FORMAT(color){var _HSV_HSL4=HSV_HSL(color.h,color.s,color.b),h=_HSV_HSL4.h,s=_HSV_HSL4.s,l=_HSV_HSL4.l;var _HSL_RGB3=HSL_RGB(h,s,l),r=_HSL_RGB3.r,g=_HSL_RGB3.g,b=_HSL_RGB3.b;return"rgb("+r+", "+g+", "+b+")";};exports.RGB_FORMAT=RGB_FORMAT;var RGBA_FORMAT=function RGBA_FORMAT(color){var _HSV_HSL5=HSV_HSL(color.h,color.s,color.b),h=_HSV_HSL5.h,s=_HSV_HSL5.s,l=_HSV_HSL5.l;var _HSL_RGB4=HSL_RGB(h,s,l),r=_HSL_RGB4.r,g=_HSL_RGB4.g,b=_HSL_RGB4.b;return"rgba("+r+", "+g+", "+b+", "+color.a/100+")";};exports.RGBA_FORMAT=RGBA_FORMAT;var HSV_FORMAT=function HSV_FORMAT(color){return"hsv("+Math.round(color.h)+", "+Math.round(color.s)+"%, "+Math.round(color.b)+"%)";};exports.HSV_FORMAT=HSV_FORMAT;var HSVA_FORMAT=function HSVA_FORMAT(color){return"hsva("+Math.round(color.h)+", "+Math.round(color.s)+"%, "+Math.round(color.b)+"%, "+color.a/100+")";};exports.HSVA_FORMAT=HSVA_FORMAT;