<%@ page language="java" pageEncoding="GBK"%>
<%@ include file="/inc/bpsHeader.jsp"%>
<head>
<%@ include file="/inc/meta.jsp"%>
<title>字典管理</title>
<%@ include file="/inc/bpsResource.jsp"%>
<script language="javascript" src="queryProtocols.js" type="text/javascript"></script>

<script>
Ext.BLANK_IMAGE_URL = "/EcbpsWeb/lib/ext/resources/images/default/s.gif";
Ext.QuickTips.init();
XY.Page.init({"menuCode":"000153010001",
	"permissions":{},
	"gridConfs":{
		"protocolPTLGridPanel":{
			"caption":null,
		 	"columns":[
				["protocolName","协议名称","protocolName",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["versionNo","版本号","versionNo",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["effectiveDate","生效日期","effectiveDate",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["invalidDate","失效日期","invalidDate",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["srcOrderNo","流水号","srcOrderNo",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["certName","姓名","certName",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["bankType","银行类别","bankType",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["operate","操作","operate",100,null,null,null,null,null,null,null,null,null,null,"0"]
		  	 ],
			"pagingInfo":[20],
			"sortInfo":null}
	}});
</script>

</head>
<body>
	<div id="layoutPage" class="xyz-layout-single">
	    <div>
	     	<div id="tabBar">
	      	</div>
	    </div>
	</div>
	
	<!--tab protocolPTLTab配置 start-->
	<div>
		<div id="protocolPTLTab" class="xyz-layout-lr-l">
		  <div>
			  <div class="xyz-layout-ud-u" >
			  	<div>
				  	<div style="height:70px">
					    <!--查询表单-->
						<form id="protocolPTLForm">
							<table width="100%" class="xyz-form" cellspacing="1">
							  	<tr>
									<td class="xyz-label">业务类型</td>
									<td class="xyz-field">
							    		<div id="comb_busiType" ></div>
								  	</td>
								  	<td class="xyz-label">协议版本号</td>
									<td class="xyz-field">
								    	<input class="xyz-text xyz-text-atuo" id="ptl_ver" />
								  	</td>
								  	<td class="xyz-label">业务流水号</td>
									<td class="xyz-field">
								    	<input class="xyz-text xyz-text-atuo" id="src_order_no" />
								  	</td>
								  	<td align="left">
								  		<input id="protocolPTLQuery" type="button" value="查  询">
								  	</td>
						        </tr>
					    	</table>	
						</form>
					</div>
			  	</div>     		  	
				<div >
					<div id="protocolPTLGrid"></div>
				</div>
			  </div>
			</div>
		</div>
		
		
	</div>
  
	
</body>
</html>

