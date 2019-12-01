//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})

function setSearch() {
  let busqueda = $('#checkPersonalizada');
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

setSearch();

((document, window, undefined, $) => {
  (() => {
    return Buscador = {
      io: io(),
      $Template: $("div[name='clasificado']").clone(),


      Init: function () {
        var self = this;
        self.loadAllcities()
        self.loadTypes()
        self.loadHome()
        $('#buscar').click(() => {
          var ciudad = $('#ciudad').val();
          var tipo = $('#tipo').val();
          var precio = $('#rangoPrecio').val();
          var filter = {
            Ciudad: ciudad,
            Tipo: tipo,
            Precio: precio
          }
          self.Search(filter);
        })

        $('#tipo, #ciudad, #rangoPrecio').change(() => {
          var ciudad = $('#ciudad').val();
          var tipo = $('#tipo').val();
          var precio = $('#rangoPrecio').val();
          var filter = {
            Ciudad: ciudad,
            Tipo: tipo,
            Precio: precio
          }
          self.Search(filter);
        })
      },

      ajaxRequest: function (url, type, data) {
        return $.ajax({
          url: url,
          type: type,
          data: data
        })
      },

      loadAllcities: function () {
        var self = this;
        self.ajaxRequest('/Routes/cities', 'GET', {})
          .done(data => {
            var $ciudades = $('#ciudad');
            $.each(data, (i, ciudad) => {
              $ciudades.append(`<option value="${ciudad}">${ciudad}</option>`);
            })
          })
          .fail(err => {
            console.log(err)
          })
      },

      loadTypes: function () {
        var self = this;
        self.ajaxRequest('/Routes/types', 'GET', {})
          .done(data => {
            var $tipo = $('#tipo');
            $.each(data, (i, tipo) => {
              $tipo.append(`<option value="${tipo}">${tipo}</option>`);
            })
          })
          .fail(err => {
            console.log(err)

          })
      },

      loadHome: function () {
        var self = this;
        self.ajaxRequest('/Routes/home', 'GET', {})
          .done(data => {
            var $home = $('#inmuebles');
            $.each(data, (i, home) => {
              console.log(self.$Template);
              var htmlNew = self.$Template.html().replace(":Direccion:", home.Direccion).replace(":Ciudad:", home.Ciudad)
                                                  .replace(":Telefono:", home.Telefono)
                                                  .replace(":Codigo_Postal:", home.Codigo_Postal)
                                                  .replace(":Precio:", home.Precio)
                                                  .replace(":Tipo:", home.Tipo);
              var control = self.$Template.clone().html(htmlNew);
              $home.append( control );
            })
          })
          .fail(err => {
            console.log(err)
          })
      },

      Search: function (filter) {
        var self = this;
        self.ajaxRequest('/Routes/home', 'GET', {})
          .done((data) => {
            var $home = $('#inmuebles');
            $home.html("");
            $.each(data, (i, home) => {
              var htmlNew = self.$Template.html().replace(":Direccion:", home.Direccion).replace(":Ciudad:", home.Ciudad)
                .replace(":Telefono:", home.Telefono)
                .replace(":Codigo_Postal:", home.Codigo_Postal)
                .replace(":Precio:", home.Precio)
                .replace(":Tipo:", home.Tipo);
              var control = self.$Template.clone().html(htmlNew)
              if (filter === undefined) {
                $home.append(control)
              } else {
                var show = (filter.Ciudad === undefined || filter.Ciudad == "" || filter.Ciudad == home.Ciudad)
                var show = show && (filter.Tipo === undefined || filter.Tipo == "" || filter.Tipo == home.Tipo)
                var precio = filter.Precio.split(";");
                var precioCasa = home.Precio.replace("$", "").replace(",", "");
                var show = show && (precioCasa >= precio[0] && precioCasa <= precio[1]);
                console.log(`Ciudad:${filter.Ciudad}, Tipo: ${filter.Tipo}, Precio: ${precio}, precioInmueble: ${precioCasa}, Show: ${show}`);
                if (show) {
                  $home.append(control)
                }
              }
            })
          })
          .fail(err => {
            console.log(err)
          })
      }
    }
  })()

  Buscador.Init()
  setTimeout(() => {
    $('select').material_select();
  }, 1000);
})(document, window, undefined, jQuery);