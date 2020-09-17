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

    construyePanelProyectos();
    
});


function construyePanelProyectos() {
    //VIDG: 25-08-2020 -> Inicia código del componente que mostrará los artículos de videojuegos
    let dataSource = [{
        id: '001',
        img: 'img/kof.png',
        titulo: 'The king of fighters',
        descripcion: 'Página que recopila información de las mejores entregas del juego de arcade the king of fighters',
        link:'kof.html'
    }];

    let vdgTarjetas = $('#PanelProyectos').data('VDGTarjetas');
    if (!vdgTarjetas) {
        $('#PanelProyectos').VDGTarjetas({
            dataSource: (typeof dataSource === 'object' && dataSource.length > 0) ? dataSource : false,            
        });
    } else {
        vdgTarjetas.Rebind(dataSource);
    }
    //VIDG: 25-08-2020 -> Termina componente que mostrará artículos de videojuegos
}