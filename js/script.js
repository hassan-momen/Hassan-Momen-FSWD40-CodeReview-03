for(var i=0; i<teamMembers.length;i++){
	var obj =teamMembers[i];
	document.getElementById("demo").innerHTML+='<div><img src="'+obj.image+'" id ="imgs"><p>'+obj.name+'</p>'+obj.email+'</div>';
}

function calculateInsurance(){
	var age = document.getElementById('Age').value;
	var horsepower = document.getElementById("Horsepower").value;
	var country = document.getElementById("Country").value;
	if(country=="Austria"){
		var insurance = (horsepower*100)/(Number(age)+50);
		document.getElementById("text").innerHTML=" Your insurance costs in "+country+" is: "+Math.floor(insurance)+"€";
	}
	else if(country=="Italy"){
		var insurance2 = (horsepower*120)/(Number(age)+100);
		document.getElementById("text").innerHTML=" Your insurance costs in "+country+" is : "+Math.floor(insurance2)+"€";
	}
	else if(country=="Germany") {
		var insurance3 = (horsepower*150)/(Number(age+2)+150);
		document.getElementById("text").innerHTML=" Your insurance costs in "+country+" is : "+Math.floor(insurance3)+"€";
	}else {
		document.getElementById("text").innerHTML="We don't have information about this country.";
	}
	return false;
}
