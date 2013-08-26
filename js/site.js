(function($){
     var url = 'https://api.github.com/repos/post-forking/post-forking/contributors?callback=?'
     $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data){
            $.each(data.data, function(i, user){
                $('#contributors-list').append( '<li><a href="'+ user.url.replace('api.','').replace('users/','') +'"><img src="'+ user.avatar_url +'" alt="'+ user.login +'" class="contributor-avatar"></a></li>' )
            })
        },
        error: function(e){
            console.log(e)
        }
    })
})(jQuery)
