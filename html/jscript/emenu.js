/*Script copyrighted 2002, Andrew McCafferty, All rights reserved.*/
var eCO='',eFN;eFN=document.location;
var eV2=true,emtWin,eGSTR="",eV3=new Array(),eV4=0,eV0=false,eV1=false,eV5=0,eGI=new Array(),eV6="",eV7,eV8;
var eAGT=navigator.userAgent.toLowerCase(),ePI=parseInt(navigator.appVersion),
eIE=((eAGT.indexOf('msie')!=-1)&&(eAGT.indexOf('opera')==-1)),eNN=(navigator.appName=='Netscape'),
eMAC= (eAGT.indexOf('mac')!=-1),
eW3C=((eIE&&ePI>=4)||(eNN&&ePI>=5)),eMW3C=((eIE&&ePI>=4)||(eNN&&ePI>=5)),
eGB=!eMW3C,eIE50=(eAGT.indexOf('msie 5.0')!=-1),eDD=!((eNN&&eAGT.indexOf('6/6.0')!=-1)||(eIE&&eMAC));
if(document.images){};
function eMF(eV9,eV10,eV11,eV12){eGI[eV11]=eV9;if(eMW3C){var t1,t2,t3;if(eF1(eV10)){t1="onMouseOut=eF2('"+eV9 +"','"+eV10 +"',event) onMouseOver=eF3('"+eV9 +"','"+eV10 +"',event)";t2="display:None;position:absolute";t3=""}else{t1="";t2="display:None";t3="margin-left:9px"};eDW("<div id='a"+eV9+"' "+t1+" class='mainFolderBox"+eF4(eV10)+"' style='"+t3+"'>");eF5(eV9,eV10,eV11,eV12);eDW("<div class='subFolderPage' id='"+eV9 +"' style='"+t2+"'>")}else if(eGB){eDW("<p id='"+eV9 +"' class='mainFolderBox"+eF4(eV10)+"' style='margin-left:9px'>");eF5(eV9,eV10,eV11,eV12);eDW('</p>');if(eF6(eCO,eV9)){eV4=0;eV5=18}else{eV4=1}}}
function eSF(eV13,eV10,eV11,eV12){eGI[eV11]=eV13;if(eMW3C){var t1,t2,t3; if(eF1(eV10)){t1="onMouseOut=eF2('"+eV13 +"','"+eV10 +"',event) onMouseOver=eF3('"+eV13 +"','"+eV10 +"',event)";t2="display:None;position:absolute";t3=""}else{t1="";t2="display:None";t3="margin-left:9"};eDW("<div id='a"+eV13 +"' "+t1+" class='subFolderBox"+eF4(eV10)+"' style='"+t3+"'>");eF7(eV13,eV10,eV11,eV12);eDW("<div class='subFolderPage' id='"+eV13 +"' style='"+t2+"'>");}else if(eGB){if(eF6(eCO,eGF(eV13))){eDW("<p id='"+eV13 +"' class='subFolderBox"+eF4(eV10)+"' style='margin-left: "+eV5 +"px'>");eF7(eV13,eV10,eV11,eV12);eDW('</p>')};if(eF6(eCO,eV13)){eV4=0;eV5=eV5+9}else{eV4 =eV4 +1}};}
function eLK(eV14,eV10,eV11,eV15){eV14='b'+eV14;eGI[eV11]=eV14;var eV16;if(eV4==0){eV16 =eF8(eV10,eV15);if(eMW3C){var t1,t2;if(eF1(eV10)){t1="";t2="onMouseOver=eF3('"+eV14 +"','',event) id='"+eV14 +"'"}else{t1="margin-left:9px";t2=""}; eDW("<div "+t2+" class='linkBox"+eF4(eV10)+"' style='"+t1+"'>");eF9(eV14,eV10,eV11,eV16,eV15);eDW("</div>")}else if(eGB){eDW("<p id='"+eV14 +"' class='linkBox"+eF4(eV10)+"' style='margin-left:"+eV5 +"px'>");eF9(eV14,eV10,eV11,eV16,eV15);eDW('</p>')};}}
function eDE(){if(eMW3C){eDW("</div></div>")}else if(eGB){if(eV4==0){eV5=eV5-9}else{eV4=eV4-1}};}
function eF10(eV17,eV10,eV11,eV12){if(eGB&&eF6(eCO,eV17)){eV3[eV17]=true};var t1; if(eF1(eV10)){t1="//"}else{t1="eF11('"+eV17 +"','"+eV10 +"')"};eDW(eF12(eV17,eV11,"if(!eV3['"+eV17 +"']){"+eV12 +"}",t1,"mainFolderLine"+eF4(eV10),eV11)+eV11 +"</a>")}
function eF7(eV18,eV10,eV11,eV12){if(eGB&&eF6(eCO,eV18)){eV3[eV18]=true};var t1; if(eF1(eV10)){t1="//"}else{t1="eF11('"+eV18 +"','"+eV10 +"')"};eDW(eF12(eV18,eV11,"if(!eV3['"+eV18 +"']){"+eV12 +"}",t1,"subFolderLine"+eF4(eV10),eV11)+eV11 +"</a>")}
function eF9(eV14,eV10,eV11,eV16,eV15){var eV19,eV20='eF13(0,0);'; if(eF14(eV10,'j')){eV20=''};if(!eF14(eV10,'nl')){eV19='linkLine';eDW(eF12(eV14,eV11,"{"+eV20+""+eV16+";return false}","//",eV19+eF4(eV10),eV15))};eDW(eV11);if(!eF14(eV10,'nl')){eDW("</A>")};}
function eF12(eV21,eV11,ocjs,hrck,cn,eV22){return "<a onclick=\""+ocjs+"\" href=\"javascript:"+hrck+"\" onMouseOver=\""+eF15(cn,eV22)+";return true\" onMouseOut=\""+eF16(cn)+";return true\" class='"+cn+"'>"}
function eF15(cn,eV23){return "window.status='"+eF17(eV23)+"';if(eW3C){this.className='"+cn+"MouseOver'}"}
function eF16(cn){return "window.status='';if(eW3C){this.className='"+cn+"'}"}
function eF18(eV21,gif,h,w){return "<IMG border='0' src='"+gif+"' width='"+w+"' height='"+h+"' "+eF19(eV21,"i")+">"}
function eF11(eV14,eV10){if(!eF1(eV10)){eUDC(eV14)};eF20(eV14)}
function eF20(eV14){if(eMW3C){if(eV3[eV14]){eV3[eV14] = false;eGO(eV14).style.display = "none"}else{eV3[eV14] = true;eGO(eV14).style.display = ""};}else if(eGB){eF21();window.location.href=eFN};}
function eF5(eV9,eV10,eV11,js){if(eF14(eV10,'nf')){js=eF8(eV10,js);eF9(eV9,eV10,eV11,js,eV11)}else{eF10(eV9,eV10,eV11,js)}}
function eF22(eV17){return eV17!="out"&&eV17.indexOf("d",eV17.indexOf("d")+1) == -1}
function eGO(eV13){if (document.getElementById){return eval(document.getElementById(eV13))}else{return eval(document.all(eV13))}}
function eOS(eV24){if(eGB){if(!eV3[eV24]){eF20(eV24)}}else{var start=0;start = eV24.indexOf("d",start) + 1;start = eV24.indexOf("d",start) + 1;while(start > 0){if(!eV3[eV24.substring(0,start-1)]){eF20(eV24.substring(0,start-1))};start = eV24.indexOf("d",start) + 1};if(!eV3[eV24]){eF20(eV24)}}}
function eCS(eV24){if(eV3[eV24]){eF20(eV24)}}
function eGF(eV25){if(eV25.substring(0,1)=='b'){eV25=eV25.slice(1)};var j, p=eV25.lastIndexOf('d'); j = eV25.substring(0,p).lastIndexOf('d');if(j==-1){return ""}else{return eV25.substring(0,p)}}
function eUDC(eV14){if(eGB||eV2){if(eF6(eCO,eV14)){eF23(eV14)}else{eF24(eV14)};eCO=eF25('activeSales')}}
function eDW(str){eGSTR += str}
function eF8(eF26,eV15){if(!eF14(eF26,'t')){eV15=cnv(eV15,eF26)};if(eF14(eF26,'i')){return eF27(eV15)}else if(eF14(eF26,'r')){return eF28(eV15)}else if(eF14(eF26,'e')){return eF29(eV15)}else if(eF14(eF26,'p')){return eF30(eV15)}else if(eF14(eF26,'j')){return eV15}}
function eF31(eV26,bool){if(bool){if(eV3[eV26]){return ""}else{return ""}}else{if(eV3[eV26]){return ""}else{return ""}}}
function eF27(eV27){return "window.location.href = '" + eV27 + "'"}
function eF28(eV27){if(parent.emtcf){return "parent.emtcf.location.href = '" + eV27 + "'"}else{return eF29(eV27)}}
function eF30(eV27){return "parent.location.href = '" + eV27 + "'"}
function eF29(eV27){return "emtWin=window.open('"+eV27+"')"}
function eF19(eV28,ia){if(eV28==""){return ""}else{return "id='"+eV28+ia+"'"}}
function eF14(k,b){if(k.indexOf(b)>-1){return true};return false}
function eF17(eV11){if(eF14(eV11,"'")||eF14(eV11,"</")){return ""};return eV11}
function eF32(eV29){window.status=eV29;return true}
function eF24(eV30){var nc='',start=0,end;end=eCO.indexOf('x',start);while(end>0){if(!eF6(eV30,eCO.substring(start,end))){nc=nc+eCO.substring(start,end)+'x'};start=end+1;end=eCO.indexOf('x',start)};eF33('activeSales',nc+eV30+'x')}
function eF23(eV30){var nc='',start=0,end;end=eCO.indexOf('x',start);while(end>0){if(!eF6(eCO.substring(start,end+1),eV30)){nc=nc+eCO.substring(start,end)+'x'};start=end+1;end=eCO.indexOf('x',start)};if(eGF(eV30)!=''){nc=nc+eGF(eV30)+'x'};if(nc==''){nc='none'};eF33('activeSales',nc)}
function eF6(eV31,eV26){if(eF14(eV31,eV26+'d')||eF14(eV31,eV26+'x')){return true}else{return false}}
function eF34(){var t,start=0,end;end=eCO.indexOf('x',start);if(eW3C){t=eGO("et1d1").id};while(end>0){eOS(eCO.substring(start,end));start=end+1;end=eCO.indexOf('x',start)};}
function eF25(eV32){var cs=document.cookie,s=-1,m,e;while(s<cs.length){m=cs.indexOf('=',s);e=cs.indexOf(';',m);if(e==-1){e=cs.length};if(cs.substring(s+1,m)==eV32){return cs.substring(m+1,e)};s=cs.indexOf(';',s+1);if(s==-1){s=cs.length};s=s+1};return '0'}
function eF33(eV32,eV33){document.cookie=eV32+'='+eV33+';path=/'}
function eF21(){var t=0,l=0;if(eV0){l=window.pageXOffset;t=window.pageYOffset}else if(eV1){t=document.body.scrollTop;y=document.body.scrollLeft};eF13(l,t)}
function eF13(l,t){eF33('activeSalesLeft',l);eF33('activeSalesTop',t)}
function eF0(){var l,t;l=eF25('activeSalesLeft');t=eF25('activeSalesTop');if(eV0){window.scroll(l,t)}else if(eV1){document.body.scrollLeft=l;document.body.scrollTop=t}}
function eF35(){eF33('activeSales','t');;if(eF25('activeSales')=='t'){return true};return false}
function eF4(eV10){var t1; t1=eV10.indexOf('cn');if(t1>-1){return eV10.substring(t1+2,t1+4)} else {return ''}}
function eF1(eV10){if(eMW3C&&eDD&&eF14(eV10,"dd")){return true};return false}
function eF36(eV9,eV10){var eV34,eV35,eV36,eV37,eV38,eV39=false,eV40=false,eV41=0;if(eF14(eV10,"to")){eV39=true}; if(eF14(eV10,"le")){eV40=true};eV34=eV10.indexOf('.');if(eV34==-1){eV41 =1}else{eV41=eV10.substring(eV34,eV34+3)};eV37= eGO("a"+eV9);eV38= eGO(eV9);for(var i=0;i<4;i=i+1){eV36=eF37(eV37); eV35=eF38(eV37);if(eV39){eV35=eV35-eV38.offsetHeight;if(eV41==1){eV35=eV35+eV37.offsetHeight}}else if(!eV39){if(eV41!=1){eV35=eV35+eV37.offsetHeight}}if(!eV40){eV36=eV36+(eV37.offsetWidth*eV41)}else if(eV40){eV36=eV36-(eV38.offsetWidth*eV41)};if(eIE50){eV36=eV36-6};eV38.style.left =eV36+"px";eV38.style.top =eV35 + "px"}}
function eF38(eV37){var t=0;while(eV37){if(eV37.style.position=='absolute'){return t};t=t+eV37.offsetTop;eV37=eV37.offsetParent};return t}
function eF37(eV37){var t=0;while(eV37){if(eV37.style.position=='absolute'){return t};t=t+eV37.offsetLeft;eV37=eV37.offsetParent}return t}
function eF3(eV9,eV10,evt){if(window.event){window.event.cancelBubble=true}else{evt.cancelBubble=true};if(!eF14(eV10,'nf')){if(eV8){clearTimeout(eV8)};if(eV7){clearTimeout(eV7)};eV7 =setTimeout("eF39('"+eV9 +"','"+eV10 +"')",400)}}
function eF2(eV9,eV10,evt){if(window.event){window.event.cancelBubble =true}else{evt.cancelBubble=true};if(!eF14(eV10,'nf')){if(eV7){clearTimeout(eV7)};eV7=setTimeout("eF40()",400)}}
function eF39(eV9,eV10){if(eV9.substring(0,1)=='b'){eV9=eGF(eV9.slice(1));while(!eF14(eV9,eV6)){eF20(eV6);eV6 = eGF(eV6);}}else if(eV6==""){eF20(eV9);eF36(eV9,eV10);eV6 =eV9;}else if(eV6==eV9){eF20(eV9);eV6=eGF(eV9)}else if(eF14(eV9,eV6+'d')){eF20(eV9);eF36(eV9,eV10);eV6=eV9;}else if(eF14(eV6,eV9+'d')){while(eF14(eV6,eV9+'d')){eF20(eV6);eV6=eGF(eV6)}}else{eF20(eV6);eV6=eGF(eV6);while(!eF14(eV9,eV6+'d')){eF20(eV6);eV6=eGF(eV6);}if(!eV3[eV9]){eF20(eV9);eF36(eV9,eV10);eV6 =eV9}}}
function eF40(){eV8=setTimeout("timeOut()",400)}
function timeOut(){ while(eV6!=""){eF20(eV6);eV6=eGF(eV6);}}
function cnv(ju,k){return ju}
if(eF25('activeSales')!='0'){if(eGB||eV2){eCO=eF25('activeSales')}};
if(eV2&&!eF35()){eV2=false};
if(eGB&&!eF35()){alert('For the tree menu to work properly, you must turn on cookies')};
if(eGB||eV2){eF33('activeSales',eCO)};
eDW("<TABLE border='0' cellspacing='0' cellpadding='0'>");
eDW("<TR>");
eDW("<TD class='menuTreeBox'  width='90' nowrap valign='top'>");
if(eNN&&ePI==4){eDW("<div style='margin-left:1px'>")};
eMF("e1d1","dd.00","<NOBR>ABOUT US</NOBR>","asActiveSales.html");
//eLK("e1d1d1","ddi","<NOBR></NOBR>","asActiveSales.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e2d2","dd.00","<NOBR>HRMS</NOBR>","");
eLK("e2d2d1","ddi","<NOBR>Add Employee</NOBR>","asAddEmp.php");
//eLK("e2d2d2","ddi","<NOBR>Update Employee</NOBR>","asAddEmp.html");
//eLK("e2d2d2","ddi","<NOBR>Delete Employee</NOBR>","asAddEmp.html");
eLK("e2d2d2","ddi","<NOBR>View Employee</NOBR>","asViewEmp.php");
eLK("e2d2d3","ddi","<NOBR>Delete Employee</NOBR>","asViewDeleteEmp.php");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e3d3","dd.00","<NOBR>SUPPLIER</NOBR>","");
eLK("e3d3d1","ddi","<NOBR>Add Supplier</NOBR>","asAddSupplier.php");
eLK("e3d3d2","ddi","<NOBR>View Supplier</NOBR>","asViewSupplier.php");
eLK("e3d3d3","ddi","<NOBR>Delete Supplier</NOBR>","asViewSupplier1.php");
//eLK("e3d3d1","ddi","<NOBR>View Id</NOBR>","asViewClient.html");
//eLK("e3d3d2","ddi","<NOBR>Add Id</NOBR>","asAddClient.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e4d4","dd.00","<NOBR>CUSTOMER</NOBR>","");
eLK("e4d4d1","ddi","<NOBR>Add customer</NOBR>","asAddCustomer.php");
eLK("e4d4d2","ddi","<NOBR>View customer</NOBR>","asViewCus.php");
eLK("e4d4d3","ddi","<NOBR>Delete customer</NOBR>","asViewDeleteCus.php");
//eLK("e4d4d3","ddi","<NOBR>Update customer</NOBR>","asSearchVendor.html");
//eLK("e4d4d4","ddi","<NOBR>Delete customer</NOBR>","asSearchVendor.html");
//eLK("e4d4d1","ddi","<NOBR>List Name</NOBR>","asViewVendor.html");
//eLK("e4d4d2","ddi","<NOBR>Add Name</NOBR>","asAddVendor.html");
//eLK("e4d4d2","ddi","<NOBR>Search Name</NOBR>","asSearchVendor.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e5d5","dd.00","<NOBR>PRODUCT</NOBR>","");
eLK("e5d5d1","ddi","<NOBR>Add Product</NOBR>","asAddProduct.php");
eLK("e5d5d2","ddi","<NOBR>View Product</NOBR>","asViewProduct.php");
eLK("e5d5d3","ddi","<NOBR>Delete Product</NOBR>","asViewDeleteProduct.php");
//eLK("e5d5d3","ddi","<NOBR>Update Product</NOBR>","asAddProject.html");
//eLK("e5d5d4","ddi","<NOBR>Delete Product</NOBR>","asAddProject.html");
//eLK("e5d5d1","ddi","<NOBR>List Product</NOBR>","asViewProject.html");
//eLK("e5d5d2","ddi","<NOBR>Add Product</NOBR>","asAddProject.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e6d6","dd.00","<NOBR>MATERIAL INWARD</NOBR>","");
eLK("e6d6d1","ddi","<NOBR>Inward Product Details</NOBR>","asInward.php");
//eLK("e6d6d1","ddi","<NOBR>Eligible Product</NOBR>","asViewSelVendor.html");
//eLK("e6d6d3","ddi","<NOBR>Purchase Order</NOBR>","asViewShortVendor.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("e7d7","dd.00","<NOBR>OUTWARD</NOBR>","");
eLK("e7d7d1","ddi","<NOBR>Outward Product Details</NOBR>","asOutward.php");
//eLK("e7d7d1","ddi","<NOBR>List Reports</NOBR>","asReports.html");
eDE();
eDW("</TD>");
eDW("<TD class='menuTreeBox'  width='90' valign='top'>");
eMF("et8d8","dd.00","<NOBR>INVENTORY STATUS</NOBR>","");
eLK("et8d8d1","ddwit","<NOBR>View Report</NOBR>","asReports.html");
//eLK("et1d1d1","ddwit","<NOBR>Home Page</NOBR>","asActiveSales.html");

eDE();

if(eNN&&ePI==4){eDW("</div>")};
eDW("</TD>");
eDW("</TR>");
eDW("</TABLE>");
document.write(eGSTR);eGSTR="";
if(window.pageXOffset==0){eV0=true}else if(eIE){eV1=true};
if(eGB){eF0()}
