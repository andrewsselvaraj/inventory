
function validateSupplierid(sid) {
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (sid == "") {
        
        alert ("Supplier ID is required!");
		return false;
    }  
    
    return true;
}


function validateSuppliername(supname) {
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (supname == "") {
        
        alert ("Suppliername field is empty!");
		return false;
    }  if ((supname.length < 5) || (supname.length > 15)) {

		alert ("The Suppliername is too short");
        return false;
    }  if (illegalChars.test(supname)) {
        
		alert ("Invalid Suppliername");
		return false;
    } 
    return true;
}



function validateSuppliertype(suptype) {
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (suptype == "") {
        
        alert ("You didn't enter a Supplier type");
		return false;
    }  
    if (illegalChars.test(suptype)) {
        
		alert ("invalid supplier type");
		return false;
    } 
    return true;
}

function validateSupplierdetail(supdetail) {
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (supdetail == "") {
        
        alert ("You didn't enter a Supplier Detail");
		return false;
    }  
    if ((supdetail.length < 5) || (supdetail.length > 50)) {

		alert ("The Supplier Detail is too short");
        return false;
    }
    return true;
}

function EmailValid(email)
	{
		if(email=="")
		{
		alert("Email is required field!")
		return false
		}
		len = email.length
		
		if((email.charAt(1)=='@')||(email.charAt(1)=='.'))
		{
		alert("Invalid Email Please try again!")
		return false
		}
		if((email.charAt(len-2)=='@')||(email.charAt(len-2)=='.'))
		{
		alert("Invalid Email Please try again!")
		return false
		}
		
				

		count=0
		dotcount=0
	for (i=0; i< email.length; i++)
		{
			if(email.charAt(i)=='@')
			count++
			if(email.charAt(i)=='.')
			dotcount++
		 }
		
			 if((count !=1)||(dotcount !=1))
			 	{
			 	alert("Invalid Email Please try again!")
			 	return false
			 	}
		
		
	return true
	}

	function validateCreateby(cby) {
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (cby == "") {
        
        alert ("You didn't enter a lastname");
		return false;
    }  
    if (illegalChars.test(cby)) {
        
		alert ("The lastname contains illegal characters");
		return false;
    } 
    return true;
}

//function ValidPhone(aphone)
//{
	//var valid = "0123456789";

		//if(aphone=="")
		//{
		//alert("Phone number is required field!")
		//return false
		//}
		
		//if(aphone.length != 10)
		//{
		//alert("Invalid phone number! Please try again.")
		//return false
		//}
		
		
		//for (var i=0; i < aphone.length; i++)
		//{
		//temp = "" + aphone.substring(i, i+1);
		
		
			//if (valid.indexOf(temp) == "-1") 
			//{
			//alert("Invalid characters in your phone.  Please try again.")
			//return false;
			//}
		//}
		
	
		//return true
//}






function validateCreatedate(field)
{
	if(field=="")
	{
	alert("Date of Birth required field!")
	return false;
	}
	
	

	var valid = "0123456789/";
	var slashcount = 0;

	if (field.length!=10) 
	{
	alert("Invalid date! The correct date format is like 'yyyy/mm/dd'.   Please try again.")
	return false;
	}
		for (var i=0; i < field.length; i++)
		 {
		temp = "" + field.substring(i, i+1);
		if (temp == "/") 
		slashcount++;
			if (valid.indexOf(temp) == "-1") 
			{
			alert("Invalid characters in your date.  Please try again.")
			return false;
			}
		if (slashcount > 2) 
		{
		alert("Invalid Date!  The slash character should be used with a properly formatted 8 digits like  '01/01/2004'.   Please try again.")
		return false;
  		 }
		if((field.charAt(2)!= '/')||(field.charAt(5) != '/'))
		{
		alert("Invalid date! The slash character should be used with a properly formatted 8 digits like  '01/01/2004'.   Please try again.")
		return false;
		}
	}
	return true;


}

function validateStatus(status) {
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (status == "") {
        
        alert ("You didn't enter the Status");
		return false;
    }  
    if (status.length > 1) {

		alert ("The Status is too long");
        return false;
    }
    return true;
}



