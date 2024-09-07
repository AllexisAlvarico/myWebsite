
function changeMode(){

}

function formOpenBlog(){
	document.getElementById("myForm").style.display = "block";
}

function formCloseBlog(){
	document.getElementById("myForm").style.display = "none";
}

function setBlog(t_title, t_author, t_bodyText){
	let divBlog = document.createElement("div");
	divBlog.classList.add("card");
	let titleHeading = document.createElement("h2");
	let authorHeading = document.createElement("h2");
	let bodyTextField = document.createElement("p");
	titleHeading.innerHTML = "some title";
	authorHeading.innerHTML = "some author";
	bodyTextField.innerHTML = "t_bodyText";
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