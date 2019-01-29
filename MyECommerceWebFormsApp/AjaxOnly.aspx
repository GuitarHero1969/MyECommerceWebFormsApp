<%@ Page Title="Ajax Only Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AjaxOnly.aspx.cs" Inherits="MyECommerceWebFormsApp.AjaxOnly" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <h3>This page eliminates possible long response times when loading control data using postbacks. It uses an ajax solution instead</h3>
    <p>Use this area to provide additional information.</p>

    <div class="container">
        <div class="row">
            <div class="col-10">
                <input id="btnSalesOrderLine" class="btn btn-xs btn-default pull-right" type="button" value="Add Sales Order Item" />
            </div>
            <div id="salesOrderLinesContainer">
                <div class="row">
                    <div class="col-sm-7">
                        <div class="row">
                            <div class="col-sm-6 text-center">
                                Product
                            </div>
                            <div class="col-sm-6 text-center">
                                Package
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="row">
                            <div class="col-sm-3 text-center">
                                Condition
                            </div>
                            <div class="col-sm-2 text-center">
                                Price
                            </div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-sm-3 text-center">
                                        Qty
                                    </div>
                                    <div class="col-sm-5 text-center">
                                        Discount
                                    </div>
                                    <div class="col-sm-4 text-center">
                                        Tax
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 text-center">
                                Total
                            </div>
                        </div>
                    </div>
                </div>
                <asp:Literal ID="salesOrderlines" runat="server"></asp:Literal>
            </div>
            <asp:HiddenField ID="hiddenSalesOrderId" runat="server" ClientIDMode="Static" />
        </div>
        <div class="row">
            <div class="col-sm-9 col-lg-10">
            </div>
            <div class="col-sm-3 col-lg-2">
                <div class="panel-heading">Order Total</div>
                <div class="panel-body">
                    <div role="form" class="form-horizontal">

                        <span id="lblShipping" class="col-sm-4 col-lg-6 control-label">Shipping</span>
                        <div class="col-sm-8 col-lg-6">
                            <input id="txtShipping" class="form-control text-right" data-control="shipping" value="0.00" />
                        </div>

                        <span id="lblDiscount" class="col-sm-4 col-lg-6 control-label">Discount</span>
                        <div class="col-sm-8 col-lg-6">
                            <input id="txtDiscount" class="form-control text-right" readonly="readonly" value="0.00" />
                        </div>

                        <span id="lblVATTotal" class="col-sm-4 col-lg-6 control-label">VAT</span>
                        <div class="col-sm-8 col-lg-6">
                            <input id="txtVATTotal" class="form-control text-right" readonly="readonly" value="0.00" />
                        </div>

                        <span id="lblTotal" class="col-sm-4 col-lg-6 control-label"><strong>Total</strong></span>
                        <div class="col-sm-8 col-lg-6">
                            <input id="txtOrderTotal" class="form-control text-right" readonly="readonly" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>


    <i class="fas fa-spinner fa-spin"></i>
</asp:Content>
