const collections = new Array();
const data = JSON.parse(document.getElementById('jsdata').textContent);
if (data.channelcode) {
    datalc = new BroadcastChannel(data.channelcode);
} else {
    datalc = null
}
const channel2 = datalc;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const channelcode = makeid(25)
const channel1 = new BroadcastChannel(channelcode)

function AlertSuccessMessage(message) {
    container = document.getElementById('message_container');
    $('#message_container div').fadeOut();
    container.innerHTML = `
    <div class="alert alert-success solid alert-dismissible fade show">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>	
        <strong>Success!</strong> ${ message }
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
        <strong>Error!</strong> ${ message }
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
        </button>
    </div>`
    $('#message_container div').fadeIn();
}

function AddCollection(title, slug, alert = true) {
    if (!(collections.includes(slug))) {
        collections.push(slug)
        container = document.getElementById('collection-container');
        container.innerHTML += `
        <a id="remove-collection">
            <div class="btn btn-square btn-outline-light btn-sm" id="added-collection" value="${ slug }" style="border-style:dashed;">
                ${ title }  &times;
            </div>
        </a> `
        $('#remove-collection').click(function(){
            $(this).remove()
            for( var i = 0; i < collections.length; i++){ 
                if ( collections[i] == slug) {          
                    collections.splice(i, 1); 
                }
            }        
        })
        $('#added-collection').fadeIn();
        if (alert) {
            AlertSuccessMessage(`attached ${title}`)
        }
    } else {
        if (alert) {
            AlertErrorMessage(`${title} is already attached`)
        }
    }
}

$(document).ready(function() {
    channel1.addEventListener("message", (e) => {
        AddCollection(e.data.title, e.data.slug)
    });
    $('#add-image').click(function() {
        elem = $("#selectcollection :selected");
        AddCollection(elem.attr('name'), elem.val());
    });

    $('form[id="option"]').submit(function(e) {
        e.preventDefault();
        var requestData =  new FormData(this);
        console.log('click1')
        $.ajax({
            url: window.location.pathname,
            type: 'POST',
            data: requestData,
            success: function(response) {
                console.log(channel2)
                if (channel2) {
                    channel2.postMessage({
                        'code': response.product.code,
                        'title': response.product.title
                    })
                    window.opener.focus();
                    window.close();
                }
                console.log('click2.2')
                window.location = response.url
            },
            error: function(response) {
                console.log(response.errors)
            },
            cache: false,
            contentType: false,
            processData: false
        });
        return false;
    });
});