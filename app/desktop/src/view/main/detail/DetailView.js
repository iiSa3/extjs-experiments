Ext.define('MyExtGenApp.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'default',
  viewModel: {
	  data: {
	    personnel: {
          name: "",
          email: "",
          phone: ""
        }
      }
  },
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">New Personnel</div>'
    },
    {
      xtype: 'formpanel',
      items: [
        {
          xtype: 'textfield',
          name: 'name',
          label: 'Name',
          bind: {
            value: '{personnel.name}'
          }
        },
        {
          xtype: 'emailfield',
          name: 'email',
          label: 'Email',
          bind: {
            value: '{personnel.email}'
          }
        },
        {
          xtype: 'textfield',
          name: 'phone',
          label: 'Phone',
          bind: {
            value: '{personnel.phone}'
          }
        },
        {
          xtype: 'button',
          text: 'Save',
          listeners: {
            tap: function() {
              console.log(this);
              console.log(this.getEmail());
            }
          }
        }
      ]
    }
  ],
  initComponent: function() {
	  this.callParent(arguments);
	  console.log("Init detailview");
  }
});