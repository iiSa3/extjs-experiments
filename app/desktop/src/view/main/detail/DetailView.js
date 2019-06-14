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
          id: 'new-personnel-name',
          bind: {
            value: '{personnel.name}'
          }
        },
        {
          xtype: 'emailfield',
          name: 'email',
          label: 'Email',
          id: 'new-personnel-email',
          bind: {
            value: '{personnel.email}'
          }
        },
        {
          xtype: 'textfield',
          name: 'phone',
          label: 'Phone',
          id: 'new-personnel-phone',
          bind: {
            value: '{personnel.phone}'
          }
        },
        {
          xtype: 'button',
          text: 'Save',
          id: 'new-personnel-save',
          listeners: {
            tap: function() {
              var p = this.parent.parent.getViewModel().get('personnel');
              var personnelViews = Ext.ComponentQuery.query(".personnelview");
              console.log(personnelViews);
              personnelViews.forEach(function(pv){
                console.log(pv.getStore());
                pv.getStore().loadData([p], true);
                console.log(pv.getStore().getData());
                // console.log(pv.getViewModel().get('items'));
                // pv.getViewModel().set('items', [p]);
                // console.log(pv.getViewModel().get('items'));
              });
            }
          }
        }
      ]
    }
  ]
});