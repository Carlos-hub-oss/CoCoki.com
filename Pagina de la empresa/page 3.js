let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

let carritoItems = [];
let carritoTotal = 0;

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "1px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Precio por cada unidad";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;

}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

function agregarAlCarrito() {
    const nombre = modeloSeleccionado.innerHTML;
    const precio = parseFloat(precioSeleccionado.innerHTML.replace('$', '').trim());
    const cantidadSelect = document.getElementById("cantidad");


  if (!cantidadSelect) {
    console.error("No se encontró el elemento con ID 'cantidad'");
  } else {
    console.log("Cantidad seleccionada:", cantidadSelect.value)
  }

  
  const cantidad = parseInt(document.getElementById("cantidad").value);
  
    const producto = {
        nombre,
        precio,
        cantidad,
        total: precio * cantidad,
    };

    window.alert("Agregado exitosamente");
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    cantidadSelect.value = "1"
    quitarBordes();
  
    carritoItems.push(producto);
  
    carritoTotal += producto.total;
  
    renderizarCarrito();
  }
  
  function renderizarCarrito() {
    const carritoDiv = document.getElementById("carrito-items");
    carritoDiv.innerHTML = "";
  
    carritoItems.forEach((item, index) => {
        carritoDiv.innerHTML += `
            <div class="carrito-item">
                <p><b>${item.nombre}</b></p>
                <p>Precio: $${item.precio.toFixed(2)}</p>
                <p>Cantidad: ${item.cantidad}</p>
                <p>Total: $${item.total.toFixed(2)}</p>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
            <hr>
        `;
    });
  
    const totalElement = document.getElementById("total");
    totalElement.innerHTML = `Total: $${carritoTotal.toFixed(2)}`;
  }
  
  function eliminarDelCarrito(index) {
    const item = carritoItems[index];
  
    carritoTotal -= item.total;
  
    carritoItems.splice(index, 1);
  
    renderizarCarrito();
  }