using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using MyECommerceWebFormsApp.Models;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using MyECommerceWebFormsApp.Helpers;

namespace MyECommerceWebFormsApp
{
    public partial class AjaxOnly : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string rawId = Request["salesOrderId"];
            long salesOrderId = 0;

            if (!IsPostBack)
            {
                // TODO: create a data repository layer instead...
                SalesContext salesContext = new SalesContext();
                var results = salesContext.SalesOrderHeaders.ToList();

            }

            if (!string.IsNullOrEmpty(rawId) && long.TryParse(rawId, out salesOrderId))
            {
                if (salesOrderId != 0)
                {
                    hiddenSalesOrderId.Value = salesOrderId.ToString();

                    // TODO: get existing sales order for this id...


                }
            }
        }

        private void BuildSalesOrderLineHtml(int indx) // TODO: 2nd parameter - Sales.SalesOrderDetail as a db model object...
        {
            salesOrderlines.Text +=
            "<div class=\"row plcLine\" data-indx=" + indx + " data-salesorderlineid=\"0\">" +
            "<div class=\"col-sm-7\">" +
            "<div class=\"row\">" +
            "<div class=\"col-sm-6\">" +
            "<select class=\"form-control clsProducts\" data-control=\"products\" onchange=\"fieldValueChanged('" + indx + "', this)\"></select></div>" +
            "<div class=\"col-sm-6\">" +
            "<select class=\"form-control clsPackages\" data-control=\"packages\" onchange=\"fieldValueChanged('" + indx + "', this)\"></select></div></div></div>" +
            "<div class=\"col-sm-5\">" +
            "<div class=\"row\"><div class=\"col-sm-3 text-center\">" +
            "<select class=\"form-control clsCondition\" data-control=\"condition\" onchange=\"fieldValueChanged('" + indx + "', this)\"></select></div>" +
            "<div class=\"col-sm-2 text-center\">" +
            "<input type=\"text\" class=\"form-control clsPrice\" data-control=\"price\" value=\"0.00\" onblur=\"fieldValueChanged('" + indx + "', this)\" /></div>" +
            "<div class=\"col-sm-4\"><div class=\"row\">" +
            "<div class=\"col-sm-3 text-center\">" +
            "<input type=\"text\" class=\"form-control clsQuantity\" data-control=\"quantity\" value=\"1\" onblur=\"fieldValueChanged('" + indx + "', this)\" /></div>" +
            "<div class=\"col-sm-5\"><input type=\"text\" class=\"form-control clsDiscount\" data-control=\"discount\" value=\"0.00\" onblur=\"fieldValueChanged('" + indx + "', this)\" /></div>" +
            "<div class=\"col-sm-4 text-center\">" +
            "<select class=\"form-control clsTaxCode\" data-control=\"tax\" onchange=\"fieldValueChanged('" + indx + "', this)\"></select></div></div></div>" +
            "<div class=\"col-sm-3 text-center\"><div class=\"row\"><div class=\"col-sm-9\">" +
            "<input type=\"text\" class=\"form-control clsTotal text-right\" readonly=\"true\" data-control=\"total\" value=\"0.00\" onchange=\"fieldValueChanged('" + indx + "', this)\" /></div>" +
            "<div class=\"col-sm-3\">" +
            "<input type=\"button\" class=\"btn btn-xs btn-danger btn-block\" value=\"X\" onclick=\"removeSalesOrderLine('" + indx + "')\" />" +
            "</div></div></div></div></div></div>";
        }

        #region Web Methods

        [WebMethod]
        public static bool UpdateSalesOrder(string salesOrder)
        {
            // TODO: retrieve a sales order object here...          
            var deserialisedSalesOrder = JsonConvert.DeserializeObject(salesOrder) as JObject;
            int salesOrderId = 0;

            // assign to relevant model property here...
            var fieldVal = JSONParser.GetValue("deserialisedSalesOrder", "salesorderlineid");

            //foreach (JProperty jsonObj in deserialisedSalesOrder.Children())
            //{

            //}

            return true;
        }
        #endregion
    }
}