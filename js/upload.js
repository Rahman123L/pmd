function fileUploader() {
    return {
        files: [],
        handleFileUpload(event) {
            Array.from(event.target.files).forEach(file => {
                let isValid = file.type === 'application/pdf';
                this.files.push({
                    name: this.getFileNameWithoutExtension(file.name),
                    file: file,
                    isValid: isValid,
                });
            });
        },
        removeFile(index) {
            this.files.splice(index, 1);
        },
        renameFile(index) {
            const newFile = document.getElementById(`file-${index}`);
            if (newFile) {
                const oldFile = this.files[index];
                oldFile.name = this.getFileNameWithoutExtension(newFile.value);
                this.files[index] = {
                    name: oldFile.name,
                    file: newFile,
                    isValid: true
                };
            }
        },
        getFileNameWithoutExtension(fileName) {
            const lastDotIndex = fileName.lastIndexOf('.');
            if (lastDotIndex !== -1) {
                return fileName.substring(0, lastDotIndex);
            }
            return fileName;
        }
    };
}