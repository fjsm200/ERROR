Ext.ns("XY.app.pages.ecbps.common.queryProtocols");
XY.app.pages.ecbps.common.queryProtocols = function(){
	
	//初始化请求地址
	var SERVICE = {
			QUERY_PROTOCOL_PTL : "/EcbpsWeb/json/common/queryProtocols.do"
	};
	
	//全局参数
	var tabPanel=null,
		protocolPTLCombox=null,
		protocolPTLGrid = null,
		protocolPTLForm=null;

	var createProtocolPTLTab = function(){
		//初始化布局
		var protocolPTLTab = new XY.layout.BorderLayout({
			  renderTo : 'protocolPTLTab'
		});
		
		protocolPTLForm = new XY.form.BasicForm("protocolPTLForm");
		
		initProtocolPTLCombox();//初始化业务类型下拉框
		initProtocolPTLGrid();//初始化协议模板网格
		//initProtocolPTLButton();//初始化按钮
		bindProtocolPTLBtnEvent();//绑定事件
		//表单渲染
		return protocolPTLTab;
	};
	var initProtocolPTLButton = function(){
		
	};
	
	var bindProtocolPTLBtnEvent = function(){
		Ext.getCmp("protocolPTLQuery").on("click",queryprotocolPTL);
	};
	
	var queryprotocolPTL = function(){
		var data = protocolPTLForm.getFieldValues();
		if(vilidataProtocolPTLForm(data)){
			Ext.MessageBos.alert("信息提示：","请输入查询条件进行查询!");
			return false;
		};
		protocolPTLGrid.load({
			//busi_type : protocolPTLCombox.getValue(),
			src_order_no : data['src_order_no'],
			pv_id : data['ptl_ver']
		});
	};
	//验证是否有查询条件，如果没有任何查询条件，则不进行查询
	var vilidataProtocolPTLForm = function(data){
		Ext.Array.each(data,function(item){
			if(item.legth!=0)
				return true;
			else
				return false;
		});
	};
	var initProtocolPTLCombox = function(){
		protocolPTLCombox = new XY.form.ComboBox({
			renderTo : 'comb_busiType',
			id : 'protocolPTLCombox',
			//url:SERVICE.QUERY_PROTOCOL_PTL,
			displayField: '',
			valueField: '',
			emptyText:'请选择...',
			editable : false
		});
	};
	
	var initProtocolPTLGrid = function(){
		protocolPTLGrid = new XY.grid.GridPanel({
			autoHeight :true,
			autoHeight :true,
			url : SERVICE.QUERY_PROTOCOL_PTL ,
			stateId : 'protocolPTLGridPanel',
			renderTo : 'protocolPTLGrid',
			stateful:false,
			viewConfig: {
				forceFit : true,
				autoFill:true
			}//,
			//bbar:false
		});
		protocolPTLGrid.reload();
	};
	
 	var initTabPanel=function(){
 		// 定义tab组件
        tabPanel = new Ext.TabPanel({
	        renderTo : 'tabBar',
	        enableTabScroll:true,
	        defaults: {autoScroll:true},
            padding:'3px',
            items : [{
                       id : 'protocolPTLTab1',
                        title : "协议版本查询",
                        layout : "fit"
                    },{
                        id : 'signedProtocolTab1',
                        title : "已签协议查询",
                        iconCls:'',
                        layout : "fit"
                    }
                    ]
        });
        
        // 动态加载标签页
        tabPanel.on("tabchange", function(tabPanel, tabItem){
            if (tabItem.items.length == 0) {
            	
                switch (tabItem.id) {
                    case "protocolPTLTab1" :
                    	tabItem.add(createProtocolPTLTab());
                        break;
                    case "signedProtocolTab1" :
                    	//tabItem.add(createSignedProtocolTab());
                        break;
                }
                tabItem.doLayout();
                
            }
            
        });
        //设置首次展示的tab
		tabPanel.setActiveTab(0);
       
 	};
 	
 	
 	//页面初始化
 	var init = function() {
 		initTabPanel();
		new XY.layout.BorderLayout({
			renderTo : 'layoutPage'
	    });
	};
	
	return {
		init:init,
		getTabPanel:function(){
			return tabPanel;
		},
	};
	
}();
XY.onReady(XY.app.pages.ecbps.common.queryProtocols.init,XY.app.pages.ecbps.common.queryProtocols);