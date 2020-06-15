function validateSuppliertype(supplier_type) {
	var supplier_type = document.getElementById('supplier_type');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input=supplier_type.value;
    if (supplier_type == "") {
        
        alert ("You didn't enter a Supplier type");
		return false;
    }  
    if (illegalChars.test(input)) {
        
		alert ("invalid supplier type");
		return false;
    } 
    return true;
}

function validateSupplierdetail(supplier_detail) {
	var supplier_detail = document.getElementById('supplier_detail');
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (supplier_detail == "") {
        
        alert ("You didn't enter a Supplier Detail");
		return false;
    }  
    if ((supplier_detail.length < 5) || (supplier_detail.length > 50)) {

		alert ("The Supplier Detail is too short");
        return false;
    }
    return true;
}

function EmailValid(email)
	{
		var website = document.getElementById('website');
		if(website =="")
		{
		alert("Email is required field!")
		return false
		}
		var len = email.length
		
		if((website.charAt(1)=='@')||(website.charAt(1)=='.'))
		{
		alert("Invalid Email Please try again!")
		return false
		}
		if((website.charAt(len-2)=='@')||(website.charAt(len-2)=='.'))
		{
		alert("Invalid Email Please try again!")
		return false
		}
		
				

		count=0
		dotcount=0
	for (i=0; i< len; i++)
		{
			if(website.charAt(i)=='@')
			count++
			if(website.charAt(i)=='.')
			dotcount++
		 }
		
			 if((count !=1)||(dotcount !=1))
			 	{
			 	alert("Invalid Email Please try again!")
			 	return false
			 	}
		
		
	return true
	}

	function validateCreateby(created_by) {
		var created_by = document.getElementById('created_by');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (created_by.value == "") {
        
        alert ("You didn't enter a lastname");
		return false;
    }  
    if (illegalChars.test(created_by.value)) {
        
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






function validateCreatedate(created_date)
{
	var created_date = document.getElementById('created_date');
	if(created_date =="")
	{
	alert("Date of Birth required field!")
	return false;
	}
	
	

	var valid = "0123456789/";
	var slashcount = 0;

	if (created_date.length!=10) 
	{
	alert("Invalid date! The correct date format is like 'yyyy/mm/dd'.   Please try again.")
	return false;
	}
		for (var i=0; i < created_date.length; i++)
		 {
		temp = "" + created_date.substring(i, i+1);
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
		if((created_date.charAt(2)!= '/')||(created_date.charAt(5) != '/'))
		{
		alert("Invalid date! The slash character should be used with a properly formatted 8 digits like  '01/01/2004'.   Please try again.")
		return false;
		}
	}
	return true;


}

function validateStatus(status) {
   var status = document.getElementById('status');
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 var input=status.value;
    if (input == "") {
        
        alert ("You didn't enter the Status");
		return false;
    }  
    if (input.length > 1) {

		alert ("The Status is too long");
        return false;
    }
    return true;
}

