"use strict";

var MYMAK = MYMAK || {};


MYMAK.makewindow = function () {
    
    // Räknare som ger varje enskilt fönster ett unikt ID.
    var mn = 0;
    var imn = 0;
    var rn = 0;
    var width;
    var height;
    MYMAK.postopcount = 0;
    MYMAK.posleftcount = 0;
    MYMAK.bigimgpostop = 100, 
    MYMAK.bigimgposleft = 300;
    MYMAK.zindex = 0;
    MYMAK.bigimgn = 0;
    

    
    // Skapandet av ett Memoryspel.
    document.querySelector("#memorylink").onclick = function() {
        
        var memory;
        width = 180;
        height = 250;
        mn += 1;
        MYMAK.postopcount += 15;
        MYMAK.posleftcount += 15;

        memory = new MYMAK.Memory("Memory"+[mn], "pics/dockmemoryicon.png", MYMAK.postopcount, MYMAK.posleftcount, width, height, 4);
        
        memory.buildWindow();
        memory.buildGame();
    };    
    
    
    // Skapandet av en Image Viewer.
    document.querySelector("#imagelink").onclick = function() {
        
        var imageviewer;
        width = 250;
        height = 250;
        imn += 1;
        MYMAK.postopcount += 15;
        MYMAK.posleftcount += 15;

        imageviewer = new MYMAK.Imageviewer("ImageView"+[imn], "pics/dockimageicon.png", MYMAK.postopcount, MYMAK.posleftcount, width, height);
        
        imageviewer.buildWindow();
        imageviewer.AjaxCon();
    };    
    
    
    // Skapandet av en RSS Feed.
    document.querySelector("#rsslink").onclick = function() {
        
        var rssfeed;
        width = 450;
        height = 250;
        rn += 1;
        MYMAK.postopcount += 15;
        MYMAK.posleftcount += 15;
        var update = false;

        rssfeed = new MYMAK.Rssfeed("RSSFeed"+[rn], "pics/dockrssicon1.png", MYMAK.postopcount, MYMAK.posleftcount, width, height);
        
        rssfeed.buildWindow();
        rssfeed.RSSCon(update);
    };    
};









window.onload = MYMAK.makewindow();