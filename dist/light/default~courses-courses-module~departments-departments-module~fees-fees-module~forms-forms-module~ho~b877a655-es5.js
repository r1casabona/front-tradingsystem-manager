function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~courses-courses-module~departments-departments-module~fees-fees-module~forms-forms-module~ho~b877a655"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return MatSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return MatSortHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return MatSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return MatSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return matSortAnimations;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} id
     * @return {?}
     */


    var _c0 = ["mat-sort-header", ""];

    function MatSortHeader_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1._disableViewStateAnimation = true;
        })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3._disableViewStateAnimation = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
      }
    }

    var _c1 = ["*"];

    function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderNotContainedWithinSortError() {
      return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderMissingIdError() {
      return Error("MatSortHeader must be provided with a unique id.");
    }
    /**
     * \@docs-private
     * @param {?} direction
     * @return {?}
     */


    function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a directive that holds sorting state consumed by `MatSortHeader`.
     * @record
     */


    function MatSortable() {}

    if (false) {}
    /**
     * The current sort state.
     * @record
     */


    function Sort() {}

    if (false) {} // Boilerplate for applying mixins to MatSort.

    /**
     * \@docs-private
     */


    var MatSortBase = function MatSortBase() {
      _classCallCheck(this, MatSortBase);
    };
    /** @type {?} */


    var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
    /**
     * Container for MatSortables to manage the sort state and provide default sort parameters.
     */


    var MatSort =
    /*#__PURE__*/
    function (_MatSortMixinBase2) {
      _inherits(MatSort, _MatSortMixinBase2);

      var _super = _createSuper(MatSort);

      function MatSort() {
        var _this;

        _classCallCheck(this, MatSort);

        _this = _super.apply(this, arguments);
        /**
         * Collection of all registered sortables that this directive manages.
         */

        _this.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */

        _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */

        _this.start = 'asc';
        _this._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */

        _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
      }
      /**
       * The sort direction of the currently active MatSortable.
       * @return {?}
       */


      _createClass(MatSort, [{
        key: "register",

        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         * @param {?} sortable
         * @return {?}
         */
        value: function register(sortable) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }

          this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables["delete"](sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          } else {
            this.direction = this.getNextSortDirection(sortable);
          }

          this.sortChange.emit({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.

          /** @type {?} */


          var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
          /** @type {?} */

          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          /** @type {?} */

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} direction
         * @return {?}
         */
        ,
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */

      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSort;
    }(_MatSortMixinBase);

    MatSort.ɵfac = function MatSort_Factory(t) {
      return ɵMatSort_BaseFactory(t || MatSort);
    };

    MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatSort,
      selectors: [["", "matSort", ""]],
      hostAttrs: [1, "mat-sort"],
      inputs: {
        disabled: ["matSortDisabled", "disabled"],
        start: ["matSortStart", "start"],
        direction: ["matSortDirection", "direction"],
        disableClear: ["matSortDisableClear", "disableClear"],
        active: ["matSortActive", "active"]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      exportAs: ["matSort"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    MatSort.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matSortActive']
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matSortStart']
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matSortDirection']
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matSortDisableClear']
      }],
      sortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['matSortChange']
      }]
    };

    var ɵMatSort_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSort);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matSort]',
          exportAs: 'matSort',
          host: {
            'class': 'mat-sort'
          },
          inputs: ['disabled: matSortDisabled']
        }]
      }], null, {
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortStart']
        }],
        sortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['matSortChange']
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDirection']
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortDisableClear']
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matSortActive']
        }]
      });
    })();

    if (false) {}
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear.
     * @param {?} start
     * @param {?} disableClear
     * @return {?}
     */


    function getSortDirectionCycle(start, disableClear) {
      /** @type {?} */
      var sortOrder = ['asc', 'desc'];

      if (start == 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
    /**
     * Animations used by MatSort.
     * \@docs-private
     * @type {?}
     */

    var matSortAnimations = {
      /**
       * Animation that moves the sort indicator.
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction.
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction.
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that controls the arrow opacity.
       */
      arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: .54
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      })), // Transition between all states except for immediate transitions
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
      arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(-25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Below
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(25%)'
      })]))), // Hidden Below => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Above
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(-25%)'
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(-25%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(25%)'
      }))]),

      /**
       * Necessary trigger that calls animate on children animations.
       */
      allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animateChild"])(), {
        optional: true
      })])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-header-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
     * include it in a custom provider.
     */

    var MatSortHeaderIntl = function MatSortHeaderIntl() {
      _classCallCheck(this, MatSortHeaderIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      /**
       * ARIA label for the sorting button.
       */

      this.sortButtonLabel =
      /**
      * @param {?} id
      * @return {?}
      */
      function (id) {
        return "Change sorting for ".concat(id);
      };
    };

    MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
      return new (t || MatSortHeaderIntl)();
    };
    /** @nocollapse */


    MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatSortHeaderIntl_Factory() {
        return new MatSortHeaderIntl();
      },
      token: MatSortHeaderIntl,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */


    function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatSortHeaderIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: MatSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
      useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to the sort header.

    /**
     * \@docs-private
     */

    var MatSortHeaderBase = function MatSortHeaderBase() {
      _classCallCheck(this, MatSortHeaderBase);
    };
    /** @type {?} */


    var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
    /**
     * States describing the arrow's animated position (animating fromState to toState).
     * If the fromState is not defined, there will be no animated transition to the toState.
     * \@docs-private
     * @record
     */


    function ArrowViewStateTransition() {}

    if (false) {}
    /**
     * Column definition associated with a `MatSortHeader`.
     * @record
     */


    function MatSortHeaderColumnDef() {}

    if (false) {}
    /**
     * Applies sorting behavior (click to change sort) and styles to an element, including an
     * arrow to display the current sort direction.
     *
     * Must be provided with an id and contained within a parent MatSort directive.
     *
     * If used on header cells in a CdkTable, it will automatically default its id from its containing
     * column definition.
     */


    var MatSortHeader =
    /*#__PURE__*/
    function (_MatSortHeaderMixinBa) {
      _inherits(MatSortHeader, _MatSortHeaderMixinBa);

      var _super2 = _createSuper(MatSortHeader);

      /**
       * @param {?} _intl
       * @param {?} changeDetectorRef
       * @param {?} _sort
       * @param {?} _columnDef
       * @param {?=} _focusMonitor
       * @param {?=} _elementRef
       */
      function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
        var _this2;

        _classCallCheck(this, MatSortHeader);

        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _this2 = _super2.call(this);
        _this2._intl = _intl;
        _this2._sort = _sort;
        _this2._columnDef = _columnDef;
        _this2._focusMonitor = _focusMonitor;
        _this2._elementRef = _elementRef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */

        _this2._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */

        _this2._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */

        _this2._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */

        _this2.arrowPosition = 'after';

        if (!_sort) {
          throw getSortHeaderNotContainedWithinSortError();
        }

        _this2._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this2._isSorted()) {
            _this2._updateArrowDirection();
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this2._isSorted() && _this2._viewState && _this2._viewState.toState === 'active') {
            _this2._disableViewStateAnimation = false;

            _this2._setAnimationTransitionState({
              fromState: 'active',
              toState: _this2._arrowDirection
            });
          }

          changeDetectorRef.markForCheck();
        });

        if (_focusMonitor && _elementRef) {
          // We use the focus monitor because we also want to style
          // things differently based on the focus origin.
          _focusMonitor.monitor(_elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            return _this2._setIndicatorHintVisible(!!origin);
          });
        }

        return _this2;
      }
      /**
       * Overrides the disable clear value of the containing MatSort for this MatSortable.
       * @return {?}
       */


      _createClass(MatSortHeader, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
          } // Initialize the direction of the arrow and set the view state to be immediately that state.


          this._updateArrowDirection();

          this._setAnimationTransitionState({
            toState: this._isSorted() ? 'active' : this._arrowDirection
          });

          this._sort.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // @breaking-change 10.0.0 Remove null check for _focusMonitor and _elementRef.
          if (this._focusMonitor && this._elementRef) {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }

          this._sort.deregister(this);

          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         * @param {?} visible
         * @return {?}
         */

      }, {
        key: "_setIndicatorHintVisible",
        value: function _setIndicatorHintVisible(visible) {
          // No-op if the sort header is disabled - should not make the hint visible.
          if (this._isDisabled() && visible) {
            return;
          }

          this._showIndicatorHint = visible;

          if (!this._isSorted()) {
            this._updateArrowDirection();

            if (this._showIndicatorHint) {
              this._setAnimationTransitionState({
                fromState: this._arrowDirection,
                toState: 'hint'
              });
            } else {
              this._setAnimationTransitionState({
                fromState: 'hint',
                toState: this._arrowDirection
              });
            }
          }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         * @param {?} viewState
         * @return {?}
         */

      }, {
        key: "_setAnimationTransitionState",
        value: function _setAnimationTransitionState(viewState) {
          this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
          // remove the fromState so that it jumps right to the toState.

          if (this._disableViewStateAnimation) {
            this._viewState = {
              toState: viewState.toState
            };
          }
        }
        /**
         * Triggers the sort on this sort header and removes the indicator hint.
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (this._isDisabled()) {
            return;
          }

          this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
          // the direction it is facing.

          /** @type {?} */


          var viewState = this._isSorted() ? {
            fromState: this._arrowDirection,
            toState: 'active'
          } : {
            fromState: 'active',
            toState: this._arrowDirection
          };

          this._setAnimationTransitionState(viewState);

          this._showIndicatorHint = false;
        }
        /**
         * Whether this MatSortHeader is currently sorted in either ascending or descending order.
         * @return {?}
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Returns the animation state for the arrow direction (indicator and pointers).
         * @return {?}
         */

      }, {
        key: "_getArrowDirectionState",
        value: function _getArrowDirectionState() {
          return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
        }
        /**
         * Returns the arrow position state (opacity, translation).
         * @return {?}
         */

      }, {
        key: "_getArrowViewState",
        value: function _getArrowViewState() {
          /** @type {?} */
          var fromState = this._viewState.fromState;
          return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         * @return {?}
         */

      }, {
        key: "_updateArrowDirection",
        value: function _updateArrowDirection() {
          this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         * @return {?}
         */

      }, {
        key: "_getAriaSortAttribute",
        value: function _getAriaSortAttribute() {
          if (!this._isSorted()) {
            return null;
          }

          return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /**
         * Whether the arrow inside the sort header should be rendered.
         * @return {?}
         */

      }, {
        key: "_renderArrow",
        value: function _renderArrow() {
          return !this._isDisabled() || this._isSorted();
        }
      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSortHeader;
    }(_MatSortHeaderMixinBase);

    MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
      return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSortHeader,
      selectors: [["", "mat-sort-header", ""]],
      hostAttrs: [1, "mat-sort-header"],
      hostVars: 3,
      hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
            return ctx._handleClick();
          })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(true);
          })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(false);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
        }
      },
      inputs: {
        disabled: "disabled",
        arrowPosition: "arrowPosition",
        disableClear: "disableClear",
        id: ["mat-sort-header", "id"],
        start: "start"
      },
      exportAs: ["matSortHeader"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 7,
      consts: [[1, "mat-sort-header-container"], ["type", "button", 1, "mat-sort-header-button", "mat-focus-indicator"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
      template: function MatSortHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx._isDisabled() || null)("aria-label", ctx._intl.sortButtonLabel(ctx.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor;position:relative}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
      encapsulation: 2,
      data: {
        animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatSortHeader.ctorParameters = function () {
      return [{
        type: MatSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: MatSort,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['MAT_SORT_HEADER_COLUMN_DEF']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatSortHeader.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['mat-sort-header']
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[mat-sort-header]',
          exportAs: 'matSortHeader',
          template: "<div class=\"mat-sort-header-container\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\">\n  <button class=\"mat-sort-header-button mat-focus-indicator\" type=\"button\"\n          [attr.disabled]=\"_isDisabled() || null\"\n          [attr.aria-label]=\"_intl.sortButtonLabel(id)\">\n    <ng-content></ng-content>\n  </button>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
          host: {
            'class': 'mat-sort-header',
            '(click)': '_handleClick()',
            '(mouseenter)': '_setIndicatorHintVisible(true)',
            '(mouseleave)': '_setIndicatorHintVisible(false)',
            '[attr.aria-sort]': '_getAriaSortAttribute()',
            '[class.mat-sort-header-disabled]': '_isDisabled()'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled'],
          animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
          styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor;position:relative}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
        }]
      }], function () {
        return [{
          type: MatSortHeaderIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: MatSort,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['MAT_SORT_HEADER_COLUMN_DEF']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        arrowPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mat-sort-header']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSortModule = function MatSortModule() {
      _classCallCheck(this, MatSortModule);
    };

    MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatSortModule
    });
    MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatSortModule_Factory(t) {
        return new (t || MatSortModule)();
      },
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSortModule, {
        declarations: function declarations() {
          return [MatSort, MatSortHeader];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
        },
        exports: function exports() {
          return [MatSort, MatSortHeader];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
          exports: [MatSort, MatSortHeader],
          declarations: [MatSort, MatSortHeader],
          providers: [MAT_SORT_HEADER_INTL_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/sort-direction.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sort/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=sort.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
    \*************************************************************************/

  /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ToolbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
      return MatToolbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
      return MatToolbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
      return MatToolbarRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
      return throwToolbarMixedModesError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatToolbar.

    /**
     * \@docs-private
     */


    var _c0 = ["*", [["mat-toolbar-row"]]];
    var _c1 = ["*", "mat-toolbar-row"];

    var MatToolbarBase =
    /**
     * @param {?} _elementRef
     */
    function MatToolbarBase(_elementRef) {
      _classCallCheck(this, MatToolbarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

    var MatToolbarRow = function MatToolbarRow() {
      _classCallCheck(this, MatToolbarRow);
    };

    MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
      return new (t || MatToolbarRow)();
    };

    MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatToolbarRow,
      selectors: [["mat-toolbar-row"]],
      hostAttrs: [1, "mat-toolbar-row"],
      exportAs: ["matToolbarRow"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-toolbar-row',
          exportAs: 'matToolbarRow',
          host: {
            'class': 'mat-toolbar-row'
          }
        }]
      }], null, null);
    })();

    var MatToolbar =
    /*#__PURE__*/
    function (_MatToolbarMixinBase2) {
      _inherits(MatToolbar, _MatToolbarMixinBase2);

      var _super3 = _createSuper(MatToolbar);

      /**
       * @param {?} elementRef
       * @param {?} _platform
       * @param {?=} document
       */
      function MatToolbar(elementRef, _platform, document) {
        var _this3;

        _classCallCheck(this, MatToolbar);

        _this3 = _super3.call(this, elementRef);
        _this3._platform = _platform; // TODO: make the document a required param when doing breaking changes.

        _this3._document = document;
        return _this3;
      }
      /**
       * @return {?}
       */


      _createClass(MatToolbar, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || !this._platform.isBrowser) {
            return;
          }

          this._checkToolbarMixedModes();

          this._toolbarRows.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this4._checkToolbarMixedModes();
          });
        }
        /**
         * Throws an exception when developers are attempting to combine the different toolbar row modes.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkToolbarMixedModes",
        value: function _checkToolbarMixedModes() {
          var _this5 = this;

          if (!this._toolbarRows.length) {
            return;
          } // Check if there are any other DOM nodes that can display content but aren't inside of
          // a <mat-toolbar-row> element.

          /** @type {?} */


          var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !(node.classList && node.classList.contains('mat-toolbar-row'));
          }).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return node.nodeType !== (_this5._document ? _this5._document.COMMENT_NODE : 8);
          }).some(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !!(node.textContent && node.textContent.trim());
          });

          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }]);

      return MatToolbar;
    }(_MatToolbarMixinBase);

    MatToolbar.ɵfac = function MatToolbar_Factory(t) {
      return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatToolbar,
      selectors: [["mat-toolbar"]],
      contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
        }
      },
      hostAttrs: [1, "mat-toolbar"],
      hostVars: 4,
      hostBindings: function MatToolbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matToolbar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatToolbar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        }
      },
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatToolbar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatToolbar.propDecorators = {
      _toolbarRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatToolbarRow, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-toolbar',
          exportAs: 'matToolbar',
          template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
          inputs: ['color'],
          host: {
            'class': 'mat-toolbar',
            '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
            '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Throws an exception when attempting to combine the different toolbar row modes.
     * \@docs-private
     * @return {?}
     */


    function throwToolbarMixedModesError() {
      throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatToolbarModule = function MatToolbarModule() {
      _classCallCheck(this, MatToolbarModule);
    };

    MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatToolbarModule
    });
    MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatToolbarModule_Factory(t) {
        return new (t || MatToolbarModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
        declarations: function declarations() {
          return [MatToolbar, MatToolbarRow];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatToolbar, MatToolbarRow]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=toolbar.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js ***!
    \***********************************************************************************************/

  /*! exports provided: ByteFormatPipe, FileInput, FileInputComponent, FileInputConfig, FileValidator, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG, ɵa, ɵb */

  /***/
  function node_modulesNgxMaterialFileInput__ivy_ngcc__Fesm2015NgxMaterialFileInputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ByteFormatPipe", function () {
      return ByteFormatPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileInput", function () {
      return FileInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileInputComponent", function () {
      return FileInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileInputConfig", function () {
      return FileInputConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileValidator", function () {
      return FileValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialFileInputModule", function () {
      return MaterialFileInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGX_MAT_FILE_INPUT_CONFIG", function () {
      return NGX_MAT_FILE_INPUT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FileInputBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return FileInputMixinBase;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * Optional token to provide custom configuration to the module
     */


    var NGX_MAT_FILE_INPUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngx-mat-file-input.config');
    /**
     * Provide additional configuration to dynamically customize the module injection
     */

    var FileInputConfig = function FileInputConfig() {
      _classCallCheck(this, FileInputConfig);
    };
    /**
     * The files to be uploaded
     */


    var FileInput =
    /*#__PURE__*/
    function () {
      function FileInput(_files) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';

        _classCallCheck(this, FileInput);

        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = (this._files || []).map(function (f) {
          return f.name;
        }).join(delimiter);
      }

      _createClass(FileInput, [{
        key: "files",
        get: function get() {
          return this._files || [];
        }
      }, {
        key: "fileNames",
        get: function get() {
          return this._fileNames;
        }
      }]);

      return FileInput;
    }(); // Boilerplate for applying mixins to FileInput

    /** @docs-private */


    var FileInputBase = function FileInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, FileInputBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };
    /**
     * Allows to use a custom ErrorStateMatcher with the file-input component
     */


    var FileInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(FileInputBase);
    var FileInputComponent_1;

    var FileInputComponent = FileInputComponent_1 =
    /*#__PURE__*/
    function (_FileInputMixinBase) {
      _inherits(FileInputComponent, _FileInputMixinBase);

      var _super4 = _createSuper(FileInputComponent);

      /**
       * @see https://angular.io/api/forms/ControlValueAccessor
       */
      function FileInputComponent(fm, _elementRef, _renderer, _defaultErrorStateMatcher, ngControl, _parentForm, _parentFormGroup) {
        var _this6;

        _classCallCheck(this, FileInputComponent);

        _this6 = _super4.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this6.fm = fm;
        _this6._elementRef = _elementRef;
        _this6._renderer = _renderer;
        _this6._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        _this6.ngControl = ngControl;
        _this6._parentForm = _parentForm;
        _this6._parentFormGroup = _parentFormGroup;
        _this6.focused = false;
        _this6.controlType = 'file-input';
        _this6.autofilled = false;
        _this6._required = false;
        _this6.accept = null;
        _this6.id = "ngx-mat-file-input-".concat(FileInputComponent_1.nextId++);
        _this6.describedBy = '';

        _this6._onChange = function (_) {};

        _this6._onTouched = function () {};

        if (_this6.ngControl != null) {
          _this6.ngControl.valueAccessor = _assertThisInitialized(_this6);
        }

        fm.monitor(_elementRef.nativeElement, true).subscribe(function (origin) {
          _this6.focused = !!origin;

          _this6.stateChanges.next();
        });
        return _this6;
      }

      _createClass(FileInputComponent, [{
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this.describedBy = ids.join(' ');
        }
      }, {
        key: "onContainerClick",
        value: function onContainerClick(event) {
          if (event.target.tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();

            this.focused = true;
            this.open();
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj instanceof FileInput ? obj.files : null);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Remove all files from the file input component
         * @param [event] optional event that may have triggered the clear action
         */

      }, {
        key: "clear",
        value: function clear(event) {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }

          this.value = new FileInput([]);
          this._elementRef.nativeElement.querySelector('input').value = null;

          this._onChange(this.value);
        }
      }, {
        key: "change",
        value: function change(event) {
          var fileList = event.target.files;
          var fileArray = [];

          if (fileList) {
            for (var i = 0; i < fileList.length; i++) {
              fileArray.push(fileList[i]);
            }
          }

          this.value = new FileInput(fileArray);

          this._onChange(this.value);
        }
      }, {
        key: "blur",
        value: function blur() {
          this.focused = false;

          this._onTouched();
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(this.multiple);
        }
      }, {
        key: "open",
        value: function open() {
          if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();
          this.fm.stopMonitoring(this._elementRef.nativeElement);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
        },
        set: function set(fileInput) {
          if (fileInput) {
            this.writeValue(fileInput);
            this.stateChanges.next();
          }
        }
      }, {
        key: "placeholder",
        get: function get() {
          return this._placeholder;
        },
        set: function set(plh) {
          this._placeholder = plh;
          this.stateChanges.next();
        }
        /**
         * Whether the current input has files
         */

      }, {
        key: "empty",
        get: function get() {
          return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
        }
      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this.focused || !this.empty || this.valuePlaceholder !== undefined;
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        },
        set: function set(req) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(req);
          this.stateChanges.next();
        }
      }, {
        key: "isDisabled",
        get: function get() {
          return this.disabled;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._elementRef.nativeElement.disabled;
        },
        set: function set(dis) {
          this.setDisabledState(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(dis));
          this.stateChanges.next();
        }
      }, {
        key: "fileNames",
        get: function get() {
          return this.value ? this.value.fileNames : this.valuePlaceholder;
        }
      }]);

      return FileInputComponent;
    }(FileInputMixinBase);

    FileInputComponent.ɵfac = function FileInputComponent_Factory(t) {
      return new (t || FileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], 8));
    };

    FileInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileInputComponent,
      selectors: [["ngx-mat-file-input"]],
      hostVars: 6,
      hostBindings: function FileInputComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileInputComponent_change_HostBindingHandler($event) {
            return ctx.change($event);
          })("focusout", function FileInputComponent_focusout_HostBindingHandler() {
            return ctx.blur();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx.describedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-should-float", ctx.shouldLabelFloat)("file-input-disabled", ctx.isDisabled);
        }
      },
      inputs: {
        autofilled: "autofilled",
        accept: "accept",
        value: "value",
        placeholder: "placeholder",
        required: "required",
        disabled: "disabled",
        multiple: "multiple",
        valuePlaceholder: "valuePlaceholder",
        errorStateMatcher: "errorStateMatcher"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
        useExisting: FileInputComponent_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 4,
      consts: [["type", "file"], ["input", ""], [1, "filename", 3, "title"]],
      template: function FileInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx.multiple ? "" : null)("accept", ctx.accept);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.fileNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNames);
        }
      },
      styles: ["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]
    });
    FileInputComponent.nextId = 0;

    FileInputComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "autofilled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "valuePlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "accept", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "errorStateMatcher", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])()], FileInputComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-describedby')], FileInputComponent.prototype, "describedBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "placeholder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mat-form-field-should-float')], FileInputComponent.prototype, "shouldLabelFloat", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "required", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.file-input-disabled')], FileInputComponent.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], FileInputComponent.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event'])], FileInputComponent.prototype, "change", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout')], FileInputComponent.prototype, "blur", null);
    FileInputComponent = FileInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], FileInputComponent);

    var ByteFormatPipe =
    /*#__PURE__*/
    function () {
      function ByteFormatPipe(config) {
        _classCallCheck(this, ByteFormatPipe);

        this.config = config;
        this.unit = config ? config.sizeUnit : 'Byte';
      }

      _createClass(ByteFormatPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (parseInt(value, 10) >= 0) {
            value = this.formatBytes(+value, +args);
          }

          return value;
        }
      }, {
        key: "formatBytes",
        value: function formatBytes(bytes, decimals) {
          if (bytes === 0) {
            return '0 ' + this.unit;
          }

          var B = this.unit.charAt(0);
          var k = 1024;
          var dm = decimals || 2;
          var sizes = [this.unit, 'K' + B, 'M' + B, 'G' + B, 'T' + B, 'P' + B, 'E' + B, 'Z' + B, 'Y' + B];
          var i = Math.floor(Math.log(bytes) / Math.log(k));
          return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
      }]);

      return ByteFormatPipe;
    }();

    ByteFormatPipe.ɵfac = function ByteFormatPipe_Factory(t) {
      return new (t || ByteFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MAT_FILE_INPUT_CONFIG, 8));
    };

    ByteFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "byteFormat",
      type: ByteFormatPipe,
      pure: true
    });

    ByteFormatPipe.ctorParameters = function () {
      return [{
        type: FileInputConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NGX_MAT_FILE_INPUT_CONFIG]
        }]
      }];
    };

    ByteFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(NGX_MAT_FILE_INPUT_CONFIG))], ByteFormatPipe);

    var MaterialFileInputModule = function MaterialFileInputModule() {
      _classCallCheck(this, MaterialFileInputModule);
    };

    MaterialFileInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialFileInputModule
    });
    MaterialFileInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialFileInputModule_Factory(t) {
        return new (t || MaterialFileInputModule)();
      },
      providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: 'ngx-mat-file-input',
          template: "<input #input type=\"file\" [attr.multiple]=\"multiple? '' : null\" [attr.accept]=\"accept\">\n<span class=\"filename\" [title]=\"fileNames\">{{ fileNames }}</span>\n",
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"],
            useExisting: FileInputComponent_1
          }],
          styles: [":host{display:inline-block;width:100%}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        autofilled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }],
        describedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-describedby']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        shouldLabelFloat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.mat-form-field-should-float']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.file-input-disabled']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change', ['$event']]
        }],
        blur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focusout']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valuePlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByteFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'byteFormat'
        }]
      }], function () {
        return [{
          type: FileInputConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NGX_MAT_FILE_INPUT_CONFIG]
          }]
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialFileInputModule, {
        declarations: [FileInputComponent, ByteFormatPipe],
        exports: [FileInputComponent, ByteFormatPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialFileInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [FileInputComponent, ByteFormatPipe],
          providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]],
          exports: [FileInputComponent, ByteFormatPipe]
        }]
      }], null, null);
    })();

    var FileValidator;

    (function (FileValidator) {
      /**
       * Function to control content of files
       *
       * @param bytes max number of bytes allowed
       *
       * @returns
       */
      function maxContentSize(bytes) {
        return function (control) {
          var size = control && control.value ? control.value.files.map(function (f) {
            return f.size;
          }).reduce(function (acc, i) {
            return acc + i;
          }, 0) : 0;
          var condition = bytes >= size;
          return condition ? null : {
            maxContentSize: {
              actualSize: size,
              maxSize: bytes
            }
          };
        };
      }

      FileValidator.maxContentSize = maxContentSize;
    })(FileValidator || (FileValidator = {}));
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-material-file-input.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~courses-courses-module~departments-departments-module~fees-fees-module~forms-forms-module~ho~b877a655-es5.js.map