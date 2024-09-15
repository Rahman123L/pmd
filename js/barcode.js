function imageUploadHandler() {
    return {
        imageUrl: null,
        previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            }
        }
    };
}