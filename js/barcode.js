function imageUploadHandler(existingImageUrl = '') {
    return {
        imageUrl: existingImageUrl,
        previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            }
        }
    };
}