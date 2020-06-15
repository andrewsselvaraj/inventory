
		if(!validateSuppliertype(document.validform.supplier_type.value))
		{
		return false;
		}
		
		if(!validateSupplierdetail(document.validform.supplier_detail.value))
		{
		return false;
		}

		if(!EmailValid(document.validform.website.value))
		{
		return false;
		}

		if(!validateCreatby(document.validform.created_by.value))
		{
		return false;
		}

		if(!validateCreatedate(document.validform.created_date.value))
		{
		return false;
		}

		