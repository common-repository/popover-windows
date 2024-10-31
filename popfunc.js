
function fillEditPopTheme(icon,showclose,drag,resize,scrolling,fadein,fadeout,overlayclose,shadow,titlefont,titlesize,titleweight,titlepadding,roundedcorners,windowpadding,pagebordersize,overlayopacity,closebutton){
	
	
			document.getElementById('icon').value=icon;
			document.getElementById('closeButton').value=closebutton;
			if(showclose==true){document.getElementById('showClose').checked='checked'};
	        if(drag==true){document.getElementById('drag').checked='checked'};
			if(resize==true){document.getElementById('resize').checked='checked'};
			if(scrolling==true){document.getElementById('scrolling').checked='checked'};
			if(fadein==true){document.getElementById('fadeIn').checked='checked'};
			if(fadeout==true){document.getElementById('fadeOut').checked='checked'};
			if(showclose==true){document.getElementById('showClose').checked='checked'};
			if(overlayclose==true){document.getElementById('overlayClose').checked='checked'};
			if(shadow==true){document.getElementById('shadow').checked='checked'};
			document.getElementById('titleFont').value=titlefont;
			document.getElementById('titleWeight').value=titleweight;
			document.getElementById('titleSize').value=titlesize;
			document.getElementById('titlePadding').value=titlepadding;
			document.getElementById('roundedCorners').value=roundedcorners;
			document.getElementById('windowPadding').value=windowpadding;
			document.getElementById('pageBorderSize').value=pagebordersize;
			document.getElementById('overlayOpacity').value=overlayopacity;
}

function fillEditPopWindow(theme,contenttype,launchwindow,cookie,showonpage,beforediv,addexlaunch,addexclose){
	
	      setSelected('theme',theme);
			if(launchwindow==true){document.getElementById('launchwindow').checked='checked';document.getElementById('lhtml').style.display='none';};
	        if(cookie=='Yes'){document.getElementById('addacookie').checked='checked'};
			getchecked('contenttype',contenttype);
			getchecked('showonpage',showonpage);
			getchecked('beforediv',beforediv);
			getchecked('addexlaunch',addexlaunch);
			getchecked('addexclose',addexclose);
}

function getSelected(name){
    var themeSelect = document.getElementById(name);

	 return themeSelect.options[themeSelect.selectedIndex].text;
}
function setSelected(name,text){

var el = document.getElementById(name);
for(var i=0; i<el.options.length; i++) {
  if ( el.options[i].text == text ) {
    el.selectedIndex = i;
    break;
  }
}
}


function getchecked(name,value){
	
	var values=value.split(',');
    for(var i=0; i<document.getElementsByName(name).length; i++){
	         current=document.getElementsByName(name).item(i);
		     for(var j=0; j<values.length; j++){
				  curr=values[j];
					 if(current.value==curr){
						 current.click();
						
					 }
			 }
	 
	 }


}

 function get_radio_value(id) {
            var inputs = document.getElementsByName(id);
            for (var i = 0; i < inputs.length; i++) {
              if (inputs[i].checked) {
                return inputs[i].value;
              }
            }
   }
   
   function get_checkbox_value(id) {
           if(document.getElementById(id).checked){
		       return true;
		   }else{
		       return false;
		   }
   }
   
  
   
function formpop(action){
	jQuery('html,body').scrollTop(0);
	    
		 if(action=='savetheme'){
		            
					 
					  var formpostrequest=new ajaxRequest();
						formpostrequest.onreadystatechange=function(){
						 if (formpostrequest.readyState==4){
						  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
							  
							  if(formpostrequest.responseText=="nameerror"){
								  document.getElementById('error_notice').innerHTML="<font color='#FF0000'>"+pop_obj.str10+".</font>";
							  }else{
								   document.getElementById('error_notice').innerHTML="";
							  document.getElementById('bannerid').value=formpostrequest.responseText;
							 
							   document.location='admin.php?page=popover_themes';
							  }
						  
						  }
						  else{
						   alert("An error has occured making the request")
						  }
						 }
						};
						var parameters="action=poptheme_submit&bannerid="+document.getElementById("bannerid").value+"&themename="+document.getElementById("themename").value+"&width="+document.getElementById("width").value+"&height="+document.getElementById("height").value+"&left="+document.getElementById("left").value+"&top="+document.getElementById("top").value+"&icon="+document.getElementById('icon').value+"&showclose="+get_checkbox_value('showClose')+"&drag="+get_checkbox_value('drag')+"&resize="+get_checkbox_value('resize')+"&scrolling="+get_checkbox_value('scrolling')+"&fadein="+get_checkbox_value('fadeIn')+"&fadeout="+get_checkbox_value('fadeOut')+"&overlayclose="+get_checkbox_value('overlayClose')+"&shadow="+get_checkbox_value('shadow')+"&shadowoptions="+document.getElementById("shadowOptions").value+"&zindex="+document.getElementById("zindex").value+"&titlefont="+document.getElementById('titleFont').value+"&titlesize="+document.getElementById('titleSize').value+"&titleweight="+document.getElementById('titleWeight').value+"&titlecolor="+document.getElementById('titleColor').value+"&titlepadding="+document.getElementById('titlePadding').value+"&roundedcorners="+document.getElementById('roundedCorners').value+"&windowcolor="+document.getElementById('windowColor').value+"&windowpadding="+document.getElementById('windowPadding').value+"&pagebordersize="+document.getElementById('pageBorderSize').value+"&pagebordercolor="+document.getElementById('pageBorderColor').value+"&overlaycolor="+document.getElementById('overlayColor').value+"&pagecolor="+document.getElementById('pageColor').value+"&overlayopacity="+document.getElementById('overlayOpacity').value+"&closebutton="+document.getElementById('closeButton').value;
						formpostrequest.open("POST", document.getElementById('adm_url').value+"/admin-ajax.php", true);
						formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						formpostrequest.send(parameters);
						
					
				      
				 }else  if(action=='savewindow'){
		             var popoverhtml="";
						 var pstr=document.getElementById('popoverhtml').value;
						 for(var i=0; i<pstr.length; i++){
						     popoverhtml+=pstr.charCodeAt(i)+'|'; 
						 }
						  var launchhtml="";
						 var lstr=document.getElementById('launchhtml').value;
						 for(var i=0; i<lstr.length; i++){
						     launchhtml+=lstr.charCodeAt(i)+'|'; 
						 }
					 
					 
					  var formpostrequest=new ajaxRequest();
						formpostrequest.onreadystatechange=function(){
						 if (formpostrequest.readyState==4){
						  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
							  
							  if(formpostrequest.responseText=="nameerror"){
								  document.getElementById('error_notice').innerHTML="<font color='#FF0000'>"+pop_obj.str11+".</font>";
							  }else{
								   document.getElementById('error_notice').innerHTML="";
							  document.getElementById('bannerid').value=formpostrequest.responseText;
							 
							   document.location='admin.php?page=pop_top';
							  }
						  
						  }
						  else{
						   alert("An error has occured making the request")
						  }
						 }
						};
						var parameters="action=pop_submit&bannerid="+document.getElementById("bannerid").value+"&theme="+getSelected("theme")+"&windowname="+document.getElementById("windowname").value+"&title="+document.getElementById("title").value+"&footer="+document.getElementById("footer").value+"&contenttype="+get_radio_value('contenttype')+"&popoverurl="+document.getElementById('popoverurl').value+"&popoverhtml="+popoverhtml+"&launchhtml="+launchhtml+"&launchwindow="+get_checkbox_value('launchwindow')+"&launchseconds="+document.getElementById('launchseconds').value+"&cookie="+document.getElementById('cookie').value+"&hours="+document.getElementById('hours').value+"&showonpage="+get_radio_value('showonpage')+"&pagetitle="+document.getElementById('pagetitle').value+"&divid="+document.getElementById('divid').value+"&beforediv="+get_radio_value('beforediv')+"&addexlaunch="+get_radio_value('addexlaunch')+"&addexclose="+get_radio_value('addexclose')+"&extralaunch="+document.getElementById('extralaunch').value+"&extraclose="+document.getElementById('extraclose').value;
						formpostrequest.open("POST", document.getElementById('adm_url').value+"/admin-ajax.php", true);
						formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						formpostrequest.send(parameters);
						
					
				      
				 }
	
}

function validate(textfield,email,numberfield)

{

	var valid;	

	var textv=true;

	var tfield=textfield.split('|');

	var nfield=numberfield.split('|');

	

	var currentf;
      
	for(var i=0; i<tfield.length; i++){

		
       
				currentf=document.getElementById(tfield[i]);
		
			
		
			   valid=checkText(currentf);
		
			   if(valid==false){
		
				 textv=false;
		
				
		
				document.getElementById(tfield[i]+"_notice").innerHTML="<font color='#FF0000'>"+pop_obj.str12+".</font>";
		
				 
		
			   }else{
		
			   
		
				document.getElementById(tfield[i]+"_notice").innerHTML="";
		
			   }
	

	}

	

	if(email!='0' && document.getElementById(email).value!=''){

		

	    valid=checkEmail(document.getElementById(email));

		if(valid==false){

		   document.getElementById(email+"_notice").innerHTML="<font color='#FF0000'>"+pop_obj.str13+"</font>";

			

		   textv=false;

		}else{

		  

			document.getElementById(email+"_notice").innerHTML="";

		}

	}

	if(numberfield!='0'){

		
for(var i=0; i<nfield.length; i++){

		
   
		currentf=document.getElementById(nfield[i]);

	
         
	   valid=checkNumber(currentf);

	   if(valid==false){

		 textv=false;

		if(document.getElementById(nfield[i]+"_notice").innerHTML==""){

		document.getElementById(nfield[i]+"_notice").innerHTML="<font color='#FF0000'>"+pop_obj.str14+".</font>";
		}
	     

	   }else{

	   
        if(document.getElementById(nfield[i]+"_notice").innerHTML==""){
		document.getElementById(nfield[i]+"_notice").innerHTML="";
		}

	   }
  

	}

	}


	

	return textv;

		

		

		



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

function checkNumber(field){

	

     if(isNaN(field.value)){


	   return false;

	 }else

	    return true;

}

function checkLimit(field,name,low,high){

	

    if(field.value<low || field.value>high){

	    alert("Please enter "+name+" between "+low+" and "+high);

		return false;

	}else

	    return true;

}



function checkText(field){

	

     if(field.value==''){

	   

		

		return false;

	 }else

	    return true;

}



function checkEmail(email){

     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){

		  

		   return false;

			

		}else

		   return true;

}

function GetXmlHttpObject()

{

  if (window.XMLHttpRequest)

  {
    

    // code for IE7+, Firefox, Chrome, Opera, Safari

    return new XMLHttpRequest();

  }

  if (window.ActiveXObject)

  {

    // code for IE6, IE5

    return new ActiveXObject("Microsoft.XMLHTTP");

  }

  return null;

}


function stateChanged()

{

  if (xmlhttp.readyState==4)

  {
                 if (navigator  &&  navigator.userAgent.match( /MSIE/i )){  
          setTBodyInnerHTML(document.getElementById(divId), xmlhttp.responseText);
             }else{   
            document.getElementById(divId).innerHTML=xmlhttp.responseText;   
	           }
                   //document.getElementById(divId).innerText=xmlhttp.responseText;


   

  }

}
