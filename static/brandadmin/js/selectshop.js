$(document).ready(function() {
    console.log($('#select'))
    $('#select').select2()
})
$('form[id="selectbrand"]').submit(function(e) {
    e.preventDefault();
    $form = $(this);
    var requestData = new FormData(this);
    elem = $("#select :selected");
    requestData.set('selectbrand', elem.val());
    console.log(elem.val())
    $.ajax({
        url: window.location.pathname,
        type: 'POST',
        data: requestData,
        success: function(response) {
            console.log(`/brandadmin/${response.brandcode}/${response.method}`)
            window.location = `/brandadmin/${response.brandcode}/${response.method}`
        },
        error: function(response) {
            window.location = ""
        },
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
});
