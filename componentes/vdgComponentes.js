+function($){

    'use strict'

    var DataKey = 'VDGTarjetas';

    var Clase = {     
        NoDatosMsj: 'No hay datos para mostrar',
    };

    var Selector = {
        data:'[data-widget="VDGTarjetas"]'
    };


    var VDGTarjetas = function(e,o){
        let self = this;
        this.element = e;
        this.options = o;
        this.options.NoDatosMsj = this.options.NoDatosMsj || Clase.NoDatosMsj;
        this.options.onClickElemento = this.options.onClickElemento || false;
        this.options.dataSource = (typeof this.options.dataSource === 'object' && this.options.dataSource.length > 0) ? this.options.dataSource : false;

        $(this.element).addClass('vdg-grid');        
        
        if (this.options.dataSource){
            this.ConstruyeTarjetas();
        }else{
            $(this.element).append('<div class="container vdg-no-datos">\
                                       <div class="row">\
                                          <div class="col-sm-12">\
                                             <h1>'+this.options.NoDatosMsj+'</h1>\
                                           </div>\
                                        </div>\
                                    </div>'); 
        }
    };

    VDGTarjetas.prototype.ConstruyeTarjetas = function(){
        
        for (let index = 0; index < this.options.dataSource.length; index++) {
            
            let $prodElement = $('<div id='+this.options.dataSource[index]["id"]+' class="card vdg-Tarjeta">\
                                 </div>').appendTo($(this.element));

            $prodElement.data(
                'tarjeta',
                {
                    'id':this.options.dataSource[index]['id'],
                    'titulo':this.options.dataSource[index]['titulo'],
                    'descripcion':this.options.dataSource[index]['descripcion'].spanish,
                        
                }
            ).append('<img src="'+this.options.dataSource[index]['img']+'"\
                          class="img-responsive">\
                          <h4>'+this.options.dataSource[index]['titulo']+'</h4>\
                          <p>'+this.options.dataSource[index]['descripcion'].spanish+'</p>\
                          '); 
            
            if(this.options.dataSource[index]['link']){
                $prodElement.append('<a href="'+this.options.dataSource[index]['link']['page']+'" target="_blank">ver mas...</a>')

            }
                      
        }
    };

    VDGTarjetas.prototype.traduce = function(lenguaje){

        for (let index = 0; index < this.options.dataSource.length; index++) {
            document.getElementById(this.options.dataSource[index]['id']).children[2].innerHTML = this.options.dataSource[index]['descripcion'][lenguaje];
            if(document.getElementById(this.options.dataSource[index]['id']).children[3]){
                document.getElementById(this.options.dataSource[index]['id']).children[3].innerHTML = this.options.dataSource[index]['link'][lenguaje];
            }
        }
    };
   
    VDGTarjetas.prototype.Rebind = function(){
    };

    VDGTarjetas.prototype.LimpiaGrid = function(){
    };

    function Plugin(o){
      var $this = $(this);
      var data = $this.data(DataKey);
      if(!data){
          var ops = $.extend({},{}, $this.data(), typeof o === 'object' && o );
          $this.data(DataKey, new VDGTarjetas($this,ops));
      }  
      return $this;
    };

    $.fn.VDGTarjetas = Plugin;

    $(window).on('load',function(){
        $(Selector.data).each(function(){
            Plugin.call($(this));
        });
    });

}(jQuery)