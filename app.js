$(document).ready(function(){
	
	$('#searchButton').on('click',function(){
		var searchVal = document.getElementById('search').value;
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchVal + "&limit=10&namespace=0&format=json";
		console.log("Url is : " + url);
	});
});
