$(function () {

    document.getElementsByName('i').style.display = 'none';
});

function addSalesOrderLine(srcElem) {
}

function removeSalesOrderLine(srcElem) {
}

function fieldValueChanged(lineNo, srcElem) {


}

function updateLineFinancials(srcElem) {
}

function updateOrderFinancials() {
}

// "Save Sales Order"
function buildLineJSON() {

    var plcLine = {};
    var plcLines = [];

    $('#salesOrderLinesContainer .plcLine').each(function () {

        var row = {};

        row.salesorderlineid = $(this).data('salesorderlineid');
    });
}

// #region AJAX calls to code-behind web methods

// This replaces the normal asp.net form postback...
function submitForm(plcLine) {

    var jsonVal = jsonToString("salesOrder", plcLine);

    $.ajax({
        method: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "ajaxonly.aspx/UpdateSalesOrder",
        data: jsonVal,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        success: function (response) {
            console.log('submit success! ', response.data);
        },
        beforeSend: function () {

        }
    });
}
// end #region

// #region Helper functions
function jsonToString(param, record) {
    var jsonObj;
    jsonObj = "{\"" + param + "\": \"" + JSON.stringify(record).replace(/\"/g, "\\\"") + "\"}";
    return jsonObj;
}


function stringToDecimal(inputVal) {
    return Number.parseFloat(inputVal).toFixed(2);
}

// end #region

// #region Dynamic HTML

function buildHtml() {

    var plcLine = $([
        "<div class=\"row plcLine\" data-indx=" + productsRowCount + " data-salesorderlineid=\"0\">",
        "<div class=\"col-sm-7\">",
        "<div class=\"row\">",
        "<div class=\"col-sm-6\">",
        "<select class=\"form-control clsProducts\" data-control=\"products\" onchange=\"fieldValueChanged('" + productsRowCount + "', this)\"></select></div>",
        "<div class=\"col-sm-6\">",
        "<select class=\"form-control clsPackages\" data-control=\"packages\" onchange=\"fieldValueChanged('" + productsRowCount + "', this)\"></select></div></div></div>",
        "<div class=\"col-sm-5\">",
        "<div class=\"row\"><div class=\"col-sm-3 text-center\">",
        "<select class=\"form-control clsCondition\" data-control=\"condition\" onchange=\"fieldValueChanged('" + productsRowCount + "', this)\"></select></div>",
        "<div class=\"col-sm-2 text-center\">",
        "<input type=\"text\" class=\"form-control clsPrice\" data-control=\"price\" value=\"0.00\" onblur=\"fieldValueChanged('" + productsRowCount + "', this)\" /></div>",
        "<div class=\"col-sm-4\"><div class=\"row\">",
        "<div class=\"col-sm-3 text-center\">",
        "<input type=\"text\" class=\"form-control clsQuantity\" data-control=\"quantity\" value=\"1\" onblur=\"fieldValueChanged('" + productsRowCount + "', this)\" /></div>",
        "<div class=\"col-sm-5\"><input type=\"text\" class=\"form-control clsDiscount\" data-control=\"discount\" value=\"0.00\" onblur=\"fieldValueChanged('" + productsRowCount + "', this)\" /></div>",
        "<div class=\"col-sm-4 text-center\">",
        "<select class=\"form-control clsTaxCode\" data-control=\"tax\" onchange=\"fieldValueChanged('" + productsRowCount + "', this)\"></select></div></div></div>",
        "<div class=\"col-sm-3 text-center\"><div class=\"row\"><div class=\"col-sm-9\">",
        "<input type=\"text\" class=\"form-control clsTotal text-right\" readonly=\"true\" data-control=\"total\" value=\"0.00\" onchange=\"fieldValueChanged('" + productsRowCount + "', this)\" /></div>",
        "<div class=\"col-sm-3\">",
        "<input type=\"button\" class=\"btn btn-xs btn-danger btn-block\" value=\"X\" onclick=\"removeSalesOrderLine('" + productsRowCount + "')\" />",
        "</div></div></div></div></div></div>"
    ].join("\n"));

    return plcLine;
}

// end #region

// "<div class=\"row clsLoadSpinner\"><div class=\"col-sm-1\" data-control=\"loadspinner\"><img src=\"/js/lightbox/images/loading.gif\"></div></div>"