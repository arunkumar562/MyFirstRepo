sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("infy.akm.project1.controller.View2", {
            onInit: function () {
                debugger;
                var sPath = jQuery.sap.getModulePath("infy.akm.project1.model", "/data.json");
      var oModel = new sap.ui.model.json.JSONModel();
      oModel.loadData(sPath, null, false);
      this.getView().setModel(oModel, "TestModel");

      // Log the data to ensure it's loaded correctly
      console.log(oModel.getData());
            },
            onbeforebindTable: function (oEvent) {
                var afilters = []
                var birthkey = this.getView().byId('_IDGenDatePicker').getDateValue()

                if (birthkey) {
                    //    birthkey = birthkey.getTime()
                    //    birthkey="/Date("+birthkey+")/"
                    var filter = new sap.ui.model.Filter('BirthDate', sap.ui.model.FilterOperator.EQ, birthkey)
                    oEvent.getParameter('bindingParams').filters.push(filter)
                }

            },

            onclick: function (oEvent) {

                var spath = jQuery.sap.getModulePath('infy.akm.project1.model', '/data.json')
                var omodel = new sap.ui.model.json.JSONModel()
                omodel.loadData(spath, "", false)
                this.getView().setModel(omodel, "TestModel")
            },
            onSelect: function (oEvent) {
            },
            onopen: function (oEvent) {
             
              
                    oEvent.getSource()._oCalendar.mAggregations.month[0].setShowWeekNumbers(false)

               
          

            },
            onnavigate: function (oEvent) {
            }



        })

    })