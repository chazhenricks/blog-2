console.log("BTN JS");

//Content
var blogContent = $('#blog-content');
var aboutContent = $('#about-content');
var portContent = $('#portfolio-content');

//Homepage enter button
var enterBtn = $('#enter');
var navBar = $("#nav-bar");

enterBtn.click(function(){
    blogContent.removeClass("hidden");
    navBar.removeClass('hidden');
    enterBtn.addClass("hidden");
});

//Navbar Navigation
var blogNav = $('#blog-nav');
var aboutNav = $('#about-nav');
var portNav = $('#portfolio-nav');

blogNav.click(function(){
    blogContent.removeClass("hidden");
    aboutContent.addClass("hidden");
    portContent.addClass("hidden");
});

aboutNav.click(function(){
    aboutContent.removeClass("hidden");
    blogContent.addClass("hidden");
    portContent.addClass("hidden");
});

portNav.click(function(){
    portContent.removeClass("hidden");
    aboutContent.addClass("hidden");
    blogContent.addClass("hidden");
});






