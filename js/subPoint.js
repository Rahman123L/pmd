function app() {
    return {
        menus: [],
        showButtons: false,
        hiddenButtons: true,
        addmenu() {
            this.menus.push({
                title: '',
                submenus: []
            });
            this.updateButtonStates();
        },
        addSubmenu(parentMenu) {
            const newSubmenu = {
                title: '',
                submenus: []
            };
            parentMenu.submenus.push(newSubmenu);
        },
        hapus(index) {
            this.menus.splice(index, 1);
            this.updateButtonStates();
        },
        hapusAll() {
            this.menus = [];
            this.updateButtonStates();
        },
        updateButtonStates() {
            this.showButtons = this.menus.length > 0;
            this.hiddenButtons = this.menus.length === 0;
        }
    }
}