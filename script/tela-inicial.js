function carregarImagem() {
    var url = "https://www.mocky.io/v2/5be35d6a2f00006b00ca2319";
    var ajaxRequest = $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            $.each(data,function(){
                template = '<div class="populateImg" src=" ' + this.photoUrl + '"><p class="nome">' + this.name + '</p><p class="tags">' + this.tags + '</p><a src="' + this.urlClient + '"><img src="../src/link-dir.png"/></div>';
                $('.galeria').append(template);
            });
        }
    });
    return ajaxRequest;
}
carregarImagem();