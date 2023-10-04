
// Async Vs Defer In Javascript

// The <script> tag is used to embed a client-side script (JavaScript). It either contains scripting statements, or it points to an external script file through the src attribute.

// When you load a webpage then there are two major things happening in your browsers:
// HTML Parsing
// Loading of the scripts

// Loading of the scripts contain two parts:
// Fetching the script from the network.
// Executing the script line by line.

// The <script> element has two attributes, async and defer, that can give us more control over how and when external files are fetched and executed.

// <script src="script.js">          
// <script async src="script.js">
// <script defer src="script.js"> 

// With async, the file gets downloaded asynchronously and then executed as soon as it’s downloaded.
// With defer, the file gets downloaded asynchronously, but executed only when the document parsing is completed. 
// With defer, scripts will execute in the same order as they are called. 

// Async scripts are executed as soon as the script is loaded, so it doesn't guarantee the order of execution (a script you included at the end may execute before the first script file )
// Defer scripts guarantees the order of execution in which they appear in the page.


// Normal <script> tag
// JS blocks the parsing of HTML
// fetches the script from the network
// Executes the script
// HTML parsing is started only after the script is fully executed.

// The async Attribute
// The async attribute is used to indicate to the browser that the script file can be executed asynchronously.
// While using the async attribute, meanwhile, the HTML parsing is going on, any of the script with the async attribute is fetched from the network asynchronously along with the HTML parsing.
// As soon as scripts are fetched & available in the network, HTML parsing stops & scripts start executing.
// Once the scripts are executed, the HTML parsing continues like regular.

// The defer Attribute
// The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.
// HTML parsing goes on and scripts are fetched in parallel.
// Scripts are only executed once the HTML parsing is complete.


// async attribute does not guarantee the order of execution of scripts but defer does.
// defer attribute is not supported in an old browser


// in normal script html parsing is started only after the script is completly executed.
// with async attribute html parse goes on, once scripts are fetched html, html parsing stops and scripts start executing.  once the scrips are executed, html parsing conntinues.
// with defer attribute html parse goes on and scripts are fetched parallel, and scripts are excuted only once the html parsing is complete.



