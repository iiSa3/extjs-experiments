Ext.define('MyExtGenApp.view.main.nav.top.TopView', {
	extend: 'Ext.Toolbar',
	xtype: 'topview',
	cls: 'topview',
	shadow: false,
	items: [
		{
			xtype: 'button',
			ui: 'topviewbutton',
			reference: 'navtoggle',
			handler: 'onTopViewNavToggle',
			iconCls: 'x-fa fa-navicon'
		}
	]
});