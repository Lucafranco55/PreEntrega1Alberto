//proyecto de control de stock

function newProduct(ubi, name, price, stock, descripcion) {
  this.ubi = ubi;
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.descripcion = descripcion;
}

const Yerba = new newProduct(1, "yerba", "$700", 20, "Sin palos/ 1kl");
const Azucar = new newProduct(2, "azucar", "$250", 10, "Refinada / 1kl");
const Galletitas = new newProduct(3, "galletitas", "$1000", 50, "Sin azucar");
const Mermelada = new newProduct(4, "mermelada", "$400", 15, "Light");

console.log(Yerba, Azucar, Galletitas, Mermelada);

const producto = parseInt(
  prompt(
    "Ingrese el producto que quieras comprar: 1. Yerba - 2. Azucar - 3.Galletitas - 4.Mermelada"
  )
);

let seleccionProducto = false;
let infoProductoSeleccionado;

while (seleccionProducto === false)
  if (producto === Yerba.ubi) {
    seleccionProducto = true;
    infoProductoSeleccionado = Yerba;
  } else if (producto === Azucar.ubi) {
    seleccionProducto = true;
    infoProductoSeleccionado = Azucar;
  } else if (producto === Galletitas.ubi) {
    seleccionProducto = true;
    infoProductoSeleccionado = Galletitas;
  } else if (producto === Mermelada.ubi) {
    seleccionProducto = true;
    infoProductoSeleccionado = Mermelada;
  } else {
    producto = parseInt(
      prompt(
        "Ingrese el producto qeu deseas comprar: : 1. Yerba - 2. Azucar - 3.Galletitas - 4.Mermelada"
      )
    );
  }

console.log("Producto seleccionado ", infoProductoSeleccionado);
