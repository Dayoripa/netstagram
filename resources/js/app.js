import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

    const dropzone = new Dropzone('#dropzone', {
        dictDefaultMessage: 'Sube tu imagen aqui',
        acceptedFiles: ".png,.jpg,.jpeg,.gif",
        addRemoveLinks: true,
        dictRemoveFile: 'Delete file',
        maxFiles: 1,
        uploadMultiple: false,

        init: function() {
            if (document.querySelector('[name="imagen"]').value.trim()){
                let imagenPublicada = {};
                imagenPublicada.size = 1234;
                imagenPublicada = document.querySelector('[name="imagen"]').value;

                this.options.addedfile.call(this, imagenPublicada);
                this.options.thumbnail.call(this, imagenPublicada, `/uploads/${imagenPublicada.name}`);

                imagenPublicada.previewElement.classList.add(
                    "dz-success",
                    "dz-complete"
                );
                
            }
        },
    });

    dropzone.on("success", function(file, response) {
        document.querySelector('[name="imagen"]').value = response.imagen;
    });

    dropzone.on("removedfile", function() {
        document.querySelector('[name="imagen"]').value = ""; //Para borrar la imagen del DOM
    });
