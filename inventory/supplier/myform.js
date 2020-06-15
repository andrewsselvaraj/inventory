function valForm()
{	
	        
		if(!validateSupplieid(document.myform.supplier_id.value))
		{
		return false
		}
		if(!validateSuppliername(document.myform.supplier_name.value))
		{
		return false
		}

		if(!validateLastname(document.myform.supplier_type.value))
		{
		return false
		}
		
		if(!validateSupplierdetail(document.myform.supplier_detail.value))
		{
		return false
		}

		if(!EmailValid(document.myform.website.value))
		{
		return false
		}

		if(!validateCreatby(document.myform.created_by.value))
		{
		return false
		}

		if(!validateCreatedate(document.myform.created_date.value))
		{
		return false
		}

		if(!validateStatus(document.myform.status.value))
		{
		return false
		}

	return true
}
