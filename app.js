$(document).ready(function(){
	
	$('#searchButton').on('click',function(){
		var searchVal = document.getElementById('search').value;
		var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + searchVal;
		var heading = "<h3>Here's the list of matching results : </h3>";
		console.log("Url is : " + url);

					
		$.getJSON(url,function(data){
			$('#results').append(heading);
			$.each(data.query.pages,function(i){
				$('#results').append("<h2><a href='https://en.wikipedia.org/?curid=" + data.query.pages[i].pageid + 
                    			        "' target='_blank'>" + data.query.pages[i].title + "</a></h2>");
                    			
			});
		});
	});
});
