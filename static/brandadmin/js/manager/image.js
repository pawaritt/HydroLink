console.log('link')
function getCSRF() {
    if (document.cookie && document.cookie != '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, 10) === ('csrftoken=')) {
                var cookieValue = decodeURIComponent(cookie.substring(10));
                break;
            }
        }
        return cookieValue
    }
}

const csrf_token = getCSRF()

function AlertSuccessMessage(message) {
    container = document.getElementById('message_container');
    $('#message_container div').fadeOut();
    container.innerHTML = `
    <div class="alert alert-success solid alert-dismissible fade show">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>	
        <strong>Success!</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
    </div>`
    $('#message_container div').fadeIn();
}

function AlertErrorMessage(message) {
    container = document.getElementById('message_container');
    $('#message_container div').fadeOut();
    container.innerHTML = `
    <div class="alert alert-danger solid alert-dismissible fade show">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        <strong>Error!</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
    </div>`
    $('#message_container div').fadeIn();
}

function RemoveImage(elem) {
    slug = elem.getAttribute('id')
    $.ajax({
        url: window.location.pathname,
        type: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrf_token
        },
        data: JSON.stringify(slug),
        success: function (response) {
            console.log('success')
            AlertSuccessMessage(response.message)
            elem.remove()
        },
        error: function (response) {
            console.log(response.responseJSON)
            responsedata = response.responseJSON
            AlertErrorMessage(responsedata.message)
        },
        cache: false,
        contentType: false,
        processData: false
    });
}
function AddImage(image, slug) {
    var newDiv = document.createElement('div')
    newDiv.className = "col-xl-3 col-lg-6 col-sm-6"
    newDiv.id = slug
    newDiv.innerHTML += `
        <div class="card card-btn">
            <div class="card-header">
                <div class="email-check">
                    <label class="like-btn mb-0">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="dropdown">
                    <div class="btn-link" data-bs-toggle="dropdown">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5" />
                            <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5" />
                            <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" role="delete" >Delete</a>
                        <a class="dropdown-item" role="edit">Edit</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="new-arrival-product">
                    <div class="new-arrivals-img-contnent">
                        <img class="img-fluid" src="${ image.url }">
                    </div>
                    <div class="new-arrival-content text-center mt-12">
                        <span class="badge badge-primary">size : ${ image.size } MB</span>
                    </div>
                </div>
            </div>
        </div>`
        
    document.getElementById('images').appendChild(newDiv);
    newDiv.querySelector('a[role="delete"]').addEventListener('click', function(){
        RemoveImage(newDiv)
    })
}
var Drop = Dropzone.options.DidDropzone = {
    thumbnailWidth:"250",
    thumbnailHeight:"300",
    addRemoveLinks: true,
    autoProcessQueue: false, //stops from uploading files until user submits form
    paramName: "images", // The name that will be used to transfer the file
    clickable: true, // This allows the dropzone to select images onclick
    acceptedFiles: '.jpg,.jpeg,.JPEG,.JPG,.png,.PNG', //accepted file types
    maxFiles: 10, //Maximum number of files/images in dropzone
    parallelUploads: 10,
    init: function(){

        var submitButton = document.querySelector("#image-btn")
        var url = $('#DidDropzone').attr("action")
        myDropzone = this;

        //process the queued images on click
        submitButton.addEventListener("click", function() {
            myDropzone.processQueue(); 
        });

        //fire the images to url
        myDropzone.on("processing", function(file) {
          myDropzone.options.url = url;
        });

        //clear the dropzone when complete
        myDropzone.on("complete", function(file) {
            myDropzone.removeFile(file);
        });
    },
    success: function(file, json){
        AddImage(json.image)
    },
}

document.getElementsByName('image-card').forEach(function(element) {
    element.querySelector('a[role="delete"]').addEventListener('click', function(){
        RemoveImage(element)
    })
})
