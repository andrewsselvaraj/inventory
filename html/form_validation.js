
function validateSupplierid(supplier_id) {
	var supplier_id = document.getElementById('supplier_id');
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (supplier_id.value == "") {
        
        alert ("Supplier ID is required!");
		return false;
    }  
    
    return true;
}

function validateSuppliername(supplier_name) {
	var supplier_name = document.getElementById('supplier_name');
	//var alphaExp = /^[a-zA-Z]+$/;
	var namelen=supplier_name.value;
	var alphaExp = /^[a-z A-Z]+$/;
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
        if(namelen == "") 
		{
        alert ("supplier_name field is empty!");
        return false;
		}
		if (namelen.length < 3) {

		alert ("supplier_name is too short");
        return false;
    }
        //var alphaExp = /^[a-z A-Z]+$/;
		if(namelen.match(alphaExp))
		{
			return true;
		}
		else
	    {
		   alert ("Invalid supplier_name");
		   return false;
		}
		
		
    return true;
	
}

function validateSuppliertype(supplier_type) {
	var supplier_type = document.getElementById('supplier_type');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input=supplier_type.value;
    if (input == "") {
        
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
    var suplen = supplier_detail.value;
    if (supplier_detail.value == "") {
        
        alert ("You didn't enter a Supplier Detail");
		return false;
    }  
    if (suplen.length < 5) {

		alert ("The Supplier Detail is too short");
        return false;
    }
    return true;
}

function emailValid(website)
	{
		var website = document.getElementById('website');
		
		
		if(website == "")
		{
		alert("Email is a required field!");
		return false;
		}
		
		 
		len = website.length;
		if((website.charAt(1)=='@')||(website.charAt(1)=='.'))
		{
		alert("Invalid Email Please try again!");
		return false;
		}
		if((website.charAt(len-2)=='@')||(website.charAt(len-2)=='.'))
		{
		alert("Invalid Email Please try again!");
		return false;
		}
		count=0
		dotcount=0
	for (var i=0; i< website.length; i++)
		{
			if(website.charAt(i)=='@')
			count++
			if(website.charAt(i)=='.')
			dotcount++
		 }
			 if((count !=1)||(dotcount !=1))
			 	{
			 	alert("Invalid Email Please try again!");
			 	return false;
			 	}
		
		
	return true;
	}



	function validateCreate_by(created_by) 
		{
		var created_by = document.getElementById('created_by');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input = created_by.value;
    if (created_by.value == "") 
		{
        alert("Created by field is empty!");
		return false;
    }  
    if (illegalChars.test(input)) 
		{
        
		alert("The created_by field contains illegal characters");
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






function validateCreate_date(created_date)
{
	var created_date = document.getElementById('created_date');
	var input = created_date.value;
	if(input =="")
	{
	alert("Created Date is a required field!")
	return false;
	}
	
	

	var valid = "0123456789/";
	var slashcount = 0;

	if (input.length!=10) 
	{
	alert("Invalid date! The correct date format is like 'dd/mm/yyyy'.   Please try again.")
	return false;
	}
		for (var i=0; i < input.length; i++)
		 {
		temp = "" + input.substring(i, i+1);
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
		if((input.charAt(2)!= '/')||(input.charAt(5) != '/'))
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

function validateEmail(website)
	{
		var website = document.getElementById('website');
		var input=website.value;
		if(input=="")
		{
		alert("Email is required field!");
		return false;
		}

		len = input.length;
		
		if((input.charAt(1)=='@')||(input.charAt(1)=='.'))
		{
		alert("Invalid Email Please try again!");
		return false;
		}
		if((input.charAt(len-2)=='@')||(input.charAt(len-2)=='.'))
		{
		alert("Invalid Email Please try again!");
		return false;
		}
		
				

		var count=0;
		var dotcount=0;
	for (var i=0; i< input.length; i++)
		{
			if(input.charAt(i)=='@')
			count++
			if(input.charAt(i)=='.')
			dotcount++
		 }
		
			 if((count !=1)||(dotcount !=1))
			 	{
			 	alert("Invalid Email Please try again!");
			 	return false;
			 	}
		
		
	return true;
	}



