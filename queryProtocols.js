Ext.ns("XY.app.pages.ecbps.common.queryProtocols");
XY.app.pages.ecbps.common.queryProtocols = function(){
	
	//��ʼ�������ַ
	var SERVICE = {
			QUERY_PROTOCOL_PTL : "/EcbpsWeb/json/common/queryProtocols.do"
	};
	
	//ȫ�ֲ���
	var tabPanel=null,
		protocolPTLCombox=null,
		protocolPTLGrid = null,
		protocolPTLForm=null;

	var createProtocolPTLTab = function(){
		//��ʼ������
		var protocolPTLTab = new XY.layout.BorderLayout({
			  renderTo : 'protocolPTLTab'
		});
		
		protocolPTLForm = new XY.form.BasicForm("protocolPTLForm");
		
		initProtocolPTLCombox();//��ʼ��ҵ������������
		initProtocolPTLGrid();//��ʼ��Э��ģ������
		//initProtocolPTLButton();//��ʼ����ť
		bindProtocolPTLBtnEvent();//���¼�
		//����Ⱦ
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
			Ext.MessageBos.alert("��Ϣ��ʾ��","�������ѯ�������в�ѯ!");
			return false;
		};
		protocolPTLGrid.load({
			//busi_type : protocolPTLCombox.getValue(),
			src_order_no : data['src_order_no'],
			pv_id : data['ptl_ver']
		});
	};
	//��֤�Ƿ��в�ѯ���������û���κβ�ѯ�������򲻽��в�ѯ
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
			emptyText:'��ѡ��...',
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
 		// ����tab���
        tabPanel = new Ext.TabPanel({
	        renderTo : 'tabBar',
	        enableTabScroll:true,
	        defaults: {autoScroll:true},
            padding:'3px',
            items : [{
                       id : 'protocolPTLTab1',
                        title : "Э��汾��ѯ",
                        layout : "fit"
                    },{
                        id : 'signedProtocolTab1',
                        title : "��ǩЭ���ѯ",
                        iconCls:'',
                        layout : "fit"
                    }
                    ]
        });
        
        // ��̬���ر�ǩҳ
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
        //�����״�չʾ��tab
		tabPanel.setActiveTab(0);
       
 	};
 	
 	
 	//ҳ���ʼ��
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