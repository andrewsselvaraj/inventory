if(validateEmpty(supplier_name, "Suppliername field is empty!")){
	if(validateLength(supplier_name, 5, 15)){
		if(validateCheck(supplier_name, "Invalid Suppliername")){
			return true;
		}
	}
}
return false;
}
function validateEmpty(elem, helperMsg) {
	
        if (elem.value == "") 
	{
        alert(helperMsg);
		elem.focus();
		return false;
	}
	
}
function validateLength(elem, min, max){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		alert("Please enter minimum six characters of password");
		elem.focus();
		return false;
	}
}
function validateCheck(elem, helperMs1){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem1.focus();
		return false;
	}
}