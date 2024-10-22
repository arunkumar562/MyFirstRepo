sap.ui.define([
     "sap/m/Button"

],function(CustumBtn){
    "use strict";

    return CustumBtn.extend("infy.akm.project1.controls.customControl", { 
       
metadata: {
   properties: {
    "allowHover": {
    type: "boolean",
    defaultValue: false
    },
    "hoverText": {
    type: "string"
    }
    },
    events: {
    "hover": {}
    }
   },
   onmouseover: function(evt) {
    if (this.getAllowHover()) {
    this.fireHover();
    }
   },
   renderer:function() {
    debugger;
   },
   init:function(){
    debugger;
   }
   
   
   

    })

})