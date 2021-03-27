import {Mail} from './Mail';
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Persona} from './Persona';

let personas:Array<Persona> = [];

console.log('------------- Iniciamos ejecución del programa -------------------');

console.log('############# Se crean y muestran 5 registros ###################');

let zeida = new Persona("Zeida", "Rodríguez Mendoza", 24, "56406618Q", "5/01/1997", "verde", "F", [], [], [], "Propio");
let reyes = new Persona("Reyes", "Moreno", 63, "56423418D", "3/03/1957", "verde", "M", [], [], [], "Familia");
let jonay = new Persona("Jonay", "Mendoza", 38, "56406348C", "14/09/1982", "azul", "F", [], [], [], "Familia");
let fayna = new Persona("Fayna", "Mendoza", 44, "56189218B", "09/10/1977", "rosado", "F", [], [], [], "Familia");
let luis = new Persona("Luis", "García", 65, "56392018A", "11/12/1954", "verde", "M", [], [], [], "Familia");

let mailzeida = new Mail("Personal", "Zeida@gmail.com");
zeida.addMails(mailzeida);
let mailjonay = new Mail("Personal", "Jonay@gmail.com");
jonay.addMails(mailjonay);
let mailreyes = new Mail("Personal", "Reyes@gmail.com");
reyes.addMails(mailreyes);
let mailfayna = new Mail("Personal", "Fayna@gmail.com");
fayna.addMails(mailfayna);
let mailluis = new Mail("Personal", "Luis@gmail.com");
luis.addMails(mailluis);

let direccionzeida = new Direccion("Calle Venegas", "5", "3", "b", "35678", "Las Palmas", "Las Palmas");
zeida.addDireccion(direccionzeida);
let direccionreyes = new Direccion("Calle Monanza", "10", "2", "e", "35675", "Las Palmas", "Las Palmas");
reyes.addDireccion(direccionreyes);
let direccionjonay = new Direccion("Calle Laguna", "7", "1", "c", "35672", "Las Palmas", "Las Palmas");
jonay.addDireccion(direccionjonay);
let direccionfayna = new Direccion("Calle La Suerte", "2", "1", "a", "32678", "Las Palmas", "Las Palmas");
fayna.addDireccion(direccionfayna);
let direccionluis = new Direccion("Calle Troya", "6", "1", "b", "35638", "Las Palmas", "Las Palmas");
luis.addDireccion(direccionluis);


let telefonozeida = new Telefono("Personal", "923867534");
zeida.addTelefono(telefonozeida);
let telefonoluis = new Telefono("Trabajo", "986723231");
let telefonoluis2 = new Telefono("Personal", "986767831");
luis.addTelefono(telefonoluis);
luis.addTelefono(telefonoluis2);
let telefonofayna = new Telefono("Personal", "876543829");
fayna.addTelefono(telefonofayna);
let telefonoreyes = new Telefono("Casa", "987654378");
reyes.addTelefono(telefonoreyes);
let telefonojonay = new Telefono("Fijo", "389324930");
jonay.addTelefono(telefonojonay);


personas.push(zeida, reyes, jonay, fayna, luis);
for (let persona of personas) {
    console.log(persona);
  }
  console.log('############# Fin punto 1 ###################');

console.log('############# Buscamos un registro por su DNI, modificamos email, direccion y telefono y se muestra ###################');

let zeidamod = personas.filter(persona => persona.dni == "56406618Q")[0];
zeidamod.borrarDireccion(0);
zeidamod.borrarEmail(0);
zeidamod.borrarTelefono(0);
zeida.addDireccion(new Direccion("Calle Tori", "1", "3", "E", "35429", "Arucas", "Las Palmas"));
zeida.addTelefono(new Telefono("Trabajo", "293020211"));
zeida.addMails(new Mail("Trabajo", "Zeida@outlook.es"));

console.log(zeidamod);
console.log('############# Fin punto 2 ###################');

console.log('############# Se muestran todos los registros y sus modificaciones ###################');
for (let persona of personas) {
    console.log(persona);
  }

  console.log('############# Fin punto 3 ###################');

console.log ('----------- Finalizamos ejecución del programa --------------------');

