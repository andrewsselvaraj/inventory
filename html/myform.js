function valForm()
{	
	        
		if(!validateSupplierid(document.validform.supplier_id))
		{
		return false;
		}
		if(!validateSuppliername(document.validform.supplier_name))
		{
		return false;
		}
		if(!validateSuppliertype(document.validform.supplier_type))
		{
		return false;
		}
		if(!validateSupplierdetail(document.validform.supplier_detail))
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
		if(!validateCreate_date(document.validform.created_date))
		{
		return false;
		}
		if(!validateStatus(document.validform.status))
		{
		return false;
		}
		else 
	{
		return true;
	}
}
