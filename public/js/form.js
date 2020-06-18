const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");



// password Validation
	
	confirmPassword.addEventListener("keyup", () => {
		if(confirmPassword.value !== password.value){
			confirmPassword.setAttribute("pattern", password.value)
		}
		passVal()
	})

	password.addEventListener("keyup", ()=>{
		let conVal = ConfirmPassword.value
		
		if(conVal !== password.value  &&  conVal.length > 0 ){
			confirmPassword.setAttribute("pattern", password.value)
		}
		passVal()
	})
	
// *************************************


function passVal(){
	
	confirmPassword.addEventListener("keyup", () => {
		if(confirmPassword.value !== password.value){
			confirmPassword.setAttribute("pattern", password.value)
		}
	})

	password.addEventListener("keyup", ()=>{
		let conVal = ConfirmPassword.value
		
		if(conVal !== password.value  &&  conVal.length > 0 ){
			confirmPassword.setAttribute("pattern", password.value)
		}
	})
	
}