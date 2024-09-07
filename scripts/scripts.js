function changeMode(){

}
function formOpenBlog(){
	document.getElementById("myForm").style.display = "block";
}

function formCloseBlog(){
	document.getElementById("myForm").style.display = "none";
}


function setDate(){
	let currentDate = new Date();
	let month = "";

	switch(currentDate.getMonth()){
		case 0:
				month="January";
				break;
			case 1:
				month="February";
				break;
			case 2:
				month="March";
				break;
			case 3:
				month="April";
				break;
			case 4:
				month="May";
				break;
			case 5:
				month="June";
				break;
			case 6:
				month="July";
				break;
			case 7:
				month="August";
				break;
			case 8:
				month="September";
				break;
			case 9:
				month="October";
				break;
			case 10:
				month="November";
				break;
			case 11:
				month="December";
				break;
			default:
				console.log("Number invalid");
				break;
	}

	let setDate = month + " " + currentDate.getDate() + ", "
	+ currentDate.getFullYear() + " "
	+ currentDate.getHours() + ":"
	+ currentDate.getMinutes();

	return setDate;
}

function setBlog(){

	let divBlog = document.createElement("div");
	divBlog.classList.add("card");
	let titleHeading = document.createElement("h5");
	titleHeading.classList.add("titleBlog");
	let authorHeading = document.createElement("h5");
	authorHeading.classList.add("author");
	let bodyTextField = document.createElement("p");
	bodyTextField.classList.add("blog");
	let dateTextField = document.createElement("h5");
	dateTextField.classList.add("date");

	dateTextField.textContent = "Date: " + setDate();

	titleHeading.innerHTML = document.getElementById("titleID").value;
	authorHeading.innerHTML = "Author: " + document.getElementById("authorID").value;
	bodyTextField.innerHTML = document.getElementById("bodyTextID").value;
	document.body.appendChild(divBlog);
	divBlog.appendChild(titleHeading);
	divBlog.appendChild(authorHeading);
	divBlog.appendChild(dateTextField);
	divBlog.appendChild(bodyTextField);
};