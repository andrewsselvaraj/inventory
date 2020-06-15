function valForm()
{	
	        
		if(!validateEmployeeid(document.validform.employeeid))
		{
		return false;
		}
		if(!validateEmpfirstname(document.validform.firstname))
		{
		return false;
		}
		if(!validateEmplastname(document.validform.lastname))
		{
		return false;
		}
		if(!validateDateofbirth(document.validform.dob))
		{
		return false;
		}
		if(!validateDesignation(document.validform.designation))
		{
		return false;
		}
		if(!validateJoindate(document.validform.joindate))
		{
		return false;
		}
		if(!validateLeavedate(document.validform.leavingdate))
		{
		return false;
		}
		if(!validateAddress(document.validform.address))
		{
		return false;
		}
		if(!validateState(document.validform.state))
		{
		return false;
		}
		if(!validateCountry(document.validform.country))
		{
		return false;
		}
		if(!validPhone(document.validform.phone))
		{
		return false;
		}
		if(!validFax(document.validform.fax))
		{
		return false;
		}
		if(!validateEmail(document.validform.email))
		{
		return false;
		}
		
		else 
	{
		return true;
	}
}
