<%@ page language="java" pageEncoding="GBK"%>
<%@ include file="/inc/bpsHeader.jsp"%>
<head>
<%@ include file="/inc/meta.jsp"%>
<title>�ֵ����</title>
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
				["protocolName","Э������","protocolName",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["versionNo","�汾��","versionNo",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["effectiveDate","��Ч����","effectiveDate",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["invalidDate","ʧЧ����","invalidDate",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["srcOrderNo","��ˮ��","srcOrderNo",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["certName","����","certName",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["bankType","�������","bankType",100,null,null,null,null,null,null,null,null,null,null,"0"],
				["operate","����","operate",100,null,null,null,null,null,null,null,null,null,null,"0"]
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
	
	<!--tab protocolPTLTab���� start-->
	<div>
		<div id="protocolPTLTab" class="xyz-layout-lr-l">
		  <div>
			  <div class="xyz-layout-ud-u" >
			  	<div>
				  	<div style="height:70px">
					    <!--��ѯ��-->
						<form id="protocolPTLForm">
							<table width="100%" class="xyz-form" cellspacing="1">
							  	<tr>
									<td class="xyz-label">ҵ������</td>
									<td class="xyz-field">
							    		<div id="comb_busiType" ></div>
								  	</td>
								  	<td class="xyz-label">Э��汾��</td>
									<td class="xyz-field">
								    	<input class="xyz-text xyz-text-atuo" id="ptl_ver" />
								  	</td>
								  	<td class="xyz-label">ҵ����ˮ��</td>
									<td class="xyz-field">
								    	<input class="xyz-text xyz-text-atuo" id="src_order_no" />
								  	</td>
								  	<td align="left">
								  		<input id="protocolPTLQuery" type="button" value="��  ѯ">
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

