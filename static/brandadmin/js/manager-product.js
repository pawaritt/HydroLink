function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
const channelcode = makeid(25)
const channel1 = new BroadcastChannel(channelcode)
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

function AddProduct(product, alert = true) {
    container = document.getElementById('product-container');
    container.innerHTML += `
        <div class="col-lg-12" id="${product.code}" style="display:none;">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade show active" id="first">
                                    <img class="img-fluid" src="${product.thumbnail}" alt="">
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="second">
                                    <img class="img-fluid" src="${product.thumbnail}" alt="">
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="third">
                                    <img class="img-fluid" src="${product.thumbnail}" alt="">
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="for">
                                    <img class="img-fluid" src="${product.thumbnail}" alt="">
                                </div>
                            </div>
                            <div class="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                                <!-- Nav tabs -->
                                <ul class="nav slide-item-list mt-3" role="tablist">
                                    <li role="presentation" class="show">
                                        <a href="#first" role="tab" data-bs-toggle="tab">
                                            <img class="img-fluid" src="${product.thumbnail}" alt=""
                                                width="50">
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#second" role="tab" data-bs-toggle="tab"><img class="img-fluid"
                                                src="${product.thumbnail}" alt="" width="50"></a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#third" role="tab" data-bs-toggle="tab"><img class="img-fluid"
                                                src="${product.thumbnail}" alt="" width="50"></a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#for" role="tab" data-bs-toggle="tab"><img class="img-fluid"
                                                src="${product.thumbnail}" alt="" width="50"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--Tab slider End-->
                        <div class="col-xxl-9 col-xl-8 col-lg-7  col-md-6">
                            <div class="product-detail-content">
                                <!--Product details-->
                                <div class="new-arrival-content pr">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div>
                                                <h4>${product.title}</h4>
                                            </div>
                                        </div>	
                                        <div class="dropdown">
                                            <div class="btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5"></circle>
                                                    <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5"></circle>
                                                    <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5"></circle>
                                                </svg>
                                            </div>
                                            <div class="dropdown-menu dropdown-menu-right" style="margin: 0px;">
                                                <button class="dropdown-item" role="delete-product" productcode="${product.code}">Delete</button>
                                                <button class="dropdown-item">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-review star-rating">
                                        <ul>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <span class="review-text">(34 reviews) / </span><a class="product-review"
                                            href="" data-bs-toggle="modal" data-bs-target="#reviewModal">Write a
                                            review?</a>
                                    </div>
                                    <div class="d-table mb-2">
                                        <p class="price float-start d-block">$${product.unit_price}</p>
                                    </div>
                                    <p>Availability: <span class="item"> In stock <i
                                                class="fa fa-brandping-basket"></i></span>
                                    </p>
                                    <p>Product code: <span class="item">${product.code}</span> </p>
                                    <p>Brand: <span class="item">Lee</span></p>
                                    <p>Product tags:&nbsp;&nbsp;
                                        <span class="badge badge-success light">bags</span>
                                        <span class="badge badge-success light">clothes</span>
                                        <span class="badge badge-success light">shoes</span>
                                        <span class="badge badge-success light">dresses</span>
                                    </p>
                                    <p class="text-content">${product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    $('button[role="delete-product"]').click(function (e) {
        code = this.getAttribute('productcode')
        $(`div[id=${code}]`).fadeOut(
            170, function() { 
                $(this).remove(); 
            })
        AjaxDeleteProduct(code)
    });
    $(`div[id=${ product.code }]`).fadeIn(170);
    if (alert) {
        AlertSuccessMessage(`attached ${product.title}`)
    }
}

function AjaxAddProduct(code) {
    console.log(code)
    $.ajax({
        url: window.location.pathname,
        type: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrf_token
        },
        data: JSON.stringify(code),
        success: function (response) {
            AddProduct(response.product)
        },
        error: function (response) {
            responsedata = response.responseJSON
            console.log(responsedata)
            AlertErrorMessage(responsedata.messages)
        },
        cache: false,
        contentType: false,
        processData: false
    });
}

function AjaxDeleteProduct(code) {
    $.ajax({
        url: window.location.pathname,
        type: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': csrf_token
        },
        data: JSON.stringify(code),
        success: function (response) {
            console.log('success')
            AlertSuccessMessage(response.messages)
        },
        error: function (response) {
            console.log('error')
            responsedata = response.responseJSON
            AlertErrorMessage(responsedata.messages)
        },
        cache: false,
        contentType: false,
        processData: false
    });
}
$(document).ready(function () {
    channel1.addEventListener("message", (e) => {
        window.location.reload();
    });
    $('#add-product').click(function () {
        elem = $("#selectproduct :selected");
        console.log('pluem');
        AjaxAddProduct(elem.val());
    });
    $('button[role="delete-product"]').click(function (e) {
        console.log('click')
        code = this.getAttribute('productcode')
        $(`div[id=${code}]`).fadeOut(
            170, function() { 
                $(this).remove(); 
            })
        AjaxDeleteProduct(code)
    });;
});