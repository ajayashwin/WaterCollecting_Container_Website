
// bottom container
var WH = 0;//1000
var WMT = 301;
var bootomcontainerwaterEl = document.getElementById("bootomcontainerwaterfill");



// for tap1 & container1 
var tap1 = document.getElementById("tapone");
var waterflowcontainer1 = document.getElementById("waterflowcontainerone");
var verticalpipeElone = document.getElementById("verticalpipeElone");
var horizontalpipeElone = document.getElementById("horizontalpipeElone");
var waterlevelcontaiinerone = document.getElementById("waterlevelcontaiiner1El") 

var tap1status = "OFF";
var tap1flow ="";
waterflowcontainer1.style.backgroundColor = "white";
tap1.style.backgroundColor = "red";

var H1 = 335;
var MT1 = 65;



//for tap2 & container2
var tap2 = document.getElementById("taptwo");
var waterflowcontainer2 = document.getElementById("waterflowcontainertwo");
var verticalpipeEltwo = document.getElementById("verticalpipeEltwo");
var horizontalpipeEltwo = document.getElementById("horizontalpipeEltwo");
var waterlevelcontaiinertwo = document.getElementById("waterlevelcontaiiner2El");

var tap2status = "OFF";
var tap2flow ="";
waterflowcontainer2.style.backgroundColor = "white";
tap2.style.backgroundColor = "red";

var H2 = 335;
var MT2 = 65;


// for tap3 & container3 
var tap3 = document.getElementById("tapthree");
var waterflowcontainer3 = document.getElementById("waterflowcontainerthree");
var verticalpipeElthree = document.getElementById("verticalpipeElthree");
var horizontalpipeElthree = document.getElementById("horizontalpipeElthree");
var waterlevelcontaiinerthree = document.getElementById("waterlevelcontaiiner3El") 

var tap3status = "OFF";
var tap3flow ="";
waterflowcontainer3.style.backgroundColor = "white";
tap3.style.backgroundColor = "red";

var H3 = 335;
var MT3 = 65;


// function for tap1 one
function waterflowtap1(){
    
    if(tap1status=="OFF"){
        tap1.style.backgroundColor = "green";
        tap1status ="ON";
        if(H1>0){
        waterflowcontainer1.style.backgroundColor = "aqua";
        verticalpipeElone.style.backgroundColor = "aqua";
        var setIntervalId1 = setInterval(function(){
            H1 = H1-1;
            MT1 = MT1+1;

            WH = WH+0.1;
            WMT = WMT-0.1;
            waterlevelcontaiinerone.style.height=H1+"px";
            waterlevelcontaiinerone.style.marginTop = MT1+"px";
            bootomcontainerwaterEl.style.height = WH+"px";
            bootomcontainerwaterEl.style.marginTop = WMT+"px";
            bootomcontainerwaterEl.style.backgroundColor="aqua";

            if(H1==0 || tap1flow=="OFF"){
                clearInterval(setIntervalId1);
                tap1flow = "ON";
                waterflowcontainer1.style.backgroundColor = "white";
                verticalpipeElone.style.backgroundColor = "white";
                if(H1==0){
                    horizontalpipeElone.style.backgroundColor = "White";
                }
            }

        },50);
    }
    }
    else if(tap1status=="ON") {
        tap1.style.backgroundColor = "red";
        tap1status ="OFF";
        waterflowcontainer1.style.backgroundColor = "white";
        verticalpipeElone.style.backgroundColor = "white";
        tap1flow = "OFF";
    }





}

// function for tap2
function waterflowtap2(){
    
    if(tap2status=="OFF"){
        tap2.style.backgroundColor = "green";
        tap2status ="ON";
        if(H2>0){
        waterflowcontainer2.style.backgroundColor = "aqua";
        verticalpipeEltwo.style.backgroundColor = "aqua";
        var setIntervalId2 = setInterval(function(){
            H2 = H2-1;
            MT2 = MT2+1;

            WH = WH+0.1;
            WMT = WMT-0.1;
            waterlevelcontaiinertwo.style.height=H2+"px";
            waterlevelcontaiinertwo.style.marginTop = MT2+"px";
            bootomcontainerwaterEl.style.height = WH+"px";
            bootomcontainerwaterEl.style.marginTop = WMT+"px";
            bootomcontainerwaterEl.style.backgroundColor="aqua";

            if(H2==0 || tap2flow=="OFF"){
                clearInterval(setIntervalId2);
                tap2flow = "ON";
                waterflowcontainer2.style.backgroundColor = "white";
                verticalpipeEltwo.style.backgroundColor = "white";
                if(H2==0){
                    horizontalpipeEltwo.style.backgroundColor = "White";
                }
            }

        },50);
    }
    }
    else if(tap2status=="ON") {
        tap2.style.backgroundColor = "red";
        tap2status ="OFF";
        waterflowcontainer2.style.backgroundColor = "white";
        verticalpipeEltwo.style.backgroundColor = "white";
        tap2flow = "OFF";
    }





}

// function for tap3 
function waterflowtap3(){
    
    if(tap3status=="OFF"){
        tap3.style.backgroundColor = "green";
        tap3status ="ON";
        if(H3>0){
        waterflowcontainer3.style.backgroundColor = "aqua";
        verticalpipeElthree.style.backgroundColor = "aqua";
        var setIntervalId3 = setInterval(function(){
            H3 = H3-1;
            MT3 = MT3+1;

            WH = WH+0.1;
            WMT = WMT-0.1;
            waterlevelcontaiinerthree.style.height=H3+"px";
            waterlevelcontaiinerthree.style.marginTop = MT3+"px";
            bootomcontainerwaterEl.style.height = WH+"px";
            bootomcontainerwaterEl.style.marginTop = WMT+"px";
            bootomcontainerwaterEl.style.backgroundColor="aqua";

            if(H3==0 || tap3flow=="OFF"){
                clearInterval(setIntervalId3);
                tap3flow = "ON";
                waterflowcontainer3.style.backgroundColor = "white";
                verticalpipeElthree.style.backgroundColor = "white";
                if(H3==0){
                    horizontalpipeElthree.style.backgroundColor = "White";
                }
            }

        },50);
    }
    }
    else if(tap3status=="ON") {
        tap3.style.backgroundColor = "red";
        tap3status ="OFF";
        waterflowcontainer3.style.backgroundColor = "white";
        verticalpipeElthree.style.backgroundColor = "white";
        tap3flow = "OFF";
    }





}





