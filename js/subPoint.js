function app() {
    return {
        submenus: [],
        addSubmenu(parentSubmenu = null) {
            const newSubmenu = {
                title: '',
                submenus: []
            };
            if (parentSubmenu) {
                parentSubmenu.submenus.push(newSubmenu);
            } else {
                this.submenus.push(newSubmenu);
            }
        }
    }
}