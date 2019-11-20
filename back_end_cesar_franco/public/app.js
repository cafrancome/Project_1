var Template = '<div class="card horizontal">' +
               '<div class="card-image">' +
               '<img src="images/home.jpg">' +
               '</div>' +
               '<div class="card-stacked">' +
               '<div class="card-content">' +
               '<div>' +
               '<b>Direccion: $Direccion$ </b><p></p>' +
               '</div>' +
               '<div>' +
               '<b>Ciudad: $Ciudad$ </b><p></p>' +
               '</div>' +
               '<div>' +
               '<b>Telefono: $Telefono$ </b><p></p>' +
               '</div>' +
               '<div>' +
               '<b>Código postal: $CP$ </b><p></p>' +
               '</div>' +
               '<div>' +
               '<b>Precio: $Precio$ </b><p></p>' +
               '</div>' +
               '<div>' +
               '<b>Tipo: $Tipo$ </b><p></p>' +
               '</div>' +
               '</div>' +
               '<div class="card-action right-align">' +
               '<a href="#">Ver más</a>' +
               '</div>' +
               '</div>' +
               '</div>';

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
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

function GetAll() {
  let data = GetAllData()
    data.forEach( (obj) => {
      console.log(obj);
    });
}

function GetAllData() {      
  return new Promise(function (resolve, reject) {
      fs.readFile(dataPath, 'utf8', function (err, readData) {
          if (err) reject(err)
          resolve(JSON.parse(readData))
      });
  });
}

function GetCity () {
  return new Promise(function (resolve, reject) {
      fs.readFile(dataPath, 'utf8', function (err, readData) {
          if (err) reject(err)
          resolve(JSON.parse(readData))
      })
  })
}

function GetType() {
  return new Promise(function (resolve, reject) {
      fs.readFile(dataPath, 'utf8', function (err, readData) {
          if (err) reject(err)
          resolve(JSON.parse(readData))
      })
  })
}

$("#buscar").on('click', function() {
  GetAll()
});

setSearch()
