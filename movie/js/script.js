$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'dde993b',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies


            } else {
                $('#movie-list').html(`
                <div class="col>
                <h1 class="text-center">` + result.Error + `</h1>
                </div>`)
            }
        }
    });
});