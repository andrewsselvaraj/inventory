function valForm()
{	
	        
		if(!validateProductid(document.validform.product_id))
		{
		return false;
		}
		if(!validateProductname(document.validform.product_name))
		{
		return false;
		}
		if(!validateProductdet(document.validform.product_detail))
		{
		return false;
		}
		if(!validateModel(document.validform.model))
		{
		return false;
		}
		if(!validateMaterialtype(document.validform.material_type))
		{
		return false;
		}
		if(!validateQuantity(document.validform.quantity))
		{
		return false;
		}
		if(!validateCalunit(document.validform.calculation_unit))
		{
		return false;
		}
		if(!validateCurrate(document.validform.current_rate))
		{
		return false;
		}
		if(!validateCreated_by(document.validform.created_by))
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
