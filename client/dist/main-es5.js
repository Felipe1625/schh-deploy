var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navigation></app-navigation>\n<div class=\"container p-3\">\n  <router-outlet></router-outlet>  \n</div>\n\n\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-form/administrador-form.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-form/administrador-form.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n     <div class=\"card\">\n          <h5 *ngIf=\"!update;else tituloUpdate\" class=\"card-header text-center\">Ingresar administrador</h5>\n          <!-- <i class=\"fas fa-long-arrow-alt-left float-left\"></i> -->\n          <ng-template #tituloUpdate>\n               <h5 class=\"card-header text-center\">Actualizar administrador</h5>\n          </ng-template>\n          <div class=\"card body \">\n               <form class=\"p-5 \">\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control\" autofocus\n                                   [(ngModel)]=\"administrador.Rut\" (input)=\"RutChange($event)\">\n                         </div>\n                         <div *ngIf=\"!rut;else rutCorrecto\" [hidden]=\"rut\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeRut}}\n                         </div>\n                         <ng-template #rutCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n \n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Nombre\" placeholder=\"Nombre\" class=\"form-control\"\n                                    (input)=\"NombreChange($event)\" [(ngModel)]=\"administrador.Nombre\" >\n                         </div>\n                         <div *ngIf=\"!nombre;else nombreCorrecto\" [hidden]=\"nombre\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeNombre}}\n                         </div>\n                         <ng-template #nombreCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                              </ng-template>\n                    </div>\n                   \n\n\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Apellido\" placeholder=\"Apellido\" class=\"form-control\"\n                                   [(ngModel)]=\"administrador.Apellido\" (input)=\"ApellidoChange($event)\">\n                         </div>\n                         <div *ngIf=\"!apellido;else apellidoCorrecto\" [hidden]=\"apellido\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeApellido}}\n                         </div>\n                         <ng-template #apellidoCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"password\" name=\"Contraseña\" placeholder=\"Contraseña\" class=\"form-control\"\n                                   [(ngModel)]=\"administrador.Password\" (input)=\"PasswordChange($event)\">\n                         </div>\n                         <div *ngIf=\"!password;else passwordCorrecto\" [hidden]=\"password\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajePassword}}\n                         </div>\n                         <ng-template #passwordCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"password\" name=\"RepetirContraseña\" placeholder=\"Repetir Contraseña\"\n                                   class=\"form-control\" (input)=\"RepetirPasswordChange($event)\" [(ngModel)]=\"RepetirPassword\">\n                         </div>\n                         <div [hidden]=\"repetirpassword\" id=\"alerta-mensaje\" class=\"alert alert-danger col-4 text-center\"\n                              role=\"alert\">\n                              {{mensajeRepetirerror}}\n                         </div>\n                    </div>\n\n                    <button [disabled]=\"!button\" class=\"btn btn-success\" *ngIf=\"!update;else guardar\"\n                         (click)=\"saveNewAdministrador()\">Guardar</button>\n                         <button routerLink=\"/administrador\" class=\"btn btn-success ml-2\">Volver</button> \n                    <ng-template #guardar>\n                         <button [disabled]=\"!button\" class=\"btn btn-success\"\n                              (click)=\"updateAdministrador()\">Actualizar</button>\n                               \n                    </ng-template>\n                    \n               </form>\n          </div>\n     </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-list/administrador-list.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-list/administrador-list.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <h4 class=\"float-left\">Lista de administradores</h4>\n  </div>\n  <div class=\"col\">\n    <button id=\"btn-add\" class=\"btn btn-success float-right\" routerLink=\"/administrador/add\"><i class=\"fas fa-user-plus\"></i> Agregar Administrador</button>\n  </div>\n</div>\n<div class=\"row\">\n  <mat-form-field class=\"pr-3 col-3\">\n    <input matInput class=\"form-field col-1\" [formControl]=\"filtroRut\" placeholder=\"Filtro Rut\">\n  </mat-form-field>\n   <mat-form-field class=\"pr-3 col-3\">\n    <input matInput class=\"form-field col-1\" [formControl]=\"filtroNombre\" placeholder=\"Filtro Nombre\">\n  </mat-form-field> \n  <button type=\"button\" id=\"btn-filter\"><i class=\" ml-3 far fa-times-circle fa-2x\" (click)=\"LimpiarFiltros()\"></i></button>\n</div>\n\n\n<div class=\"mat-elevation-z3\">\n  <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z0 table-striped\">\n  \n    <ng-container matColumnDef=\"Rut\">\n      <th mat-header-cell *matHeaderCellDef> Rut </th>\n      <td mat-cell *matCellDef=\"let administrador\"> {{administrador.Rut}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"Nombre\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let administrador\"> {{administrador.Nombre}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"Acciones\">\n      <th mat-header-cell *matHeaderCellDef> Acciones </th>\n      <td mat-cell *matCellDef=\"let administrador\">\n        <button  type=\"button\" class=\"btn btn-info m-2\"\n          [routerLink]=\"['/administrador/update/',administrador.IdAdmin]\" routerLinkActive=\"router-link-active\"><i class=\"fas fa-pencil-alt\"></i></button>\n        <button  type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\"\n          data-target=\"#modalEliminar\" (click)=\"getAdministrador(administrador)\"><i class=\"fas fa-trash \"></i></button> \n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"Columnas\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: Columnas;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[4, 10, 20]\" showFirstLastButtons></mat-paginator>\n \n</div> \n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalEliminar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Eliminar administrador</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Se eliminara el siguiente administrador: {{administrador_modal.Nombre}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAdministrador()\"\n          data-dismiss=\"modal\">Eliminar</button>\n      </div>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n     <!-- <div class=\"row\">\n          <div class=\"col-4\">\n               <img class=\"imagen\" src=\"http://www.udec.cl/normasgraficas/sites/default/files/marcaderecha.gif\">\n          </div>\n          <div class=\"col-4\">\n               <img class=\"imagen\" src=\"https://yt3.ggpht.com/a/AGF-l79eHJSEAReTAFPhX0tmsuz2My5UVPBmwalq8g=s900-c-k-c0xffffffff-no-rj-mo\">\n          </div>\n          <div class=\"col-4\">\n               vhgh\n          </div>\n     </div> -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\" row justify-content-md-center mb-3\">\n \n     <div class=\"col-5 shadow mb-5 bg-white\">\n          <div>\n               <div class=\"row justify-content-md-center text-center\">\n                    <div>\n                         <!-- <i class=\"fas fa-user-tie fa-10x\"></i> -->\n                         <div style=\"position: relative;\n                         display: inline-block;\n                         text-align: center;\"><img class=\"w-100\"\n                                   src=\"https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_960_720.jpg\">\n                              <div style=\"position: absolute;\n                         top: 50%;\n                         left: 50%;\n                         transform: translate(-50%, -50%);color: white;font-size: 25px;font-weight:900;\">Administrador\n                              </div>\n                         </div>\n                         <form class=\"p-4 \">\n                              <div class=\"input-group mb-3\">\n                                   <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i\n                                                  class=\"fas fa-user-circle\"></i></span>\n                                   </div>\n                                   <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su rut\" name=\"rut\"\n                                        aria-label=\"Username\" aria-describedby=\"basic-addon1\" autofocus\n                                        [(ngModel)]=\"user.rut\" (input)=\"datosChange($event)\">\n                              </div>\n                              <div class=\"input-group mb-3\">\n                                   <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-lock\"></i></span>\n                                   </div>\n                                   <input type=\"password\" class=\"form-control\" placeholder=\"Ingrese su contraseña\"\n                                        name=\"password\" aria-label=\"Username\" aria-describedby=\"basic-addon1\"\n                                        [(ngModel)]=\"user.password\" (input)=\"datosChange($event)\">\n                              </div>                                                \n                              \n                              <button class=\"btn btn-success btn-ingresar\" (click)=\"signin()\">Ingresar</button>\n                         </form>\n\n                    </div>\n\n               </div>\n          </div>\n     </div>\n     <div style=\"margin: 10px;\"></div>\n     <div class=\"col-5 shadow mb-5 bg-white text-center\">\n          <div>\n               <div class=\"row justify-content-md-center text-center\">\n                    <div>\n                         <div style=\"position: relative;\n                         display: inline-block;\n                         text-align: center;\"><img class=\"w-100\"\n                                   src=\" https://cdn.pixabay.com/photo/2018/05/08/20/31/work-3383831_960_720.jpg\">\n                              <div style=\"position: absolute;\n                         top: 50%;\n                         left: 50%;\n                         transform: translate(-50%, -50%);color: white;font-size: 25px;font-weight:900;\">Operadores\n                              </div>\n                         </div>\n                         <div class=\"mt-2 pt-2\">\n                              <p>Ingresar al panel de control</p>\n                         </div>\n                         <div class=\"mt-2 pt-2\">\n                              <button class=\"btn btn-success w-50 btn-ingresar\" onclick=\"deshabilitarbutton()\"\n                                   routerLink=\"/operadores\">Panel de control</button>\n                         </div>\n                         <!-- <span class=\"mensaje-error\"> <i class=\"fas fa-times margin\"></i>Usuario o contraseña incorrectas</span> -->\n                         <div class=\"alert alert-danger m-4\" role=\"alert\" [hidden]=\"mensajeErrorLogin\">\n                              Usuario o contraseña incorrectos!\n                            </div>\n                    </div>\n               </div>\n          </div>\n     </div>\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> -->\n  <div class=\"mat-elevation-z3\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-3\" style=\"background-color: #F4F4F4 !important;padding:15px !important;\">\n  <ng-container *ngIf=\"authServiceLogin.loggedIn() ; else LoggedOut\">\n    <div class=\"container\">\n      <li class=\"navbar-brand\">Administrador</li>\n      <!-- <a class=\"navbar-brand\">Administrador</a> -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link tab\" routerLink=\"/trabajo\" onclick=\"pintarBordeNav(this)\"><i class=\"fas fa-clipboard\"></i>\n              Trabajo</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/pausa\" onclick=\"pintarBordeNav(this)\"><i class=\"fas fa-business-time\"></i>\n              Pausas</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/ot\" onclick=\"pintarBordeNav(this)\"><i class=\"fas fa-book-open\"></i>\n              Codigos</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link \" routerLink=\"/operador\" onclick=\"pintarBordeNav(this)\"><i\n                class=\"fas fa-hard-hat\"></i>Opeardor</a>\n          </li>\n\n          <li class=\"nav-item active\">\n            <a class=\"nav-link \" routerLink=\"/administrador\" onclick=\"pintarBordeNav(this)\"><i\n                class=\"fas fa-user-tie\"></i> Administrador</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link \" style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#modalCerrarSesion\"><i class=\"fas fa-sign-out-alt\"></i> Cerrar\n              sesión</a>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #LoggedOut>\n    <div class=\"container\">\n      <li class=\"navbar-brand\">Sistema control HH</li>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto \">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link tab\" routerLink=\"/\" onclick=\"pintarBordeNav(this)\"><i class=\"fas fa-user\"></i> Login</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ng-template>\n</nav>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalCerrarSesion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cerrar sesión</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Recuerde finalizar todo su trabajo antes de cerrar sesión\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"loggOut()\">Salir</button>\n      </div>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-form/operador-form.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-form/operador-form.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n     <div class=\"card\">\n          <h5 *ngIf=\"!update;else tituloUpdate\" class=\"card-header text-center\">Ingresar operador</h5>\n          <ng-template #tituloUpdate>\n               <h5 class=\"card-header text-center\">Actualizar operador</h5>\n          </ng-template>\n          <div class=\"card body \">\n               <form class=\"p-5 \">\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control\" autofocus\n                                   [(ngModel)]=\"operador.Rut\" (input)=\"RutChange($event)\">\n                         </div>\n                         <div *ngIf=\"!rut;else rutCorrecto\" [hidden]=\"rut\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeRut}}\n                         </div>\n                         <ng-template #rutCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Nombre\" placeholder=\"Nombre\" class=\"form-control\"\n                                   [(ngModel)]=\"operador.Nombre\" (input)=\"NombreChange($event)\">\n                         </div>\n                         <div *ngIf=\"!nombre;else nombreCorrecto\" [hidden]=\"nombre\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeNombre}}\n                         </div>\n                         <ng-template #nombreCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Apellido\" placeholder=\"Apellido\" class=\"form-control\"\n                                   [(ngModel)]=\"operador.Apellido\" (input)=\"ApellidoChange($event)\">\n                         </div>\n                         <div *ngIf=\"!apellido;else apellidoCorrecto\" [hidden]=\"apellido\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeApellido}}\n                         </div>\n                         <ng-template #apellidoCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"password\" name=\"Contraseña\" placeholder=\"Contraseña\" class=\"form-control\"\n                                   [(ngModel)]=\"operador.Password\" (input)=\"PasswordChange($event)\">\n                         </div>\n                         <div *ngIf=\"!password;else passwordCorrecto\" [hidden]=\"password\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajePassword}}\n                         </div>\n                         <ng-template #passwordCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n\n               \n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <mat-form-field>\n                                   <mat-select placeholder=\"Seleccione cargo\" [formControl]=\"operadorForm\"\n                                        (selectionChange)=\"selectChange($event.value)\" [(value)]=\"puestoSeleccionado\">\n\n                                        <mat-option *ngFor=\"let puesto of puestos\" [value]=\"puesto.IdPuestoTrabajador\">\n                                             {{puesto.Descripcion}}\n                                        </mat-option>\n                                   </mat-select>\n                                   <mat-error *ngIf=\"operadorForm.hasError('required')\">Debe seleccionar un puesto de\n                                        trabajo\n                                   </mat-error>\n                              </mat-form-field>\n                         </div>\n                         <div *ngIf=\"!cargo;else CargoSeleccionado\" [hidden]=\"cargo\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeCargo}}\n                         </div>\n                         <ng-template #CargoSeleccionado>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n\n\n                    <button [disabled]=\"!button\" class=\"btn btn-success mt-1\" *ngIf=\"!update;else guardar\"\n                         (click)=\"saveNewOperador()\">Guardar</button>\n                         <button routerLink=\"/operador\" class=\"btn btn-success ml-2 mt-1\">Volver</button> \n                    <ng-template #guardar>\n                         <button [disabled]=\"!button\" class=\"btn btn-success mt-1\"\n                              (click)=\"updateOperador()\">Actualizar</button>\n                    </ng-template>\n               </form>\n               <!-- <div class=\"row h-100 w-100\">\n                    <div class=\"col-6\">\n                         <img class=\"centrado\" src=\"https://icon-icons.com/icons2/1860/PNG/256/roadworker1_118000.png\">\n                    </div>\n                    <div class=\"col-6\">\n                         <form>\n                              <h5 class=\"mt-4 text-center\">Ingrese los datos solicitados</h5>\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control mt-4 mb-4\">\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control mb-4\">\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control mb-4\">\n                              <input type=\"text\" name=\"Rut\" placeholder=\"Rut\" class=\"form-control mb-4\">\n                              <button class=\"btn btn-success mb-4\">Agregar</button>\n                         </form>\n                    </div>\n               </div> -->\n          </div>\n     </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-list/operador-list.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-list/operador-list.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n     <div class=\"col\">\n          <h4 class=\"float-left\">Lista de operadores</h4>\n     </div>\n     <div class=\"col\">\n          <button id=\"btn-add\" class=\"btn btn-success float-right\" routerLink=\"/operador/add\"><i class=\"fas fa-user-plus\"></i> Agregar Operador</button>\n     </div> \n</div>\n\n<div class=\"row\">\n     <mat-form-field class=\"pr-3 col-3\">\n          <input matInput class=\"form-field col-1\" [formControl]=\"filtroRut\" placeholder=\"Filtro Rut\">\n        </mat-form-field>\n         <mat-form-field class=\"pr-3 col-3\">\n          <input matInput class=\"form-field col-1\" [formControl]=\"filtroNombre\" placeholder=\"Filtro Nombre\">\n        </mat-form-field>\n        <button type=\"button\" id=\"btn-filter\"><i class=\" ml-3 far fa-times-circle fa-2x\" (click)=\"LimpiarFiltros()\"></i></button>\n</div>\n<div class=\"mat-elevation-z3\">\n     \n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0 table-striped\">\n\n     \n     <ng-container matColumnDef=\"Rut\">\n          <th mat-header-cell *matHeaderCellDef> Rut </th>\n          <td mat-cell *matCellDef=\"let operador\"> {{operador.Rut}} </td>\n     </ng-container>\n\n\n     <ng-container matColumnDef=\"Nombre\">\n          <th mat-header-cell *matHeaderCellDef> Nombre </th>\n          <td mat-cell *matCellDef=\"let operador\"> {{operador.Nombre}} </td>\n     </ng-container>\n\n     <ng-container matColumnDef=\"Descripcion\">\n          <th mat-header-cell *matHeaderCellDef>Area </th>\n          <td mat-cell *matCellDef=\"let operador\"> {{operador.Descripcion}} </td>\n     </ng-container>\n      \n     <ng-container matColumnDef=\"Acciones\">\n          <th mat-header-cell *matHeaderCellDef> Acciones </th>\n          <td mat-cell *matCellDef=\"let operador\">\n               <button type=\"button\" class=\"btn btn-info m-2\"\n                    [routerLink]=\"['/operador/update/',operador.IdOperador]\" routerLinkActive=\"router-link-active\"><i class=\"fas fa-pencil-alt\"></i></button>\n               <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\"\n                    data-target=\"#modalEliminar\" (click)=\"getOperador(operador)\"><i class=\"fas fa-trash\"></i></button>\n          </td>\n     </ng-container>\n\n\n\n     <tr mat-header-row *matHeaderRowDef=\"Columnas\"></tr>\n     <tr mat-row *matRowDef=\"let row; columns: Columnas;\"></tr>\n    \n</table>\n<mat-paginator [pageSizeOptions]=\"[4, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalEliminar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Eliminar operador</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n                    Se eliminara el siguiente operador: {{operador_modal.Nombre}}\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOperador()\"\n                         data-dismiss=\"modal\">Eliminar</button>\n               </div>\n          </div>\n     </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-pantalla/operador-pantalla.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-pantalla/operador-pantalla.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-75\">\n     <div class=\"row\">\n          <div class=\"col-6\">\n\n               <div class=\"list-group scrollerVertical\">\n                    <li *ngFor=\"let operador of operadores\" class=\"list-group-item btn\" data-toggle=\"modal\"\n                         data-target=\"#modalPassword\" (click)=\"getPassword(operador)\">\n                         {{operador.Nombre}}</li>\n               </div>\n\n               <div id=\"divNombreOperador\" hidden>{{nombreOperador}}</div>\n               <div id=\"divRuta\" hidden>{{rutaPagina}}</div>\n\n\n          </div>\n          <div class=\"col-6\">\n\n               <h4 class=\"text-center\">{{Titulo}}</h4>\n\n               <button id=\"btnIniciarOt\" class=\"btn btn-success  w-100 buttonc mb-2\" data-toggle=\"\"\n                    data-target=\"#modalCodigo\" [disabled]=\"btnIniciar\">\n                    <div class=\"row h-100\" style=\"align-items: center\">\n                         <div class=\"col-4\">\n                              <i class=\"far fa-play-circle fa-7x float-left mt-1\"></i>\n                         </div>\n                         <div class=\"col-8\">\n                              <p class=\"text-left mt-3\">{{mensajeButtonIniciarOt}}</p>\n                         </div>\n                    </div>\n\n               </button>\n\n               <button class=\"btn btn-warning  w-100 buttonc mb-2\" [disabled]=\"btnPausa\" data-toggle=\"modal\"\n                    data-target=\"#modalPausa\">\n                    <div class=\"row h-100\" style=\"align-items: center\">\n                         <div class=\"col-4\">\n                              <i class=\"far fa-pause-circle fa-7x float-left mt-1\"></i>\n                         </div>\n                         <div class=\"col-8\">\n                              <p class=\"text-left mt-3\"> {{mensajeButtonPausa}}</p>\n                         </div>\n                    </div>\n               </button>\n\n               <button class=\"btn btn-info  w-100 buttonc mb-2\" [disabled]=\"btnCerrar\" data-toggle=\"modal\"\n                    data-target=\"#modalCerrarOt\">\n                    <div class=\"row h-100\" style=\"align-items: center\">\n                         <div class=\"col-4\">\n                              <i class=\"far fa-times-circle fa-7x float-left mt-1\"></i>\n                         </div>\n                         <div class=\"col-8\">\n                              <p class=\"text-left mt-3\">Cerrar Ot</p>\n                         </div>\n                    </div>\n\n               </button>\n\n               <!-- <button class=\"btn btn-danger  w-100 mt-3 buttonCerrarJornada\" data-toggle=\"modal\" [disabled]=\"btnCerrarJornadaLaboral\"\n                    data-target=\"#modalCerrarJornada\" (click)=\"CerrarJornada()\">\n                    <div class=\"row h-100\" style=\"align-items: center\">\n                         <div class=\"col-4\">\n                              <i class=\"far fa-clock fa-5x float-left\"></i>\n                         </div>\n                         <div class=\"col-8\">\n                              <p class=\"text-left mt-3\">Cerrar jornada laboral</p>\n                         </div>\n                    </div>\n\n               </button> -->\n          </div>\n\n     </div>\n</div>\n\n<!--Buttons para iniciar,pausar y cerrar ot-->\n<!-- <button id=\"btnIniciarOt\" class=\"btn btn-success buttonsss\" data-toggle=\"\" data-target=\"#modalCodigo\"\n     [disabled]=\"btnIniciar\">{{mensajeButtonIniciarOt}}</button>\n<button class=\"btn btn-warning  boton\" [disabled]=\"btnPausa\" data-toggle=\"modal\"\n     data-target=\"#modalPausa\">{{mensajeButtonPausa}}</button>\n<button class=\"btn btn-info  botonx\" [disabled]=\"btnCerrar\" data-toggle=\"modal\"\ndata-target=\"#modalCerrarOt\">Cerrar Ot</button> -->\n<!--Buttons para iniciar,pausar y cerrar ot-->\n\n\n<!-- Scroll de operadores-->\n<!-- <div>\n     <div class=\"scroller\">\n          <button id=\"{{operador.Nombre}}\" *ngFor=\"let operador of operadores\" class=\"btn btn-success col-2\" data-toggle=\"modal\"\n               data-target=\"#modalPassword\" (click)=\"getPassword(operador)\">{{operador.Nombre}}</button>\n     </div>\n</div>\n<div id=\"divNombreOperador\" hidden>{{nombreOperador}}</div> -->\n<!-- Scroll de operadores-->\n\n<!-- Modal Contraseña-->\n<div class=\"modal fade\" id=\"modalPassword\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\" data-backdrop=\"static\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\" *ngIf=\"!mostrarmodaljornadacerradaalingresarpassword; else modalmensajejornadacerrada\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Contraseña</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                         (click)=\"limpiarPassword()\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                         <label for=\"message-text\" class=\"col-form-label\">{{nombreOperadorModal}} ingrese su\n                              contraseña</label>\n                         <input type=\"password\" class=\"form-control\" id=\"inputPassword\" autofocus\n                              [(ngModel)]=\"passwordIngresada\" (input)=\"cerrarAlertaPassword()\">\n                    </div>\n                    <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"alertaPassword\">\n                         {{mensajAlertPassword}}\n                    </div>\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n                         (click)=\"limpiarPassword()\">Cerrar</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarPassword()\"\n                         onclick=\"cerrarModalPassword()\">Verificar</button>\n                    <div id=\"divcerrar\" hidden>{{password}}</div>\n               </div>\n          </div>\n\n     </div>\n\n<ng-template #modalmensajejornadacerrada>\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Jornada laboral cerrada</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                         (click)=\"limpiarPassword()\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n                    La jornada laboral fue cerrada, puede continuar su trabajo el siguiente dia laboral\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                         (click)=\"limpiarPassword()\">Cerrar</button>\n           \n                    <div id=\"divcerrar\" hidden>{{password}}</div>\n               </div>\n          </div>\n\n     </div>\n</ng-template>\n\n</div>\n<!-- Modal Contraseña-->\n\n\n<!-- Modal Codigo-->\n<div class=\"modal fade\" id=\"modalCodigo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\" data-backdrop=\"static\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Codigo Ot</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                         (click)=\"limpiarCodigo()\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                         <label for=\"message-text\" class=\"col-form-label\">Ingrese el codigo de la ot</label>\n                         <input class=\"form-control\" id=\"inputCodigo\" [(ngModel)]=\"codigoIngresado\"\n                              (input)=\"cerrarAlertaCodigo()\" />\n                    </div>\n                    <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"alertaCodigo\">\n                         {{mensajAlertCodigo}}\n                    </div>\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n                         (click)=\"limpiarCodigo()\">Volver</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"IniciarOt()\"\n                         onclick=\"cerrarModalCodigo()\">Iniciar Ot</button>\n               </div>\n          </div>\n     </div>\n</div>\n<!-- Modal Codigo-->\n\n\n\n<!-- Modal Pausa-->\n<div class=\"modal fade\" id=\"modalPausa\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\" data-backdrop=\"static\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Iniciar Pausa</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                         onclick=\"limpiarBordeMotivos()\" (click)=\"limpiarMotivoSeleccionado()\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body mt-1 mb-1\">\n\n                    <label for=\"message-text\" class=\"col-form-label\">Seleccione motivo de su pausa</label>\n\n\n                    <ul class=\"list-group\">\n                         <li *ngFor=\"let motivo of motivosPausas\" class=\"list-group-item btn\"\n                              (click)=\"getMotivoSeleccionado(motivo)\" onclick=\"pintarBordeMotivos(this)\">\n                              {{motivo.Descripcion}}</li>\n\n                    </ul>\n\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onclick=\"limpiarBordeMotivos()\"\n                         (click)=\"limpiarMotivoSeleccionado()\">Volver</button>\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"iniciarPausa()\" onclick=\"cerrarModalPausa()\"\n                         [disabled]=\"btnIniciarPausa\">Iniciar Pausa</button>\n               </div>\n          </div>\n     </div>\n</div>\n<!-- Modal Pausa-->\n\n\n<!-- Modal Reanudar Ot -->\n<div class=\"modal fade\" id=\"modalTerminarPausa\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Terminar Pausa</h5>\n\n               </div>\n               <div class=\"modal-body\">\n                    <label for=\"message-text\" class=\"col-form-label\">La pausa terminara y la ot proseguira.</label>\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Continuar pausa</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"terminarPausa()\"\n                         onclick=\"cerrarModalTerminarPausa()\">Terminar pausa</button>\n               </div>\n          </div>\n     </div>\n</div>\n<!-- Modal Reanudar Ot -->\n\n\n\n<!-- Modal Cerrar Ot -->\n<div class=\"modal fade\" id=\"modalCerrarOt\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cerrar Ot</h5>\n\n               </div>\n               <div class=\"modal-body\">\n                    <label for=\"message-text\" class=\"col-form-label\">Terminar orden de trabajo actual</label>\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Continuar Ot</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"cerrarOtDesdeBotonCerrar()\"\n                         onclick=\"cerrarModalCerrarOt()\">Cerrar Ot</button>\n               </div>\n          </div>\n     </div>\n</div>\n<!-- Modal Cerrar Ot -->\n\n\n\n<!-- Modal Cerrar Jornada -->\n<div class=\"modal fade\" id=\"modalCerrarJornada\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\" *ngIf=\"!cerrarjornada; else modalcerrarjornada\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <div class=\"col-6\">\n                         <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Pendientes de cierre</h5>\n                    </div>\n\n                    <div class=\"col-6\">\n                         <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{titulomodalcerrarjornadadescripcion}}</h5>\n                    </div>\n\n               </div>\n               <div class=\"modal-body mt-1 mb-1\">\n                    <div class=\"row\">\n                         <div class=\"col-6\">\n                              <ul class=\"list-group\" *ngFor=\"let ot of listOtIngresadas\">\n                                   <li  class=\"list-group-item\" *ngIf=\"(ot.Activa!=false)\">\n                                        <div class=\"row h-100\" style=\"align-items: center\" >\n                                             <div class=\"col-8\" >\n                                                  {{ot.Nombre}}\n                                             </div>\n                                             <div class=\"col-1 mr-3\">\n                                                  <button id=\"btn-cerrar-en-modal\" (click)=\"cerrarotmodaljornadaicono(ot)\">\n                                                       <i class=\"far fa-times-circle fa-3x\"></i>\n                                                  </button>\n\n\n                                             </div>\n                                             <div class=\"col-1\">\n                                                  <button id=\"btn-cerrar-en-modal\" (click)=\"nextdayotmodaljornadaicono(ot)\">\n                                                       <i class=\"far fa-arrow-alt-circle-right fa-3x\"></i>\n                                                  </button>\n\n                                             </div>\n                                        </div>\n\n\n                                   </li>\n                              </ul>\n                         </div>\n                         <div class=\"col-6\" *ngIf=\"!ocultarbotonpantallacerrarjornada; else templatesoloInfo\">\n                              \n                             \n                              <label>{{descripcionmodalcerrarjornadadescripcion}}</label>\n                              <div class=\"text-center mt-2\" *ngIf=\"buttoncerrarotenmodalcerrarjornada; else templateButtonCerrarjornada\">\n                                   <button id=\"btn-acciones\" class=\"btn btn-info\" (click)=\"cerrarOtdesdemodalcerrarjornada()\">{{titulomodalcerrarjornadadescripcion}}</button>\n                              </div>\n                              <ng-template #templateButtonCerrarjornada>\n                                   <div class=\"text-center mt-2\">\n                                        <button id=\"btn-acciones\" class=\"btn btn-danger\" (click)=\"cerrarjornadadesdemodaljornada()\">{{titulomodalcerrarjornadadescripcion}}</button>\n                                   </div>\n                              </ng-template>\n                         </div>\n                         <ng-template #templatesoloInfo>\n                              <div class=\"col-6\">\n                                   <label>{{descripcionmodalcerrarjornadadescripcion}}</label>\n                              </div>\n                              \n                         </ng-template>\n                    </div>\n\n\n\n\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"reiniciarmodalcerrarjornada()\">Continuar jornada</button>\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"VerificarOtsActivasAntesDeCerrarJornada()\"\n               onclick=\"cerrarModalCerrarOt()\">{{mensajebuttonmodalcerrarjornada}}</button> -->\n               </div>\n          </div>\n     </div>\n\n\n<ng-template #modalcerrarjornada>\n     <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cerrar jornada laboral</h5>\n\n               </div>\n               <div class=\"modal-body\">\n                    <label for=\"message-text\" class=\"col-form-label\">{{descripcionmodalcerrarjornadadescripcion}}</label>\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Continuar jornada</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"cerrarJornadaLaboralPorElDia()\" data-dismiss=\"modal\" onclick=\"cerrarJornadaLaboralPorElDiaJs()\">Cerrar jornada</button>\n               </div>\n          </div>\n     </div>\n</ng-template>\n\n\n</div>\n<!-- Modal Cerrar Jornada -->\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-form/ot-form.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-form/ot-form.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n     <div class=\"card\">\n          <h5 *ngIf=\"!update;else tituloUpdate\" class=\"card-header text-center\"><i class=\"fas fa-long-arrow-alt-left float-left\"></i>Crear Ot</h5>\n          <ng-template #tituloUpdate>\n               <h5 class=\"card-header text-center\">Actualizar Ot</h5>\n          </ng-template>\n          <div class=\"card body \">\n               <form class=\"p-5 \">\n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Codigo\" placeholder=\"Codigo\" class=\"form-control\"\n                                   [(ngModel)]=\"ot.Codigo\" (input)=\"CodigoChange($event)\">\n                         </div>\n                         <div *ngIf=\"!codigo;else codigoCorrecto\" [hidden]=\"codigo\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeCodigo}}\n                         </div>\n                         <ng-template #codigoCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                         </ng-template>\n                    </div>\n \n                    <div class=\"row\">\n                         <div class=\"form-group col-6\">\n                              <input type=\"text\" name=\"Descripcion\" placeholder=\"Descripcion\" class=\"form-control\"\n                                   [(ngModel)]=\"ot.Descripcion\" (input)=\"DescripcionChange($event)\">\n                         </div>\n                         <div *ngIf=\"!descripcion;else descripcionCorrecto\" [hidden]=\"descripcion\" id=\"alerta-mensaje\"\n                              class=\"alert alert-danger col-4 text-center\" role=\"alert\">\n                              {{mensajeDescripcion}}\n                         </div>\n                         <ng-template #descripcionCorrecto>\n                              <div id=\"alerta-mensaje\" class=\"alert alert-success d-flex justify-content-center rounded\" role=\"alert\">\n                                   <i id=\"icono-centrado\" class=\"fas fa-check\"></i>\n                              </div>\n                              </ng-template>\n                    </div>\n                   \n\n                    <button [disabled]=\"!button\" class=\"btn btn-success\" *ngIf=\"!update;else guardar\"\n                         (click)=\"saveNewOt()\">Crear</button>\n                    <ng-template #guardar>\n                         <button [disabled]=\"!button\" class=\"btn btn-success\"\n                              (click)=\"updateOt()\">Actualizar</button>\n                    </ng-template>\n                    \n               </form>\n          </div>\n     </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-list/ot-list.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-list/ot-list.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n     <div class=\"col\">\n       <h4 class=\"float-left\">Listado de Codigos</h4>\n     </div>\n   </div>\n   <div class=\"row\">\n    <mat-form-field class=\"pr-3 col-3\"> \n      <input matInput class=\"form-field col-1\" [formControl]=\"filtroCodigo\" placeholder=\"Buscar Codigo\">\n    </mat-form-field>\n    <button type=\"button\" id=\"btn-filter\"><i class=\" ml-3 far fa-times-circle fa-2x\" (click)=\"LimpiarFiltros()\"></i></button>\n   </div>\n   \n   <div class=\"mat-elevation-z3\">\n     <table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z0 table-striped\">\n   \n      \n       <ng-container matColumnDef=\"Codigo\">\n         <th mat-header-cell *matHeaderCellDef> Ot </th>\n         <td mat-cell *matCellDef=\"let ot\"> {{ot.Codigo}} </td>\n       </ng-container>\n\n       <ng-container matColumnDef=\"HorasPresupuestadas\">\n         <th mat-header-cell *matHeaderCellDef> Horas presupuestadas </th>\n         <td mat-cell *matCellDef=\"let ot\"> \n          <div *ngIf=\"ot.HorasPresupuestadas!='00:00:00'; else hp_vacio\">{{ot.HorasPresupuestadas}}</div>\n      <ng-template #hp_vacio>\n       -\n      </ng-template>\n      \n\n          </td>\n       </ng-container>\n\n       <ng-container matColumnDef=\"HorasTrabajadas\"> \n         <th mat-header-cell *matHeaderCellDef>Horas trabajadas</th>\n         <td mat-cell *matCellDef=\"let ot\"> {{ot.HorasTrabajadas}} </td>\n       </ng-container>\n\n       <ng-container matColumnDef=\"Balance\">\n         <th mat-header-cell *matHeaderCellDef> Balance </th>\n         \n\n\n         <td mat-cell *matCellDef=\"let ot\"> \n          <div *ngIf=\"ot.HorasPresupuestadas!='00:00:00'; else balance_vacio\">{{ot.Balance}}</div>\n      <ng-template #balance_vacio>\n       -\n      </ng-template>\n      \n\n          </td>\n\n       </ng-container>\n   \n\n       <ng-container matColumnDef=\"Acciones\">\n         <th mat-header-cell *matHeaderCellDef> Acciones </th>\n         <td mat-cell *matCellDef=\"let ot\">\n           \n          <button type=\"button\" class=\"btn btn-success m-2\" data-toggle=\"modal\"\n             data-target=\"#modalAgregarHP\" (click)=\"getid(ot.IdOt)\"><i class=\"fas fa-clock\"></i></button>\n\n           <button type=\"button\" class=\"btn btn-danger m-2\" data-toggle=\"modal\"\n             data-target=\"#modalEliminar\" (click)=\"getid(ot.IdOt)\"><i class=\"fas fa-trash\"></i></button> \n             \n         </td>\n       </ng-container>\n   \n   \n       <tr mat-header-row *matHeaderRowDef=\"Columnas\"></tr>\n       <tr mat-row *matRowDef=\"let row; columns: Columnas;\"></tr>\n     </table>\n     <mat-paginator [pageSizeOptions]=\"[4, 10, 20]\" showFirstLastButtons></mat-paginator>\n   </div> \n   \n   \n   \n   <!-- Modal -->\n   <div class=\"modal fade\" id=\"modalEliminar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Eliminar Codigo</h5>\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n             <span aria-hidden=\"true\">&times;</span>\n           </button>\n         </div>\n         <div class=\"modal-body\">\n           ¿Esta seguro que desea eliminar este Codigo?\n           Al hacerlo, los trabajos y pausas relaciondas con este codigo ya no seran visibles.\n         </div>\n         <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n           <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeOt()\"\n             data-dismiss=\"modal\">Eliminar</button>\n         </div>\n       </div>\n     </div>\n   </div>\n\n   <div class=\"modal fade\" id=\"modalAgregarHP\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" \n     aria-hidden=\"true\"  data-backdrop=\"static\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n       <div class=\"modal-content\">\n         <div class=\"modal-header\">\n           <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Agregar horas presupuestadas</h5>\n           <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"limpiarModalHP()\">\n             <span aria-hidden=\"true\">&times;</span>\n           </button>\n         </div>\n         <div class=\"modal-body\">\n          <div class=\"form-group\">\n                         <label  class=\"col-form-label\">Ingresar horas presupuestadas para esta ot</label>\n                         <input type=\"number\" class=\"form-control\" autofocus (input)=\"verificarHP($event)\" [(ngModel)]=\"hPresupuestadas_\">\n            </div>\n         </div>\n         <div class=\"modal-footer\">\n           <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"limpiarModalHP()\">Cancelar</button>\n           <button type=\"button\" class=\"btn btn-success\"\n             data-dismiss=\"modal\" [disabled]=\"btnHP\" (click)=\"agregarHP()\">Agregar</button>\n         </div>\n       </div>\n     </div>\n   </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pausa/pausa-list/pausa-list.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pausa/pausa-list/pausa-list.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-3\">\n     <div class=\"col\">\n          <h4 class=\"float-left\">Lista de Pausas</h4>\n     </div>\n     <div class=\"col\">\n          <button id=\"btn-add\" class=\"btn btn-success float-right\" (click)=\"exporter.exportTable('xlsx', {sheet: 'Listado', Props: {Author: 'Talha'},fileName:'Pausas'})\"><i class=\"far fa-file-excel\"></i> Exportar a excel</button>\n     </div> \n</div>  \n<div class=\"row\">\n     <mat-form-field class=\"pr-3 col-3\">\n          <input id=\"inputCodigo\" matInput class=\"form-field col-1\" [formControl]=\"filtroCodigo\" placeholder=\"Filtro Codigo\">\n        </mat-form-field>\n         <mat-form-field class=\"pr-3 col-3\">\n          <input id=\"inputOperador\" matInput class=\"form-field col-1\" [formControl]=\"filtroOperador\" placeholder=\"Filtro Operador\">\n        </mat-form-field>\n        <mat-form-field class=\"col-3\">\n          <input id=\"inputFecha\" matInput [matDatepicker]=\"picker\" placeholder=\"Fecha\" [formControl]=\"filtroFecha\" readonly>\n          \n          <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n          <mat-datepicker touchUi #picker></mat-datepicker>\n        </mat-form-field>\n      \n        <button type=\"button\" id=\"btn-filter\"><i class=\" ml-3 far fa-times-circle fa-2x\" (click)=\"LimpiarFiltros()\"></i></button>\n  \n</div> \n<div>\n     <div class=\"mat-elevation-z3\">    \n<table mat-table matTableExporter  [dataSource]=\"dataSource\" class=\"mat-elevation-z0 table-striped\" #exporter=\"matTableExporter\"> \n     \n     <!-- <ng-container matColumnDef=\"Accion\">\n          <th mat-header-cell *matHeaderCellDef>Accion</th>\n          <td mat-cell *matCellDef=\"let trabajo\"><button id=\"btn-acciones\" type=\"button\" class=\"btn btn-outline-info m-2\" data-toggle=\"modal\"\n               data-target=\"#modalActualizar\" (click)=\"getData(trabajo)\"><i\n               class=\"far fa-edit\"></i> Editar</button></td>\n     </ng-container> -->\n\n          <ng-container matColumnDef=\"CodigoOt\">\n               <th mat-header-cell *matHeaderCellDef>Codigo Ot </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Codigo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Operador\">\n                    <th mat-header-cell *matHeaderCellDef>Operador </th>\n                    <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Nombre}} </td>\n               </ng-container>\n\n\n               <ng-container matColumnDef=\"Motivo\">\n                    <th mat-header-cell *matHeaderCellDef>Motivo </th>\n                    <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Motivo}} </td>\n               </ng-container>\n\n          <ng-container matColumnDef=\"Fecha\">\n               <th mat-header-cell *matHeaderCellDef> Fecha </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Fecha}}</td>\n          </ng-container>\n     \n     \n          <ng-container matColumnDef=\"HoraInicio\">\n               <th mat-header-cell *matHeaderCellDef>Hora Inicio </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.HoraInicio}}  </td>\n          </ng-container>\n     \n     \n          <ng-container matColumnDef=\"HoraFin\">\n               <th mat-header-cell *matHeaderCellDef> Hora Fin </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.HoraFin}}  </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Tiempo\">\n                    <th mat-header-cell *matHeaderCellDef>Tiempo</th>\n                    <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.TotalTiempo}}  </td>\n               </ng-container>\n     \n              \n\n          <tr mat-header-row *matHeaderRowDef=\"Columnas\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: Columnas;\"></tr>\n     </table>\n     <mat-paginator [pageSizeOptions]=\"[4, 10, 20]\" showFirstLastButtons></mat-paginator>\n     </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trabajo/trabajo-list/trabajo-list.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/trabajo/trabajo-list/trabajo-list.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\"> -->\n<div class=\"row mb-3\">\n     <div class=\"col\">\n          <h4 class=\"float-left\">Lista de Trabajo</h4>\n     </div>\n     <div class=\"col\">\n          <button id=\"btn-add\" class=\"btn btn-success float-right\"\n               (click)=\"exporter.exportTable('xlsx', {sheet: 'Listado', Props: {Author: 'Talha'},fileName:'Trabajos'})\"><i\n                    class=\"far fa-file-excel\"></i> Exportar a excel</button>\n     </div>\n</div>\n<div class=\"row\">\n\n     <mat-form-field class=\"pr-3 col-3\">\n          <input id=\"inputCodigo\" matInput class=\"form-field col-1\" [formControl]=\"filtroCodigo\"\n               placeholder=\"Filtro Codigo\">\n     </mat-form-field>\n     <mat-form-field class=\"pr-3 col-3\">\n          <input id=\"inputOperador\" matInput class=\"form-field col-1\" [formControl]=\"filtroOperador\"\n               placeholder=\"Filtro Operador\">\n     </mat-form-field>\n     <mat-form-field class=\"col-3\">\n          <input id=\"inputFecha\" matInput [matDatepicker]=\"picker\" placeholder=\"Fecha\" [formControl]=\"filtroFecha\"\n               readonly>\n\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker touchUi #picker></mat-datepicker>\n     </mat-form-field>\n\n     <button type=\"button\" id=\"btn-filter\"><i class=\" ml-3 far fa-times-circle fa-2x\"\n               (click)=\"LimpiarFiltros()\"></i></button>\n\n</div>\n<div>\n     <div class=\"mat-elevation-z3\">\n     <table mat-table matTableExporter [dataSource]=\"dataSource\" class=\"mat-elevation-z0 table-striped\" #exporter=\"matTableExporter\"\n          hiddenColumns=\"[7]\" style=\" text-align: center;\">\n          <!--este hiddenColumns representa la columna que no sera exportada en el excel-->\n\n          <!-- <ng-container matColumnDef=\"Accion\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Accion</th>\n               <td mat-cell *matCellDef=\"let trabajo\"><button id=\"btn-acciones\" type=\"button\"\n                         class=\"btn btn-info m-2\" data-toggle=\"modal\" data-target=\"#modalActualizar\"\n                         (click)=\"getData(trabajo)\"><i class=\"fas fa-pencil-alt\"></i> Editar</button></td>\n          </ng-container> -->\n\n          <ng-container matColumnDef=\"CodigoOt\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Codigo Ot </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Codigo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Operador\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Operador </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Nombre}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"Fecha\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\"> Fecha</th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.Fecha}}</td>\n          </ng-container>\n\n          \n          <ng-container matColumnDef=\"HoraInicio\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Hora Inicio </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.HoraInicio}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"HoraFin\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\"> Hora Fin </th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.HoraFin}} </td>\n          </ng-container>\n\n          <!-- <ng-container matColumnDef=\"Jornadas\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Jornadas</th>\n               <td mat-cell *matCellDef=\"let trabajo\"><button id=\"btn-acciones\" type=\"button\"\n                         class=\"btn btn-info m-2\" data-toggle=\"modal\" data-target=\"#modalDetalle\"\n                         (click)=\"detalleSegunTrabajo(trabajo)\"><i class=\"fas fa-search\"></i> Detalle</button></td>\n          </ng-container> -->\n\n          <ng-container matColumnDef=\"Tiempo\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Tiempo</th>\n               <td mat-cell *matCellDef=\"let trabajo\">{{trabajo.TotalTiempo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Accion\">\n               <th mat-header-cell *matHeaderCellDef style=\" text-align: center;\">Accion</th>\n               <td mat-cell *matCellDef=\"let trabajo\"><button type=\"button\"\n                         class=\"btn btn-info m-2\" data-toggle=\"modal\" data-target=\"#modalActualizar\"\n                         (click)=\"getData(trabajo)\"><i class=\"fas fa-pencil-alt\"></i></button>\n                    </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"Columnas\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: Columnas;\"></tr>\n     </table>\n     <mat-paginator [pageSizeOptions]=\"[4, 10, 20]\" showFirstLastButtons></mat-paginator>\n     </div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalActualizar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Actualizar codigo de trabajo</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n\n                    <div class=\"form-group\">\n                         <label for=\"recipient-name\" class=\"col-form-label\">Modificar codigo actual: </label>\n                         <input type=\"text\" class=\"form-control\" id=\"recipient-name\" autofocus [(ngModel)]=\"codigo\">\n                    </div>\n\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"updateTrabajo()\"\n                         data-dismiss=\"modal\">Modificar</button>\n               </div>\n          </div>\n     </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"modalDetalle\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n     aria-hidden=\"true\">\n     <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Detalle de trabajo</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                         <span aria-hidden=\"true\">&times;</span>\n                    </button>\n               </div>\n               <div class=\"modal-body\">\n\n                    <table border=\"1\" style=\" text-align: center;\">\n                         <tr>\n                              <th>Fecha</th>\n                              <th>Hora inicio</th>\n                              <th>Hora fin</th>\n                              <th>Total tiempo</th>\n                         </tr>\n\n                         <tr *ngFor=\"let tiempo of listTiempo\">\n                              <td>{{tiempo.Fecha}}</td>\n                              <td>{{tiempo.HoraInicio}}</td>\n                              <td>{{tiempo.HoraFin}}</td>\n                              <td>{{tiempo.TotalTiempo}}</td>\n                         </tr>\n\n                    </table>\n\n\n               </div>\n               <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n               </div>\n          </div>\n     </div>\n</div>\n\n\n<!-- </div> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
            /* harmony import */ var _components_administrador_administrador_list_administrador_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/administrador/administrador-list/administrador-list.component */ "./src/app/components/administrador/administrador-list/administrador-list.component.ts");
            /* harmony import */ var _components_administrador_administrador_form_administrador_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/administrador/administrador-form/administrador-form.component */ "./src/app/components/administrador/administrador-form/administrador-form.component.ts");
            /* harmony import */ var _components_operador_operador_list_operador_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/operador/operador-list/operador-list.component */ "./src/app/components/operador/operador-list/operador-list.component.ts");
            /* harmony import */ var _components_operador_operador_form_operador_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/operador/operador-form/operador-form.component */ "./src/app/components/operador/operador-form/operador-form.component.ts");
            /* harmony import */ var _components_trabajo_trabajo_list_trabajo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trabajo/trabajo-list/trabajo-list.component */ "./src/app/components/trabajo/trabajo-list/trabajo-list.component.ts");
            /* harmony import */ var _components_ot_ot_form_ot_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ot/ot-form/ot-form.component */ "./src/app/components/ot/ot-form/ot-form.component.ts");
            /* harmony import */ var _components_ot_ot_list_ot_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ot/ot-list/ot-list.component */ "./src/app/components/ot/ot-list/ot-list.component.ts");
            /* harmony import */ var _components_operador_operador_pantalla_operador_pantalla_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/operador/operador-pantalla/operador-pantalla.component */ "./src/app/components/operador/operador-pantalla/operador-pantalla.component.ts");
            /* harmony import */ var _components_pausa_pausa_list_pausa_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pausa/pausa-list/pausa-list.component */ "./src/app/components/pausa/pausa-list/pausa-list.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            var routes = [{
                    path: '',
                    redirectTo: '/index',
                    pathMatch: 'full'
                },
                {
                    path: 'index',
                    component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
                },
                //rutas de administrador
                {
                    path: 'administrador',
                    component: _components_administrador_administrador_list_administrador_list_component__WEBPACK_IMPORTED_MODULE_4__["AdministradorListComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'administrador/add',
                    component: _components_administrador_administrador_form_administrador_form_component__WEBPACK_IMPORTED_MODULE_5__["AdministradorFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'administrador/update/:id',
                    component: _components_administrador_administrador_form_administrador_form_component__WEBPACK_IMPORTED_MODULE_5__["AdministradorFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                //fin rutas de administrador
                //rutas de operador
                {
                    path: 'operador',
                    component: _components_operador_operador_list_operador_list_component__WEBPACK_IMPORTED_MODULE_6__["OperadorListComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'operador/add',
                    component: _components_operador_operador_form_operador_form_component__WEBPACK_IMPORTED_MODULE_7__["OperadorFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'operador/update/:id',
                    component: _components_operador_operador_form_operador_form_component__WEBPACK_IMPORTED_MODULE_7__["OperadorFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'operadores',
                    component: _components_operador_operador_pantalla_operador_pantalla_component__WEBPACK_IMPORTED_MODULE_11__["OperadorPantallaComponent"]
                },
                //fin rutas de operador
                //rutas de trabajo
                {
                    path: 'trabajo',
                    component: _components_trabajo_trabajo_list_trabajo_list_component__WEBPACK_IMPORTED_MODULE_8__["TrabajoListComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] //para proteger la ruta, debe pasar por aqui , por esta class
                },
                //fin rutas de trabajo
                //inicio rutas ot
                {
                    path: 'ot',
                    component: _components_ot_ot_list_ot_list_component__WEBPACK_IMPORTED_MODULE_10__["OtListComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'ot/add',
                    component: _components_ot_ot_form_ot_form_component__WEBPACK_IMPORTED_MODULE_9__["OtFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                {
                    path: 'ot/update/:id',
                    component: _components_ot_ot_form_ot_form_component__WEBPACK_IMPORTED_MODULE_9__["OtFormComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                },
                //fin rutas ot
                //inicio rutas pausa
                {
                    path: 'pausa',
                    component: _components_pausa_pausa_list_pausa_list_component__WEBPACK_IMPORTED_MODULE_12__["PausaListComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
                }
                //fin rutas pausas
                ,
                { path: '404', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
                { path: '**', redirectTo: '/404' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'client';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
            /* harmony import */ var _components_administrador_administrador_form_administrador_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/administrador/administrador-form/administrador-form.component */ "./src/app/components/administrador/administrador-form/administrador-form.component.ts");
            /* harmony import */ var _components_administrador_administrador_list_administrador_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/administrador/administrador-list/administrador-list.component */ "./src/app/components/administrador/administrador-list/administrador-list.component.ts");
            /* harmony import */ var _components_operador_operador_list_operador_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/operador/operador-list/operador-list.component */ "./src/app/components/operador/operador-list/operador-list.component.ts");
            /* harmony import */ var _components_operador_operador_form_operador_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/operador/operador-form/operador-form.component */ "./src/app/components/operador/operador-form/operador-form.component.ts");
            /* harmony import */ var _components_trabajo_trabajo_list_trabajo_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/trabajo/trabajo-list/trabajo-list.component */ "./src/app/components/trabajo/trabajo-list/trabajo-list.component.ts");
            /* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
            /* harmony import */ var _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/trabajo/trabajo.service */ "./src/app/services/trabajo/trabajo.service.ts");
            /* harmony import */ var _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/administrador/administrador.service */ "./src/app/services/administrador/administrador.service.ts");
            /* harmony import */ var _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/operador/operador.service */ "./src/app/services/operador/operador.service.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_idioma__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../app/idioma */ "./src/app/idioma.ts");
            /* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
            /* harmony import */ var _components_ot_ot_list_ot_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ot/ot-list/ot-list.component */ "./src/app/components/ot/ot-list/ot-list.component.ts");
            /* harmony import */ var _components_ot_ot_form_ot_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/ot/ot-form/ot-form.component */ "./src/app/components/ot/ot-form/ot-form.component.ts");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _components_operador_operador_pantalla_operador_pantalla_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/operador/operador-pantalla/operador-pantalla.component */ "./src/app/components/operador/operador-pantalla/operador-pantalla.component.ts");
            /* harmony import */ var _components_pausa_pausa_list_pausa_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pausa/pausa-list/pausa-list.component */ "./src/app/components/pausa/pausa-list/pausa-list.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            /* harmony import */ var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/footer/footer/footer.component */ "./src/app/components/footer/footer/footer.component.ts");
            //servicios para traer datos de rest api
            //estas 2 para datepicker
            //para que cambie el idioma del datapicker y se formatee en dia/mes/año
            //import {MatIconModule} from '@angular/material/icon';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                        _components_administrador_administrador_form_administrador_form_component__WEBPACK_IMPORTED_MODULE_8__["AdministradorFormComponent"],
                        _components_administrador_administrador_list_administrador_list_component__WEBPACK_IMPORTED_MODULE_9__["AdministradorListComponent"],
                        _components_operador_operador_list_operador_list_component__WEBPACK_IMPORTED_MODULE_10__["OperadorListComponent"],
                        _components_operador_operador_form_operador_form_component__WEBPACK_IMPORTED_MODULE_11__["OperadorFormComponent"],
                        _components_trabajo_trabajo_list_trabajo_list_component__WEBPACK_IMPORTED_MODULE_12__["TrabajoListComponent"],
                        _components_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
                        _components_ot_ot_list_ot_list_component__WEBPACK_IMPORTED_MODULE_25__["OtListComponent"],
                        _components_ot_ot_form_ot_form_component__WEBPACK_IMPORTED_MODULE_26__["OtFormComponent"],
                        _components_operador_operador_pantalla_operador_pantalla_component__WEBPACK_IMPORTED_MODULE_28__["OperadorPantallaComponent"],
                        _components_pausa_pausa_list_pausa_list_component__WEBPACK_IMPORTED_MODULE_29__["PausaListComponent"],
                        _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                        mat_table_exporter__WEBPACK_IMPORTED_MODULE_24__["MatTableExporterModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                    ],
                    providers: [
                        _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_14__["TrabajoService"],
                        _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_15__["AdministradorService"],
                        _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_16__["OperadorService"],
                        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorIntl"], useClass: _app_idioma__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorIntlEsp"] },
                        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_22__["MAT_DATE_LOCALE"], useValue: 'es-ES' },
                        _auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //import { Observable } from 'rxjs';
            //este modulo sirve para verificar si el usuario esta loguado desde el frontend,usando la funcion de auth.service loggedIn, retornamos un true si el token existe , por lo que puede pasar a la siguiente pagina y hacer peticiones, sino, se redirecciona al login
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this.authService.loggedIn()) {
                        return true;
                    }
                    this.router.navigate(['/index']);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/components/administrador/administrador-form/administrador-form.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/components/administrador/administrador-form/administrador-form.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n     min-width: 150px;\r\n     max-width: 500px;\r\n     width: 100%;\r\n   }\r\n   \r\n   .example-full-width {\r\n     width: 100%;\r\n   }\r\n   \r\n   #alerta-mensaje {\r\n    border-radius: 25px;\r\n  }\r\n   \r\n   #icono-centrado{\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhZG9yL2FkbWluaXN0cmFkb3ItZm9ybS9hZG1pbmlzdHJhZG9yLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGdCQUFnQjtLQUNoQixnQkFBZ0I7S0FDaEIsV0FBVztHQUNiOztHQUVBO0tBQ0UsV0FBVztHQUNiOztHQUVBO0lBQ0MsbUJBQW1CO0VBQ3JCOztHQUVGO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhZG9yL2FkbWluaXN0cmFkb3ItZm9ybS9hZG1pbmlzdHJhZG9yLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4gICBcclxuICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH0gXHJcblxyXG4gICAjYWxlcnRhLW1lbnNhamUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG4jaWNvbm8tY2VudHJhZG97XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/administrador/administrador-form/administrador-form.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/administrador/administrador-form/administrador-form.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: AdministradorFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorFormComponent", function () { return AdministradorFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/administrador/administrador.service */ "./src/app/services/administrador/administrador.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdministradorFormComponent = /** @class */ (function () {
                function AdministradorFormComponent(administradorservices, router, activatedRouter) {
                    this.administradorservices = administradorservices;
                    this.router = router;
                    this.activatedRouter = activatedRouter;
                    this.administrador = {
                        IdAdmin: 0,
                        Rut: '',
                        Nombre: '',
                        Apellido: '',
                        Password: '',
                    };
                    this.update = false;
                    this.button = false;
                    this.error = false;
                    this.campoObligatorio = 'Campo obligatorio!';
                    this.mensajeNombre = this.campoObligatorio;
                    this.mensajeApellido = this.campoObligatorio;
                    this.mensajeRepetirerror = this.campoObligatorio;
                    this.mensajePassword = this.campoObligatorio;
                    this.mensajeRut = this.campoObligatorio;
                } //
                AdministradorFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var params = this.activatedRouter.snapshot.params;
                    console.log(params); //se guarda el id, o queda arreglo vacio en caso que no venga nada, que es cuando vamos a agregar un juego
                    if (params.id) {
                        this.administradorservices.getAdministrador(params.id).subscribe(function (res) {
                            console.log(res);
                            _this.administrador = res;
                            _this.update = true;
                            _this.rut = true;
                            _this.nombre = true;
                            _this.apellido = true;
                            _this.password = true;
                        }, function (err) { return console.error(err); });
                    }
                };
                AdministradorFormComponent.prototype.saveNewAdministrador = function () {
                    var _this = this;
                    delete this.administrador.IdAdmin;
                    if (this.administrador.Password == this.RepetirPassword) {
                        this.error = false;
                        this.administradorservices.saveAdministrador(this.administrador).subscribe(function (res) {
                            console.log(res);
                            _this.habilitado = true;
                            _this.router.navigate(['/administrador']);
                        }, function (err) { return console.error(err); });
                        console.log(this.administrador);
                    }
                    else {
                        this.error = true;
                        this.RepetirPassword = '';
                        this.repetirpassword = false;
                        this.mensajeRepetirerror = 'La contraseña de verificación no coincide';
                        this.button = false;
                    }
                };
                AdministradorFormComponent.prototype.updateAdministrador = function () {
                    var _this = this;
                    console.log(this.administrador);
                    if (this.administrador.Password == this.RepetirPassword) {
                        this.error = false;
                        this.administradorservices.updateAdministrador(this.administrador.IdAdmin, this.administrador).subscribe(function (res) {
                            console.log(res);
                            _this.router.navigate(['/administrador']);
                        }, function (err) { return console.error(err); });
                    }
                    else {
                        this.error = true;
                        this.RepetirPassword = '';
                        this.repetirpassword = false;
                        this.mensajeRepetirerror = 'La contraseña de verificación no coincide';
                        this.button = false;
                    }
                };
                AdministradorFormComponent.prototype.RutChange = function ($event) {
                    this.rutlargo = event.target.value;
                    if (this.rutlargo.length == 0) {
                        this.rut = false;
                        this.mensajeRut = this.campoObligatorio;
                    }
                    else {
                        if (this.rutlargo.includes('.', 2) == false || this.rutlargo.includes('.', 6) == false || this.rutlargo.includes('-', 10) == false || this.rutlargo.length != 12) {
                            this.rut = false;
                            console.log(this.rutlargo.length);
                            this.mensajeRut = 'Estructura rut: XX.XXX.XXX-Y';
                        }
                        else {
                            this.rut = true;
                        }
                    }
                    console.log(this.rut);
                    this.HabilitarButton();
                };
                AdministradorFormComponent.prototype.NombreChange = function ($event) {
                    this.nombrelargo = event.target.value;
                    if (this.nombrelargo.length == 0) {
                        this.nombre = false;
                        this.mensajeNombre = this.campoObligatorio;
                    }
                    else {
                        if (this.nombrelargo.length < 3) {
                            this.nombre = false;
                            this.mensajeNombre = 'Minimo 3 caracteres';
                        }
                        else {
                            this.nombre = true;
                        }
                    }
                    this.HabilitarButton();
                };
                AdministradorFormComponent.prototype.ApellidoChange = function ($event) {
                    this.apellidolargo = event.target.value;
                    if (this.apellidolargo.length == 0) {
                        this.apellido = false;
                        this.mensajeApellido = this.campoObligatorio;
                    }
                    else {
                        if (this.apellidolargo.length < 3) {
                            this.apellido = false;
                            this.mensajeApellido = 'Minimo 3 caracteres';
                        }
                        else {
                            this.apellido = true;
                        }
                    }
                    this.HabilitarButton();
                };
                AdministradorFormComponent.prototype.PasswordChange = function ($event) {
                    this.passwordlargo = event.target.value;
                    if (this.passwordlargo.length == 0) {
                        this.password = false;
                        this.mensajePassword = this.campoObligatorio;
                    }
                    else {
                        if (this.passwordlargo.length < 5) {
                            this.password = false;
                            this.mensajePassword = 'Minimo 5 caracteres';
                        }
                        else {
                            this.password = true;
                        }
                    }
                    this.HabilitarButton();
                };
                AdministradorFormComponent.prototype.RepetirPasswordChange = function ($event) {
                    this.repetirpasswordlargo = event.target.value;
                    if (this.repetirpasswordlargo.length == 0) {
                        this.repetirpassword = false;
                        this.mensajeRepetirerror = this.campoObligatorio;
                    }
                    else {
                        this.repetirpassword = true;
                    }
                    this.HabilitarButton();
                };
                AdministradorFormComponent.prototype.HabilitarButton = function () {
                    if (this.nombre == true && this.apellido == true && this.rut == true && this.password == true && this.repetirpassword == true) {
                        this.button = true;
                    }
                    else {
                        this.button = false;
                    }
                };
                return AdministradorFormComponent;
            }());
            AdministradorFormComponent.ctorParameters = function () { return [
                { type: _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_2__["AdministradorService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            AdministradorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-administrador-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./administrador-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-form/administrador-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./administrador-form.component.css */ "./src/app/components/administrador/administrador-form/administrador-form.component.css")).default]
                })
            ], AdministradorFormComponent);
            /***/ 
        }),
        /***/ "./src/app/components/administrador/administrador-list/administrador-list.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/components/administrador/administrador-list/administrador-list.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n     width: 100%;\r\n}\r\n\r\n/* #btn-acciones { \r\n    border-radius: 25px;\r\n    font-weight:500;\r\n} */\r\n\r\n#btn-add{\r\n    border-radius: 25px;\r\n    font-weight:900;\r\n}\r\n\r\n#input{\r\n    border-radius:25px;\r\n}\r\n\r\n#btn-filter{\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n    color: #616161;\r\n}\r\n\r\nth{\r\n    background-color: #1DA4B7;\r\n    color: white;\r\n    text-align: center !important;\r\n}\r\n\r\ntd{\r\n    text-align: center;\r\n  }\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhZG9yL2FkbWluaXN0cmFkb3ItbGlzdC9hZG1pbmlzdHJhZG9yLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFdBQVc7QUFDaEI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbmlzdHJhZG9yL2FkbWluaXN0cmFkb3ItbGlzdC9hZG1pbmlzdHJhZG9yLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogI2J0bi1hY2Npb25lcyB7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufSAqL1xyXG5cclxuI2J0bi1hZGR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG59XHJcblxyXG4jaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbn1cclxuXHJcbiNidG4tZmlsdGVye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuXHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTRCNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgICAgIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/administrador/administrador-list/administrador-list.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/administrador/administrador-list/administrador-list.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: AdministradorListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorListComponent", function () { return AdministradorListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/administrador/administrador.service */ "./src/app/services/administrador/administrador.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            //
            var AdministradorListComponent = /** @class */ (function () {
                function AdministradorListComponent(administradorService) {
                    this.administradorService = administradorService;
                    this.Columnas = ['Rut', 'Nombre', 'Acciones'];
                    this.filtroRut = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.filtroNombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.globalFilter = '';
                    this.filteredValues = {
                        Rut: '', Nombre: ''
                    };
                    this.administrador_modal = {
                        Nombre: ""
                    };
                }
                AdministradorListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //setTimeout(() => this.dataSource.paginator = this.paginator);
                    this.filtroRut.valueChanges.subscribe(function (CodigoFilterValue) {
                        _this.filteredValues['Rut'] = CodigoFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroNombre.valueChanges.subscribe(function (DescripcionFilterValue) {
                        _this.filteredValues['Nombre'] = DescripcionFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.getAdministradores();
                };
                AdministradorListComponent.prototype.customFilterPredicate = function () {
                    var _this = this;
                    var myFilterPredicate = function (data, filter) {
                        var globalMatch = !_this.globalFilter;
                        if (_this.globalFilter) {
                            // search all text fields
                            globalMatch = data.Nombre.toString().trim().toLowerCase().indexOf(_this.globalFilter.toLowerCase()) !== -1;
                        }
                        if (!globalMatch) {
                            return;
                        }
                        var searchString = JSON.parse(filter);
                        return data.Rut.toString().trim().toLowerCase().indexOf(searchString.Rut.toLowerCase()) !== -1 &&
                            data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1;
                    };
                    return myFilterPredicate;
                };
                AdministradorListComponent.prototype.getAdministradores = function () {
                    var _this = this;
                    this.administradorService.getAdministradores().subscribe(function (res) {
                        _this.administradores = res; //le asignamos el valor de res(con los administradores), a nuestro array administradores
                        console.log('getAdministradores');
                        console.log(res);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.administradores);
                        console.log('data source con admins');
                        console.log(_this.dataSource);
                        console.log('y su data');
                        console.log(_this.dataSource.data.length);
                        _this.dataSource.paginator = _this.paginator;
                    }, function (err) { console.error(err); }, function () {
                        _this.dataSource.filterPredicate = _this.customFilterPredicate();
                        console.log(_this.customFilterPredicate());
                    } //en caso de no traer los administradores y traer un error, solo se mostrara en consola.
                    ); //al crear el componente trae los administradores, y los guarda en un array para mostrarlos despues
                    //usamos res y err en caso de haber un error(err) en caso de devolver un dato del servidor(res), por eso esta en el constructor y en oninit
                };
                AdministradorListComponent.prototype.deleteAdministrador = function () {
                    var _this = this;
                    this.administradorService.deleteAdministrador(this.administrador_modal.IdAdmin).subscribe(function (res) {
                        console.log(res);
                        _this.getAdministradores();
                    }, function (err) { return console.error('el error es: ' + err); });
                };
                //para obtener el id y usarlo en el modal de eliminar
                AdministradorListComponent.prototype.getAdministrador = function (administrador) {
                    this.administrador_modal = administrador;
                    console.log(this.administrador_modal);
                };
                AdministradorListComponent.prototype.applyFilter = function (filterValue) {
                    console.log(filterValue);
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                AdministradorListComponent.prototype.LimpiarFiltros = function () {
                    this.filtroNombre.setValue('');
                    this.filtroRut.setValue('');
                };
                return AdministradorListComponent;
            }());
            AdministradorListComponent.ctorParameters = function () { return [
                { type: _services_administrador_administrador_service__WEBPACK_IMPORTED_MODULE_2__["AdministradorService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
            ], AdministradorListComponent.prototype, "paginator", void 0);
            AdministradorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-administrador-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./administrador-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/administrador/administrador-list/administrador-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./administrador-list.component.css */ "./src/app/components/administrador/administrador-list/administrador-list.component.css")).default]
                })
            ], AdministradorListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer/footer.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/components/footer/footer/footer.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n     background-color: rgb(91, 143, 255);\r\nheight: 200px;\r\n}\r\n\r\n.imagen{\r\n     height: 100px;\r\n     background-color: white;\r\n     padding: 10px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssbUNBQW1DO0FBQ3hDLGFBQWE7QUFDYjs7QUFFQTtLQUNLLGFBQWE7S0FDYix1QkFBdUI7S0FDdkIsYUFBYTs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTQzLCAyNTUpO1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Vue1xyXG4gICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/footer/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/index/index.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/index/index.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-ingresar {\r\n     border-radius: 25px;\r\n }\r\n\r\n .mensaje-error{\r\n     margin-left: 10px;\r\n     \r\nbackground-color: rgb(255, 79, 79);\r\ncolor: white;\r\npadding: 12px;\r\n }\r\n\r\n .margin{\r\n     margin: 5px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssbUJBQW1CO0NBQ3ZCOztDQUVBO0tBQ0ksaUJBQWlCOztBQUV0QixrQ0FBa0M7QUFDbEMsWUFBWTtBQUNaLGFBQWE7Q0FDWjs7Q0FFQTtLQUNJLFdBQVc7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5ncmVzYXIge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiB9XHJcblxyXG4gLm1lbnNhamUtZXJyb3J7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgXHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc5LCA3OSk7XHJcbmNvbG9yOiB3aGl0ZTtcclxucGFkZGluZzogMTJweDtcclxuIH1cclxuXHJcbiAubWFyZ2lue1xyXG4gICAgIG1hcmdpbjogNXB4O1xyXG4gfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/index/index.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/index/index.component.ts ***!
          \*****************************************************/
        /*! exports provided: IndexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function () { return IndexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var IndexComponent = /** @class */ (function () {
                function IndexComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.user = {
                        rut: '',
                        password: ''
                    };
                    this.mensajeErrorLogin = true;
                }
                IndexComponent.prototype.ngOnInit = function () {
                    this.authService.logOut();
                };
                IndexComponent.prototype.signin = function () {
                    var _this = this;
                    console.log(this.user);
                    this.authService.signin(this.user).subscribe(function (res) {
                        console.log(res);
                        // let token=res['token']
                        localStorage.setItem('token', res['token']);
                        _this.router.navigate(['/trabajo']);
                    }, function (err) {
                        console.log(err);
                        _this.mensajeErrorLogin = false;
                        _this.user.rut = "";
                        _this.user.password = "";
                    });
                };
                IndexComponent.prototype.datosChange = function ($event) {
                    if (event.target.value.length != 0) {
                        this.mensajeErrorLogin = true;
                    }
                };
                return IndexComponent;
            }());
            IndexComponent.ctorParameters = function () { return [
                { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-index',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")).default]
                })
            ], IndexComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tab{ \r\n     border-bottom: 3px solid #1DA4B7;\r\n     color: #1DA4B7 !important;\r\n } \r\n\r\n a{\r\n    transition: color 0.3s ease;\r\n } \r\n\r\n a:hover{\r\n    color: #1DA4B7 !important;\r\n } \r\n\r\n .color-pestana{\r\n    color:#616161 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGdDQUFnQztLQUNoQyx5QkFBeUI7Q0FDN0I7O0NBRUE7SUFDRywyQkFBMkI7Q0FDOUI7O0NBRUE7SUFDRyx5QkFBeUI7Q0FDNUI7O0NBRUQ7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnsgXHJcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxREE0Qjc7XHJcbiAgICAgY29sb3I6ICMxREE0QjcgIWltcG9ydGFudDtcclxuIH0gXHJcblxyXG4gYXtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuIH1cclxuIFxyXG4gYTpob3ZlcntcclxuICAgIGNvbG9yOiAjMURBNEI3ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4uY29sb3ItcGVzdGFuYXtcclxuICAgIGNvbG9yOiM2MTYxNjEgIWltcG9ydGFudDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.ts ***!
          \***************************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent(authServiceLogin, router) {
                    this.authServiceLogin = authServiceLogin;
                    this.router = router;
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                NavigationComponent.prototype.loggOut = function () {
                    this.authServiceLogin.logOut();
                    this.router.navigate(['/index']);
                };
                return NavigationComponent;
            }());
            NavigationComponent.ctorParameters = function () { return [
                { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-form/operador-form.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/operador/operador-form/operador-form.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#alerta-mensaje {\r\n     border-radius: 25px;\r\n   }\r\n   #icono-centrado{\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }\r\n   .centrado{\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYWRvci9vcGVyYWRvci1mb3JtL29wZXJhZG9yLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLG1CQUFtQjtHQUNyQjtHQUNBO0lBQ0MsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsMkJBQTJCO0VBQzdCO0dBRUE7RUFDQSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcGVyYWRvci9vcGVyYWRvci1mb3JtL29wZXJhZG9yLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGVydGEtbWVuc2FqZSB7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgfVxyXG4gICAjaWNvbm8tY2VudHJhZG97XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG5cclxuICAuY2VudHJhZG97XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-form/operador-form.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/operador/operador-form/operador-form.component.ts ***!
          \******************************************************************************/
        /*! exports provided: OperadorFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorFormComponent", function () { return OperadorFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/operador/operador.service */ "./src/app/services/operador/operador.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_puestotrabajador_puestotrabajador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/puestotrabajador/puestotrabajador.service */ "./src/app/services/puestotrabajador/puestotrabajador.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var OperadorFormComponent = /** @class */ (function () {
                function OperadorFormComponent(operadorService, router, activatedRouter, puestoTrabajadorService) {
                    this.operadorService = operadorService;
                    this.router = router;
                    this.activatedRouter = activatedRouter;
                    this.puestoTrabajadorService = puestoTrabajadorService;
                    this.operador = {
                        IdOperador: 0,
                        IdPuestoTrabajador: 0,
                        Rut: '',
                        Nombre: '',
                        Apellido: '',
                        Password: ''
                    };
                    this.update = false;
                    this.button = false;
                    this.cargo = false;
                    this.error = false;
                    this.campoObligatorio = 'Campo obligatorio!';
                    this.mensajeNombre = this.campoObligatorio;
                    this.mensajeApellido = this.campoObligatorio;
                    this.mensajeRut = this.campoObligatorio;
                    this.mensajeCargo = this.campoObligatorio;
                    this.mensajePassword = this.campoObligatorio;
                    this.operadorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                }
                OperadorFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.puestos = this.getPuestos();
                    console.log(this.puestos);
                    var params = this.activatedRouter.snapshot.params;
                    console.log(params);
                    if (params.id) {
                        this.operadorService.getOperador(params.id).subscribe(function (res) {
                            console.log(res);
                            _this.operador = res;
                            _this.update = true;
                            _this.puestoSeleccionado = _this.operador.IdPuestoTrabajador;
                            console.log(_this.operador);
                            console.log('puesto seleccionado: ' + _this.operador.IdPuestoTrabajador);
                            _this.rut = true;
                            _this.nombre = true;
                            _this.apellido = true;
                            _this.button = true;
                            _this.cargo = true;
                            _this.password = true;
                        }, function (err) { return console.error(err); });
                    }
                };
                OperadorFormComponent.prototype.saveNewOperador = function () {
                    var _this = this;
                    delete this.operador.IdOperador;
                    this.operadorService.saveOperador(this.operador).subscribe(function (res) {
                        console.log(res);
                        _this.habilitado = true;
                        _this.router.navigate(['/operador']);
                    }, function (err) { return console.error(err); });
                    console.log(this.operador);
                };
                OperadorFormComponent.prototype.updateOperador = function () {
                    var _this = this;
                    delete this.operador.Descripcion;
                    console.log(this.operador);
                    this.operadorService.updateOperador(this.operador.IdOperador, this.operador).subscribe(function (res) {
                        console.log(res);
                        _this.router.navigate(['/operador']);
                    }, function (err) { return console.error(err); });
                };
                OperadorFormComponent.prototype.getPuestos = function () {
                    var _this = this;
                    console.log('entro');
                    this.puestoTrabajadorService.getPuestosTrabajador().subscribe(function (res) {
                        _this.puestos = res;
                        console.log('getPuestosTrabajadores');
                        console.log(res);
                    }, function (err) { return console.error('el error es: ' + err); });
                };
                //para obtener el id del select al cambiar
                OperadorFormComponent.prototype.selectChange = function (event) {
                    console.log(event);
                    this.operador.IdPuestoTrabajador = event;
                    this.cargo = true;
                    this.HabilitarButton();
                };
                OperadorFormComponent.prototype.RutChange = function ($event) {
                    this.rutlargo = event.target.value;
                    if (this.rutlargo.length == 0) {
                        this.rut = false;
                        this.mensajeRut = this.campoObligatorio;
                    }
                    else {
                        if (this.rutlargo.includes('.', 2) == false || this.rutlargo.includes('.', 6) == false || this.rutlargo.includes('-', 10) == false || this.rutlargo.length != 12) {
                            this.rut = false;
                            console.log(this.rutlargo.length);
                            this.mensajeRut = 'Estructura rut: XX.XXX.XXX-Y';
                        }
                        else {
                            this.rut = true;
                        }
                    }
                    console.log(this.rut);
                    this.HabilitarButton();
                };
                OperadorFormComponent.prototype.NombreChange = function ($event) {
                    this.nombrelargo = event.target.value;
                    if (this.nombrelargo.length == 0) {
                        this.nombre = false;
                        this.mensajeNombre = this.campoObligatorio;
                    }
                    else {
                        if (this.nombrelargo.length < 3) {
                            this.nombre = false;
                            this.mensajeNombre = 'Minimo 3 caracteres';
                        }
                        else {
                            this.nombre = true;
                        }
                    }
                    this.HabilitarButton();
                };
                OperadorFormComponent.prototype.ApellidoChange = function ($event) {
                    this.apellidolargo = event.target.value;
                    if (this.apellidolargo.length == 0) {
                        this.apellido = false;
                        this.mensajeApellido = this.campoObligatorio;
                    }
                    else {
                        if (this.apellidolargo.length < 3) {
                            this.apellido = false;
                            this.mensajeApellido = 'Minimo 3 caracteres';
                        }
                        else {
                            this.apellido = true;
                        }
                    }
                    this.HabilitarButton();
                };
                OperadorFormComponent.prototype.HabilitarButton = function () {
                    if (this.nombre == true && this.apellido == true && this.rut == true && this.cargo == true && this.password == true) {
                        this.button = true;
                        console.log(this.button);
                    }
                    else {
                        this.button = false;
                        console.log(this.button);
                    }
                };
                OperadorFormComponent.prototype.PasswordChange = function ($event) {
                    this.passwordlargo = event.target.value;
                    if (this.passwordlargo.length == 0) {
                        this.password = false;
                        this.mensajePassword = this.campoObligatorio;
                    }
                    else {
                        if (this.passwordlargo.length < 3) {
                            this.password = false;
                            this.mensajePassword = 'Minimo 3 caracteres';
                        }
                        else {
                            this.password = true;
                        }
                    }
                    this.HabilitarButton();
                };
                return OperadorFormComponent;
            }());
            OperadorFormComponent.ctorParameters = function () { return [
                { type: _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__["OperadorService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _services_puestotrabajador_puestotrabajador_service__WEBPACK_IMPORTED_MODULE_4__["PuestotrabajadorService"] }
            ]; };
            OperadorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-operador-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operador-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-form/operador-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operador-form.component.css */ "./src/app/components/operador/operador-form/operador-form.component.css")).default]
                })
            ], OperadorFormComponent);
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-list/operador-list.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/operador/operador-list/operador-list.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n     width: 100%;\r\n}\r\n\r\n#btn-acciones {\r\n    border-radius: 25px;\r\n    font-weight:500;\r\n}\r\n\r\n#btn-add{\r\n    border-radius: 25px;\r\n    font-weight:900;\r\n    \r\n}\r\n\r\n#input{\r\n    border-radius:25px;\r\n}\r\n\r\n#btn-filter{\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n    color: #616161;\r\n    }\r\n\r\nth{\r\n        background-color: #1DA4B7;\r\n        color: white;\r\n        text-align: center !important;\r\n    }\r\n\r\ntd{\r\n        text-align: center;\r\n      }\r\n\r\n     \r\n\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYWRvci9vcGVyYWRvci1saXN0L29wZXJhZG9yLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFdBQVc7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2Q7O0FBRUE7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQzs7QUFFRTtRQUNFLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3BlcmFkb3Ivb3BlcmFkb3ItbGlzdC9vcGVyYWRvci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNidG4tYWNjaW9uZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuI2J0bi1hZGR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgXHJcbn1cclxuXHJcbiNpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxufVxyXG5cclxuI2J0bi1maWx0ZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgIH1cclxuXHJcbiAgICB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBNEI3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICBcclxuXHJcblxyXG5cclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-list/operador-list.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/operador/operador-list/operador-list.component.ts ***!
          \******************************************************************************/
        /*! exports provided: OperadorListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorListComponent", function () { return OperadorListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/operador/operador.service */ "./src/app/services/operador/operador.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            //
            var OperadorListComponent = /** @class */ (function () {
                function OperadorListComponent(operadorService) {
                    this.operadorService = operadorService;
                    this.Columnas = ['Rut', 'Nombre', 'Descripcion', 'Acciones'];
                    this.filtroRut = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.filtroNombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.globalFilter = '';
                    this.filteredValues = {
                        Rut: '', Nombre: ''
                    };
                    this.operador_modal = {
                        Nombre: "",
                    };
                }
                OperadorListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //setTimeout(() => this.dataSource.paginator = this.paginator);
                    this.filtroRut.valueChanges.subscribe(function (CodigoFilterValue) {
                        _this.filteredValues['Rut'] = CodigoFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroNombre.valueChanges.subscribe(function (DescripcionFilterValue) {
                        _this.filteredValues['Nombre'] = DescripcionFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.getOperadores();
                };
                OperadorListComponent.prototype.customFilterPredicate = function () {
                    var _this = this;
                    var myFilterPredicate = function (data, filter) {
                        var globalMatch = !_this.globalFilter;
                        if (_this.globalFilter) {
                            // search all text fields
                            globalMatch = data.Nombre.toString().trim().toLowerCase().indexOf(_this.globalFilter.toLowerCase()) !== -1;
                        }
                        if (!globalMatch) {
                            return;
                        }
                        var searchString = JSON.parse(filter);
                        return data.Rut.toString().trim().toLowerCase().indexOf(searchString.Rut.toLowerCase()) !== -1 &&
                            data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1;
                    };
                    return myFilterPredicate;
                };
                OperadorListComponent.prototype.getOperadores = function () {
                    var _this = this;
                    this.operadorService.getOperadores().subscribe(function (res) {
                        _this.operadores = res;
                        console.log('getOperadores');
                        console.log(res);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.operadores);
                        _this.dataSource.paginator = _this.paginator;
                    }, function (err) { console.error(err); }, function () {
                        _this.dataSource.filterPredicate = _this.customFilterPredicate();
                        console.log(_this.customFilterPredicate());
                    });
                };
                OperadorListComponent.prototype.getOperador = function (operador) {
                    this.operador_modal = operador;
                    console.log(this.operador_modal);
                };
                OperadorListComponent.prototype.deleteOperador = function () {
                    var _this = this;
                    this.operadorService.deleteOperador(this.operador_modal.IdOperador).subscribe(function (res) {
                        console.log(res);
                        _this.getOperadores();
                    }, function (err) { return console.error('el error es: ' + err); });
                };
                OperadorListComponent.prototype.applyFilter = function (filterValue) {
                    console.log(filterValue);
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                OperadorListComponent.prototype.LimpiarFiltros = function () {
                    this.filtroNombre.setValue('');
                    this.filtroRut.setValue('');
                };
                return OperadorListComponent;
            }());
            OperadorListComponent.ctorParameters = function () { return [
                { type: _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__["OperadorService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
            ], OperadorListComponent.prototype, "paginator", void 0);
            OperadorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-operador-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operador-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-list/operador-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operador-list.component.css */ "./src/app/components/operador/operador-list/operador-list.component.css")).default]
                })
            ], OperadorListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-pantalla/operador-pantalla.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/operador/operador-pantalla/operador-pantalla.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".scroller{ \r\n     overflow-x: scroll;\r\n     overflow-y: hidden;\r\n     height: 80px;\r\n     white-space:nowrap;\r\n     position:absolute;                  \r\n     bottom:0;                          \r\n     right:0; \r\n     left: 0;\r\n } \r\n\r\n\r\n .scrollerVertical{ \r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    height: 90% !important;\r\n    /* height: auto; */ \r\n    right:0; \r\n    left: 0;\r\n    border: 1px solid rgb(219, 216, 216);\r\n    \r\n     /* border: 2px solid yellow; */\r\n} \r\n\r\n\r\n .buttonsss{\r\n    left: 10%;\r\n    width: 39%;\r\n    height: 54%;\r\n    position: absolute;\r\n} \r\n\r\n\r\n .boton{\r\n    right: 10%;\r\n    width: 39%;\r\n    height: 25%;\r\n    position: absolute; \r\n} \r\n\r\n\r\n .botonx{\r\n    top: 44%;\r\n    right: 10%;\r\n    width: 39%;\r\n    height: 25%;\r\n    position: absolute; \r\n} \r\n\r\n\r\n .buttonc{\r\n    display: block ;\r\n    height: 23% !important;\r\n} \r\n\r\n\r\n .buttonCerrarJornada{\r\n    position: relative !important;\r\n    display: block !important;\r\n    width: 100% !important;\r\n    \r\n    \r\n} \r\n\r\n\r\n #btn-cerrar-en-modal{\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n    } \r\n\r\n\r\n #btn-acciones {\r\n        border-radius: 25px;\r\n    }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYWRvci9vcGVyYWRvci1wYW50YWxsYS9vcGVyYWRvci1wYW50YWxsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssa0JBQWtCO0tBQ2xCLGtCQUFrQjtLQUNsQixZQUFZO0tBQ1osa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixRQUFRO0tBQ1IsT0FBTztLQUNQLE9BQU87Q0FDWDs7O0NBR0E7SUFDRyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE9BQU87SUFDUCxvQ0FBb0M7O0tBRW5DLDhCQUE4QjtBQUNuQzs7O0NBR0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztDQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7Q0FFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztDQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0NBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHNCQUFzQjs7O0FBRzFCOzs7Q0FHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYjs7O0NBRUE7UUFDSSxtQkFBbUI7SUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29wZXJhZG9yL29wZXJhZG9yLXBhbnRhbGxhL29wZXJhZG9yLXBhbnRhbGxhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsZXJ7IFxyXG4gICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICAgICAgICAgICAgICAgICBcclxuICAgICBib3R0b206MDsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgIHJpZ2h0OjA7IFxyXG4gICAgIGxlZnQ6IDA7XHJcbiB9IFxyXG5cclxuXHJcbiAuc2Nyb2xsZXJWZXJ0aWNhbHsgXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqLyBcclxuICAgIHJpZ2h0OjA7IFxyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTksIDIxNiwgMjE2KTtcclxuICAgIFxyXG4gICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdzsgKi9cclxufSBcclxuXHJcblxyXG4uYnV0dG9uc3Nze1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDM5JTtcclxuICAgIGhlaWdodDogNTQlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ib3RvbntcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMzklO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59XHJcblxyXG4uYm90b254e1xyXG4gICAgdG9wOiA0NCU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDM5JTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxufVxyXG5cclxuLmJ1dHRvbmN7XHJcbiAgICBkaXNwbGF5OiBibG9jayA7XHJcbiAgICBoZWlnaHQ6IDIzJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uQ2VycmFySm9ybmFkYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuI2J0bi1jZXJyYXItZW4tbW9kYWx7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI2J0bi1hY2Npb25lcyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/operador/operador-pantalla/operador-pantalla.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/operador/operador-pantalla/operador-pantalla.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: OperadorPantallaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorPantallaComponent", function () { return OperadorPantallaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/operador/operador.service */ "./src/app/services/operador/operador.service.ts");
            /* harmony import */ var _models_OtTrabajador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/OtTrabajador */ "./src/app/models/OtTrabajador.ts");
            /* harmony import */ var _services_motivopausa_motivopausa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/motivopausa/motivopausa.service */ "./src/app/services/motivopausa/motivopausa.service.ts");
            /* harmony import */ var _models_Pausa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/Pausa */ "./src/app/models/Pausa.ts");
            /* harmony import */ var _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/trabajo/trabajo.service */ "./src/app/services/trabajo/trabajo.service.ts");
            /* harmony import */ var _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ot/ot.service */ "./src/app/services/ot/ot.service.ts");
            /* harmony import */ var _services_pausa_pausa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/pausa/pausa.service */ "./src/app/services/pausa/pausa.service.ts");
            /* harmony import */ var _models_Tiempo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/Tiempo */ "./src/app/models/Tiempo.ts");
            /* harmony import */ var _services_tiempo_tiempo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/tiempo/tiempo.service */ "./src/app/services/tiempo/tiempo.service.ts");
            //import { Router, NavigationEnd } from '@angular/router'
            var OperadorPantallaComponent = /** @class */ (function () {
                //verifica si existe una ot cerrada, pero que la jornada como tal no fue terminada, asi podemos hacer una diferencia antes de abrir todas las ots
                function OperadorPantallaComponent(operadorService, motivopausaService, trabajoService, otService, pausaService, tiempoService) {
                    this.operadorService = operadorService;
                    this.motivopausaService = motivopausaService;
                    this.trabajoService = trabajoService;
                    this.otService = otService;
                    this.pausaService = pausaService;
                    this.tiempoService = tiempoService;
                    this.listOtIngresadas = []; //lista de trabajos
                    this.listPausas = []; // lista de pausas asociadas a los trabajos
                    this.listTiempo = []; //lista de tiempos por cada dia trabajado de cada trabajo, se asocia a los trabajos
                    this.listOtParaCerrarJornada = []; //lista de ot ingresadas las cuales son iguales a las de listOtIngresadas, se crea este array para poder eliminar los datos del modal jornada, sin la necesidad de recargar o eliminar los datos definitivamente
                    //objTiempo:Tiempo={}
                    this.otParaGuardar = {
                        Codigo: 0
                    };
                    this.otTrabajadorparaActualizar = {
                        TotalTiempo: ''
                    };
                    this.Titulo = 'Operador: -';
                    this.passwordIngresada = '';
                    this.passwordcorrecta = true;
                    this.nombreOperadorModal = '';
                    this.incorrecto = true;
                    this.alertaPassword = true;
                    this.alertaCodigo = true;
                    this.btnIniciar = true;
                    this.btnPausa = true;
                    this.btnCerrarJornadaLaboral = false;
                    this.mensajemodalcerrarjornada = '';
                    this.mensajeposiblesotsactivas = '';
                    this.dd = 0;
                    this.objetoOtTrabajador = {
                        Nombre: '',
                        Codigo: '',
                        Fecha: '',
                        HoraInicio: '',
                        HoraFin: ''
                    };
                    this.btnCerrar = true;
                    this.btnIniciarPausa = true;
                    this.mensajAlertPassword = '';
                    this.mensajAlertCodigo = '';
                    this.mensajeButtonIniciarOt = 'Iniciar Ot';
                    this.mensajeButtonPausa = 'Pausar Ot';
                    this.EstaEnPausa = false;
                    this.mensajebuttonmodalcerrarjornada = '';
                    this.btndetallemodalcerrarjornada = false;
                    this.titulomodalcerrarjornadadescripcion = 'Importante';
                    this.descripcionmodalcerrarjornadadescripcion = 'Puede cerrar la jornada laboral actual, recuerde que al hacerlo, no podra continuar con su trabajo hasta la siguiente jornada laboral'; //descripcion de la accion a realizar en modal cerrar jornada
                    this.ocultarbotonpantallacerrarjornada = true; //oculta el boton en modal cerrra jornada, si es false, se mostrara el button para cerrar ot o cerrr jornada
                    this.buttoncerrarotenmodalcerrarjornada = false; //indica si el button anteriormente descrito tiene el metodo para cerrar ot o cerrar jornada, si es true, el metodo es cerrar ot en modal, si es false, em metodo es cerrra jornada ot en modal cerrar jornada
                    // btnReanudarPausa=false;
                    this.cerrarjornada = false; //verifica si se puede cerrar jornada empieza como 1, en el moento que todas las ots se hayan o cerrado o cerrado por la jornada, eset valor cambiaara a 0, en ese momento, el modal cerrar jornada mostrara el modal correspondiente para cerrar la jornada laboral
                    this.mostrarmodaljornadacerradaalingresarpassword = false; //para mostrar o no el mensaje de la jornada fue cerrada al ingresar contraseña, si es true, se muestra el mensaje y no se puede loguear, si es false , los operadores se pueden loguar, porque un operador puede haber cerrado su ot, pero los otros no, por lo que solo ese operador vera en su pantalla ot cerrada, pero el resto que aun no haya cerrada su trabajo o la jornada de su trabajo podra seguir trabajando, solo se puede cerrar la jornada cuando todos hayan o cerrado ot o la jornada de sus ots, pero esto puede que no sea al mismo tiempo, un operador puede haber cerrado su jornada pero otros lo haran despues, asi que pueden seguir inh¿gresando sus passwords
                    this.alMenosUnaOtCerradaSinCerrarJornada = true; //comienza en true, para que los datos(de existir) se mantengan tal cual al empezar o al refrescar la pagina, esto cambia solo caundo se cierra
                    //,private router: Router
                    var pathname = window.location.pathname;
                    console.log('url: ' + pathname);
                    this.rutaPagina = pathname;
                }
                OperadorPantallaComponent.prototype.ngOnInit = function () {
                    console.log('inicio');
                    if (JSON.parse(localStorage.getItem('listTrabajos')) != null) {
                        this.listOtIngresadas = JSON.parse(localStorage.getItem('listTrabajos'));
                    }
                    if (JSON.parse(localStorage.getItem('listPausas')) != null) {
                        this.listPausas = JSON.parse(localStorage.getItem('listPausas'));
                    }
                    if (JSON.parse(localStorage.getItem('fecha')) != null) {
                        //this.fecha = JSON.parse(localStorage.getItem('fecha'))
                        this.fecha = '19/01/2020';
                    }
                    if (JSON.parse(localStorage.getItem('listTiempo')) != null) {
                        this.listTiempo = JSON.parse(localStorage.getItem('listTiempo'));
                    }
                    console.log('alMenosUnaOtCerradaSinCerrarJornada');
                    if (JSON.parse(localStorage.getItem('alMenosUnaOtCerradaSinCerrarJornada')) != null) {
                        this.alMenosUnaOtCerradaSinCerrarJornada = JSON.parse(localStorage.getItem('alMenosUnaOtCerradaSinCerrarJornada'));
                    }
                    console.log('alMenosUnaOtCerradaSinCerrarJornada= ' + this.alMenosUnaOtCerradaSinCerrarJornada);
                    //verificamos al cargar la pagina si existen datos en el localstorage, las cuales serian tareas continuan, ya sea una tarea que no esta cerrada(por que se cayo el sistema o se cerro la pagina) o porque es de la jornada anterior, en caso de existir, el arreglo de listOtIngresadas sera llenado con estos datos, para asi poder continuar con el trabajo.
                    console.log('lista de ots en cache: ' + this.listOtIngresadas);
                    this.getOperadores();
                    this.getMotivoPausa();
                    //aqui comparo las fechas al cerrar la jornada, si son iguales e sporque estoy entrando en una jornada que ya fue cerrada, por lo que le indicamos que la jornada esta cerrada, 
                    //si no son iguales quiere decir que son fechas distintas, por tanto debemos abrir todas las ots que fueron cerradas para poder trabajar de nuevo
                    //el problema es que si cierro una ot, me salgo y vuelvo a entrar, va a ver que la jornada como tal no esta cerrada, asi que la vuelve a abrir, aunque ya fue cerrada
                    //la solucion es poner una variable al momento de cerrar la jornada, alMenosUnaOtCerradaSinCerrarJornada=true y al final tambien lo subimos al localstorage, si al volver a entrar esta variable es true entonces no debo abrir todas las ots
                    //ahora al momento de cerrar la jornada definitivamente, subimos la fecha de la jornada cerrada, pero ademas indicamos que alMenosUnaOtCerradaSinCerrarJornada=false
                    console.log('fecha en local storage= ' + this.fecha);
                    console.log('fecha actual= ' + this.getFecha());
                    if (this.fecha == this.getFecha()) {
                        console.log('las fechas son iguales, eso quiere decir que la jornada fue cerrada, pero esta entradno de nuevo al sistema, por lo que vamos a cerrar la pantalla llamando al metodo pantallaoperadorescerrada');
                        this.pantallaoperadorescerrada();
                    }
                    else {
                        console.log('no son iguales las fechas, porque la fecha guardada es ' + this.fecha + ' y la fecha actual es= ' + this.getFecha() + ' , como no son iguales, quiere decir que la jornada se cerro en la primera fecha y estamos ingresando al sistema en la segunda fecha, asi que debemos activar todas las ots guardadas en el sistema');
                        console.log('pero primero debemos ver si las fechas no son iguales, pero es porque algunos operadores cerraron sus ots, pero no han cerrado la jornada como tal, y si eso pasa, no puedo abrir todas las');
                        console.log('alMenosUnaOtCerradaSinCerrarJornada antes de abrir las ots es= ' + this.alMenosUnaOtCerradaSinCerrarJornada);
                        if (this.alMenosUnaOtCerradaSinCerrarJornada == false) {
                            //quiere decir que las fechas no son iguales, y que la jornada fue cerrada , ya que el unico monento que alMenosUnaOtCerradaSinCerrarJornada=false, es cuando la jornada esta cerrada, asi que si es false es porque la jornada esta cerrada, y como las fechas no son iguales, quiere decir que es una jornada anterior que fue cerrada, por lo que si se cumplen estos datos, debemos abrir las ots, ademas de volver a dejar alMenosUnaOtCerradaSinCerrarJornada como true
                            console.log('entramos al if de alMenosUnaOtCerradaSinCerrarJornada=false');
                            this.alMenosUnaOtCerradaSinCerrarJornada = true;
                            if (this.listOtIngresadas.length != 0) {
                                for (var index = 0; index < this.listOtIngresadas.length; index++) {
                                    //this.listOtIngresadas[index].Activa = true
                                    //si las abro de inmediato las ots, al momento de cerrar la jornada se podran cerrar jornadas de personas que quiza no asistieron al trabajo, por ende no se trabajo y si no se trabajo no se puede guardar sus tiempos
                                    //la solucion es abrir las ots, pero solo si las fechas de inicio de la ot y su fecha actual es distinta y si es su primer logueo del dia
                                    this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia = true;
                                    this.listOtIngresadas[index].UsuarioLogueadoAlMenosUnaVez = false;
                                }
                            }
                        }
                        else {
                            console.log('quiere decir que las fechas no son iguales, y que alMenosUnaOtCerradaSinCerrarJornada=' + this.alMenosUnaOtCerradaSinCerrarJornada + ', asi quese deben mantener los datos tal cual estan');
                        }
                    }
                };
                OperadorPantallaComponent.prototype.getOperadores = function () {
                    var _this = this;
                    this.operadorService.getOperadores().subscribe(function (res) {
                        _this.operadores = res;
                        console.log('getOperadores');
                        console.log(res);
                    }, function (err) { console.error(err); }, function () {
                    });
                };
                OperadorPantallaComponent.prototype.getMotivoPausa = function () {
                    var _this = this;
                    this.motivopausaService.getMotivoPausas().subscribe(function (res) {
                        _this.motivosPausas = res;
                        console.log('getMotivos');
                        console.log(res);
                    }, function (err) { console.error(err); }, function () {
                    });
                };
                //metodo que toma un tiempo en milisegundos y lo pasa a tiempo normal en horas:minutos:segundos
                OperadorPantallaComponent.prototype.msToTime = function (duration) {
                    console.log('entre en msToTime');
                    var seconds = Math.floor((duration / 1000) % 60);
                    var minutes = Math.floor((duration / (1000 * 60)) % 60);
                    //let hours: any = Math.floor((duration / (1000 * 60 * 60)) % 24)
                    var hours = Math.floor((duration / (1000 * 3600)) % 25);
                    hours = (hours < 10) ? "0" + hours : hours;
                    minutes = (minutes < 10) ? "0" + minutes : minutes;
                    seconds = (seconds < 10) ? "0" + seconds : seconds;
                    console.log('hora= ' + hours + ' minuto= ' + minutes + ' segundos= ' + seconds);
                    return hours + ":" + minutes + ":" + seconds;
                };
                //metodo que toma un tiempo en hora:minutos:segundos y retorna un array con 3 valores
                // array[hora,minutos,segundos]
                OperadorPantallaComponent.prototype.splitTime = function (time) {
                    console.log(time);
                    var x = time.concat(':');
                    var splitted = x.split(":", 3);
                    console.log(splitted);
                    return splitted;
                };
                //metodo que asigna la password del actual operador a una variable, asi se podra comparar con la ingresada por el usuario en verificarPassword
                OperadorPantallaComponent.prototype.getPassword = function (op) {
                    var z = new Date();
                    var y = new Date('Sat Dec 14 2019 13:43:26 GMT-0300 (hora de verano de Chile)');
                    var time = z.getTime() - y.getTime();
                    console.log('z= ' + z + '   ------  y= ' + y);
                    console.log('time: ' + time);
                    var aa = this.msToTime(time);
                    console.log('tiempo transformado: ' + aa);
                    this.password = op.Password;
                    this.nombreOperador = op.Nombre;
                    console.log('password es: ' + this.password);
                    this.nombreOperadorModal = op.Nombre;
                    console.log('nombre: ' + this.nombreOperadorModal);
                    this.incorrecto = true;
                    this.idOperadorreserva = op.IdOperador;
                    console.log('id operador de reserva es:' + this.idOperadorreserva);
                };
                //metodo que verifica si la contraseña ingresada corresponde al usuario, sino, se indica que la contraseña es incorrecta, si esta vacia, indica que no ingreso nada y si esta bien
                //verifica si tiene una ot ya iniciada, una pausa activa y si esta cerrada o no
                OperadorPantallaComponent.prototype.verificarPassword = function () {
                    // si la contraseña esta vacia hace esto y return
                    if (this.passwordIngresada == '') {
                        this.mensajAlertPassword = 'Campo vacio!';
                        this.passwordcorrecta = false;
                        this.incorrecto = true;
                        this.alertaPassword = false;
                        this.passwordIngresada = '';
                        return;
                    }
                    //si la contraseña es correcta entra
                    if (this.password == this.passwordIngresada) {
                        var InicioOt = false;
                        var InicioPausa = false;
                        this.passwordIngresada = '';
                        this.passwordcorrecta = true;
                        this.btnIniciar = false;
                        this.idOperador = this.idOperadorreserva;
                        this.Titulo = 'Operador: ' + this.nombreOperadorModal;
                        console.log('id operador oficial es: ' + this.idOperador);
                        console.log('el id que voy a buscar en el array es: ' + this.idOperador);
                        console.log(this.listOtIngresadas);
                        //vemos si el operador esta en el list de ots, si esta es porque tiene una ot que no a cerrado
                        for (var index = 0; index < this.listOtIngresadas.length; index++) {
                            if (this.listOtIngresadas[index].IdOperador == this.idOperador) {
                                console.log('el operador esta en el array');
                                InicioOt = true;
                                this.btnIniciar = true;
                                this.btnCerrar = false;
                                this.btnPausa = false;
                                this.mensajeButtonIniciarOt = 'Ot iniciada, Hora de inicio: ' + this.listOtIngresadas[index].HoraInicio;
                                console.warn(this.listOtIngresadas[index].Activa);
                                if (this.listOtIngresadas[index].Fecha) {
                                }
                                //sabemos que el operador esta en el list de ots, pero debemos ver si la ot esta abierta o cerrada
                                if (this.listOtIngresadas[index].Activa == false) {
                                    //si esta cerrada solo imposibilitamos el trabajo, deshabilitando los botones 
                                    console.log('la ot fue cerrada, pero podria ser abierta si las fecha de inicio de la ot y la fecha actual son distintas y si es su primer logueo del dia');
                                    if (this.listOtIngresadas[index].Fecha != this.fecha && this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia) { //this.getFecha() !!!!!!!!!!
                                        this.listOtIngresadas[index].Activa = true;
                                        this.listOtIngresadas[index].HoraInicioDelDia = this.getHora();
                                        this.listOtIngresadas[index].FechaDelDia = this.getFecha();
                                        this.listOtIngresadas[index].HoraInicioDelDiaDate = new Date();
                                        console.log('los nuevos datos son= ');
                                        console.log('nueva fecha del dia= ' + this.listOtIngresadas[index].FechaDelDia);
                                        console.log('nueva hora inicio del dia= ' + this.listOtIngresadas[index].HoraInicioDelDia);
                                        console.log('nueva hora inicio del dia date= ' + this.listOtIngresadas[index].HoraInicioDelDiaDate);
                                    }
                                    else {
                                        this.btnIniciar = true;
                                        this.btnPausa = true;
                                        this.btnCerrar = true;
                                        //this.btnCerrarJornadaLaboral=true
                                        this.mensajeButtonIniciarOt = 'Ot cerrada';
                                        this.mensajeButtonPausa = 'Pausar Ot';
                                        this.Titulo = 'Operador: ' + this.listOtIngresadas[index].Nombre;
                                        //this.cerrarjornada=true 
                                    }
                                }
                                else {
                                    console.log('la ot esta abierta');
                                    // se puede dar que al hacer esto alguien no venga a trabajar y no interactue con la ot, como verificamos que si trabajo ese dia en la ot,y, en tal caso, agregar la hora inicio del dia y la fecha del dia, debe ser al loguarse, si se loguea de forma correcta debemos ver si la fecha de inicio de la ot es iguala la fecha actual, si las fechas son distintas, quiere decir que es una nueva jornada, y en tal caso debo reiniciar la hora inicio del dia y la fecha del dia
                                    console.log('fecha en que se inicio la ot= ' + this.listOtIngresadas[index].Fecha);
                                    console.log('fecha actual de trabajo de la ot= ' + this.listOtIngresadas[index].FechaDelDia);
                                    console.log('fecha actual= ' + this.getFecha());
                                    console.log('es el primer logueo del dia de este operador? =' + this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia);
                                    //si las fechas son distintas y es el primer logueo de la jornada 
                                    if (this.listOtIngresadas[index].Fecha != this.getFecha() && this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia) {
                                        //verificamos que las fechas no son iguales, pero esto se debe hacer la primera vez que pase esto, por que las siguientes veces, seran porque el usuario se esta loguando en el mismo dia
                                        console.log('la fecha de inicio de ot  y la fecha del dia no son iguales, por lo que no es el mismo dia en que se esta trabajando, y debo resetear los valores del dia para poder ingresar para esta nueva fecha los datos de hora inicio del dia y fecha del dia ');
                                        this.listOtIngresadas[index].HoraInicioDelDia = this.getHora();
                                        this.listOtIngresadas[index].FechaDelDia = this.getFecha();
                                        this.listOtIngresadas[index].HoraInicioDelDiaDate = new Date();
                                        console.log('los nuevos datos son= ');
                                        console.log('nueva fecha del dia= ' + this.listOtIngresadas[index].FechaDelDia);
                                        console.log('nueva hora inicio del dia= ' + this.listOtIngresadas[index].HoraInicioDelDia);
                                        console.log('nueva hora inicio del dia date= ' + this.listOtIngresadas[index].HoraInicioDelDiaDate);
                                    }
                                }
                                this.listOtIngresadas[index].UsuarioLogueadoAlMenosUnaVez = true;
                                console.log('ya terminamos, asi que usuario loguado al menos una vez = ' + this.listOtIngresadas[index].UsuarioLogueadoAlMenosUnaVez);
                                this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia = false;
                                console.log('y ya termino, asi que es su primer logueo del dia= ' + this.listOtIngresadas[index].UsuarioPrimerLogueoDelDia);
                            } //aqui se cierra el if 
                        }
                        console.log('buscar si tiene una pausa activa y no cerrada');
                        for (var index = 0; index < this.listPausas.length; index++) {
                            if (this.listPausas[index].IdOperador == this.idOperador && this.listPausas[index].HoraFin == undefined) {
                                console.log('el operador tiene una pausa activa y no cerrada');
                                InicioPausa = true;
                                this.btnIniciar = false;
                                this.btnCerrar = true;
                                this.btnPausa = true;
                                this.mensajeButtonIniciarOt = 'Reanudar Ot';
                                this.mensajeButtonPausa = "Ot pausada, Hora pausa: " + this.listPausas[index].HoraInicio;
                                var b = document.querySelector("#btnIniciarOt");
                                //b.removeAttribute("data-toggle");
                                b.setAttribute("data-target", "#modalTerminarPausa");
                            }
                        }
                        this.datoenlocalstorage();
                        //si no entra a los for, el InicioOt es false, eso quiere decir que no existe una ot iniciada, asi que debe quedar la pantalla para inciiar una nueva ot
                        if (InicioOt == false) {
                            console.log('el operador no esta en el array');
                            this.mensajeButtonIniciarOt = 'Iniciar Ot';
                            this.mensajeButtonPausa = 'Pausar Ot';
                            this.btnIniciar = false;
                            this.btnCerrar = true;
                            this.btnPausa = true;
                            var b = document.querySelector("#btnIniciarOt");
                            //b.removeAttribute("data-toggle");
                            b.setAttribute("data-target", "#modalCodigo");
                            if (InicioPausa == false) {
                                console.log('el operador no esta en el array y el operador no tiene pausas');
                                this.mensajeButtonPausa = 'Pausar Ot';
                            }
                            return;
                        }
                        else {
                            if (InicioPausa == false) {
                                console.log('el operador esta en el array,pero no tiene pausas');
                                this.mensajeButtonPausa = 'Pausar Ot';
                                var b = document.querySelector("#btnIniciarOt");
                                //b.removeAttribute("data-toggle");
                                b.setAttribute("data-target", "#modalCodigo");
                                return;
                            }
                            else {
                                console.log('el operador esta en el array y tiene una pausa');
                            }
                        }
                    }
                    else { // si la contraseña es incorrecta hace esto y return
                        this.mensajAlertPassword = 'Contraseña incorrecta!';
                        this.passwordcorrecta = false;
                        this.incorrecto = true;
                        this.alertaPassword = false;
                        this.passwordIngresada = '';
                    }
                };
                OperadorPantallaComponent.prototype.limpiarPassword = function () {
                    this.passwordIngresada = '';
                    this.alertaPassword = true;
                };
                OperadorPantallaComponent.prototype.limpiarCodigo = function () {
                    this.codigoIngresado = '';
                    this.alertaCodigo = true;
                };
                OperadorPantallaComponent.prototype.cerrarAlertaPassword = function () {
                    this.alertaPassword = true;
                };
                OperadorPantallaComponent.prototype.getHora = function () {
                    var date = new Date();
                    var hora, minuto, segundo;
                    if (date.getHours() < 10) {
                        hora = '0' + date.getHours();
                    }
                    else {
                        hora = date.getHours();
                    }
                    if (date.getMinutes() < 10) {
                        minuto = '0' + date.getMinutes();
                    }
                    else {
                        minuto = date.getMinutes();
                    }
                    if (date.getSeconds() < 10) {
                        segundo = '0' + date.getSeconds();
                    }
                    else {
                        segundo = date.getSeconds();
                    }
                    var horaInicio = hora + ':' + minuto + ':' + segundo;
                    console.log('la hora de inicio es: ' + horaInicio);
                    return horaInicio;
                };
                OperadorPantallaComponent.prototype.getFecha = function () {
                    var date = new Date();
                    var dd = String(date.getDate()).padStart(2, '0');
                    var mm = String(date.getMonth() + 1).padStart(2, '0');
                    var yyyy = date.getFullYear();
                    var fecha = dd + '/' + mm + '/' + yyyy;
                    console.log('fecha: ' + fecha);
                    return fecha;
                };
                OperadorPantallaComponent.prototype.cerrarAlertaCodigo = function () {
                    this.alertaCodigo = true;
                };
                OperadorPantallaComponent.prototype.IniciarOt = function () {
                    if (this.codigoIngresado == undefined || this.codigoIngresado == '') {
                        console.log('no se ingreso un codigo');
                        this.mensajAlertCodigo = 'Debe ingresar un codigo!';
                        this.alertaCodigo = false;
                    }
                    else {
                        console.log('codigo bien ingresado( o sea que no sea vacio o undefined), por lo que creamos la ot');
                        console.log('primero vamos a ver si existe una pausa que deberia ser eliminada, para ello veremos si una pausa con su idtrabajo, ya que solo al insertarla se le asigna este dato, si lo tiene es porque se inserto, pero no se elimino del list');
                        for (var k = 0; k < this.listPausas.length; k++) {
                            if (this.listPausas[k].IdTrabajo === undefined) {
                                console.log('existe una pausa que es undefined el id trabajo, asi que esta bien ');
                            }
                            else {
                                console.log('tenemos una pausa que su id trabajo no es undefined, asi que la eliminamos');
                                this.listPausas.splice(k, 1);
                            }
                        }
                        for (var j = 0; j < this.listTiempo.length; j++) {
                            if (this.listTiempo[j].IdTrabajo === undefined) {
                                console.log('tenemos un tiempo que su id trabajo no es undefined, asi que la eliminamos');
                            }
                            else {
                                console.log('tenemos un tiempo que su id trabajo  es undefined, asi que lo eliminamos');
                                this.listTiempo.splice(j, 1);
                            }
                        }
                        var ottrabajdor = new _models_OtTrabajador__WEBPACK_IMPORTED_MODULE_3__["OtTrabajador"]();
                        ottrabajdor.Codigo = this.codigoIngresado;
                        ottrabajdor.Fecha = this.getFecha();
                        ottrabajdor.HoraInicio = this.getHora();
                        ottrabajdor.IdOperador = this.idOperador;
                        ottrabajdor.HoraInicioDate = new Date();
                        //datos que agregamos para tener los datos separados por dia
                        ottrabajdor.HoraInicioDelDia = this.getHora();
                        ottrabajdor.HoraInicioDelDiaDate = new Date();
                        ottrabajdor.FechaDelDia = this.getFecha();
                        ottrabajdor.Activa = true; //como creamos la ot, esta obviamente esta activa
                        //y aqui inidcamos que como creo la ot, ya se ha loguado al menos una vez, y como se ha loguado al menos una vez, la proxima vez que se loguee no sera su primer logueo del dia
                        ottrabajdor.UsuarioLogueadoAlMenosUnaVez = true;
                        ottrabajdor.UsuarioPrimerLogueoDelDia = false;
                        var splitted = this.Titulo.split(": ", 2);
                        console.log('nombre= ' + splitted);
                        ottrabajdor.Nombre = splitted[1];
                        console.log('los datos de la ot creada son= ' + ottrabajdor);
                        this.listOtIngresadas.push(ottrabajdor);
                        this.mensajeButtonIniciarOt = 'Ot iniciada,Hora de inicio: ' + ottrabajdor.HoraInicio;
                        for (var index = 0; index < this.listOtIngresadas.length; index++) {
                            console.log('elemento ' + index + '= {IdOperador: ' + this.listOtIngresadas[index].IdOperador + ', Codigo: ' + this.listOtIngresadas[index].Codigo + ', Fecha: ' + this.listOtIngresadas[index].Fecha + ', HoraInicio: ' + this.listOtIngresadas[index].HoraInicio + '}');
                            console.log(this.listOtIngresadas[index]);
                        }
                        console.log(ottrabajdor);
                        this.codigoIngresado = '';
                        this.btnIniciar = true;
                        this.btnCerrar = false;
                        this.btnPausa = false;
                        this.datoenlocalstorage();
                    }
                };
                OperadorPantallaComponent.prototype.getMotivoSeleccionado = function (motivo) {
                    this.btnIniciarPausa = false;
                    this.motivoSeleccionado = motivo.Descripcion;
                    this.idMotivoSeleccionado = motivo.IdMotivoPausa;
                    console.log('motivo es: ' + this.motivoSeleccionado + 'y su id: ' + this.idMotivoSeleccionado);
                };
                OperadorPantallaComponent.prototype.iniciarPausa = function () {
                    if (this.motivoSeleccionado != undefined && this.idMotivoSeleccionado != undefined) {
                        var pausa = new _models_Pausa__WEBPACK_IMPORTED_MODULE_5__["Pausa"]();
                        pausa.Fecha = this.getFecha();
                        pausa.HoraInicio = this.getHora();
                        pausa.HoraInicioDate = new Date();
                        pausa.IdMotivoPausa = this.idMotivoSeleccionado;
                        pausa.IdOperador = this.idOperador;
                        this.listPausas.push(pausa);
                        for (var index = 0; index < this.listPausas.length; index++) {
                            console.log('elemento ' + index + '= {IdMotivoPausa: ' + this.listPausas[index].IdMotivoPausa + ', Fecha: ' + this.listPausas[index].Fecha + ', HoraInicio: ' + this.listPausas[index].HoraInicio + ', IdOperador: ' + this.listPausas[index].IdOperador + '}');
                        }
                        this.limpiarMotivoSeleccionado();
                        this.btnPausa = true;
                        this.btnCerrar = true;
                        this.btnIniciar = false;
                        this.mensajeButtonIniciarOt = "Reanudar Ot";
                        this.mensajeButtonPausa = "Ot pausada, Hora pausa: " + this.getHora();
                        //this.EstaEnPausa=true;
                        var b = document.querySelector("#btnIniciarOt");
                        //b.removeAttribute("data-toggle");
                        b.setAttribute("data-target", "#modalTerminarPausa");
                        this.datoenlocalstorage();
                    }
                };
                OperadorPantallaComponent.prototype.limpiarMotivoSeleccionado = function () {
                    this.btnIniciarPausa = true;
                    this.motivoSeleccionado = undefined;
                    this.idMotivoSeleccionado = undefined;
                };
                OperadorPantallaComponent.prototype.terminarPausa = function () {
                    for (var index = 0; index < this.listPausas.length; index++) {
                        if (this.listPausas[index].HoraFin != undefined) {
                            console.log('pausa terminada elemento ' + index + '= {IdMotivoPausa: ' + this.listPausas[index].IdMotivoPausa + ', Fecha: ' + this.listPausas[index].Fecha + ', HoraInicio: ' + this.listPausas[index].HoraInicio + ', HoraFin: ' + this.listPausas[index].HoraFin + ', IdOperador: ' + this.listPausas[index].IdOperador + ',}');
                        }
                        if (this.listPausas[index].IdOperador == this.idOperador && this.listPausas[index].HoraFin == undefined) {
                            this.listPausas[index].HoraFin = this.getHora();
                            this.listPausas[index].HoraFinDate = new Date();
                            var time = this.listPausas[index].HoraFinDate.getTime() - this.listPausas[index].HoraInicioDate.getTime();
                            this.listPausas[index].TotalTiempo = this.msToTime(time);
                            console.warn('nueva pausa terminada ');
                            console.warn(this.listPausas[index]);
                            this.btnIniciar = true;
                            this.btnCerrar = false;
                            this.btnPausa = false;
                            this.mensajeButtonPausa = 'Pausar Ot';
                        }
                    }
                    this.datoenlocalstorage();
                    for (var index = 0; index < this.listOtIngresadas.length; index++) {
                        if (this.listOtIngresadas[index].IdOperador == this.idOperador) {
                            this.mensajeButtonIniciarOt = 'Ot iniciada,Hora de inicio: ' + this.listOtIngresadas[index].HoraInicio;
                            this.mensajeButtonPausa = 'Pausar Ot';
                            return;
                        }
                    }
                };
                OperadorPantallaComponent.prototype.cerrarOtDesdeBotonCerrar = function () {
                    console.log('variable es:' + this.idOtparaBuscar);
                    for (var index = 0; index < this.listOtIngresadas.length; index++) {
                        if (this.listOtIngresadas[index].IdOperador == this.idOperador) {
                            this.cerrarOtFuncionalidad(index, 'cerrarOtDesdeBotonCerrar');
                            // this.listOtIngresadas.splice(index,1)
                            //aqui no puedo eliminar el obj del list ots, ya que no alanza a guardarse antes de eliminar el dato, se debe terminar de hacer todo, y solo en ese punto se debe eliminar esta ot, o sea, debo hacerlo al actualizar el total tiempo de ot en el for de tiempos
                        }
                    }
                    //this.mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada()
                    this.datoenlocalstorage();
                };
                OperadorPantallaComponent.prototype.reiniciarPantallaOperador = function () {
                    this.btnIniciar = false;
                    this.btnPausa = true;
                    this.btnCerrar = true;
                    this.mensajeButtonIniciarOt = 'Iniciar Ot';
                    this.mensajeButtonPausa = 'Pausar Ot';
                    alert('Ot insertada correctamente!');
                    // $('#modalCerrarOt').modal('hide');
                };
                OperadorPantallaComponent.prototype.datoenlocalstorage = function () {
                    localStorage.removeItem('listTrabajos');
                    localStorage.removeItem('listPausas');
                    localStorage.removeItem('listTiempo');
                    localStorage.removeItem('alMenosUnaOtCerradaSinCerrarJornada');
                    localStorage.setItem('listTrabajos', JSON.stringify(this.listOtIngresadas));
                    localStorage.setItem('listPausas', JSON.stringify(this.listPausas));
                    localStorage.setItem('listTiempo', JSON.stringify(this.listTiempo));
                    localStorage.setItem('alMenosUnaOtCerradaSinCerrarJornada', JSON.stringify(this.alMenosUnaOtCerradaSinCerrarJornada));
                    this.dd++;
                };
                OperadorPantallaComponent.prototype.CerrarJornada = function () {
                    this.VerificarOtsActivasAntesDeCerrarJornada();
                };
                //verifica si las ots de la lista de listOtIngresadas estan todas cerradas, en caso de haber una activa, se muestra el modal con la info para cerrar las ots que falten por cerrar, en caso que todas esten cerradas, podemos cerrar la jornada laboral 
                OperadorPantallaComponent.prototype.VerificarOtsActivasAntesDeCerrarJornada = function () {
                    console.log('verificar ots ingresadas');
                    if (this.listOtIngresadas.length > 0) {
                        for (var i = 0; i < this.listOtIngresadas.length; i++) {
                            console.warn(i);
                            if (this.listOtIngresadas[i].Activa != false) {
                                console.log(i + ' no esta cerrada, asi que no se puede cerrar y se deben mostrar los datos');
                                this.cerrarjornada = false;
                                this.descripcionmodalcerrarjornadadescripcion = 'Todos los trabajos pendientes deben ser cerrados o indicar que continuara en su siguiente jornada laboral.Por favor, seleccione la opcion indicada para cada caso especifico.';
                                return;
                            }
                        }
                        console.log('todas las ots estan cerradas, asi que se puede cerrar');
                        this.cerrarjornada = true;
                        this.descripcionmodalcerrarjornadadescripcion = 'Puede cerrar la jornada laboral actual, recuerde que al hacerlo, no podra continuar con su trabajo hasta la siguiente jornada laboral';
                        return;
                    }
                    else {
                        console.log('la lista esta vacia por lo que se puede cerrar, asi que true');
                        this.cerrarjornada = true;
                        this.descripcionmodalcerrarjornadadescripcion = 'Puede cerrar la jornada laboral actual, recuerde que al hacerlo, no podra continuar con su trabajo hasta la siguiente jornada laboral';
                    }
                };
                OperadorPantallaComponent.prototype.cerrarotmodaljornadaicono = function (ot) {
                    console.log(ot);
                    this.titulomodalcerrarjornadadescripcion = 'Cerrar ot';
                    this.descripcionmodalcerrarjornadadescripcion = ot.Nombre + ' cerrara la ot de codigo ' + ot.Codigo + ' iniciada el dia ' + ot.Fecha + ' a las ' + ot.HoraInicio;
                    this.variableidoperadorencerrarjornadamodal = ot.IdOperador;
                    this.ocultarbotonpantallacerrarjornada = false;
                    this.buttoncerrarotenmodalcerrarjornada = true;
                };
                OperadorPantallaComponent.prototype.nextdayotmodaljornadaicono = function (ot) {
                    console.log(ot);
                    this.titulomodalcerrarjornadadescripcion = 'Cerrar jornada';
                    this.descripcionmodalcerrarjornadadescripcion = ot.Nombre + ' concluye la jornada de trabajo para la ot de codigo ' + ot.Codigo + ' iniciada el dia ' + ot.Fecha + ' a las ' + ot.HoraInicio + ', la cual sera continuada en la siguiente jornada laboral';
                    this.variableidoperadorencerrarjornadamodal = ot.IdOperador;
                    this.ocultarbotonpantallacerrarjornada = false;
                    this.buttoncerrarotenmodalcerrarjornada = false;
                };
                //metodo para cerrar ot en modal cerrar jornada
                OperadorPantallaComponent.prototype.cerrarOtdesdemodalcerrarjornada = function () {
                    console.log('id operador en modal cerrar jornada= ' + this.variableidoperadorencerrarjornadamodal);
                    console.log('variable es:' + this.idOtparaBuscar);
                    for (var index = 0; index < this.listOtIngresadas.length; index++) {
                        if (this.listOtIngresadas[index].IdOperador == this.variableidoperadorencerrarjornadamodal) {
                            this.cerrarOtFuncionalidad(index, 'cerrarOtdesdemodalcerrarjornada');
                            // this.listOtIngresadas.splice(index,1)
                            //aqui no puedo eliminar el obj del list ots, ya que no alanza a guardarse antes de eliminar el dato, se debe terminar de hacer todo, y solo en ese punto se debe eliminar esta ot, o sea, debo hacerlo al actualizar el total tiempo de ot en el for de tiempos
                        }
                    }
                    //this.mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada()
                    this.datoenlocalstorage();
                };
                //meotodo que es llamado al cerrar la ot, ya sea desde el button como desde el modal, hace toda la funcioanlidad para cerrar la ot, como lo es cerrarla, subirla, restar las pausas del total de tiempo por dia y subir los tiempos por dia
                OperadorPantallaComponent.prototype.cerrarOtFuncionalidad = function (index, deDondeEsLlamado) {
                    var _this = this;
                    console.log('------------------------------------------------');
                    console.log('------------------------------------------------');
                    console.log('entramos a cerrar ot funcionalidad');
                    console.log('------------------------------------------------');
                    console.log('------------------------------------------------');
                    console.log('de donde es llamado= ' + deDondeEsLlamado);
                    console.log('------------------------------------------------');
                    console.log('------------------------------------------------');
                    //encuentro la ot a cerrada, como este es el dato con el que voy a trabajar, una vez se haga todo, se debe salir del for
                    //////////////////////////////////
                    console.log('es llamado desde = ' + deDondeEsLlamado);
                    //let tiempoTotalOtPorDia:any
                    var horaOtDatepordia;
                    console.log('declare la variable tiempoTotalOtPorDia');
                    var tiempoEnMilisegundos;
                    var horaIniciodate = new Date(this.listOtIngresadas[index].HoraInicioDelDiaDate);
                    var horaTerminodate = new Date();
                    tiempoEnMilisegundos = horaTerminodate.getTime() - horaIniciodate.getTime();
                    var x = this.msToTime(tiempoEnMilisegundos);
                    var objTiempo = new _models_Tiempo__WEBPACK_IMPORTED_MODULE_9__["Tiempo"]();
                    objTiempo.IdOperador = this.listOtIngresadas[index].IdOperador;
                    objTiempo.Fecha = this.listOtIngresadas[index].FechaDelDia;
                    objTiempo.HoraInicio = this.listOtIngresadas[index].HoraInicioDelDia;
                    objTiempo.HoraFin = this.getHora();
                    // objTiempo.TotalTiempo = x //aqui tengo el total del tiempo, sin la resta de pausas
                    this.tiempoTotalOtpordia = x; //aqui le asigno a tiempoTotalOtpordia la diferencia de hora inicio por dia y hora fin por dia, asi que al momento de restar las pausas, sean separdos los tiempos de total tiempo ot, y total tiempo ot por dia
                    var totalTiempoOtsumadostodoslosdias = '00:00:00';
                    ////////////////////////////////
                    this.cerrarPausadesdemodalcerrarjornada(this.variableidoperadorencerrarjornadamodal);
                    this.listOtIngresadas[index].HoraFin = this.getHora();
                    this.listOtIngresadas[index].HoraFinDate = new Date();
                    // var time = this.listOtIngresadas[index].HoraFinDate.getTime() - this.listOtIngresadas[index].HoraInicioDate.getTime()
                    // this.tiempoTotalOt = this.msToTime(time)
                    // console.log('tiempo total ot 2: ' + this.tiempoTotalOt)
                    var idTrabajoparaeliminarpausas;
                    /////////////////////////
                    var idoperadorsegunelmetododesdeelcualesllamado;
                    if (deDondeEsLlamado == 'cerrarOtDesdeBotonCerrar') {
                        console.log('------------------------------------------------');
                        console.log('------------------------------------------------');
                        console.log('el metodo es llamdo desde cerrarOtDesdeBotonCerrar, por lo que el id que consideramos es id operador, que vale= ' + this.idOperador);
                        console.log('------------------------------------------------');
                        console.log('------------------------------------------------');
                        idoperadorsegunelmetododesdeelcualesllamado = this.idOperador;
                    }
                    if (deDondeEsLlamado == 'cerrarOtdesdemodalcerrarjornada') {
                        console.log('------------------------------------------------');
                        console.log('------------------------------------------------');
                        console.log('el metodo es llamdo desde cerrarOtdesdemodalcerrarjornada, por lo que el id que consideramos es variableidoperadorencerrarjornadamodal, que vale= ' + this.variableidoperadorencerrarjornadamodal);
                        console.log('------------------------------------------------');
                        console.log('------------------------------------------------');
                        idoperadorsegunelmetododesdeelcualesllamado = this.variableidoperadorencerrarjornadamodal;
                    }
                    var time = new Date(this.listOtIngresadas[index].HoraFinDate).getTime() - new Date(this.listOtIngresadas[index].HoraInicioDate).getTime();
                    this.tiempoTotalOt = this.msToTime(time);
                    console.log('tiempo total ot : ' + this.tiempoTotalOt);
                    ///////////////////////// 
                    console.log('se cerrara la ot de codigo: ' + this.listOtIngresadas[index].Codigo + ' iniciada por el operador: ' + this.listOtIngresadas[index].IdOperador + ' con fecha: ' + this.listOtIngresadas[index].Fecha + ' y hora de inicio: ' + this.listOtIngresadas[index].HoraInicio + ' y hora de cierre: ' + this.listOtIngresadas[index].HoraFin + ' .');
                    console.log('vamos a verificar codigo');
                    this.trabajoService.verificarCodigoOt(this.listOtIngresadas[index].Codigo).subscribe(// aqui solo verificamos si existe el codigo, retornando un si o no
                    //si existe, luego la buscamos, sino existe, se inserta
                    //lo que se debe hacer es que en caso que exista retorna los datos de inmediato y si no existe, de inmediato lo inserta y retorna la data 
                    // aqui solo verificamos si existe el codigo, retornando un si o no
                    function (// aqui solo verificamos si existe el codigo, retornando un si o no
                    res) {
                        //console.log(res)
                        if (res == 'no existe') {
                            console.log('como no existe vamos a insertarlo en la db');
                            _this.otParaGuardar.Codigo = _this.listOtIngresadas[index].Codigo;
                            _this.otService.saveOt(_this.otParaGuardar).subscribe(function (res) {
                                console.log(res);
                                _this.idOtparaBuscar = res;
                                console.log('ahora que ya fue insertado lo vamos a buscar');
                                _this.codigoparabuscarot = _this.listOtIngresadas[index].Codigo;
                                _this.otService.getOtByCodigo(_this.codigoparabuscarot).subscribe(function (res) {
                                    _this.otretornada = res;
                                    console.log('id de la ot retornada: ' + _this.otretornada.IdOt);
                                    _this.listOtIngresadas[index].IdOt = _this.otretornada.IdOt;
                                    delete _this.listOtIngresadas[index].Codigo;
                                    // delete this.listOtIngresadas[index].HoraInicioDate
                                    // delete this.listOtIngresadas[index].HoraFinDate
                                    console.log(_this.listOtIngresadas[index]);
                                    _this.trabajoService.saveTrabajo(_this.listOtIngresadas[index]).subscribe(function (res) {
                                        //eliminamos el trabajo insertado del array
                                        console.log('insertamos el trabajo y el res es= ' + res);
                                        _this.listOtIngresadas.splice(index, 1);
                                        var b = document.querySelector("#btnIniciarOt");
                                        b.setAttribute("data-target", "#modalCodigo");
                                        _this.reiniciarPantallaOperador();
                                        //vamos a insertar las pausas si es que tiene 
                                        console.log('primero vamos a ver las pausas');
                                        var _loop_1 = function (i) {
                                            console.log('entro al for de pausas');
                                            if (_this.listPausas[i].IdOperador == _this.idOperador)
                                                //encontro una pausa asociada con este trabajador y esta ot
                                                console.log('tiempo total ot a dividir= ' + _this.tiempoTotalOt);
                                            console.log('tiempo total ot por dia a dividir= ' + _this.tiempoTotalOtpordia);
                                            totalhoraotarraypordia = _this.splitTime(_this.tiempoTotalOtpordia);
                                            console.log('este dato que no se= ' + totalhoraotarraypordia);
                                            console.log('tiempo total ot 6: ' + _this.tiempoTotalOtpordia);
                                            TotalhoraOtDatepordia = new Date();
                                            TotalhoraOtDatepordia.setHours(parseInt(totalhoraotarraypordia[0]));
                                            TotalhoraOtDatepordia.setMinutes(parseInt(totalhoraotarraypordia[1]));
                                            TotalhoraOtDatepordia.setSeconds(parseInt(totalhoraotarraypordia[2]));
                                            console.log('tiempo total ot por dia en formato date= ' + TotalhoraOtDatepordia);
                                            console.warn('el tiempo total de la ot por dia es= ' + _this.tiempoTotalOtpordia);
                                            //ya tengo el tiempo total por dia
                                            totalhoraotarray = _this.splitTime(_this.tiempoTotalOt);
                                            console.log('este dato que no se= ' + totalhoraotarray);
                                            console.log('tiempo total ot 6: ' + _this.tiempoTotalOt);
                                            Totalhoraotdate = new Date();
                                            console.log('aqui veo la hora');
                                            console.log('el total de tiempo de esta pausa es= ' + _this.listPausas[i].TotalTiempo);
                                            Totalhoraotdate.setHours(parseInt(totalhoraotarray[0]));
                                            console.log('aqui veo los minutos');
                                            console.log('el total de tiempo de esta pausa es= ' + _this.listPausas[i].TotalTiempo);
                                            Totalhoraotdate.setMinutes(parseInt(totalhoraotarray[1]));
                                            console.log('aqui los segundos');
                                            console.log('el total de tiempo de esta pausa es= ' + _this.listPausas[i].TotalTiempo);
                                            Totalhoraotdate.setSeconds(parseInt(totalhoraotarray[2]));
                                            console.log('tiempo total ot en formato date= ' + Totalhoraotdate);
                                            console.log('el total de tiempo de esta pausa es= ' + _this.listPausas[i].TotalTiempo);
                                            totalhorapausaarray = _this.splitTime(_this.listPausas[i].TotalTiempo);
                                            Totalhorapausadate = new Date();
                                            Totalhorapausadate.setHours(parseInt(totalhorapausaarray[0]));
                                            Totalhorapausadate.setMinutes(parseInt(totalhorapausaarray[1]));
                                            Totalhorapausadate.setSeconds(parseInt(totalhorapausaarray[2]));
                                            console.log('tiempo total pausa en formato date= ' + Totalhorapausadate);
                                            //aqui tengo el tiempo total de la pausa a restar, por lo que tengo qye verificar si es una pausa del dia, si lo es le resto el tiempo, sino quiere decir que es una pausa de otro dia, por lo que no tengo que considerarla
                                            fechaot = TotalhoraOtDatepordia.getDate() + '/' + TotalhoraOtDatepordia.getMonth() + '/' + TotalhoraOtDatepordia.getFullYear();
                                            fechapausa = Totalhorapausadate.getDate() + '/' + Totalhorapausadate.getMonth() + '/' + Totalhorapausadate.getFullYear();
                                            console.log(horaOtDatepordia);
                                            console.log(Totalhorapausadate);
                                            if (fechaot == fechapausa) {
                                                console.warn('las fechas son iguales, como lo son tengo que restar las horas a la hora por dia');
                                                console.log(fechaot);
                                                console.log(fechapausa);
                                                console.log('hora por dia= ' + TotalhoraOtDatepordia.getTime());
                                                console.log('hora de pausa a restra= ' + Totalhorapausadate.getTime());
                                                timepordia = TotalhoraOtDatepordia.getTime() - Totalhorapausadate.getTime();
                                                nuevoTotalhoraotpordia = _this.msToTime(timepordia);
                                                console.log('tiempo ot sin pausa por dia= ' + nuevoTotalhoraotpordia);
                                                _this.tiempoTotalOtpordia = nuevoTotalhoraotpordia;
                                            }
                                            time = Totalhoraotdate.getTime() - Totalhorapausadate.getTime();
                                            nuevoTotalhoraot = _this.msToTime(time);
                                            console.log('tiempo ot sin pausa= ' + nuevoTotalhoraot);
                                            _this.tiempoTotalOt = nuevoTotalhoraot;
                                            _this.listPausas[i].IdTrabajo = JSON.stringify(res);
                                            idtrabajofinal = ('' + _this.listPausas[i].IdTrabajo);
                                            console.log('id trabajo final=' + idtrabajofinal);
                                            delete _this.listPausas[i].IdOperador;
                                            delete _this.listPausas[i].HoraInicioDate;
                                            delete _this.listPausas[i].HoraFinDate;
                                            console.log(_this.listPausas[i]);
                                            _this.pausaService.savePausa(_this.listPausas[i]).subscribe(function (res) {
                                                _this.listPausas.splice(i, 1);
                                                console.log('lista de pausas' + _this.listPausas);
                                                _this.otTrabajadorparaActualizar.TotalTiempo = _this.tiempoTotalOt;
                                                _this.trabajoService.updateTotalTiempo(idtrabajofinal, _this.otTrabajadorparaActualizar).subscribe(function (res) {
                                                    console.log('actualizado nuevo total tiempo de trabajo!');
                                                    console.log(_this.otTrabajadorparaActualizar);
                                                    //aqui tengo el tiempo de la ot sin pausas, pero es el tiempo total
                                                }, function (err) { console.error(err); }, function () {
                                                });
                                            }, function (err) { console.error(err); }, function () {
                                            });
                                        };
                                        var totalhoraotarraypordia, TotalhoraOtDatepordia, totalhoraotarray, Totalhoraotdate, totalhorapausaarray, Totalhorapausadate, fechaot, fechapausa, timepordia, nuevoTotalhoraotpordia, time, nuevoTotalhoraot, idtrabajofinal;
                                        for (var i = 0; i < _this.listPausas.length; i++) {
                                            _loop_1(i);
                                        }
                                        console.warn('al salir del for de pausas');
                                        console.log('tiempo total ot por dia= ' + _this.tiempoTotalOtpordia);
                                        console.log('tiempo total ot= ' + _this.tiempoTotalOt);
                                        //una vez terminado el for de pausas,actualizamos el valor del tiempo total por dia
                                        objTiempo.TotalTiempo = _this.tiempoTotalOtpordia;
                                        console.log(objTiempo);
                                        console.warn('el tiempo total sin pausas= ' + objTiempo.TotalTiempo);
                                        console.log('ahora insertamos el objeto en el list de tiempos');
                                        _this.listTiempo.push(objTiempo);
                                        console.log(_this.listTiempo);
                                        console.log('segundo tengo que ver el tiempo');
                                        var _loop_2 = function (j) {
                                            console.log('entre al for de tiempos');
                                            console.log('id operador= ' + _this.idOperador);
                                            console.log('id operador en modal= ' + _this.variableidoperadorencerrarjornadamodal);
                                            console.log('id en list= ' + _this.listTiempo[j].IdOperador);
                                            if (_this.listTiempo[j].IdOperador == _this.variableidoperadorencerrarjornadamodal) {
                                                console.log('encontro un tiempo asociado a este operador');
                                                console.log('id trabajo retornada= ' + JSON.stringify(res));
                                                _this.listTiempo[j].IdTrabajo = JSON.stringify(res);
                                                _this.tiempoService.saveTiempo(_this.listTiempo[j]).subscribe(function (res) {
                                                    console.log(res);
                                                    _this.listTiempo.splice(j, 1);
                                                }, function (err) { return console.error(err); });
                                            }
                                        };
                                        for (var j = 0; j < _this.listTiempo.length; j++) {
                                            _loop_2(j);
                                        }
                                    }, function (err) { console.error(err); }, function () {
                                    });
                                }, function (err) { console.error(err); }, function () {
                                });
                            }, function (err) { console.error(err); }, function () {
                            });
                        }
                        else {
                            console.log('existe en la db, asi que lo buscamos');
                            _this.codigoparabuscarot = _this.listOtIngresadas[index].Codigo;
                            _this.otService.getOtByCodigo(_this.codigoparabuscarot).subscribe(function (res) {
                                _this.otretornada = res;
                                console.log('id de la ot retornada: ' + _this.otretornada.IdOt);
                                _this.listOtIngresadas[index].IdOt = _this.otretornada.IdOt;
                                // this.listOtIngresadas[index].FechaTermino=this.getFecha()
                                delete _this.listOtIngresadas[index].Codigo;
                                console.log(_this.listOtIngresadas[index]);
                                _this.trabajoService.saveTrabajo(_this.listOtIngresadas[index]).subscribe(function (res) {
                                    console.log('------------------------------------------------');
                                    console.log('------------------------------------------------');
                                    console.log('insertamos el trabajo');
                                    console.log('------------------------------------------------');
                                    console.log('------------------------------------------------');
                                    console.log('insertamos el trabajo y el res es= ' + res);
                                    var idotparaactualizarenfortiempos = JSON.stringify(res);
                                    _this.listOtIngresadas.splice(index, 1);
                                    console.log(_this.listOtIngresadas);
                                    var b = document.querySelector("#btnIniciarOt");
                                    b.setAttribute("data-target", "#modalCodigo");
                                    _this.reiniciarPantallaOperador();
                                    //vamos a insertar las pausas si es que tiene 
                                    console.log('------------------------------------------------');
                                    console.log('------------------------------------------------');
                                    console.log('primero vamos a ver las pausas');
                                    console.log('------------------------------------------------');
                                    console.log('------------------------------------------------');
                                    var _loop_3 = function (i) {
                                        console.log('entro al for de pausas');
                                        console.log('el id de operador que estoy buscando es= ' + _this.idOperador);
                                        console.log('y el id del list pausas []' + i + ' es= ' + _this.listPausas[i].IdOperador);
                                        console.log('id operador es= ' + _this.idOperador);
                                        console.log('variable id en modal= ' + _this.variableidoperadorencerrarjornadamodal);
                                        console.log('------------------------------------------------');
                                        console.log('------------------------------------------------');
                                        console.log('mi variable id operador segun el metodo desde el cual es llamado=' + idoperadorsegunelmetododesdeelcualesllamado);
                                        console.log('------------------------------------------------');
                                        console.log('------------------------------------------------');
                                        if (_this.listPausas[i].IdOperador == idoperadorsegunelmetododesdeelcualesllamado) {
                                            //aqui debe ser idoperador o idoperador en modal
                                            //encontro una pausa asociada con este trabajador y esta ot
                                            console.log('encontre una pausa relacionada con el operador= ' + idoperadorsegunelmetododesdeelcualesllamado);
                                            console.log(_this.listPausas[i]);
                                            console.log('tiempo total ot a dividir= ' + _this.tiempoTotalOt);
                                            console.log('tiempo total ot por dia a dividir= ' + _this.tiempoTotalOtpordia);
                                            totalhoraotarraypordia = _this.splitTime(_this.tiempoTotalOtpordia);
                                            console.log('este dato que no se= ' + totalhoraotarraypordia);
                                            console.log('tiempo total ot 6: ' + _this.tiempoTotalOtpordia);
                                            TotalhoraOtDatepordia = new Date();
                                            TotalhoraOtDatepordia.setHours(parseInt(totalhoraotarraypordia[0]));
                                            TotalhoraOtDatepordia.setMinutes(parseInt(totalhoraotarraypordia[1]));
                                            TotalhoraOtDatepordia.setSeconds(parseInt(totalhoraotarraypordia[2]));
                                            console.log('tiempo total ot por dia en formato date= ' + TotalhoraOtDatepordia);
                                            console.warn('el tiempo total de la ot por dia es= ' + _this.tiempoTotalOtpordia);
                                            //ya tengo el tiempo total por dia
                                            totalhoraotarray = _this.splitTime(_this.tiempoTotalOt);
                                            console.log('este dato que no se= ' + totalhoraotarray);
                                            console.log('tiempo total ot 6: ' + _this.tiempoTotalOt);
                                            Totalhoraotdate = new Date();
                                            console.log('aqui veo la hora');
                                            Totalhoraotdate.setHours(parseInt(totalhoraotarray[0]));
                                            console.log('aqui veo los minutos');
                                            Totalhoraotdate.setMinutes(parseInt(totalhoraotarray[1]));
                                            console.log('aqui los segundos');
                                            Totalhoraotdate.setSeconds(parseInt(totalhoraotarray[2]));
                                            console.log('tiempo total ot en formato date= ' + Totalhoraotdate);
                                            console.log('total de tiempo de esta pausa= ' + _this.listPausas[i].TotalTiempo);
                                            totalhorapausaarray = _this.splitTime(_this.listPausas[i].TotalTiempo);
                                            Totalhorapausadate = new Date();
                                            Totalhorapausadate.setHours(parseInt(totalhorapausaarray[0]));
                                            Totalhorapausadate.setMinutes(parseInt(totalhorapausaarray[1]));
                                            Totalhorapausadate.setSeconds(parseInt(totalhorapausaarray[2]));
                                            console.log('tiempo total pausa en formato date= ' + Totalhorapausadate);
                                            //aqui tengo el tiempo total de la pausa a restar, por lo que tengo qye verificar si es una pausa del dia, si lo es le resto el tiempo, sino quiere decir que es una pausa de otro dia, por lo que no tengo que considerarla
                                            fechaot = TotalhoraOtDatepordia.getDate() + '/' + TotalhoraOtDatepordia.getMonth() + '/' + TotalhoraOtDatepordia.getFullYear();
                                            fechapausa = Totalhorapausadate.getDate() + '/' + Totalhorapausadate.getMonth() + '/' + Totalhorapausadate.getFullYear();
                                            console.log(horaOtDatepordia);
                                            console.log(Totalhorapausadate);
                                            if (fechaot == fechapausa) {
                                                console.warn('las fechas son iguales, como lo son tengo que restar las horas a la hora por dia');
                                                console.log(fechaot);
                                                console.log(fechapausa);
                                                console.log('hora por dia= ' + TotalhoraOtDatepordia.getTime());
                                                console.log('hora de pausa a restra= ' + Totalhorapausadate.getTime());
                                                timepordia = TotalhoraOtDatepordia.getTime() - Totalhorapausadate.getTime();
                                                nuevoTotalhoraotpordia = _this.msToTime(timepordia);
                                                console.log('tiempo ot sin pausa por dia= ' + nuevoTotalhoraotpordia);
                                                _this.tiempoTotalOtpordia = nuevoTotalhoraotpordia;
                                            }
                                            time = Totalhoraotdate.getTime() - Totalhorapausadate.getTime();
                                            nuevoTotalhoraot = _this.msToTime(time);
                                            console.log('tiempo ot sin pausa= ' + nuevoTotalhoraot);
                                            _this.tiempoTotalOt = nuevoTotalhoraot;
                                            _this.listPausas[i].IdTrabajo = JSON.stringify(res);
                                            idtrabajofinal = ('' + _this.listPausas[i].IdTrabajo);
                                            console.log('id trabajo final=' + idtrabajofinal);
                                            delete _this.listPausas[i].IdOperador;
                                            delete _this.listPausas[i].HoraInicioDate;
                                            delete _this.listPausas[i].HoraFinDate;
                                            console.log(_this.listPausas[i]);
                                            _this.pausaService.savePausa(_this.listPausas[i]).subscribe(function (res) {
                                                console.log(res);
                                                console.log('lista de pausas' + _this.listPausas);
                                                _this.otTrabajadorparaActualizar.TotalTiempo = _this.tiempoTotalOt;
                                                console.error('el id del trabajo= ' + idtrabajofinal + ' y el objeto es= ' + _this.otTrabajadorparaActualizar);
                                                console.log('lo que tiene es= ' + _this.otTrabajadorparaActualizar.TotalTiempo);
                                                console.log('eliminamos la pausa en for de pausas');
                                                console.log(_this.listPausas);
                                                _this.listPausas.splice(i, 1);
                                                console.log('despues de eliminar la pausa');
                                                console.log(_this.listPausas);
                                            }, function (err) { console.error(err); }, function () {
                                            });
                                        }
                                    };
                                    var totalhoraotarraypordia, TotalhoraOtDatepordia, totalhoraotarray, Totalhoraotdate, totalhorapausaarray, Totalhorapausadate, fechaot, fechapausa, timepordia, nuevoTotalhoraotpordia, time, nuevoTotalhoraot, idtrabajofinal;
                                    for (var i = 0; i < _this.listPausas.length; i++) {
                                        _loop_3(i);
                                    }
                                    //hasta aqui es el for de pausas
                                    console.warn('al salir del for de pausas');
                                    console.log('tiempo total ot por dia= ' + _this.tiempoTotalOtpordia);
                                    console.log('tiempo total ot= ' + _this.tiempoTotalOt);
                                    //una vez terminado el for de pausas,actualizamos el valor del tiempo total por dia
                                    objTiempo.TotalTiempo = _this.tiempoTotalOtpordia;
                                    console.log(objTiempo);
                                    console.warn('el tiempo total sin pausas= ' + objTiempo.TotalTiempo);
                                    console.log('ahora insertamos el objeto en el list de tiempos');
                                    _this.listTiempo.push(objTiempo);
                                    console.log(_this.listTiempo);
                                    console.log('segundo tengo que ver el tiempo');
                                    console.log('elementos del list de tiempos= ' + _this.listTiempo);
                                    var _loop_4 = function (j) {
                                        console.log('entre al for de tiempos');
                                        console.log('id operador= ' + _this.idOperador);
                                        console.log('id operador en modal= ' + _this.variableidoperadorencerrarjornadamodal);
                                        console.log('id en list= ' + _this.listTiempo[j].IdOperador);
                                        console.log('antes de ver si es un metodo u otro su valor es= ' + deDondeEsLlamado);
                                        console.log('es llamado desde = ' + deDondeEsLlamado);
                                        if (_this.listTiempo[j].IdOperador == idoperadorsegunelmetododesdeelcualesllamado) {
                                            console.log('encontro un tiempo asociado a este operador');
                                            console.log('id trabajo retornada= ' + JSON.stringify(res));
                                            _this.listTiempo[j].IdTrabajo = JSON.stringify(res);
                                            console.log(_this.listTiempo[j]);
                                            //aqui puse esto del tiempo
                                            console.log('guardamos el tiempo asociado a esta ot, asi que vamos a actualizar el total de tiempo de la ot completa');
                                            console.warn('total tiempo en list= ' + _this.listTiempo[j].TotalTiempo + ' con j =' + j);
                                            totalTiempoOtsumadostodoslosdias = _this.sumadeTiempos(totalTiempoOtsumadostodoslosdias, _this.listTiempo[j].TotalTiempo);
                                            console.log('j= ' + j);
                                            _this.otTrabajadorparaActualizar.TotalTiempo = totalTiempoOtsumadostodoslosdias;
                                            //aqui puse esto del tiempo
                                            _this.tiempoService.saveTiempo(_this.listTiempo[j]).subscribe(function (res) {
                                                console.error('el id del trabajo= ' + idotparaactualizarenfortiempos + ' y el objeto es= ' + _this.otTrabajadorparaActualizar);
                                                console.log(res);
                                                _this.listTiempo.splice(j, 1);
                                                console.log('lo que tien es= ' + _this.otTrabajadorparaActualizar.TotalTiempo);
                                                _this.trabajoService.updateTotalTiempo(idotparaactualizarenfortiempos, _this.otTrabajadorparaActualizar).subscribe(function (res) {
                                                    console.log('actualizado nuevo total tiempo de trabajo!');
                                                    console.log(_this.otTrabajadorparaActualizar);
                                                    //ahora vamos a eliminar la ot del list 
                                                    console.log('ahora vamos a eliminar la ot del list');
                                                    //this.listOtIngresadas.splice(index, 1)
                                                    //esta en caso que no se haya eliminado , pero si se elimina, solo eliminara el siguiente registro, asi que no lo eliminamos aqui
                                                    console.log(_this.listTiempo);
                                                    console.log(_this.listPausas);
                                                    _this.mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada();
                                                    _this.datoenlocalstorage();
                                                }, function (err) { console.error(err); }, function () {
                                                });
                                            }, function (err) { return console.error(err); });
                                        }
                                    };
                                    for (var j = 0; j < _this.listTiempo.length; j++) {
                                        _loop_4(j);
                                    }
                                }, function (err) { console.error(err); }, function () {
                                });
                            }, function (err) { console.error(err); }, function () {
                            });
                        }
                    }, function (err) { console.error(err); }, function () {
                    });
                    console.log('salimos de  verificar codigo');
                };
                //metodo para cerrar pausas activas al momento de cerrar su jornada o cerrar la ot, para ello resivo el id del operador, luego lo busco en la lista de pausas, si su hora de fin es null, entonces quiere decir que tiene una pausa y esta activa, si no lo encuentra en el array quiere decir que no tiene una pausa , y si lo encuentra y si tiene una hora fin, quiere decir que la pausa si es de ese operador, pero que ya se termino, por lo que debo verificar que la hora de cierre es null o undefined
                OperadorPantallaComponent.prototype.cerrarPausadesdemodalcerrarjornada = function (id) {
                    for (var index = 0; index < this.listPausas.length; index++) {
                        if (this.listPausas[index].IdOperador == id && this.listPausas[index].HoraFin == undefined) {
                            //tiene una pausa activa
                            console.log('tiene una pausa activa');
                            this.listPausas[index].HoraFin = this.getHora();
                            this.listPausas[index].HoraFinDate = new Date();
                            var time = this.listPausas[index].HoraFinDate.getTime() - this.listPausas[index].HoraInicioDate.getTime();
                            this.listPausas[index].TotalTiempo = this.msToTime(time);
                            console.warn('nueva pausa terminada ');
                            console.warn(this.listPausas[index]);
                        }
                    }
                    console.log('salimos del for de pausas');
                };
                //metodo para cerrar jornada de una ot en modal cerrar jornada
                OperadorPantallaComponent.prototype.cerrarjornadadesdemodaljornada = function () {
                    var t0 = performance.now();
                    console.log('button cerrar jornada');
                    console.log('id operador en modal cerrar jornada= ' + this.variableidoperadorencerrarjornadamodal);
                    for (var index = 0; index < this.listOtIngresadas.length; index++) {
                        if (this.listOtIngresadas[index].IdOperador == this.variableidoperadorencerrarjornadamodal) {
                            this.cerrarPausadesdemodalcerrarjornada(this.listOtIngresadas[index].IdOperador);
                            var tiempoEnMilisegundos = void 0;
                            var horaIniciodate = new Date(this.listOtIngresadas[index].HoraInicioDelDiaDate);
                            var horaTerminodate = new Date();
                            tiempoEnMilisegundos = horaTerminodate.getTime() - horaIniciodate.getTime();
                            //total tiempo ot del dia con pausas
                            var x = this.msToTime(tiempoEnMilisegundos);
                            this.listOtIngresadas[index].HoraFinDelDiaDate = new Date();
                            this.listOtIngresadas[index].HoraFinDelDia = this.getHora();
                            //total tiempo del dia  con pausas
                            this.listOtIngresadas[index].TotalTiempoDelDia = x;
                            console.log('la ot antes de entrar al for y restar las pausas');
                            console.log('su hora de inicio del dia= ' + this.listOtIngresadas[index].HoraInicioDelDiaDate);
                            console.log('su hora de fin del dia= ' + this.listOtIngresadas[index].HoraFinDelDia);
                            console.log('el total del tiempo del dia= ' + x);
                            console.log('su total por dia es= ' + this.listOtIngresadas[index].TotalTiempoDelDia);
                            console.log(this.listOtIngresadas[index]);
                            console.log('su total por dia despues de mostrar el objeto y antes de entrar al for es= ' + this.listOtIngresadas[index].TotalTiempoDelDia);
                            //aqui tengo que hacer un for que reste los tiempos de las pausas al total del dia, sin ingresar las pausas al sistema, solo restando las pausas
                            for (var i = 0; i < this.listPausas.length; i++) {
                                if (this.listPausas[i].IdOperador == this.variableidoperadorencerrarjornadamodal) {
                                    //es una pausa asociada a este operador
                                    //console.log('tiempo ot del dia= ' + this.listOtIngresadas[index].TotalTiempoDelDia)
                                    var totalhoraotarraypordia = this.splitTime(this.listOtIngresadas[index].TotalTiempoDelDia);
                                    var TotalhoraOtDatepordia = new Date();
                                    TotalhoraOtDatepordia.setHours(parseInt(totalhoraotarraypordia[0]));
                                    TotalhoraOtDatepordia.setMinutes(parseInt(totalhoraotarraypordia[1]));
                                    TotalhoraOtDatepordia.setSeconds(parseInt(totalhoraotarraypordia[2]));
                                    console.log('tiempo total ot por dia en formato date= ' + TotalhoraOtDatepordia);
                                    console.warn('el tiempo total de la ot por dia es= ' + this.listOtIngresadas[index].TotalTiempoDelDia);
                                    //ya tengo el tiempo total por dia
                                    var totalhorapausaarray = this.splitTime(this.listPausas[i].TotalTiempo);
                                    var Totalhorapausadate = new Date();
                                    Totalhorapausadate.setHours(parseInt(totalhorapausaarray[0]));
                                    Totalhorapausadate.setMinutes(parseInt(totalhorapausaarray[1]));
                                    Totalhorapausadate.setSeconds(parseInt(totalhorapausaarray[2]));
                                    console.log('tiempo total pausa en formato date= ' + Totalhorapausadate);
                                    var fechaot = TotalhoraOtDatepordia.getDate() + '/' + TotalhoraOtDatepordia.getMonth() + '/' + TotalhoraOtDatepordia.getFullYear();
                                    var fechapausa = Totalhorapausadate.getDate() + '/' + Totalhorapausadate.getMonth() + '/' + Totalhorapausadate.getFullYear();
                                    console.log(TotalhoraOtDatepordia);
                                    console.log(Totalhorapausadate);
                                    if (fechaot == fechapausa) {
                                        console.log('el dia de trabajo de la ot y el dia de la pausa son iguales, por lo que afecta al tiempo del total de la ot por dia');
                                        console.warn('las fechas son iguales, como lo son tengo que restar las horas a la hora por dia');
                                        console.log(fechaot);
                                        console.log(fechapausa);
                                        console.log('hora por dia= ' + TotalhoraOtDatepordia.getTime());
                                        console.log('hora de pausa a restar= ' + Totalhorapausadate.getTime());
                                        var timepordia = TotalhoraOtDatepordia.getTime() - Totalhorapausadate.getTime();
                                        var nuevoTotalhoraotpordia = this.msToTime(timepordia);
                                        console.log('tiempo ot sin pausa por dia= ' + nuevoTotalhoraotpordia);
                                        this.listOtIngresadas[index].TotalTiempoDelDia = nuevoTotalhoraotpordia;
                                    }
                                }
                            }
                            //los tiempos de las pausas de esta ot y de la misma jornada fueron restadas, asi que ahora podemos asgnar los tiempos al obj tiempo
                            //let tiempo:Tiempo
                            var objTiempo = new _models_Tiempo__WEBPACK_IMPORTED_MODULE_9__["Tiempo"]();
                            objTiempo.Fecha = this.listOtIngresadas[index].FechaDelDia;
                            objTiempo.HoraInicio = this.listOtIngresadas[index].HoraInicioDelDia;
                            objTiempo.HoraFin = this.listOtIngresadas[index].HoraFinDelDia;
                            objTiempo.IdOperador = this.listOtIngresadas[index].IdOperador;
                            //aqui al objeto tiempo le asignamos el total tiempo del dia con pausas
                            objTiempo.TotalTiempo = this.listOtIngresadas[index].TotalTiempoDelDia;
                            console.log(objTiempo);
                            this.listTiempo.push(objTiempo);
                            console.log(this.listTiempo);
                            this.alMenosUnaOtCerradaSinCerrarJornada = true;
                            this.listOtIngresadas[index].Activa = false;
                            console.log(this.listOtIngresadas[index]);
                            console.log('nombre= ' + this.listOtIngresadas[index].Nombre);
                            console.log('Operador: ' + this.listOtIngresadas[index].Nombre);
                            console.log('titulo= ' + this.Titulo);
                            this.datoenlocalstorage(); //como tenemos los datos, los subimos al sistema los 3 list
                            //ya tenemos nuestro obj tiempo en nuestra lista de tiempos
                            //para ver si el operador esta logueado, en ese caso la pantalla cambia de inmediato al estado de cerrado, si no esta loguado, quiere decir que otro operador esta logueado, y su informacion no debe cambiar
                            if ('Operador: ' + this.listOtIngresadas[index].Nombre == this.Titulo) {
                                console.log('el operador esta logueado');
                                this.btnIniciar = true;
                                this.btnPausa = true;
                                this.btnCerrar = true;
                                //this.btnCerrarJornadaLaboral=true
                                this.mensajeButtonIniciarOt = 'Ot cerrada';
                                this.mensajeButtonPausa = 'Pausar Ot';
                                this.Titulo = 'Operador: ' + this.listOtIngresadas[index].Nombre;
                                //this.cerrarjornada=true 
                            }
                            this.mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada();
                            this.datoenlocalstorage();
                            var t1 = performance.now();
                            console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
                            return;
                        }
                    }
                };
                //metodo que verifica si existe una ot abierta, de existir, no se puede cerrar la jornada laboral, si no existe, se puede cerrar la jornada laboral, si existe ademas, oculta el button (ya sea de cerrar ot o cerrra jornada), cambia el titulo del modal y la descripcion del mismo, para que quede tal cual como al iniciar el modal
                OperadorPantallaComponent.prototype.mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada = function () {
                    console.warn('entre en mostrarmensajecerrarjornadaoreiniciardatosmodalcerrarjornada');
                    var mostrarmensajecerrarjornada = true;
                    //for para ver si alguna ot tiene un true, lo que indica que una ot esta activa, asi que aun no se puede cerrar la jornada para todos
                    for (var i = 0; i < this.listOtIngresadas.length; i++) {
                        console.warn('ot numero ' + i);
                        if (this.listOtIngresadas[i].Activa != false) {
                            mostrarmensajecerrarjornada = false;
                            console.log('al ser un false no se puede cerrar la jornada');
                        }
                    }
                    console.log('al salir del for mostrarmensajecerrarjornada=' + mostrarmensajecerrarjornada);
                    if (mostrarmensajecerrarjornada == true) {
                        this.cerrarjornada = true;
                        console.log('se puede cerrar');
                        this.descripcionmodalcerrarjornadadescripcion = 'Puede cerrar la jornada laboral actual, recuerde que al hacerlo, no podra continuar con su trabajo hasta la siguiente jornada laboral';
                        this.ocultarbotonpantallacerrarjornada = false;
                    }
                    else {
                        this.reiniciarmodalcerrarjornada();
                    }
                };
                //metodo para que el modal cerrar jornada vuelva a su estado inicial al cerrar el modal
                OperadorPantallaComponent.prototype.reiniciarmodalcerrarjornada = function () {
                    this.ocultarbotonpantallacerrarjornada = true;
                    this.buttoncerrarotenmodalcerrarjornada = false;
                    this.descripcionmodalcerrarjornadadescripcion = 'Todos los trabajos pendientes deben ser cerrados o indicar que continuara en su siguiente jornada laboral.Por favor, seleccione la opcion indicada para cada caso especifico.';
                    this.titulomodalcerrarjornadadescripcion = 'Importante';
                };
                //metodo que cierra la jornada laboral del dia, reinicia la pantalla , deshabilitando los buttons e indicando de titulo que la jornada esta cerrada
                OperadorPantallaComponent.prototype.cerrarJornadaLaboralPorElDia = function () {
                    //this.router.navigateByUrl('/index');
                    this.pantallaoperadorescerrada();
                    localStorage.removeItem('fecha');
                    this.alMenosUnaOtCerradaSinCerrarJornada = false;
                    localStorage.removeItem('alMenosUnaOtCerradaSinCerrarJornada');
                    localStorage.setItem('fecha', JSON.stringify(this.getFecha()));
                    localStorage.setItem('alMenosUnaOtCerradaSinCerrarJornada', JSON.stringify(this.alMenosUnaOtCerradaSinCerrarJornada));
                    //con esto, la pantalla queda inutilizada al momento de cerrar jornada, puesto que no puede interactuar con ningun boton, si un operador esta logueado, la pantalla indica que se cerro la jornad y si se tratan de loguear, solo se muestra un mensaje en el modal que dice que la jornada fue cerrada, inutilizando la pantalla por completo
                    //ahora debo hacer que esta desicion permanezca, por lo que en el localstorage debbo guardar un dato, si este dato (puede ser la fecha en un string, un 0 o nada )
                    //teniendo uno de estos datos verificar al cargar la pagina, si el dato existe o es igual a la fecha actual o es igual a 0 quiere decir que la jornada fue cerrada, por lo que llamara a un metodo que ponga la pantalla inutilizada, el metodo es el de cerrar jornada por el dia, para tener la fecha en el titulo deberia guardar la fecha de cierre, si las fechas son iguales es porque se cerro la jornada, asi que se pone como titulo, si las fechas son distintas, quiere decir que es otro dia, por lo que pueden trabajar
                    //debo guardar los datos de la fecha que se cerro la jornada en el localstorage, luego, al ingresae a la pagina vera si las fechas son iguales, si lo son quiere decir que ingreso el mismo dia, por lo que no le permitira hacer nada , aqui tenemos 2 opciones, la primera es que al momento de cerrar la jornada redireccione al operador al index, si trata de volver a entrar, lo redirecciona a otra pantalla la cual dice la jornada termino, dandole solo la opcion de volver
                    // una tercera opcion es una mezcla de ambas, al termianr la jornada te redirecciona al index, al tratar de entrar te muestra la pantalla pero no puedes interactuar con ella
                };
                //metodo que cierra la pantalla, es decir, los botones quedan deshabilitados, el titulo es jornada laboral cerrada y no se puede loguar el operador, porque indica que la jornada fue cerrada
                OperadorPantallaComponent.prototype.pantallaoperadorescerrada = function () {
                    this.btnIniciar = true;
                    this.btnPausa = true;
                    this.btnCerrar = true;
                    this.btnCerrarJornadaLaboral = true;
                    this.mensajeButtonIniciarOt = 'Iniciar Ot';
                    this.mensajeButtonPausa = 'Pausar Ot';
                    this.Titulo = 'Jornada cerrada:' + this.getFecha();
                    this.cerrarjornada = true;
                    this.mostrarmodaljornadacerradaalingresarpassword = true;
                };
                OperadorPantallaComponent.prototype.pantallaindividualoperadorcerrada = function () {
                };
                OperadorPantallaComponent.prototype.sumadeTiempos = function (tiempo1, tiempo2) {
                    var time1 = this.splitTime(tiempo1);
                    var time2 = this.splitTime(tiempo2);
                    var segundos, minutos, horas;
                    var s, m, h;
                    segundos = parseInt(time1[2]) + parseInt(time2[2]);
                    minutos = parseInt(time1[1]) + parseInt(time2[1]);
                    horas = parseInt(time1[0]) + parseInt(time2[0]);
                    if (segundos >= 60) {
                        segundos = segundos - 60;
                        minutos = minutos + 1;
                        if (segundos < 10) {
                            s = '0' + segundos;
                        }
                        else {
                            s = '' + segundos;
                        }
                    }
                    else {
                        if (segundos < 10) {
                            s = '0' + segundos;
                        }
                        else {
                            s = '' + segundos;
                        }
                    }
                    if (minutos >= 60) {
                        minutos = minutos - 60;
                        horas = horas + 1;
                        if (minutos < 10) {
                            m = '0' + minutos;
                        }
                        else {
                            m = '' + minutos;
                        }
                    }
                    else {
                        if (minutos < 10) {
                            m = '0' + minutos;
                        }
                        else {
                            m = '' + minutos;
                        }
                    }
                    if (horas < 10) {
                        h = '0' + horas;
                    }
                    else {
                        h = '' + horas;
                    }
                    console.log('suma de horas entre ' + tiempo1 + ' y ' + tiempo2);
                    console.log(h + ':' + m + ':' + s);
                    return h + ':' + m + ':' + s;
                };
                return OperadorPantallaComponent;
            }());
            OperadorPantallaComponent.ctorParameters = function () { return [
                { type: _services_operador_operador_service__WEBPACK_IMPORTED_MODULE_2__["OperadorService"] },
                { type: _services_motivopausa_motivopausa_service__WEBPACK_IMPORTED_MODULE_4__["MotivopausaService"] },
                { type: _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_6__["TrabajoService"] },
                { type: _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_7__["OtService"] },
                { type: _services_pausa_pausa_service__WEBPACK_IMPORTED_MODULE_8__["PausaService"] },
                { type: _services_tiempo_tiempo_service__WEBPACK_IMPORTED_MODULE_10__["TiempoService"] }
            ]; };
            OperadorPantallaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-operador-pantalla',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operador-pantalla.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/operador/operador-pantalla/operador-pantalla.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operador-pantalla.component.css */ "./src/app/components/operador/operador-pantalla/operador-pantalla.component.css")).default]
                })
            ], OperadorPantallaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/ot/ot-form/ot-form.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/components/ot/ot-form/ot-form.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n     min-width: 150px;\r\n     max-width: 500px;\r\n     width: 100%;\r\n   }\r\n   \r\n   .example-full-width {\r\n     width: 100%;\r\n   }\r\n   \r\n   #alerta-mensaje {\r\n    border-radius: 25px;\r\n  }\r\n   \r\n   #icono-centrado{\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdC9vdC1mb3JtL290LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGdCQUFnQjtLQUNoQixnQkFBZ0I7S0FDaEIsV0FBVztHQUNiOztHQUVBO0tBQ0UsV0FBVztHQUNiOztHQUVBO0lBQ0MsbUJBQW1CO0VBQ3JCOztHQUVGO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdC9vdC1mb3JtL290LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4gICBcclxuICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH0gXHJcblxyXG4gICAjYWxlcnRhLW1lbnNhamUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG4jaWNvbm8tY2VudHJhZG97XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/ot/ot-form/ot-form.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/ot/ot-form/ot-form.component.ts ***!
          \************************************************************/
        /*! exports provided: OtFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtFormComponent", function () { return OtFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ot/ot.service */ "./src/app/services/ot/ot.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var OtFormComponent = /** @class */ (function () {
                function OtFormComponent(otservices, router, activatedRouter) {
                    this.otservices = otservices;
                    this.router = router;
                    this.activatedRouter = activatedRouter;
                    this.ot = {
                        IdOt: 0,
                        Codigo: '',
                        Descripcion: '',
                    };
                    this.update = false;
                    this.button = false;
                    this.error = false;
                    this.mensajeError = 'Campo obligatorio!';
                    this.mensajeCodigo = this.mensajeError;
                    this.mensajeDescripcion = this.mensajeError;
                }
                OtFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var params = this.activatedRouter.snapshot.params;
                    console.log(params);
                    if (params.id) {
                        this.otservices.getOt(params.id).subscribe(function (res) {
                            console.log(res);
                            _this.ot = res;
                            _this.update = true;
                            _this.codigo = true;
                            _this.descripcion = true;
                            _this.button = true;
                        }, function (err) { return console.error(err); });
                    }
                };
                OtFormComponent.prototype.saveNewOt = function () {
                    var _this = this;
                    delete this.ot.IdOt;
                    this.error = false;
                    this.otservices.saveOt(this.ot).subscribe(function (res) {
                        console.log(res);
                        _this.habilitado = true;
                        _this.router.navigate(['/ot']);
                    }, function (err) { return console.error(err); });
                    console.log(this.ot);
                };
                OtFormComponent.prototype.updateOt = function () {
                    var _this = this;
                    console.log(this.ot);
                    this.error = false;
                    this.otservices.updateOt(this.ot.IdOt, this.ot).subscribe(function (res) {
                        console.log(res);
                        _this.router.navigate(['/ot']);
                    }, function (err) { return console.error(err); });
                };
                OtFormComponent.prototype.CodigoChange = function ($event) {
                    this.codigoLargo = event.target.value;
                    if (this.codigoLargo.length == 0) {
                        this.codigo = false;
                        this.mensajeCodigo = this.mensajeError;
                    }
                    else {
                        if (this.codigoLargo.length < 3) {
                            this.codigo = false;
                            this.mensajeCodigo = 'Minimo 3 digitos';
                        }
                        else {
                            this.codigo = true;
                        }
                    }
                    this.HabilitarButton();
                };
                OtFormComponent.prototype.DescripcionChange = function ($event) {
                    this.descripcionLargo = event.target.value;
                    if (this.descripcionLargo.length == 0) {
                        this.descripcion = false;
                        this.mensajeDescripcion = this.mensajeError;
                    }
                    else {
                        if (this.descripcionLargo.length < 3) {
                            this.descripcion = false;
                            this.mensajeDescripcion = 'Minimo 3 caracteres';
                        }
                        else {
                            this.descripcion = true;
                        }
                    }
                    this.HabilitarButton();
                };
                OtFormComponent.prototype.HabilitarButton = function () {
                    if (this.codigo == true && this.descripcion == true) {
                        this.button = true;
                    }
                    else {
                        this.button = false;
                    }
                };
                return OtFormComponent;
            }());
            OtFormComponent.ctorParameters = function () { return [
                { type: _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_2__["OtService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            OtFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ot-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ot-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-form/ot-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ot-form.component.css */ "./src/app/components/ot/ot-form/ot-form.component.css")).default]
                })
            ], OtFormComponent);
            /***/ 
        }),
        /***/ "./src/app/components/ot/ot-list/ot-list.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/components/ot/ot-list/ot-list.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n     width: 100%;\r\n}\r\n\r\n/* #btn-acciones {\r\n    border-radius: 25px; \r\n} */\r\n\r\n#input{\r\n    border-radius:25px;\r\n}\r\n\r\n#btn-filter{\r\n    padding: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n    }\r\n\r\nth{\r\n        background-color: #1DA4B7;\r\n        color: white;\r\n        text-align: center !important;\r\n    }\r\n\r\ntd{\r\n        text-align: center;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdC9vdC1saXN0L290LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFdBQVc7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7O0FBRUE7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLDZCQUE2QjtJQUNqQzs7QUFFQTtRQUNJLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3Qvb3QtbGlzdC9vdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qICNidG4tYWNjaW9uZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgXHJcbn0gKi9cclxuXHJcbiNpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxufVxyXG5cclxuI2J0bi1maWx0ZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTRCNztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/ot/ot-list/ot-list.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/ot/ot-list/ot-list.component.ts ***!
          \************************************************************/
        /*! exports provided: OtListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtListComponent", function () { return OtListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ot/ot.service */ "./src/app/services/ot/ot.service.ts");
            /* harmony import */ var _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/trabajo/trabajo.service */ "./src/app/services/trabajo/trabajo.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            //
            var OtListComponent = /** @class */ (function () {
                //
                function OtListComponent(otService, trabajoService) {
                    this.otService = otService;
                    this.trabajoService = trabajoService;
                    this.Columnas = ['Codigo', 'HorasPresupuestadas', 'HorasTrabajadas', 'Balance', 'Acciones'];
                    this.ots = [];
                    this.trabajos = [];
                    this.otTabla = [];
                    this.btnHP = true;
                    this.hPresupuestadas_ = "0";
                    //
                    this.ot = {
                        HorasPresupuestadas: ""
                    };
                    this.filtroCodigo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    //filtroDescripcion=new FormControl();
                    this.globalFilter = '';
                    this.filteredValues = {
                        Codigo: ''
                    };
                }
                OtListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //
                    this.filtroCodigo.valueChanges.subscribe(function (CodigoFilterValue) {
                        _this.filteredValues['Codigo'] = CodigoFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    //
                    this.getOts();
                    // this.getTrabajos();
                };
                //
                OtListComponent.prototype.customFilterPredicate = function () {
                    var _this = this;
                    var myFilterPredicate = function (data, filter) {
                        var globalMatch = !_this.globalFilter;
                        var searchString = JSON.parse(filter);
                        return data.Codigo.toString().trim().indexOf(searchString.Codigo) !== -1;
                    };
                    return myFilterPredicate;
                };
                //
                OtListComponent.prototype.getOts = function () {
                    var _this = this;
                    this.otService.getOts().subscribe(function (res) {
                        _this.ots = res;
                        console.log('getOts');
                        console.log(res);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.ots);
                        _this.dataSource.paginator = _this.paginator;
                    }, function (err) { console.error(err); }, function () {
                        _this.dataSource.filterPredicate = _this.customFilterPredicate();
                        console.log(_this.customFilterPredicate());
                    }
                    //
                    );
                };
                OtListComponent.prototype.closeOt = function () {
                    var _this = this;
                    this.otService.closeOt(this.id).subscribe(function (res) {
                        console.log('res');
                        console.log(res);
                        _this.getOts();
                    }, function (err) { return console.error('el error es: ' + err); });
                };
                OtListComponent.prototype.getid = function (idm) {
                    this.id = idm;
                    console.log('el id es: ' + this.id);
                    console.log(this.hPresupuestadas);
                };
                OtListComponent.prototype.LimpiarFiltros = function () {
                    this.filtroCodigo.setValue('');
                };
                OtListComponent.prototype.verificarHP = function ($event) {
                    this.btnHP = true;
                    if (parseInt(event.target.value) > 0) {
                        console.log('valido');
                        this.hPresupuestadas = parseInt(event.target.value);
                        this.btnHP = false;
                        return;
                    }
                    else {
                        console.log('vacio,letras o numero menor a 1');
                        return;
                    }
                };
                OtListComponent.prototype.agregarHP = function () {
                    var _this = this;
                    console.log('hp= ' + this.hPresupuestadas);
                    // if(this.hPresupuestadas.length==1){
                    // console.log('hp= '+this.hPresupuestadas+ 'y su largo es 1')
                    // }else{
                    //   console.log('hp= '+this.hPresupuestadas+ 'y su largo es mayor de cero')
                    // }
                    if (this.hPresupuestadas < 10) {
                        this.hPresupuestadas_ = '0' + this.hPresupuestadas + ':00:00';
                        this.ot.HorasPresupuestadas = this.hPresupuestadas_;
                    }
                    else {
                        this.hPresupuestadas_ = this.hPresupuestadas + ':00:00';
                        this.ot.HorasPresupuestadas = this.hPresupuestadas_;
                    }
                    this.otService.updateOt(this.id, this.ot).subscribe(function (res) {
                        console.log(res);
                        _this.getOts();
                    }, function (err) { console.error(err); }, function () {
                    });
                    this.hPresupuestadas_ = "";
                };
                OtListComponent.prototype.limpiarModalHP = function () {
                    console.log('limpiar input');
                    this.hPresupuestadas_ = "0";
                };
                return OtListComponent;
            }());
            OtListComponent.ctorParameters = function () { return [
                { type: _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_2__["OtService"] },
                { type: _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_3__["TrabajoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
            ], OtListComponent.prototype, "paginator", void 0);
            OtListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ot-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ot-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ot/ot-list/ot-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ot-list.component.css */ "./src/app/components/ot/ot-list/ot-list.component.css")).default]
                })
            ], OtListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pausa/pausa-list/pausa-list.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/pausa/pausa-list/pausa-list.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n     width: 100%;\r\n   }\r\n\r\n   #btn-acciones {\r\n    border-radius: 25px;\r\n}\r\n\r\n   #btn-add{\r\n  border-radius: 25px;\r\n  font-weight:900;\r\n  background-color: #229954;\r\n}\r\n\r\n   .mat-datepicker-input {\r\n  width: 85%;\r\n}\r\n\r\n   mat-icon {\r\n  position: relative;\r\n  float: right;\r\n  top: -3px;\r\n  cursor: pointer;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n   .btn-circle {\r\n  width: 45px;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  text-align: center;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n}\r\n\r\n   .btn-circle-lg {\r\n  width: 55px;\r\n  height: 55px;\r\n  line-height: 55px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n   #btn-filter{\r\npadding: 0;\r\nborder: none;\r\nbackground: none;\r\noutline: none;\r\ncolor: #616161;\r\n}\r\n\r\n   th{\r\n  background-color: #1DA4B7;\r\n  color: white;\r\n  text-align: center !important;\r\n}\r\n\r\n   td{\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXVzYS9wYXVzYS1saXN0L3BhdXNhLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFdBQVc7R0FDYjs7R0FFQTtJQUNDLG1CQUFtQjtBQUN2Qjs7R0FFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztHQUVBO0VBQ0UsVUFBVTtBQUNaOztHQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7R0FHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztHQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztHQUVBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGNBQWM7QUFDZDs7R0FFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztHQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXVzYS9wYXVzYS1saXN0L3BhdXNhLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG5cclxuICAgI2J0bi1hY2Npb25lcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4jYnRuLWFkZHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OjkwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI5OTU0O1xyXG59XHJcblxyXG4ubWF0LWRhdGVwaWNrZXItaW5wdXQge1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDogLTNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn1cclxuXHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYnRuLWNpcmNsZS1sZyB7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4jYnRuLWZpbHRlcntcclxucGFkZGluZzogMDtcclxuYm9yZGVyOiBub25lO1xyXG5iYWNrZ3JvdW5kOiBub25lO1xyXG5vdXRsaW5lOiBub25lO1xyXG5jb2xvcjogIzYxNjE2MTtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTRCNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxudGR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pausa/pausa-list/pausa-list.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/pausa/pausa-list/pausa-list.component.ts ***!
          \*********************************************************************/
        /*! exports provided: PausaListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PausaListComponent", function () { return PausaListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_pausa_pausa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pausa/pausa.service */ "./src/app/services/pausa/pausa.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            //
            var PausaListComponent = /** @class */ (function () {
                function PausaListComponent(pausaService) {
                    this.pausaService = pausaService;
                    this.Columnas = ['CodigoOt', 'Operador', 'Motivo', 'Fecha', 'HoraInicio', 'HoraFin', 'Tiempo'];
                    this.filtroCodigo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.filtroOperador = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.filtroFecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.globalFilter = '';
                    this.filteredValues = {
                        Codigo: '', Nombre: '', Fecha: ''
                    };
                }
                PausaListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.filtroCodigo.valueChanges.subscribe(function (CodigoFilterValue) {
                        _this.filteredValues['Codigo'] = CodigoFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroOperador.valueChanges.subscribe(function (OperadorFilterValue) {
                        _this.filteredValues['Nombre'] = OperadorFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroFecha.valueChanges.subscribe(function (FechaFilterValue) {
                        _this.filteredValues['Fecha'] = FechaFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.getPausas();
                };
                PausaListComponent.prototype.customFilterPredicate = function () {
                    var _this = this;
                    var myFilterPredicate = function (data, filter) {
                        var searchString = JSON.parse(filter);
                        var globalMatch = !_this.globalFilter;
                        if (_this.globalFilter) {
                            // search all text fields
                            globalMatch = data.Nombre.toString().trim().toLowerCase().indexOf(_this.globalFilter.toLowerCase()) !== -1;
                        }
                        if (!globalMatch) {
                            return;
                        }
                        var date = new Date(searchString.Fecha), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
                        var fecha = [day, mnth, date.getFullYear()].join("/");
                        if (fecha == 'aN/aN/NaN') {
                            return data.Codigo.toString().trim().indexOf(searchString.Codigo) !== -1 &&
                                data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1;
                        }
                        else {
                            return data.Codigo.toString().trim().indexOf(searchString.Codigo) !== -1 &&
                                data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1 && data.Fecha.toString().trim().toLowerCase().indexOf(fecha) !== -1;
                        }
                    };
                    return myFilterPredicate;
                };
                PausaListComponent.prototype.getPausas = function () {
                    var _this = this;
                    this.pausaService.getPausas().subscribe(function (res) {
                        _this.pausas = res;
                        console.log('getPausas');
                        console.log(res);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pausas);
                        _this.dataSource.paginator = _this.paginator;
                    }, function (err) { console.error(err); }, function () {
                        _this.dataSource.filterPredicate = _this.customFilterPredicate();
                    });
                };
                PausaListComponent.prototype.LimpiarFiltros = function () {
                    this.filtroCodigo.setValue('');
                    this.filtroFecha.setValue('');
                    this.filtroOperador.setValue('');
                };
                return PausaListComponent;
            }());
            PausaListComponent.ctorParameters = function () { return [
                { type: _services_pausa_pausa_service__WEBPACK_IMPORTED_MODULE_2__["PausaService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
            ], PausaListComponent.prototype, "paginator", void 0);
            PausaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pausa-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pausa-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pausa/pausa-list/pausa-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pausa-list.component.css */ "./src/app/components/pausa/pausa-list/pausa-list.component.css")).default]
                })
            ], PausaListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/trabajo/trabajo-list/trabajo-list.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/trabajo/trabajo-list/trabajo-list.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\r\n     width: 100%;\r\n   }\r\n\r\n   #btn-acciones {\r\n    border-radius: 25px;\r\n    font-weight:500;\r\n}\r\n\r\n   #btn-add{\r\n  border-radius: 25px;\r\n  font-weight:900;\r\n  background-color: #229954;\r\n}\r\n\r\n   .mat-datepicker-input {\r\n  width: 85%;\r\n}\r\n\r\n   mat-icon {\r\n  position: relative;\r\n  float: right;\r\n  top: -3px;\r\n  cursor: pointer;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n   .btn-circle {\r\n  width: 45px;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  text-align: center;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n}\r\n\r\n   .btn-circle-lg {\r\n  width: 55px;\r\n  height: 55px;\r\n  line-height: 55px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n   #btn-filter{\r\npadding: 0;\r\nborder: none;\r\nbackground: none;\r\noutline: none;\r\ncolor: #616161;\r\n}\r\n\r\n   .tab{ \r\n  border-bottom: 2px solid #3399FF;\r\n}\r\n\r\n   th{\r\n  background-color: #1DA4B7;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFiYWpvL3RyYWJham8tbGlzdC90cmFiYWpvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLFdBQVc7R0FDYjs7R0FFQTtJQUNDLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztHQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0dBRUE7RUFDRSxVQUFVO0FBQ1o7O0dBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztHQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0dBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0dBRUE7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsY0FBYztBQUNkOztHQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztHQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhYmFqby90cmFiYWpvLWxpc3QvdHJhYmFqby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuXHJcbiAgICNidG4tYWNjaW9uZXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuI2J0bi1hZGR7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LXdlaWdodDo5MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyOTk1NDtcclxufVxyXG5cclxuLm1hdC1kYXRlcGlja2VyLWlucHV0IHtcclxuICB3aWR0aDogODUlO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6IC0zcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcblxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJ0bi1jaXJjbGUtbGcge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuI2J0bi1maWx0ZXJ7XHJcbnBhZGRpbmc6IDA7XHJcbmJvcmRlcjogbm9uZTtcclxuYmFja2dyb3VuZDogbm9uZTtcclxub3V0bGluZTogbm9uZTtcclxuY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuXHJcbi50YWJ7IFxyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzM5OUZGO1xyXG59IFxyXG5cclxuXHJcbnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREE0Qjc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/trabajo/trabajo-list/trabajo-list.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/trabajo/trabajo-list/trabajo-list.component.ts ***!
          \***************************************************************************/
        /*! exports provided: TrabajoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoListComponent", function () { return TrabajoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/trabajo/trabajo.service */ "./src/app/services/trabajo/trabajo.service.ts");
            /* harmony import */ var _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ot/ot.service */ "./src/app/services/ot/ot.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_tiempo_tiempo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/tiempo/tiempo.service */ "./src/app/services/tiempo/tiempo.service.ts");
            //
            var TrabajoListComponent = /** @class */ (function () {
                function TrabajoListComponent(trabajoService, tiempoService, otService) {
                    this.trabajoService = trabajoService;
                    this.tiempoService = tiempoService;
                    this.otService = otService;
                    this.Columnas = ['CodigoOt', 'Operador', 'Fecha', 'HoraInicio', 'HoraFin', 'Tiempo', 'Accion'];
                    this.listTiempo = [];
                    this.filtroCodigo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.filtroOperador = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.filtroFecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                    this.globalFilter = '';
                    this.filteredValues = {
                        Codigo: '', Nombre: '', Fecha: ''
                    };
                    this.ot = {
                        IdOt: 0,
                        Codigo: ''
                    };
                    this.otModificar = {};
                    this.trabajoModificar = {};
                }
                TrabajoListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.filtroCodigo.valueChanges.subscribe(function (CodigoFilterValue) {
                        _this.filteredValues['Codigo'] = CodigoFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroOperador.valueChanges.subscribe(function (OperadorFilterValue) {
                        _this.filteredValues['Nombre'] = OperadorFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    this.filtroFecha.valueChanges.subscribe(function (FechaFilterValue) {
                        _this.filteredValues['Fecha'] = FechaFilterValue;
                        _this.dataSource.filter = JSON.stringify(_this.filteredValues);
                    });
                    console.log('buscar trabajos');
                    this.getTrabajos();
                    // this.getTiempo();
                };
                TrabajoListComponent.prototype.customFilterPredicate = function () {
                    var _this = this;
                    var myFilterPredicate = function (data, filter) {
                        var searchString = JSON.parse(filter);
                        var globalMatch = !_this.globalFilter;
                        if (_this.globalFilter) {
                            // search all text fields
                            globalMatch = data.Nombre.toString().trim().toLowerCase().indexOf(_this.globalFilter.toLowerCase()) !== -1;
                        }
                        if (!globalMatch) {
                            return;
                        }
                        var date = new Date(searchString.Fecha), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
                        var fecha = [day, mnth, date.getFullYear()].join("/");
                        if (fecha == 'aN/aN/NaN') {
                            // console.log('no tiene una fecha')
                            return data.Codigo.toString().trim().indexOf(searchString.Codigo) !== -1 &&
                                data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1;
                        }
                        else {
                            // console.log('tiene una fecha')
                            return data.Codigo.toString().trim().indexOf(searchString.Codigo) !== -1 &&
                                data.Nombre.toString().trim().toLowerCase().indexOf(searchString.Nombre.toLowerCase()) !== -1 && data.Fecha.toString().trim().toLowerCase().indexOf(fecha) !== -1;
                        }
                    };
                    return myFilterPredicate;
                };
                TrabajoListComponent.prototype.getTrabajos = function () {
                    var _this = this;
                    console.log('entro a buscar trabajos');
                    this.trabajoService.getTrabajos().subscribe(function (res) {
                        _this.trabajos = res;
                        console.log('getTrabajos');
                        console.log(res);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.trabajos);
                        _this.dataSource.paginator = _this.paginator;
                    }, function (err) { console.error(err); }, function () {
                        _this.dataSource.filterPredicate = _this.customFilterPredicate();
                    });
                };
                // getTiempo() {
                //   this.tiempoService.getTiempos().subscribe(
                //     res => {
                //       this.tiempos = res;
                //       console.log('getTiempos');
                //       console.log(res)
                //     },
                //     err => { console.error(err) }, () => {//
                //     }
                //   )
                // }
                TrabajoListComponent.prototype.getData = function (trabajo) {
                    this.codigo = trabajo.Codigo;
                    this.ot.IdOt = trabajo.IdOt;
                    this.ot.Codigo = trabajo.Codigo;
                    this.idTrabajoAmodificar = trabajo.IdTrabajo;
                };
                //asigna en el array los datos del detalle del trabajo, si no encuentra tiempos, es porque se termino en el dia, asi que se tienen que mostrar los datos del mismo dia, si encuentra datos quiere decir que tiene tiempos, asi que se tiene que llenar el list de tiempos con los tiempos parac mostrar al adminisatrdor en una tabla en un modal
                //   detalleSegunTrabajo(trabajo: Trabajo) {
                // console.log('la lista tiene'+this.listTiempo)
                // this.listTiempo=[]
                // console.log('la lista despues de tiene= '+this.listTiempo)
                //     console.log(trabajo)
                //     console.log(trabajo.IdTrabajo)
                //   console.log(this.tiempos)
                //     for (let index = 0; index < this.tiempos.length; index++) {
                //       console.log(this.tiempos[index].IdTrabajo)
                //       if (this.tiempos[index].IdTrabajo == trabajo.IdTrabajo) {
                //         console.warn('este trabajo tiene un tiempo asociado!')
                //         this.listTiempo.push(this.tiempos[index])
                //         console.log(this.tiempos[index])
                //       }
                //     }
                //     // if(this.listTiempo.length==0){
                //     //   let objTiempo=new Tiempo()
                //     //   objTiempo.Fecha=trabajo.Fecha
                //     //   objTiempo.HoraInicio=trabajo.HoraInicio
                //     //   objTiempo.HoraFin=trabajo.HoraFin
                //     //   objTiempo.TotalTiempo=trabajo.TotalTiempo
                //     //   this.listTiempo.push(objTiempo)
                //     // }
                //   }
                TrabajoListComponent.prototype.updateTrabajo = function () {
                    var _this = this;
                    this.ot.Codigo = this.codigo;
                    this.otModificar.Codigo = this.codigo;
                    this.trabajoService.verificarExisteOt(this.ot.Codigo).subscribe(function (res) {
                        console.log(res);
                        if (res != "no existe") {
                            _this.trabajoModificar.IdOt = res;
                            _this.trabajoService.updateCodigoTrabajo(_this.idTrabajoAmodificar, _this.trabajoModificar).subscribe(function (res) {
                                _this.getTrabajos();
                                console.log(res);
                            }, function (err) { console.log(err); });
                        }
                        else {
                            console.log('la ot a modificar tiene= ' + _this.otModificar);
                            _this.otService.saveOtandReturnId(_this.otModificar).subscribe(function (res) {
                                console.log('guardamos la nueva ot y su id es= ' + res);
                                _this.trabajoModificar.IdOt = res;
                                _this.trabajoService.updateCodigoTrabajo(_this.idTrabajoAmodificar, _this.trabajoModificar).subscribe(function (res) {
                                    _this.getTrabajos();
                                    console.log(res);
                                }, function (err) { console.log(err); });
                            }, function (err) { console.log(err); });
                        }
                    }, function (err) { return console.error(err); });
                };
                TrabajoListComponent.prototype.LimpiarFiltros = function () {
                    this.filtroCodigo.setValue('');
                    this.filtroFecha.setValue('');
                    this.filtroOperador.setValue('');
                };
                return TrabajoListComponent;
            }());
            TrabajoListComponent.ctorParameters = function () { return [
                { type: _services_trabajo_trabajo_service__WEBPACK_IMPORTED_MODULE_2__["TrabajoService"] },
                { type: _services_tiempo_tiempo_service__WEBPACK_IMPORTED_MODULE_7__["TiempoService"] },
                { type: _services_ot_ot_service__WEBPACK_IMPORTED_MODULE_3__["OtService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
            ], TrabajoListComponent.prototype, "paginator", void 0);
            TrabajoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trabajo-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trabajo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/trabajo/trabajo-list/trabajo-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trabajo-list.component.css */ "./src/app/components/trabajo/trabajo-list/trabajo-list.component.css")).default]
                })
            ], TrabajoListComponent);
            /***/ 
        }),
        /***/ "./src/app/idioma.ts": 
        /*!***************************!*\
          !*** ./src/app/idioma.ts ***!
          \***************************/
        /*! exports provided: MatPaginatorIntlEsp */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntlEsp", function () { return MatPaginatorIntlEsp; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var MatPaginatorIntlEsp = /** @class */ (function (_super) {
                __extends(MatPaginatorIntlEsp, _super);
                function MatPaginatorIntlEsp() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.itemsPerPageLabel = 'Items por pagina';
                    _this.nextPageLabel = 'Siguiente pagina';
                    _this.previousPageLabel = 'Pagina previa';
                    _this.lastPageLabel = 'Ultima pagina';
                    _this.firstPageLabel = 'Primera pagina';
                    _this.getRangeLabel = function (page, pageSize, length) {
                        if (length === 0 || pageSize === 0) {
                            return '0 de ' + length;
                        }
                        length = Math.max(length, 0);
                        var startIndex = page * pageSize;
                        // If the start index exceeds the list length, do not try and fix the end index to the end.
                        var endIndex = startIndex < length ?
                            Math.min(startIndex + pageSize, length) :
                            startIndex + pageSize;
                        return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
                    };
                    return _this;
                }
                return MatPaginatorIntlEsp;
            }(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));
            /***/ 
        }),
        /***/ "./src/app/models/OtTrabajador.ts": 
        /*!****************************************!*\
          !*** ./src/app/models/OtTrabajador.ts ***!
          \****************************************/
        /*! exports provided: OtTrabajador */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtTrabajador", function () { return OtTrabajador; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var OtTrabajador = /** @class */ (function () {
                function OtTrabajador() {
                }
                return OtTrabajador;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/Pausa.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/Pausa.ts ***!
          \*********************************/
        /*! exports provided: Pausa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pausa", function () { return Pausa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Pausa = /** @class */ (function () {
                function Pausa() {
                }
                return Pausa;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/Tiempo.ts": 
        /*!**********************************!*\
          !*** ./src/app/models/Tiempo.ts ***!
          \**********************************/
        /*! exports provided: Tiempo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tiempo", function () { return Tiempo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Tiempo = /** @class */ (function () {
                function Tiempo() {
                }
                return Tiempo;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/administrador/administrador.service.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/services/administrador/administrador.service.ts ***!
          \*****************************************************************/
        /*! exports provided: AdministradorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorService", function () { return AdministradorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AdministradorService = /** @class */ (function () {
                function AdministradorService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                AdministradorService.prototype.getAdministradores = function () {
                    return this.http.get(this.API_URI + "/administrador");
                };
                AdministradorService.prototype.getAdministrador = function (IdAdmin) {
                    return this.http.get(this.API_URI + "/administrador/" + IdAdmin);
                };
                AdministradorService.prototype.saveAdministrador = function (administrador) {
                    return this.http.post(this.API_URI + "/administrador", administrador);
                };
                //indicamos que el id puede ser de tipo string o de tipo number
                AdministradorService.prototype.updateAdministrador = function (IdAdmin, updatedAdministrador) {
                    return this.http.put(this.API_URI + "/administrador/" + IdAdmin, updatedAdministrador);
                };
                AdministradorService.prototype.deleteAdministrador = function (IdAdmin) {
                    return this.http.put(this.API_URI + "/administrador/delete/" + IdAdmin, '');
                };
                return AdministradorService;
            }());
            AdministradorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdministradorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdministradorService);
            /***/ 
        }),
        /***/ "./src/app/services/auth/auth.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/auth/auth.service.ts ***!
          \***********************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                AuthService.prototype.signin = function (user) {
                    return this.http.post(this.API_URI + "/administrador/signin", user);
                };
                //verificar si esta loguado o no
                AuthService.prototype.loggedIn = function () {
                    return !!localStorage.getItem('token'); //esto verifica si tiene el token el localStorage, si lo tiene return true, else false
                };
                //para eliminar el token del localStorage
                AuthService.prototype.logOut = function () {
                    localStorage.removeItem('token');
                    this.router.navigate(['/index']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/motivopausa/motivopausa.service.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/services/motivopausa/motivopausa.service.ts ***!
          \*************************************************************/
        /*! exports provided: MotivopausaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivopausaService", function () { return MotivopausaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var MotivopausaService = /** @class */ (function () {
                function MotivopausaService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api";
                }
                MotivopausaService.prototype.getMotivoPausas = function () {
                    return this.http.get(this.API_URI + "/motivoPausa");
                };
                return MotivopausaService;
            }());
            MotivopausaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            MotivopausaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MotivopausaService);
            /***/ 
        }),
        /***/ "./src/app/services/operador/operador.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/services/operador/operador.service.ts ***!
          \*******************************************************/
        /*! exports provided: OperadorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorService", function () { return OperadorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var OperadorService = /** @class */ (function () {
                function OperadorService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                OperadorService.prototype.getOperadores = function () {
                    return this.http.get(this.API_URI + "/operador");
                };
                OperadorService.prototype.getOperador = function (IdOperador) {
                    return this.http.get(this.API_URI + "/operador/" + IdOperador);
                };
                OperadorService.prototype.saveOperador = function (operador) {
                    return this.http.post(this.API_URI + "/operador", operador);
                };
                //indicamos que el id puede ser de tipo string o de tipo number
                OperadorService.prototype.updateOperador = function (IdOperador, updatedOperador) {
                    return this.http.put(this.API_URI + "/operador/" + IdOperador, updatedOperador);
                };
                OperadorService.prototype.deleteOperador = function (IdOperador) {
                    return this.http.put(this.API_URI + "/operador/delete/" + IdOperador, '');
                };
                OperadorService.prototype.getPuestosTrabajadores = function () {
                    console.log('en services');
                    return this.http.get(this.API_URI + "/operador/puestos");
                };
                return OperadorService;
            }());
            OperadorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OperadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OperadorService);
            /***/ 
        }),
        /***/ "./src/app/services/ot/ot.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/ot/ot.service.ts ***!
          \*******************************************/
        /*! exports provided: OtService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtService", function () { return OtService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var OtService = /** @class */ (function () {
                function OtService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api";
                }
                OtService.prototype.getOts = function () {
                    return this.http.get(this.API_URI + "/ot");
                };
                OtService.prototype.getOt = function (IdOt) {
                    return this.http.get(this.API_URI + "/ot/" + IdOt);
                };
                OtService.prototype.saveOt = function (ot) {
                    console.log('otservices');
                    return this.http.post(this.API_URI + "/ot", ot);
                };
                OtService.prototype.saveOtandReturnId = function (ot) {
                    console.log('saveOtandReturnId');
                    return this.http.post(this.API_URI + "/ot/createot", ot);
                };
                //indicamos que el id puede ser de tipo string o de tipo number
                OtService.prototype.updateOt = function (IdOt, updatedOt) {
                    return this.http.put(this.API_URI + "/ot/" + IdOt, updatedOt);
                };
                OtService.prototype.closeOt = function (IdOt) {
                    return this.http.put(this.API_URI + "/ot/close/" + IdOt, '');
                };
                OtService.prototype.deleteOt = function (IdOt) {
                    return this.http.put(this.API_URI + "/ot/delete/" + IdOt, '');
                };
                OtService.prototype.getOtByCodigo = function (Codigo) {
                    return this.http.get(this.API_URI + "/ot/getOtByCodigo/" + Codigo);
                };
                return OtService;
            }());
            OtService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OtService);
            /***/ 
        }),
        /***/ "./src/app/services/pausa/pausa.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/pausa/pausa.service.ts ***!
          \*************************************************/
        /*! exports provided: PausaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PausaService", function () { return PausaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PausaService = /** @class */ (function () {
                function PausaService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                PausaService.prototype.savePausa = function (pausa) {
                    return this.http.post(this.API_URI + "/pausa", pausa);
                };
                PausaService.prototype.getPausas = function () {
                    return this.http.get(this.API_URI + "/pausa");
                };
                return PausaService;
            }());
            PausaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PausaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PausaService);
            /***/ 
        }),
        /***/ "./src/app/services/puestotrabajador/puestotrabajador.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/services/puestotrabajador/puestotrabajador.service.ts ***!
          \***********************************************************************/
        /*! exports provided: PuestotrabajadorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuestotrabajadorService", function () { return PuestotrabajadorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PuestotrabajadorService = /** @class */ (function () {
                function PuestotrabajadorService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                PuestotrabajadorService.prototype.getPuestosTrabajador = function () {
                    return this.http.get(this.API_URI + "/puestoTrabajador");
                };
                return PuestotrabajadorService;
            }());
            PuestotrabajadorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PuestotrabajadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PuestotrabajadorService);
            /***/ 
        }),
        /***/ "./src/app/services/tiempo/tiempo.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/services/tiempo/tiempo.service.ts ***!
          \***************************************************/
        /*! exports provided: TiempoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiempoService", function () { return TiempoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TiempoService = /** @class */ (function () {
                function TiempoService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                TiempoService.prototype.getTiempos = function () {
                    return this.http.get(this.API_URI + "/tiempo");
                };
                TiempoService.prototype.saveTiempo = function (tiempo) {
                    console.log('en trabajo service el objeto tiempo: ' + tiempo);
                    return this.http.post(this.API_URI + "/tiempo", tiempo);
                };
                return TiempoService;
            }());
            TiempoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TiempoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TiempoService);
            /***/ 
        }),
        /***/ "./src/app/services/trabajo/trabajo.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/trabajo/trabajo.service.ts ***!
          \*****************************************************/
        /*! exports provided: TrabajoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoService", function () { return TrabajoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TrabajoService = /** @class */ (function () {
                function TrabajoService(http) {
                    this.http = http;
                    this.API_URI = "http://localhost:3000/api"; //ruta api en server
                }
                TrabajoService.prototype.getTrabajos = function () {
                    return this.http.get(this.API_URI + "/trabajo");
                };
                TrabajoService.prototype.getTrabajo = function (IdTrabajo) {
                    return this.http.get(this.API_URI + "/trabajo/" + IdTrabajo);
                };
                TrabajoService.prototype.saveTrabajo = function (trabajo) {
                    console.log('en trabajo service el objeto trabajao: ' + trabajo);
                    return this.http.post(this.API_URI + "/trabajo", trabajo);
                };
                //indicamos que el id puede ser de tipo string o de tipo number
                // updateTrabajo(IdTrabajo:string|number,codigo:string|number): Observable<any>{
                //   return this.http.put(`${this.API_URI}/trabajo/${IdTrabajo}`,codigo)
                // }
                TrabajoService.prototype.updateCodigoOt = function (IdOt, updatedOt) {
                    console.log('id ot es: ' + IdOt);
                    return this.http.put(this.API_URI + "/ot/" + IdOt, updatedOt);
                };
                TrabajoService.prototype.verificarCodigoOt = function (Codigo) {
                    console.log('metodo verificarCodigoOt de trabajoservice');
                    console.log('codigo ot es: ' + Codigo);
                    return this.http.get(this.API_URI + "/ot/searchcode/" + Codigo);
                };
                TrabajoService.prototype.verificarExisteOt = function (Codigo) {
                    console.log('metodo verificarCodigoOt de trabajoservice');
                    console.log('codigo ot es: ' + Codigo);
                    return this.http.get(this.API_URI + "/ot/verificarOt/" + Codigo);
                };
                TrabajoService.prototype.updateTotalTiempo = function (IdTrabajo, TotalTiempo) {
                    console.log('total de tiempo ot sin pausas= ' + TotalTiempo.TotalTiempo);
                    console.log('idTrabajo en service= ' + IdTrabajo);
                    return this.http.put(this.API_URI + "/trabajo/" + IdTrabajo, TotalTiempo);
                };
                TrabajoService.prototype.updateCodigoTrabajo = function (IdTrabajo, updatedTrabajo) {
                    console.log('id trabajo es: ' + IdTrabajo);
                    return this.http.put(this.API_URI + "/trabajo/update/" + IdTrabajo, updatedTrabajo);
                };
                return TrabajoService;
            }());
            TrabajoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TrabajoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TrabajoService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Felipe\Desktop\SCHH deploy\client\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** fs (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!************************!*\
          !*** crypto (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!************************!*\
          !*** stream (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map