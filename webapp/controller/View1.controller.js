sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "infy/akm/project1/controls/customControl"
],

    //Arun 


    // Testadd

    function (Controller,MessageToast,customControl) {
        "use strict";

        return Controller.extend("infy.akm.project1.controller.View1", {
            onInit: function () {
                var that = this
                var odatamodel = this.getOwnerComponent().getModel()
                this.getView().setModel(odatamodel)
            },
            onPressGo: function (oEvent) {
                debugger;

            },
            onNavPress: function (oEvent) {
                debugger;
                var router = this.getOwnerComponent().getRouter()
                router.navTo('route2', {
                    data: "123"
                })
            },
            onBeforeRebindTable1: function (oEvent) {
                debugger;
                var key = this.getView().byId('_mysmtFtr').getControlByKey('Discontinued').getSelectedKey()
                var value = this.getView().byId('_mysmtFtr').getControlByKey('ProductID')
                var filter = []
                if (key) {
                    var afilter = new sap.ui.model.Filter('Discontinued', sap.ui.model.FilterOperator.EQ, key)
                    oEvent.getParameter('bindingParams').filters.push(afilter)
                }
                if (value) {
                    value = value.mProperties._semanticFormValue.replaceAll('=', '')

                    var length = value.split(',').length
                    for (var a = 0; a < length; a++) {
                        var searchkey = value.split(',')[a]
                        searchkey ?  oEvent.getParameter('bindingParams').filters.push(new sap.ui.model.Filter('ProductID', sap.ui.model.FilterOperator.EQ, searchkey)) : ''


                    }



                }


            },

            onNavtoApp: function (oEvent) {
                var intent = 'Action-toappperssample'
                var oXappnav = sap.ushell.Container.getService("CrossApplicationNavigation")
                oXappnav.ttoExternal({
                    target: {
                        semanticObject: "Action",
                        action: "toappperssample"
                    },
                    params: {

                    }

                })
            },


            onfilterChange: function () {
                debugger
            },

            oninitise: function (oEvent) {
               var smtfilter =  this.getView().byId('_mysmtFtr')
                var value  = this.getView().byId('_mysmtFtr').getControlByKey('ProductID')
                value.setValue(2)
                smtfilter.search()
            },

            onaftervload: function (oevnt) {
             debugger;
                
            },
            onaftervSve: function (oevnt) {
                debugger
            },
            onbeforevFetch: function (oevnt) {
                debugger
            },
            onbeforevS: function (oevnt) {
                var value =  this.getView().byId('_mysmtFtr').getControlByKey('ProductID').getValue()
                if(value){
                    var obj = {
                        ProductID : 1
                    }
                    oevnt.getParameter('context').setPropery('/custumdata',obj)
                    MessageToast.show('Done')}
                else{
                oevnt.preventDefault()    
            return;
            }
            },
            oninitized: function (oevnt) {
                debugger
            },


        });
    });

