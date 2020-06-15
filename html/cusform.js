function valForm()
{	
	        
		if(!validateCustomerid(document.validform.customer_id))
		{
		return false;
		}
		if(!validateCustomername(document.validform.customer_name))
		{
		return false;
		}
		if(!validateCustomertype(document.validform.customer_type))
		{
		return false;
		}
		if(!validateCustomerdetail(document.validform.customer_detail))
		{
		return false;
		}
		if(!validateEmail(document.validform.website))
		{
		return false;
		}
		if(!validateCreate_by(document.validform.created_by))
		{
		return false;
		}
		//if(!validateCreate_date(document.validform.created_date))
		//{
		//return false;
		//}
		if(!validateStatus(document.validform.status))
		{
		return false;
		}
		else 
	{
		return true;
	}
}
