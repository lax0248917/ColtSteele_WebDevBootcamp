//getElementById

var tag = document.getElementById("highlight");
tag
//<li id="highlight">List Item 1</li>

//getElementsByClassName

var tags = document.getElementsByClassName("bolded");
tags
//[ <li class="bolded">List Item 2</li>
//<li class="bolded">List Item 3</li>]
//this is an html collection which is array like

//getElementsByTagName

var tags = document.getElementsByTagName("li");
tags
//[ <li id="highlight">List Item 1</li>,
//<li class="bolded">List Item 2</li>,
//<li class="bolded">List Item 3</li>]

//querySelector

var tag = document.querySelector("#hilight");
tag
//<li id="highlight">List Item 1</li>
// can do this with class selector and tag names, will only return one element.

//querySelectorAll

var tags = document.querySelectorAll("li");
tags
//[ <li id="highlight">List Item 1</li>,
//<li class="bolded">List Item 2</li>,
//<li class="bolded">List Item 3</li>]
//this will return all elements that match

