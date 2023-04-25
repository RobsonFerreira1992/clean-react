"use strict";
self["webpackHotUpdateclean_react"]("main",{

/***/ "./src/main/factories/pages/login/login-factory.tsx":
/*!**********************************************************!*\
  !*** ./src/main/factories/pages/login/login-factory.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLogin": () => (/* binding */ makeLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _presentation_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/presentation/pages */ "./src/presentation/pages/index.ts");
/* harmony import */ var _data_usecases_authentication_remote_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/usecases/authentication/remote-authentication */ "./src/data/usecases/authentication/remote-authentication.ts");
/* harmony import */ var _infra_http_axios_http_client_axios_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/infra/http/axios-http-client/axios-http-client */ "./src/infra/http/axios-http-client/axios-http-client.ts");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/validation/validators */ "./src/validation/validators/index.ts");
/* harmony import */ var _validation_validators_builder_validation_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/validation/validators/builder/validation-builder */ "./src/validation/validators/builder/validation-builder.ts");






const makeLogin = () => {
    const url = 'http://fordevs.herokuapp.com/api/login';
    const axiosHttpClient = new _infra_http_axios_http_client_axios_http_client__WEBPACK_IMPORTED_MODULE_3__.AxiosHttpClient();
    const remoteAuthentication = new _data_usecases_authentication_remote_authentication__WEBPACK_IMPORTED_MODULE_2__.RemoteAuthentication(url, axiosHttpClient);
    const validationComposite = _validation_validators__WEBPACK_IMPORTED_MODULE_4__.ValidationComposite.build([
        ..._validation_validators_builder_validation_builder__WEBPACK_IMPORTED_MODULE_5__.ValidationBuilder.field('email').required().email().build(),
        ..._validation_validators_builder_validation_builder__WEBPACK_IMPORTED_MODULE_5__.ValidationBuilder.field('password').required().min(5).build()
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_pages__WEBPACK_IMPORTED_MODULE_1__.Login, { authentication: remoteAuthentication, validation: validationComposite }));
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44e2ab0d29019e0a6187")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOGNmZDc5MjE2MmQ2YWVjOGFhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDK0M7QUFDVDtBQUNyQjtBQUN5QjtBQUNoRjtBQUNQO0FBQ0EsZ0NBQWdDLDRGQUFlO0FBQy9DLHFDQUFxQyxxR0FBb0I7QUFDekQsZ0NBQWdDLDZFQUF5QjtBQUN6RCxXQUFXLHNHQUF1QjtBQUNsQyxXQUFXLHNHQUF1QjtBQUNsQztBQUNBLFlBQVksZ0RBQW1CLENBQUMsc0RBQUssSUFBSSx1RUFBdUU7QUFDaEg7Ozs7Ozs7OztVQ2ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xlYW4tcmVhY3QvLi9zcmMvbWFpbi9mYWN0b3JpZXMvcGFnZXMvbG9naW4vbG9naW4tZmFjdG9yeS50c3giLCJ3ZWJwYWNrOi8vY2xlYW4tcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL3BhZ2VzJztcbmltcG9ydCB7IFJlbW90ZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnQC9kYXRhL3VzZWNhc2VzL2F1dGhlbnRpY2F0aW9uL3JlbW90ZS1hdXRoZW50aWNhdGlvbic7XG5pbXBvcnQgeyBBeGlvc0h0dHBDbGllbnQgfSBmcm9tICdAL2luZnJhL2h0dHAvYXhpb3MtaHR0cC1jbGllbnQvYXhpb3MtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbXBvc2l0ZSB9IGZyb20gJ0AvdmFsaWRhdGlvbi92YWxpZGF0b3JzJztcbmltcG9ydCB7IFZhbGlkYXRpb25CdWlsZGVyIH0gZnJvbSAnQC92YWxpZGF0aW9uL3ZhbGlkYXRvcnMvYnVpbGRlci92YWxpZGF0aW9uLWJ1aWxkZXInO1xuZXhwb3J0IGNvbnN0IG1ha2VMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2ZvcmRldnMuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4nO1xuICAgIGNvbnN0IGF4aW9zSHR0cENsaWVudCA9IG5ldyBBeGlvc0h0dHBDbGllbnQoKTtcbiAgICBjb25zdCByZW1vdGVBdXRoZW50aWNhdGlvbiA9IG5ldyBSZW1vdGVBdXRoZW50aWNhdGlvbih1cmwsIGF4aW9zSHR0cENsaWVudCk7XG4gICAgY29uc3QgdmFsaWRhdGlvbkNvbXBvc2l0ZSA9IFZhbGlkYXRpb25Db21wb3NpdGUuYnVpbGQoW1xuICAgICAgICAuLi5WYWxpZGF0aW9uQnVpbGRlci5maWVsZCgnZW1haWwnKS5yZXF1aXJlZCgpLmVtYWlsKCkuYnVpbGQoKSxcbiAgICAgICAgLi4uVmFsaWRhdGlvbkJ1aWxkZXIuZmllbGQoJ3Bhc3N3b3JkJykucmVxdWlyZWQoKS5taW4oNSkuYnVpbGQoKVxuICAgIF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChMb2dpbiwgeyBhdXRoZW50aWNhdGlvbjogcmVtb3RlQXV0aGVudGljYXRpb24sIHZhbGlkYXRpb246IHZhbGlkYXRpb25Db21wb3NpdGUgfSkpO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ0ZTJhYjBkMjkwMTllMGE2MTg3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9