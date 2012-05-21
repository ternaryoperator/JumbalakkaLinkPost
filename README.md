JumbalakkaLinkPost
==================

Quick dirty way to do HTTP POST from links on your page

This should be helpful to users who have tons of anchor tag on their 
webpage and need they need to do a HTTP post for the same. 

One use case I found is helpful is in when display tags are used in your
page. There should be a way to override display tag to secure the code 
even more. But I wanted to put a simpler solution out there.

Usage is fairly simple. 

<pre>
$('a').click(function(evnt) {
    evnt.preventDefault();
    new JumbalakkaLinkPost($(this).attr('href')).doPost();
});​
</pre>

The code is in pure JS but I am using Jquery here to demonstrate the usage. 
http://jsfiddle.net/amit_bhavadas/qgKQM/2/

