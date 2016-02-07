document.querySelector("title").innerHTML = "Bonaparte Documentation";

function replaceHomeLink(){
    var summary = document.querySelector("ul.summary"); 
    var li = document.createElement('li'); 
    var link = document.createElement('a'); 
   
    link.innerHTML = "Visit Bonaparte on Github"; 
    link.setAttribute('class', 'my-custom-link');
    link.setAttribute('href', 'http://github.com/bonaparte'); 
    link.setAttribute('target', '_blank'); 
    
    li.appendChild(link);
    summary.insertBefore( li, summary.firstChild )
}

window.addEventListener("load", );