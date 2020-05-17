function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forms-forms-module~ui-ui-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
    \******************************************************************************/

  /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, getMatAutocompleteMissingPanelError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015AutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return MatAutocomplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return MatAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return MatAutocompleteOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return MatAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return MatAutocompleteTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return getMatAutocompleteMissingPanelError;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _c0 = ["panel"];

    function MatAutocomplete_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
      }
    }

    var _c1 = ["*"];
    var _uniqueAutocompleteIdCounter = 0;
    /**
     * Event object that is emitted when an autocomplete option is selected.
     */

    var MatAutocompleteSelectedEvent =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatAutocompleteSelectedEvent(source, option) {
      _classCallCheck(this, MatAutocompleteSelectedEvent);

      this.source = source;
      this.option = option;
    };

    if (false) {}
    /**
     * Event object that is emitted when an autocomplete option is activated.
     * @record
     */


    function MatAutocompleteActivatedEvent() {}

    if (false) {} // Boilerplate for applying mixins to MatAutocomplete.

    /**
     * \@docs-private
     */


    var MatAutocompleteBase = function MatAutocompleteBase() {
      _classCallCheck(this, MatAutocompleteBase);
    };
    /** @type {?} */


    var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
    /**
     * Default `mat-autocomplete` options that can be overridden.
     * @record
     */


    function MatAutocompleteDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-autocomplete`.
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
      providedIn: 'root',
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
      return {
        autoActiveFirstOption: false
      };
    }

    var MatAutocomplete =
    /*#__PURE__*/
    function (_MatAutocompleteMixin) {
      _inherits(MatAutocomplete, _MatAutocompleteMixin);

      var _super = _createSuper(MatAutocomplete);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} defaults
       */
      function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this;

        _classCallCheck(this, MatAutocomplete);

        _this = _super.call(this);
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */

        _this.showPanel = false;
        _this._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */

        _this.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */

        _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits whenever an option is activated using the keyboard.
         */

        _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */

        _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
        _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this;
      }
      /**
       * Whether the autocomplete panel is open.
       * @return {?}
       */


      _createClass(MatAutocomplete, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this2 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
          this._activeOptionChanges = this._keyManager.change.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            _this2.optionActivated.emit({
              source: _this2,
              option: _this2.options.toArray()[index] || null
            });
          }); // Set the initial visibility state.

          this._setVisibility();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._activeOptionChanges.unsubscribe();
        }
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_setScrollTop",
        value: function _setScrollTop(scrollTop) {
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Returns the panel's scrollTop.
         * @return {?}
         */

      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Panel should hide itself when the option list is empty.
         * @return {?}
         */

      }, {
        key: "_setVisibility",
        value: function _setVisibility() {
          this.showPanel = !!this.options.length;

          this._setVisibilityClasses(this._classList);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits the `select` event.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitSelectEvent",
        value: function _emitSelectEvent(option) {
          /** @type {?} */
          var event = new MatAutocompleteSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
         * @private
         * @param {?} classList
         * @return {?}
         */

      }, {
        key: "_setVisibilityClasses",
        value: function _setVisibilityClasses(classList) {
          classList['mat-autocomplete-visible'] = this.showPanel;
          classList['mat-autocomplete-hidden'] = !this.showPanel;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen && this.showPanel;
        }
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */

      }, {
        key: "autoActiveFirstOption",
        get: function get() {
          return this._autoActiveFirstOption;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "classList",
        set: function set(value) {
          if (value && value.length) {
            this._classList = value.split(' ').reduce(
            /**
            * @param {?} classList
            * @param {?} className
            * @return {?}
            */
            function (classList, className) {
              classList[className.trim()] = true;
              return classList;
            },
            /** @type {?} */
            {});
          } else {
            this._classList = {};
          }

          this._setVisibilityClasses(this._classList);

          this._elementRef.nativeElement.className = '';
        }
      }]);

      return MatAutocomplete;
    }(_MatAutocompleteMixinBase);

    MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
      return new (t || MatAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
    };

    MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatAutocomplete,
      selectors: [["mat-autocomplete"]],
      contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatAutocomplete_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        }
      },
      hostAttrs: [1, "mat-autocomplete"],
      inputs: {
        disableRipple: "disableRipple",
        displayWith: "displayWith",
        autoActiveFirstOption: "autoActiveFirstOption",
        classList: ["class", "classList"],
        panelWidth: "panelWidth"
      },
      outputs: {
        optionSelected: "optionSelected",
        opened: "opened",
        closed: "closed",
        optionActivated: "optionActivated"
      },
      exportAs: ["matAutocomplete"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatAutocomplete
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
      template: function MatAutocomplete_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAutocomplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatAutocomplete.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          "static": true
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
          descendants: true
        }]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoActiveFirstOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      panelWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      optionSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      optionActivated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['class']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-autocomplete',
          template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          exportAs: 'matAutocomplete',
          inputs: ['disableRipple'],
          host: {
            'class': 'mat-autocomplete'
          },
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
            useExisting: MatAutocomplete
          }],
          styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-origin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */


    var MatAutocompleteOrigin =
    /**
     * @param {?} elementRef
     */
    function MatAutocompleteOrigin(elementRef) {
      _classCallCheck(this, MatAutocompleteOrigin);

      this.elementRef = elementRef;
    };

    MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
      return new (t || MatAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
    };

    MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatAutocompleteOrigin,
      selectors: [["", "matAutocompleteOrigin", ""]],
      exportAs: ["matAutocompleteOrigin"]
    });
    /** @nocollapse */

    MatAutocompleteOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[matAutocompleteOrigin]',
          exportAs: 'matAutocompleteOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The height of each autocomplete option.
     * @type {?}
     */


    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /**
     * The total height of the autocomplete panel.
     * @type {?}
     */

    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /**
     * Injection token that determines the scroll handling while the autocomplete panel is open.
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * \@docs-private
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatAutocompleteTrigger;
      }),
      multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * \@docs-private
     * @return {?}
     */

    function getMatAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
    }

    var MatAutocompleteTrigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _overlay
       * @param {?} _viewContainerRef
       * @param {?} _zone
       * @param {?} _changeDetectorRef
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _formField
       * @param {?} _document
       * @param {?=} _viewportRuler
       */
      function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this3 = this;

        _classCallCheck(this, MatAutocompleteTrigger);

        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */

        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */

        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */

        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */

        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */

        this._windowBlurHandler =
        /**
        * @return {?}
        */
        function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this3._canOpenOnNextFocus = _this3._document.activeElement !== _this3._element.nativeElement || _this3.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */


        this._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when autocomplete has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */


        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */

        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */

        this.optionSelections =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(
        /**
        * @return {?}
        */
        function () {
          if (_this3.autocomplete && _this3.autocomplete.options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this3.autocomplete.options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.onSelectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // Return a stream that we'll replace with the real one once everything is in place.


          return _this3._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this3.optionSelections;
          }));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       * @return {?}
       */


      _createClass(MatAutocompleteTrigger, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this4 = this;

          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              window.addEventListener('blur', _this4._windowBlurHandler);
            });

            this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["_getShadowRoot"])(this._element.nativeElement);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);

            if (this.panelOpen) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
          }

          this._viewportSubscription.unsubscribe();

          this._componentDestroyed = true;

          this._destroyPanel();

          this._closeKeyEventStream.complete();
        }
        /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */

      }, {
        key: "openPanel",

        /**
         * Opens the autocomplete suggestion panel.
         * @return {?}
         */
        value: function openPanel() {
          this._attachOverlay();

          this._floatLabel();
        }
        /**
         * Closes the autocomplete suggestion panel.
         * @return {?}
         */

      }, {
        key: "closePanel",
        value: function closePanel() {
          this._resetLabel();

          if (!this._overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
          }

          this.autocomplete._isOpen = this._overlayAttached = false;

          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();

            this._closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._overlayAttached) {
            /** @type {?} */
            this._overlayRef.updatePosition();
          }
        }
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */

      }, {
        key: "_getOutsideClickStream",

        /**
         * Stream of clicks outside of the autocomplete panel.
         * @private
         * @return {?}
         */
        value: function _getOutsideClickStream() {
          var _this5 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'),
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.

            /** @type {?} */
            var clickTarget =
            /** @type {?} */
            _this5._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
            /** @type {?} */

            var formField = _this5._formField ? _this5._formField._elementRef.nativeElement : null;
            return _this5._overlayAttached && clickTarget !== _this5._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this5._overlayRef && !_this5._overlayRef.overlayElement.contains(clickTarget);
          }));
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this6 = this;

          Promise.resolve(null).then(
          /**
          * @return {?}
          */
          function () {
            return _this6._setTriggerValue(value);
          });
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._element.nativeElement.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
          // in line with other browsers. By default, pressing escape on IE will cause it to revert
          // the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();

            this._resetActiveItem();

            event.preventDefault();
          } else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */

            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"];

            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"]) {
              this.autocomplete._keyManager.onKeydown(event);
            } else if (isArrowKey && this._canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
              this._scrollToOption();
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var value = target.value; // Based on `NumberValueAccessor` from forms.

          if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load,
          // focus and blur, in addition to when the user actually changed the value. To
          // filter out all of the extra events, we save the value on focus and between
          // `input` events, and we check whether it changed.
          // See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this._previousValue !== value) {
            this._previousValue = value;

            this._onChange(value);

            if (this._canOpen() && this._document.activeElement === event.target) {
              this.openPanel();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
          } else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;

            this._attachOverlay();

            this._floatLabel(true);
          }
        }
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @private
         * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
         * @return {?}
         */

      }, {
        key: "_floatLabel",
        value: function _floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this._formField._animateAndLockLabel();
            } else {
              this._formField.floatLabel = 'always';
            }

            this._manuallyFloatingLabel = true;
          }
        }
        /**
         * If the label has been manually elevated, return it to its normal state.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetLabel",
        value: function _resetLabel() {
          if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
          }
        }
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToOption",
        value: function _scrollToOption() {
          /** @type {?} */
          var index = this.autocomplete._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

          if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            this.autocomplete._setScrollTop(0);
          } else {
            /** @type {?} */
            var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

            this.autocomplete._setScrollTop(newScrollPosition);
          }
        }
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToClosingActions",
        value: function _subscribeToClosingActions() {
          var _this7 = this;

          /** @type {?} */
          var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
          /** @type {?} */


          var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this7._positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var wasOpen = _this7.panelOpen;

            _this7._resetActiveItem();

            _this7.autocomplete._setVisibility();

            if (_this7.panelOpen) {
              /** @type {?} */
              _this7._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
              // event, because we may not have emitted it when the panel was attached. This
              // can happen if the users opens the panel and there are no options, but the
              // options come in slightly later or as a result of the value changing.


              if (wasOpen !== _this7.panelOpen) {
                _this7.autocomplete.opened.emit();
              }
            }

            return _this7.panelClosingActions;
          }), // when the first closing event occurs...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
          .subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this7._setValueAndClose(event);
          });
        }
        /**
         * Destroys the autocomplete suggestion panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPanel",
        value: function _destroyPanel() {
          if (this._overlayRef) {
            this.closePanel();

            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTriggerValue",
        value: function _setTriggerValue(value) {
          /** @type {?} */
          var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and shouldn't fall back to an empty string.

          /** @type {?} */

          var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
          // through change detection.

          if (this._formField) {
            this._formField._control.value = inputValue;
          } else {
            this._element.nativeElement.value = inputValue;
          }

          this._previousValue = inputValue;
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_setValueAndClose",
        value: function _setValueAndClose(event) {
          if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);

            this._setTriggerValue(event.source.value);

            this._onChange(event.source.value);

            this._element.nativeElement.focus();

            this.autocomplete._emitSelectEvent(event.source);
          }

          this.closePanel();
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         * @private
         * @param {?} skip
         * @return {?}
         */

      }, {
        key: "_clearPreviousSelectedOption",
        value: function _clearPreviousSelectedOption(skip) {
          this.autocomplete.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this8 = this;

          if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
          }
          /** @type {?} */


          var overlayRef = this._overlayRef;

          if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.

            overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] && event.altKey) {
                _this8._resetActiveItem();

                _this8._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                // reach the input itself and cause the overlay to be reopened.


                event.stopPropagation();
                event.preventDefault();
              }
            });

            if (this._viewportRuler) {
              this._viewportSubscription = this._viewportRuler.change().subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this8.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this8._getPanelWidth()
                  });
                }
              });
            }
          } else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());

            overlayRef.updateSize({
              width: this._getPanelWidth()
            });
          }

          if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
          }
          /** @type {?} */


          var wasOpen = this.panelOpen;

          this.autocomplete._setVisibility();

          this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

          this._setStrategyPositions(strategy);

          this._positionStrategy = strategy;
          return strategy;
        }
        /**
         * Sets the positions on a position strategy based on the directive's input state.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_setStrategyPositions",
        value: function _setStrategyPositions(positionStrategy) {
          // Note that we provide horizontal fallback positions, even though by default the dropdown
          // width matches the input, because consumers can override the width. See #18854.

          /** @type {?} */
          var belowPositions = [{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }]; // The overlay edge connected to the trigger should have squared corners, while
          // the opposite end has rounded corners. We apply a CSS class to swap the
          // border-radius based on the overlay position.

          /** @type {?} */

          var panelClass = 'mat-autocomplete-panel-above';
          /** @type {?} */

          var abovePositions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            panelClass: panelClass
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            panelClass: panelClass
          }];
          /** @type {?} */

          var positions;

          if (this.position === 'above') {
            positions = abovePositions;
          } else if (this.position === 'below') {
            positions = belowPositions;
          } else {
            positions = [].concat(belowPositions, abovePositions);
          }

          positionStrategy.withPositions(positions);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getConnectedElement",
        value: function _getConnectedElement() {
          if (this.connectedTo) {
            return this.connectedTo.elementRef;
          }

          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getPanelWidth",
        value: function _getPanelWidth() {
          return this.autocomplete.panelWidth || this._getHostWidth();
        }
        /**
         * Returns the width of the input element, so the panel width can match it.
         * @private
         * @return {?}
         */

      }, {
        key: "_getHostWidth",
        value: function _getHostWidth() {
          return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetActiveItem",
        value: function _resetActiveItem() {
          this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        }
        /**
         * Determines whether the panel can be opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_canOpen",
        value: function _canOpen() {
          /** @type {?} */
          var element = this._element.nativeElement;
          return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var _a;

          return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        }
      }, {
        key: "autocompleteDisabled",
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._overlayAttached && this.autocomplete.showPanel;
        }
      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this9 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this9._overlayAttached;
          })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this9._overlayAttached;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */

      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
          }

          return null;
        }
      }]);

      return MatAutocompleteTrigger;
    }();

    MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
      return new (t || MatAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]));
    };

    MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatAutocompleteTrigger,
      selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
      hostAttrs: [1, "mat-autocomplete-trigger"],
      hostVars: 7,
      hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
            return ctx._handleFocus();
          })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
            return ctx._onTouched();
          })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
            return ctx._handleInput($event);
          })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
        }
      },
      inputs: {
        position: ["matAutocompletePosition", "position"],
        autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
        autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
        autocomplete: ["matAutocomplete", "autocomplete"],
        connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
      },
      exportAs: ["matAutocompleteTrigger"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatAutocompleteTrigger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
      }];
    };

    MatAutocompleteTrigger.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocomplete']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompletePosition']
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteConnectedTo']
      }],
      autocompleteAttribute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['autocomplete']
      }],
      autocompleteDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "input[matAutocomplete], textarea[matAutocomplete]",
          host: {
            'class': 'mat-autocomplete-trigger',
            '[attr.autocomplete]': 'autocompleteAttribute',
            '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
            '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
            '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
            '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
            '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
            '[attr.aria-haspopup]': '!autocompleteDisabled',
            // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
            // a little earlier. This avoids issues where IE delays the focusing of the input.
            '(focusin)': '_handleFocus()',
            '(blur)': '_onTouched()',
            '(input)': '_handleInput($event)',
            '(keydown)': '_handleKeydown($event)'
          },
          exportAs: 'matAutocompleteTrigger',
          providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
        }];
      }, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }],
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatAutocompleteModule = function MatAutocompleteModule() {
      _classCallCheck(this, MatAutocompleteModule);
    };

    MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatAutocompleteModule
    });
    MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatAutocompleteModule_Factory(t) {
        return new (t || MatAutocompleteModule)();
      },
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
        declarations: function declarations() {
          return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
        },
        exports: function exports() {
          return [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
          exports: [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
          providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=autocomplete.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
    \***********************************************************************/

  /*! exports provided: MatBadge, MatBadgeModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015BadgeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
      return MatBadge;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
      return MatBadgeModule;
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/badge/badge.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextId = 0; // Boilerplate for applying mixins to MatBadge.

    /**
     * \@docs-private
     */

    var MatBadgeBase = function MatBadgeBase() {
      _classCallCheck(this, MatBadgeBase);
    };
    /** @type {?} */


    var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(MatBadgeBase);
    /**
     * Directive to display a text badge.
     */


    var MatBadge =
    /*#__PURE__*/
    function (_MatBadgeMixinBase2) {
      _inherits(MatBadge, _MatBadgeMixinBase2);

      var _super2 = _createSuper(MatBadge);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _ariaDescriber
       * @param {?} _renderer
       * @param {?=} _animationMode
       */
      function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        var _this10;

        _classCallCheck(this, MatBadge);

        _this10 = _super2.call(this);
        _this10._ngZone = _ngZone;
        _this10._elementRef = _elementRef;
        _this10._ariaDescriber = _ariaDescriber;
        _this10._renderer = _renderer;
        _this10._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */

        _this10._hasContent = false;
        _this10._color = 'primary';
        _this10._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */

        _this10.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */

        _this10.size = 'medium';
        /**
         * Unique id for the badge
         */

        _this10._id = nextId++;

        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
          /** @type {?} */
          var nativeElement = _elementRef.nativeElement;

          if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
            throw Error('matBadge must be attached to an element node.');
          }
        }

        return _this10;
      }
      /**
       * The color of the badge. Can be `primary`, `accent`, or `warn`.
       * @return {?}
       */


      _createClass(MatBadge, [{
        key: "isAbove",

        /**
         * Whether the badge is above the host or not
         * @return {?}
         */
        value: function isAbove() {
          return this.position.indexOf('below') === -1;
        }
        /**
         * Whether the badge is after the host or not
         * @return {?}
         */

      }, {
        key: "isAfter",
        value: function isAfter() {
          return this.position.indexOf('before') === -1;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var contentChange = changes['content'];

          if (contentChange) {
            /** @type {?} */
            var value = contentChange.currentValue;
            this._hasContent = value != null && "".concat(value).trim().length > 0;

            this._updateTextContent();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var badgeElement = this._badgeElement;

          if (badgeElement) {
            if (this.description) {
              this._ariaDescriber.removeDescription(badgeElement, this.description);
            } // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.


            if (this._renderer.destroyNode) {
              this._renderer.destroyNode(badgeElement);
            }
          }
        }
        /**
         * Gets the element into which the badge's content is being rendered.
         * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
         * @return {?}
         */

      }, {
        key: "getBadgeElement",
        value: function getBadgeElement() {
          return this._badgeElement;
        }
        /**
         * Injects a span element into the DOM with the content.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTextContent",
        value: function _updateTextContent() {
          if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
          } else {
            this._badgeElement.textContent = this.content;
          }

          return this._badgeElement;
        }
        /**
         * Creates the badge element
         * @private
         * @return {?}
         */

      }, {
        key: "_createBadgeElement",
        value: function _createBadgeElement() {
          /** @type {?} */
          var badgeElement = this._renderer.createElement('span');
          /** @type {?} */


          var activeClass = 'mat-badge-active';
          /** @type {?} */

          var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

          this._clearExistingBadges(contentClass);

          badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
          badgeElement.classList.add(contentClass);
          badgeElement.textContent = this.content;

          if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
          }

          if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
          }

          this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


          if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                badgeElement.classList.add(activeClass);
              });
            });
          } else {
            badgeElement.classList.add(activeClass);
          }

          return badgeElement;
        }
        /**
         * Sets the aria-label property on the element
         * @private
         * @param {?} newDescription
         * @param {?} oldDescription
         * @return {?}
         */

      }, {
        key: "_updateHostAriaDescription",
        value: function _updateHostAriaDescription(newDescription, oldDescription) {
          // ensure content available before setting label

          /** @type {?} */
          var content = this._updateTextContent();

          if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
          }

          if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
          }
        }
        /**
         * Adds css theme class given the color to the component host
         * @private
         * @param {?} colorPalette
         * @return {?}
         */

      }, {
        key: "_setColor",
        value: function _setColor(colorPalette) {
          if (colorPalette !== this._color) {
            if (this._color) {
              this._elementRef.nativeElement.classList.remove("mat-badge-".concat(this._color));
            }

            if (colorPalette) {
              this._elementRef.nativeElement.classList.add("mat-badge-".concat(colorPalette));
            }
          }
        }
        /**
         * Clears any existing badges that might be left over from server-side rendering.
         * @private
         * @param {?} cssClass
         * @return {?}
         */

      }, {
        key: "_clearExistingBadges",
        value: function _clearExistingBadges(cssClass) {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

          while (childCount--) {
            /** @type {?} */
            var currentChild = element.children[childCount];

            if (currentChild.classList.contains(cssClass)) {
              element.removeChild(currentChild);
            }
          }
        }
      }, {
        key: "color",
        get: function get() {
          return this._color;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._setColor(value);

          this._color = value;
        }
        /**
         * Whether the badge should overlap its contents or not
         * @return {?}
         */

      }, {
        key: "overlap",
        get: function get() {
          return this._overlap;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
        }
        /**
         * Message used to describe the decorated element via aria-describedby
         * @return {?}
         */

      }, {
        key: "description",
        get: function get() {
          return this._description;
        }
        /**
         * @param {?} newDescription
         * @return {?}
         */
        ,
        set: function set(newDescription) {
          if (newDescription !== this._description) {
            /** @type {?} */
            var badgeElement = this._badgeElement;

            this._updateHostAriaDescription(newDescription, this._description);

            this._description = newDescription;

            if (badgeElement) {
              newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
            }
          }
        }
        /**
         * Whether the badge is hidden.
         * @return {?}
         */

      }, {
        key: "hidden",
        get: function get() {
          return this._hidden;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
        }
      }]);

      return MatBadge;
    }(_MatBadgeMixinBase);

    MatBadge.ɵfac = function MatBadge_Factory(t) {
      return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatBadge.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatBadge,
      selectors: [["", "matBadge", ""]],
      hostAttrs: [1, "mat-badge"],
      hostVars: 20,
      hostBindings: function MatBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: ["matBadgeDisabled", "disabled"],
        position: ["matBadgePosition", "position"],
        size: ["matBadgeSize", "size"],
        color: ["matBadgeColor", "color"],
        overlap: ["matBadgeOverlap", "overlap"],
        description: ["matBadgeDescription", "description"],
        hidden: ["matBadgeHidden", "hidden"],
        content: ["matBadge", "content"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatBadge.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatBadge.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgeColor']
      }],
      overlap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgeOverlap']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgePosition']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadge']
      }],
      description: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgeDescription']
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgeSize']
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matBadgeHidden']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadge, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matBadge]',
          inputs: ['disabled: matBadgeDisabled'],
          host: {
            'class': 'mat-badge',
            '[class.mat-badge-overlap]': 'overlap',
            '[class.mat-badge-above]': 'isAbove()',
            '[class.mat-badge-below]': '!isAbove()',
            '[class.mat-badge-before]': '!isAfter()',
            '[class.mat-badge-after]': 'isAfter()',
            '[class.mat-badge-small]': 'size === "small"',
            '[class.mat-badge-medium]': 'size === "medium"',
            '[class.mat-badge-large]': 'size === "large"',
            '[class.mat-badge-hidden]': 'hidden || !_hasContent',
            '[class.mat-badge-disabled]': 'disabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgePosition']
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeSize']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeColor']
        }],
        overlap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeOverlap']
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeDescription']
        }],
        hidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeHidden']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadge']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/badge/badge-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatBadgeModule = function MatBadgeModule() {
      _classCallCheck(this, MatBadgeModule);
    };

    MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatBadgeModule
    });
    MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatBadgeModule_Factory(t) {
        return new (t || MatBadgeModule)();
      },
      imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatBadgeModule, {
        declarations: function declarations() {
          return [MatBadge];
        },
        imports: function imports() {
          return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatBadge];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatBadge],
          declarations: [MatBadge]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/badge/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=badge.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
    \***********************************************************************/

  /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ChipsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
      return MAT_CHIPS_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChip", function () {
      return MatChip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
      return MatChipAvatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
      return MatChipInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
      return MatChipList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
      return MatChipListChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
      return MatChipRemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
      return MatChipSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
      return MatChipTrailingIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
      return MatChipsModule;
    });
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents an event fired on an individual `mat-chip`.
     * @record
     */


    var _c0 = ["*"];

    function MatChipEvent() {}

    if (false) {}
    /**
     * Event object emitted by MatChip when selected or deselected.
     */


    var MatChipSelectionChange =
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    function MatChipSelectionChange(source, selected) {
      var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, MatChipSelectionChange);

      this.source = source;
      this.selected = selected;
      this.isUserInput = isUserInput;
    };

    if (false) {} // Boilerplate for applying mixins to MatChip.

    /**
     * \@docs-private
     */


    var MatChipBase =
    /**
     * @param {?} _elementRef
     */
    function MatChipBase(_elementRef) {
      _classCallCheck(this, MatChipBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatChipBase)), 'primary'), -1);
    /**
     * Dummy directive to add CSS class to chip avatar.
     * \@docs-private
     */


    var MatChipAvatar = function MatChipAvatar() {
      _classCallCheck(this, MatChipAvatar);
    };

    MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
      return new (t || MatChipAvatar)();
    };

    MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipAvatar,
      selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
      hostAttrs: [1, "mat-chip-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-chip-avatar, [matChipAvatar]',
          host: {
            'class': 'mat-chip-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Dummy directive to add CSS class to chip trailing icon.
     * \@docs-private
     */


    var MatChipTrailingIcon = function MatChipTrailingIcon() {
      _classCallCheck(this, MatChipTrailingIcon);
    };

    MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
      return new (t || MatChipTrailingIcon)();
    };

    MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipTrailingIcon,
      selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
      hostAttrs: [1, "mat-chip-trailing-icon"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
          host: {
            'class': 'mat-chip-trailing-icon'
          }
        }]
      }], null, null);
    })();
    /**
     * Material design styled Chip component. Used inside the MatChipList component.
     */


    var MatChip =
    /*#__PURE__*/
    function (_MatChipMixinBase2) {
      _inherits(MatChip, _MatChipMixinBase2);

      var _super3 = _createSuper(MatChip);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?=} animationMode
       * @param {?=} _changeDetectorRef
       * @param {?=} tabIndex
       * @param {?=} _document
       */
      function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
      animationMode, _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
      _document) {
        var _this11;

        _classCallCheck(this, MatChip);

        _this11 = _super3.call(this, _elementRef);
        _this11._elementRef = _elementRef;
        _this11._ngZone = _ngZone;
        _this11._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */

        _this11._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */

        _this11.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */

        _this11._chipListMultiple = false;
        _this11._selected = false;
        _this11._selectable = true;
        _this11._removable = true;
        /**
         * Emits when the chip is focused.
         */

        _this11._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emits when the chip is blured.
         */

        _this11._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */

        _this11.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */

        _this11.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */

        _this11.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this11._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.


        _this11._chipRippleTarget = (_document || document).createElement('div');

        _this11._chipRippleTarget.classList.add('mat-chip-ripple');

        _this11._elementRef.nativeElement.appendChild(_this11._chipRippleTarget);

        _this11._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this11), _ngZone, _this11._chipRippleTarget, platform);

        _this11._chipRipple.setupTriggerEvents(_elementRef);

        _this11.rippleConfig = globalRippleOptions || {};
        _this11._animationsDisabled = animationMode === 'NoopAnimations';
        _this11.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
        return _this11;
      }
      /**
       * Whether ripples are disabled on interaction
       * \@docs-private
       * @return {?}
       */


      _createClass(MatChip, [{
        key: "_addHostClassName",

        /**
         * @return {?}
         */
        value: function _addHostClassName() {
          /** @type {?} */
          var basicChipAttrName = 'mat-basic-chip';
          /** @type {?} */

          var element =
          /** @type {?} */
          this._elementRef.nativeElement;

          if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
          } else {
            element.classList.add('mat-standard-chip');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed.emit({
            chip: this
          });

          this._chipRipple._removeTriggerEvents();
        }
        /**
         * Selects the chip.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Deselects the chip.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._dispatchSelectionChange();

            this._markForCheck();
          }
        }
        /**
         * Select this chip and emit selected event
         * @return {?}
         */

      }, {
        key: "selectViaInteraction",
        value: function selectViaInteraction() {
          if (!this._selected) {
            this._selected = true;

            this._dispatchSelectionChange(true);

            this._markForCheck();
          }
        }
        /**
         * Toggles the current selected state of this chip.
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "toggleSelected",
        value: function toggleSelected() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this._selected = !this.selected;

          this._dispatchSelectionChange(isUserInput);

          this._markForCheck();

          return this.selected;
        }
        /**
         * Allows for programmatic focusing of the chip.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();

            this._onFocus.next({
              chip: this
            });
          }

          this._hasFocus = true;
        }
        /**
         * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
         * BACKSPACE keys are pressed.
         *
         * Informs any listeners of the removal request. Does not remove the chip from the DOM.
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          if (this.removable) {
            this.removed.emit({
              chip: this
            });
          }
        }
        /**
         * Handles click events on the chip.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.disabled) {
            event.preventDefault();
          } else {
            event.stopPropagation();
          }
        }
        /**
         * Handle custom key presses.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (this.disabled) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
              // If we are removable, remove the focused chip
              this.remove(); // Always prevent so page navigation does not occur

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
              // If we are selectable, toggle the focused chip
              if (this.selectable) {
                this.toggleSelected(true);
              } // Always prevent space from scrolling the page since the list has focus


              event.preventDefault();
              break;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this12 = this;

          // When animations are enabled, Angular may end up removing the chip from the DOM a little
          // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
          // that moves focus not the next item. To work around the issue, we defer marking the chip
          // as not focused until the next time the zone stabilizes.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this12._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this12._hasFocus = false;

              _this12._onBlur.next({
                chip: _this12
              });
            });
          });
        }
        /**
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_dispatchSelectionChange",
        value: function _dispatchSelectionChange() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        }
        /**
         * Whether the chip is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (coercedValue !== this._selected) {
            this._selected = coercedValue;

            this._dispatchSelectionChange();
          }
        }
        /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._value = value;
        }
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable && this.chipListSelectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */

      }, {
        key: "removable",
        get: function get() {
          return this._removable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */

      }, {
        key: "ariaSelected",
        get: function get() {
          // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
          // it adds noise to NVDA users where "not selected" will be read out for each chip.
          return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
        }
      }]);

      return MatChip;
    }(_MatChipMixinBase);

    MatChip.ɵfac = function MatChip_Factory(t) {
      return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
    };

    MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChip,
      selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
      contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipAvatar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipTrailingIcon, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChipRemove, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
      hostVars: 14,
      hostBindings: function MatChip_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("keydown", function MatChip_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatChip_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChip_blur_HostBindingHandler() {
            return ctx._blur();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
        }
      },
      inputs: {
        color: "color",
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex",
        selected: "selected",
        value: "value",
        selectable: "selectable",
        removable: "removable"
      },
      outputs: {
        selectionChange: "selectionChange",
        destroyed: "destroyed",
        removed: "removed"
      },
      exportAs: ["matChip"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatChip.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatChip.propDecorators = {
      avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatChipAvatar]
      }],
      trailingIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatChipTrailingIcon]
      }],
      removeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatChipRemove;
        })]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      removable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      removed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
          inputs: ['color', 'disabled', 'disableRipple', 'tabIndex'],
          exportAs: 'matChip',
          host: {
            'class': 'mat-chip mat-focus-indicator',
            '[attr.tabindex]': 'disabled ? null : tabIndex',
            'role': 'option',
            '[class.mat-chip-selected]': 'selected',
            '[class.mat-chip-with-avatar]': 'avatar',
            '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
            '[class.mat-chip-disabled]': 'disabled',
            '[class._mat-animation-noopable]': '_animationsDisabled',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-selected]': 'ariaSelected',
            '(click)': '_handleClick($event)',
            '(keydown)': '_handleKeydown($event)',
            '(focus)': 'focus()',
            '(blur)': '_blur()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipAvatar]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatChipTrailingIcon]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatChipRemove;
          })]
        }]
      });
    })();

    if (false) {}
    /**
     * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
     * available at https://material.io/icons/#ic_cancel.
     *
     * Example:
     *
     *     `<mat-chip>
     *       <mat-icon matChipRemove>cancel</mat-icon>
     *     </mat-chip>`
     *
     * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
     * styles to properly center the icon within the chip.
     */


    var MatChipRemove =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _parentChip
       * @param {?=} elementRef
       */
      function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
      elementRef) {
        _classCallCheck(this, MatChipRemove);

        this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

        if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
          elementRef.nativeElement.setAttribute('type', 'button');
        }
      }
      /**
       * Calls the parent chip's public `remove()` method if applicable.
       * @param {?} event
       * @return {?}
       */


      _createClass(MatChipRemove, [{
        key: "_handleClick",
        value: function _handleClick(event) {
          /** @type {?} */
          var parentChip = this._parentChip;

          if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
          } // We need to stop event propagation because otherwise the event will bubble up to the
          // form field and cause the `onContainerClick` method to be invoked. This method would then
          // reset the focused chip that has been focused after chip removal. Usually the parent
          // the parent click listener of the `MatChip` would prevent propagation, but it can happen
          // that the chip is being removed before the event bubbles up.


          event.stopPropagation();
        }
      }]);

      return MatChipRemove;
    }();

    MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
      return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipRemove,
      selectors: [["", "matChipRemove", ""]],
      hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
      hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          });
        }
      }
    });
    /** @nocollapse */

    MatChipRemove.ctorParameters = function () {
      return [{
        type: MatChip
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matChipRemove]',
          host: {
            'class': 'mat-chip-remove mat-chip-trailing-icon',
            '(click)': '_handleClick($event)'
          }
        }]
      }], function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-default-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default options, for the chips module, that can be overridden.
     * @record
     */


    function MatChipsDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for the chips module.
     * @type {?}
     */


    var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatChipList.

    /**
     * \@docs-private
     */

    var MatChipListBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatChipListBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * Change event object that is emitted when the chip list value has changed.
     */

    var MatChipListChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatChipListChange(source, value) {
      _classCallCheck(this, MatChipListChange);

      this.source = source;
      this.value = value;
    };

    if (false) {}
    /**
     * A material design chips component (named ChipList for its similarity to the List component).
     */


    var MatChipList =
    /*#__PURE__*/
    function (_MatChipListMixinBase2) {
      _inherits(MatChipList, _MatChipListMixinBase2);

      var _super4 = _createSuper(MatChipList);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} ngControl
       */
      function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this13;

        _classCallCheck(this, MatChipList);

        _this13 = _super4.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this13._elementRef = _elementRef;
        _this13._changeDetectorRef = _changeDetectorRef;
        _this13._dir = _dir;
        _this13.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this13.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */

        _this13._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */

        _this13._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Uid of the chip list
         */

        _this13._uid = "mat-chip-list-".concat(nextUniqueId++);
        /**
         * Tab index for the chip list.
         */

        _this13._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */

        _this13._userTabIndex = null;
        /**
         * Function when touched
         */

        _this13._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Function when changed
         */


        _this13._onChange =
        /**
        * @return {?}
        */
        function () {};

        _this13._multiple = false;

        _this13._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };

        _this13._required = false;
        _this13._disabled = false;
        /**
         * Orientation of the chip list.
         */

        _this13.ariaOrientation = 'horizontal';
        _this13._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */

        _this13.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this13.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (_this13.ngControl) {
          _this13.ngControl.valueAccessor = _assertThisInitialized(_this13);
        }

        return _this13;
      }
      /**
       * The array of selected chips inside chip list.
       * @return {?}
       */


      _createClass(MatChipList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this14 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} dir
            * @return {?}
            */
            function (dir) {
              return _this14._keyManager.withHorizontalOrientation(dir);
            });
          }

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this14._allowFocusEscape();
          }); // When the list changes, re-subscribe


          this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this14.disabled) {
              // Since this happens after the content has been
              // checked, we need to defer it to the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this14._syncChipsState();
              });
            }

            _this14._resetChips(); // Reset chips selected/deselected status


            _this14._initializeSelection(); // Check to see if we need to update our tab index


            _this14._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


            _this14._updateFocusForDestroyedChips();

            _this14.stateChanges.next();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

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
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this.stateChanges.complete();

          this._dropSubscriptions();
        }
        /**
         * Associates an HTML input element with this chip list.
         * @param {?} inputElement
         * @return {?}
         */

      }, {
        key: "registerInput",
        value: function registerInput(inputElement) {
          this._chipInput = inputElement;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.chips) {
            this._setSelectionByValue(value, false);
          }
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick(event) {
          if (!this._originatesFromChip(event)) {
            this.focus();
          }
        }
        /**
         * Focuses the first non-disabled chip in this chip list, or the associated input when there
         * are no eligible chips.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          if (this.disabled) {
            return;
          } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
          // Focus on first element if there's no chipInput inside chip-list


          if (this._chipInput && this._chipInput.focused) {// do nothing
          } else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();

            this.stateChanges.next();
          } else {
            this._focusInput(options);

            this.stateChanges.next();
          }
        }
        /**
         * Attempt to focus an input if we have one.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusInput",
        value: function _focusInput(options) {
          if (this._chipInput) {
            this._chipInput.focus(options);
          }
        }
        /**
         * Pass events to the keyboard manager. Available here for tests.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target; // If they are on an empty input and hit backspace, focus the last chip

          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();

            event.preventDefault();
          } else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["HOME"]) {
              this._keyManager.setFirstItemActive();

              event.preventDefault();
            } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["END"]) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else {
              this._keyManager.onKeydown(event);
            }

            this.stateChanges.next();
          }
        }
        /**
         * Check the tab index as you should not be allowed to focus an empty list.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateTabIndex",
        value: function _updateTabIndex() {
          // If we have 0 chips, we should not allow keyboard focus
          this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
        }
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         * @protected
         * @return {?}
         */

      }, {
        key: "_updateFocusForDestroyedChips",
        value: function _updateFocusForDestroyedChips() {
          // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
          if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
              /** @type {?} */
              var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

              this._keyManager.setActiveItem(newChipIndex);
            } else {
              this.focus();
            }
          }

          this._lastDestroyedChipIndex = null;
        }
        /**
         * Utility to ensure all indexes are valid.
         *
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of chips.
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(index) {
          return index >= 0 && index < this.chips.length;
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isInputEmpty",
        value: function _isInputEmpty(element) {
          if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            var input =
            /** @type {?} */
            element;
            return !input.value;
          }

          return false;
        }
        /**
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this15 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          this._clearSelection();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.deselect();
          });

          if (Array.isArray(value)) {
            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this15._selectValue(currentValue, isUserInput);
            });

            this._sortValues();
          } else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.


            if (correspondingChip) {
              if (isUserInput) {
                this._keyManager.setActiveItem(correspondingChip);
              }
            }
          }
        }
        /**
         * Finds and selects the chip based on its value.
         * @private
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?} Chip that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this16 = this;

          var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var correspondingChip = this.chips.find(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.value != null && _this16._compareWith(chip.value, value);
          });

          if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

            this._selectionModel.select(correspondingChip);
          }

          return correspondingChip;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_initializeSelection",
        value: function _initializeSelection() {
          var _this17 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            if (_this17.ngControl || _this17._value) {
              _this17._setSelectionByValue(_this17.ngControl ? _this17.ngControl.value : _this17._value, false);

              _this17.stateChanges.next();
            }
          });
        }
        /**
         * Deselects every chip in the list.
         * @private
         * @param {?=} skip Chip that should not be deselected.
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection(skip) {
          this._selectionModel.clear();

          this.chips.forEach(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            if (chip !== skip) {
              chip.deselect();
            }
          });
          this.stateChanges.next();
        }
        /**
         * Sorts the model values, ensuring that they keep the same
         * order that they have in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this18 = this;

          if (this._multiple) {
            this._selectionModel.clear();

            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              if (chip.selected) {
                _this18._selectionModel.select(chip);
              }
            });
            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.value;
            });
          } else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.change.emit(new MatChipListChange(this, valueToEmit));
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * When blurred, mark the field as touched when focus moved outside the chip list.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          var _this19 = this;

          if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
          }

          if (!this.disabled) {
            if (this._chipInput) {
              // If there's a chip input, we should check whether the focus moved to chip input.
              // If the focus is not moved to chip input, mark the field as touched. If the focus moved
              // to chip input, do nothing.
              // Timeout is needed to wait for the focus() event trigger on chip input.
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                if (!_this19.focused) {
                  _this19._markAsTouched();
                }
              });
            } else {
              // If there's no chip input, then mark the field as touched.
              this._markAsTouched();
            }
          }
        }
        /**
         * Mark the field as touched
         * @return {?}
         */

      }, {
        key: "_markAsTouched",
        value: function _markAsTouched() {
          this._onTouched();

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the list from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         * @return {?}
         */

      }, {
        key: "_allowFocusEscape",
        value: function _allowFocusEscape() {
          var _this20 = this;

          if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this20._tabIndex = _this20._userTabIndex || 0;

              _this20._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_resetChips",
        value: function _resetChips() {
          this._dropSubscriptions();

          this._listenToChipsFocus();

          this._listenToChipsSelection();

          this._listenToChipsRemoved();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_dropSubscriptions",
        value: function _dropSubscriptions() {
          if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();

            this._chipFocusSubscription = null;
          }

          if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();

            this._chipBlurSubscription = null;
          }

          if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();

            this._chipSelectionSubscription = null;
          }

          if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();

            this._chipRemoveSubscription = null;
          }
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsSelection",
        value: function _listenToChipsSelection() {
          var _this21 = this;

          this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.source.selected ? _this21._selectionModel.select(event.source) : _this21._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

            if (!_this21.multiple) {
              _this21.chips.forEach(
              /**
              * @param {?} chip
              * @return {?}
              */
              function (chip) {
                if (!_this21._selectionModel.isSelected(chip) && chip.selected) {
                  chip.deselect();
                }
              });
            }

            if (event.isUserInput) {
              _this21._propagateChanges();
            }
          });
        }
        /**
         * Listens to user-generated selection events on each chip.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsFocus",
        value: function _listenToChipsFocus() {
          var _this22 = this;

          this._chipFocusSubscription = this.chipFocusChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chipIndex = _this22.chips.toArray().indexOf(event.chip);

            if (_this22._isValidIndex(chipIndex)) {
              _this22._keyManager.updateActiveItem(chipIndex);
            }

            _this22.stateChanges.next();
          });
          this._chipBlurSubscription = this.chipBlurChanges.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this22._blur();

            _this22.stateChanges.next();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToChipsRemoved",
        value: function _listenToChipsRemoved() {
          var _this23 = this;

          this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */

            var chipIndex = _this23.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.


            if (_this23._isValidIndex(chipIndex) && chip._hasFocus) {
              _this23._lastDestroyedChipIndex = chipIndex;
            }
          });
        }
        /**
         * Checks whether an event comes from inside a chip element.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_originatesFromChip",
        value: function _originatesFromChip(event) {
          /** @type {?} */
          var currentElement =
          /** @type {?} */
          event.target;

          while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
              return true;
            }

            currentElement = currentElement.parentElement;
          }

          return false;
        }
        /**
         * Checks whether any of the chips is focused.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasFocusedChip",
        value: function _hasFocusedChip() {
          return this.chips.some(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._hasFocus;
          });
        }
        /**
         * Syncs the list's state with the individual chips.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncChipsState",
        value: function _syncChipsState() {
          var _this24 = this;

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              chip.disabled = _this24._disabled;
              chip._chipListMultiple = _this24.multiple;
            });
          }
        }
      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */

      }, {
        key: "role",
        get: function get() {
          return this.empty ? null : 'listbox';
        }
        /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.writeValue(value);
          this._value = value;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._chipInput ? this._chipInput.id : this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return !this.empty || this.focused;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.ngControl ? !!this.ngControl.disabled : this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._syncChipsState();
        }
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */

      }, {
        key: "selectable",
        get: function get() {
          return this._selectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this25 = this;

          this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (this.chips) {
            this.chips.forEach(
            /**
            * @param {?} chip
            * @return {?}
            */
            function (chip) {
              return chip.chipListSelectable = _this25._selectable;
            });
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "tabIndex",
        set: function set(value) {
          this._userTabIndex = value;
          this._tabIndex = value;
        }
        /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */

      }, {
        key: "chipSelectionChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.selectionChange;
          })));
        }
        /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */

      }, {
        key: "chipFocusChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onFocus;
          })));
        }
        /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */

      }, {
        key: "chipBlurChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip._onBlur;
          })));
        }
        /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */

      }, {
        key: "chipRemoveChanges",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(
          /**
          * @param {?} chip
          * @return {?}
          */
          function (chip) {
            return chip.destroyed;
          })));
        }
      }]);

      return MatChipList;
    }(_MatChipListMixinBase);

    MatChipList.ɵfac = function MatChipList_Factory(t) {
      return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
    };

    MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatChipList,
      selectors: [["mat-chip-list"]],
      contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
        }
      },
      hostAttrs: [1, "mat-chip-list"],
      hostVars: 15,
      hostBindings: function MatChipList_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
            return ctx.focus();
          })("blur", function MatChipList_blur_HostBindingHandler() {
            return ctx._blur();
          })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
        }
      },
      inputs: {
        ariaOrientation: ["aria-orientation", "ariaOrientation"],
        multiple: "multiple",
        compareWith: "compareWith",
        value: "value",
        required: "required",
        placeholder: "placeholder",
        disabled: "disabled",
        selectable: "selectable",
        tabIndex: "tabIndex",
        errorStateMatcher: "errorStateMatcher"
      },
      outputs: {
        change: "change",
        valueChange: "valueChange"
      },
      exportAs: ["matChipList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
        useExisting: MatChipList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-chip-list-wrapper"]],
      template: function MatChipList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatChipList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }];
    };

    MatChipList.propDecorators = {
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-orientation']
      }],
      selectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      chips: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatChip, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-chip-list',
          template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
          exportAs: 'matChipList',
          host: {
            '[attr.tabindex]': 'disabled ? null : _tabIndex',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-required]': 'role ? required : null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-multiselectable]': 'multiple',
            '[attr.role]': 'role',
            '[class.mat-chip-list-disabled]': 'disabled',
            '[class.mat-chip-list-invalid]': 'errorState',
            '[class.mat-chip-list-required]': 'required',
            '[attr.aria-orientation]': 'ariaOrientation',
            'class': 'mat-chip-list',
            '(focus)': 'focus()',
            '(blur)': '_blur()',
            '(keydown)': '_keydown($event)',
            '[id]': '_uid'
          },
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
            useExisting: MatChipList
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      }, {
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chip-input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents an input event on a `matChipInput`.
     * @record
     */


    function MatChipInputEvent() {}

    if (false) {} // Increasing integer for generating unique ids.

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
     * May be placed inside or outside of an `<mat-chip-list>`.
     */

    var MatChipInput =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _defaultOptions
       */
      function MatChipInput(_elementRef, _defaultOptions) {
        _classCallCheck(this, MatChipInput);

        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */

        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */

        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */

        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */

        this.placeholder = '';
        /**
         * Unique id for the input.
         */

        this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
        this._disabled = false;
        this._inputElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Register input for chip list
       * @param {?} value
       * @return {?}
       */


      _createClass(MatChipInput, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._chipList.stateChanges.next();
        }
        /**
         * Utility method to make host definition/tests more clear.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          // Allow the user's focus to escape when they're tabbing forward. Note that we don't
          // want to do this when going backwards, because focus should go back to the first chip.
          if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
          }

          this._emitChipEnd(event);
        }
        /**
         * Checks to see if the blur should emit the (chipEnd) event.
         * @return {?}
         */

      }, {
        key: "_blur",
        value: function _blur() {
          if (this.addOnBlur) {
            this._emitChipEnd();
          }

          this.focused = false; // Blur the chip list if it is not focused

          if (!this._chipList.focused) {
            this._chipList._blur();
          }

          this._chipList.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_focus",
        value: function _focus() {
          this.focused = true;

          this._chipList.stateChanges.next();
        }
        /**
         * Checks to see if the (chipEnd) event needs to be emitted.
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "_emitChipEnd",
        value: function _emitChipEnd(event) {
          if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
          }

          if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({
              input: this._inputElement,
              value: this._inputElement.value
            });

            if (event) {
              event.preventDefault();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {
          // Let chip list know whenever the value changes.
          this._chipList.stateChanges.next();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._inputElement.focus(options);
        }
        /**
         * Checks whether a keycode is one of the configured separators.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_isSeparatorKey",
        value: function _isSeparatorKey(event) {
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event)) {
            return false;
          }
          /** @type {?} */


          var separators = this.separatorKeyCodes;
          /** @type {?} */

          var keyCode = event.keyCode;
          return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
        }
      }, {
        key: "chipList",
        set: function set(value) {
          if (value) {
            this._chipList = value;

            this._chipList.registerInput(this);
          }
        }
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */

      }, {
        key: "addOnBlur",
        get: function get() {
          return this._addOnBlur;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this._chipList && this._chipList.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the input is empty.
         * @return {?}
         */

      }, {
        key: "empty",
        get: function get() {
          return !this._inputElement.value;
        }
      }]);

      return MatChipInput;
    }();

    MatChipInput.ɵfac = function MatChipInput_Factory(t) {
      return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
    };

    MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatChipInput,
      selectors: [["input", "matChipInputFor", ""]],
      hostAttrs: [1, "mat-chip-input", "mat-input-element"],
      hostVars: 5,
      hostBindings: function MatChipInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          })("blur", function MatChipInput_blur_HostBindingHandler() {
            return ctx._blur();
          })("focus", function MatChipInput_focus_HostBindingHandler() {
            return ctx._focus();
          })("input", function MatChipInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
        }
      },
      inputs: {
        separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
        placeholder: "placeholder",
        id: "id",
        chipList: ["matChipInputFor", "chipList"],
        addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
        disabled: "disabled"
      },
      outputs: {
        chipEnd: "matChipInputTokenEnd"
      },
      exportAs: ["matChipInput", "matChipInputFor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatChipInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_CHIPS_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatChipInput.propDecorators = {
      chipList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputFor']
      }],
      addOnBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputAddOnBlur']
      }],
      separatorKeyCodes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matChipInputSeparatorKeyCodes']
      }],
      chipEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matChipInputTokenEnd']
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'input[matChipInputFor]',
          exportAs: 'matChipInput, matChipInputFor',
          host: {
            'class': 'mat-chip-input mat-input-element',
            '(keydown)': '_keydown($event)',
            '(blur)': '_blur()',
            '(focus)': '_focus()',
            '(input)': '_onInput()',
            '[id]': 'id',
            '[attr.disabled]': 'disabled || null',
            '[attr.placeholder]': 'placeholder || null',
            '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
            '[attr.aria-required]': '_chipList && _chipList.required || null'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/chips-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
    var ɵ0 = {
      separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
    };

    var MatChipsModule = function MatChipsModule() {
      _classCallCheck(this, MatChipsModule);
    };

    MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatChipsModule
    });
    MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatChipsModule_Factory(t) {
        return new (t || MatChipsModule)();
      },
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue:
        /** @type {?} */
        ɵ0
      }]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
        declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
        exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: CHIP_DECLARATIONS,
          declarations: CHIP_DECLARATIONS,
          providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue:
            /** @type {?} */
            ɵ0
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/chips/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=chips.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
    \**********************************************************************************/

  /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return MatProgressSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return MatProgressSpinnerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return MatSpinner;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base reference size of the spinner.
     * \@docs-private
     * @type {?}
     */


    function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius);
      }
    }

    function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._circleRadius);
      }
    }

    function MatSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius);
      }
    }

    function MatSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._circleRadius);
      }
    }

    var BASE_SIZE = 100;
    /**
     * Base reference stroke width of the spinner.
     * \@docs-private
     * @type {?}
     */

    var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

    /**
     * \@docs-private
     */

    var MatProgressSpinnerBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressSpinnerBase(_elementRef) {
      _classCallCheck(this, MatProgressSpinnerBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
    /**
     * Default `mat-progress-spinner` options that can be overridden.
     * @record
     */


    function MatProgressSpinnerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-progress-spinner`.
     * @type {?}
     */


    var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
      providedIn: 'root',
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
      return {
        diameter: BASE_SIZE
      };
    } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
    // for example because the animation duration is 4 seconds, .1% accounts to 4ms
    // which are enough to see the flicker described in
    // https://github.com/angular/components/issues/8984

    /** @type {?} */


    var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
    /**
     * `<mat-progress-spinner>` component.
     */

    var MatProgressSpinner =
    /*#__PURE__*/
    function (_MatProgressSpinnerMi) {
      _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

      var _super5 = _createSuper(MatProgressSpinner);

      /**
       * @param {?} _elementRef
       * @param {?} platform
       * @param {?} _document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
        var _this26;

        _classCallCheck(this, MatProgressSpinner);

        _this26 = _super5.call(this, _elementRef);
        _this26._elementRef = _elementRef;
        _this26._document = _document;
        _this26._diameter = BASE_SIZE;
        _this26._value = 0;
        _this26._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */

        _this26.mode = 'determinate';
        /** @type {?} */

        var trackedDiameters = MatProgressSpinner._diameters; // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.

        if (!trackedDiameters.has(_document.head)) {
          trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }

        _this26._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        _this26._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

        if (defaults) {
          if (defaults.diameter) {
            _this26.diameter = defaults.diameter;
          }

          if (defaults.strokeWidth) {
            _this26.strokeWidth = defaults.strokeWidth;
          }
        }

        return _this26;
      }
      /**
       * The diameter of the progress spinner (will set width and height of svg).
       * @return {?}
       */


      _createClass(MatProgressSpinner, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
          // Angular seems to create the element outside the shadow root and then moves it inside, if the
          // node is inside an `ngIf` and a ShadowDom-encapsulated component.

          this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

          this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
          // reliably so we fall back to a non-spec animation.

          /** @type {?} */


          var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
          element.classList.add(animationClass);
        }
        /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */

      }, {
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleRoot = this._styleRoot;
          /** @type {?} */

          var currentDiameter = this._diameter;
          /** @type {?} */

          var diameters = MatProgressSpinner._diameters;
          /** @type {?} */

          var diametersForElement = diameters.get(styleRoot);

          if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            var styleTag = this._document.createElement('style');

            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);

            if (!diametersForElement) {
              diametersForElement = new Set();
              diameters.set(styleRoot, diametersForElement);
            }

            diametersForElement.add(currentDiameter);
          }
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this._strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this._strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

          if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
        }
      }, {
        key: "_circleRadius",
        get: function get() {
          return (this.diameter - BASE_STROKE_WIDTH) / 2;
        }
        /**
         * The view box of the spinner's svg element.
         * @return {?}
         */

      }, {
        key: "_viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this._circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this._circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
          } // In fallback mode set the circle to 80% and rotate it with CSS.


          if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "_circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
      }]);

      return MatProgressSpinner;
    }(_MatProgressSpinnerMixinBase);

    MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
      return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressSpinner,
      selectors: [["mat-progress-spinner"]],
      hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
      hostVars: 10,
      hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        diameter: "diameter",
        strokeWidth: "strokeWidth",
        value: "value"
      },
      exportAs: ["matProgressSpinner"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatProgressSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */

    MatProgressSpinner._diameters = new WeakMap();
    /** @nocollapse */

    MatProgressSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatProgressSpinner.propDecorators = {
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-progress-spinner',
          exportAs: 'matProgressSpinner',
          host: {
            'role': 'progressbar',
            'class': 'mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter',
            '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
            '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
            '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
            '[attr.mode]': 'mode'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-spinner>` component.
     *
     * This is a component definition to be used as a convenience reference to create an
     * indeterminate `<mat-progress-spinner>` instance.
     */


    var MatSpinner =
    /*#__PURE__*/
    function (_MatProgressSpinner) {
      _inherits(MatSpinner, _MatProgressSpinner);

      var _super6 = _createSuper(MatSpinner);

      /**
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatSpinner(elementRef, platform, document, animationMode, defaults) {
        var _this27;

        _classCallCheck(this, MatSpinner);

        _this27 = _super6.call(this, elementRef, platform, document, animationMode, defaults);
        _this27.mode = 'indeterminate';
        return _this27;
      }

      return MatSpinner;
    }(MatProgressSpinner);

    MatSpinner.ɵfac = function MatSpinner_Factory(t) {
      return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSpinner,
      selectors: [["mat-spinner"]],
      hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
      hostVars: 6,
      hostBindings: function MatSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-spinner',
          host: {
            'role': 'progressbar',
            'mode': 'indeterminate',
            'class': 'mat-spinner mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
      _classCallCheck(this, MatProgressSpinnerModule);
    };

    MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressSpinnerModule
    });
    MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatProgressSpinnerModule_Factory(t) {
        return new (t || MatProgressSpinnerModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
        declarations: function declarations() {
          return [MatProgressSpinner, MatSpinner];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatProgressSpinner, MatSpinner]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-spinner.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
    \************************************************************************/

  /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return MAT_SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return MatSlider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return MatSliderChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return MatSliderModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["sliderWrapper"];
    var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
     * the default separation we chose.
     * @type {?}
     */

    var MIN_AUTO_TICK_SEPARATION = 30;
    /**
     * The thumb gap size for a disabled slider.
     * @type {?}
     */

    var DISABLED_THUMB_GAP = 7;
    /**
     * The thumb gap size for a non-active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
    /**
     * The thumb gap size for an active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
    /**
     * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)] and [formControl].
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlider;
      }),
      multi: true
    };
    /**
     * A simple change event emitted by the MatSlider component.
     */

    var MatSliderChange = function MatSliderChange() {
      _classCallCheck(this, MatSliderChange);
    };

    if (false) {} // Boilerplate for applying mixins to MatSlider.

    /**
     * \@docs-private
     */


    var MatSliderBase =
    /**
     * @param {?} _elementRef
     */
    function MatSliderBase(_elementRef) {
      _classCallCheck(this, MatSliderBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
    /**
     * Allows users to select from a range of values by moving the slider thumb. It is similar in
     * behavior to the native `<input type="range">` element.
     */


    var MatSlider =
    /*#__PURE__*/
    function (_MatSliderMixinBase2) {
      _inherits(MatSlider, _MatSliderMixinBase2);

      var _super7 = _createSuper(MatSlider);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} tabIndex
       * @param {?=} _animationMode
       * @param {?=} _ngZone
       * @param {?=} document
       */
      function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this28;

        _classCallCheck(this, MatSlider);

        _this28 = _super7.call(this, elementRef);
        _this28._focusMonitor = _focusMonitor;
        _this28._changeDetectorRef = _changeDetectorRef;
        _this28._dir = _dir;
        _this28._animationMode = _animationMode;
        _this28._ngZone = _ngZone;
        _this28._invert = false;
        _this28._max = 100;
        _this28._min = 0;
        _this28._step = 1;
        _this28._thumbLabel = false;
        _this28._tickInterval = 0;
        _this28._value = null;
        _this28._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */

        _this28.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */

        _this28.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this28.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */

        _this28.onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this28._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */

        _this28._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */

        _this28._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */

        _this28._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */

        _this28._sliderDimensions = null;

        _this28._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Subscription to the Directionality change EventEmitter.
         */


        _this28._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * Called when the user has put their pointer down on the slider.
         */

        _this28._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Don't do anything if the slider is disabled or the
          // user is using anything other than the main mouse button.
          if (_this28.disabled || _this28._isSliding || !isTouchEvent(event) && event.button !== 0) {
            return;
          }

          _this28._runInsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var oldValue = _this28.value;
            /** @type {?} */

            var pointerPosition = getPointerPositionOnPage(event);
            _this28._isSliding = true;
            _this28._lastPointerEvent = event;
            event.preventDefault();

            _this28._focusHostElement();

            _this28._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


            _this28._bindGlobalEvents(event);

            _this28._focusHostElement();

            _this28._updateValueFromPosition(pointerPosition);

            _this28._valueOnSlideStart = _this28.value;
            _this28._pointerPositionOnStart = pointerPosition; // Emit a change and input event if the value changed.

            if (oldValue != _this28.value) {
              _this28._emitInputEvent();

              _this28._emitChangeEvent();
            }
          });
        };
        /**
         * Called when the user has moved their pointer after
         * starting to drag. Bound on the document level.
         */


        _this28._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this28._isSliding) {
            // Prevent the slide from selecting anything else.
            event.preventDefault();
            /** @type {?} */

            var oldValue = _this28.value;
            _this28._lastPointerEvent = event;

            _this28._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


            if (oldValue != _this28.value) {
              _this28._emitInputEvent();
            }
          }
        };
        /**
         * Called when the user has lifted their pointer. Bound on the document level.
         */


        _this28._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this28._isSliding) {
            /** @type {?} */
            var pointerPositionOnStart = _this28._pointerPositionOnStart;
            /** @type {?} */

            var currentPointerPosition = getPointerPositionOnPage(event);
            event.preventDefault();

            _this28._removeGlobalEvents();

            _this28._valueOnSlideStart = _this28._pointerPositionOnStart = _this28._lastPointerEvent = null;
            _this28._isSliding = false;

            if (_this28._valueOnSlideStart != _this28.value && !_this28.disabled && pointerPositionOnStart && (pointerPositionOnStart.x !== currentPointerPosition.x || pointerPositionOnStart.y !== currentPointerPosition.y)) {
              _this28._emitChangeEvent();
            }
          }
        };
        /**
         * Called when the window has lost focus.
         */


        _this28._windowBlur =
        /**
        * @return {?}
        */
        function () {
          // If the window is blurred while dragging we need to stop dragging because the
          // browser won't dispatch the `mouseup` and `touchend` events anymore.
          if (_this28._lastPointerEvent) {
            _this28._pointerUp(_this28._lastPointerEvent);
          }
        };

        _this28._document = document;
        _this28.tabIndex = parseInt(tabIndex) || 0;

        _this28._runOutsizeZone(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var element = elementRef.nativeElement;
          element.addEventListener('mousedown', _this28._pointerDown, activeEventOptions);
          element.addEventListener('touchstart', _this28._pointerDown, activeEventOptions);
        });

        return _this28;
      }
      /**
       * Whether the slider is inverted.
       * @return {?}
       */


      _createClass(MatSlider, [{
        key: "focus",

        /**
         * set focus to the host element
         * @param {?=} options
         * @return {?}
         */
        value: function focus(options) {
          this._focusHostElement(options);
        }
        /**
         * blur the host element
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */

      }, {
        key: "_shouldInvertMouseCoords",

        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @return {?}
         */
        value: function _shouldInvertMouseCoords() {
          return this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            _this29._isActive = !!origin && origin !== 'keyboard';

            _this29._changeDetectorRef.detectChanges();
          });

          if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this29._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
          element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
          this._lastPointerEvent = null;

          this._removeGlobalEvents();

          this._focusMonitor.stopMonitoring(this._elementRef);

          this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onMouseenter",
        value: function _onMouseenter() {
          if (this.disabled) {
            return;
          } // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.


          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.
          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
              this._increment(10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
              this._increment(-10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
              this.value = this.max;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
              this.value = this.min;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
              // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
              // inverted slider the thumb moves in that direction. However for a blind user, nothing
              // about the slider indicates that it is inverted. They will expect left to be decrement,
              // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
              // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
              // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
              // sighted users, therefore we do not swap the meaning.
              this._increment(this._getDirection() == 'rtl' ? 1 : -1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
              this._increment(1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
              // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
              this._increment(this._getDirection() == 'rtl' ? -1 : 1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
              this._increment(-1);

              break;

            default:
              // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
              // it.
              return;
          }

          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }

          this._isSliding = true;
          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onKeyup",
        value: function _onKeyup() {
          this._isSliding = false;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var _a;

          return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        }
        /**
         * Binds our global move and end events. They're bound at the document level and only while
         * dragging so that the user doesn't have to keep their pointer exactly over the slider
         * as they're swiping across the screen.
         * @private
         * @param {?} triggerEvent
         * @return {?}
         */

      }, {
        key: "_bindGlobalEvents",
        value: function _bindGlobalEvents(triggerEvent) {
          // Note that we bind the events to the `document`, because it allows us to capture
          // drag cancel events where the user's pointer is outside the browser window.

          /** @type {?} */
          var document = this._document;

          if (typeof document !== 'undefined' && document) {
            /** @type {?} */
            var isTouch = isTouchEvent(triggerEvent);
            /** @type {?} */

            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }
          }
          /** @type {?} */


          var window = this._getWindow();

          if (typeof window !== 'undefined' && window) {
            window.addEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Removes any global event listeners that we may have added.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalEvents",
        value: function _removeGlobalEvents() {
          /** @type {?} */
          var document = this._document;

          if (typeof document !== 'undefined' && document) {
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
          }
          /** @type {?} */


          var window = this._getWindow();

          if (typeof window !== 'undefined' && window) {
            window.removeEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */

      }, {
        key: "_increment",
        value: function _increment(numSteps) {
          this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_updateValueFromPosition",
        value: function _updateValueFromPosition(pos) {
          if (!this._sliderDimensions) {
            return;
          }
          /** @type {?} */


          var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
          /** @type {?} */

          var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
          /** @type {?} */

          var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

          /** @type {?} */

          var percent = this._clamp((posComponent - offset) / size);

          if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
          } // Since the steps may not divide cleanly into the max value, if the user
          // slid to 0 or 100 percent, we jump to the min/max value. This approach
          // is slightly more intuitive than using `Math.ceil` below, because it
          // follows the user's pointer closer.


          if (percent === 0) {
            this.value = this.min;
          } else if (percent === 1) {
            this.value = this.max;
          } else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.

            /** @type {?} */


            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

            this.value = this._clamp(closestValue, this.min, this.max);
          }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.value);

          this.valueChange.emit(this.value);
          this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitInputEvent",
        value: function _emitInputEvent() {
          this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTickIntervalPercent",
        value: function _updateTickIntervalPercent() {
          if (!this.tickInterval || !this._sliderDimensions) {
            return;
          }

          if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */

            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */

            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */

            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
          } else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
          }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

          /** @type {?} */
          var event = new MatSliderChange();
          event.source = this;
          event.value = value;
          return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_calculatePercentage",
        value: function _calculatePercentage(value) {
          return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */

      }, {
        key: "_calculateValue",
        value: function _calculateValue(percentage) {
          return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "_clamp",
        value: function _clamp(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSliderDimensions",
        value: function _getSliderDimensions() {
          return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusHostElement",
        value: function _focusHostElement(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */

      }, {
        key: "_blurHostElement",
        value: function _blurHostElement() {
          this._elementRef.nativeElement.blur();
        }
        /**
         * Runs a callback inside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runInsideZone",
        value: function _runInsideZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.run(fn) : fn();
        }
        /**
         * Runs a callback outside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runOutsizeZone",
        value: function _runOutsizeZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.runOutsideAngular(fn) : fn();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "invert",
        get: function get() {
          return this._invert;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

          if (this._value === null) {
            this.value = this._min;
          }

          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */

      }, {
        key: "step",
        get: function get() {
          return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

          if (this._step % 1 !== 0) {
            this._roundToDecimal =
            /** @type {?} */
            this._step.toString().split('.').pop().length;
          } // Since this could modify the label, we need to notify the change detection.


          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */

      }, {
        key: "thumbLabel",
        get: function get() {
          return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */

      }, {
        key: "tickInterval",
        get: function get() {
          return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value === 'auto') {
            this._tickInterval = 'auto';
          } else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value,
            /** @type {?} */
            this._tickInterval);
          } else {
            this._tickInterval = 0;
          }
        }
        /**
         * Value of the slider.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          // If the value needs to be read and it is still uninitialized, initialize it to the min.
          if (this._value === null) {
            this.value = this._min;
          }

          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._value) {
            /** @type {?} */
            var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.

            if (this._roundToDecimal) {
              value = parseFloat(value.toFixed(this._roundToDecimal));
            }

            this._value = value;
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the slider is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */

      }, {
        key: "displayValue",
        get: function get() {
          if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(
            /** @type {?} */
            this.value);
          } // Note that this could be improved further by rounding something like 0.999 to 1 or
          // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
          // every change detection cycle.


          if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
          }

          return this.value || 0;
        }
      }, {
        key: "percent",
        get: function get() {
          return this._clamp(this._percent);
        }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */

      }, {
        key: "_invertAxis",
        get: function get() {
          // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
          // top. However from a y-axis standpoint this is inverted.
          return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */

      }, {
        key: "_isMinValue",
        get: function get() {
          return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */

      }, {
        key: "_thumbGap",
        get: function get() {
          if (this.disabled) {
            return DISABLED_THUMB_GAP;
          }

          if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
          }

          return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */

      }, {
        key: "_trackBackgroundStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '-' : '';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */

      }, {
        key: "_trackFillStyles",
        get: function get() {
          /** @type {?} */
          var percent = this.percent;
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '' : '-';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")"),
            // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
            // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
            // the value of the slider is 0, we can easily get into this situation. We force a
            // recalculation by changing the element's `display` when it goes from 0 to any other value.
            display: percent === 0 ? 'none' : ''
          };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */

      }, {
        key: "_ticksContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
          /** @type {?} */

          var offset = this._tickIntervalPercent / 2 * 100;
          return {
            'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
          };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */

      }, {
        key: "_ticksStyles",
        get: function get() {
          /** @type {?} */
          var tickSize = this._tickIntervalPercent * 100;
          /** @type {?} */

          var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
          // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
          // ticks 180 degrees so we're really cutting off the end edge abd not the start.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
          /** @type {?} */

          var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
          /** @type {?} */

          var styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
          };

          if (this._isMinValue && this._thumbGap) {
            /** @type {?} */
            var side;

            if (this.vertical) {
              side = this._invertAxis ? 'Bottom' : 'Top';
            } else {
              side = this._invertAxis ? 'Right' : 'Left';
            }

            styles["padding".concat(side)] = "".concat(this._thumbGap, "px");
          }

          return styles;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_thumbContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
          /** @type {?} */

          var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
          return {
            'transform': "translate".concat(axis, "(-").concat(offset, "%)")
          };
        }
      }]);

      return MatSlider;
    }(_MatSliderMixinBase);

    MatSlider.ɵfac = function MatSlider_Factory(t) {
      return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8));
    };

    MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlider,
      selectors: [["mat-slider"]],
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
        }
      },
      hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
      hostVars: 28,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSlider_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("keyup", function MatSlider_keyup_HostBindingHandler() {
            return ctx._onKeyup();
          })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
            return ctx._onMouseenter();
          })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._invertAxis)("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue)("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue && ctx._thumbGap && ctx._invertAxis)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        color: "color",
        tabIndex: "tabIndex",
        invert: "invert",
        max: "max",
        min: "min",
        value: "value",
        step: "step",
        thumbLabel: "thumbLabel",
        tickInterval: "tickInterval",
        vertical: "vertical",
        displayWith: "displayWith"
      },
      outputs: {
        change: "change",
        input: "input",
        valueChange: "valueChange"
      },
      exportAs: ["matSlider"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 6,
      consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackBackgroundStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackFillStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._thumbContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
      styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    MatSlider.propDecorators = {
      invert: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      thumbLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tickInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _sliderWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['sliderWrapper']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slider',
          exportAs: 'matSlider',
          providers: [MAT_SLIDER_VALUE_ACCESSOR],
          host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            // On Safari starting to slide temporarily triggers text selection mode which
            // show the wrong cursor. We prevent it by stopping the `selectstart` event.
            '(selectstart)': '$event.preventDefault()',
            'class': 'mat-slider mat-focus-indicator',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            // Class binding which is only used by the test harness as there is no other
            // way for the harness to detect if mouse coordinates need to be inverted.
            '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
          inputs: ['disabled', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      });
    })();

    if (false) {}
    /**
     * Returns whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the coordinates of a touch or mouse event relative to the viewport.
     * @param {?} event
     * @return {?}
     */


    function getPointerPositionOnPage(event) {
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

      /** @type {?} */
      var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
      return {
        x: point.clientX,
        y: point.clientY
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSliderModule = function MatSliderModule() {
      _classCallCheck(this, MatSliderModule);
    };

    MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSliderModule
    });
    MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSliderModule_Factory(t) {
        return new (t || MatSliderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
        declarations: function declarations() {
          return [MatSlider];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlider]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slider.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~forms-forms-module~ui-ui-module-es5.js.map