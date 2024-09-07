function changeMode(){

}
function formOpenBlog(){
	document.getElementById("myForm").style.display = "block";
}

function formCloseBlog(){
	document.getElementById("myForm").style.display = "none";
}

function setBlog(){
	var currentDate = new Date();
	let divBlog = document.createElement("div");
	divBlog.classList.add("card");
	let titleHeading = document.createElement("h2");
	let authorHeading = document.createElement("h2");
	let bodyTextField = document.createElement("p");
	let dateTextField = document.createElement("h5");

	dateTextField.textContent = currentDate.getDate() + "/"
	+ (currentDate.getMonth()+1)  + "/"
	+ currentDate.getFullYear() + " at "
	+ currentDate.getHours() + ":" + currentDate.getMinutes();

	titleHeading.innerHTML = document.getElementById("titleID").value;
	authorHeading.innerHTML = document.getElementById("authorID").value;
	bodyTextField.innerHTML = document.getElementById("bodyTextID").value;

	document.body.appendChild(dateTextField);
	document.body.appendChild(divBlog);
	divBlog.appendChild(titleHeading);
	divBlog.appendChild(authorHeading);
	divBlog.appendChild(bodyTextField);

	//document.body.appendChild(authorHeading);
	//document.body.appendChild(bodyTextField);
	// get the date and time
	// create a div
	// set the title
	// set the author
	// create a paragraph
	// create a image if needed
	// create a button
};