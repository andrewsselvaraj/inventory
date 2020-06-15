
function validateEmployeeid(employeeid) {
	var employeeid = document.getElementById('employeeid');
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (employeeid.value == "") {
        
        alert ("Employee ID is required!");
		return false;
    }  
    
    return true;
}


function validateEmpfirstname(firstname) {
	var firstname = document.getElementById('firstname');
	//var alphaExp = /^[a-zA-Z]+$/;
	var namelen=firstname.value;
	var alphaExp = /^[a-z A-Z]+$/;
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
        if(namelen == "") 
		{
        alert ("Employee firstname field is empty!");
        return false;
		}
		if (namelen.length < 3) {

		alert ("The firstname is too short");
        return false;
    }
        //var alphaExp = /^[a-z A-Z]+$/;
		if(namelen.match(alphaExp))
		{
			return true;
		}
		else
	    {
		   alert ("Invalid Employee firstname");
		   return false;
		}
		
		
    return true;
	
}

function validateEmplastname(lastname) {
	var lastname = document.getElementById('lastname');
	var namelen=lastname.value;
	var alphaExp = /^[a-zA-Z]+$/;
   //var illegalChars = /\W/; // allow letters, numbers, and underscores
 
        if(namelen == "") 
		{
        alert ("Employee lastname field is empty!");
        return false;
		}
	    if(namelen.match(alphaExp))
		{
			return true;
		}
		else
	    {
		   alert ("Invalid Employee lastname");
		   return false;
		}

    return true;
	
}

function validateDateofbirth(dob)
{
	var dob = document.getElementById('dob');
	var input = dob.value;
	if(input =="")
	{
	alert("Date of birth is a required field!")
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

function validateDesignation(designation) 
		{
		var designation = document.getElementById('designation');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input = designation.value;
    if (designation.value == "") 
		{
        alert("Designation field is empty!");
		return false;
    }  
    if (illegalChars.test(input)) 
		{
        
		alert("The designation field contains illegal characters");
		return false;
         } 
    return true;
}

function validateJoindate(joindate)
{
	var joindate = document.getElementById('joindate');
	var input = joindate.value;
	if(input =="")
	{
	alert("Joined date is a required field!")
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

function validateLeavedate(leavingdate)
{
	var leavingdate = document.getElementById('leavingdate');
	var input = leavingdate.value;
	if(input =="")
	{
	alert("leaving date is a required field!")
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

function validateAddress(address) {
	var address = document.getElementById('address');
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
    var add = address.value;
    if (address.value == "") {
        
        alert ("You didn't enter a address");
		return false;
    }  
    if (add.length < 5) {

		alert ("The address is too short");
        return false;
    }
    return true;
}

function validateState(state) {
	var state = document.getElementById('state');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input=state.value;
    if (input == "") {
        
        alert ("You didn't enter a state");
		return false;
    }  
    if (illegalChars.test(input)) {
        
		alert ("invalid state");
		return false;
    } 
    return true;
}

function validateCountry(country) {
	var country = document.getElementById('country');
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    var input=country.value;
    if (input == "") {
        
        alert ("You didn't enter a state");
		return false;
    }  
    if (illegalChars.test(input)) {
        
		alert ("invalid state");
		return false;
    } 
    return true;
}

function validPhone(phone)
{
	var phone = document.getElementById('phone');
	var valid = "0123456789";
    var input = phone.value;
		if(input=="")
		{
		alert("Phone number is required field!")
		return false
		}
		
		if(input.length != 10)
		{
		alert("Invalid phone number! Please try again.")
		return false
		}
		
		
		for (var i=0; i < input.length; i++)
		{
		temp = "" + input.substring(i, i+1);
		
		
			if (valid.indexOf(temp) == "-1") 
			{
			alert("Invalid characters in your phone.  Please try again.")
			return false;
			}
		}
		
	
		return true
}

function validFax(fax)
{
	var fax = document.getElementById('fax');
	var valid = "0123456789";
    var input = fax.value;
		if(input=="")
		{
		alert("Phone number is required field!")
		return false
		}
		
		if(input.length != 10)
		{
		alert("Invalid phone number! Please try again.")
		return false
		}
		
		
		for (var i=0; i < input.length; i++)
		{
		temp = "" + input.substring(i, i+1);
		
		
			if (valid.indexOf(temp) == "-1") 
			{
			alert("Invalid characters in your phone.  Please try again.")
			return false;
			}
		}
		
	
		return true
}



function validateEmail(email)
	{
		var email = document.getElementById('email');
		var input=email.value;
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



