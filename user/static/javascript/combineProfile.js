$('.likebutton').click(function(){
    var catid;
    catid = $(this).attr("data-catid");
$.ajax(
    {
        type:"GET",
        url: "http://127.0.0.1:8000/api/getPost",
        data:{
                 post_id: catid
        },
                success: function( data )
        {
            $( '#like'+ catid ).remove();
            $( '#message' ).text(data);
        }
     })
});