/**
 * Author: 		Amit B Chembra
 * Use Case: 	When all your links are in get form and you need to convert them 
 * 			 	into post. This is a quick dirty way of achieving that. 
 * 
 * Simple function to do a post from a get type url
 * ref: http://papermashup.com/read-url-get-variables-withjavascript/
 * 
 * e.g.; http://jsfiddle.net/MAsP7/9/
 */
function JumbalakkaLinkPost( url ) 
{
    var params = {};
    //regex to parse the parameter in key/value pair separately
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    	params[key] = value;
    });
    this.parameters = params;
    this.link = url.split("?")[0];
}

JumbalakkaLinkPost.prototype.doPost = function()
{
	var formContent = document.createElement( 'form' );
	
	formContent.action = this.link;
	
	formContent.method = 'post';
	
	for( var key in this.parameters )
	{
		formContent.innerHTML += "<input type='hidden' name='" + key + "' " +
						"value='" + this.parameters[key] + "'/>"
	}
	
	document.getElementsByTagName( "body" )[0]
			.appendChild( formContent );
	
	formContent.submit();
}