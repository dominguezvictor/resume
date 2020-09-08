document.addEventListener('DOMContentLoaded', function () {
    $('.div-img-valores-circle').each(function () {
        $(this).hover(function (e) {            
            let img = this.firstElementChild.children[0].src;
            if (e.type === "mouseenter") {
                this.firstElementChild.children[0].src = img.replace('gray', 'white');
            } else {
                this.firstElementChild.children[0].src = img.replace('white', 'gray');
            }
        });
    });

});