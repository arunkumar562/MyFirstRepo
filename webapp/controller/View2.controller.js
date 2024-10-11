sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("infy.akm.project1.controller.View2", {
        onInit: function () {
            debugger;
            var router = this.getOwnerComponent().getRouter()
          
        },
        onbeforebindTable:function(oEvent){
           var afilters = []
            var birthkey =this.getView().byId('_IDGenDatePicker').getDateValue()

          if(birthkey)
       {
        //    birthkey = birthkey.getTime()
        //    birthkey="/Date("+birthkey+")/"
            var filter = new sap.ui.model.Filter('BirthDate',sap.ui.model.FilterOperator.EQ,birthkey)
             oEvent.getParameter('bindingParams').filters.push(filter)
       }
 
        },


    })

})