Ext.define('MyExtGenApp.view.personnel.PersonnelViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.personnelviewcontroller',

	onItemSelected: function (sender, record) {

		Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this person?', (choice) => {
			if(choice === 'yes') {
				sender.store.remove(record);
			}
		}, this);
	},

	// onConfirm: function (choice) {
	// 	if (choice === 'yes') {
	// 		console.log(this.sender.store);
	// 		this.sender.store.remove(this.record);
	// 		// Ext.destroy(this.record);
	// 	}
	// }
});
