window.onload = function(){

	var btn_users = document.querySelector('#btn-users');

	var xhttp = new XMLHttpRequest();

	btn_users.onclick = function(){

		xhttp.onreadystatechange = function(){

			if(xhttp.readyState == 4 && xhttp.status == 200){

				console.log(xhttp.responseText);

			}

		}

	}

	xhttp.open('GET', 'public/ajax/users.php', true);

	xhttp.send();

}