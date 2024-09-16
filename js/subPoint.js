function app() {
    return {
        menus: [],
        showButtons: false,
        addmenu() {
            this.menus.push({
                title: '',
                submenus: []
            });
            this.updateShowButtons();
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
            this.updateShowButtons();
        },
        hapusAll() {
            this.menus = [];
            this.updateShowButtons();
        },
        updateShowButtons() {
            this.showButtons = this.menus.length > 0;
        },
    }
}