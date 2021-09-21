window.onload = function proceed() {
	
	var input = prompt("Please enter your name", "Jane Doe");
	//console.log(input);
	
	if(input === null)
	{
		window.alert("Program canceled");
	}
	else
	{
		if(input == "" || input == " ")
		{
			window.alert("Input box is empty, please try again");
			proceed();
		}
		else
		{
			document.getElementById("box").style.visibility = "visible";
			document.getElementById("greet").style.visibility = "visible";
			
			document.getElementById("greet").innerHTML = "Hello "+input+", how are you?";
		}
	}
}
