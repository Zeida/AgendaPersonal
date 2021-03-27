"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Persona.prototype.borrarTelefono = function (posicion) {
        this.telefonos.splice(posicion, 1);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.borrarEmail = function (posicion) {
        this.mails.splice(posicion, 1);
    };
    Persona.prototype.addMails = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.borrarDireccion = function (posicion) {
        this.direcciones.splice(posicion, 1);
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (value) {
            this._apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (value) {
            this._cumpleaños = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (value) {
            this._telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (value) {
            this._notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (value) {
            this._direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
