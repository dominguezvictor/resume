
class modelo {
    constructor(lenguaje) {
        this.lenguaje = lenguaje || 'spanish';
        this.diccionario = {
            english: {
                nav1: 'Home',
                nav2: 'Projects',
                lenguajes:'Languages',
                estudios:"Bachelor's Degree in Administrative Computer Systems",
                proyectos:'Personal projects',
                valores: {                    
                    valores1:'Responsibility',
                    valores2:'Teamwork',
                    valores3:'Creativity',
                    valores4:'Commitment',
                },
                frameworks:'Libraries and frameworks',
                acerca:'Passionate programmer of web technologies with 4 years of experience in Front-End and Back-End development of ERP systems and e-commerce portals using languages ​​such as JavaScript, Pascal and SQL Server.'
            },
            spanish: {
                nav1: 'Inicio',
                nav2: 'Proyectos',
                lenguajes:'Lenguajes',
                estudios:'Lic. Sistemas computaciones administrativos',
                proyectos:'Proyectos personales',
                valores: {
                    valores1:'Responsabilidad',
                    valores2:'Trabajo en equipo',
                    valores3:'Creatividad',
                    valores4:'Compromiso',
                },
                frameworks:'Librerías y frameworks',
                acerca:'Programador apasionado de las tecnologías web con 4 años de experiencia en el desarrollo Front-End y Back-End de sistemas ERP y portales de comercio electrónico usando lenguajes como JavaScript, Pascal y SQL Server.'
            }
        }
    }
}

var modulo = '';

document.addEventListener('DOMContentLoaded', function () {

    modulo = new modelo();
    //Aqui va el llamado a las funciones que carga inicial
    construccionInicial.call(this);   
    
   
});

function construccionInicial(){

    configuraPanelValores()
    .construyePanelProyectos()
    //.configuraEventoDarkMode()
    .configuraEventosLenguaje();

    //ocultarMenuAlScroll();
}

function configuraEventosLenguaje(){
    var self = this;
    let cambiaLenguaje = (lenguaje) => {
        if (modulo.lenguaje !== lenguaje){
            document.getElementById('nav-1').innerHTML = self.modulo.diccionario[lenguaje].nav1;
            document.getElementById('nav-2').innerHTML = self.modulo.diccionario[lenguaje].nav2;
            document.getElementById('vidg-lbl-lenguajes').innerHTML = self.modulo.diccionario[lenguaje].lenguajes;
            document.getElementById('vidg-estudios').innerHTML = self.modulo.diccionario[lenguaje].estudios;
            document.getElementById('titulo-panelProyectos').innerHTML = self.modulo.diccionario[lenguaje].proyectos;
            document.getElementById('vidg-valores-1').innerHTML = self.modulo.diccionario[lenguaje].valores.valores1;
            document.getElementById('vidg-valores-2').innerHTML = self.modulo.diccionario[lenguaje].valores.valores2;
            document.getElementById('vidg-valores-3').innerHTML = self.modulo.diccionario[lenguaje].valores.valores3;
            document.getElementById('vidg-valores-4').innerHTML = self.modulo.diccionario[lenguaje].valores.valores4;
            document.getElementById('vidg-librariesframeworks').innerHTML = self.modulo.diccionario[lenguaje].frameworks;
            document.getElementById('user-perfil').innerHTML = self.modulo.diccionario[lenguaje].acerca;            
            modulo.lenguaje = lenguaje;

            let vdgTarjetas = $('#PanelProyectos').data('VDGTarjetas');
            if (vdgTarjetas) {
                vdgTarjetas.traduce(lenguaje);
            }
        }
    }

    $(".vidg-lenguaje-div :input").change(function() {        
        cambiaLenguaje(this.dataset.lenguaje); // points to the clicked input button
    });
}

function configuraEventoDarkMode(){
    let btnswitch = document.getElementById('darkModeSwitch');
    btnswitch.addEventListener('change',(e)=>{        
        console.log(e.srcElement.checked);
    });

    return this;
}

function configuraPanelValores(){
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
    return this;
}

function construyePanelProyectos() {
    //VIDG: 25-08-2020 -> Inicia código del componente que mostrará los artículos de videojuegos
    let dataSource = [{
        id: '001',
        img: 'img/kof.png',
        titulo: 'The king of fighters',
        descripcion: {
            english:'Web Page that collects information about the best of the arcade game the king of fighters',
            spanish:'Página que recopila información de las mejores entregas del juego de arcade the king of fighters'
        }, 
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

    return this;
}

function ocultarMenuAlScroll(){
    var prevScrollpos = window.pageYOffset;
    var contenedor = document.querySelector('.contenedor');
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header-menu").style.top = "0";
            contenedor.style.marginTop = '80px';
        } else {
            document.getElementById("header-menu").style.top = "-70px";
            contenedor.style.marginTop = '15px';

        }
        prevScrollpos = currentScrollPos;
    }
}