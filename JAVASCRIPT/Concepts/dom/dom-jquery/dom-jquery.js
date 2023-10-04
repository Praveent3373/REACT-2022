
$(document).ready(function(){
    
  // accordion
    $('.container article > p:not(:first)').css({'display': 'none'});
    $('.container article h1').click(function(){
      // $(this).next('p').slideToggle();
      // // $(this).parent('article').find('h1 + p').slideToggle();
      // $(this).parents('article').siblings().find('h1 + p').slideUp()
      
      // $(this).parent('article').toggleClass('active');
      // $(this).parent('article').siblings().removeClass('active');
    })


    // dom manupulation
    $('p').wrap('<div class="myCls">'); // @* wrap all p with div *@
    $('#myDiv').hide(); // @* hides div whose id is myDiv  *@
    $('span').attr( // @*sets style and width attribute on all span *@
        {
            'style': 'border:solid',
            'width': '100%'
        });
    $('p').append('This is p.'); // @* append text to <p> *@

    $('span').before('<p>This is another p</p>'); //@* insert <p> before span  *@

        












})



// ==== Jquery Methods =====

// dom manipulation
// These methods manipulate DOM elements in some manner e.g. changing attribute, style attribute, adding and removing elements etc.
// after(),
// append(),
// attr(),
// before(),

// Traversing
// These methods help in navigating from DOM element to another element in a parent child hierarchy e.g. finding ancestors, descendants or sibling element of a specified element.
// children(),
// closest(),
// each(),
// first(),
// next(),
// filter(),
// parent(),
// siblings(),

// CSS
// These methods get and set css related properties of elements.
// addClass(),
// css(),
// hasClass(),
// removeClass(),
// toggleClass()

// Attributes
// These methods get and set DOM attributes of elements.
// attr(),
// html(),
// removeAttr(),
// prop(),
// val(),

// Events
// These methods are used to handle DOM or JavaScript events.
// bind(),
// blur(),
// change(),
// click(),
// dblclick(),
// focus(),
// keyup(),
// keydown(),

// Effects
// These methods are used to add animation to elements.
// animate(),
// fadeIn(),
// fadeOut(),
// hide(),
// show(),
// stop(),

// Forms
// These methods and event handlers handle forms and their various elements.
// blur(),
// change(),
// val(),
// submit(),

// Ajax
// These methods allow Ajax functionalities with jQuery e.g.
// get(),
// getJson(),
// post(),
// load(),

// Core
// These methods are core methods in jQuery API.	
// jQuery(),
// holdReady(),
// when(),

// Data  
// These methods allow us to associate arbitrary data with specific DOM elements.	
// data(),
// removeData(),
// queue(),
// dequeue(),
// clearQueue(),

// Miscellaneous
// These methods are useful in various tasks e.g. traversing elements, converting to array etc.
// each(),
// index(),
// get(),
// toArray(),

// Utilities
// Utility methods are helpful in getting information on various things e.g. browser, function, array, window etc.
// inArray(),
// isArray(),
// isFunction(),
// isNumeric(),
// isWindow(),
// isXmlDoc(),
