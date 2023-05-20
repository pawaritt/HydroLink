$.ajax({
    type: 'GET',
    dataType: 'json',
    url: '/brandadmin/setup',
    success: function(response) {
        var brandhtml = '';
        response.brands.map(function (brand) {
            brandhtml += `
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">${ brand.name }</a>
                <ul aria-expanded="false">
                    <li><a href="${ brand.code }/balance">balance</a></li>
                    <li><a href="#">transfer</a></li>
                    <li><a href="#">refund</a></li>
                </ul>
            </li>
            `
        });
        console.log('query');
        document.querySelector('#brands').innerHTML = brandhtml;
    },
    error: function(response) {
        console.log(response.error);
    }
})
console.log('pluem')