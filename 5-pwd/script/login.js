"use strict";

var Login = {
    
    buildLogin: function(){
        
        var modalwindow = document.createElement("div");
        var loginwindow = document.createElement("div");
        var loginhead = document.createElement("label");
        var logininput = document.createElement("input");
        var loginbutton = document.createElement("button");
        
        modalwindow.id = "modalwindow2";
        var main = document.querySelector("main");
        main.appendChild(modalwindow);
        loginbutton.appendChild(document.createTextNode("Logga in"));
        
        loginwindow.id = "loginwindow2";
        loginhead.id = "loginhead";
        logininput.id = "logininput";
        loginbutton.id = "loginbutton";
        
        loginhead.appendChild(document.createTextNode("Vänligen, logga in med ett användarnamn:"));

        
        loginwindow.appendChild(loginhead);
        loginwindow.appendChild(logininput);
        loginwindow.appendChild(loginbutton);
        modalwindow.appendChild(loginwindow);
        
        
        modalwindow.parentNode.insertBefore(loginwindow, modalwindow.nextSibling);
                        
        logininput.focus();

        
        logininput.onkeypress = function(e){
                if (!e) {
                    e = window.event;
                }
            
            if (e.keyCode == 13 &! e.shiftKey) {
                if(logininput.value == 0){
                    logininput.className = logininput.className = " ";
                    logininput.className = logininput.className + " error";
                }
                else {
                    document.querySelector("#loginstatus").innerHTML = "Inloggad som "+logininput.value;
                    modalwindow.id = "modalwindow";
                    loginwindow.id = "loginwindow";
                }
            }
        };
        
        loginbutton.onclick = function() {
            if(logininput.value == 0){
                logininput.className = logininput.className = " ";
                logininput.className = logininput.className + " error";
            }
            else {
                document.querySelector("#loginstatus").innerHTML = "Inloggad som "+logininput.value;
                modalwindow.id = "modalwindow";
                loginwindow.id = "loginwindow";
            }
        };
    }
};


window.onload = Login.buildLogin();