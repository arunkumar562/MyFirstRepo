sap.ui.define([
    "sap/ui/core/mvc/Controller"
],




// Testadd

function (Controller) {
    "use strict";

    return Controller.extend("infy.akm.project1.controller.View1", {
        onInit: function () {
            var odatamodel = this.getOwnerComponent().getModel()
            this.getView().setModel(odatamodel)
        },
        onPressGo:function(oEvent){


        },
        onNavPress:function(oEvent){
debugger;
 var router = this.getOwnerComponent().getRouter()
 router.navTo('route2',{
    data:"123"
 })
        },
        onBeforeRebindTable1:function(oEvent){
            debugger;
            var key = this.getView().byId('_mysmtFtr').getControlByKey('Discontinued').getSelectedKey()
            var value = this.getView().byId('_mysmtFtr').getControlByKey('ProductID')
           var filter = []
              if(key){
               var afilter = new sap.ui.model.Filter('Discontinued',sap.ui.model.FilterOperator.EQ,key)
               filter.push(afilter)
            }
               if(value){ 
                 value = value.mProperties._semanticFormValue.replaceAll('=','')

                 var length = value.split(',').length
                 for(var a=0;a<length;a++){
                     var searchkey = value.split(',')[a]
                     searchkey ? filter.push(new sap.ui.model.Filter('ProductID',sap.ui.model.FilterOperator.EQ,searchkey)) : ''
                     
       
                 }


                
            }
                oEvent.getParameter('bindingParams').filters = filter       


            },
             
            onNavtoApp:function(oEvent){
                var intent =  'Action-toappperssample'           
                 var oXappnav = sap.ushell.Container.getService("CrossApplicationNavigation")
                 oXappnav.ttoExternal({
          target:{
    semanticObject: "Action",
                    action: "toappperssample"
          },
          params:{

          }

                 })
            },
             
    });
});

