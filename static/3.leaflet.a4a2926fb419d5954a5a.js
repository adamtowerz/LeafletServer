webpackJsonp([3],Array(527).concat([
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(528);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(392);
	
	var _childUtils = __webpack_require__(455);
	
	var _EnhancedButton = __webpack_require__(454);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (true) {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton,
	      borderRadius = _context$muiTheme.borderRadius;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _propTypes2.default.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	    * The element to use as the container for the RaisedButton. Either a string to
	    * use a DOM element or a ReactElement. This is useful for wrapping the
	    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
	    * that it passes all of its given props through to the underlying DOM
	    * element and renders its children prop for proper integration.
	    */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _propTypes2.default.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _propTypes2.default.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _propTypes2.default.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = RaisedButton;

/***/ }),
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(8)
	  , call        = __webpack_require__(385)
	  , isArrayIter = __webpack_require__(386)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(300)
	  , getIterFn   = __webpack_require__(388)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 535 */,
/* 536 */,
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(10);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , core        = __webpack_require__(7)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(15)
	  , SPECIES     = __webpack_require__(336)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(364);
	
	var _leaflet = __webpack_require__(516);
	
	var _selectors = __webpack_require__(514);
	
	var _Leaflet = __webpack_require__(550);
	
	var _Leaflet2 = _interopRequireDefault(_Leaflet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapDispatchToProps = {
	  newLeaf: function newLeaf(type) {
	    return (0, _leaflet.newLeaf)(type);
	  },
	  sortLeavesList: function sortLeavesList(list) {
	    return (0, _leaflet.sortLeavesList)(list);
	  },
	  setDrawer: function setDrawer(value) {
	    return (0, _leaflet.setDrawer)(value);
	  }
	};
	// import { increment, doubleAsync } from '../modules/leaflet'
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    pageMeta: (0, _selectors.pageMetaSelector)(state),
	    title: state.leaflet.title,
	    leaves: (0, _selectors.leavesSelector)(state),
	    activePage: (0, _selectors.activePageSelector)(state),
	    openDrawer: (0, _selectors.openDrawerSelector)(state)
	  };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	    import { createSelector } from 'reselect'
	    const counter = (state) => state.counter
	    const tripleCount = createSelector(counter, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      counter: tripleCount(state)
	    })
	
	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Leaflet2.default);

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(323);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(521);
	
	__webpack_require__(551);
	
	var _leavesArrayCompare = __webpack_require__(553);
	
	var _leavesArrayCompare2 = _interopRequireDefault(_leavesArrayCompare);
	
	var _TitleLeaf = __webpack_require__(554);
	
	var _TitleLeaf2 = _interopRequireDefault(_TitleLeaf);
	
	var _FloatingActionButton = __webpack_require__(563);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _Dialog = __webpack_require__(565);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(569);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Drawer = __webpack_require__(572);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	var _MenuItem = __webpack_require__(512);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Avatar = __webpack_require__(574);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _Subheader = __webpack_require__(495);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _IconMenu = __webpack_require__(490);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _IconButton = __webpack_require__(450);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _arrowDropDown = __webpack_require__(576);
	
	var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);
	
	var _reactDraggableList = __webpack_require__(577);
	
	var _reactDraggableList2 = _interopRequireDefault(_reactDraggableList);
	
	var _CSSTransitionGroup = __webpack_require__(643);
	
	var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);
	
	var _LeafletNavContainer = __webpack_require__(652);
	
	var _LeafletNavContainer2 = _interopRequireDefault(_LeafletNavContainer);
	
	var _LeafContainer = __webpack_require__(670);
	
	var _LeafContainer2 = _interopRequireDefault(_LeafContainer);
	
	var _logoPath = __webpack_require__(684);
	
	var _logoPath2 = _interopRequireDefault(_logoPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  addLeafFAB: {
	    position: 'fixed',
	    right: '10vw',
	    bottom: '10vh'
	  },
	  noLeaves: {
	    img: {
	      color: 'black',
	      fill: 'black'
	    }
	  },
	  drawer: {
	    profile: {
	      backgroundColor: '#616161',
	      height: '15vh'
	    },
	    activeLeaflet: {
	      color: '#4CAF50'
	    },
	    user: {
	      core: {
	        color: 'white',
	        marginLeft: '5%',
	        width: '95%',
	        fontSize: '13px',
	        height: '30%',
	        display: 'flex',
	        justifyContent: 'space-between',
	        alignItems: 'center'
	      },
	      avatar: {
	        width: 'auto',
	        height: '7vh',
	        margin: '1vh 1vw'
	      },
	      chevron: {
	        float: 'right'
	      },
	      text: {
	        float: 'left'
	      }
	    }
	  }
	};
	
	var Leaflet = function (_React$Component) {
	  (0, _inherits3.default)(Leaflet, _React$Component);
	
	  function Leaflet() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Leaflet);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Leaflet.__proto__ || (0, _getPrototypeOf2.default)(Leaflet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      openNewLeafDialog: false
	    }, _this.handleOpenNewLeafDialog = function () {
	      _this.setState({ openNewLeafDialog: true });
	    }, _this.handleCloseNewLeafDialog = function () {
	      _this.setState({ openNewLeafDialog: false });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Leaflet, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (!(0, _leavesArrayCompare2.default)(this.props.leaves, nextProps.leaves)) return true;
	      if (this.state !== nextState) return true;
	      if (this.props.pageMeta !== nextProps.pageMeta) return true;
	      if (this.props.activePage !== nextProps.activePage) return true;
	      if (this.props.openDrawer !== nextProps.openDrawer) return true;
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      console.log('render functon');
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        onTouchTap: this.handleCloseNewLeafDialog
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'rawText',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          return _this2.props.newLeaf('rawText');
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'code',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          return _this2.props.newLeaf('code');
	        }
	      })];
	
	      var leavesList = [];
	      if (this.props.leaves) {
	        leavesList = this.props.leaves.map(function (e, i) {
	          e.key = i;
	          return e;
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_LeafletNavContainer2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'leaflet__contentCol' },
	          this.props.activePage ? _react2.default.createElement(_TitleLeaf2.default, { pageMeta: this.props.pageMeta }) : null,
	          _react2.default.createElement(_reactDraggableList2.default, {
	            itemKey: 'key',
	            template: _LeafContainer2.default,
	            commonProps: this.props.pageMeta,
	            list: leavesList,
	            onMoveEnd: function onMoveEnd(list, item, oldIndex, newIndex) {
	              _this2.props.sortLeavesList(list);
	            }
	          }),
	          this.props.activePage && leavesList.length === 0 && _react2.default.createElement(
	            'div',
	            { key: 1, className: 'leaflet__noLeaves' },
	            'Add Some Leaves!'
	          ),
	          _react2.default.createElement(
	            _CSSTransitionGroup2.default,
	            {
	              transitionName: 'noPage',
	              transitionEnterTimeout: 0,
	              transitionLeaveTimeout: 150 },
	            !this.props.activePage ? _react2.default.createElement(
	              'div',
	              { key: 0, className: 'leaflet__noPage' },
	              _react2.default.createElement('img', { style: styles.noLeaves.img, className: 'leaflet__noPage__img', src: _logoPath2.default }),
	              'Open a Page!'
	            ) : null
	          )
	        ),
	        (0, _typeof3.default)(this.props.activePage) === 'object' ? _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { style: styles.addLeafFAB, onTouchTap: this.handleOpenNewLeafDialog },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons titleActionIcon' },
	            'add'
	          )
	        ) : null,
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'New Leaf',
	            actions: actions,
	            modal: false,
	            open: this.state.openNewLeafDialog,
	            onRequestClose: this.handleCloseNewLeafDialog
	          },
	          'Create new Leaves Dialog'
	        ),
	        _react2.default.createElement(
	          _Drawer2.default,
	          {
	            docked: false,
	            width: 200,
	            open: this.props.openDrawer,
	            onRequestChange: function onRequestChange(open) {
	              return _this2.props.setDrawer(open);
	            } },
	          _react2.default.createElement(
	            'div',
	            { style: styles.drawer.profile },
	            _react2.default.createElement(_Avatar2.default, {
	              src: 'http://atowers.info/graphics/selfie.png',
	              style: styles.drawer.user.avatar
	            }),
	            _react2.default.createElement(
	              'div',
	              { style: styles.drawer.user.core },
	              _react2.default.createElement(
	                'span',
	                { style: styles.drawer.user.text },
	                'ajtowers@uw.edu'
	              ),
	              _react2.default.createElement(
	                _IconMenu2.default,
	                {
	                  iconButtonElement: _react2.default.createElement(
	                    _IconButton2.default,
	                    null,
	                    _react2.default.createElement(_arrowDropDown2.default, { color: 'white' })
	                  ),
	                  anchorOrigin: { horizontal: 'left', vertical: 'top' },
	                  targetOrigin: { horizontal: 'left', vertical: 'top' },
	                  style: styles.drawer.user.chevron
	                },
	                _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
	                _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
	                _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.drawer.leaflets },
	            _react2.default.createElement(
	              _Subheader2.default,
	              null,
	              'My Leaflets'
	            ),
	            _react2.default.createElement(
	              _MenuItem2.default,
	              { style: styles.drawer.activeLeaflet,
	                onTouchTap: function onTouchTap() {
	                  return _this2.props.setDrawer(false);
	                } },
	              'Chemistry 102'
	            ),
	            _react2.default.createElement(
	              _MenuItem2.default,
	              { onTouchTap: function onTouchTap() {
	                  return _this2.props.setDrawer(false);
	                } },
	              'Biology 101'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return Leaflet;
	}(_react2.default.Component);
	
	exports.default = Leaflet;
	
	
	Leaflet.propTypes = {
	  pageMeta: _propTypes2.default.object.isRequired,
	  leaves: _propTypes2.default.array.isRequired,
	  newLeaf: _propTypes2.default.func.isRequired,
	  sortLeavesList: _propTypes2.default.func.isRequired,
	  activePage: _propTypes2.default.any.isRequired, // TODO: 'any' -> enum of boolean and array
	  openDrawer: _propTypes2.default.bool.isRequired,
	  setDrawer: _propTypes2.default.func.isRequired
	};

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(552);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(445)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(552, function() {
				var newContent = __webpack_require__(552);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(444)();
	// imports
	
	
	// module
	exports.push([module.id, ".leaflet__contentCol{padding-top:.5em;display:inline-block}@media screen and (max-width:540px){.leaflet__contentCol{width:65%;margin-left:30%}}@media screen and (min-width:540px){.leaflet__contentCol{width:60%;margin-left:20%}}.leaflet__noPage{position:absolute;opacity:.3;margin-top:1vh;height:60vh;font-size:2em;font-weight:500;text-align:center;z-index:0}@media screen and (max-width:540px){.leaflet__noPage{width:65%}}@media screen and (min-width:540px){.leaflet__noPage{width:60%}}.leaflet__noPage__img{display:block;width:15vw;margin:auto;padding-top:10vh;padding-bottom:5vh}.leaflet__noLeaves{color:#000;fill:#000;position:absolute;opacity:.36;margin-top:5vh;font-size:2em;font-weight:500;text-align:center;z-index:0}@media screen and (max-width:540px){.leaflet__noLeaves{width:65%}}@media screen and (min-width:540px){.leaflet__noLeaves{width:60%}}.leaflet__noLeaves__img{margin-left:35%;display:block;width:30vw;margin:auto;padding-top:1em}.noPage-leave.noPage-leave-active{transform:translateY(100%);transition:all .15s ease-in}.noPage-enter.noPage-enter-active{transform:translateY(-100%);transition:all .15s ease-in}", "", {"version":3,"sources":["/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/src/routes/Leaflet/components/Leaflet.scss"],"names":[],"mappings":"AAEA,qBACE,iBAAkB,oBACG,CAErB,oCAJF,qBAKI,UAAU,eACM,CAOnB,CAJC,oCATF,qBAUI,UAAU,eACM,CAEnB,CAAA,iBAGC,kBAAkB,WACN,eACG,YACH,cACE,gBACE,kBACE,SACR,CAEV,oCAVF,iBAWI,SAAU,CAMb,CAHC,oCAdF,iBAeI,SAAU,CAEb,CAAA,sBAGC,cAAc,WACH,YACC,iBACK,kBACE,CACpB,mBAGC,WAAY,UACD,kBACO,YACL,eACE,cACD,gBACE,kBACE,SACR,CAEV,oCAXF,mBAYI,SAAU,CAMb,CAHC,oCAfF,mBAgBI,SAAU,CAEb,CAAA,wBAGC,gBAAgB,cACF,WACH,YACC,eACI,CACjB,kCAQC,2BAA2B,2BACE,CAC9B,kCAQC,4BAA4B,2BACC,CAC9B","file":"Leaflet.scss","sourcesContent":["$break-small: 540px;\n\n.leaflet__contentCol {\n  padding-top: 0.5em;\n  display: inline-block;\n\n  @media screen and (max-width: $break-small) {\n    width: 65%;\n    margin-left: 30%;\n  }\n\n  @media screen and (min-width: $break-small) {\n    width: 60%;\n    margin-left: 20%;\n  }\n}\n\n.leaflet__noPage {\n  position: absolute;\n  opacity: 0.3;\n  margin-top: 1vh;\n  height: 60vh;\n  font-size: 2em;\n  font-weight: 500;\n  text-align: center;\n  z-index: 0;\n\n  @media screen and (max-width: $break-small) {\n    width: 65%;\n  }\n\n  @media screen and (min-width: $break-small) {\n    width: 60%;\n  }\n}\n\n.leaflet__noPage__img {\n  display: block;\n  width: 15vw;\n  margin: auto;\n  padding-top: 10vh;\n  padding-bottom: 5vh;\n}\n\n.leaflet__noLeaves {\n  color: black;\n  fill: black;\n  position: absolute;\n  opacity: 0.36;\n  margin-top: 5vh;\n  font-size: 2em;\n  font-weight: 500;\n  text-align: center;\n  z-index: 0;\n\n  @media screen and (max-width: $break-small) {\n    width: 65%;\n  }\n\n  @media screen and (min-width: $break-small) {\n    width: 60%;\n  }\n}\n\n.leaflet__noLeaves__img {\n  margin-left: 35%;\n  display: block;\n  width: 30vw;\n  margin: auto;\n  padding-top: 1em;\n}\n\n\n.noPage-leave {\n\n}\n\n.noPage-leave.noPage-leave-active {\n  transform: translateY(100%);\n  transition: all 150ms ease-in;\n}\n\n\n.noPage-enter {\n\n}\n\n.noPage-enter.noPage-enter-active {\n  transform: translateY(-100%);\n  transition: all 150ms ease-in;\n}\n"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 553 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var leavesArrayCompare = function leavesArrayCompare(a, b) {
	  if (a.length !== b.length) return false;
	  for (var i = 0, l = a.length; i < l; i++) {
	    console.log(i + ': ' + a[i].leafID + ' ' + b[i].leafID);
	    if (a[i].leafID !== b[i].leafID) return false;
	  }
	  return true;
	};
	
	exports.default = leavesArrayCompare;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(555);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _IconButton = __webpack_require__(450);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _TextField = __webpack_require__(557);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _RaisedButton = __webpack_require__(527);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { CSSTransitionGroup } from 'react-transition-group'
	var styles = {
	  container: {
	    width: '100%',
	    minHeight: '4vh',
	    paddingTop: '1vh',
	    marginBottom: '1vh',
	    transitionProperty: 'margin-bottom',
	    transitionDuration: '.5s',
	    transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
	    lineHeight: '0'
	  },
	  centerArea: {
	    overflow: 'hidden',
	    height: '100%',
	    width: '91%',
	    display: 'inline-block',
	    margin: '0 2%',
	    lineHeight: '1.42857'
	  },
	  centerCard: {
	    height: '8vh',
	    width: '100%',
	    display: 'block',
	    zIndex: '2',
	    position: 'relative',
	    borderLeft: ''
	  },
	  centerCardEmphasized: {
	    borderLeft: '6px solid #4caf50'
	  },
	  sideActions: {
	    width: '5%',
	    float: 'right',
	    display: 'inline-block'
	  },
	  sideAction: {
	    width: '1.5rem',
	    height: '1.5rem',
	    marginBottom: '0.4rem',
	    marginTop: '0.4rem',
	    padding: 0
	  },
	  iconCol: {
	    width: '100%',
	    display: 'flex',
	    justifyContent: 'space-around',
	    flexDirection: 'column',
	    alignItems: 'center'
	  },
	  titleCardBox: {
	    position: 'absolute',
	    height: '8vh',
	    width: '100%',
	    display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'center'
	  },
	  title: {
	    fontWeight: '100',
	    fontSize: '1.7em',
	    color: '#4CAF50',
	    display: 'inline-block',
	    whiteSpace: 'nowrap',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    width: '100%',
	    textAlign: 'center'
	  },
	  settings: {
	    container: {
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      transform: 'translateX(110%)'
	    },
	    containerShow: {
	      transform: 'translateX(0%)'
	    },
	    textField: {
	      height: '8vh',
	      marginLeft: '1vw',
	      width: '50%'
	    },
	    sharingButton: {
	      float: 'right',
	      marginTop: 'calc(4vh - 18px)',
	      marginRight: '1vw'
	    }
	  }
	
	};
	// import FirstChild from '../../../../components/FirstChild'
	
	var Leaf = function (_React$Component) {
	  (0, _inherits3.default)(Leaf, _React$Component);
	
	  function Leaf(props) {
	    (0, _classCallCheck3.default)(this, Leaf);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Leaf.__proto__ || (0, _getPrototypeOf2.default)(Leaf)).call(this, props));
	
	    _this.state = {
	      showSettings: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Leaf, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      // fetch template from ID, apply data
	      return _react2.default.createElement(
	        'div',
	        { style: styles.container },
	        _react2.default.createElement(
	          'div',
	          { style: styles.centerArea },
	          _react2.default.createElement(_Paper2.default, { style: styles.centerCard, children: _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'div',
	                { style: styles.titleCardBox },
	                _react2.default.createElement(
	                  'span',
	                  { style: styles.title },
	                  this.props.pageMeta.title
	                )
	              ),
	              _react2.default.createElement(_Paper2.default, { style: this.state.showSettings ? (0, _extends3.default)({}, styles.settings.container, styles.settings.containerShow) : styles.settings.container,
	                id: 'settings', children: _react2.default.createElement(
	                  'div',
	                  null,
	                  _react2.default.createElement(_TextField2.default, { style: styles.settings.textField,
	                    value: this.props.pageMeta.title
	                  }),
	                  _react2.default.createElement(_RaisedButton2.default, { label: 'Sharing', id: 'sharingButton', primary: true, style: styles.settings.sharingButton })
	                ) })
	            )
	          })
	        ),
	        _react2.default.createElement(_Paper2.default, { style: styles.sideActions, children: _react2.default.createElement(
	            'div',
	            { style: styles.iconCol },
	            _react2.default.createElement(
	              _IconButton2.default,
	              { style: styles.sideAction,
	                onClick: function onClick() {
	                  _this2.setState({ showSettings: !_this2.state.showSettings });
	                } },
	              _react2.default.createElement(
	                'i',
	                { style: styles.sideActionIcon, className: 'material-icons leaf__action__side' },
	                'settings'
	              )
	            )
	          ) })
	      );
	    }
	  }]);
	  return Leaf;
	}(_react2.default.Component);
	
	Leaf.propTypes = {
	  pageMeta: _propTypes2.default.object
	};
	
	exports.default = Leaf;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(556);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(445)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(556, function() {
				var newContent = __webpack_require__(556);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(444)();
	// imports
	
	
	// module
	exports.push([module.id, ".leaf__action,.leaf__action__side,.leaf__action__trough{opacity:.56}.leaf__action:hover,.leaf__action__side:hover,.leaf__action__trough:hover{opacity:1}.leaf__action__side{font-size:1.5rem}.leaf__action__trough{font-size:3.5vh}", "", {"version":3,"sources":["/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/Leaf/src/routes/Leaflet/components/Leaf/Leaf.scss"],"names":[],"mappings":"AAEA,wDACE,WAAa,CACd,0EAGC,SAAU,CACX,oBAIC,gBAAiB,CAClB,sBAIC,eAAgB,CACjB","file":"Leaf.scss","sourcesContent":["// general leaf styling\n\n.leaf__action {\n  opacity: 0.56;\n}\n\n.leaf__action:hover {\n  opacity: 1;\n}\n\n.leaf__action__side {\n  @extend .leaf__action;\n  font-size: 1.5rem;\n}\n\n.leaf__action__trough {\n  @extend .leaf__action;\n  font-size: 3.5vh;\n}\n"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextField = __webpack_require__(558);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextField2.default;

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(60);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(460);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedTextarea = __webpack_require__(559);
	
	var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);
	
	var _TextFieldHint = __webpack_require__(560);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(561);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _TextFieldUnderline = __webpack_require__(562);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _warning = __webpack_require__(240);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      _context$muiTheme$tex = _context$muiTheme.textField,
	      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
	      focusColor = _context$muiTheme$tex.focusColor,
	      textColor = _context$muiTheme$tex.textColor,
	      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
	      backgroundColor = _context$muiTheme$tex.backgroundColor,
	      errorColor = _context$muiTheme$tex.errorColor;
	
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height'),
	      cursor: props.disabled ? 'not-allowed' : 'auto'
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: props.disabled ? disabledTextColor : floatingLabelColor,
	      pointerEvents: 'none'
	    },
	    input: {
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      cursor: 'inherit',
	      font: 'inherit',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
	    inputNative: {
	      appearance: 'textfield' }
	  };
	
	  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });
	
	  // Do not assign a height to the textarea as he handles it on his own.
	  styles.input.height = '100%';
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	
	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }
	
	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
	}
	
	var TextField = function (_Component) {
	  (0, _inherits3.default)(TextField, _Component);
	
	  function TextField() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TextField);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      hasValue: false
	    }, _this.handleInputBlur = function (event) {
	      _this.setState({ isFocused: false });
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleInputChange = function (event) {
	      if (!_this.props.hasOwnProperty('value')) {
	        _this.setState({ hasValue: isValid(event.target.value) });
	      }
	      if (_this.props.onChange) {
	        _this.props.onChange(event, event.target.value);
	      }
	    }, _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      }
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleHeightChange = function (event, height) {
	      var newHeight = height + 24;
	      if (_this.props.floatingLabelText) {
	        newHeight += 24;
	      }
	      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TextField, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          children = _props.children,
	          name = _props.name,
	          hintText = _props.hintText,
	          floatingLabelText = _props.floatingLabelText,
	          id = _props.id;
	
	
	      var propsLeaf = children ? children.props : this.props;
	
	      this.setState({
	        errorText: this.props.errorText,
	        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
	      });
	
	       true ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;
	
	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }
	
	      if (nextProps.children && nextProps.children.props) {
	        nextProps = nextProps.children.props;
	      }
	
	      if (nextProps.hasOwnProperty('value')) {
	        var hasValue = isValid(nextProps.value);
	
	        this.setState({
	          hasValue: hasValue
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) {
	        this.getInputNode().blur();
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.input) {
	        this.getInputNode().focus();
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) {
	        this.getInputNode().select();
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	    }
	  }, {
	    key: '_isControlled',
	    value: function _isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          errorStyle = _props2.errorStyle,
	          errorText = _props2.errorText,
	          floatingLabelFixed = _props2.floatingLabelFixed,
	          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
	          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
	          floatingLabelStyle = _props2.floatingLabelStyle,
	          floatingLabelText = _props2.floatingLabelText,
	          fullWidth = _props2.fullWidth,
	          hintText = _props2.hintText,
	          hintStyle = _props2.hintStyle,
	          id = _props2.id,
	          inputStyle = _props2.inputStyle,
	          multiLine = _props2.multiLine,
	          onBlur = _props2.onBlur,
	          onChange = _props2.onChange,
	          onFocus = _props2.onFocus,
	          style = _props2.style,
	          type = _props2.type,
	          underlineDisabledStyle = _props2.underlineDisabledStyle,
	          underlineFocusStyle = _props2.underlineFocusStyle,
	          underlineShow = _props2.underlineShow,
	          underlineStyle = _props2.underlineStyle,
	          rows = _props2.rows,
	          rowsMax = _props2.rowsMax,
	          textareaStyle = _props2.textareaStyle,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = id || this.uniqueId;
	
	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
	        this.state.errorText
	      );
	
	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
	          shrinkStyle: floatingLabelShrinkStyle,
	          htmlFor: inputId,
	          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	          disabled: disabled
	        },
	        floatingLabelText
	      );
	
	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this2.input = elem;
	        },
	        disabled: this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.handleInputFocus
	      };
	
	      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);
	
	      var inputElement = void 0;
	      if (children) {
	        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
	          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
	        }));
	      } else {
	        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
	          style: childStyleMerged,
	          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
	          rows: rows,
	          rowsMax: rowsMax,
	          hintText: hintText
	        }, other, inputProps, {
	          onHeightChange: this.handleHeightChange
	        })) : _react2.default.createElement('input', (0, _extends3.default)({
	          type: type,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
	        }, other, inputProps));
	      }
	
	      var rootProps = {};
	
	      if (children) {
	        rootProps = other;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, rootProps, {
	          className: className,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }),
	        floatingLabelTextElement,
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	          style: hintStyle,
	          text: hintText
	        }) : null,
	        inputElement,
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	  return TextField;
	}(_react.Component);
	
	TextField.defaultProps = {
	  disabled: false,
	  floatingLabelFixed: false,
	  multiLine: false,
	  fullWidth: false,
	  type: 'text',
	  underlineShow: true,
	  rows: 1
	};
	TextField.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? TextField.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The text string to use for the default value.
	   */
	  defaultValue: _propTypes2.default.any,
	  /**
	   * Disables the text field if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The style object to use to override error styles.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _propTypes2.default.node,
	  /**
	   * If true, the floating label will float even when there is no value.
	   */
	  floatingLabelFixed: _propTypes2.default.bool,
	  /**
	   * The style object to use to override floating label styles when focused.
	   */
	  floatingLabelFocusStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles when shrunk.
	   */
	  floatingLabelShrinkStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles.
	   */
	  floatingLabelStyle: _propTypes2.default.object,
	  /**
	   * The content to use for the floating label element.
	   */
	  floatingLabelText: _propTypes2.default.node,
	  /**
	   * If true, the field receives the property width 100%.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's hint text element.
	   */
	  hintStyle: _propTypes2.default.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _propTypes2.default.node,
	  /**
	   * The id prop for the text field.
	   */
	  id: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the TextField's input element.
	   * When multiLine is false: define the style of the input element.
	   * When multiLine is true: define the style of the container of the textarea.
	   */
	  inputStyle: _propTypes2.default.object,
	  /**
	   * If true, a textarea element will be rendered.
	   * The textarea also grows and shrinks according to the number of lines.
	   */
	  multiLine: _propTypes2.default.bool,
	  /**
	   * Name applied to the input.
	   */
	  name: _propTypes2.default.string,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /**
	   * Callback function that is fired when the textfield's value changes.
	   *
	   * @param {object} event Change event targeting the text field.
	   * @param {string} newValue The new value of the text field.
	   */
	  onChange: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Number of rows to display when multiLine option is set to true.
	   */
	  rows: _propTypes2.default.number,
	  /**
	   * Maximum number of rows to display when
	   * multiLine option is set to true.
	   */
	  rowsMax: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's textarea element.
	   * The TextField use either a textarea or an input,
	   * this property has effects only when multiLine is true.
	   */
	  textareaStyle: _propTypes2.default.object,
	  /**
	   * Specifies the type of input to display
	   * such as "password" or "text".
	   */
	  type: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the
	   * TextField's underline element when disabled.
	   */
	  underlineDisabledStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's
	   * underline element when focussed.
	   */
	  underlineFocusStyle: _propTypes2.default.object,
	  /**
	   * If true, shows the underline for the text field.
	   */
	  underlineShow: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's underline element.
	   */
	  underlineStyle: _propTypes2.default.object,
	  /**
	   * The value of the text field.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = TextField;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactEventListener = __webpack_require__(499);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rowsHeight = 24;
	
	function getStyles(props, context, state) {
	  return {
	    root: {
	      position: 'relative' },
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: 'inherit'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'auto'
	    }
	  };
	}
	
	var EnhancedTextarea = function (_Component) {
	  (0, _inherits3.default)(EnhancedTextarea, _Component);
	
	  function EnhancedTextarea() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedTextarea);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      height: null
	    }, _this.handleResize = function (event) {
	      _this.syncHeightWithShadow(undefined, event);
	    }, _this.handleChange = function (event) {
	      _this.syncHeightWithShadow(event.target.value);
	
	      if (_this.props.hasOwnProperty('valueLink')) {
	        _this.props.valueLink.requestChange(event.target.value);
	      }
	
	      if (_this.props.onChange) {
	        _this.props.onChange(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedTextarea, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        height: this.props.rows * rowsHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncHeightWithShadow();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
	        this.syncHeightWithShadow(nextProps.value, null, nextProps);
	      }
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.refs.input;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      this.getInputNode().value = value;
	      this.syncHeightWithShadow(value);
	    }
	  }, {
	    key: 'syncHeightWithShadow',
	    value: function syncHeightWithShadow(newValue, event, props) {
	      var shadow = this.refs.shadow;
	      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;
	
	      if (displayText !== undefined) {
	        shadow.value = displayText;
	      }
	
	      var newHeight = shadow.scrollHeight;
	
	      // Guarding for jsdom, where scrollHeight isn't present.
	      // See https://github.com/tmpvar/jsdom/issues/1013
	      if (newHeight === undefined) return;
	
	      props = props || this.props;
	
	      if (props.rowsMax >= props.rows) {
	        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
	      }
	
	      newHeight = Math.max(newHeight, rowsHeight);
	
	      if (this.state.height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });
	
	        if (props.onHeightChange) {
	          props.onHeightChange(event, newHeight);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onChange = _props.onChange,
	          onHeightChange = _props.onHeightChange,
	          rows = _props.rows,
	          rowsMax = _props.rowsMax,
	          shadowStyle = _props.shadowStyle,
	          style = _props.style,
	          hintText = _props.hintText,
	          textareaStyle = _props.textareaStyle,
	          valueLink = _props.valueLink,
	          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
	      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
	
	      if (this.props.hasOwnProperty('valueLink')) {
	        other.value = this.props.valueLink.value;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(rootStyles) },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
	        _react2.default.createElement('textarea', {
	          ref: 'shadow',
	          style: prepareStyles(shadowStyles),
	          tabIndex: '-1',
	          rows: this.props.rows,
	          defaultValue: this.props.defaultValue,
	          readOnly: true,
	          value: this.props.value,
	          valueLink: this.props.valueLink
	        }),
	        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
	          ref: 'input',
	          rows: this.props.rows,
	          style: prepareStyles(textareaStyles),
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }]);
	  return EnhancedTextarea;
	}(_react.Component);
	
	EnhancedTextarea.defaultProps = {
	  rows: 1
	};
	EnhancedTextarea.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? EnhancedTextarea.propTypes = {
	  defaultValue: _propTypes2.default.any,
	  disabled: _propTypes2.default.bool,
	  hintText: _propTypes2.default.string,
	  onChange: _propTypes2.default.func,
	  onHeightChange: _propTypes2.default.func,
	  rows: _propTypes2.default.number,
	  rowsMax: _propTypes2.default.number,
	  shadowStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  textareaStyle: _propTypes2.default.object,
	  value: _propTypes2.default.string,
	  valueLink: _propTypes2.default.object
	} : void 0;
	exports.default = EnhancedTextarea;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor,
	      show = props.show;
	
	
	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}
	
	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles,
	      style = props.style,
	      text = props.text;
	
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};
	
	 true ? TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _propTypes2.default.node
	} : void 0;
	
	TextFieldHint.defaultProps = {
	  show: true
	};
	
	exports.default = TextFieldHint;

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    transform: 'scale(1) translate(0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };
	
	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'scale(0.75) translate(0, -28px)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;
	
	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme,
	      className = props.className,
	      children = props.children,
	      htmlFor = props.htmlFor,
	      onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};
	
	 true ? TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _propTypes2.default.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the text field label.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element when shrunk.
	   */
	  shrinkStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	exports.default = TextFieldLabel;

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _propTypes2.default.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled,
	      disabledStyle = props.disabledStyle,
	      error = props.error,
	      errorStyle = props.errorStyle,
	      focus = props.focus,
	      focusStyle = props.focusStyle,
	      muiTheme = props.muiTheme,
	      style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles,
	      _muiTheme$textField = muiTheme.textField,
	      borderColor = _muiTheme$textField.borderColor,
	      disabledTextColor = _muiTheme$textField.disabledTextColor,
	      errorColor = _muiTheme$textField.errorColor,
	      focusColor = _muiTheme$textField.focusColor;
	
	
	  var styles = {
	    root: {
	      borderTop: 'none',
	      borderLeft: 'none',
	      borderRight: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
	  );
	};
	
	 true ? TextFieldUnderline.propTypes = propTypes : void 0;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FloatingActionButton = __webpack_require__(564);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FloatingActionButton2.default;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(392);
	
	var _EnhancedButton = __webpack_require__(454);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(472);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _childUtils = __webpack_require__(455);
	
	var _warning = __webpack_require__(240);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _propTypes3 = __webpack_require__(453);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var floatingActionButton = context.muiTheme.floatingActionButton;
	
	
	  var backgroundColor = props.backgroundColor || floatingActionButton.color;
	  var iconColor = floatingActionButton.iconColor;
	
	  if (props.disabled) {
	    backgroundColor = props.disabledColor || floatingActionButton.disabledColor;
	    iconColor = floatingActionButton.disabledTextColor;
	  } else if (props.secondary) {
	    backgroundColor = floatingActionButton.secondaryColor;
	    iconColor = floatingActionButton.secondaryIconColor;
	  }
	
	  return {
	    root: {
	      transition: _transitions2.default.easeOut(),
	      display: 'inline-block',
	      backgroundColor: 'transparent'
	    },
	    container: {
	      backgroundColor: backgroundColor,
	      transition: _transitions2.default.easeOut(),
	      height: floatingActionButton.buttonSize,
	      width: floatingActionButton.buttonSize,
	      padding: 0,
	      overflow: 'hidden',
	      borderRadius: '50%',
	      textAlign: 'center',
	      verticalAlign: 'bottom'
	    },
	    containerWhenMini: {
	      height: floatingActionButton.miniSize,
	      width: floatingActionButton.miniSize
	    },
	    overlay: {
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    overlayWhenHovered: {
	      backgroundColor: (0, _colorManipulator.fade)(iconColor, 0.4)
	    },
	    icon: {
	      height: floatingActionButton.buttonSize,
	      lineHeight: floatingActionButton.buttonSize + 'px',
	      fill: iconColor,
	      color: iconColor
	    },
	    iconWhenMini: {
	      height: floatingActionButton.miniSize,
	      lineHeight: floatingActionButton.miniSize + 'px'
	    }
	  };
	}
	
	var FloatingActionButton = function (_Component) {
	  (0, _inherits3.default)(FloatingActionButton, _Component);
	
	  function FloatingActionButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FloatingActionButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FloatingActionButton.__proto__ || (0, _getPrototypeOf2.default)(FloatingActionButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      touch: false,
	      zDepth: undefined
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({ zDepth: _this.props.zDepth + 1 });
	      }
	      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({ zDepth: _this.props.zDepth });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.container.isKeyboardFocused()) {
	        _this.setState({ zDepth: _this.props.zDepth, hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touch: true,
	        zDepth: _this.props.zDepth + 1
	      });
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touch: true,
	        zDepth: _this.props.zDepth
	      });
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused && !_this.props.disabled) {
	        _this.setState({ zDepth: _this.props.zDepth + 1 });
	        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(getStyles(_this.props, _this.context).icon.color, 0.4);
	      } else if (!_this.state.hovered) {
	        _this.setState({ zDepth: _this.props.zDepth });
	        _this.refs.overlay.style.backgroundColor = 'transparent';
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FloatingActionButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        zDepth: this.props.disabled ? 0 : this.props.zDepth
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	       true ? (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'Material-UI: You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.') : void 0;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var nextState = {};
	
	      if (nextProps.disabled !== this.props.disabled) {
	        nextState.zDepth = nextProps.disabled ? 0 : this.props.zDepth;
	      }
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          className = _props.className,
	          childrenProp = _props.children,
	          disabled = _props.disabled,
	          disabledColor = _props.disabledColor,
	          mini = _props.mini,
	          secondary = _props.secondary,
	          iconStyle = _props.iconStyle,
	          iconClassName = _props.iconClassName,
	          zDepth = _props.zDepth,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'className', 'children', 'disabled', 'disabledColor', 'mini', 'secondary', 'iconStyle', 'iconClassName', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var iconElement = void 0;
	      if (iconClassName) {
	        iconElement = _react2.default.createElement(_FontIcon2.default, {
	          className: iconClassName,
	          style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
	        });
	      }
	
	      var children = void 0;
	
	      if (childrenProp) {
	        children = (0, _childUtils.extendChildren)(childrenProp, function (child) {
	          return {
	            style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle, child.props.style)
	          };
	        });
	      }
	
	      var buttonEventHandlers = disabled ? null : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          zDepth: this.state.zDepth,
	          circle: true
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
	            focusRippleColor: styles.icon.color,
	            touchRippleColor: styles.icon.color
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered))
	            },
	            iconElement,
	            children
	          )
	        )
	      );
	    }
	  }]);
	  return FloatingActionButton;
	}(_react.Component);
	
	FloatingActionButton.defaultProps = {
	  disabled: false,
	  mini: false,
	  secondary: false,
	  zDepth: 2
	};
	FloatingActionButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FloatingActionButton.propTypes = {
	  /**
	   * This value will override the default background color for the button.
	   * However it will not override the default disabled background color.
	   * This has to be set separately using the disabledColor attribute.
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * This is what displayed inside the floating action button; for example, a SVG Icon.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * This value will override the default background color for the button when it is disabled.
	   */
	  disabledColor: _propTypes2.default.string,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * The icon within the FloatingActionButton is a FontIcon component.
	   * This property is the classname of the icon to be displayed inside the button.
	   * An alternative to adding an iconClassName would be to manually insert a
	   * FontIcon component or custom SvgIcon component or as a child of FloatingActionButton.
	   */
	  iconClassName: _propTypes2.default.string,
	  /**
	   * This is the equivalent to iconClassName except that it is used for
	   * overriding the inline-styles of the FontIcon component.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will be a small floating action button.
	   */
	  mini: _propTypes2.default.bool,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * If true, the button will use the secondary button colors.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The zDepth of the underlying `Paper` component.
	   */
	  zDepth: _propTypes4.default.zDepth
	} : void 0;
	exports.default = FloatingActionButton;

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dialog = __webpack_require__(566);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dialog2.default;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(60);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(499);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(458);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(567);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _RenderToLayer = __webpack_require__(502);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _reactAddonsTransitionGroup = __webpack_require__(463);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TransitionItem = function (_Component) {
	  (0, _inherits3.default)(TransitionItem, _Component);
	
	  function TransitionItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TransitionItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionItem.__proto__ || (0, _getPrototypeOf2.default)(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      style: {}
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TransitionItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimeout);
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.componentWillAppear(callback);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      var spacing = this.context.muiTheme.baseTheme.spacing;
	
	      this.setState({
	        style: {
	          opacity: 1,
	          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
	        }
	      });
	
	      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this.setState({
	        style: {
	          opacity: 0,
	          transform: 'translate(0, 0)'
	        }
	      });
	
	      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          style = _props.style,
	          children = _props.children,
	          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
	        children
	      );
	    }
	  }]);
	  return TransitionItem;
	}(_react.Component);
	
	TransitionItem.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? TransitionItem.propTypes = {
	  children: _propTypes2.default.node,
	  style: _propTypes2.default.object
	} : void 0;
	
	
	function getStyles(props, context) {
	  var autoScrollBodyContent = props.autoScrollBodyContent,
	      open = props.open;
	  var _context$muiTheme = context.muiTheme,
	      _context$muiTheme$bas = _context$muiTheme.baseTheme,
	      spacing = _context$muiTheme$bas.spacing,
	      palette = _context$muiTheme$bas.palette,
	      dialog = _context$muiTheme.dialog,
	      zIndex = _context$muiTheme.zIndex;
	
	
	  var gutter = spacing.desktopGutter;
	  var borderScroll = '1px solid ' + palette.borderColor;
	
	  return {
	    root: {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      zIndex: zIndex.dialog,
	      top: 0,
	      left: open ? 0 : -10000,
	      width: '100%',
	      height: '100%',
	      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	    },
	    content: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: zIndex.dialog
	    },
	    actionsContainer: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 8,
	      width: '100%',
	      textAlign: 'right',
	      marginTop: autoScrollBodyContent ? -1 : 0,
	      borderTop: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    overlay: {
	      zIndex: zIndex.dialogOverlay
	    },
	    title: {
	      margin: 0,
	      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
	      color: palette.textColor,
	      fontSize: dialog.titleFontSize,
	      lineHeight: '32px',
	      fontWeight: 400,
	      marginBottom: autoScrollBodyContent ? -1 : 0,
	      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    body: {
	      fontSize: dialog.bodyFontSize,
	      color: dialog.bodyColor,
	      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
	      boxSizing: 'border-box',
	      overflowY: autoScrollBodyContent ? 'auto' : 'hidden'
	    }
	  };
	}
	
	var DialogInline = function (_Component2) {
	  (0, _inherits3.default)(DialogInline, _Component2);
	
	  function DialogInline() {
	    var _ref2;
	
	    var _temp2, _this2, _ret2;
	
	    (0, _classCallCheck3.default)(this, DialogInline);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DialogInline.__proto__ || (0, _getPrototypeOf2.default)(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
	      _this2.requestClose(false);
	    }, _this2.handleKeyUp = function (event) {
	      if ((0, _keycode2.default)(event) === 'esc') {
	        _this2.requestClose(false);
	      }
	    }, _this2.handleResize = function () {
	      _this2.positionDialog();
	    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
	  }
	
	  (0, _createClass3.default)(DialogInline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'positionDialog',
	    value: function positionDialog() {
	      var _props2 = this.props,
	          actions = _props2.actions,
	          autoDetectWindowHeight = _props2.autoDetectWindowHeight,
	          autoScrollBodyContent = _props2.autoScrollBodyContent,
	          bodyStyle = _props2.bodyStyle,
	          open = _props2.open,
	          repositionOnUpdate = _props2.repositionOnUpdate,
	          title = _props2.title;
	
	
	      if (!open) {
	        return;
	      }
	
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = _reactDom2.default.findDOMNode(this);
	      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;
	
	      // Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';
	
	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;
	
	      // Vertically center the dialog window, but make sure it doesn't
	      // transition to that position.
	      if (repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }
	
	      // Force a height if the dialog is taller than clientHeight
	      if (autoDetectWindowHeight || autoScrollBodyContent) {
	        var styles = getStyles(this.props, this.context);
	        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	        var maxDialogContentHeight = clientHeight - 2 * 64;
	
	        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;
	
	        if (_react2.default.Children.count(actions)) {
	          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
	        }
	
	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(buttonClicked) {
	      if (!buttonClicked && this.props.modal) {
	        return;
	      }
	
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(!!buttonClicked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          actions = _props3.actions,
	          actionsContainerClassName = _props3.actionsContainerClassName,
	          actionsContainerStyle = _props3.actionsContainerStyle,
	          bodyClassName = _props3.bodyClassName,
	          bodyStyle = _props3.bodyStyle,
	          children = _props3.children,
	          className = _props3.className,
	          contentClassName = _props3.contentClassName,
	          contentStyle = _props3.contentStyle,
	          overlayClassName = _props3.overlayClassName,
	          overlayStyle = _props3.overlayStyle,
	          open = _props3.open,
	          titleClassName = _props3.titleClassName,
	          titleStyle = _props3.titleStyle,
	          title = _props3.title,
	          style = _props3.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      styles.root = (0, _simpleAssign2.default)(styles.root, style);
	      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
	      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
	      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
	      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);
	
	      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
	        'div',
	        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
	        _react2.default.Children.toArray(actions)
	      );
	
	      var titleElement = title;
	      if (_react2.default.isValidElement(title)) {
	        titleElement = _react2.default.cloneElement(title, {
	          className: title.props.className || titleClassName,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
	        });
	      } else if (typeof title === 'string') {
	        titleElement = _react2.default.createElement(
	          'h3',
	          { className: titleClassName, style: prepareStyles(styles.title) },
	          title
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles(styles.root) },
	        open && _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyUp: this.handleKeyUp,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          {
	            component: 'div',
	            ref: 'dialogWindow',
	            transitionAppear: true,
	            transitionAppearTimeout: 450,
	            transitionEnter: true,
	            transitionEnterTimeout: 450
	          },
	          open && _react2.default.createElement(
	            TransitionItem,
	            {
	              className: contentClassName,
	              style: styles.content
	            },
	            _react2.default.createElement(
	              _Paper2.default,
	              { zDepth: 4 },
	              titleElement,
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: 'dialogContent',
	                  className: bodyClassName,
	                  style: prepareStyles(styles.body)
	                },
	                children
	              ),
	              actionsContainer
	            )
	          )
	        ),
	        _react2.default.createElement(_Overlay2.default, {
	          show: open,
	          className: overlayClassName,
	          style: styles.overlay,
	          onTouchTap: this.handleTouchTapOverlay
	        })
	      );
	    }
	  }]);
	  return DialogInline;
	}(_react.Component);
	
	DialogInline.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? DialogInline.propTypes = {
	  actions: _propTypes2.default.node,
	  actionsContainerClassName: _propTypes2.default.string,
	  actionsContainerStyle: _propTypes2.default.object,
	  autoDetectWindowHeight: _propTypes2.default.bool,
	  autoScrollBodyContent: _propTypes2.default.bool,
	  bodyClassName: _propTypes2.default.string,
	  bodyStyle: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  contentClassName: _propTypes2.default.string,
	  contentStyle: _propTypes2.default.object,
	  modal: _propTypes2.default.bool,
	  onRequestClose: _propTypes2.default.func,
	  open: _propTypes2.default.bool.isRequired,
	  overlayClassName: _propTypes2.default.string,
	  overlayStyle: _propTypes2.default.object,
	  repositionOnUpdate: _propTypes2.default.bool,
	  style: _propTypes2.default.object,
	  title: _propTypes2.default.node,
	  titleClassName: _propTypes2.default.string,
	  titleStyle: _propTypes2.default.object
	} : void 0;
	
	var Dialog = function (_Component3) {
	  (0, _inherits3.default)(Dialog, _Component3);
	
	  function Dialog() {
	    var _ref3;
	
	    var _temp3, _this3, _ret3;
	
	    (0, _classCallCheck3.default)(this, Dialog);
	
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
	      return _react2.default.createElement(DialogInline, _this3.props);
	    }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
	  }
	
	  (0, _createClass3.default)(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	    }
	  }]);
	  return Dialog;
	}(_react.Component);
	
	Dialog.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	Dialog.defaultProps = {
	  autoDetectWindowHeight: true,
	  autoScrollBodyContent: false,
	  modal: false,
	  repositionOnUpdate: true
	};
	 true ? Dialog.propTypes = {
	  /**
	   * Action buttons to display below the Dialog content (`children`).
	   * This property accepts either a React element, or an array of React elements.
	   */
	  actions: _propTypes2.default.node,
	  /**
	   * The `className` to add to the actions container's root element.
	   */
	  actionsContainerClassName: _propTypes2.default.string,
	  /**
	   * Overrides the inline-styles of the actions container's root element.
	   */
	  actionsContainerStyle: _propTypes2.default.object,
	  /**
	   * If set to true, the height of the `Dialog` will be auto detected. A max height
	   * will be enforced so that the content does not extend beyond the viewport.
	   */
	  autoDetectWindowHeight: _propTypes2.default.bool,
	  /**
	   * If set to true, the body content of the `Dialog` will be scrollable.
	   */
	  autoScrollBodyContent: _propTypes2.default.bool,
	  /**
	   * The `className` to add to the content's root element under the title.
	   */
	  bodyClassName: _propTypes2.default.string,
	  /**
	   * Overrides the inline-styles of the content's root element under the title.
	   */
	  bodyStyle: _propTypes2.default.object,
	  /**
	   * The contents of the `Dialog`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The `className` to add to the content container.
	   */
	  contentClassName: _propTypes2.default.string,
	  /**
	   * Overrides the inline-styles of the content container.
	   */
	  contentStyle: _propTypes2.default.object,
	  /**
	   * Force the user to use one of the actions in the `Dialog`.
	   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	   */
	  modal: _propTypes2.default.bool,
	  /**
	   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	   *
	   * @param {bool} buttonClicked Determines whether a button click triggered this request.
	   */
	  onRequestClose: _propTypes2.default.func,
	  /**
	   * Controls whether the Dialog is opened or not.
	   */
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayClassName: _propTypes2.default.string,
	  /**
	   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	   */
	  repositionOnUpdate: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	   */
	  title: _propTypes2.default.node,
	  /**
	   * The `className` to add to the title's root container element.
	   */
	  titleClassName: _propTypes2.default.string,
	  /**
	   * Overrides the inline-styles of the title's root container element.
	   */
	  titleStyle: _propTypes2.default.object
	} : void 0;
	exports.default = Dialog;

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _AutoLockScrolling = __webpack_require__(568);
	
	var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var overlay = context.muiTheme.overlay;
	
	
	  var style = {
	    root: {
	      position: 'fixed',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: '-100%',
	      opacity: 0,
	      backgroundColor: overlay.backgroundColor,
	      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
	
	      // Two ways to promote overlay to its own render layer
	      willChange: 'opacity',
	      transform: 'translateZ(0)',
	
	      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    }
	  };
	
	  if (props.show) {
	    (0, _simpleAssign2.default)(style.root, {
	      left: 0,
	      opacity: 1,
	      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    });
	  }
	
	  return style;
	}
	
	var Overlay = function (_Component) {
	  (0, _inherits3.default)(Overlay, _Component);
	
	  function Overlay() {
	    (0, _classCallCheck3.default)(this, Overlay);
	    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Overlay, [{
	    key: 'setOpacity',
	    value: function setOpacity(opacity) {
	      this.refs.overlay.style.opacity = opacity;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          autoLockScrolling = _props.autoLockScrolling,
	          show = _props.show,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
	      );
	    }
	  }]);
	  return Overlay;
	}(_react.Component);
	
	Overlay.defaultProps = {
	  autoLockScrolling: true,
	  style: {},
	  transitionEnabled: true
	};
	Overlay.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Overlay.propTypes = {
	  autoLockScrolling: _propTypes2.default.bool,
	  show: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  transitionEnabled: _propTypes2.default.bool
	} : void 0;
	exports.default = Overlay;

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var originalBodyOverflow = null;
	var lockingCounter = 0;
	
	var AutoLockScrolling = function (_Component) {
	  (0, _inherits3.default)(AutoLockScrolling, _Component);
	
	  function AutoLockScrolling() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AutoLockScrolling);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoLockScrolling.__proto__ || (0, _getPrototypeOf2.default)(AutoLockScrolling)).call.apply(_ref, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(AutoLockScrolling, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.lock === true) {
	        this.preventScrolling();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.lock !== nextProps.lock) {
	        if (nextProps.lock) {
	          this.preventScrolling();
	        } else {
	          this.allowScrolling();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.allowScrolling();
	    }
	
	    // force to only lock/unlock once
	
	  }, {
	    key: 'preventScrolling',
	    value: function preventScrolling() {
	      if (this.locked === true) {
	        return;
	      }
	
	      lockingCounter = lockingCounter + 1;
	      this.locked = true;
	
	      // only lock the first time the component is mounted.
	      if (lockingCounter === 1) {
	        var body = document.getElementsByTagName('body')[0];
	        originalBodyOverflow = body.style.overflow;
	        body.style.overflow = 'hidden';
	      }
	    }
	  }, {
	    key: 'allowScrolling',
	    value: function allowScrolling() {
	      if (this.locked === true) {
	        lockingCounter = lockingCounter - 1;
	        this.locked = false;
	      }
	
	      if (lockingCounter === 0 && originalBodyOverflow !== null) {
	        var body = document.getElementsByTagName('body')[0];
	        body.style.overflow = originalBodyOverflow || '';
	        originalBodyOverflow = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return AutoLockScrolling;
	}(_react.Component);
	
	 true ? AutoLockScrolling.propTypes = {
	  lock: _propTypes2.default.bool.isRequired
	} : void 0;
	exports.default = AutoLockScrolling;

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FlatButton = __webpack_require__(570);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FlatButton2.default;

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _childUtils = __webpack_require__(455);
	
	var _colorManipulator = __webpack_require__(392);
	
	var _EnhancedButton = __webpack_require__(454);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FlatButtonLabel = __webpack_require__(571);
	
	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (true) {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	var FlatButton = function (_Component) {
	  (0, _inherits3.default)(FlatButton, _Component);
	
	  function FlatButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FlatButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FlatButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({
	          hovered: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          children = _props.children,
	          disabled = _props.disabled,
	          fullWidth = _props.fullWidth,
	          hoverColor = _props.hoverColor,
	          icon = _props.icon,
	          label = _props.label,
	          labelStyle = _props.labelStyle,
	          labelPosition = _props.labelPosition,
	          primary = _props.primary,
	          rippleColor = _props.rippleColor,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
	      var _context$muiTheme = this.context.muiTheme,
	          borderRadius = _context$muiTheme.borderRadius,
	          _context$muiTheme$but = _context$muiTheme.button,
	          buttonHeight = _context$muiTheme$but.height,
	          buttonMinWidth = _context$muiTheme$but.minWidth,
	          buttonTextTransform = _context$muiTheme$but.textTransform,
	          _context$muiTheme$fla = _context$muiTheme.flatButton,
	          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
	          buttonColor = _context$muiTheme$fla.color,
	          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
	          fontSize = _context$muiTheme$fla.fontSize,
	          fontWeight = _context$muiTheme$fla.fontWeight,
	          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
	          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
	          textColor = _context$muiTheme$fla.textColor,
	          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
	          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;
	
	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
	
	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: fullWidth ? '100%' : buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: borderRadius,
	        userSelect: 'none',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);
	
	      var iconCloned = void 0;
	      var labelStyleIcon = {};
	
	      if (icon) {
	        var iconStyles = (0, _simpleAssign2.default)({
	          verticalAlign: 'middle',
	          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	          marginRight: label && labelPosition === 'before' ? 12 : 0
	        }, icon.props.style);
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: icon.props.color || mergedRootStyles.color,
	          style: iconStyles
	        });
	
	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);
	
	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	  return FlatButton;
	}(_react.Component);
	
	FlatButton.muiName = 'FlatButton';
	FlatButton.defaultProps = {
	  disabled: false,
	  fullWidth: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The element to use as the container for the FlatButton. Either a string to
	   * use a DOM element or a ReactElement. This is useful for wrapping the
	   * FlatButton in a custom Link component. If a ReactElement is given, ensure
	   * that it passes all of its given props through to the underlying DOM
	   * element and renders its children prop for proper integration.
	   */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _propTypes2.default.string,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _propTypes2.default.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FlatButton;

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}
	
	var FlatButtonLabel = function (_Component) {
	  (0, _inherits3.default)(FlatButtonLabel, _Component);
	
	  function FlatButtonLabel() {
	    (0, _classCallCheck3.default)(this, FlatButtonLabel);
	    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          label = _props.label,
	          style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	  return FlatButtonLabel;
	}(_react.Component);
	
	FlatButtonLabel.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? FlatButtonLabel.propTypes = {
	  label: _propTypes2.default.node,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FlatButtonLabel;

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Drawer = __webpack_require__(573);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Drawer2.default;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(60);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(499);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(458);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _autoPrefix = __webpack_require__(461);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(452);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(567);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _propTypes3 = __webpack_require__(453);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var openNavEventHandler = null;
	
	var Drawer = function (_Component) {
	  (0, _inherits3.default)(Drawer, _Component);
	
	  function Drawer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Drawer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
	      event.preventDefault();
	      _this.close('clickaway');
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
	        _this.close('escape');
	      }
	    }, _this.onBodyTouchStart = function (event) {
	      var swipeAreaWidth = _this.props.swipeAreaWidth;
	
	      var touchStartX = event.touches[0].pageX;
	      var touchStartY = event.touches[0].pageY;
	
	      // Open only if swiping from far left (or right) while closed
	      if (swipeAreaWidth !== null && !_this.state.open) {
	        if (_this.props.openSecondary) {
	          // If openSecondary is true calculate from the far right
	          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
	        } else {
	          // If openSecondary is false calculate from the far left
	          if (touchStartX > swipeAreaWidth) return;
	        }
	      }
	
	      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
	        return;
	      }
	
	      _this.maybeSwiping = true;
	      _this.touchStartX = touchStartX;
	      _this.touchStartY = touchStartY;
	
	      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _this.onBodyTouchMove = function (event) {
	      var currentX = event.touches[0].pageX;
	      var currentY = event.touches[0].pageY;
	
	      if (_this.state.swiping) {
	        event.preventDefault();
	        _this.setPosition(_this.getTranslateX(currentX));
	      } else if (_this.maybeSwiping) {
	        var dXAbs = Math.abs(currentX - _this.touchStartX);
	        var dYAbs = Math.abs(currentY - _this.touchStartY);
	        // If the user has moved his thumb ten pixels in either direction,
	        // we can safely make an assumption about whether he was intending
	        // to swipe or scroll.
	        var threshold = 10;
	
	        if (dXAbs > threshold && dYAbs <= threshold) {
	          _this.swipeStartX = currentX;
	          _this.setState({
	            swiping: _this.state.open ? 'closing' : 'opening'
	          });
	          _this.setPosition(_this.getTranslateX(currentX));
	        } else if (dXAbs <= threshold && dYAbs > threshold) {
	          _this.onBodyTouchEnd();
	        }
	      }
	    }, _this.onBodyTouchEnd = function (event) {
	      if (_this.state.swiping) {
	        var currentX = event.changedTouches[0].pageX;
	        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();
	
	        _this.maybeSwiping = false;
	        var swiping = _this.state.swiping;
	        _this.setState({
	          swiping: null
	        });
	
	        // We have to open or close after setting swiping to null,
	        // because only then CSS transition is enabled.
	        if (translateRatio > 0.5) {
	          if (swiping === 'opening') {
	            _this.setPosition(_this.getMaxTranslateX());
	          } else {
	            _this.close('swipe');
	          }
	        } else {
	          if (swiping === 'opening') {
	            _this.open('swipe');
	          } else {
	            _this.setPosition(0);
	          }
	        }
	      } else {
	        _this.maybeSwiping = false;
	      }
	
	      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Drawer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.maybeSwiping = false;
	      this.touchStartX = null;
	      this.touchStartY = null;
	      this.swipeStartX = null;
	
	      this.setState({
	        open: this.props.open !== null ? this.props.open : this.props.docked,
	        swiping: null
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If controlled then the open prop takes precedence.
	      if (nextProps.open !== null) {
	        this.setState({
	          open: nextProps.open
	        });
	        // Otherwise, if docked is changed, change the open state for when uncontrolled.
	      } else if (this.props.docked !== nextProps.docked) {
	        this.setState({
	          open: nextProps.docked
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.disableSwipeHandling();
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var muiTheme = this.context.muiTheme;
	      var theme = muiTheme.drawer;
	
	      var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());
	
	      var styles = {
	        root: {
	          height: '100%',
	          width: this.getTranslatedWidth() || theme.width,
	          position: 'fixed',
	          zIndex: muiTheme.zIndex.drawer,
	          left: 0,
	          top: 0,
	          transform: 'translate(' + x + 'px, 0)',
	          transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
	          backgroundColor: theme.color,
	          overflow: 'auto',
	          WebkitOverflowScrolling: 'touch' },
	        overlay: {
	          zIndex: muiTheme.zIndex.drawerOverlay,
	          pointerEvents: this.state.open ? 'auto' : 'none' },
	        rootWhenOpenRight: {
	          left: 'auto',
	          right: 0
	        }
	      };
	
	      return styles;
	    }
	  }, {
	    key: 'shouldShow',
	    value: function shouldShow() {
	      return this.state.open || !!this.state.swiping; // component is swiping
	    }
	  }, {
	    key: 'close',
	    value: function close(reason) {
	      if (this.props.open === null) this.setState({ open: false });
	      if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
	      return this;
	    }
	  }, {
	    key: 'open',
	    value: function open(reason) {
	      if (this.props.open === null) this.setState({ open: true });
	      if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
	      return this;
	    }
	  }, {
	    key: 'getTranslatedWidth',
	    value: function getTranslatedWidth() {
	      if (typeof this.props.width === 'string') {
	        if (!/^\d+(\.\d+)?%$/.test(this.props.width)) {
	          throw new Error('Not a valid percentage format.');
	        }
	        var width = parseFloat(this.props.width) / 100.0;
	        // We are doing our best on the Server to render a consistent UI, hence the
	        // default value of 10000
	        return window ? width * window.innerWidth : 10000;
	      } else {
	        return this.props.width;
	      }
	    }
	  }, {
	    key: 'getMaxTranslateX',
	    value: function getMaxTranslateX() {
	      var width = this.getTranslatedWidth() || this.context.muiTheme.drawer.width;
	      return width + 10;
	    }
	  }, {
	    key: 'getTranslateMultiplier',
	    value: function getTranslateMultiplier() {
	      return this.props.openSecondary ? 1 : -1;
	    }
	  }, {
	    key: 'enableSwipeHandling',
	    value: function enableSwipeHandling() {
	      if (!this.props.docked) {
	        document.body.addEventListener('touchstart', this.onBodyTouchStart);
	        if (!openNavEventHandler) {
	          openNavEventHandler = this.onBodyTouchStart;
	        }
	      } else {
	        this.disableSwipeHandling();
	      }
	    }
	  }, {
	    key: 'disableSwipeHandling',
	    value: function disableSwipeHandling() {
	      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
	      if (openNavEventHandler === this.onBodyTouchStart) {
	        openNavEventHandler = null;
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(translateX) {
	      var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
	      var transformCSS = 'translate(' + this.getTranslateMultiplier() * translateX + 'px, 0)';
	      this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
	      _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
	    }
	  }, {
	    key: 'getTranslateX',
	    value: function getTranslateX(currentX) {
	      return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          containerClassName = _props.containerClassName,
	          containerStyle = _props.containerStyle,
	          docked = _props.docked,
	          openSecondary = _props.openSecondary,
	          overlayClassName = _props.overlayClassName,
	          overlayStyle = _props.overlayStyle,
	          style = _props.style,
	          zDepth = _props.zDepth;
	
	
	      var styles = this.getStyles();
	
	      var overlay = void 0;
	      if (!docked) {
	        overlay = _react2.default.createElement(_Overlay2.default, {
	          ref: 'overlay',
	          show: this.shouldShow(),
	          className: overlayClassName,
	          style: (0, _simpleAssign2.default)(styles.overlay, overlayStyle),
	          transitionEnabled: !this.state.swiping,
	          onTouchTap: this.handleTouchTapOverlay
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          style: style
	        },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
	        overlay,
	        _react2.default.createElement(
	          _Paper2.default,
	          {
	            ref: 'clickAwayableElement',
	            zDepth: zDepth,
	            rounded: false,
	            transitionEnabled: !this.state.swiping,
	            className: containerClassName,
	            style: (0, _simpleAssign2.default)(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
	          },
	          children
	        )
	      );
	    }
	  }]);
	  return Drawer;
	}(_react.Component);
	
	Drawer.defaultProps = {
	  disableSwipeToOpen: false,
	  docked: true,
	  open: null,
	  openSecondary: false,
	  swipeAreaWidth: 30,
	  width: null,
	  zDepth: 2
	};
	Drawer.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Drawer.propTypes = {
	  /**
	   * The contents of the `Drawer`
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The CSS class name of the container element.
	   */
	  containerClassName: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _propTypes2.default.object,
	  /**
	   * If true, swiping sideways when the `Drawer` is closed will not open it.
	   */
	  disableSwipeToOpen: _propTypes2.default.bool,
	  /**
	   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
	   * clicking on a menu item will not close the `Drawer`.
	   */
	  docked: _propTypes2.default.bool,
	  /**
	   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
	   *
	   * @param {boolean} open If true, the `Drawer` was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
	   * 'escape' (on escape key press), and 'swipe' for close requests.
	   */
	  onRequestChange: _propTypes2.default.func,
	  /**
	   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
	   * into a controlled component.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * If true, the `Drawer` is positioned to open from the opposite side.
	   */
	  openSecondary: _propTypes2.default.bool,
	  /**
	   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayClassName: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The width of the left most (or right most) area in pixels where the `Drawer` can be
	   * swiped open from. Setting this to `null` spans that area to the entire page
	   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
	   * swipeable `Tabs`: use at your own risk).
	   */
	  swipeAreaWidth: _propTypes2.default.number,
	  /**
	   * The width of the `Drawer` in pixels or percentage in string format ex. `50%` to fill
	   * half of the window or `100%` and so on. Defaults to using the values from theme.
	   */
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  /**
	   * The zDepth of the `Drawer`.
	   */
	  zDepth: _propTypes4.default.zDepth
	
	} : void 0;
	exports.default = Drawer;

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Avatar = __webpack_require__(575);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Avatar2.default;

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(448);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(449);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var backgroundColor = props.backgroundColor,
	      color = props.color,
	      size = props.size;
	  var avatar = context.muiTheme.avatar;
	
	
	  var styles = {
	    root: {
	      color: color || avatar.color,
	      backgroundColor: backgroundColor || avatar.backgroundColor,
	      userSelect: 'none',
	      display: 'inline-flex',
	      alignItems: 'center',
	      justifyContent: 'center',
	      fontSize: size / 2,
	      borderRadius: '50%',
	      height: size,
	      width: size
	    },
	    icon: {
	      color: color || avatar.color,
	      width: size * 0.6,
	      height: size * 0.6,
	      fontSize: size * 0.6,
	      margin: size * 0.2
	    }
	  };
	
	  return styles;
	}
	
	var Avatar = function (_Component) {
	  (0, _inherits3.default)(Avatar, _Component);
	
	  function Avatar() {
	    (0, _classCallCheck3.default)(this, Avatar);
	    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Avatar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          icon = _props.icon,
	          src = _props.src,
	          style = _props.style,
	          className = _props.className,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      if (src) {
	        return _react2.default.createElement('img', (0, _extends3.default)({
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }, other, {
	          src: src,
	          className: className
	        }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          (0, _extends3.default)({}, other, {
	            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
	            className: className
	          }),
	          icon && _react2.default.cloneElement(icon, {
	            color: styles.icon.color,
	            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	          }),
	          this.props.children
	        );
	      }
	    }
	  }]);
	  return Avatar;
	}(_react.Component);
	
	Avatar.muiName = 'Avatar';
	Avatar.defaultProps = {
	  size: 40
	};
	Avatar.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 true ? Avatar.propTypes = {
	  /**
	   * The backgroundColor of the avatar. Does not apply to image avatars.
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Can be used, for instance, to render a letter inside the avatar.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root `div` or `img` element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The icon or letter's color.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the SvgIcon or FontIcon to be used inside the avatar.
	   */
	  icon: _propTypes2.default.element,
	  /**
	   * This is the size of the avatar in pixels.
	   */
	  size: _propTypes2.default.number,
	  /**
	   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	   */
	  src: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = Avatar;

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
	  );
	};
	NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
	NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
	NavigationArrowDropDown.muiName = 'SvgIcon';
	
	exports.default = NavigationArrowDropDown;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _map = __webpack_require__(578);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(60);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactMotion = __webpack_require__(589);
	
	var _immutabilityHelper = __webpack_require__(604);
	
	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);
	
	var _reactSaveRefs = __webpack_require__(605);
	
	var _reactSaveRefs2 = _interopRequireDefault(_reactSaveRefs);
	
	var _DragHandle = __webpack_require__(639);
	
	var _DragHandle2 = _interopRequireDefault(_DragHandle);
	
	var _OnUpdate = __webpack_require__(640);
	
	var _OnUpdate2 = _interopRequireDefault(_OnUpdate);
	
	var _MoveContainer = __webpack_require__(641);
	
	var _MoveContainer2 = _interopRequireDefault(_MoveContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_HEIGHT = { natural: 200, drag: 30 };
	
	function getScrollSpeed(distance, speed, size) {
	  // If distance is zero, then the result is the max speed. Otherwise,
	  // the result tapers toward zero as it gets closer to the opposite
	  // edge of the region.
	  return Math.round(speed - speed / size * distance);
	}
	
	var DraggableList = function (_React$Component) {
	  (0, _inherits3.default)(DraggableList, _React$Component);
	
	  function DraggableList(props) {
	    (0, _classCallCheck3.default)(this, DraggableList);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (DraggableList.__proto__ || (0, _getPrototypeOf2.default)(DraggableList)).call(this, props));
	
	    _this._itemRefs = new _map2.default();
	    _this._heights = new _map2.default();
	
	    _this._handleTouchMove = function (e) {
	      e.preventDefault();
	      _this._handleMouseMove(e.touches[0]);
	    };
	
	    _this._handleMouseMove = function (_ref) {
	      var pageY = _ref.pageY,
	          clientY = _ref.clientY;
	      var _this$props = _this.props,
	          padding = _this$props.padding,
	          autoScrollMaxSpeed = _this$props.autoScrollMaxSpeed,
	          autoScrollRegionSize = _this$props.autoScrollRegionSize;
	      var _this$state = _this.state,
	          list = _this$state.list,
	          dragging = _this$state.dragging,
	          lastDrag = _this$state.lastDrag;
	
	      if (!dragging || !lastDrag) return;
	
	      var containerEl = _this._getContainer();
	      var dragIndex = _this._getDragIndex();
	      var naturalPosition = _this._getDistanceDuringDrag(lastDrag, dragIndex);
	
	      clearInterval(_this._autoScrollerTimer);
	
	      // If the user has the mouse near the top or bottom of the container and
	      // not at the end of the list, then autoscroll.
	      if (dragIndex !== 0 && dragIndex !== list.length - 1) {
	        var scrollSpeed = 0;
	
	        var containerRect = containerEl && containerEl !== document.body && containerEl.getBoundingClientRect ? containerEl.getBoundingClientRect() : { top: 0, bottom: Infinity };
	
	        // Get the lowest of the screen top and the container top.
	        var top = Math.max(0, containerRect.top);
	
	        var distanceFromTop = clientY - top;
	        if (distanceFromTop > 0 && distanceFromTop < autoScrollRegionSize) {
	          scrollSpeed = -1 * getScrollSpeed(distanceFromTop, autoScrollMaxSpeed, autoScrollRegionSize);
	        } else {
	          // Get the lowest of the screen bottom and the container bottom.
	          var bottom = Math.min(window.innerHeight, containerRect.bottom);
	          var distanceFromBottom = bottom - clientY;
	          if (distanceFromBottom > 0 && distanceFromBottom < autoScrollRegionSize) {
	            scrollSpeed = getScrollSpeed(distanceFromBottom, autoScrollMaxSpeed, autoScrollRegionSize);
	          }
	        }
	
	        if (scrollSpeed !== 0) {
	          _this._scrollContainer(scrollSpeed);
	          _this._autoScrollerTimer = setTimeout(function () {
	            _this._handleMouseMove({
	              pageY: pageY + (containerEl === document.body ? scrollSpeed : 0),
	              clientY: clientY
	            });
	          }, 16);
	        }
	      }
	
	      var containerScroll = !containerEl || containerEl === document.body ? 0 : containerEl.scrollTop;
	      var mouseY = pageY - lastDrag.mouseOffset + containerScroll;
	
	      var movementFromNatural = mouseY - naturalPosition;
	      // 1 down, -1 up, 0 neither
	      var direction = movementFromNatural > 0 ? 1 : movementFromNatural < 0 ? -1 : 0;
	      var newIndex = dragIndex;
	      if (direction !== 0) {
	        var keyFn = _this._getKeyFn();
	        var reach = Math.abs(movementFromNatural);
	        for (var i = dragIndex + direction; i < list.length && i >= 0; i += direction) {
	          var iDragHeight = (_this._heights.get(keyFn(list[i])) || DEFAULT_HEIGHT).drag;
	          if (reach < iDragHeight / 2 + padding) break;
	          reach -= iDragHeight + padding;
	          newIndex = i;
	        }
	      }
	
	      var newList = list;
	      if (newIndex !== dragIndex) {
	        newList = (0, _immutabilityHelper2.default)(list, {
	          $splice: [[dragIndex, 1], [newIndex, 0, list[dragIndex]]]
	        });
	      }
	
	      _this.setState({ lastDrag: (0, _extends3.default)({}, lastDrag, { mouseY: mouseY }), list: newList });
	    };
	
	    _this._handleMouseUp = function () {
	      clearInterval(_this._autoScrollerTimer);
	      window.removeEventListener('mouseup', _this._handleMouseUp);
	      window.removeEventListener('touchend', _this._handleMouseUp);
	      window.removeEventListener('touchmove', _this._handleTouchMove);
	      window.removeEventListener('mousemove', _this._handleMouseMove);
	
	      if (document.documentElement) document.documentElement.style.cursor = '';
	      _this._lastScrollDelta = 0;
	
	      var onMoveEnd = _this.props.onMoveEnd;
	      var _this$state2 = _this.state,
	          dragging = _this$state2.dragging,
	          lastDrag = _this$state2.lastDrag,
	          list = _this$state2.list;
	
	      if (dragging && lastDrag && onMoveEnd) {
	        var dragIndex = _this._getDragIndex();
	        if (lastDrag.startIndex !== dragIndex) {
	          onMoveEnd(list, list[dragIndex], lastDrag.startIndex, dragIndex);
	        }
	      }
	      _this.setState({ dragging: false });
	    };
	
	    _this._lastScrollDelta = 0;
	
	    _this.state = {
	      list: props.list,
	      useAbsolutePositioning: false,
	      dragging: false,
	      lastDrag: null
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(DraggableList, [{
	    key: 'getItemInstance',
	    value: function getItemInstance(key) {
	      var ref = this._itemRefs.get(key);
	      if (!ref) throw new Error('key not found');
	      return ref.getTemplate();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _state = this.state,
	          dragging = _state.dragging,
	          lastDrag = _state.lastDrag;
	      var list = newProps.list;
	
	
	      check: if (lastDrag) {
	        var newDragIndex = void 0;
	        try {
	          newDragIndex = this._getDragIndex(list);
	        } catch (err) {
	          dragging = false;
	          lastDrag = null;
	          break check;
	        }
	
	        if (dragging) {
	          var currentDragIndex = this._getDragIndex();
	          if (currentDragIndex !== newDragIndex) {
	            // Let's change the list so that the new drag index will be the same as
	            // the current so that the dragged item doesn't jump on the screen.
	            list = (0, _immutabilityHelper2.default)(list, {
	              $splice: [[newDragIndex, 1], [currentDragIndex, 0, list[newDragIndex]]]
	            });
	          }
	        }
	      }
	      this.setState({ dragging: dragging, lastDrag: lastDrag, list: list });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._handleMouseUp();
	    }
	  }, {
	    key: '_handleTouchStart',
	    value: function _handleTouchStart(itemKey, pressY, e) {
	      event.stopPropagation();
	      this._handleStartDrag(itemKey, pressY, e.touches[0].pageY);
	    }
	  }, {
	    key: '_handleMouseDown',
	    value: function _handleMouseDown(itemKey, pressY, event) {
	      event.preventDefault();
	      this._handleStartDrag(itemKey, pressY, event.pageY);
	    }
	  }, {
	    key: '_handleStartDrag',
	    value: function _handleStartDrag(itemKey, pressY, pageY) {
	      var _this2 = this;
	
	      if (document.documentElement) document.documentElement.style.cursor = 'move';
	      window.addEventListener('mouseup', this._handleMouseUp);
	      window.addEventListener('touchend', this._handleMouseUp);
	      window.addEventListener('touchmove', this._handleTouchMove);
	      window.addEventListener('mousemove', this._handleMouseMove);
	
	      // If an element has focus while we drag around the parent, some browsers
	      // try to scroll the parent element to keep the focused element in view.
	      // Stop that.
	      {
	        var listEl = (0, _reactDom.findDOMNode)(this);
	        if (!(listEl instanceof HTMLElement)) throw new Error('Should not happen');
	        if (listEl.contains && document.activeElement && listEl.contains(document.activeElement)) {
	          document.activeElement.blur();
	        }
	      }
	
	      var keyFn = this._getKeyFn();
	
	      if (this._heights.size === 0) {
	        this._heights = new _map2.default(this.state.list.map(function (item) {
	          var key = keyFn(item);
	          var containerRef = _this2._itemRefs.get(key);
	          var ref = containerRef ? containerRef.getTemplate() : null;
	          var refEl = ref ? (0, _reactDom.findDOMNode)(ref) : null;
	          var natural = refEl instanceof HTMLElement ? refEl.offsetHeight : DEFAULT_HEIGHT.natural;
	          var drag = ref && typeof ref.getDragHeight === 'function' && ref.getDragHeight() || natural;
	          return [key, { natural: natural, drag: drag }];
	        }));
	      }
	
	      var itemIndex = this.state.list.map(keyFn).indexOf(itemKey);
	
	      var startY = pressY == null ? this._getDistance(0, itemIndex, false) : pressY;
	
	      var containerEl = this._getContainer();
	      var containerScroll = !containerEl || containerEl === document.body ? 0 : containerEl.scrollTop;
	
	      // Need to re-render once before we start dragging so that the `y` values
	      // are set using the correct _heights and then can animate from there.
	      this.forceUpdate(function () {
	        _this2.setState({
	          useAbsolutePositioning: true,
	          dragging: true,
	          lastDrag: {
	            itemKey: itemKey,
	            startIndex: itemIndex,
	            startListKeys: _this2.state.list.map(keyFn),
	            startY: startY,
	            mouseY: startY,
	            mouseOffset: pageY - startY + containerScroll
	          }
	        });
	      });
	    }
	  }, {
	    key: '_scrollContainer',
	    value: function _scrollContainer(delta) {
	      var containerEl = this._getContainer();
	      if (!containerEl) return;
	      if (window.scrollBy && containerEl === document.body) {
	        window.scrollBy(0, delta);
	      } else {
	        containerEl.scrollTop += delta;
	      }
	    }
	  }, {
	    key: '_adjustScrollAtEnd',
	    value: function _adjustScrollAtEnd(delta) {
	      var frameDelta = Math.round(delta - this._lastScrollDelta);
	      this._scrollContainer(frameDelta);
	      this._lastScrollDelta += frameDelta;
	    }
	  }, {
	    key: '_getDragIndex',
	    value: function _getDragIndex(list, lastDrag) {
	      if (!list) list = this.state.list;
	      if (!lastDrag) lastDrag = this.state.lastDrag;
	      if (!lastDrag) {
	        throw new Error('No drag happened');
	      }
	      var keyFn = this._getKeyFn();
	      var _lastDrag = lastDrag,
	          itemKey = _lastDrag.itemKey;
	
	      for (var i = 0, len = list.length; i < len; i++) {
	        if (keyFn(list[i]) === itemKey) {
	          return i;
	        }
	      }
	      throw new Error('Failed to find drag index');
	    }
	  }, {
	    key: '_getDistance',
	    value: function _getDistance(start, end, dragging) {
	      if (end < start) {
	        return -this._getDistance(end, start, dragging);
	      }
	
	      var padding = this.props.padding;
	      var list = this.state.list;
	
	      var keyFn = this._getKeyFn();
	      var distance = 0;
	      for (var i = start; i < end; i++) {
	        var height = this._heights.get(keyFn(list[i])) || DEFAULT_HEIGHT;
	        distance += (dragging ? height.drag : height.natural) + padding;
	      }
	      return distance;
	    }
	  }, {
	    key: '_getDistanceDuringDrag',
	    value: function _getDistanceDuringDrag(lastDrag, index) {
	      var keyFn = this._getKeyFn();
	      var list = this.state.list;
	
	
	      var offset = 0;
	      if (this._getDragIndex() < lastDrag.startIndex) {
	        var dragItemHeight = this._heights.get(lastDrag.itemKey) || DEFAULT_HEIGHT;
	        var newCenterHeight = this._heights.get(keyFn(list[lastDrag.startIndex])) || DEFAULT_HEIGHT;
	        offset = dragItemHeight.drag - newCenterHeight.drag;
	      }
	      return lastDrag.startY + offset + this._getDistance(lastDrag.startIndex, index, true);
	    }
	  }, {
	    key: '_getContainer',
	    value: function _getContainer() {
	      var container = this.props.container;
	
	      return container ? container() : null;
	    }
	  }, {
	    key: '_getKeyFn',
	    value: function _getKeyFn() {
	      var itemKey = this.props.itemKey;
	
	      return typeof itemKey === 'function' ? itemKey : function (x) {
	        return x[itemKey];
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          springConfig = _props.springConfig,
	          container = _props.container,
	          padding = _props.padding,
	          template = _props.template,
	          unsetZIndex = _props.unsetZIndex,
	          commonProps = _props.commonProps;
	      var _state2 = this.state,
	          list = _state2.list,
	          dragging = _state2.dragging,
	          lastDrag = _state2.lastDrag,
	          useAbsolutePositioning = _state2.useAbsolutePositioning;
	
	
	      var keyFn = this._getKeyFn();
	      var anySelected = (0, _reactMotion.spring)(dragging ? 1 : 0, springConfig);
	
	      var children = list.map(function (item, i) {
	        var key = keyFn(item);
	        var selectedStyle = dragging && lastDrag && lastDrag.itemKey === key ? {
	          itemSelected: (0, _reactMotion.spring)(1, springConfig),
	          y: lastDrag.mouseY
	        } : {
	          itemSelected: (0, _reactMotion.spring)(0, springConfig),
	          y: (useAbsolutePositioning ? _reactMotion.spring : function (x, ignored) {
	            return x;
	          })(dragging && lastDrag ? _this3._getDistanceDuringDrag(lastDrag, i) : _this3._getDistance(0, i, false), springConfig)
	        };
	        var style = (0, _extends3.default)({
	          anySelected: anySelected
	        }, selectedStyle);
	        var makeDragHandle = function makeDragHandle(el, getY) {
	          return _react2.default.createElement(
	            _DragHandle2.default,
	            {
	              onMouseDown: function onMouseDown(e) {
	                return _this3._handleMouseDown(key, getY(), e);
	              },
	              onTouchStart: function onTouchStart(e) {
	                return _this3._handleTouchStart(key, getY(), e);
	              }
	            },
	            el
	          );
	        };
	        var height = _this3._heights.get(key) || DEFAULT_HEIGHT;
	        return _react2.default.createElement(_reactMotion.Motion, {
	          style: style, key: key,
	          children: function children(_ref2) {
	            var itemSelected = _ref2.itemSelected,
	                anySelected = _ref2.anySelected,
	                y = _ref2.y;
	            return _react2.default.createElement(_MoveContainer2.default, {
	              ref: (0, _reactSaveRefs2.default)(_this3._itemRefs, key),
	              y: useAbsolutePositioning ? y : null,
	              template: template,
	              padding: padding,
	              item: item,
	              itemSelected: itemSelected,
	              anySelected: anySelected,
	              height: height,
	              zIndex: unsetZIndex && !useAbsolutePositioning ? 'auto' : lastDrag && lastDrag.itemKey === key ? list.length : i,
	              makeDragHandle: makeDragHandle,
	              commonProps: commonProps
	            });
	          }
	        });
	      });
	
	      var adjustScroll = 0;
	      if (!dragging && lastDrag && useAbsolutePositioning) {
	        var dragIndex = this._getDragIndex();
	        adjustScroll = (0, _reactMotion.spring)(this._getDistance(0, dragIndex, false) - lastDrag.mouseY, springConfig);
	      }
	
	      var fullContainerHeight = this._getDistance(0, list.length, false) + 'px';
	      return _react2.default.createElement(
	        'div',
	        { style: { position: 'relative' } },
	        _react2.default.createElement(_reactMotion.Motion, {
	          style: { adjustScroll: adjustScroll, anySelected: anySelected },
	          onRest: function onRest() {
	            if (!dragging) {
	              _this3._heights.clear();
	              _this3.setState({ useAbsolutePositioning: false });
	            }
	          },
	          children: function children(_ref3) {
	            var adjustScroll = _ref3.adjustScroll;
	            return _react2.default.createElement(
	              'div',
	              {
	                style: {
	                  display: useAbsolutePositioning ? 'block' : 'none',
	                  height: useAbsolutePositioning ? fullContainerHeight : '0px'
	                }
	              },
	              container && _react2.default.createElement(_OnUpdate2.default, { cb: function cb() {
	                  if (!dragging && lastDrag && useAbsolutePositioning) {
	                    _this3._adjustScrollAtEnd(adjustScroll);
	                  }
	                } })
	            );
	          }
	        }),
	        children
	      );
	    }
	  }]);
	  return DraggableList;
	}(_react2.default.Component);
	
	DraggableList.propTypes = {
	  itemKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
	  template: _propTypes2.default.func,
	  list: _propTypes2.default.array.isRequired,
	  onMoveEnd: _propTypes2.default.func,
	  container: _propTypes2.default.func,
	  springConfig: _propTypes2.default.object,
	  padding: _propTypes2.default.number,
	  unsetZIndex: _propTypes2.default.bool,
	  autoScrollMaxSpeed: _propTypes2.default.number.isRequired,
	  autoScrollRegionSize: _propTypes2.default.number.isRequired,
	  commonProps: _propTypes2.default.object
	};
	DraggableList.defaultProps = {
	  springConfig: { stiffness: 300, damping: 50 },
	  padding: 10,
	  unsetZIndex: false,
	  autoScrollMaxSpeed: 15,
	  autoScrollRegionSize: 30
	};
	exports.default = DraggableList;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0hFSUdIVCIsIm5hdHVyYWwiLCJkcmFnIiwiZ2V0U2Nyb2xsU3BlZWQiLCJkaXN0YW5jZSIsInNwZWVkIiwic2l6ZSIsIk1hdGgiLCJyb3VuZCIsIkRyYWdnYWJsZUxpc3QiLCJwcm9wcyIsIl9pdGVtUmVmcyIsIl9oZWlnaHRzIiwiX2hhbmRsZVRvdWNoTW92ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9oYW5kbGVNb3VzZU1vdmUiLCJ0b3VjaGVzIiwicGFnZVkiLCJjbGllbnRZIiwicGFkZGluZyIsImF1dG9TY3JvbGxNYXhTcGVlZCIsImF1dG9TY3JvbGxSZWdpb25TaXplIiwic3RhdGUiLCJsaXN0IiwiZHJhZ2dpbmciLCJsYXN0RHJhZyIsImNvbnRhaW5lckVsIiwiX2dldENvbnRhaW5lciIsImRyYWdJbmRleCIsIl9nZXREcmFnSW5kZXgiLCJuYXR1cmFsUG9zaXRpb24iLCJfZ2V0RGlzdGFuY2VEdXJpbmdEcmFnIiwiY2xlYXJJbnRlcnZhbCIsIl9hdXRvU2Nyb2xsZXJUaW1lciIsImxlbmd0aCIsInNjcm9sbFNwZWVkIiwiY29udGFpbmVyUmVjdCIsImRvY3VtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIkluZmluaXR5IiwibWF4IiwiZGlzdGFuY2VGcm9tVG9wIiwibWluIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJfc2Nyb2xsQ29udGFpbmVyIiwic2V0VGltZW91dCIsImNvbnRhaW5lclNjcm9sbCIsInNjcm9sbFRvcCIsIm1vdXNlWSIsIm1vdXNlT2Zmc2V0IiwibW92ZW1lbnRGcm9tTmF0dXJhbCIsImRpcmVjdGlvbiIsIm5ld0luZGV4Iiwia2V5Rm4iLCJfZ2V0S2V5Rm4iLCJyZWFjaCIsImFicyIsImkiLCJpRHJhZ0hlaWdodCIsImdldCIsIm5ld0xpc3QiLCIkc3BsaWNlIiwic2V0U3RhdGUiLCJfaGFuZGxlTW91c2VVcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImN1cnNvciIsIl9sYXN0U2Nyb2xsRGVsdGEiLCJvbk1vdmVFbmQiLCJzdGFydEluZGV4IiwidXNlQWJzb2x1dGVQb3NpdGlvbmluZyIsImtleSIsInJlZiIsIkVycm9yIiwiZ2V0VGVtcGxhdGUiLCJuZXdQcm9wcyIsImNoZWNrIiwibmV3RHJhZ0luZGV4IiwiZXJyIiwiY3VycmVudERyYWdJbmRleCIsIml0ZW1LZXkiLCJwcmVzc1kiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIl9oYW5kbGVTdGFydERyYWciLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdEVsIiwiSFRNTEVsZW1lbnQiLCJjb250YWlucyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibWFwIiwiaXRlbSIsImNvbnRhaW5lclJlZiIsInJlZkVsIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0RHJhZ0hlaWdodCIsIml0ZW1JbmRleCIsImluZGV4T2YiLCJzdGFydFkiLCJfZ2V0RGlzdGFuY2UiLCJmb3JjZVVwZGF0ZSIsInN0YXJ0TGlzdEtleXMiLCJkZWx0YSIsInNjcm9sbEJ5IiwiZnJhbWVEZWx0YSIsImxlbiIsInN0YXJ0IiwiZW5kIiwiaGVpZ2h0IiwiaW5kZXgiLCJvZmZzZXQiLCJkcmFnSXRlbUhlaWdodCIsIm5ld0NlbnRlckhlaWdodCIsImNvbnRhaW5lciIsIngiLCJzcHJpbmdDb25maWciLCJ0ZW1wbGF0ZSIsInVuc2V0WkluZGV4IiwiY29tbW9uUHJvcHMiLCJhbnlTZWxlY3RlZCIsImNoaWxkcmVuIiwic2VsZWN0ZWRTdHlsZSIsIml0ZW1TZWxlY3RlZCIsInkiLCJpZ25vcmVkIiwibWFrZURyYWdIYW5kbGUiLCJlbCIsImdldFkiLCJfaGFuZGxlTW91c2VEb3duIiwiX2hhbmRsZVRvdWNoU3RhcnQiLCJhZGp1c3RTY3JvbGwiLCJmdWxsQ29udGFpbmVySGVpZ2h0IiwicG9zaXRpb24iLCJjbGVhciIsImRpc3BsYXkiLCJfYWRqdXN0U2Nyb2xsQXRFbmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib2JqZWN0IiwibnVtYmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInN0aWZmbmVzcyIsImRhbXBpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEVBQUNDLFNBQVMsR0FBVixFQUFlQyxNQUFNLEVBQXJCLEVBQXZCOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsSUFBekMsRUFBK0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsU0FBT0MsS0FBS0MsS0FBTCxDQUFXSCxRQUFTQSxRQUFRQyxJQUFULEdBQWlCRixRQUFwQyxDQUFQO0FBQ0Q7O0lBcUNvQkssYTs7O0FBOEJuQix5QkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBLG9KQUNsQkEsS0FEa0I7O0FBQUEsVUFKMUJDLFNBSTBCLEdBSmMsbUJBSWQ7QUFBQSxVQUgxQkMsUUFHMEIsR0FIK0IsbUJBRy9COztBQUFBLFVBMkgxQkMsZ0JBM0gwQixHQTJIRyxVQUFDQyxDQUFELEVBQU87QUFDbENBLFFBQUVDLGNBQUY7QUFDQSxZQUFLQyxnQkFBTCxDQUFzQkYsRUFBRUcsT0FBRixDQUFVLENBQVYsQ0FBdEI7QUFDRCxLQTlIeUI7O0FBQUEsVUFnSTFCRCxnQkFoSTBCLEdBZ0lHLGdCQUFzQjtBQUFBLFVBQXBCRSxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxVQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFBQSx3QkFLN0MsTUFBS1QsS0FMd0M7QUFBQSxVQUUvQ1UsT0FGK0MsZUFFL0NBLE9BRitDO0FBQUEsVUFHL0NDLGtCQUgrQyxlQUcvQ0Esa0JBSCtDO0FBQUEsVUFJL0NDLG9CQUorQyxlQUkvQ0Esb0JBSitDO0FBQUEsd0JBTWQsTUFBS0MsS0FOUztBQUFBLFVBTTFDQyxJQU4wQyxlQU0xQ0EsSUFOMEM7QUFBQSxVQU1wQ0MsUUFOb0MsZUFNcENBLFFBTm9DO0FBQUEsVUFNMUJDLFFBTjBCLGVBTTFCQSxRQU4wQjs7QUFPakQsVUFBSSxDQUFDRCxRQUFELElBQWEsQ0FBQ0MsUUFBbEIsRUFBNEI7O0FBRTVCLFVBQU1DLGNBQWMsTUFBS0MsYUFBTCxFQUFwQjtBQUNBLFVBQU1DLFlBQVksTUFBS0MsYUFBTCxFQUFsQjtBQUNBLFVBQU1DLGtCQUFrQixNQUFLQyxzQkFBTCxDQUE0Qk4sUUFBNUIsRUFBc0NHLFNBQXRDLENBQXhCOztBQUVBSSxvQkFBYyxNQUFLQyxrQkFBbkI7O0FBRUE7QUFDQTtBQUNBLFVBQUlMLGNBQWMsQ0FBZCxJQUFtQkEsY0FBY0wsS0FBS1csTUFBTCxHQUFZLENBQWpELEVBQW9EO0FBQ2xELFlBQUlDLGNBQWMsQ0FBbEI7O0FBRUEsWUFBTUMsZ0JBQWdCVixlQUFlQSxnQkFBZ0JXLFNBQVNDLElBQXhDLElBQ3BCWixZQUFZYSxxQkFEUSxHQUVwQmIsWUFBWWEscUJBQVosRUFGb0IsR0FHcEIsRUFBQ0MsS0FBSyxDQUFOLEVBQVNDLFFBQVFDLFFBQWpCLEVBSEY7O0FBS0E7QUFDQSxZQUFNRixNQUFNbEMsS0FBS3FDLEdBQUwsQ0FBUyxDQUFULEVBQVlQLGNBQWNJLEdBQTFCLENBQVo7O0FBRUEsWUFBTUksa0JBQWtCMUIsVUFBUXNCLEdBQWhDO0FBQ0EsWUFBSUksa0JBQWtCLENBQWxCLElBQXVCQSxrQkFBa0J2QixvQkFBN0MsRUFBbUU7QUFDakVjLHdCQUFjLENBQUMsQ0FBRCxHQUFLakMsZUFBZTBDLGVBQWYsRUFBZ0N4QixrQkFBaEMsRUFBb0RDLG9CQUFwRCxDQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0EsY0FBTW9CLFNBQVNuQyxLQUFLdUMsR0FBTCxDQUFTQyxPQUFPQyxXQUFoQixFQUE2QlgsY0FBY0ssTUFBM0MsQ0FBZjtBQUNBLGNBQU1PLHFCQUFxQlAsU0FBT3ZCLE9BQWxDO0FBQ0EsY0FBSThCLHFCQUFxQixDQUFyQixJQUEwQkEscUJBQXFCM0Isb0JBQW5ELEVBQXlFO0FBQ3ZFYywwQkFBY2pDLGVBQWU4QyxrQkFBZixFQUFtQzVCLGtCQUFuQyxFQUF1REMsb0JBQXZELENBQWQ7QUFDRDtBQUNGOztBQUVELFlBQUljLGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixnQkFBS2MsZ0JBQUwsQ0FBc0JkLFdBQXRCO0FBQ0EsZ0JBQUtGLGtCQUFMLEdBQTBCaUIsV0FBVyxZQUFNO0FBQ3pDLGtCQUFLbkMsZ0JBQUwsQ0FBc0I7QUFDcEJFLHFCQUFPQSxTQUFTUyxnQkFBY1csU0FBU0MsSUFBdkIsR0FBNEJILFdBQTVCLEdBQXdDLENBQWpELENBRGE7QUFFcEJqQjtBQUZvQixhQUF0QjtBQUlELFdBTHlCLEVBS3ZCLEVBTHVCLENBQTFCO0FBTUQ7QUFDRjs7QUFFRCxVQUFNaUMsa0JBQWtCLENBQUN6QixXQUFELElBQWdCQSxnQkFBZ0JXLFNBQVNDLElBQXpDLEdBQ3RCLENBRHNCLEdBQ2xCWixZQUFZMEIsU0FEbEI7QUFFQSxVQUFNQyxTQUFTcEMsUUFBUVEsU0FBUzZCLFdBQWpCLEdBQStCSCxlQUE5Qzs7QUFFQSxVQUFNSSxzQkFBc0JGLFNBQU92QixlQUFuQztBQUNBO0FBQ0EsVUFBTTBCLFlBQVlELHNCQUFzQixDQUF0QixHQUEwQixDQUExQixHQUNoQkEsc0JBQXNCLENBQXRCLEdBQTBCLENBQUMsQ0FBM0IsR0FBK0IsQ0FEakM7QUFFQSxVQUFJRSxXQUFXN0IsU0FBZjtBQUNBLFVBQUk0QixjQUFjLENBQWxCLEVBQXFCO0FBQ25CLFlBQU1FLFFBQVEsTUFBS0MsU0FBTCxFQUFkO0FBQ0EsWUFBSUMsUUFBUXRELEtBQUt1RCxHQUFMLENBQVNOLG1CQUFULENBQVo7QUFDQSxhQUFLLElBQUlPLElBQUVsQyxZQUFVNEIsU0FBckIsRUFBZ0NNLElBQUl2QyxLQUFLVyxNQUFULElBQW1CNEIsS0FBSyxDQUF4RCxFQUEyREEsS0FBS04sU0FBaEUsRUFBMkU7QUFDekUsY0FBTU8sY0FBYyxDQUFDLE1BQUtwRCxRQUFMLENBQWNxRCxHQUFkLENBQWtCTixNQUFNbkMsS0FBS3VDLENBQUwsQ0FBTixDQUFsQixLQUFxQy9ELGNBQXRDLEVBQXNERSxJQUExRTtBQUNBLGNBQUkyRCxRQUFRRyxjQUFZLENBQVosR0FBZ0I1QyxPQUE1QixFQUFxQztBQUNyQ3lDLG1CQUFTRyxjQUFjNUMsT0FBdkI7QUFDQXNDLHFCQUFXSyxDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJRyxVQUFVMUMsSUFBZDtBQUNBLFVBQUlrQyxhQUFhN0IsU0FBakIsRUFBNEI7QUFDMUJxQyxrQkFBVSxrQ0FBTzFDLElBQVAsRUFBYTtBQUNyQjJDLG1CQUFTLENBQUMsQ0FBQ3RDLFNBQUQsRUFBWSxDQUFaLENBQUQsRUFBaUIsQ0FBQzZCLFFBQUQsRUFBVyxDQUFYLEVBQWNsQyxLQUFLSyxTQUFMLENBQWQsQ0FBakI7QUFEWSxTQUFiLENBQVY7QUFHRDs7QUFFRCxZQUFLdUMsUUFBTCxDQUFjLEVBQUMxQyxxQ0FBY0EsUUFBZCxJQUF3QjRCLGNBQXhCLEdBQUQsRUFBa0M5QixNQUFNMEMsT0FBeEMsRUFBZDtBQUNELEtBL015Qjs7QUFBQSxVQWlOMUJHLGNBak4wQixHQWlOQyxZQUFNO0FBQy9CcEMsb0JBQWMsTUFBS0Msa0JBQW5CO0FBQ0FhLGFBQU91QixtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxNQUFLRCxjQUEzQztBQUNBdEIsYUFBT3VCLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDLE1BQUtELGNBQTVDO0FBQ0F0QixhQUFPdUIsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0MsTUFBS3pELGdCQUE3QztBQUNBa0MsYUFBT3VCLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDLE1BQUt0RCxnQkFBN0M7O0FBRUEsVUFBSXNCLFNBQVNpQyxlQUFiLEVBQThCakMsU0FBU2lDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxNQUEvQixHQUF3QyxFQUF4QztBQUM5QixZQUFLQyxnQkFBTCxHQUF3QixDQUF4Qjs7QUFSK0IsVUFVeEJDLFNBVndCLEdBVVgsTUFBS2pFLEtBVk0sQ0FVeEJpRSxTQVZ3QjtBQUFBLHlCQVdJLE1BQUtwRCxLQVhUO0FBQUEsVUFXeEJFLFFBWHdCLGdCQVd4QkEsUUFYd0I7QUFBQSxVQVdkQyxRQVhjLGdCQVdkQSxRQVhjO0FBQUEsVUFXSkYsSUFYSSxnQkFXSkEsSUFYSTs7QUFZL0IsVUFBSUMsWUFBWUMsUUFBWixJQUF3QmlELFNBQTVCLEVBQXVDO0FBQ3JDLFlBQU05QyxZQUFZLE1BQUtDLGFBQUwsRUFBbEI7QUFDQSxZQUFJSixTQUFTa0QsVUFBVCxLQUF3Qi9DLFNBQTVCLEVBQXVDO0FBQ3JDOEMsb0JBQVVuRCxJQUFWLEVBQWdCQSxLQUFLSyxTQUFMLENBQWhCLEVBQWlDSCxTQUFTa0QsVUFBMUMsRUFBc0QvQyxTQUF0RDtBQUNEO0FBQ0Y7QUFDRCxZQUFLdUMsUUFBTCxDQUFjLEVBQUMzQyxVQUFVLEtBQVgsRUFBZDtBQUNELEtBcE95Qjs7QUFBQSxVQWdQMUJpRCxnQkFoUDBCLEdBZ1BDLENBaFBEOztBQUV4QixVQUFLbkQsS0FBTCxHQUFhO0FBQ1hDLFlBQU1kLE1BQU1jLElBREQ7QUFFWHFELDhCQUF3QixLQUZiO0FBR1hwRCxnQkFBVSxLQUhDO0FBSVhDLGdCQUFVO0FBSkMsS0FBYjtBQUZ3QjtBQVF6Qjs7OztvQ0FFZW9ELEcsRUFBcUI7QUFDbkMsVUFBTUMsTUFBTSxLQUFLcEUsU0FBTCxDQUFlc0QsR0FBZixDQUFtQmEsR0FBbkIsQ0FBWjtBQUNBLFVBQUksQ0FBQ0MsR0FBTCxFQUFVLE1BQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNWLGFBQU9ELElBQUlFLFdBQUosRUFBUDtBQUNEOzs7OENBRXlCQyxRLEVBQWlCO0FBQUEsbUJBQ2QsS0FBSzNELEtBRFM7QUFBQSxVQUNwQ0UsUUFEb0MsVUFDcENBLFFBRG9DO0FBQUEsVUFDMUJDLFFBRDBCLFVBQzFCQSxRQUQwQjtBQUFBLFVBRXBDRixJQUZvQyxHQUU1QjBELFFBRjRCLENBRXBDMUQsSUFGb0M7OztBQUl6QzJELGFBQU8sSUFBSXpELFFBQUosRUFBYztBQUNuQixZQUFJMEQscUJBQUo7QUFDQSxZQUFJO0FBQ0ZBLHlCQUFlLEtBQUt0RCxhQUFMLENBQW1CTixJQUFuQixDQUFmO0FBQ0QsU0FGRCxDQUVFLE9BQU82RCxHQUFQLEVBQVk7QUFDWjVELHFCQUFXLEtBQVg7QUFDQUMscUJBQVcsSUFBWDtBQUNBLGdCQUFNeUQsS0FBTjtBQUNEOztBQUVELFlBQUkxRCxRQUFKLEVBQWM7QUFDWixjQUFNNkQsbUJBQW1CLEtBQUt4RCxhQUFMLEVBQXpCO0FBQ0EsY0FBSXdELHFCQUFxQkYsWUFBekIsRUFBdUM7QUFDckM7QUFDQTtBQUNBNUQsbUJBQU8sa0NBQU9BLElBQVAsRUFBYTtBQUNsQjJDLHVCQUFTLENBQUMsQ0FBQ2lCLFlBQUQsRUFBZSxDQUFmLENBQUQsRUFBb0IsQ0FBQ0UsZ0JBQUQsRUFBbUIsQ0FBbkIsRUFBc0I5RCxLQUFLNEQsWUFBTCxDQUF0QixDQUFwQjtBQURTLGFBQWIsQ0FBUDtBQUdEO0FBQ0Y7QUFDRjtBQUNELFdBQUtoQixRQUFMLENBQWMsRUFBQzNDLGtCQUFELEVBQVdDLGtCQUFYLEVBQXFCRixVQUFyQixFQUFkO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBSzZDLGNBQUw7QUFDRDs7O3NDQUVpQmtCLE8sRUFBaUJDLE0sRUFBaUIxRSxDLEVBQVc7QUFDN0QyRSxZQUFNQyxlQUFOO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JKLE9BQXRCLEVBQStCQyxNQUEvQixFQUF1QzFFLEVBQUVHLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLEtBQXBEO0FBQ0Q7OztxQ0FFZ0JxRSxPLEVBQWlCQyxNLEVBQWlCQyxLLEVBQWU7QUFDaEVBLFlBQU0xRSxjQUFOO0FBQ0EsV0FBSzRFLGdCQUFMLENBQXNCSixPQUF0QixFQUErQkMsTUFBL0IsRUFBdUNDLE1BQU12RSxLQUE3QztBQUNEOzs7cUNBRWdCcUUsTyxFQUFpQkMsTSxFQUFpQnRFLEssRUFBZTtBQUFBOztBQUNoRSxVQUFJb0IsU0FBU2lDLGVBQWIsRUFBOEJqQyxTQUFTaUMsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLE1BQS9CLEdBQXdDLE1BQXhDO0FBQzlCMUIsYUFBTzZDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUt2QixjQUF4QztBQUNBdEIsYUFBTzZDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLEtBQUt2QixjQUF6QztBQUNBdEIsYUFBTzZDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLEtBQUsvRSxnQkFBMUM7QUFDQWtDLGFBQU82QyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxLQUFLNUUsZ0JBQTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsWUFBTTZFLFNBQVMsMkJBQVksSUFBWixDQUFmO0FBQ0EsWUFBSSxFQUFFQSxrQkFBa0JDLFdBQXBCLENBQUosRUFBc0MsTUFBTSxJQUFJZCxLQUFKLENBQVUsbUJBQVYsQ0FBTjtBQUN0QyxZQUNFYSxPQUFPRSxRQUFQLElBQW1CekQsU0FBUzBELGFBQTVCLElBQ0FILE9BQU9FLFFBQVAsQ0FBZ0J6RCxTQUFTMEQsYUFBekIsQ0FGRixFQUdFO0FBQ0ExRCxtQkFBUzBELGFBQVQsQ0FBdUJDLElBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNdEMsUUFBUSxLQUFLQyxTQUFMLEVBQWQ7O0FBRUEsVUFBSSxLQUFLaEQsUUFBTCxDQUFjTixJQUFkLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLGFBQUtNLFFBQUwsR0FBZ0Isa0JBQ2QsS0FBS1csS0FBTCxDQUFXQyxJQUFYLENBQWdCMEUsR0FBaEIsQ0FBb0IsZ0JBQVE7QUFDMUIsY0FBTXBCLE1BQU1uQixNQUFNd0MsSUFBTixDQUFaO0FBQ0EsY0FBTUMsZUFBZSxPQUFLekYsU0FBTCxDQUFlc0QsR0FBZixDQUFtQmEsR0FBbkIsQ0FBckI7QUFDQSxjQUFNQyxNQUFNcUIsZUFBZUEsYUFBYW5CLFdBQWIsRUFBZixHQUE0QyxJQUF4RDtBQUNBLGNBQU1vQixRQUFRdEIsTUFBTSwyQkFBWUEsR0FBWixDQUFOLEdBQXlCLElBQXZDO0FBQ0EsY0FBTTlFLFVBQVdvRyxpQkFBaUJQLFdBQWxCLEdBQ2RPLE1BQU1DLFlBRFEsR0FDT3RHLGVBQWVDLE9BRHRDO0FBRUEsY0FBTUMsT0FBTzZFLE9BQVEsT0FBT0EsSUFBSXdCLGFBQVgsS0FBNkIsVUFBckMsSUFBb0R4QixJQUFJd0IsYUFBSixFQUFwRCxJQUEyRXRHLE9BQXhGO0FBQ0EsaUJBQU8sQ0FBQzZFLEdBQUQsRUFBTSxFQUFDN0UsZ0JBQUQsRUFBVUMsVUFBVixFQUFOLENBQVA7QUFDRCxTQVRELENBRGMsQ0FBaEI7QUFZRDs7QUFFRCxVQUFNc0csWUFBWSxLQUFLakYsS0FBTCxDQUFXQyxJQUFYLENBQWdCMEUsR0FBaEIsQ0FBb0J2QyxLQUFwQixFQUEyQjhDLE9BQTNCLENBQW1DbEIsT0FBbkMsQ0FBbEI7O0FBRUEsVUFBTW1CLFNBQVNsQixVQUFVLElBQVYsR0FDYixLQUFLbUIsWUFBTCxDQUFrQixDQUFsQixFQUFxQkgsU0FBckIsRUFBZ0MsS0FBaEMsQ0FEYSxHQUM0QmhCLE1BRDNDOztBQUdBLFVBQU03RCxjQUFjLEtBQUtDLGFBQUwsRUFBcEI7QUFDQSxVQUFNd0Isa0JBQWtCLENBQUN6QixXQUFELElBQWdCQSxnQkFBZ0JXLFNBQVNDLElBQXpDLEdBQ3RCLENBRHNCLEdBQ2xCWixZQUFZMEIsU0FEbEI7O0FBR0E7QUFDQTtBQUNBLFdBQUt1RCxXQUFMLENBQWlCLFlBQU07QUFDckIsZUFBS3hDLFFBQUwsQ0FBYztBQUNaUyxrQ0FBd0IsSUFEWjtBQUVacEQsb0JBQVUsSUFGRTtBQUdaQyxvQkFBVTtBQUNSNkQscUJBQVNBLE9BREQ7QUFFUlgsd0JBQVk0QixTQUZKO0FBR1JLLDJCQUFlLE9BQUt0RixLQUFMLENBQVdDLElBQVgsQ0FBZ0IwRSxHQUFoQixDQUFvQnZDLEtBQXBCLENBSFA7QUFJUitDLDBCQUpRO0FBS1JwRCxvQkFBUW9ELE1BTEE7QUFNUm5ELHlCQUFhckMsUUFBUXdGLE1BQVIsR0FBaUJ0RDtBQU50QjtBQUhFLFNBQWQ7QUFZRCxPQWJEO0FBY0Q7OztxQ0E2R2dCMEQsSyxFQUFlO0FBQzlCLFVBQU1uRixjQUFjLEtBQUtDLGFBQUwsRUFBcEI7QUFDQSxVQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDbEIsVUFBSW9CLE9BQU9nRSxRQUFQLElBQW1CcEYsZ0JBQWdCVyxTQUFTQyxJQUFoRCxFQUFzRDtBQUNwRFEsZUFBT2dFLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJELEtBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xuRixvQkFBWTBCLFNBQVosSUFBeUJ5RCxLQUF6QjtBQUNEO0FBQ0Y7Ozt1Q0FHa0JBLEssRUFBZTtBQUNoQyxVQUFNRSxhQUFhekcsS0FBS0MsS0FBTCxDQUFXc0csUUFBUSxLQUFLcEMsZ0JBQXhCLENBQW5CO0FBQ0EsV0FBS3hCLGdCQUFMLENBQXNCOEQsVUFBdEI7QUFDQSxXQUFLdEMsZ0JBQUwsSUFBeUJzQyxVQUF6QjtBQUNEOzs7a0NBRWF4RixJLEVBQXNCRSxRLEVBQXlCO0FBQzNELFVBQUksQ0FBQ0YsSUFBTCxFQUFXQSxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsSUFBbEI7QUFDWCxVQUFJLENBQUNFLFFBQUwsRUFBZUEsV0FBVyxLQUFLSCxLQUFMLENBQVdHLFFBQXRCO0FBQ2YsVUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixjQUFNLElBQUlzRCxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNEO0FBQ0QsVUFBTXJCLFFBQVEsS0FBS0MsU0FBTCxFQUFkO0FBTjJELHNCQU96Q2xDLFFBUHlDO0FBQUEsVUFPcEQ2RCxPQVBvRCxhQU9wREEsT0FQb0Q7O0FBUTNELFdBQUssSUFBSXhCLElBQUUsQ0FBTixFQUFTa0QsTUFBSXpGLEtBQUtXLE1BQXZCLEVBQStCNEIsSUFBSWtELEdBQW5DLEVBQXdDbEQsR0FBeEMsRUFBNkM7QUFDM0MsWUFBSUosTUFBTW5DLEtBQUt1QyxDQUFMLENBQU4sTUFBbUJ3QixPQUF2QixFQUFnQztBQUM5QixpQkFBT3hCLENBQVA7QUFDRDtBQUNGO0FBQ0QsWUFBTSxJQUFJaUIsS0FBSixDQUFVLDJCQUFWLENBQU47QUFDRDs7O2lDQUVZa0MsSyxFQUFlQyxHLEVBQWExRixRLEVBQTJCO0FBQ2xFLFVBQUkwRixNQUFNRCxLQUFWLEVBQWlCO0FBQ2YsZUFBTyxDQUFDLEtBQUtQLFlBQUwsQ0FBa0JRLEdBQWxCLEVBQXVCRCxLQUF2QixFQUE4QnpGLFFBQTlCLENBQVI7QUFDRDs7QUFIaUUsVUFLM0RMLE9BTDJELEdBS2hELEtBQUtWLEtBTDJDLENBSzNEVSxPQUwyRDtBQUFBLFVBTTNESSxJQU4yRCxHQU1uRCxLQUFLRCxLQU44QyxDQU0zREMsSUFOMkQ7O0FBT2xFLFVBQU1tQyxRQUFRLEtBQUtDLFNBQUwsRUFBZDtBQUNBLFVBQUl4RCxXQUFXLENBQWY7QUFDQSxXQUFLLElBQUkyRCxJQUFFbUQsS0FBWCxFQUFrQm5ELElBQUlvRCxHQUF0QixFQUEyQnBELEdBQTNCLEVBQWdDO0FBQzlCLFlBQU1xRCxTQUFTLEtBQUt4RyxRQUFMLENBQWNxRCxHQUFkLENBQWtCTixNQUFNbkMsS0FBS3VDLENBQUwsQ0FBTixDQUFsQixLQUFxQy9ELGNBQXBEO0FBQ0FJLG9CQUFZLENBQUNxQixXQUFXMkYsT0FBT2xILElBQWxCLEdBQXlCa0gsT0FBT25ILE9BQWpDLElBQTRDbUIsT0FBeEQ7QUFDRDtBQUNELGFBQU9oQixRQUFQO0FBQ0Q7OzsyQ0FFc0JzQixRLEVBQWdCMkYsSyxFQUF1QjtBQUM1RCxVQUFNMUQsUUFBUSxLQUFLQyxTQUFMLEVBQWQ7QUFENEQsVUFFckRwQyxJQUZxRCxHQUU3QyxLQUFLRCxLQUZ3QyxDQUVyREMsSUFGcUQ7OztBQUk1RCxVQUFJOEYsU0FBUyxDQUFiO0FBQ0EsVUFBSSxLQUFLeEYsYUFBTCxLQUF1QkosU0FBU2tELFVBQXBDLEVBQWdEO0FBQzlDLFlBQU0yQyxpQkFBaUIsS0FBSzNHLFFBQUwsQ0FBY3FELEdBQWQsQ0FBa0J2QyxTQUFTNkQsT0FBM0IsS0FBdUN2RixjQUE5RDtBQUNBLFlBQU13SCxrQkFDSixLQUFLNUcsUUFBTCxDQUFjcUQsR0FBZCxDQUFrQk4sTUFBTW5DLEtBQUtFLFNBQVNrRCxVQUFkLENBQU4sQ0FBbEIsS0FBdUQ1RSxjQUR6RDtBQUVBc0gsaUJBQVNDLGVBQWVySCxJQUFmLEdBQXNCc0gsZ0JBQWdCdEgsSUFBL0M7QUFDRDtBQUNELGFBQU93QixTQUFTZ0YsTUFBVCxHQUFrQlksTUFBbEIsR0FDTCxLQUFLWCxZQUFMLENBQWtCakYsU0FBU2tELFVBQTNCLEVBQXVDeUMsS0FBdkMsRUFBOEMsSUFBOUMsQ0FERjtBQUVEOzs7b0NBRTZCO0FBQUEsVUFDckJJLFNBRHFCLEdBQ1IsS0FBSy9HLEtBREcsQ0FDckIrRyxTQURxQjs7QUFFNUIsYUFBT0EsWUFBWUEsV0FBWixHQUEwQixJQUFqQztBQUNEOzs7Z0NBRXFDO0FBQUEsVUFDN0JsQyxPQUQ2QixHQUNsQixLQUFLN0UsS0FEYSxDQUM3QjZFLE9BRDZCOztBQUVwQyxhQUFPLE9BQU9BLE9BQVAsS0FBbUIsVUFBbkIsR0FBZ0NBLE9BQWhDLEdBQTBDO0FBQUEsZUFBS21DLEVBQUVuQyxPQUFGLENBQUw7QUFBQSxPQUFqRDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDd0UsS0FBSzdFLEtBRDdFO0FBQUEsVUFDQWlILFlBREEsVUFDQUEsWUFEQTtBQUFBLFVBQ2NGLFNBRGQsVUFDY0EsU0FEZDtBQUFBLFVBQ3lCckcsT0FEekIsVUFDeUJBLE9BRHpCO0FBQUEsVUFDa0N3RyxRQURsQyxVQUNrQ0EsUUFEbEM7QUFBQSxVQUM0Q0MsV0FENUMsVUFDNENBLFdBRDVDO0FBQUEsVUFDeURDLFdBRHpELFVBQ3lEQSxXQUR6RDtBQUFBLG9CQUVvRCxLQUFLdkcsS0FGekQ7QUFBQSxVQUVBQyxJQUZBLFdBRUFBLElBRkE7QUFBQSxVQUVNQyxRQUZOLFdBRU1BLFFBRk47QUFBQSxVQUVnQkMsUUFGaEIsV0FFZ0JBLFFBRmhCO0FBQUEsVUFFMEJtRCxzQkFGMUIsV0FFMEJBLHNCQUYxQjs7O0FBSVAsVUFBTWxCLFFBQVEsS0FBS0MsU0FBTCxFQUFkO0FBQ0EsVUFBTW1FLGNBQWMseUJBQU90RyxXQUFXLENBQVgsR0FBZSxDQUF0QixFQUF5QmtHLFlBQXpCLENBQXBCOztBQUVBLFVBQU1LLFdBQVd4RyxLQUFLMEUsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT3BDLENBQVAsRUFBYTtBQUNyQyxZQUFNZSxNQUFNbkIsTUFBTXdDLElBQU4sQ0FBWjtBQUNBLFlBQU04QixnQkFBZ0J4RyxZQUFZQyxRQUFaLElBQXdCQSxTQUFTNkQsT0FBVCxLQUFxQlQsR0FBN0MsR0FDbEI7QUFDQW9ELHdCQUFjLHlCQUFPLENBQVAsRUFBVVAsWUFBVixDQURkO0FBRUFRLGFBQUd6RyxTQUFTNEI7QUFGWixTQURrQixHQUtsQjtBQUNBNEUsd0JBQWMseUJBQU8sQ0FBUCxFQUFVUCxZQUFWLENBRGQ7QUFFQVEsYUFBRyxDQUFDdEQsK0NBQWtDLFVBQUM2QyxDQUFELEVBQUdVLE9BQUg7QUFBQSxtQkFBYVYsQ0FBYjtBQUFBLFdBQW5DLEVBQW1EakcsWUFBWUMsUUFBWixHQUNwRCxPQUFLTSxzQkFBTCxDQUE0Qk4sUUFBNUIsRUFBc0NxQyxDQUF0QyxDQURvRCxHQUVsRCxPQUFLNEMsWUFBTCxDQUFrQixDQUFsQixFQUFxQjVDLENBQXJCLEVBQXdCLEtBQXhCLENBRkQsRUFFaUM0RCxZQUZqQztBQUZILFNBTEo7QUFXQSxZQUFNbkQ7QUFDSnVEO0FBREksV0FFREUsYUFGQyxDQUFOO0FBSUEsWUFBTUksaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQUtDLElBQUw7QUFBQSxpQkFDckI7QUFBQTtBQUFBO0FBQ0UsMkJBQWE7QUFBQSx1QkFBSyxPQUFLQyxnQkFBTCxDQUFzQjFELEdBQXRCLEVBQTJCeUQsTUFBM0IsRUFBbUN6SCxDQUFuQyxDQUFMO0FBQUEsZUFEZjtBQUVFLDRCQUFjO0FBQUEsdUJBQUssT0FBSzJILGlCQUFMLENBQXVCM0QsR0FBdkIsRUFBNEJ5RCxNQUE1QixFQUFvQ3pILENBQXBDLENBQUw7QUFBQTtBQUZoQjtBQUlHd0g7QUFKSCxXQURxQjtBQUFBLFNBQXZCO0FBUUEsWUFBTWxCLFNBQVMsT0FBS3hHLFFBQUwsQ0FBY3FELEdBQWQsQ0FBa0JhLEdBQWxCLEtBQTBCOUUsY0FBekM7QUFDQSxlQUNFO0FBQ0UsaUJBQU93RSxLQURULEVBQ2dCLEtBQUtNLEdBRHJCO0FBRUUsb0JBQVU7QUFBQSxnQkFBRW9ELFlBQUYsU0FBRUEsWUFBRjtBQUFBLGdCQUFnQkgsV0FBaEIsU0FBZ0JBLFdBQWhCO0FBQUEsZ0JBQTZCSSxDQUE3QixTQUE2QkEsQ0FBN0I7QUFBQSxtQkFDUjtBQUNFLG1CQUFLLDZCQUFTLE9BQUt4SCxTQUFkLEVBQXlCbUUsR0FBekIsQ0FEUDtBQUVFLGlCQUFHRCx5QkFBeUJzRCxDQUF6QixHQUE2QixJQUZsQztBQUdFLHdCQUFVUCxRQUhaO0FBSUUsdUJBQVN4RyxPQUpYO0FBS0Usb0JBQU0rRSxJQUxSO0FBTUUsNEJBQWMrQixZQU5oQjtBQU9FLDJCQUFhSCxXQVBmO0FBUUUsc0JBQVFYLE1BUlY7QUFTRSxzQkFBUVMsZUFBZSxDQUFDaEQsc0JBQWhCLEdBQXlDLE1BQXpDLEdBQ0xuRCxZQUFZQSxTQUFTNkQsT0FBVCxLQUFxQlQsR0FBakMsR0FBdUN0RCxLQUFLVyxNQUE1QyxHQUFxRDRCLENBVjFEO0FBWUUsOEJBQWdCc0UsY0FabEI7QUFhRSwyQkFBYVA7QUFiZixjQURRO0FBQUE7QUFGWixVQURGO0FBc0JELE9BaERnQixDQUFqQjs7QUFrREEsVUFBSVksZUFBZSxDQUFuQjtBQUNBLFVBQUksQ0FBQ2pILFFBQUQsSUFBYUMsUUFBYixJQUF5Qm1ELHNCQUE3QixFQUFxRDtBQUNuRCxZQUFNaEQsWUFBWSxLQUFLQyxhQUFMLEVBQWxCO0FBQ0E0Ryx1QkFBZSx5QkFDYixLQUFLL0IsWUFBTCxDQUFrQixDQUFsQixFQUFxQjlFLFNBQXJCLEVBQWdDLEtBQWhDLElBQ0VILFNBQVM0QixNQUZFLEVBR2JxRSxZQUhhLENBQWY7QUFLRDs7QUFFRCxVQUFNZ0Isc0JBQXlCLEtBQUtoQyxZQUFMLENBQWtCLENBQWxCLEVBQXFCbkYsS0FBS1csTUFBMUIsRUFBa0MsS0FBbEMsQ0FBekIsT0FBTjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBTyxFQUFDeUcsVUFBVSxVQUFYLEVBQVo7QUFDRTtBQUNFLGlCQUFPLEVBQUNGLDBCQUFELEVBQWVYLHdCQUFmLEVBRFQ7QUFFRSxrQkFBUSxrQkFBTTtBQUNaLGdCQUFJLENBQUN0RyxRQUFMLEVBQWU7QUFDYixxQkFBS2IsUUFBTCxDQUFjaUksS0FBZDtBQUNBLHFCQUFLekUsUUFBTCxDQUFjLEVBQUNTLHdCQUF3QixLQUF6QixFQUFkO0FBQ0Q7QUFDRixXQVBIO0FBUUUsb0JBQVU7QUFBQSxnQkFBRTZELFlBQUYsU0FBRUEsWUFBRjtBQUFBLG1CQUNSO0FBQUE7QUFBQTtBQUNFLHVCQUFPO0FBQ0xJLDJCQUFTakUseUJBQXlCLE9BQXpCLEdBQW1DLE1BRHZDO0FBRUx1QywwQkFBUXZDLHlCQUF5QjhELG1CQUF6QixHQUErQztBQUZsRDtBQURUO0FBTUdsQiwyQkFBYSxvREFBVSxJQUFJLGNBQU07QUFDaEMsc0JBQUksQ0FBQ2hHLFFBQUQsSUFBYUMsUUFBYixJQUF5Qm1ELHNCQUE3QixFQUFxRDtBQUNuRCwyQkFBS2tFLGtCQUFMLENBQXdCTCxZQUF4QjtBQUNEO0FBQ0YsaUJBSmE7QUFOaEIsYUFEUTtBQUFBO0FBUlosVUFERjtBQXdCR1Y7QUF4QkgsT0FERjtBQTRCRDs7O0VBOWF3QyxnQkFBTWdCLFM7O0FBQTVCdkksYSxDQUdad0ksUyxHQUFZO0FBQ2pCMUQsV0FBUyxvQkFBVTJELFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVDLE1BRGlCLEVBRTNCLG9CQUFVQyxJQUZpQixDQUFwQixFQUdOQyxVQUpjO0FBS2pCekIsWUFBVSxvQkFBVXdCLElBTEg7QUFNakI1SCxRQUFNLG9CQUFVOEgsS0FBVixDQUFnQkQsVUFOTDtBQU9qQjFFLGFBQVcsb0JBQVV5RSxJQVBKO0FBUWpCM0IsYUFBVyxvQkFBVTJCLElBUko7QUFTakJ6QixnQkFBYyxvQkFBVTRCLE1BVFA7QUFVakJuSSxXQUFTLG9CQUFVb0ksTUFWRjtBQVdqQjNCLGVBQWEsb0JBQVU0QixJQVhOO0FBWWpCcEksc0JBQW9CLG9CQUFVbUksTUFBVixDQUFpQkgsVUFacEI7QUFhakIvSCx3QkFBc0Isb0JBQVVrSSxNQUFWLENBQWlCSCxVQWJ0QjtBQWNqQnZCLGVBQWEsb0JBQVV5QjtBQWROLEM7QUFIQTlJLGEsQ0FtQlppSixZLEdBQTZCO0FBQ2xDL0IsZ0JBQWMsRUFBQ2dDLFdBQVcsR0FBWixFQUFpQkMsU0FBUyxFQUExQixFQURvQjtBQUVsQ3hJLFdBQVMsRUFGeUI7QUFHbEN5RyxlQUFhLEtBSHFCO0FBSWxDeEcsc0JBQW9CLEVBSmM7QUFLbENDLHdCQUFzQjtBQUxZLEM7a0JBbkJqQmIsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xuaW1wb3J0IHNhdmVSZWZzIGZyb20gJ3JlYWN0LXNhdmUtcmVmcyc7XG5pbXBvcnQgRHJhZ0hhbmRsZSBmcm9tICcuL0RyYWdIYW5kbGUnO1xuaW1wb3J0IE9uVXBkYXRlIGZyb20gJy4vT25VcGRhdGUnO1xuaW1wb3J0IE1vdmVDb250YWluZXIgZnJvbSAnLi9Nb3ZlQ29udGFpbmVyJztcblxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSB7bmF0dXJhbDogMjAwLCBkcmFnOiAzMH07XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFNwZWVkKGRpc3RhbmNlLCBzcGVlZCwgc2l6ZSkge1xuICAvLyBJZiBkaXN0YW5jZSBpcyB6ZXJvLCB0aGVuIHRoZSByZXN1bHQgaXMgdGhlIG1heCBzcGVlZC4gT3RoZXJ3aXNlLFxuICAvLyB0aGUgcmVzdWx0IHRhcGVycyB0b3dhcmQgemVybyBhcyBpdCBnZXRzIGNsb3NlciB0byB0aGUgb3Bwb3NpdGVcbiAgLy8gZWRnZSBvZiB0aGUgcmVnaW9uLlxuICByZXR1cm4gTWF0aC5yb3VuZChzcGVlZCAtIChzcGVlZCAvIHNpemUpICogZGlzdGFuY2UpO1xufVxuXG50eXBlIERyYWcgPSB7XG4gIGl0ZW1LZXk6IHN0cmluZztcbiAgc3RhcnRJbmRleDogbnVtYmVyO1xuICBzdGFydExpc3RLZXlzOiBBcnJheTxzdHJpbmc+O1xuICBzdGFydFk6IG51bWJlcjtcbiAgbW91c2VZOiBudW1iZXI7XG4gIG1vdXNlT2Zmc2V0OiBudW1iZXI7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBpdGVtS2V5OiBzdHJpbmd8KGl0ZW06IE9iamVjdCk9PnN0cmluZztcbiAgdGVtcGxhdGU6IEZ1bmN0aW9uO1xuICBsaXN0OiBBcnJheTxPYmplY3Q+O1xuICBvbk1vdmVFbmQ/OiA/KG5ld0xpc3Q6IEFycmF5PE9iamVjdD4sIG1vdmVkSXRlbTogT2JqZWN0LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBjb250YWluZXI/OiA/KCkgPT4gP0hUTUxFbGVtZW50O1xuICBzcHJpbmdDb25maWc6IE9iamVjdDtcbiAgcGFkZGluZzogbnVtYmVyO1xuICB1bnNldFpJbmRleDogYm9vbGVhbjtcbiAgYXV0b1Njcm9sbE1heFNwZWVkOiBudW1iZXI7XG4gIGF1dG9TY3JvbGxSZWdpb25TaXplOiBudW1iZXI7XG4gIGNvbW1vblByb3BzPzogP09iamVjdDtcbn07XG50eXBlIFN0YXRlID0ge1xuICBsaXN0OiBBcnJheTxPYmplY3Q+O1xuICB1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nOiBib29sZWFuO1xuICBkcmFnZ2luZzogYm9vbGVhbjtcbiAgbGFzdERyYWc6ID9EcmFnO1xufTtcbnR5cGUgRGVmYXVsdFByb3BzID0ge1xuICBzcHJpbmdDb25maWc6IE9iamVjdDtcbiAgcGFkZGluZzogbnVtYmVyO1xuICB1bnNldFpJbmRleDogYm9vbGVhbjtcbiAgYXV0b1Njcm9sbE1heFNwZWVkOiBudW1iZXI7XG4gIGF1dG9TY3JvbGxSZWdpb25TaXplOiBudW1iZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHByb3BzOiBQcm9wcztcbiAgc3RhdGU6IFN0YXRlO1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1LZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICB0ZW1wbGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgb25Nb3ZlRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNwcmluZ0NvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYWRkaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHVuc2V0WkluZGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhdXRvU2Nyb2xsTWF4U3BlZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBhdXRvU2Nyb2xsUmVnaW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbW1vblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IERlZmF1bHRQcm9wcyA9IHtcbiAgICBzcHJpbmdDb25maWc6IHtzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogNTB9LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHVuc2V0WkluZGV4OiBmYWxzZSxcbiAgICBhdXRvU2Nyb2xsTWF4U3BlZWQ6IDE1LFxuICAgIGF1dG9TY3JvbGxSZWdpb25TaXplOiAzMFxuICB9O1xuICBfaXRlbVJlZnM6IE1hcDxzdHJpbmcsIE1vdmVDb250YWluZXI+ID0gbmV3IE1hcCgpO1xuICBfaGVpZ2h0czogTWFwPHN0cmluZywge25hdHVyYWw6IG51bWJlciwgZHJhZzogbnVtYmVyfT4gPSBuZXcgTWFwKCk7XG4gIF9hdXRvU2Nyb2xsZXJUaW1lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogcHJvcHMubGlzdCxcbiAgICAgIHVzZUFic29sdXRlUG9zaXRpb25pbmc6IGZhbHNlLFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgbGFzdERyYWc6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgZ2V0SXRlbUluc3RhbmNlKGtleTogc3RyaW5nKTogT2JqZWN0IHtcbiAgICBjb25zdCByZWYgPSB0aGlzLl9pdGVtUmVmcy5nZXQoa2V5KTtcbiAgICBpZiAoIXJlZikgdGhyb3cgbmV3IEVycm9yKCdrZXkgbm90IGZvdW5kJyk7XG4gICAgcmV0dXJuIHJlZi5nZXRUZW1wbGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wczogUHJvcHMpIHtcbiAgICBsZXQge2RyYWdnaW5nLCBsYXN0RHJhZ30gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB7bGlzdH0gPSBuZXdQcm9wcztcblxuICAgIGNoZWNrOiBpZiAobGFzdERyYWcpIHtcbiAgICAgIGxldCBuZXdEcmFnSW5kZXg7XG4gICAgICB0cnkge1xuICAgICAgICBuZXdEcmFnSW5kZXggPSB0aGlzLl9nZXREcmFnSW5kZXgobGlzdCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgbGFzdERyYWcgPSBudWxsO1xuICAgICAgICBicmVhayBjaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREcmFnSW5kZXggPSB0aGlzLl9nZXREcmFnSW5kZXgoKTtcbiAgICAgICAgaWYgKGN1cnJlbnREcmFnSW5kZXggIT09IG5ld0RyYWdJbmRleCkge1xuICAgICAgICAgIC8vIExldCdzIGNoYW5nZSB0aGUgbGlzdCBzbyB0aGF0IHRoZSBuZXcgZHJhZyBpbmRleCB3aWxsIGJlIHRoZSBzYW1lIGFzXG4gICAgICAgICAgLy8gdGhlIGN1cnJlbnQgc28gdGhhdCB0aGUgZHJhZ2dlZCBpdGVtIGRvZXNuJ3QganVtcCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICAgIGxpc3QgPSB1cGRhdGUobGlzdCwge1xuICAgICAgICAgICAgJHNwbGljZTogW1tuZXdEcmFnSW5kZXgsIDFdLCBbY3VycmVudERyYWdJbmRleCwgMCwgbGlzdFtuZXdEcmFnSW5kZXhdXV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZywgbGFzdERyYWcsIGxpc3R9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2hhbmRsZU1vdXNlVXAoKTtcbiAgfVxuXG4gIF9oYW5kbGVUb3VjaFN0YXJ0KGl0ZW1LZXk6IHN0cmluZywgcHJlc3NZOiA/bnVtYmVyLCBlOiBPYmplY3QpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9oYW5kbGVTdGFydERyYWcoaXRlbUtleSwgcHJlc3NZLCBlLnRvdWNoZXNbMF0ucGFnZVkpO1xuICB9XG5cbiAgX2hhbmRsZU1vdXNlRG93bihpdGVtS2V5OiBzdHJpbmcsIHByZXNzWTogP251bWJlciwgZXZlbnQ6IE9iamVjdCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5faGFuZGxlU3RhcnREcmFnKGl0ZW1LZXksIHByZXNzWSwgZXZlbnQucGFnZVkpO1xuICB9XG5cbiAgX2hhbmRsZVN0YXJ0RHJhZyhpdGVtS2V5OiBzdHJpbmcsIHByZXNzWTogP251bWJlciwgcGFnZVk6IG51bWJlcikge1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVNb3VzZVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVNb3VzZVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlTW91c2VNb3ZlKTtcblxuICAgIC8vIElmIGFuIGVsZW1lbnQgaGFzIGZvY3VzIHdoaWxlIHdlIGRyYWcgYXJvdW5kIHRoZSBwYXJlbnQsIHNvbWUgYnJvd3NlcnNcbiAgICAvLyB0cnkgdG8gc2Nyb2xsIHRoZSBwYXJlbnQgZWxlbWVudCB0byBrZWVwIHRoZSBmb2N1c2VkIGVsZW1lbnQgaW4gdmlldy5cbiAgICAvLyBTdG9wIHRoYXQuXG4gICAge1xuICAgICAgY29uc3QgbGlzdEVsID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICBpZiAoIShsaXN0RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5vdCBoYXBwZW4nKTtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdEVsLmNvbnRhaW5zICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgbGlzdEVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICApIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qga2V5Rm4gPSB0aGlzLl9nZXRLZXlGbigpO1xuXG4gICAgaWYgKHRoaXMuX2hlaWdodHMuc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5faGVpZ2h0cyA9IG5ldyBNYXAoXG4gICAgICAgIHRoaXMuc3RhdGUubGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0ga2V5Rm4oaXRlbSk7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVmID0gdGhpcy5faXRlbVJlZnMuZ2V0KGtleSk7XG4gICAgICAgICAgY29uc3QgcmVmID0gY29udGFpbmVyUmVmID8gY29udGFpbmVyUmVmLmdldFRlbXBsYXRlKCkgOiBudWxsO1xuICAgICAgICAgIGNvbnN0IHJlZkVsID0gcmVmID8gZmluZERPTU5vZGUocmVmKSA6IG51bGw7XG4gICAgICAgICAgY29uc3QgbmF0dXJhbCA9IChyZWZFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSA/XG4gICAgICAgICAgICByZWZFbC5vZmZzZXRIZWlnaHQgOiBERUZBVUxUX0hFSUdIVC5uYXR1cmFsO1xuICAgICAgICAgIGNvbnN0IGRyYWcgPSByZWYgJiYgKHR5cGVvZiByZWYuZ2V0RHJhZ0hlaWdodCA9PT0gJ2Z1bmN0aW9uJykgJiYgcmVmLmdldERyYWdIZWlnaHQoKSB8fCBuYXR1cmFsO1xuICAgICAgICAgIHJldHVybiBba2V5LCB7bmF0dXJhbCwgZHJhZ31dO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnN0YXRlLmxpc3QubWFwKGtleUZuKS5pbmRleE9mKGl0ZW1LZXkpO1xuXG4gICAgY29uc3Qgc3RhcnRZID0gcHJlc3NZID09IG51bGwgP1xuICAgICAgdGhpcy5fZ2V0RGlzdGFuY2UoMCwgaXRlbUluZGV4LCBmYWxzZSkgOiBwcmVzc1k7XG5cbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuX2dldENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbCA9ICFjb250YWluZXJFbCB8fCBjb250YWluZXJFbCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAwIDogY29udGFpbmVyRWwuc2Nyb2xsVG9wO1xuXG4gICAgLy8gTmVlZCB0byByZS1yZW5kZXIgb25jZSBiZWZvcmUgd2Ugc3RhcnQgZHJhZ2dpbmcgc28gdGhhdCB0aGUgYHlgIHZhbHVlc1xuICAgIC8vIGFyZSBzZXQgdXNpbmcgdGhlIGNvcnJlY3QgX2hlaWdodHMgYW5kIHRoZW4gY2FuIGFuaW1hdGUgZnJvbSB0aGVyZS5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nOiB0cnVlLFxuICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgbGFzdERyYWc6IHtcbiAgICAgICAgICBpdGVtS2V5OiBpdGVtS2V5LFxuICAgICAgICAgIHN0YXJ0SW5kZXg6IGl0ZW1JbmRleCxcbiAgICAgICAgICBzdGFydExpc3RLZXlzOiB0aGlzLnN0YXRlLmxpc3QubWFwKGtleUZuKSxcbiAgICAgICAgICBzdGFydFksXG4gICAgICAgICAgbW91c2VZOiBzdGFydFksXG4gICAgICAgICAgbW91c2VPZmZzZXQ6IHBhZ2VZIC0gc3RhcnRZICsgY29udGFpbmVyU2Nyb2xsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZVRvdWNoTW92ZTogRnVuY3Rpb24gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9oYW5kbGVNb3VzZU1vdmUoZS50b3VjaGVzWzBdKTtcbiAgfTtcblxuICBfaGFuZGxlTW91c2VNb3ZlOiBGdW5jdGlvbiA9ICh7cGFnZVksIGNsaWVudFl9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcGFkZGluZyxcbiAgICAgIGF1dG9TY3JvbGxNYXhTcGVlZCxcbiAgICAgIGF1dG9TY3JvbGxSZWdpb25TaXplXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2xpc3QsIGRyYWdnaW5nLCBsYXN0RHJhZ30gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZHJhZ2dpbmcgfHwgIWxhc3REcmFnKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuX2dldENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGRyYWdJbmRleCA9IHRoaXMuX2dldERyYWdJbmRleCgpO1xuICAgIGNvbnN0IG5hdHVyYWxQb3NpdGlvbiA9IHRoaXMuX2dldERpc3RhbmNlRHVyaW5nRHJhZyhsYXN0RHJhZywgZHJhZ0luZGV4KTtcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fYXV0b1Njcm9sbGVyVGltZXIpO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgaGFzIHRoZSBtb3VzZSBuZWFyIHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSBjb250YWluZXIgYW5kXG4gICAgLy8gbm90IGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QsIHRoZW4gYXV0b3Njcm9sbC5cbiAgICBpZiAoZHJhZ0luZGV4ICE9PSAwICYmIGRyYWdJbmRleCAhPT0gbGlzdC5sZW5ndGgtMSkge1xuICAgICAgbGV0IHNjcm9sbFNwZWVkID0gMDtcblxuICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lckVsICYmIGNvbnRhaW5lckVsICE9PSBkb2N1bWVudC5ib2R5ICYmXG4gICAgICAgIGNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/XG4gICAgICAgIGNvbnRhaW5lckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDpcbiAgICAgICAge3RvcDogMCwgYm90dG9tOiBJbmZpbml0eX07XG5cbiAgICAgIC8vIEdldCB0aGUgbG93ZXN0IG9mIHRoZSBzY3JlZW4gdG9wIGFuZCB0aGUgY29udGFpbmVyIHRvcC5cbiAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KDAsIGNvbnRhaW5lclJlY3QudG9wKTtcblxuICAgICAgY29uc3QgZGlzdGFuY2VGcm9tVG9wID0gY2xpZW50WS10b3A7XG4gICAgICBpZiAoZGlzdGFuY2VGcm9tVG9wID4gMCAmJiBkaXN0YW5jZUZyb21Ub3AgPCBhdXRvU2Nyb2xsUmVnaW9uU2l6ZSkge1xuICAgICAgICBzY3JvbGxTcGVlZCA9IC0xICogZ2V0U2Nyb2xsU3BlZWQoZGlzdGFuY2VGcm9tVG9wLCBhdXRvU2Nyb2xsTWF4U3BlZWQsIGF1dG9TY3JvbGxSZWdpb25TaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEdldCB0aGUgbG93ZXN0IG9mIHRoZSBzY3JlZW4gYm90dG9tIGFuZCB0aGUgY29udGFpbmVyIGJvdHRvbS5cbiAgICAgICAgY29uc3QgYm90dG9tID0gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBjb250YWluZXJSZWN0LmJvdHRvbSk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbUJvdHRvbSA9IGJvdHRvbS1jbGllbnRZO1xuICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQm90dG9tID4gMCAmJiBkaXN0YW5jZUZyb21Cb3R0b20gPCBhdXRvU2Nyb2xsUmVnaW9uU2l6ZSkge1xuICAgICAgICAgIHNjcm9sbFNwZWVkID0gZ2V0U2Nyb2xsU3BlZWQoZGlzdGFuY2VGcm9tQm90dG9tLCBhdXRvU2Nyb2xsTWF4U3BlZWQsIGF1dG9TY3JvbGxSZWdpb25TaXplKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgIT09IDApIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ29udGFpbmVyKHNjcm9sbFNwZWVkKTtcbiAgICAgICAgdGhpcy5fYXV0b1Njcm9sbGVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZU1vdmUoe1xuICAgICAgICAgICAgcGFnZVk6IHBhZ2VZICsgKGNvbnRhaW5lckVsPT09ZG9jdW1lbnQuYm9keT9zY3JvbGxTcGVlZDowKSxcbiAgICAgICAgICAgIGNsaWVudFlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbCA9ICFjb250YWluZXJFbCB8fCBjb250YWluZXJFbCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAwIDogY29udGFpbmVyRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IG1vdXNlWSA9IHBhZ2VZIC0gbGFzdERyYWcubW91c2VPZmZzZXQgKyBjb250YWluZXJTY3JvbGw7XG5cbiAgICBjb25zdCBtb3ZlbWVudEZyb21OYXR1cmFsID0gbW91c2VZLW5hdHVyYWxQb3NpdGlvbjtcbiAgICAvLyAxIGRvd24sIC0xIHVwLCAwIG5laXRoZXJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBtb3ZlbWVudEZyb21OYXR1cmFsID4gMCA/IDEgOlxuICAgICAgbW92ZW1lbnRGcm9tTmF0dXJhbCA8IDAgPyAtMSA6IDA7XG4gICAgbGV0IG5ld0luZGV4ID0gZHJhZ0luZGV4O1xuICAgIGlmIChkaXJlY3Rpb24gIT09IDApIHtcbiAgICAgIGNvbnN0IGtleUZuID0gdGhpcy5fZ2V0S2V5Rm4oKTtcbiAgICAgIGxldCByZWFjaCA9IE1hdGguYWJzKG1vdmVtZW50RnJvbU5hdHVyYWwpO1xuICAgICAgZm9yIChsZXQgaT1kcmFnSW5kZXgrZGlyZWN0aW9uOyBpIDwgbGlzdC5sZW5ndGggJiYgaSA+PSAwOyBpICs9IGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBpRHJhZ0hlaWdodCA9ICh0aGlzLl9oZWlnaHRzLmdldChrZXlGbihsaXN0W2ldKSkgfHwgREVGQVVMVF9IRUlHSFQpLmRyYWc7XG4gICAgICAgIGlmIChyZWFjaCA8IGlEcmFnSGVpZ2h0LzIgKyBwYWRkaW5nKSBicmVhaztcbiAgICAgICAgcmVhY2ggLT0gaURyYWdIZWlnaHQgKyBwYWRkaW5nO1xuICAgICAgICBuZXdJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBsaXN0O1xuICAgIGlmIChuZXdJbmRleCAhPT0gZHJhZ0luZGV4KSB7XG4gICAgICBuZXdMaXN0ID0gdXBkYXRlKGxpc3QsIHtcbiAgICAgICAgJHNwbGljZTogW1tkcmFnSW5kZXgsIDFdLCBbbmV3SW5kZXgsIDAsIGxpc3RbZHJhZ0luZGV4XV1dXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtsYXN0RHJhZzogey4uLmxhc3REcmFnLCBtb3VzZVl9LCBsaXN0OiBuZXdMaXN0fSk7XG4gIH07XG5cbiAgX2hhbmRsZU1vdXNlVXA6IEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fYXV0b1Njcm9sbGVyVGltZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlTW91c2VVcCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlTW91c2VVcCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVRvdWNoTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZU1vdXNlTW92ZSk7XG5cbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgdGhpcy5fbGFzdFNjcm9sbERlbHRhID0gMDtcblxuICAgIGNvbnN0IHtvbk1vdmVFbmR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZHJhZ2dpbmcsIGxhc3REcmFnLCBsaXN0fSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGRyYWdnaW5nICYmIGxhc3REcmFnICYmIG9uTW92ZUVuZCkge1xuICAgICAgY29uc3QgZHJhZ0luZGV4ID0gdGhpcy5fZ2V0RHJhZ0luZGV4KCk7XG4gICAgICBpZiAobGFzdERyYWcuc3RhcnRJbmRleCAhPT0gZHJhZ0luZGV4KSB7XG4gICAgICAgIG9uTW92ZUVuZChsaXN0LCBsaXN0W2RyYWdJbmRleF0sIGxhc3REcmFnLnN0YXJ0SW5kZXgsIGRyYWdJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiBmYWxzZX0pO1xuICB9O1xuXG4gIF9zY3JvbGxDb250YWluZXIoZGVsdGE6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gdGhpcy5fZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKCFjb250YWluZXJFbCkgcmV0dXJuO1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsQnkgJiYgY29udGFpbmVyRWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCBkZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lckVsLnNjcm9sbFRvcCArPSBkZWx0YTtcbiAgICB9XG4gIH1cblxuICBfbGFzdFNjcm9sbERlbHRhOiBudW1iZXIgPSAwO1xuICBfYWRqdXN0U2Nyb2xsQXRFbmQoZGVsdGE6IG51bWJlcikge1xuICAgIGNvbnN0IGZyYW1lRGVsdGEgPSBNYXRoLnJvdW5kKGRlbHRhIC0gdGhpcy5fbGFzdFNjcm9sbERlbHRhKTtcbiAgICB0aGlzLl9zY3JvbGxDb250YWluZXIoZnJhbWVEZWx0YSk7XG4gICAgdGhpcy5fbGFzdFNjcm9sbERlbHRhICs9IGZyYW1lRGVsdGE7XG4gIH1cblxuICBfZ2V0RHJhZ0luZGV4KGxpc3Q6ID9BcnJheTxPYmplY3Q+LCBsYXN0RHJhZzogP0RyYWcpOiBudW1iZXIge1xuICAgIGlmICghbGlzdCkgbGlzdCA9IHRoaXMuc3RhdGUubGlzdDtcbiAgICBpZiAoIWxhc3REcmFnKSBsYXN0RHJhZyA9IHRoaXMuc3RhdGUubGFzdERyYWc7XG4gICAgaWYgKCFsYXN0RHJhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkcmFnIGhhcHBlbmVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGtleUZuID0gdGhpcy5fZ2V0S2V5Rm4oKTtcbiAgICBjb25zdCB7aXRlbUtleX0gPSBsYXN0RHJhZztcbiAgICBmb3IgKGxldCBpPTAsIGxlbj1saXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoa2V5Rm4obGlzdFtpXSkgPT09IGl0ZW1LZXkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZpbmQgZHJhZyBpbmRleCcpO1xuICB9XG5cbiAgX2dldERpc3RhbmNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkcmFnZ2luZzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICByZXR1cm4gLXRoaXMuX2dldERpc3RhbmNlKGVuZCwgc3RhcnQsIGRyYWdnaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCB7cGFkZGluZ30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtsaXN0fSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qga2V5Rm4gPSB0aGlzLl9nZXRLZXlGbigpO1xuICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgZm9yIChsZXQgaT1zdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9oZWlnaHRzLmdldChrZXlGbihsaXN0W2ldKSkgfHwgREVGQVVMVF9IRUlHSFQ7XG4gICAgICBkaXN0YW5jZSArPSAoZHJhZ2dpbmcgPyBoZWlnaHQuZHJhZyA6IGhlaWdodC5uYXR1cmFsKSArIHBhZGRpbmc7XG4gICAgfVxuICAgIHJldHVybiBkaXN0YW5jZTtcbiAgfVxuXG4gIF9nZXREaXN0YW5jZUR1cmluZ0RyYWcobGFzdERyYWc6IERyYWcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGtleUZuID0gdGhpcy5fZ2V0S2V5Rm4oKTtcbiAgICBjb25zdCB7bGlzdH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgaWYgKHRoaXMuX2dldERyYWdJbmRleCgpIDwgbGFzdERyYWcuc3RhcnRJbmRleCkge1xuICAgICAgY29uc3QgZHJhZ0l0ZW1IZWlnaHQgPSB0aGlzLl9oZWlnaHRzLmdldChsYXN0RHJhZy5pdGVtS2V5KSB8fCBERUZBVUxUX0hFSUdIVDtcbiAgICAgIGNvbnN0IG5ld0NlbnRlckhlaWdodCA9XG4gICAgICAgIHRoaXMuX2hlaWdodHMuZ2V0KGtleUZuKGxpc3RbbGFzdERyYWcuc3RhcnRJbmRleF0pKSB8fCBERUZBVUxUX0hFSUdIVDtcbiAgICAgIG9mZnNldCA9IGRyYWdJdGVtSGVpZ2h0LmRyYWcgLSBuZXdDZW50ZXJIZWlnaHQuZHJhZztcbiAgICB9XG4gICAgcmV0dXJuIGxhc3REcmFnLnN0YXJ0WSArIG9mZnNldCArXG4gICAgICB0aGlzLl9nZXREaXN0YW5jZShsYXN0RHJhZy5zdGFydEluZGV4LCBpbmRleCwgdHJ1ZSk7XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCk6ID9IVE1MRWxlbWVudCB7XG4gICAgY29uc3Qge2NvbnRhaW5lcn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIoKSA6IG51bGw7XG4gIH1cblxuICBfZ2V0S2V5Rm4oKTogKGl0ZW06IE9iamVjdCkgPT4gc3RyaW5nIHtcbiAgICBjb25zdCB7aXRlbUtleX0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0eXBlb2YgaXRlbUtleSA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZW1LZXkgOiB4ID0+IHhbaXRlbUtleV07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3NwcmluZ0NvbmZpZywgY29udGFpbmVyLCBwYWRkaW5nLCB0ZW1wbGF0ZSwgdW5zZXRaSW5kZXgsIGNvbW1vblByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2xpc3QsIGRyYWdnaW5nLCBsYXN0RHJhZywgdXNlQWJzb2x1dGVQb3NpdGlvbmluZ30gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qga2V5Rm4gPSB0aGlzLl9nZXRLZXlGbigpO1xuICAgIGNvbnN0IGFueVNlbGVjdGVkID0gc3ByaW5nKGRyYWdnaW5nID8gMSA6IDAsIHNwcmluZ0NvbmZpZyk7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGxpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlGbihpdGVtKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3R5bGUgPSBkcmFnZ2luZyAmJiBsYXN0RHJhZyAmJiBsYXN0RHJhZy5pdGVtS2V5ID09PSBrZXlcbiAgICAgICAgPyB7XG4gICAgICAgICAgaXRlbVNlbGVjdGVkOiBzcHJpbmcoMSwgc3ByaW5nQ29uZmlnKSxcbiAgICAgICAgICB5OiBsYXN0RHJhZy5tb3VzZVlcbiAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICBpdGVtU2VsZWN0ZWQ6IHNwcmluZygwLCBzcHJpbmdDb25maWcpLFxuICAgICAgICAgIHk6ICh1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nID8gc3ByaW5nIDogKHgsaWdub3JlZCk9PngpKGRyYWdnaW5nICYmIGxhc3REcmFnID9cbiAgICAgICAgICAgIHRoaXMuX2dldERpc3RhbmNlRHVyaW5nRHJhZyhsYXN0RHJhZywgaSlcbiAgICAgICAgICAgIDogdGhpcy5fZ2V0RGlzdGFuY2UoMCwgaSwgZmFsc2UpLCBzcHJpbmdDb25maWcpXG4gICAgICAgIH07XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgYW55U2VsZWN0ZWQsXG4gICAgICAgIC4uLnNlbGVjdGVkU3R5bGVcbiAgICAgIH07XG4gICAgICBjb25zdCBtYWtlRHJhZ0hhbmRsZSA9IChlbCwgZ2V0WTogKCk9Pj9udW1iZXIpID0+IChcbiAgICAgICAgPERyYWdIYW5kbGVcbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLl9oYW5kbGVNb3VzZURvd24oa2V5LCBnZXRZKCksIGUpfVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLl9oYW5kbGVUb3VjaFN0YXJ0KGtleSwgZ2V0WSgpLCBlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtlbH1cbiAgICAgICAgPC9EcmFnSGFuZGxlPlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX2hlaWdodHMuZ2V0KGtleSkgfHwgREVGQVVMVF9IRUlHSFQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TW90aW9uXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfSBrZXk9e2tleX1cbiAgICAgICAgICBjaGlsZHJlbj17KHtpdGVtU2VsZWN0ZWQsIGFueVNlbGVjdGVkLCB5fSkgPT5cbiAgICAgICAgICAgIDxNb3ZlQ29udGFpbmVyXG4gICAgICAgICAgICAgIHJlZj17c2F2ZVJlZnModGhpcy5faXRlbVJlZnMsIGtleSl9XG4gICAgICAgICAgICAgIHk9e3VzZUFic29sdXRlUG9zaXRpb25pbmcgPyB5IDogbnVsbH1cbiAgICAgICAgICAgICAgdGVtcGxhdGU9e3RlbXBsYXRlfVxuICAgICAgICAgICAgICBwYWRkaW5nPXtwYWRkaW5nfVxuICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICBpdGVtU2VsZWN0ZWQ9e2l0ZW1TZWxlY3RlZH1cbiAgICAgICAgICAgICAgYW55U2VsZWN0ZWQ9e2FueVNlbGVjdGVkfVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgekluZGV4PXt1bnNldFpJbmRleCAmJiAhdXNlQWJzb2x1dGVQb3NpdGlvbmluZyA/ICdhdXRvJyA6XG4gICAgICAgICAgICAgICAgKGxhc3REcmFnICYmIGxhc3REcmFnLml0ZW1LZXkgPT09IGtleSA/IGxpc3QubGVuZ3RoIDogaSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtYWtlRHJhZ0hhbmRsZT17bWFrZURyYWdIYW5kbGV9XG4gICAgICAgICAgICAgIGNvbW1vblByb3BzPXtjb21tb25Qcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGxldCBhZGp1c3RTY3JvbGwgPSAwO1xuICAgIGlmICghZHJhZ2dpbmcgJiYgbGFzdERyYWcgJiYgdXNlQWJzb2x1dGVQb3NpdGlvbmluZykge1xuICAgICAgY29uc3QgZHJhZ0luZGV4ID0gdGhpcy5fZ2V0RHJhZ0luZGV4KCk7XG4gICAgICBhZGp1c3RTY3JvbGwgPSBzcHJpbmcoXG4gICAgICAgIHRoaXMuX2dldERpc3RhbmNlKDAsIGRyYWdJbmRleCwgZmFsc2UpXG4gICAgICAgIC0gbGFzdERyYWcubW91c2VZLFxuICAgICAgICBzcHJpbmdDb25maWdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbENvbnRhaW5lckhlaWdodCA9IGAke3RoaXMuX2dldERpc3RhbmNlKDAsIGxpc3QubGVuZ3RoLCBmYWxzZSl9cHhgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgPE1vdGlvblxuICAgICAgICAgIHN0eWxlPXt7YWRqdXN0U2Nyb2xsLCBhbnlTZWxlY3RlZH19XG4gICAgICAgICAgb25SZXN0PXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2hlaWdodHMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlQWJzb2x1dGVQb3NpdGlvbmluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoaWxkcmVuPXsoe2FkanVzdFNjcm9sbH0pID0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdXNlQWJzb2x1dGVQb3NpdGlvbmluZyA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nID8gZnVsbENvbnRhaW5lckhlaWdodCA6ICcwcHgnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb250YWluZXIgJiYgPE9uVXBkYXRlIGNiPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkcmFnZ2luZyAmJiBsYXN0RHJhZyAmJiB1c2VBYnNvbHV0ZVBvc2l0aW9uaW5nKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9hZGp1c3RTY3JvbGxBdEVuZChhZGp1c3RTY3JvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX0gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(579), __esModule: true };

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(353);
	__webpack_require__(326);
	__webpack_require__(337);
	__webpack_require__(580);
	__webpack_require__(586);
	module.exports = __webpack_require__(7).Map;

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(581);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(582)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(333)
	  , redefineAll = __webpack_require__(537)
	  , ctx         = __webpack_require__(8)
	  , anInstance  = __webpack_require__(533)
	  , defined     = __webpack_require__(298)
	  , forOf       = __webpack_require__(534)
	  , $iterDefine = __webpack_require__(328)
	  , step        = __webpack_require__(340)
	  , setSpecies  = __webpack_require__(538)
	  , DESCRIPTORS = __webpack_require__(15)
	  , fastKey     = __webpack_require__(345).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , meta           = __webpack_require__(345)
	  , fails          = __webpack_require__(16)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(537)
	  , forOf          = __webpack_require__(534)
	  , anInstance     = __webpack_require__(533)
	  , isObject       = __webpack_require__(13)
	  , setToStringTag = __webpack_require__(335)
	  , dP             = __webpack_require__(11).f
	  , each           = __webpack_require__(583)(0)
	  , DESCRIPTORS    = __webpack_require__(15);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(8)
	  , IObject  = __webpack_require__(297)
	  , toObject = __webpack_require__(309)
	  , toLength = __webpack_require__(300)
	  , asc      = __webpack_require__(584);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(585);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(349)
	  , SPECIES  = __webpack_require__(336)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(587)('Map')});

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(389)
	  , from    = __webpack_require__(588);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(534);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(590);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(598);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(599);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(601);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(602);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(592);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(603);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(591);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(592);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(593);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(594);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(595);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(597);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);
	
	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);
	
	  function Motion(props) {
	    var _this = this;
	
	    _classCallCheck(this, Motion);
	
	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };
	
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	
	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return Motion;
	})(_react2['default'].Component);
	
	exports['default'] = Motion;
	module.exports = exports['default'];
	
	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 591 */
/***/ (function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 592 */
/***/ (function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 593 */
/***/ (function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(596)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 597 */
/***/ (function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(591);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(592);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(593);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(594);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(595);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(597);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);
	
	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function StaggeredMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, StaggeredMotion);
	
	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;
	
	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }
	
	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];
	
	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }
	
	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };
	
	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return StaggeredMotion;
	})(_react2['default'].Component);
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	
	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(591);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(592);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(593);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(600);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(594);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(595);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(597);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);
	
	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);
	
	  function TransitionMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, TransitionMotion);
	
	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];
	
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }
	
	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };
	
	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }
	
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }
	
	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];
	
	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }
	
	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };
	
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	
	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return TransitionMotion;
	})(_react2['default'].Component);
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

/***/ }),
/* 600 */
/***/ (function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(602);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ }),
/* 602 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (true) {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(235);
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var splice = Array.prototype.splice;
	
	var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
	  getAllKeys(source).forEach(function(key) {
	    if (hasOwnProperty.call(source, key)) {
	      target[key] = source[key];
	    }
	  });
	  return target;
	};
	
	var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
	  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
	  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };
	
	/* istanbul ignore next */
	function copy(object) {
	  if (object instanceof Array) {
	    return assign(object.constructor(object.length), object)
	  } else if (object && typeof object === 'object') {
	    var prototype = object.constructor && object.constructor.prototype
	    return assign(Object.create(prototype || null), object);
	  } else {
	    return object;
	  }
	}
	
	function newContext() {
	  var commands = assign({}, defaultCommands);
	  update.extend = function(directive, fn) {
	    commands[directive] = fn;
	  };
	  update.isEquals = function(a, b) { return a === b; };
	
	  return update;
	
	  function update(object, spec) {
	    if (!(Array.isArray(object) && Array.isArray(spec))) {
	      invariant(
	        !Array.isArray(spec),
	        'update(): You provided an invalid spec to update(). The spec may ' +
	        'not contain an array except as the value of $set, $push, $unshift, ' +
	        '$splice or any custom command allowing an array value.'
	      );
	    }
	
	    invariant(
	      typeof spec === 'object' && spec !== null,
	      'update(): You provided an invalid spec to update(). The spec and ' +
	      'every included key path must be plain objects containing one of the ' +
	      'following commands: %s.',
	      Object.keys(commands).join(', ')
	    );
	
	    var nextObject = object;
	    var index, key;
	    getAllKeys(spec).forEach(function(key) {
	      if (hasOwnProperty.call(commands, key)) {
	        var objectWasNextObject = object === nextObject;
	        nextObject = commands[key](spec[key], nextObject, spec, object);
	        if (objectWasNextObject && update.isEquals(nextObject, object)) {
	          nextObject = object;
	        }
	      } else {
	        var nextValueForKey = update(object[key], spec[key]);
	        if (!update.isEquals(nextValueForKey, nextObject[key])) {
	          if (nextObject === object) {
	            nextObject = copy(object);
	          }
	          nextObject[key] = nextValueForKey;
	        }
	      }
	    })
	    return nextObject;
	  }
	
	}
	
	var defaultCommands = {
	  $push: function(value, nextObject, spec) {
	    invariantPushAndUnshift(nextObject, spec, '$push');
	    return value.length ? nextObject.concat(value) : nextObject;
	  },
	  $unshift: function(value, nextObject, spec) {
	    invariantPushAndUnshift(nextObject, spec, '$unshift');
	    return value.length ? value.concat(nextObject) : nextObject;
	  },
	  $splice: function(value, nextObject, spec, originalObject) {
	    invariantSplices(nextObject, spec);
	    value.forEach(function(args) {
	      invariantSplice(args);
	      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
	      splice.apply(nextObject, args);
	    });
	    return nextObject;
	  },
	  $set: function(value, nextObject, spec) {
	    invariantSet(spec);
	    return value;
	  },
	  $unset: function(value, nextObject, spec, originalObject) {
	    invariant(
	      Array.isArray(value),
	      'update(): expected spec of $unset to be an array; got %s. ' +
	      'Did you forget to wrap the key(s) in an array?',
	      value
	    );
	    value.forEach(function(key) {
	      if (Object.hasOwnProperty.call(nextObject, key)) {
	        if (nextObject === originalObject) nextObject = copy(originalObject);
	        delete nextObject[key];
	      }
	    });
	    return nextObject;
	  },
	  $merge: function(value, nextObject, spec, originalObject) {
	    invariantMerge(nextObject, value);
	    getAllKeys(value).forEach(function(key) {
	      if (value[key] !== nextObject[key]) {
	        if (nextObject === originalObject) nextObject = copy(originalObject);
	        nextObject[key] = value[key];
	      }
	    });
	    return nextObject;
	  },
	  $apply: function(value, original) {
	    invariantApply(value);
	    return value(original);
	  }
	};
	
	module.exports = newContext();
	module.exports.newContext = newContext;
	
	// invariants
	
	function invariantPushAndUnshift(value, spec, command) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  );
	  var specValue = spec[command];
	  invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  );
	}
	
	function invariantSplices(value, spec) {
	  invariant(
	    Array.isArray(value),
	    'Expected $splice target to be an array; got %s',
	    value
	  );
	  invariantSplice(spec['$splice']);
	}
	
	function invariantSplice(value) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
	    'Did you forget to wrap your parameters in an array?',
	    value
	  );
	}
	
	function invariantApply(fn) {
	  invariant(
	    typeof fn === 'function',
	    'update(): expected spec of $apply to be a function; got %s.',
	    fn
	  );
	}
	
	function invariantSet(spec) {
	  invariant(
	    Object.keys(spec).length === 1,
	    'Cannot have more than one key in an object with $set'
	  );
	}
	
	function invariantMerge(target, specValue) {
	  invariant(
	    specValue && typeof specValue === 'object',
	    'update(): $merge expects a spec of type \'object\'; got %s',
	    specValue
	  );
	  invariant(
	    target && typeof target === 'object',
	    'update(): $merge expects a target of type \'object\'; got %s',
	    target
	  );
	}


/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = saveRefs;
	
	var _memoize = __webpack_require__(606);
	
	var _memoize2 = _interopRequireDefault(_memoize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var saversByMap = new WeakMap();
	
	function saveRefs(m, key) {
	  var saver = saversByMap.get(m);
	  if (!saver) {
	    saver = (0, _memoize2.default)(function (key) {
	      return function (el) {
	        if (el) {
	          m.set(key, el);
	        } else {
	          saver.cache.delete(key);
	          m.delete(key);
	        }
	      };
	    });
	    saversByMap.set(m, saver);
	  }
	  return saver(key);
	}
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXZlUmVmcyIsInNhdmVyc0J5TWFwIiwiV2Vha01hcCIsIm0iLCJrZXkiLCJzYXZlciIsImdldCIsImVsIiwic2V0IiwiY2FjaGUiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVF3QkEsUTs7QUFOeEI7Ozs7OztBQUlBLElBQU1DLGNBQTZELElBQUlDLE9BQUosRUFBbkU7O0FBRWUsU0FBU0YsUUFBVCxDQUFrQkcsQ0FBbEIsRUFBc0NDLEdBQXRDLEVBQXVEO0FBQ3BFLE1BQUlDLFFBQVFKLFlBQVlLLEdBQVosQ0FBZ0JILENBQWhCLENBQVo7QUFDQSxNQUFJLENBQUNFLEtBQUwsRUFBWTtBQUNWQSxZQUFRLHVCQUFRO0FBQUEsYUFBTyxjQUFNO0FBQzNCLFlBQUlFLEVBQUosRUFBUTtBQUNOSixZQUFFSyxHQUFGLENBQU1KLEdBQU4sRUFBV0csRUFBWDtBQUNELFNBRkQsTUFFTztBQUNKRixlQUFELENBQVlJLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCTixHQUF6QjtBQUNBRCxZQUFFTyxNQUFGLENBQVNOLEdBQVQ7QUFDRDtBQUNGLE9BUGU7QUFBQSxLQUFSLENBQVI7QUFRQUgsZ0JBQVlPLEdBQVosQ0FBZ0JMLENBQWhCLEVBQW1CRSxLQUFuQjtBQUNEO0FBQ0QsU0FBT0EsTUFBTUQsR0FBTixDQUFQO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gvbWVtb2l6ZSc7XG5cbnR5cGUgUmVmRm4gPSAoZWw6ID9PYmplY3QpID0+IHZvaWQ7XG5cbmNvbnN0IHNhdmVyc0J5TWFwOiBXZWFrTWFwPE1hcDxhbnksT2JqZWN0PiwgKGtleTogYW55KSA9PiBSZWZGbj4gPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlUmVmcyhtOiBNYXA8YW55LE9iamVjdD4sIGtleTogYW55KTogUmVmRm4ge1xuICBsZXQgc2F2ZXIgPSBzYXZlcnNCeU1hcC5nZXQobSk7XG4gIGlmICghc2F2ZXIpIHtcbiAgICBzYXZlciA9IG1lbW9pemUoa2V5ID0+IGVsID0+IHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBtLnNldChrZXksIGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChzYXZlcjphbnkpLmNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAgICBtLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNhdmVyc0J5TWFwLnNldChtLCBzYXZlcik7XG4gIH1cbiAgcmV0dXJuIHNhdmVyKGtleSk7XG59XG4iXX0=

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(607);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(608),
	    mapCacheDelete = __webpack_require__(633),
	    mapCacheGet = __webpack_require__(636),
	    mapCacheHas = __webpack_require__(637),
	    mapCacheSet = __webpack_require__(638);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(609),
	    ListCache = __webpack_require__(624),
	    Map = __webpack_require__(632);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(610),
	    hashDelete = __webpack_require__(620),
	    hashGet = __webpack_require__(621),
	    hashHas = __webpack_require__(622),
	    hashSet = __webpack_require__(623);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(611);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(612);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(613),
	    getValue = __webpack_require__(619);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(614),
	    isMasked = __webpack_require__(616),
	    isObject = __webpack_require__(615),
	    toSource = __webpack_require__(618);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(211),
	    isObject = __webpack_require__(615);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 615 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(617);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(213);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 618 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 619 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 620 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(611);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(611);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(611);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(625),
	    listCacheDelete = __webpack_require__(626),
	    listCacheGet = __webpack_require__(629),
	    listCacheHas = __webpack_require__(630),
	    listCacheSet = __webpack_require__(631);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 625 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(627);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(628);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 628 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(627);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(627);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(627);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(612),
	    root = __webpack_require__(213);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(634);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(635);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 635 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(634);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(634);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(634);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(60);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DragHandle = function (_React$Component) {
	  (0, _inherits3.default)(DragHandle, _React$Component);
	
	  function DragHandle() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, DragHandle);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DragHandle.__proto__ || (0, _getPrototypeOf2.default)(DragHandle)).call.apply(_ref, [this].concat(args))), _this), _this._onMouseDown = function (e) {
	      _this.props.onMouseDown.call(null, e);
	    }, _this._onTouchStart = function (e) {
	      _this.props.onTouchStart.call(null, e);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(DragHandle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = (0, _reactDom.findDOMNode)(this);
	      if (!node) throw new Error('DragHandle missing element');
	      node.addEventListener('mousedown', this._onMouseDown);
	      node.addEventListener('touchstart', this._onTouchStart);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var node = (0, _reactDom.findDOMNode)(this);
	      if (!node) throw new Error('DragHandle missing element');
	      node.removeEventListener('mousedown', this._onMouseDown);
	      node.removeEventListener('touchstart', this._onTouchStart);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.Children.only(this.props.children);
	    }
	  }]);
	  return DragHandle;
	}(_react2.default.Component);
	
	DragHandle.propTypes = {
	  onMouseDown: _propTypes2.default.func.isRequired,
	  onTouchStart: _propTypes2.default.func.isRequired,
	  children: _propTypes2.default.element.isRequired
	};
	exports.default = DragHandle;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EcmFnSGFuZGxlLmpzIl0sIm5hbWVzIjpbIkRyYWdIYW5kbGUiLCJfb25Nb3VzZURvd24iLCJlIiwicHJvcHMiLCJvbk1vdXNlRG93biIsImNhbGwiLCJfb25Ub3VjaFN0YXJ0Iiwib25Ub3VjaFN0YXJ0Iiwibm9kZSIsIkVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O29OQXFCbkJDLFksR0FBeUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzlCLFlBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NILENBQWxDO0FBQ0QsSyxRQUVESSxhLEdBQTBCLFVBQUNKLENBQUQsRUFBTztBQUMvQixZQUFLQyxLQUFMLENBQVdJLFlBQVgsQ0FBd0JGLElBQXhCLENBQTZCLElBQTdCLEVBQW1DSCxDQUFuQztBQUNELEs7Ozs7O3dDQXBCbUI7QUFDbEIsVUFBTU0sT0FBTywyQkFBWSxJQUFaLENBQWI7QUFDQSxVQUFJLENBQUNBLElBQUwsRUFBVyxNQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ1hELFdBQUtFLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLEtBQUtULFlBQXhDO0FBQ0FPLFdBQUtFLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DLEtBQUtKLGFBQXpDO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsVUFBTUUsT0FBTywyQkFBWSxJQUFaLENBQWI7QUFDQSxVQUFJLENBQUNBLElBQUwsRUFBVyxNQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ1hELFdBQUtHLG1CQUFMLENBQXlCLFdBQXpCLEVBQXNDLEtBQUtWLFlBQTNDO0FBQ0FPLFdBQUtHLG1CQUFMLENBQXlCLFlBQXpCLEVBQXVDLEtBQUtMLGFBQTVDO0FBQ0Q7Ozs2QkFVUTtBQUNQLGFBQU8sZ0JBQU1NLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixLQUFLVixLQUFMLENBQVdXLFFBQS9CLENBQVA7QUFDRDs7O0VBL0JxQyxnQkFBTUMsUzs7QUFBekJmLFUsQ0FDWmdCLFMsR0FBWTtBQUNqQlosZUFBYSxvQkFBVWEsSUFBVixDQUFlQyxVQURYO0FBRWpCWCxnQkFBYyxvQkFBVVUsSUFBVixDQUFlQyxVQUZaO0FBR2pCSixZQUFVLG9CQUFVSyxPQUFWLENBQWtCRDtBQUhYLEM7a0JBREFsQixVIiwiZmlsZSI6IkRyYWdIYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdIYW5kbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG91Y2hTdGFydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignRHJhZ0hhbmRsZSBtaXNzaW5nIGVsZW1lbnQnKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdEcmFnSGFuZGxlIG1pc3NpbmcgZWxlbWVudCcpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24pO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gIH1cblxuICBfb25Nb3VzZURvd246IEZ1bmN0aW9uID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duLmNhbGwobnVsbCwgZSk7XG4gIH07XG5cbiAgX29uVG91Y2hTdGFydDogRnVuY3Rpb24gPSAoZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25Ub3VjaFN0YXJ0LmNhbGwobnVsbCwgZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG4iXX0=

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OnUpdate = function (_React$Component) {
	  (0, _inherits3.default)(OnUpdate, _React$Component);
	
	  function OnUpdate() {
	    (0, _classCallCheck3.default)(this, OnUpdate);
	    return (0, _possibleConstructorReturn3.default)(this, (OnUpdate.__proto__ || (0, _getPrototypeOf2.default)(OnUpdate)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(OnUpdate, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.props.cb();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return OnUpdate;
	}(_react2.default.Component);
	
	OnUpdate.propTypes = {
	  cb: _propTypes2.default.func.isRequired
	};
	exports.default = OnUpdate;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PblVwZGF0ZS5qcyJdLCJuYW1lcyI6WyJPblVwZGF0ZSIsInByb3BzIiwiY2IiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7eUNBS0U7QUFDbkIsV0FBS0MsS0FBTCxDQUFXQyxFQUFYO0FBQ0Q7Ozs2QkFFYTtBQUNaLGFBQU8sSUFBUDtBQUNEOzs7RUFYbUMsZ0JBQU1DLFM7O0FBQXZCSCxRLENBQ1pJLFMsR0FBWTtBQUNqQkYsTUFBSSxvQkFBVUcsSUFBVixDQUFlQztBQURGLEM7a0JBREFOLFEiLCJmaWxlIjoiT25VcGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25VcGRhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNiOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMuY2IoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TemplateContainer = __webpack_require__(642);
	
	var _TemplateContainer2 = _interopRequireDefault(_TemplateContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MoveContainer = function (_React$Component) {
	  (0, _inherits3.default)(MoveContainer, _React$Component);
	
	  function MoveContainer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MoveContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MoveContainer.__proto__ || (0, _getPrototypeOf2.default)(MoveContainer)).call.apply(_ref, [this].concat(args))), _this), _this._templateContainerSetter = function (cmp) {
	      _this._templateContainer = cmp;
	    }, _this._dragHandle = function (el) {
	      return _this.props.makeDragHandle(el, function () {
	        return _this.props.y;
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(MoveContainer, [{
	    key: 'getTemplate',
	    value: function getTemplate() {
	      return this._templateContainer.getTemplate();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.anySelected !== nextProps.anySelected || this.props.itemSelected !== nextProps.itemSelected || this.props.item !== nextProps.item || this.props.template !== nextProps.template || this.props.y !== nextProps.y || this.props.height !== nextProps.height || this.props.zIndex !== nextProps.zIndex || this.props.commonProps !== nextProps.commonProps;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          item = _props.item,
	          y = _props.y,
	          padding = _props.padding,
	          itemSelected = _props.itemSelected,
	          anySelected = _props.anySelected,
	          height = _props.height,
	          zIndex = _props.zIndex,
	          template = _props.template,
	          commonProps = _props.commonProps;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          style: {
	            position: y == null ? 'relative' : 'absolute',
	            boxSizing: 'border-box',
	            left: '0px',
	            right: '0px',
	            top: y == null ? '0px' : y + 'px',
	            marginBottom: padding + 'px',
	            height: y == null ? 'auto' : anySelected * (height.drag - height.natural) + height.natural + 'px',
	            zIndex: zIndex
	          }
	        },
	        _react2.default.createElement(_TemplateContainer2.default, {
	          ref: this._templateContainerSetter,
	          item: item,
	          template: template,
	          itemSelected: itemSelected,
	          anySelected: anySelected,
	          dragHandle: this._dragHandle,
	          commonProps: commonProps
	        })
	      );
	    }
	  }]);
	  return MoveContainer;
	}(_react2.default.Component);
	
	MoveContainer.propTypes = {
	  item: _propTypes2.default.object.isRequired,
	  template: _propTypes2.default.func.isRequired,
	  padding: _propTypes2.default.number.isRequired,
	  y: _propTypes2.default.number,
	  itemSelected: _propTypes2.default.number.isRequired,
	  anySelected: _propTypes2.default.number.isRequired,
	  height: _propTypes2.default.object.isRequired,
	  zIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	  makeDragHandle: _propTypes2.default.func.isRequired,
	  commonProps: _propTypes2.default.object
	};
	exports.default = MoveContainer;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb3ZlQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIk1vdmVDb250YWluZXIiLCJfdGVtcGxhdGVDb250YWluZXJTZXR0ZXIiLCJjbXAiLCJfdGVtcGxhdGVDb250YWluZXIiLCJfZHJhZ0hhbmRsZSIsImVsIiwicHJvcHMiLCJtYWtlRHJhZ0hhbmRsZSIsInkiLCJnZXRUZW1wbGF0ZSIsIm5leHRQcm9wcyIsImFueVNlbGVjdGVkIiwiaXRlbVNlbGVjdGVkIiwiaXRlbSIsInRlbXBsYXRlIiwiaGVpZ2h0IiwiekluZGV4IiwiY29tbW9uUHJvcHMiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJib3hTaXppbmciLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJtYXJnaW5Cb3R0b20iLCJkcmFnIiwibmF0dXJhbCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBY3FCQSxhOzs7Ozs7Ozs7Ozs7OzswTkFtQm5CQyx3QixHQUEyQixVQUFDQyxHQUFELEVBQTRCO0FBQ3JELFlBQUtDLGtCQUFMLEdBQTBCRCxHQUExQjtBQUNELEssUUFpQkRFLFcsR0FBd0IsVUFBQ0MsRUFBRDtBQUFBLGFBQVEsTUFBS0MsS0FBTCxDQUFXQyxjQUFYLENBQTBCRixFQUExQixFQUE4QjtBQUFBLGVBQUksTUFBS0MsS0FBTCxDQUFXRSxDQUFmO0FBQUEsT0FBOUIsQ0FBUjtBQUFBLEs7Ozs7O2tDQWZvQjtBQUMxQyxhQUFPLEtBQUtMLGtCQUFMLENBQXdCTSxXQUF4QixFQUFQO0FBQ0Q7OzswQ0FFcUJDLFMsRUFBMkI7QUFDL0MsYUFBTyxLQUFLSixLQUFMLENBQVdLLFdBQVgsS0FBMkJELFVBQVVDLFdBQXJDLElBQ0wsS0FBS0wsS0FBTCxDQUFXTSxZQUFYLEtBQTRCRixVQUFVRSxZQURqQyxJQUVMLEtBQUtOLEtBQUwsQ0FBV08sSUFBWCxLQUFvQkgsVUFBVUcsSUFGekIsSUFHTCxLQUFLUCxLQUFMLENBQVdRLFFBQVgsS0FBd0JKLFVBQVVJLFFBSDdCLElBSUwsS0FBS1IsS0FBTCxDQUFXRSxDQUFYLEtBQWlCRSxVQUFVRixDQUp0QixJQUtMLEtBQUtGLEtBQUwsQ0FBV1MsTUFBWCxLQUFzQkwsVUFBVUssTUFMM0IsSUFNTCxLQUFLVCxLQUFMLENBQVdVLE1BQVgsS0FBc0JOLFVBQVVNLE1BTjNCLElBT0wsS0FBS1YsS0FBTCxDQUFXVyxXQUFYLEtBQTJCUCxVQUFVTyxXQVB2QztBQVFEOzs7NkJBSVE7QUFBQSxtQkFHSCxLQUFLWCxLQUhGO0FBQUEsVUFFTE8sSUFGSyxVQUVMQSxJQUZLO0FBQUEsVUFFQ0wsQ0FGRCxVQUVDQSxDQUZEO0FBQUEsVUFFSVUsT0FGSixVQUVJQSxPQUZKO0FBQUEsVUFFYU4sWUFGYixVQUVhQSxZQUZiO0FBQUEsVUFFMkJELFdBRjNCLFVBRTJCQSxXQUYzQjtBQUFBLFVBRXdDSSxNQUZ4QyxVQUV3Q0EsTUFGeEM7QUFBQSxVQUVnREMsTUFGaEQsVUFFZ0RBLE1BRmhEO0FBQUEsVUFFd0RGLFFBRnhELFVBRXdEQSxRQUZ4RDtBQUFBLFVBRWtFRyxXQUZsRSxVQUVrRUEsV0FGbEU7OztBQUtQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU87QUFDTEUsc0JBQVVYLEtBQUssSUFBTCxHQUFZLFVBQVosR0FBeUIsVUFEOUI7QUFFTFksdUJBQVcsWUFGTjtBQUdMQyxrQkFBTSxLQUhEO0FBSUxDLG1CQUFPLEtBSkY7QUFLTEMsaUJBQUtmLEtBQUssSUFBTCxHQUFZLEtBQVosR0FBdUJBLENBQXZCLE9BTEE7QUFNTGdCLDBCQUFpQk4sT0FBakIsT0FOSztBQU9MSCxvQkFBUVAsS0FBSyxJQUFMLEdBQVksTUFBWixHQUNIRyxlQUFhSSxPQUFPVSxJQUFQLEdBQVlWLE9BQU9XLE9BQWhDLElBQXlDWCxPQUFPVyxPQUQ3QyxPQVBIO0FBU0xWO0FBVEs7QUFEVDtBQWFFO0FBQ0UsZUFBSyxLQUFLZix3QkFEWjtBQUVFLGdCQUFNWSxJQUZSO0FBR0Usb0JBQVVDLFFBSFo7QUFJRSx3QkFBY0YsWUFKaEI7QUFLRSx1QkFBYUQsV0FMZjtBQU1FLHNCQUFZLEtBQUtQLFdBTm5CO0FBT0UsdUJBQWFhO0FBUGY7QUFiRixPQURGO0FBeUJEOzs7RUF0RXdDLGdCQUFNVSxTOztBQUE1QjNCLGEsQ0FFWjRCLFMsR0FBWTtBQUNqQmYsUUFBTSxvQkFBVWdCLE1BQVYsQ0FBaUJDLFVBRE47QUFFakJoQixZQUFVLG9CQUFVaUIsSUFBVixDQUFlRCxVQUZSO0FBR2pCWixXQUFTLG9CQUFVYyxNQUFWLENBQWlCRixVQUhUO0FBSWpCdEIsS0FBRyxvQkFBVXdCLE1BSkk7QUFLakJwQixnQkFBYyxvQkFBVW9CLE1BQVYsQ0FBaUJGLFVBTGQ7QUFNakJuQixlQUFhLG9CQUFVcUIsTUFBVixDQUFpQkYsVUFOYjtBQU9qQmYsVUFBUSxvQkFBVWMsTUFBVixDQUFpQkMsVUFQUjtBQVFqQmQsVUFBUSxvQkFBVWlCLFNBQVYsQ0FBb0IsQ0FDMUIsb0JBQVVDLE1BRGdCLEVBRTFCLG9CQUFVRixNQUZnQixDQUFwQixFQUdMRixVQVhjO0FBWWpCdkIsa0JBQWdCLG9CQUFVd0IsSUFBVixDQUFlRCxVQVpkO0FBYWpCYixlQUFhLG9CQUFVWTtBQWJOLEM7a0JBRkE3QixhIiwiZmlsZSI6Ik1vdmVDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZW1wbGF0ZUNvbnRhaW5lciBmcm9tICcuL1RlbXBsYXRlQ29udGFpbmVyJztcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbTogT2JqZWN0O1xuICB0ZW1wbGF0ZTogRnVuY3Rpb247XG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgeTogP251bWJlcjtcbiAgaXRlbVNlbGVjdGVkOiBudW1iZXI7XG4gIGFueVNlbGVjdGVkOiBudW1iZXI7XG4gIGhlaWdodDogT2JqZWN0O1xuICB6SW5kZXg6IG51bWJlcnxzdHJpbmc7XG4gIG1ha2VEcmFnSGFuZGxlOiBGdW5jdGlvbjtcbiAgY29tbW9uUHJvcHM/OiA/T2JqZWN0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBwcm9wczogUHJvcHM7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRlbXBsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGl0ZW1TZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGFueVNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgekluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBtYWtlRHJhZ0hhbmRsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb21tb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIF90ZW1wbGF0ZUNvbnRhaW5lcjogVGVtcGxhdGVDb250YWluZXI7XG4gIF90ZW1wbGF0ZUNvbnRhaW5lclNldHRlciA9IChjbXA6IFRlbXBsYXRlQ29udGFpbmVyKSA9PiB7XG4gICAgdGhpcy5fdGVtcGxhdGVDb250YWluZXIgPSBjbXA7XG4gIH07XG5cbiAgZ2V0VGVtcGxhdGUoKTogUmVhY3QuQ29tcG9uZW50PGFueSxhbnksYW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlQ29udGFpbmVyLmdldFRlbXBsYXRlKCk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBQcm9wcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFueVNlbGVjdGVkICE9PSBuZXh0UHJvcHMuYW55U2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMucHJvcHMuaXRlbVNlbGVjdGVkICE9PSBuZXh0UHJvcHMuaXRlbVNlbGVjdGVkIHx8XG4gICAgICB0aGlzLnByb3BzLml0ZW0gIT09IG5leHRQcm9wcy5pdGVtIHx8XG4gICAgICB0aGlzLnByb3BzLnRlbXBsYXRlICE9PSBuZXh0UHJvcHMudGVtcGxhdGUgfHxcbiAgICAgIHRoaXMucHJvcHMueSAhPT0gbmV4dFByb3BzLnkgfHxcbiAgICAgIHRoaXMucHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XG4gICAgICB0aGlzLnByb3BzLnpJbmRleCAhPT0gbmV4dFByb3BzLnpJbmRleCB8fFxuICAgICAgdGhpcy5wcm9wcy5jb21tb25Qcm9wcyAhPT0gbmV4dFByb3BzLmNvbW1vblByb3BzO1xuICB9XG5cbiAgX2RyYWdIYW5kbGU6IEZ1bmN0aW9uID0gKGVsKSA9PiB0aGlzLnByb3BzLm1ha2VEcmFnSGFuZGxlKGVsLCAoKT0+dGhpcy5wcm9wcy55KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSwgeSwgcGFkZGluZywgaXRlbVNlbGVjdGVkLCBhbnlTZWxlY3RlZCwgaGVpZ2h0LCB6SW5kZXgsIHRlbXBsYXRlLCBjb21tb25Qcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogeSA9PSBudWxsID8gJ3JlbGF0aXZlJyA6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgIHRvcDogeSA9PSBudWxsID8gJzBweCcgOiBgJHt5fXB4YCxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IGAke3BhZGRpbmd9cHhgLFxuICAgICAgICAgIGhlaWdodDogeSA9PSBudWxsID8gJ2F1dG8nIDpcbiAgICAgICAgICAgIGAke2FueVNlbGVjdGVkKihoZWlnaHQuZHJhZy1oZWlnaHQubmF0dXJhbCkraGVpZ2h0Lm5hdHVyYWx9cHhgLFxuICAgICAgICAgIHpJbmRleFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGVtcGxhdGVDb250YWluZXJcbiAgICAgICAgICByZWY9e3RoaXMuX3RlbXBsYXRlQ29udGFpbmVyU2V0dGVyfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgdGVtcGxhdGU9e3RlbXBsYXRlfVxuICAgICAgICAgIGl0ZW1TZWxlY3RlZD17aXRlbVNlbGVjdGVkfVxuICAgICAgICAgIGFueVNlbGVjdGVkPXthbnlTZWxlY3RlZH1cbiAgICAgICAgICBkcmFnSGFuZGxlPXt0aGlzLl9kcmFnSGFuZGxlfVxuICAgICAgICAgIGNvbW1vblByb3BzPXtjb21tb25Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TemplateContainer = function (_React$Component) {
	  (0, _inherits3.default)(TemplateContainer, _React$Component);
	
	  function TemplateContainer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TemplateContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TemplateContainer.__proto__ || (0, _getPrototypeOf2.default)(TemplateContainer)).call.apply(_ref, [this].concat(args))), _this), _this._templateSetter = function (cmp) {
	      _this._template = cmp;
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TemplateContainer, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.anySelected !== nextProps.anySelected || this.props.itemSelected !== nextProps.itemSelected || this.props.item !== nextProps.item || this.props.template !== nextProps.template || this.props.commonProps !== nextProps.commonProps;
	    }
	  }, {
	    key: 'getTemplate',
	    value: function getTemplate() {
	      return this._template;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          item = _props.item,
	          itemSelected = _props.itemSelected,
	          anySelected = _props.anySelected,
	          dragHandle = _props.dragHandle,
	          commonProps = _props.commonProps;
	
	      var Template = this.props.template;
	
	      return _react2.default.createElement(Template, {
	        ref: this._templateSetter,
	        item: item,
	        itemSelected: itemSelected,
	        anySelected: anySelected,
	        dragHandle: dragHandle,
	        commonProps: commonProps
	      });
	    }
	  }]);
	  return TemplateContainer;
	}(_react2.default.Component);
	
	TemplateContainer.propTypes = {
	  item: _propTypes2.default.object.isRequired,
	  template: _propTypes2.default.func.isRequired,
	  itemSelected: _propTypes2.default.number.isRequired,
	  anySelected: _propTypes2.default.number.isRequired,
	  dragHandle: _propTypes2.default.func.isRequired,
	  commonProps: _propTypes2.default.object
	};
	exports.default = TemplateContainer;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZW1wbGF0ZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZUNvbnRhaW5lciIsIl90ZW1wbGF0ZVNldHRlciIsImNtcCIsIl90ZW1wbGF0ZSIsIm5leHRQcm9wcyIsInByb3BzIiwiYW55U2VsZWN0ZWQiLCJpdGVtU2VsZWN0ZWQiLCJpdGVtIiwidGVtcGxhdGUiLCJjb21tb25Qcm9wcyIsImRyYWdIYW5kbGUiLCJUZW1wbGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQVVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7O2tPQVluQkMsZSxHQUFrQixVQUFDQyxHQUFELEVBQVk7QUFDNUIsWUFBS0MsU0FBTCxHQUFpQkQsR0FBakI7QUFDRCxLOzs7OzswQ0FFcUJFLFMsRUFBMkI7QUFDL0MsYUFBTyxLQUFLQyxLQUFMLENBQVdDLFdBQVgsS0FBMkJGLFVBQVVFLFdBQXJDLElBQ0wsS0FBS0QsS0FBTCxDQUFXRSxZQUFYLEtBQTRCSCxVQUFVRyxZQURqQyxJQUVMLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxLQUFvQkosVUFBVUksSUFGekIsSUFHTCxLQUFLSCxLQUFMLENBQVdJLFFBQVgsS0FBd0JMLFVBQVVLLFFBSDdCLElBSUwsS0FBS0osS0FBTCxDQUFXSyxXQUFYLEtBQTJCTixVQUFVTSxXQUp2QztBQUtEOzs7a0NBRTJDO0FBQzFDLGFBQU8sS0FBS1AsU0FBWjtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDNEQsS0FBS0UsS0FEakU7QUFBQSxVQUNBRyxJQURBLFVBQ0FBLElBREE7QUFBQSxVQUNNRCxZQUROLFVBQ01BLFlBRE47QUFBQSxVQUNvQkQsV0FEcEIsVUFDb0JBLFdBRHBCO0FBQUEsVUFDaUNLLFVBRGpDLFVBQ2lDQSxVQURqQztBQUFBLFVBQzZDRCxXQUQ3QyxVQUM2Q0EsV0FEN0M7O0FBRVAsVUFBTUUsV0FBVyxLQUFLUCxLQUFMLENBQVdJLFFBQTVCOztBQUVBLGFBQ0UsOEJBQUMsUUFBRDtBQUNFLGFBQUssS0FBS1IsZUFEWjtBQUVFLGNBQU1PLElBRlI7QUFHRSxzQkFBY0QsWUFIaEI7QUFJRSxxQkFBYUQsV0FKZjtBQUtFLG9CQUFZSyxVQUxkO0FBTUUscUJBQWFEO0FBTmYsUUFERjtBQVVEOzs7RUExQzRDLGdCQUFNRyxTOztBQUFoQ2IsaUIsQ0FFWmMsUyxHQUFZO0FBQ2pCTixRQUFNLG9CQUFVTyxNQUFWLENBQWlCQyxVQUROO0FBRWpCUCxZQUFVLG9CQUFVUSxJQUFWLENBQWVELFVBRlI7QUFHakJULGdCQUFjLG9CQUFVVyxNQUFWLENBQWlCRixVQUhkO0FBSWpCVixlQUFhLG9CQUFVWSxNQUFWLENBQWlCRixVQUpiO0FBS2pCTCxjQUFZLG9CQUFVTSxJQUFWLENBQWVELFVBTFY7QUFNakJOLGVBQWEsb0JBQVVLO0FBTk4sQztrQkFGQWYsaUIiLCJmaWxlIjoiVGVtcGxhdGVDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgaXRlbTogT2JqZWN0O1xuICB0ZW1wbGF0ZTogRnVuY3Rpb247XG4gIGl0ZW1TZWxlY3RlZDogbnVtYmVyO1xuICBhbnlTZWxlY3RlZDogbnVtYmVyO1xuICBkcmFnSGFuZGxlOiBGdW5jdGlvbjtcbiAgY29tbW9uUHJvcHM/OiA/T2JqZWN0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcHJvcHM6IFByb3BzO1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0ZW1wbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpdGVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBhbnlTZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGRyYWdIYW5kbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY29tbW9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBfdGVtcGxhdGU6IFJlYWN0LkNvbXBvbmVudDxhbnksYW55LGFueT47XG4gIF90ZW1wbGF0ZVNldHRlciA9IChjbXA6ICopID0+IHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNtcDtcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBQcm9wcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFueVNlbGVjdGVkICE9PSBuZXh0UHJvcHMuYW55U2VsZWN0ZWQgfHxcbiAgICAgIHRoaXMucHJvcHMuaXRlbVNlbGVjdGVkICE9PSBuZXh0UHJvcHMuaXRlbVNlbGVjdGVkIHx8XG4gICAgICB0aGlzLnByb3BzLml0ZW0gIT09IG5leHRQcm9wcy5pdGVtIHx8XG4gICAgICB0aGlzLnByb3BzLnRlbXBsYXRlICE9PSBuZXh0UHJvcHMudGVtcGxhdGUgfHxcbiAgICAgIHRoaXMucHJvcHMuY29tbW9uUHJvcHMgIT09IG5leHRQcm9wcy5jb21tb25Qcm9wcztcbiAgfVxuXG4gIGdldFRlbXBsYXRlKCk6IFJlYWN0LkNvbXBvbmVudDxhbnksYW55LGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXRlbSwgaXRlbVNlbGVjdGVkLCBhbnlTZWxlY3RlZCwgZHJhZ0hhbmRsZSwgY29tbW9uUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBUZW1wbGF0ZSA9IHRoaXMucHJvcHMudGVtcGxhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRlbXBsYXRlXG4gICAgICAgIHJlZj17dGhpcy5fdGVtcGxhdGVTZXR0ZXJ9XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIGl0ZW1TZWxlY3RlZD17aXRlbVNlbGVjdGVkfVxuICAgICAgICBhbnlTZWxlY3RlZD17YW55U2VsZWN0ZWR9XG4gICAgICAgIGRyYWdIYW5kbGU9e2RyYWdIYW5kbGV9XG4gICAgICAgIGNvbW1vblByb3BzPXtjb21tb25Qcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TransitionGroup = __webpack_require__(464);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _CSSTransitionGroupChild = __webpack_require__(644);
	
	var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);
	
	var _PropTypes = __webpack_require__(651);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  transitionName: _PropTypes.nameShape.isRequired,
	
	  transitionAppear: _propTypes2.default.bool,
	  transitionEnter: _propTypes2.default.bool,
	  transitionLeave: _propTypes2.default.bool,
	  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
	  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
	  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
	};
	
	var defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};
	
	var CSSTransitionGroup = function (_React$Component) {
	  _inherits(CSSTransitionGroup, _React$Component);
	
	  function CSSTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CSSTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  // We need to provide this childFactory so that
	  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	  // leave while it is leaving.
	
	
	  CSSTransitionGroup.prototype.render = function render() {
	    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
	  };
	
	  return CSSTransitionGroup;
	}(_react2.default.Component);
	
	CSSTransitionGroup.displayName = 'CSSTransitionGroup';
	
	
	CSSTransitionGroup.propTypes =  true ? propTypes : {};
	CSSTransitionGroup.defaultProps = defaultProps;
	
	exports.default = CSSTransitionGroup;
	module.exports = exports['default'];

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _addClass = __webpack_require__(645);
	
	var _addClass2 = _interopRequireDefault(_addClass);
	
	var _removeClass = __webpack_require__(647);
	
	var _removeClass2 = _interopRequireDefault(_removeClass);
	
	var _requestAnimationFrame = __webpack_require__(648);
	
	var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
	
	var _properties = __webpack_require__(650);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(60);
	
	var _PropTypes = __webpack_require__(651);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var events = [];
	if (_properties.transitionEnd) events.push(_properties.transitionEnd);
	if (_properties.animationEnd) events.push(_properties.animationEnd);
	
	function addEndListener(node, listener) {
	  if (events.length) {
	    events.forEach(function (e) {
	      return node.addEventListener(e, listener, false);
	    });
	  } else {
	    setTimeout(listener, 0);
	  }
	
	  return function () {
	    if (!events.length) return;
	    events.forEach(function (e) {
	      return node.removeEventListener(e, listener, false);
	    });
	  };
	}
	
	var propTypes = {
	  children: _propTypes2.default.node,
	  name: _PropTypes.nameShape.isRequired,
	
	  // Once we require timeouts to be specified, we can remove the
	  // boolean flags (appear etc.) and just accept a number
	  // or a bool for the timeout flags (appearTimeout etc.)
	  appear: _propTypes2.default.bool,
	  enter: _propTypes2.default.bool,
	  leave: _propTypes2.default.bool,
	  appearTimeout: _propTypes2.default.number,
	  enterTimeout: _propTypes2.default.number,
	  leaveTimeout: _propTypes2.default.number
	};
	
	var CSSTransitionGroupChild = function (_React$Component) {
	  _inherits(CSSTransitionGroupChild, _React$Component);
	
	  function CSSTransitionGroupChild() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CSSTransitionGroupChild);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
	      if (_this.props.appear) {
	        _this.transition('appear', done, _this.props.appearTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillEnter = function (done) {
	      if (_this.props.enter) {
	        _this.transition('enter', done, _this.props.enterTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillLeave = function (done) {
	      if (_this.props.leave) {
	        _this.transition('leave', done, _this.props.leaveTimeout);
	      } else {
	        done();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  };
	
	  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounted = true;
	
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	
	    this.classNameAndNodeQueue.length = 0;
	  };
	
	  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
	    var node = (0, _reactDom.findDOMNode)(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timer = null;
	    var removeListeners = void 0;
	
	    (0, _addClass2.default)(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);
	
	    // Clean-up the animation after the specified delay
	    var finish = function finish(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timer);
	      if (removeListeners) removeListeners();
	
	      (0, _removeClass2.default)(node, className);
	      (0, _removeClass2.default)(node, activeClassName);
	
	      if (removeListeners) removeListeners();
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    if (timeout) {
	      timer = setTimeout(finish, timeout);
	      this.transitionTimeouts.push(timer);
	    } else if (_properties.transitionEnd) {
	      removeListeners = addEndListener(node, finish);
	    }
	  };
	
	  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
	    var _this2 = this;
	
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });
	
	    if (!this.rafHandle) {
	      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
	        return _this2.flushClassNameAndNodeQueue();
	      });
	    }
	  };
	
	  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
	    if (!this.unmounted) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        // This is for to force a repaint,
	        // which is necessary in order to transition styles when adding a class name.
	        /* eslint-disable no-unused-expressions */
	        obj.node.scrollTop;
	        /* eslint-enable no-unused-expressions */
	        (0, _addClass2.default)(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.rafHandle = null;
	  };
	
	  CSSTransitionGroupChild.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    delete props.name;
	    delete props.appear;
	    delete props.enter;
	    delete props.leave;
	    delete props.appearTimeout;
	    delete props.enterTimeout;
	    delete props.leaveTimeout;
	    delete props.children;
	    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
	  };
	
	  return CSSTransitionGroupChild;
	}(_react2.default.Component);
	
	CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';
	
	
	CSSTransitionGroupChild.propTypes =  true ? propTypes : {};
	
	exports.default = CSSTransitionGroupChild;
	module.exports = exports['default'];

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addClass;
	
	var _hasClass = __webpack_require__(646);
	
	var _hasClass2 = _interopRequireDefault(_hasClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
	}
	module.exports = exports['default'];

/***/ }),
/* 646 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasClass;
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
	}
	module.exports = exports["default"];

/***/ }),
/* 647 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(649);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
	var cancel = 'clearTimeout';
	var raf = fallback;
	var compatRaf = void 0;
	
	var getKey = function getKey(vendor, k) {
	  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
	};
	
	if (_inDOM2.default) {
	  vendors.some(function (vendor) {
	    var rafKey = getKey(vendor, 'request');
	
	    if (rafKey in window) {
	      cancel = getKey(vendor, 'cancel');
	      return raf = function raf(cb) {
	        return window[rafKey](cb);
	      };
	    }
	  });
	}
	
	/* https://github.com/component/raf */
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime(),
	      ms = Math.max(0, 16 - (curr - prev)),
	      req = setTimeout(fn, ms);
	
	  prev = curr;
	  return req;
	}
	
	compatRaf = function compatRaf(cb) {
	  return raf(cb);
	};
	compatRaf.cancel = function (id) {
	  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
	};
	exports.default = compatRaf;
	module.exports = exports['default'];

/***/ }),
/* 649 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(649);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.nameShape = undefined;
	exports.transitionTimeout = transitionTimeout;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function transitionTimeout(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	
	    return null;
	  };
	}
	
	var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  active: _propTypes2.default.string
	}), _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  enterActive: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  leaveActive: _propTypes2.default.string,
	  appear: _propTypes2.default.string,
	  appearActive: _propTypes2.default.string
	})]);

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(364);
	
	var _leaflet = __webpack_require__(516);
	
	var _LeafletNav = __webpack_require__(653);
	
	var _LeafletNav2 = _interopRequireDefault(_LeafletNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  newSection: function newSection(title) {
	    return (0, _leaflet.newSection)(title);
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    sections: state.leaflet.sections
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LeafletNav2.default);

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _LeafletNav = __webpack_require__(654);
	
	var _LeafletNav2 = _interopRequireDefault(_LeafletNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LeafletNav2.default;

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LeafletNav = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(655);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LeafletSectionContainer = __webpack_require__(657);
	
	var _LeafletSectionContainer2 = _interopRequireDefault(_LeafletSectionContainer);
	
	var _TextField = __webpack_require__(557);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _FlatButton = __webpack_require__(569);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(565);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  search: {
	    width: '100%'
	  },
	  newSection: {
	    fontSize: '1em'
	  }
	};
	
	var LeafletNav = exports.LeafletNav = function (_React$Component) {
	  (0, _inherits3.default)(LeafletNav, _React$Component);
	
	  function LeafletNav(props) {
	    (0, _classCallCheck3.default)(this, LeafletNav);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (LeafletNav.__proto__ || (0, _getPrototypeOf2.default)(LeafletNav)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ open: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ open: false });
	    };
	
	    _this.attemptCreateSection = function () {
	      if (_this.state.sectionTitle !== undefined && _this.state.sectionTitle !== '') {
	        if (_this.state.sectionTitle.length <= 32) {
	          _this.props.newSection(_this.state.sectionTitle);
	          _this.handleClose();
	        } else {
	          _this.setState(function (prevState) {
	            return {
	              errorText: 'Cannot exceed 32 characters!'
	            };
	          });
	        }
	      } else {
	        _this.setState(function (prevState) {
	          return {
	            errorText: 'Cannot be empty!'
	          };
	        });
	      }
	    };
	
	    _this.state = {
	      open: false,
	      sectionTitle: ''
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(LeafletNav, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'leafletNav__core' },
	        _react2.default.createElement(_TextField2.default, { style: styles.search,
	          hintText: 'Search Leaflet'
	        }),
	        this.props.sections.map(function (section, index) {
	          return _react2.default.createElement(_LeafletSectionContainer2.default, { key: index, title: section.title,
	            pages: section.pages, position: index });
	        }),
	        _react2.default.createElement(_FlatButton2.default, { labelStyle: styles.newSection,
	          onClick: function onClick() {
	            return _this2.handleOpen();
	          }, label: 'New Section', fullWidth: true, primary: true }),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            actions: [_react2.default.createElement(_FlatButton2.default, {
	              label: 'Cancel',
	              onTouchTap: this.handleClose
	            }), _react2.default.createElement(_FlatButton2.default, {
	              label: 'Create Section',
	              primary: true,
	              onTouchTap: this.attemptCreateSection
	            })],
	            modal: false,
	            open: this.state.open,
	            onRequestClose: this.handleClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            'Name the new Section',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_TextField2.default, { style: styles.newSectionName,
	              hintText: this.state.pageTitle ? '' : 'Section Name',
	              ref: function ref(input) {
	                _this2.newPageInput = input;
	              },
	              errorText: this.state.errorText,
	              onChange: function onChange(e, nv) {
	                _this2.setState({ sectionTitle: nv });
	              }
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return LeafletNav;
	}(_react2.default.Component);
	
	LeafletNav.propTypes = {
	  sections: _propTypes2.default.array.isRequired,
	  newSection: _propTypes2.default.func.isRequired
	};
	
	exports.default = LeafletNav;

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(656);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(445)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(656, function() {
				var newContent = __webpack_require__(656);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(444)();
	// imports
	
	
	// module
	exports.push([module.id, ".leafletNav__core{display:inline-block;position:fixed;padding-left:.5em;float:left}@media screen and (max-width:540px){.leafletNav__core{width:30%}}@media screen and (min-width:540px){.leafletNav__core{width:20%}}.leafletSection__newPage{opacity:.2;transition-property:opacity,font-size;transition-duration:.2s}.leafletSection__newPage__iconCheck,.leafletSection__newPage__iconClose{opacity:.56;padding:0}.leafletSection__newPage:hover{opacity:1}.row{width:100%}.leafletPageTitle,.leafletPageTitleSelected{font-size:1em;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;max-width:85%;transition-property:opacity,font-size;transition-duration:.2s;cursor:pointer}.leafletPageTitle:hover .LeafletPageFav,.leafletPageTitleSelected:hover .LeafletPageFav{opacity:.56;width:1em!important;height:1em!important}.leafletPageTitleSelected{font-weight:500}.leafletPageTitle:hover .leafletPageFavFiller,.leafletPageTitleSelected:hover .leafletPageFavFiller{opacity:.2}.leafletPageFav{width:1em!important;height:1em!important;opacity:.4;display:inline-block}.leafletPageFav:hover{opacity:1}.leafletPageFavFiller{width:1em!important;height:1em!important;opacity:0;display:inline-block}.leafletPageFavFiller:hover{opacity:1!important}", "", {"version":3,"sources":["/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/LeafletNav/src/routes/Leaflet/components/LeafletNav/LeafletNav.scss"],"names":[],"mappings":"AAEA,kBACE,qBAAqB,eACN,kBACI,UACR,CACX,oCALF,kBAMI,SAAU,CAMb,CAHC,oCATF,kBAUI,SAAU,CAEb,CAAA,yBAGC,WAAY,sCAC2B,uBACd,CAC1B,wEAGC,YAAa,SACH,CACX,+BAOC,SAAU,CACX,KAGC,UAAW,CACZ,4CAGC,cAAc,gBACE,mBACG,gBACH,uBACO,qBACF,cACP,sCACyB,wBACd,cACV,CAChB,wFAOC,YAAa,oBACQ,oBACC,CACvB,0BAIC,eAAgB,CACjB,oGAOC,UAAY,CACb,gBAGC,oBAAqB,qBACC,WACV,oBACS,CACtB,sBAGC,SAAU,CACX,sBAGC,oBAAqB,qBACC,UACZ,oBACW,CACtB,4BAGA,mBAAqB,CACrB","file":"LeafletNav.scss","sourcesContent":["$break-small: 540px;\n\n.leafletNav__core {\n  display: inline-block;\n  position: fixed;\n  padding-left: 0.5em;\n  float: left;\n  @media screen and (max-width: $break-small) {\n    width: 30%;\n  }\n\n  @media screen and (min-width: $break-small) {\n    width: 20%;\n  }\n}\n\n.leafletSection__newPage {\n  opacity: 0.2;\n  transition-property: opacity, font-size;\n  transition-duration: 0.2s;\n}\n\n.leafletSection__newPage__iconClose {\n  opacity: 0.56;\n  padding: 0;\n}\n\n.leafletSection__newPage__iconCheck {\n  @extend .leafletSection__newPage__iconClose;\n}\n\n.leafletSection__newPage:hover {\n  opacity: 1;\n}\n\n.row {\n  width: 100%;\n}\n\n.leafletPageTitle {\n  font-size: 1em;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 85%;\n  transition-property: opacity, font-size;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\n.leafletPageTitle:hover {\n  // font-size: 1.1em;\n}\n\n.leafletPageTitle:hover .LeafletPageFav {\n  opacity: 0.56;\n  width: 1em !important;\n  height: 1em !important;\n}\n\n.leafletPageTitleSelected {\n  @extend .leafletPageTitle;\n  font-weight: 500;\n}\n\n.leafletPageTitleSelected:hover {\n  @extend .leafletPageTitle:hover;\n}\n\n.leafletPageTitle:hover .leafletPageFavFiller {\n  opacity: 0.2;\n}\n\n.leafletPageFav {\n  width: 1em !important;\n  height: 1em !important;\n  opacity: 0.4;\n  display: inline-block;\n}\n\n.leafletPageFav:hover {\n  opacity: 1;\n}\n\n.leafletPageFavFiller {\n  width: 1em !important;\n  height: 1em !important;\n  opacity: 0;\n  display: inline-block;\n}\n\n.leafletPageFavFiller:hover {\n opacity: 1 !important;\n}\n"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(364);
	
	var _leaflet = __webpack_require__(516);
	
	var _LeafletSection = __webpack_require__(658);
	
	var _LeafletSection2 = _interopRequireDefault(_LeafletSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  newPage: function newPage(title, position) {
	    return (0, _leaflet.newPage)(title, position);
	  }
	
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LeafletSection2.default);

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LeafletSection = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(655);
	
	var _LeafletPageContainer = __webpack_require__(659);
	
	var _LeafletPageContainer2 = _interopRequireDefault(_LeafletPageContainer);
	
	var _NewLeafletPage = __webpack_require__(665);
	
	var _NewLeafletPage2 = _interopRequireDefault(_NewLeafletPage);
	
	var _IconButton = __webpack_require__(450);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _chevronRight = __webpack_require__(667);
	
	var _chevronRight2 = _interopRequireDefault(_chevronRight);
	
	var _keyboardArrowDown = __webpack_require__(668);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	var _add = __webpack_require__(669);
	
	var _add2 = _interopRequireDefault(_add);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  sectionTitle: {
	    fontWeight: '100',
	    fontSize: '1.5em',
	    whiteSpace: 'nowrap',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    maxWidth: '85%',
	    display: 'inline-block'
	  },
	  ul: {
	    listStyle: 'none',
	    width: '100%',
	    paddingLeft: '1.5em',
	    marginBottom: '0'
	  },
	  chevron: {
	    padding: 0,
	    width: '36px',
	    height: '36px'
	  },
	  newPageIcon: {
	    padding: 0,
	    float: 'right',
	    width: '36px',
	    height: '36px'
	  }
	};
	
	var LeafletSection = exports.LeafletSection = function (_React$Component) {
	  (0, _inherits3.default)(LeafletSection, _React$Component);
	
	  function LeafletSection(props) {
	    (0, _classCallCheck3.default)(this, LeafletSection);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (LeafletSection.__proto__ || (0, _getPrototypeOf2.default)(LeafletSection)).call(this, props));
	
	    _this.toggleOpen = function () {
	      _this.setState(function (prevState, props) {
	        return { isOpen: !prevState.isOpen };
	      });
	    };
	
	    _this.newPageOpen = function () {
	      _this.setState(function (prevState, props) {
	        return {
	          isOpen: true,
	          newPage: !prevState.newPage
	        };
	      });
	    };
	
	    _this.cancelNewPage = function () {
	      _this.setState(function (prevState, props) {
	        return {
	          newPage: false,
	          isOpen: prevState.isOpen
	        };
	      });
	    };
	
	    _this.createNewPage = function (title) {
	      _this.props.newPage(title, _this.props.position);
	      _this.setState(function (prevState, props) {
	        return {
	          newPage: false,
	          isOpen: prevState.isOpen
	        };
	      });
	    };
	
	    _this.props = props;
	    _this.state = { isOpen: false, newPage: false };
	    return _this;
	  }
	
	  (0, _createClass3.default)(LeafletSection, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _IconButton2.default,
	            { onClick: this.toggleOpen, style: styles.chevron },
	            this.state.isOpen ? _react2.default.createElement(_keyboardArrowDown2.default, null) : _react2.default.createElement(_chevronRight2.default, null)
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: styles.sectionTitle },
	            this.props.title
	          ),
	          _react2.default.createElement(
	            _IconButton2.default,
	            { onClick: this.newPageOpen, style: styles.newPageIcon, className: 'leafletSection__newPage' },
	            _react2.default.createElement(_add2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.isOpen ? _react2.default.createElement(
	            'ul',
	            { style: styles.ul },
	            this.props.pages.map(function (p, index) {
	              return _react2.default.createElement(
	                'li',
	                { key: index },
	                _react2.default.createElement(_LeafletPageContainer2.default, { title: p.title, position: [_this2.props.position, index],
	                  isFavorited: p.isFavorited })
	              );
	            })
	          ) : null,
	          this.state.newPage ? _react2.default.createElement(_NewLeafletPage2.default, { newPage: function newPage(title) {
	              return _this2.createNewPage(title);
	            },
	            cancel: this.cancelNewPage }) : null
	        )
	      );
	    }
	  }]);
	  return LeafletSection;
	}(_react2.default.Component);
	
	LeafletSection.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  position: _propTypes2.default.number.isRequired,
	  newPage: _propTypes2.default.func.isRequired
	};
	
	exports.default = LeafletSection;

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(364);
	
	var _LeafletPage = __webpack_require__(660);
	
	var _LeafletPage2 = _interopRequireDefault(_LeafletPage);
	
	var _leaflet = __webpack_require__(516);
	
	var _selectors = __webpack_require__(514);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  selectPage: function selectPage(position) {
	    return (0, _leaflet.selectPage)(position);
	  },
	  togglePageFavorite: function togglePageFavorite(position) {
	    return (0, _leaflet.togglePageFavorite)(position);
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    activePage: (0, _selectors.activePageSelector)(state)
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LeafletPage2.default);

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LeafletPage = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(655);
	
	var _helpers = __webpack_require__(661);
	
	var _favorite = __webpack_require__(664);
	
	var _favorite2 = _interopRequireDefault(_favorite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LeafletPage = exports.LeafletPage = function (_React$Component) {
	  (0, _inherits3.default)(LeafletPage, _React$Component);
	
	  function LeafletPage() {
	    (0, _classCallCheck3.default)(this, LeafletPage);
	    return (0, _possibleConstructorReturn3.default)(this, (LeafletPage.__proto__ || (0, _getPrototypeOf2.default)(LeafletPage)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(LeafletPage, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.title !== nextProps.title) return true;
	      if (this.props.isFavorited !== nextProps.isFavorited) return true;
	      if (this.props.activePage !== nextProps.activePage) return true;
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var className = (0, _helpers.arrayCompare)(this.props.position, this.props.activePage) ? 'leafletPageTitleSelected' : 'leafletPageTitle';
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement(_favorite2.default, { className: this.props.isFavorited ? 'leafletPageFav' : 'leafletPageFavFiller',
	          onTouchTap: function onTouchTap() {
	            return _this2.props.togglePageFavorite(_this2.props.position);
	          } }),
	        _react2.default.createElement(
	          'span',
	          { onTouchTap: function onTouchTap() {
	              if (_this2.props.position !== _this2.props.activePage) _this2.props.selectPage(_this2.props.position);
	            } },
	          this.props.title
	        )
	      );
	    }
	  }]);
	  return LeafletPage;
	}(_react2.default.Component);
	
	LeafletPage.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  isFavorited: _propTypes2.default.bool,
	  selectPage: _propTypes2.default.func.isRequired,
	  position: _propTypes2.default.array.isRequired,
	  activePage: _propTypes2.default.any.isRequired,
	  togglePageFavorite: _propTypes2.default.func.isRequired
	};
	
	exports.default = LeafletPage;

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onRenderCallback = exports.arrayCompare = undefined;
	
	var _arrayCompare = __webpack_require__(662);
	
	var _arrayCompare2 = _interopRequireDefault(_arrayCompare);
	
	var _onRenderCallback = __webpack_require__(663);
	
	var _onRenderCallback2 = _interopRequireDefault(_onRenderCallback);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.arrayCompare = _arrayCompare2.default;
	exports.onRenderCallback = _onRenderCallback2.default;

/***/ }),
/* 662 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var arrayCompare = function arrayCompare(a, b) {
	  if (a.length !== b.length) return false;
	  for (var i = 0, l = a.length; i < l; i++) {
	    if (a[i] !== b[i]) return false;
	  }return true;
	};
	
	exports.default = arrayCompare;

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OnRenderCallback = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OnRenderCallback = exports.OnRenderCallback = function (_React$Component) {
	  (0, _inherits3.default)(OnRenderCallback, _React$Component);
	
	  function OnRenderCallback() {
	    (0, _classCallCheck3.default)(this, OnRenderCallback);
	    return (0, _possibleConstructorReturn3.default)(this, (OnRenderCallback.__proto__ || (0, _getPrototypeOf2.default)(OnRenderCallback)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(OnRenderCallback, [{
	    key: 'render',
	    value: function render() {
	      this.props.callback();
	      return null;
	    }
	  }]);
	  return OnRenderCallback;
	}(_react2.default.Component);
	
	OnRenderCallback.propTypes = {
	  callback: _propTypes2.default.func.isRequired
	};
	
	exports.default = OnRenderCallback;

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionFavorite = function ActionFavorite(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
	  );
	};
	ActionFavorite = (0, _pure2.default)(ActionFavorite);
	ActionFavorite.displayName = 'ActionFavorite';
	ActionFavorite.muiName = 'SvgIcon';
	
	exports.default = ActionFavorite;

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NewLeafletPage = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TextField = __webpack_require__(557);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _IconButton = __webpack_require__(450);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _close = __webpack_require__(666);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _check = __webpack_require__(507);
	
	var _check2 = _interopRequireDefault(_check);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  newPage: {
	    paddingLeft: 'calc(1.5em - 10px)',
	    display: 'flex',
	    alignItems: 'flex-start',
	    marginBottom: '1em'
	  },
	  newPageTextField: {
	    width: '60%',
	    fontSize: '1rem'
	  },
	  newPageActionIcons: {
	    padding: '0',
	    height: '24px',
	    width: '24px',
	    marginTop: '10px'
	  }
	};
	
	var NewLeafletPage = exports.NewLeafletPage = function (_React$Component) {
	  (0, _inherits3.default)(NewLeafletPage, _React$Component);
	
	  function NewLeafletPage(props) {
	    (0, _classCallCheck3.default)(this, NewLeafletPage);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (NewLeafletPage.__proto__ || (0, _getPrototypeOf2.default)(NewLeafletPage)).call(this, props));
	
	    _this.state = {
	      errorText: ''
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(NewLeafletPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.newPageInput.focus();
	    }
	  }, {
	    key: 'createPage',
	    value: function createPage() {
	      if (this.state.pageTitle !== undefined && this.state.pageTitle !== '') {
	        if (this.state.pageTitle.length <= 32) {
	          this.props.newPage(this.state.pageTitle);
	        } else {
	          this.setState(function (prevState) {
	            return {
	              errorText: 'Cannot exceed 32 characters!'
	            };
	          });
	        }
	      } else {
	        this.setState(function (prevState) {
	          return {
	            errorText: 'Cannot be empty!'
	          };
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.newPage },
	        _react2.default.createElement(
	          _IconButton2.default,
	          { onClick: function onClick() {
	              return _this2.props.cancel();
	            }, style: styles.newPageActionIcons },
	          _react2.default.createElement(_close2.default, { className: 'leafletSection__newPage__iconClose' })
	        ),
	        _react2.default.createElement(_TextField2.default, {
	          ref: function ref(input) {
	            _this2.newPageInput = input;
	          },
	          onChange: function onChange(e, nv) {
	            _this2.setState({ pageTitle: nv });
	          },
	          value: this.pageTitle,
	          hintText: this.state.pageTitle ? '' : 'New Page'
	          // hintText not disappearing when content exists, so hardcoding for now
	          , errorText: this.state.errorText,
	          style: styles.newPageTextField
	        }),
	        _react2.default.createElement(
	          _IconButton2.default,
	          { onClick: function onClick() {
	              return _this2.createPage();
	            }, style: styles.newPageActionIcons },
	          _react2.default.createElement(_check2.default, { className: 'leafletSection__newPage__iconCheck' })
	        )
	      );
	    }
	  }]);
	  return NewLeafletPage;
	}(_react2.default.Component);
	
	NewLeafletPage.propTypes = {
	  newPage: _propTypes2.default.func.isRequired,
	  cancel: _propTypes2.default.func.isRequired
	};
	
	exports.default = NewLeafletPage;

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationClose = function NavigationClose(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
	  );
	};
	NavigationClose = (0, _pure2.default)(NavigationClose);
	NavigationClose.displayName = 'NavigationClose';
	NavigationClose.muiName = 'SvgIcon';
	
	exports.default = NavigationClose;

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationChevronRight = function NavigationChevronRight(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
	  );
	};
	NavigationChevronRight = (0, _pure2.default)(NavigationChevronRight);
	NavigationChevronRight.displayName = 'NavigationChevronRight';
	NavigationChevronRight.muiName = 'SvgIcon';
	
	exports.default = NavigationChevronRight;

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
	  );
	};
	HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
	HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
	HardwareKeyboardArrowDown.muiName = 'SvgIcon';
	
	exports.default = HardwareKeyboardArrowDown;

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(476);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(486);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContentAdd = function ContentAdd(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
	  );
	};
	ContentAdd = (0, _pure2.default)(ContentAdd);
	ContentAdd.displayName = 'ContentAdd';
	ContentAdd.muiName = 'SvgIcon';
	
	exports.default = ContentAdd;

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(364);
	
	var _Leaf = __webpack_require__(671);
	
	var _Leaf2 = _interopRequireDefault(_Leaf);
	
	var _leaflet = __webpack_require__(516);
	
	var _selectors = __webpack_require__(514);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateLeafData: function updateLeafData(ID, data) {
	    return (0, _leaflet.updateLeafData)(ID, data);
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state, props) {
	  return {
	    leafType: (0, _selectors.leafTypeSelector)(state, props.item.leafID),
	    leafData: (0, _selectors.leafDataSelector)(state, props.item.leafID),
	    leafID: props.item.leafID
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Leaf2.default);

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Leaf = __webpack_require__(672);
	
	var _Leaf2 = _interopRequireDefault(_Leaf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Leaf2.default;

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(288);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	__webpack_require__(555);
	
	var _Paper = __webpack_require__(488);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _IconButton = __webpack_require__(450);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _fetch = __webpack_require__(673);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import FirstChild from '../../../../components/FirstChild'
	var styles = {
	  container: {
	    width: '100%',
	    minHeight: '4vh',
	    paddingTop: '1vh',
	    marginBottom: '1vh',
	    transitionProperty: 'margin-bottom',
	    transitionDuration: '.5s',
	    transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)',
	    lineHeight: '0'
	  },
	  containerWithTrough: {
	    marginBottom: '5vh'
	  },
	  centerArea: {
	    height: '100%',
	    width: '91%',
	    display: 'inline-block',
	    margin: '0 2%',
	    lineHeight: '1.42857'
	  },
	  centerCard: {
	    width: '100%',
	    display: 'block',
	    zIndex: '2',
	    position: 'relative',
	    borderLeft: ''
	  },
	  trough: {
	    position: 'absolute',
	    width: '91%',
	    height: '4vh',
	    display: 'block',
	    visibility: 'visible',
	    zIndex: '1',
	    backgroundColor: '#424242',
	    bottom: '-4vh',
	    borderRadius: '0px',
	    borderBottomRightRadius: '2px',
	    borderBottomLeftRadius: '2px',
	    transitionProperty: 'bottom',
	    transitionDuration: '.5s',
	    transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
	  },
	  troughHidden: {
	    bottom: '5px'
	  },
	  centerCardEmphasized: {
	    borderLeft: '6px solid #4caf50'
	  },
	  sideActions: {
	    width: '5%',
	    float: 'right',
	    display: 'inline-block'
	  },
	  sideAction: {
	    width: '1.5rem',
	    height: '1.5rem',
	    marginBottom: '0.4rem',
	    marginTop: '0.4rem',
	    padding: 0
	  },
	  iconCol: {
	    width: '100%',
	    display: 'flex',
	    justifyContent: 'space-around',
	    flexDirection: 'column',
	    alignItems: 'center'
	  },
	  bottomAction: {
	    padding: '0',
	    width: 'auto',
	    height: 'auto'
	  },
	  troughLeft: {
	    position: 'relative',
	    height: '100%',
	    width: '80%',
	    marginLeft: '0.5em',
	    display: 'flex',
	    flexDirection: 'row',
	    float: 'left',
	    color: '#9E9E9E'
	  },
	  troughRight: {
	    position: 'relative',
	    display: 'flex',
	    flexDirection: 'row-reverse',
	    height: '100%',
	    color: '#9E9E9E',
	    marginRight: '0.5em'
	  },
	  dragHandleTrough: {
	    float: 'right',
	    padding: '0',
	    width: 'auto',
	    height: 'auto'
	  }
	};
	// import { CSSTransitionGroup } from 'react-transition-group'
	
	var Leaf = function (_React$Component) {
	  (0, _inherits3.default)(Leaf, _React$Component);
	
	  function Leaf(props) {
	    (0, _classCallCheck3.default)(this, Leaf);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Leaf.__proto__ || (0, _getPrototypeOf2.default)(Leaf)).call(this, props));
	
	    _this.update = function (data) {
	      return _this.props.updateLeafData(_this.props.leafID, data);
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Leaf, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state !== nextState) return true;
	      if (this.props.leafID !== nextProps.leafID) return true;
	      if (this.props.leafData !== nextProps.leafData) return true;
	      if (this.props.dragHandle !== nextProps.dragHandle) return true;
	
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var actions = (0, _fetch.fetchActions)(this.props.leafType, this.props.leafData);
	      var dragHandle = this.props.dragHandle;
	      // fetch template from ID, apply data
	      return _react2.default.createElement(
	        'div',
	        { id: this.props.leafID, style: this.props.leafData.showTrough ? (0, _extends3.default)({}, styles.container, styles.containerWithTrough) : styles.container },
	        _react2.default.createElement(
	          'div',
	          { style: styles.centerArea },
	          _react2.default.createElement(_Paper2.default, { style: !this.props.leafData.isEmphasized ? styles.centerCard : (0, _extends3.default)({}, styles.centerCard, styles.centerCardEmphasized),
	            children: (0, _fetch.fetchComponent)(this.props.leafType, this.props.leafData, this.update, this.props.commonProps)
	          }),
	          actions.trough ? _react2.default.createElement(_Paper2.default, { style: !this.props.leafData.showTrough ? (0, _extends3.default)({}, styles.trough, styles.troughHidden) : styles.trough,
	            key: 'trough', children: [_react2.default.createElement(
	              'div',
	              { key: 'left', style: styles.troughLeft },
	              actions.trough.map(function (action, i) {
	                return _react2.default.createElement(
	                  _IconButton2.default,
	                  { key: i, style: action.style ? (0, _extends3.default)({}, styles.bottomAction, action.style(_this2.props.leafData)) : styles.bottomAction,
	                    onClick: function onClick() {
	                      return _this2.props.updateLeafData(_this2.props.leafID, action.onClick);
	                    } },
	                  _react2.default.createElement(
	                    'i',
	                    { className: 'material-icons leaf__action__trough' },
	                    action.iconName
	                  )
	                );
	              })
	            ), _react2.default.createElement(
	              'div',
	              { key: 'right', style: styles.troughRight },
	              this.props.dragHandle ? dragHandle(_react2.default.createElement(
	                _IconButton2.default,
	                { style: styles.dragHandleTrough },
	                _react2.default.createElement(
	                  'i',
	                  { className: 'material-icons leaf__action__trough' },
	                  'transform'
	                )
	              )) : null
	            )] }) : null
	        ),
	        _react2.default.createElement(_Paper2.default, { style: styles.sideActions, children: _react2.default.createElement(
	            'div',
	            { style: styles.iconCol },
	            actions.bar.map(function (action, i) {
	              return _react2.default.createElement(
	                _IconButton2.default,
	                { key: i, style: action.style ? (0, _extends3.default)({}, styles.sideAction, action.style(_this2.props.leafData)) : styles.sideAction,
	                  onClick: function onClick() {
	                    return _this2.props.updateLeafData(_this2.props.leafID, action.onClick);
	                  } },
	                _react2.default.createElement(
	                  'i',
	                  { style: styles.sideActionIcon, className: 'material-icons leaf__action__side' },
	                  action.iconName
	                )
	              );
	            }),
	            actions.dragHandleBar ? dragHandle(_react2.default.createElement(
	              _IconButton2.default,
	              { style: styles.sideAction },
	              _react2.default.createElement(
	                'i',
	                { style: styles.sideActionIcon, className: 'material-icons leaf__action__side' },
	                'transform'
	              )
	            )) : null
	          ) })
	      );
	    }
	  }]);
	  return Leaf;
	}(_react2.default.Component);
	
	Leaf.propTypes = {
	  commonProps: _propTypes2.default.object,
	  leafID: _propTypes2.default.string.isRequired,
	  leafType: _propTypes2.default.string.isRequired,
	  leafData: _propTypes2.default.object.isRequired,
	  updateLeafData: _propTypes2.default.func,
	  dragHandle: _propTypes2.default.func
	};
	
	exports.default = Leaf;

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponent = exports.fetchActions = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rawText = __webpack_require__(674);
	
	var _code = __webpack_require__(675);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var leaves = {
	  'rawText': {
	    component: _rawText.RawTextLeaf,
	    actions: _rawText.actions
	  },
	  'code': {
	    component: _code.CodeEditorLeaf,
	    actions: _code.actions
	  }
	
	  // TODO: move to api
	};var fetchActions = exports.fetchActions = function fetchActions(type, data) {
	  return leaves[type].actions(data);
	};
	
	var fetchComponent = exports.fetchComponent = function fetchComponent(type, data, update, meta) {
	  return _react2.default.createElement(leaves[type].component, {
	    data: data,
	    meta: meta,
	    update: update
	  });
	};

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RawTextLeaf = exports.actions = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextField = __webpack_require__(557);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var actions = exports.actions = function actions(data) {
	  return {
	    bar: [{
	      iconName: 'bookmark',
	      onClick: { isEmphasized: !data.isEmphasized },
	      style: function style(data) {
	        if (data.isEmphasized) return { color: '#4CAF50' };
	        return;
	      }
	    }, {
	      iconName: 'more_vert',
	      onClick: { showTrough: !data.showTrough }
	    }],
	    trough: [{
	      iconName: 'delete',
	      onClick: { delete: true }
	    }]
	  };
	};
	
	var RawTextLeaf = exports.RawTextLeaf = function (_React$Component) {
	  (0, _inherits3.default)(RawTextLeaf, _React$Component);
	
	  function RawTextLeaf() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RawTextLeaf);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RawTextLeaf.__proto__ || (0, _getPrototypeOf2.default)(RawTextLeaf)).call.apply(_ref, [this].concat(args))), _this), _this.styles = {
	      textFieldStyles: {
	        width: '98%',
	        margin: '1%'
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RawTextLeaf, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(_TextField2.default, {
	        value: this.props.data.value,
	        hintText: 'Go Type!',
	        multiLine: true,
	        rows: 1,
	        style: this.styles.textFieldStyles,
	        onChange: function onChange(e, nv) {
	          _this2.props.update({ value: nv });
	        }
	      });
	    }
	  }]);
	  return RawTextLeaf;
	}(_react2.default.Component);
	
	RawTextLeaf.propTypes = {
	  data: _propTypes2.default.object.isRequired,
	  update: _propTypes2.default.func.isRequired
	};
	
	exports.default = RawTextLeaf;

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CodeEditorLeaf = exports.actions = undefined;
	
	var _getPrototypeOf = __webpack_require__(312);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(317);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(318);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(356);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(233);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactCodemirror = __webpack_require__(676);
	
	var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);
	
	__webpack_require__(681);
	
	__webpack_require__(683);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var actions = exports.actions = function actions(data) {
	  return {
	    bar: [{
	      iconName: 'more_vert',
	      onClick: { showTrough: !data.showTrough }
	    }],
	    trough: [{
	      iconName: 'delete',
	      onClick: { delete: true }
	    }]
	  };
	};
	
	var CodeEditorLeaf = exports.CodeEditorLeaf = function (_React$Component) {
	  (0, _inherits3.default)(CodeEditorLeaf, _React$Component);
	
	  function CodeEditorLeaf() {
	    (0, _classCallCheck3.default)(this, CodeEditorLeaf);
	    return (0, _possibleConstructorReturn3.default)(this, (CodeEditorLeaf.__proto__ || (0, _getPrototypeOf2.default)(CodeEditorLeaf)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CodeEditorLeaf, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var options = {
	        lineNumbers: true,
	        mode: 'javascript',
	        theme: 'monokai',
	        viewportMargin: Infinity
	      };
	
	      var style = {
	        minHeight: '4vh',
	        padding: '0.2em'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { style: style },
	        _react2.default.createElement(_reactCodemirror2.default, { value: this.props.data.code, style: style, onChange: function onChange(nv) {
	            _this2.props.update({ code: nv });
	          }, options: options })
	      );
	    }
	  }]);
	  return CodeEditorLeaf;
	}(_react2.default.Component);
	
	CodeEditorLeaf.propTypes = {
	  data: _propTypes2.default.object.isRequired,
	  meta: _propTypes2.default.object.isRequired, // eslint-disable-line react/no-unused-prop-types
	  update: _propTypes2.default.func.isRequired
	};
	
	exports.default = CodeEditorLeaf;

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(24);
	var ReactDOM = __webpack_require__(60);
	var PropTypes = __webpack_require__(233);
	var className = __webpack_require__(677);
	var debounce = __webpack_require__(678);
	var isEqual = __webpack_require__(679);
	var createReactClass = __webpack_require__(237);
	
	function normalizeLineEndings(str) {
		if (!str) return str;
		return str.replace(/\r\n|\r/g, '\n');
	}
	
	var CodeMirror = createReactClass({
		propTypes: {
			autoFocus: PropTypes.bool,
			className: PropTypes.any,
			codeMirrorInstance: PropTypes.func,
			defaultValue: PropTypes.string,
			name: PropTypes.string,
			onChange: PropTypes.func,
			onCursorActivity: PropTypes.func,
			onFocusChange: PropTypes.func,
			onScroll: PropTypes.func,
			options: PropTypes.object,
			path: PropTypes.string,
			value: PropTypes.string,
			preserveScrollPosition: PropTypes.bool
		},
		getDefaultProps: function getDefaultProps() {
			return {
				preserveScrollPosition: false
			};
		},
		getCodeMirrorInstance: function getCodeMirrorInstance() {
			return this.props.codeMirrorInstance || __webpack_require__(680);
		},
		getInitialState: function getInitialState() {
			return {
				isFocused: false
			};
		},
		componentWillMount: function componentWillMount() {
			this.componentWillReceiveProps = debounce(this.componentWillReceiveProps, 0);
			if (this.props.path) {
				console.error('Warning: react-codemirror: the `path` prop has been changed to `name`');
			}
		},
		componentDidMount: function componentDidMount() {
			var codeMirrorInstance = this.getCodeMirrorInstance();
			this.codeMirror = codeMirrorInstance.fromTextArea(this.textareaNode, this.props.options);
			this.codeMirror.on('change', this.codemirrorValueChanged);
			this.codeMirror.on('cursorActivity', this.cursorActivity);
			this.codeMirror.on('focus', this.focusChanged.bind(this, true));
			this.codeMirror.on('blur', this.focusChanged.bind(this, false));
			this.codeMirror.on('scroll', this.scrollChanged);
			this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
		},
		componentWillUnmount: function componentWillUnmount() {
			// is there a lighter-weight way to remove the cm instance?
			if (this.codeMirror) {
				this.codeMirror.toTextArea();
			}
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (this.codeMirror && nextProps.value !== undefined && nextProps.value !== this.props.value && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
				if (this.props.preserveScrollPosition) {
					var prevScrollPosition = this.codeMirror.getScrollInfo();
					this.codeMirror.setValue(nextProps.value);
					this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
				} else {
					this.codeMirror.setValue(nextProps.value);
				}
			}
			if (typeof nextProps.options === 'object') {
				for (var optionName in nextProps.options) {
					if (nextProps.options.hasOwnProperty(optionName)) {
						this.setOptionIfChanged(optionName, nextProps.options[optionName]);
					}
				}
			}
		},
		setOptionIfChanged: function setOptionIfChanged(optionName, newValue) {
			var oldValue = this.codeMirror.getOption(optionName);
			if (!isEqual(oldValue, newValue)) {
				this.codeMirror.setOption(optionName, newValue);
			}
		},
		getCodeMirror: function getCodeMirror() {
			return this.codeMirror;
		},
		focus: function focus() {
			if (this.codeMirror) {
				this.codeMirror.focus();
			}
		},
		focusChanged: function focusChanged(focused) {
			this.setState({
				isFocused: focused
			});
			this.props.onFocusChange && this.props.onFocusChange(focused);
		},
		cursorActivity: function cursorActivity(cm) {
			this.props.onCursorActivity && this.props.onCursorActivity(cm);
		},
		scrollChanged: function scrollChanged(cm) {
			this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
		},
		codemirrorValueChanged: function codemirrorValueChanged(doc, change) {
			if (this.props.onChange && change.origin !== 'setValue') {
				this.props.onChange(doc.getValue(), change);
			}
		},
		render: function render() {
			var _this = this;
	
			var editorClassName = className('ReactCodeMirror', this.state.isFocused ? 'ReactCodeMirror--focused' : null, this.props.className);
			return React.createElement(
				'div',
				{ className: editorClassName },
				React.createElement('textarea', {
					ref: function (ref) {
						return _this.textareaNode = ref;
					},
					name: this.props.name || this.props.path,
					defaultValue: this.props.value,
					autoComplete: 'off',
					autoFocus: this.props.autoFocus
				})
			);
		}
	});
	
	module.exports = CodeMirror;

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 678 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = isEqual;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(222)(module)))

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .
	
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.CodeMirror = factory());
	}(this, (function () { 'use strict';
	
	// Kludges for bugs and behavior differences that can't be feature
	// detected are enabled based on userAgent etc sniffing.
	var userAgent = navigator.userAgent;
	var platform = navigator.platform;
	
	var gecko = /gecko\/\d/i.test(userAgent);
	var ie_upto10 = /MSIE \d/.test(userAgent);
	var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	var edge = /Edge\/(\d+)/.exec(userAgent);
	var ie = ie_upto10 || ie_11up || edge;
	var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
	var webkit = !edge && /WebKit\//.test(userAgent);
	var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	var chrome = !edge && /Chrome\//.test(userAgent);
	var presto = /Opera\//.test(userAgent);
	var safari = /Apple Computer/.test(navigator.vendor);
	var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	var phantom = /PhantomJS/.test(userAgent);
	
	var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	var android = /Android/.test(userAgent);
	// This is woefully incomplete. Suggestions for alternative methods welcome.
	var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	var mac = ios || /Mac/.test(platform);
	var chromeOS = /\bCrOS\b/.test(userAgent);
	var windows = /win/i.test(platform);
	
	var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	if (presto_version) { presto_version = Number(presto_version[1]); }
	if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	var captureRightClick = gecko || (ie && ie_version >= 9);
	
	function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }
	
	var rmClass = function(node, cls) {
	  var current = node.className;
	  var match = classTest(cls).exec(current);
	  if (match) {
	    var after = current.slice(match.index + match[0].length);
	    node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	  }
	};
	
	function removeChildren(e) {
	  for (var count = e.childNodes.length; count > 0; --count)
	    { e.removeChild(e.firstChild); }
	  return e
	}
	
	function removeChildrenAndAdd(parent, e) {
	  return removeChildren(parent).appendChild(e)
	}
	
	function elt(tag, content, className, style) {
	  var e = document.createElement(tag);
	  if (className) { e.className = className; }
	  if (style) { e.style.cssText = style; }
	  if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
	  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
	  return e
	}
	// wrapper for elt, which removes the elt from the accessibility tree
	function eltP(tag, content, className, style) {
	  var e = elt(tag, content, className, style);
	  e.setAttribute("role", "presentation");
	  return e
	}
	
	var range;
	if (document.createRange) { range = function(node, start, end, endNode) {
	  var r = document.createRange();
	  r.setEnd(endNode || node, end);
	  r.setStart(node, start);
	  return r
	}; }
	else { range = function(node, start, end) {
	  var r = document.body.createTextRange();
	  try { r.moveToElementText(node.parentNode); }
	  catch(e) { return r }
	  r.collapse(true);
	  r.moveEnd("character", end);
	  r.moveStart("character", start);
	  return r
	}; }
	
	function contains(parent, child) {
	  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	    { child = child.parentNode; }
	  if (parent.contains)
	    { return parent.contains(child) }
	  do {
	    if (child.nodeType == 11) { child = child.host; }
	    if (child == parent) { return true }
	  } while (child = child.parentNode)
	}
	
	function activeElt() {
	  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
	  // IE < 10 will throw when accessed while the page is loading or in an iframe.
	  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
	  var activeElement;
	  try {
	    activeElement = document.activeElement;
	  } catch(e) {
	    activeElement = document.body || null;
	  }
	  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
	    { activeElement = activeElement.shadowRoot.activeElement; }
	  return activeElement
	}
	
	function addClass(node, cls) {
	  var current = node.className;
	  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
	}
	function joinClasses(a, b) {
	  var as = a.split(" ");
	  for (var i = 0; i < as.length; i++)
	    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
	  return b
	}
	
	var selectInput = function(node) { node.select(); };
	if (ios) // Mobile Safari apparently has a bug where select() is broken.
	  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
	else if (ie) // Suppress mysterious IE10 errors
	  { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }
	
	function bind(f) {
	  var args = Array.prototype.slice.call(arguments, 1);
	  return function(){return f.apply(null, args)}
	}
	
	function copyObj(obj, target, overwrite) {
	  if (!target) { target = {}; }
	  for (var prop in obj)
	    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	      { target[prop] = obj[prop]; } }
	  return target
	}
	
	// Counts the column offset in a string, taking tabs into account.
	// Used mostly to find indentation.
	function countColumn(string, end, tabSize, startIndex, startValue) {
	  if (end == null) {
	    end = string.search(/[^\s\u00a0]/);
	    if (end == -1) { end = string.length; }
	  }
	  for (var i = startIndex || 0, n = startValue || 0;;) {
	    var nextTab = string.indexOf("\t", i);
	    if (nextTab < 0 || nextTab >= end)
	      { return n + (end - i) }
	    n += nextTab - i;
	    n += tabSize - (n % tabSize);
	    i = nextTab + 1;
	  }
	}
	
	var Delayed = function() {this.id = null;};
	Delayed.prototype.set = function (ms, f) {
	  clearTimeout(this.id);
	  this.id = setTimeout(f, ms);
	};
	
	function indexOf(array, elt) {
	  for (var i = 0; i < array.length; ++i)
	    { if (array[i] == elt) { return i } }
	  return -1
	}
	
	// Number of pixels added to scroller and sizer to hide scrollbar
	var scrollerGap = 30;
	
	// Returned or thrown by various protocols to signal 'I'm not
	// handling this'.
	var Pass = {toString: function(){return "CodeMirror.Pass"}};
	
	// Reused option objects for setSelection & friends
	var sel_dontScroll = {scroll: false};
	var sel_mouse = {origin: "*mouse"};
	var sel_move = {origin: "+move"};
	
	// The inverse of countColumn -- find the offset that corresponds to
	// a particular column.
	function findColumn(string, goal, tabSize) {
	  for (var pos = 0, col = 0;;) {
	    var nextTab = string.indexOf("\t", pos);
	    if (nextTab == -1) { nextTab = string.length; }
	    var skipped = nextTab - pos;
	    if (nextTab == string.length || col + skipped >= goal)
	      { return pos + Math.min(skipped, goal - col) }
	    col += nextTab - pos;
	    col += tabSize - (col % tabSize);
	    pos = nextTab + 1;
	    if (col >= goal) { return pos }
	  }
	}
	
	var spaceStrs = [""];
	function spaceStr(n) {
	  while (spaceStrs.length <= n)
	    { spaceStrs.push(lst(spaceStrs) + " "); }
	  return spaceStrs[n]
	}
	
	function lst(arr) { return arr[arr.length-1] }
	
	function map(array, f) {
	  var out = [];
	  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
	  return out
	}
	
	function insertSorted(array, value, score) {
	  var pos = 0, priority = score(value);
	  while (pos < array.length && score(array[pos]) <= priority) { pos++; }
	  array.splice(pos, 0, value);
	}
	
	function nothing() {}
	
	function createObj(base, props) {
	  var inst;
	  if (Object.create) {
	    inst = Object.create(base);
	  } else {
	    nothing.prototype = base;
	    inst = new nothing();
	  }
	  if (props) { copyObj(props, inst); }
	  return inst
	}
	
	var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	function isWordCharBasic(ch) {
	  return /\w/.test(ch) || ch > "\x80" &&
	    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
	}
	function isWordChar(ch, helper) {
	  if (!helper) { return isWordCharBasic(ch) }
	  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
	  return helper.test(ch)
	}
	
	function isEmpty(obj) {
	  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
	  return true
	}
	
	// Extending unicode characters. A series of a non-extending char +
	// any number of extending chars is treated as a single unit as far
	// as editing and measuring is concerned. This is not fully correct,
	// since some scripts/fonts/browsers also treat other configurations
	// of code points as a group.
	var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }
	
	// Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
	function skipExtendingChars(str, pos, dir) {
	  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
	  return pos
	}
	
	// Returns the value from the range [`from`; `to`] that satisfies
	// `pred` and is closest to `from`. Assumes that at least `to` satisfies `pred`.
	function findFirst(pred, from, to) {
	  for (;;) {
	    if (Math.abs(from - to) <= 1) { return pred(from) ? from : to }
	    var mid = Math.floor((from + to) / 2);
	    if (pred(mid)) { to = mid; }
	    else { from = mid; }
	  }
	}
	
	// The display handles the DOM integration, both for input reading
	// and content drawing. It holds references to DOM nodes and
	// display-related state.
	
	function Display(place, doc, input) {
	  var d = this;
	  this.input = input;
	
	  // Covers bottom-right square when both scrollbars are present.
	  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	  d.scrollbarFiller.setAttribute("cm-not-content", "true");
	  // Covers bottom of gutter when coverGutterNextToScrollbar is on
	  // and h scrollbar is present.
	  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	  d.gutterFiller.setAttribute("cm-not-content", "true");
	  // Will contain the actual code, positioned to cover the viewport.
	  d.lineDiv = eltP("div", null, "CodeMirror-code");
	  // Elements are added to these to represent selection and cursors.
	  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	  d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	  // A visibility: hidden element used to find the size of things.
	  d.measure = elt("div", null, "CodeMirror-measure");
	  // When lines outside of the viewport are measured, they are drawn in this.
	  d.lineMeasure = elt("div", null, "CodeMirror-measure");
	  // Wraps everything that needs to exist inside the vertically-padded coordinate system
	  d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                    null, "position: relative; outline: none");
	  var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
	  // Moved around its parent to cover visible view.
	  d.mover = elt("div", [lines], null, "position: relative");
	  // Set to the height of the document, allowing scrolling.
	  d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	  d.sizerWidth = null;
	  // Behavior of elts with overflow: auto and padding is
	  // inconsistent across browsers. This is used to ensure the
	  // scrollable area is big enough.
	  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	  // Will contain the gutters, if any.
	  d.gutters = elt("div", null, "CodeMirror-gutters");
	  d.lineGutter = null;
	  // Actual scrollable element.
	  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	  d.scroller.setAttribute("tabIndex", "-1");
	  // The element in which the editor lives.
	  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
	
	  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }
	
	  if (place) {
	    if (place.appendChild) { place.appendChild(d.wrapper); }
	    else { place(d.wrapper); }
	  }
	
	  // Current rendered range (may be bigger than the view window).
	  d.viewFrom = d.viewTo = doc.first;
	  d.reportedViewFrom = d.reportedViewTo = doc.first;
	  // Information about the rendered lines.
	  d.view = [];
	  d.renderedView = null;
	  // Holds info about a single rendered line when it was rendered
	  // for measurement, while not in view.
	  d.externalMeasured = null;
	  // Empty space (in pixels) above the view
	  d.viewOffset = 0;
	  d.lastWrapHeight = d.lastWrapWidth = 0;
	  d.updateLineNumbers = null;
	
	  d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	  d.scrollbarsClipped = false;
	
	  // Used to only resize the line number gutter when necessary (when
	  // the amount of lines crosses a boundary that makes its width change)
	  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	  // Set to true when a non-horizontal-scrolling line widget is
	  // added. As an optimization, line widget aligning is skipped when
	  // this is false.
	  d.alignWidgets = false;
	
	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	
	  // Tracks the maximum line length so that the horizontal scrollbar
	  // can be kept static when scrolling.
	  d.maxLine = null;
	  d.maxLineLength = 0;
	  d.maxLineChanged = false;
	
	  // Used for measuring wheel scrolling granularity
	  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
	
	  // True when shift is held down.
	  d.shift = false;
	
	  // Used to track whether anything happened since the context menu
	  // was opened.
	  d.selForContextMenu = null;
	
	  d.activeTouch = null;
	
	  input.init(d);
	}
	
	// Find the line object corresponding to the given line number.
	function getLine(doc, n) {
	  n -= doc.first;
	  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
	  var chunk = doc;
	  while (!chunk.lines) {
	    for (var i = 0;; ++i) {
	      var child = chunk.children[i], sz = child.chunkSize();
	      if (n < sz) { chunk = child; break }
	      n -= sz;
	    }
	  }
	  return chunk.lines[n]
	}
	
	// Get the part of a document between two positions, as an array of
	// strings.
	function getBetween(doc, start, end) {
	  var out = [], n = start.line;
	  doc.iter(start.line, end.line + 1, function (line) {
	    var text = line.text;
	    if (n == end.line) { text = text.slice(0, end.ch); }
	    if (n == start.line) { text = text.slice(start.ch); }
	    out.push(text);
	    ++n;
	  });
	  return out
	}
	// Get the lines between from and to, as array of strings.
	function getLines(doc, from, to) {
	  var out = [];
	  doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
	  return out
	}
	
	// Update the height of a line, propagating the height change
	// upwards to parent nodes.
	function updateLineHeight(line, height) {
	  var diff = height - line.height;
	  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
	}
	
	// Given a line object, find its line number by walking up through
	// its parent links.
	function lineNo(line) {
	  if (line.parent == null) { return null }
	  var cur = line.parent, no = indexOf(cur.lines, line);
	  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	    for (var i = 0;; ++i) {
	      if (chunk.children[i] == cur) { break }
	      no += chunk.children[i].chunkSize();
	    }
	  }
	  return no + cur.first
	}
	
	// Find the line at the given vertical position, using the height
	// information in the document tree.
	function lineAtHeight(chunk, h) {
	  var n = chunk.first;
	  outer: do {
	    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
	      var child = chunk.children[i$1], ch = child.height;
	      if (h < ch) { chunk = child; continue outer }
	      h -= ch;
	      n += child.chunkSize();
	    }
	    return n
	  } while (!chunk.lines)
	  var i = 0;
	  for (; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i], lh = line.height;
	    if (h < lh) { break }
	    h -= lh;
	  }
	  return n + i
	}
	
	function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}
	
	function lineNumberFor(options, i) {
	  return String(options.lineNumberFormatter(i + options.firstLineNumber))
	}
	
	// A Pos instance represents a position within the text.
	function Pos(line, ch, sticky) {
	  if ( sticky === void 0 ) sticky = null;
	
	  if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
	  this.line = line;
	  this.ch = ch;
	  this.sticky = sticky;
	}
	
	// Compare two positions, return 0 if they are the same, a negative
	// number when a is less, and a positive number otherwise.
	function cmp(a, b) { return a.line - b.line || a.ch - b.ch }
	
	function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }
	
	function copyPos(x) {return Pos(x.line, x.ch)}
	function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
	function minPos(a, b) { return cmp(a, b) < 0 ? a : b }
	
	// Most of the external API clips given positions to make sure they
	// actually exist within the document.
	function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
	function clipPos(doc, pos) {
	  if (pos.line < doc.first) { return Pos(doc.first, 0) }
	  var last = doc.first + doc.size - 1;
	  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
	  return clipToLen(pos, getLine(doc, pos.line).text.length)
	}
	function clipToLen(pos, linelen) {
	  var ch = pos.ch;
	  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
	  else if (ch < 0) { return Pos(pos.line, 0) }
	  else { return pos }
	}
	function clipPosArray(doc, array) {
	  var out = [];
	  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
	  return out
	}
	
	// Optimize some code when these features are not used.
	var sawReadOnlySpans = false;
	var sawCollapsedSpans = false;
	
	function seeReadOnlySpans() {
	  sawReadOnlySpans = true;
	}
	
	function seeCollapsedSpans() {
	  sawCollapsedSpans = true;
	}
	
	// TEXTMARKER SPANS
	
	function MarkedSpan(marker, from, to) {
	  this.marker = marker;
	  this.from = from; this.to = to;
	}
	
	// Search an array of spans for a span matching the given marker.
	function getMarkedSpanFor(spans, marker) {
	  if (spans) { for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i];
	    if (span.marker == marker) { return span }
	  } }
	}
	// Remove a span from an array, returning undefined if no spans are
	// left (we don't store arrays for lines without spans).
	function removeMarkedSpan(spans, span) {
	  var r;
	  for (var i = 0; i < spans.length; ++i)
	    { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
	  return r
	}
	// Add a span to a line.
	function addMarkedSpan(line, span) {
	  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	  span.marker.attachLine(line);
	}
	
	// Used for the algorithm that adjusts markers for a change in the
	// document. These functions cut an array of spans at a given
	// character position, returning an array of remaining chunks (or
	// undefined if nothing remains).
	function markedSpansBefore(old, startCh, isInsert) {
	  var nw;
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker;
	    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	    }
	  } }
	  return nw
	}
	function markedSpansAfter(old, endCh, isInsert) {
	  var nw;
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker;
	    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                            span.to == null ? null : span.to - endCh));
	    }
	  } }
	  return nw
	}
	
	// Given a change object, compute the new set of marker spans that
	// cover the line in which the change took place. Removes spans
	// entirely within the change, reconnects spans belonging to the
	// same marker that appear on both sides of the change, and cuts off
	// spans partially within the change. Returns an array of span
	// arrays with one element for each line in (after) the change.
	function stretchSpansOverChange(doc, change) {
	  if (change.full) { return null }
	  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	  if (!oldFirst && !oldLast) { return null }
	
	  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	  // Get the spans that 'stick out' on both sides
	  var first = markedSpansBefore(oldFirst, startCh, isInsert);
	  var last = markedSpansAfter(oldLast, endCh, isInsert);
	
	  // Next, merge those two ends
	  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	  if (first) {
	    // Fix up .to properties of first
	    for (var i = 0; i < first.length; ++i) {
	      var span = first[i];
	      if (span.to == null) {
	        var found = getMarkedSpanFor(last, span.marker);
	        if (!found) { span.to = startCh; }
	        else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
	      }
	    }
	  }
	  if (last) {
	    // Fix up .from in last (or move them into first in case of sameLine)
	    for (var i$1 = 0; i$1 < last.length; ++i$1) {
	      var span$1 = last[i$1];
	      if (span$1.to != null) { span$1.to += offset; }
	      if (span$1.from == null) {
	        var found$1 = getMarkedSpanFor(first, span$1.marker);
	        if (!found$1) {
	          span$1.from = offset;
	          if (sameLine) { (first || (first = [])).push(span$1); }
	        }
	      } else {
	        span$1.from += offset;
	        if (sameLine) { (first || (first = [])).push(span$1); }
	      }
	    }
	  }
	  // Make sure we didn't create any zero-length spans
	  if (first) { first = clearEmptySpans(first); }
	  if (last && last != first) { last = clearEmptySpans(last); }
	
	  var newMarkers = [first];
	  if (!sameLine) {
	    // Fill gap with whole-line-spans
	    var gap = change.text.length - 2, gapMarkers;
	    if (gap > 0 && first)
	      { for (var i$2 = 0; i$2 < first.length; ++i$2)
	        { if (first[i$2].to == null)
	          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
	    for (var i$3 = 0; i$3 < gap; ++i$3)
	      { newMarkers.push(gapMarkers); }
	    newMarkers.push(last);
	  }
	  return newMarkers
	}
	
	// Remove spans that are empty and don't have a clearWhenEmpty
	// option of false.
	function clearEmptySpans(spans) {
	  for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i];
	    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	      { spans.splice(i--, 1); }
	  }
	  if (!spans.length) { return null }
	  return spans
	}
	
	// Used to 'clip' out readOnly ranges when making a change.
	function removeReadOnlyRanges(doc, from, to) {
	  var markers = null;
	  doc.iter(from.line, to.line + 1, function (line) {
	    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	      var mark = line.markedSpans[i].marker;
	      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	        { (markers || (markers = [])).push(mark); }
	    } }
	  });
	  if (!markers) { return null }
	  var parts = [{from: from, to: to}];
	  for (var i = 0; i < markers.length; ++i) {
	    var mk = markers[i], m = mk.find(0);
	    for (var j = 0; j < parts.length; ++j) {
	      var p = parts[j];
	      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
	      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	        { newParts.push({from: p.from, to: m.from}); }
	      if (dto > 0 || !mk.inclusiveRight && !dto)
	        { newParts.push({from: m.to, to: p.to}); }
	      parts.splice.apply(parts, newParts);
	      j += newParts.length - 3;
	    }
	  }
	  return parts
	}
	
	// Connect or disconnect spans from a line.
	function detachMarkedSpans(line) {
	  var spans = line.markedSpans;
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.detachLine(line); }
	  line.markedSpans = null;
	}
	function attachMarkedSpans(line, spans) {
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.attachLine(line); }
	  line.markedSpans = spans;
	}
	
	// Helpers used when computing which overlapping collapsed span
	// counts as the larger one.
	function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
	function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }
	
	// Returns a number indicating which of two overlapping collapsed
	// spans is larger (and thus includes the other). Falls back to
	// comparing ids when the spans cover exactly the same range.
	function compareCollapsedMarkers(a, b) {
	  var lenDiff = a.lines.length - b.lines.length;
	  if (lenDiff != 0) { return lenDiff }
	  var aPos = a.find(), bPos = b.find();
	  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	  if (fromCmp) { return -fromCmp }
	  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	  if (toCmp) { return toCmp }
	  return b.id - a.id
	}
	
	// Find out whether a line ends or starts in a collapsed span. If
	// so, return the marker for that span.
	function collapsedSpanAtSide(line, start) {
	  var sps = sawCollapsedSpans && line.markedSpans, found;
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i];
	    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	      { found = sp.marker; }
	  } }
	  return found
	}
	function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
	function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }
	
	// Test whether there exists a collapsed span that partially
	// overlaps (covers the start or end, but not both) of a new span.
	// Such overlap is not allowed.
	function conflictingCollapsedRange(doc, lineNo$$1, from, to, marker) {
	  var line = getLine(doc, lineNo$$1);
	  var sps = sawCollapsedSpans && line.markedSpans;
	  if (sps) { for (var i = 0; i < sps.length; ++i) {
	    var sp = sps[i];
	    if (!sp.marker.collapsed) { continue }
	    var found = sp.marker.find(0);
	    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
	    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	      { return true }
	  } }
	}
	
	// A visual line is a line as drawn on the screen. Folding, for
	// example, can cause multiple logical lines to appear on the same
	// visual line. This finds the start of the visual line that the
	// given line is part of (usually that is the line itself).
	function visualLine(line) {
	  var merged;
	  while (merged = collapsedSpanAtStart(line))
	    { line = merged.find(-1, true).line; }
	  return line
	}
	
	function visualLineEnd(line) {
	  var merged;
	  while (merged = collapsedSpanAtEnd(line))
	    { line = merged.find(1, true).line; }
	  return line
	}
	
	// Returns an array of logical lines that continue the visual line
	// started by the argument, or undefined if there are no such lines.
	function visualLineContinued(line) {
	  var merged, lines;
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    ;(lines || (lines = [])).push(line);
	  }
	  return lines
	}
	
	// Get the line number of the start of the visual line that the
	// given line number is part of.
	function visualLineNo(doc, lineN) {
	  var line = getLine(doc, lineN), vis = visualLine(line);
	  if (line == vis) { return lineN }
	  return lineNo(vis)
	}
	
	// Get the line number of the start of the next visual line after
	// the given line.
	function visualLineEndNo(doc, lineN) {
	  if (lineN > doc.lastLine()) { return lineN }
	  var line = getLine(doc, lineN), merged;
	  if (!lineIsHidden(doc, line)) { return lineN }
	  while (merged = collapsedSpanAtEnd(line))
	    { line = merged.find(1, true).line; }
	  return lineNo(line) + 1
	}
	
	// Compute whether a line is hidden. Lines count as hidden when they
	// are part of a visual line that starts with another line, or when
	// they are entirely covered by collapsed, non-widget span.
	function lineIsHidden(doc, line) {
	  var sps = sawCollapsedSpans && line.markedSpans;
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i];
	    if (!sp.marker.collapsed) { continue }
	    if (sp.from == null) { return true }
	    if (sp.marker.widgetNode) { continue }
	    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	      { return true }
	  } }
	}
	function lineIsHiddenInner(doc, line, span) {
	  if (span.to == null) {
	    var end = span.marker.find(1, true);
	    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
	  }
	  if (span.marker.inclusiveRight && span.to == line.text.length)
	    { return true }
	  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
	    sp = line.markedSpans[i];
	    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	        (sp.to == null || sp.to != span.from) &&
	        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	        lineIsHiddenInner(doc, line, sp)) { return true }
	  }
	}
	
	// Find the height above the given line.
	function heightAtLine(lineObj) {
	  lineObj = visualLine(lineObj);
	
	  var h = 0, chunk = lineObj.parent;
	  for (var i = 0; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i];
	    if (line == lineObj) { break }
	    else { h += line.height; }
	  }
	  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
	      var cur = p.children[i$1];
	      if (cur == chunk) { break }
	      else { h += cur.height; }
	    }
	  }
	  return h
	}
	
	// Compute the character length of a line, taking into account
	// collapsed ranges (see markText) that might hide parts, and join
	// other lines onto it.
	function lineLength(line) {
	  if (line.height == 0) { return 0 }
	  var len = line.text.length, merged, cur = line;
	  while (merged = collapsedSpanAtStart(cur)) {
	    var found = merged.find(0, true);
	    cur = found.from.line;
	    len += found.from.ch - found.to.ch;
	  }
	  cur = line;
	  while (merged = collapsedSpanAtEnd(cur)) {
	    var found$1 = merged.find(0, true);
	    len -= cur.text.length - found$1.from.ch;
	    cur = found$1.to.line;
	    len += cur.text.length - found$1.to.ch;
	  }
	  return len
	}
	
	// Find the longest line in the document.
	function findMaxLine(cm) {
	  var d = cm.display, doc = cm.doc;
	  d.maxLine = getLine(doc, doc.first);
	  d.maxLineLength = lineLength(d.maxLine);
	  d.maxLineChanged = true;
	  doc.iter(function (line) {
	    var len = lineLength(line);
	    if (len > d.maxLineLength) {
	      d.maxLineLength = len;
	      d.maxLine = line;
	    }
	  });
	}
	
	// BIDI HELPERS
	
	function iterateBidiSections(order, from, to, f) {
	  if (!order) { return f(from, to, "ltr") }
	  var found = false;
	  for (var i = 0; i < order.length; ++i) {
	    var part = order[i];
	    if (part.from < to && part.to > from || from == to && part.to == from) {
	      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	      found = true;
	    }
	  }
	  if (!found) { f(from, to, "ltr"); }
	}
	
	var bidiOther = null;
	function getBidiPartAt(order, ch, sticky) {
	  var found;
	  bidiOther = null;
	  for (var i = 0; i < order.length; ++i) {
	    var cur = order[i];
	    if (cur.from < ch && cur.to > ch) { return i }
	    if (cur.to == ch) {
	      if (cur.from != cur.to && sticky == "before") { found = i; }
	      else { bidiOther = i; }
	    }
	    if (cur.from == ch) {
	      if (cur.from != cur.to && sticky != "before") { found = i; }
	      else { bidiOther = i; }
	    }
	  }
	  return found != null ? found : bidiOther
	}
	
	// Bidirectional ordering algorithm
	// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	// that this (partially) implements.
	
	// One-char codes used for character types:
	// L (L):   Left-to-Right
	// R (R):   Right-to-Left
	// r (AL):  Right-to-Left Arabic
	// 1 (EN):  European Number
	// + (ES):  European Number Separator
	// % (ET):  European Number Terminator
	// n (AN):  Arabic Number
	// , (CS):  Common Number Separator
	// m (NSM): Non-Spacing Mark
	// b (BN):  Boundary Neutral
	// s (B):   Paragraph Separator
	// t (S):   Segment Separator
	// w (WS):  Whitespace
	// N (ON):  Other Neutrals
	
	// Returns null if characters are ordered as they appear
	// (left-to-right), or an array of sections ({from, to, level}
	// objects) in the order in which they occur visually.
	var bidiOrdering = (function() {
	  // Character types for codepoints 0 to 0xff
	  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	  // Character types for codepoints 0x600 to 0x6f9
	  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
	  function charType(code) {
	    if (code <= 0xf7) { return lowTypes.charAt(code) }
	    else if (0x590 <= code && code <= 0x5f4) { return "R" }
	    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
	    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
	    else if (0x2000 <= code && code <= 0x200b) { return "w" }
	    else if (code == 0x200c) { return "b" }
	    else { return "L" }
	  }
	
	  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	
	  function BidiSpan(level, from, to) {
	    this.level = level;
	    this.from = from; this.to = to;
	  }
	
	  return function(str, direction) {
	    var outerType = direction == "ltr" ? "L" : "R";
	
	    if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
	    var len = str.length, types = [];
	    for (var i = 0; i < len; ++i)
	      { types.push(charType(str.charCodeAt(i))); }
	
	    // W1. Examine each non-spacing mark (NSM) in the level run, and
	    // change the type of the NSM to the type of the previous
	    // character. If the NSM is at the start of the level run, it will
	    // get the type of sor.
	    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
	      var type = types[i$1];
	      if (type == "m") { types[i$1] = prev; }
	      else { prev = type; }
	    }
	
	    // W2. Search backwards from each instance of a European number
	    // until the first strong type (R, L, AL, or sor) is found. If an
	    // AL is found, change the type of the European number to Arabic
	    // number.
	    // W3. Change all ALs to R.
	    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
	      var type$1 = types[i$2];
	      if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
	      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
	    }
	
	    // W4. A single European separator between two European numbers
	    // changes to a European number. A single common separator between
	    // two numbers of the same type changes to that type.
	    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
	      var type$2 = types[i$3];
	      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
	      else if (type$2 == "," && prev$1 == types[i$3+1] &&
	               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
	      prev$1 = type$2;
	    }
	
	    // W5. A sequence of European terminators adjacent to European
	    // numbers changes to all European numbers.
	    // W6. Otherwise, separators and terminators change to Other
	    // Neutral.
	    for (var i$4 = 0; i$4 < len; ++i$4) {
	      var type$3 = types[i$4];
	      if (type$3 == ",") { types[i$4] = "N"; }
	      else if (type$3 == "%") {
	        var end = (void 0);
	        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
	        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	        for (var j = i$4; j < end; ++j) { types[j] = replace; }
	        i$4 = end - 1;
	      }
	    }
	
	    // W7. Search backwards from each instance of a European number
	    // until the first strong type (R, L, or sor) is found. If an L is
	    // found, then change the type of the European number to L.
	    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
	      var type$4 = types[i$5];
	      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
	      else if (isStrong.test(type$4)) { cur$1 = type$4; }
	    }
	
	    // N1. A sequence of neutrals takes the direction of the
	    // surrounding strong text if the text on both sides has the same
	    // direction. European and Arabic numbers act as if they were R in
	    // terms of their influence on neutrals. Start-of-level-run (sor)
	    // and end-of-level-run (eor) are used at level run boundaries.
	    // N2. Any remaining neutrals take the embedding direction.
	    for (var i$6 = 0; i$6 < len; ++i$6) {
	      if (isNeutral.test(types[i$6])) {
	        var end$1 = (void 0);
	        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
	        var before = (i$6 ? types[i$6-1] : outerType) == "L";
	        var after = (end$1 < len ? types[end$1] : outerType) == "L";
	        var replace$1 = before == after ? (before ? "L" : "R") : outerType;
	        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
	        i$6 = end$1 - 1;
	      }
	    }
	
	    // Here we depart from the documented algorithm, in order to avoid
	    // building up an actual levels array. Since there are only three
	    // levels (0, 1, 2) in an implementation that doesn't take
	    // explicit embedding into account, we can build up the order on
	    // the fly, without following the level-based algorithm.
	    var order = [], m;
	    for (var i$7 = 0; i$7 < len;) {
	      if (countsAsLeft.test(types[i$7])) {
	        var start = i$7;
	        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
	        order.push(new BidiSpan(0, start, i$7));
	      } else {
	        var pos = i$7, at = order.length;
	        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
	        for (var j$2 = pos; j$2 < i$7;) {
	          if (countsAsNum.test(types[j$2])) {
	            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); }
	            var nstart = j$2;
	            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
	            order.splice(at, 0, new BidiSpan(2, nstart, j$2));
	            pos = j$2;
	          } else { ++j$2; }
	        }
	        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
	      }
	    }
	    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	      order[0].from = m[0].length;
	      order.unshift(new BidiSpan(0, 0, m[0].length));
	    }
	    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	      lst(order).to -= m[0].length;
	      order.push(new BidiSpan(0, len - m[0].length, len));
	    }
	
	    return direction == "rtl" ? order.reverse() : order
	  }
	})();
	
	// Get the bidi ordering for the given line (and cache it). Returns
	// false for lines that are fully left-to-right, and an array of
	// BidiSpan objects otherwise.
	function getOrder(line, direction) {
	  var order = line.order;
	  if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
	  return order
	}
	
	function moveCharLogically(line, ch, dir) {
	  var target = skipExtendingChars(line.text, ch + dir, dir);
	  return target < 0 || target > line.text.length ? null : target
	}
	
	function moveLogically(line, start, dir) {
	  var ch = moveCharLogically(line, start.ch, dir);
	  return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
	}
	
	function endOfLine(visually, cm, lineObj, lineNo, dir) {
	  if (visually) {
	    var order = getOrder(lineObj, cm.doc.direction);
	    if (order) {
	      var part = dir < 0 ? lst(order) : order[0];
	      var moveInStorageOrder = (dir < 0) == (part.level == 1);
	      var sticky = moveInStorageOrder ? "after" : "before";
	      var ch;
	      // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
	      // it could be that the last bidi part is not on the last visual line,
	      // since visual lines contain content order-consecutive chunks.
	      // Thus, in rtl, we are looking for the first (content-order) character
	      // in the rtl chunk that is on the last line (that is, the same line
	      // as the last (content-order) character).
	      if (part.level > 0) {
	        var prep = prepareMeasureForLine(cm, lineObj);
	        ch = dir < 0 ? lineObj.text.length - 1 : 0;
	        var targetTop = measureCharPrepared(cm, prep, ch).top;
	        ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
	        if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
	      } else { ch = dir < 0 ? part.to : part.from; }
	      return new Pos(lineNo, ch, sticky)
	    }
	  }
	  return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
	}
	
	function moveVisually(cm, line, start, dir) {
	  var bidi = getOrder(line, cm.doc.direction);
	  if (!bidi) { return moveLogically(line, start, dir) }
	  if (start.ch >= line.text.length) {
	    start.ch = line.text.length;
	    start.sticky = "before";
	  } else if (start.ch <= 0) {
	    start.ch = 0;
	    start.sticky = "after";
	  }
	  var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
	  if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
	    // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
	    // nothing interesting happens.
	    return moveLogically(line, start, dir)
	  }
	
	  var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
	  var prep;
	  var getWrappedLineExtent = function (ch) {
	    if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
	    prep = prep || prepareMeasureForLine(cm, line);
	    return wrappedLineExtentChar(cm, line, prep, ch)
	  };
	  var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);
	
	  if (cm.doc.direction == "rtl" || part.level == 1) {
	    var moveInStorageOrder = (part.level == 1) == (dir < 0);
	    var ch = mv(start, moveInStorageOrder ? 1 : -1);
	    if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
	      // Case 2: We move within an rtl part or in an rtl editor on the same visual line
	      var sticky = moveInStorageOrder ? "before" : "after";
	      return new Pos(start.line, ch, sticky)
	    }
	  }
	
	  // Case 3: Could not move within this bidi part in this visual line, so leave
	  // the current bidi part
	
	  var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
	    var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
	      ? new Pos(start.line, mv(ch, 1), "before")
	      : new Pos(start.line, ch, "after"); };
	
	    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
	      var part = bidi[partPos];
	      var moveInStorageOrder = (dir > 0) == (part.level != 1);
	      var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
	      if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
	      ch = moveInStorageOrder ? part.from : mv(part.to, -1);
	      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
	    }
	  };
	
	  // Case 3a: Look for other bidi parts on the same visual line
	  var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
	  if (res) { return res }
	
	  // Case 3b: Look for other bidi parts on the next visual line
	  var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
	  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
	    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
	    if (res) { return res }
	  }
	
	  // Case 4: Nowhere to move
	  return null
	}
	
	// EVENT HANDLING
	
	// Lightweight event framework. on/off also work on DOM nodes,
	// registering native DOM handlers.
	
	var noHandlers = [];
	
	var on = function(emitter, type, f) {
	  if (emitter.addEventListener) {
	    emitter.addEventListener(type, f, false);
	  } else if (emitter.attachEvent) {
	    emitter.attachEvent("on" + type, f);
	  } else {
	    var map$$1 = emitter._handlers || (emitter._handlers = {});
	    map$$1[type] = (map$$1[type] || noHandlers).concat(f);
	  }
	};
	
	function getHandlers(emitter, type) {
	  return emitter._handlers && emitter._handlers[type] || noHandlers
	}
	
	function off(emitter, type, f) {
	  if (emitter.removeEventListener) {
	    emitter.removeEventListener(type, f, false);
	  } else if (emitter.detachEvent) {
	    emitter.detachEvent("on" + type, f);
	  } else {
	    var map$$1 = emitter._handlers, arr = map$$1 && map$$1[type];
	    if (arr) {
	      var index = indexOf(arr, f);
	      if (index > -1)
	        { map$$1[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
	    }
	  }
	}
	
	function signal(emitter, type /*, values...*/) {
	  var handlers = getHandlers(emitter, type);
	  if (!handlers.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2);
	  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
	}
	
	// The DOM events that CodeMirror handles can be overridden by
	// registering a (non-DOM) handler on the editor for the event name,
	// and preventDefault-ing the event in that handler.
	function signalDOMEvent(cm, e, override) {
	  if (typeof e == "string")
	    { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
	  signal(cm, override || e.type, cm, e);
	  return e_defaultPrevented(e) || e.codemirrorIgnore
	}
	
	function signalCursorActivity(cm) {
	  var arr = cm._handlers && cm._handlers.cursorActivity;
	  if (!arr) { return }
	  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
	    { set.push(arr[i]); } }
	}
	
	function hasHandler(emitter, type) {
	  return getHandlers(emitter, type).length > 0
	}
	
	// Add on and off methods to a constructor's prototype, to make
	// registering events on such objects more convenient.
	function eventMixin(ctor) {
	  ctor.prototype.on = function(type, f) {on(this, type, f);};
	  ctor.prototype.off = function(type, f) {off(this, type, f);};
	}
	
	// Due to the fact that we still support jurassic IE versions, some
	// compatibility wrappers are needed.
	
	function e_preventDefault(e) {
	  if (e.preventDefault) { e.preventDefault(); }
	  else { e.returnValue = false; }
	}
	function e_stopPropagation(e) {
	  if (e.stopPropagation) { e.stopPropagation(); }
	  else { e.cancelBubble = true; }
	}
	function e_defaultPrevented(e) {
	  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
	}
	function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
	
	function e_target(e) {return e.target || e.srcElement}
	function e_button(e) {
	  var b = e.which;
	  if (b == null) {
	    if (e.button & 1) { b = 1; }
	    else if (e.button & 2) { b = 3; }
	    else if (e.button & 4) { b = 2; }
	  }
	  if (mac && e.ctrlKey && b == 1) { b = 3; }
	  return b
	}
	
	// Detect drag-and-drop
	var dragAndDrop = function() {
	  // There is *some* kind of drag-and-drop support in IE6-8, but I
	  // couldn't get it to work yet.
	  if (ie && ie_version < 9) { return false }
	  var div = elt('div');
	  return "draggable" in div || "dragDrop" in div
	}();
	
	var zwspSupported;
	function zeroWidthElement(measure) {
	  if (zwspSupported == null) {
	    var test = elt("span", "\u200b");
	    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	    if (measure.firstChild.offsetHeight != 0)
	      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
	  }
	  var node = zwspSupported ? elt("span", "\u200b") :
	    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	  node.setAttribute("cm-text", "");
	  return node
	}
	
	// Feature-detect IE's crummy client rect reporting for bidi text
	var badBidiRects;
	function hasBadBidiRects(measure) {
	  if (badBidiRects != null) { return badBidiRects }
	  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	  var r0 = range(txt, 0, 1).getBoundingClientRect();
	  var r1 = range(txt, 1, 2).getBoundingClientRect();
	  removeChildren(measure);
	  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
	  return badBidiRects = (r1.right - r0.right < 3)
	}
	
	// See if "".split is the broken IE version, if so, provide an
	// alternative way to split lines.
	var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
	  var pos = 0, result = [], l = string.length;
	  while (pos <= l) {
	    var nl = string.indexOf("\n", pos);
	    if (nl == -1) { nl = string.length; }
	    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	    var rt = line.indexOf("\r");
	    if (rt != -1) {
	      result.push(line.slice(0, rt));
	      pos += rt + 1;
	    } else {
	      result.push(line);
	      pos = nl + 1;
	    }
	  }
	  return result
	} : function (string) { return string.split(/\r\n?|\n/); };
	
	var hasSelection = window.getSelection ? function (te) {
	  try { return te.selectionStart != te.selectionEnd }
	  catch(e) { return false }
	} : function (te) {
	  var range$$1;
	  try {range$$1 = te.ownerDocument.selection.createRange();}
	  catch(e) {}
	  if (!range$$1 || range$$1.parentElement() != te) { return false }
	  return range$$1.compareEndPoints("StartToEnd", range$$1) != 0
	};
	
	var hasCopyEvent = (function () {
	  var e = elt("div");
	  if ("oncopy" in e) { return true }
	  e.setAttribute("oncopy", "return;");
	  return typeof e.oncopy == "function"
	})();
	
	var badZoomedRects = null;
	function hasBadZoomedRects(measure) {
	  if (badZoomedRects != null) { return badZoomedRects }
	  var node = removeChildrenAndAdd(measure, elt("span", "x"));
	  var normal = node.getBoundingClientRect();
	  var fromRange = range(node, 0, 1).getBoundingClientRect();
	  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
	}
	
	// Known modes, by name and by MIME
	var modes = {};
	var mimeModes = {};
	
	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	function defineMode(name, mode) {
	  if (arguments.length > 2)
	    { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
	  modes[name] = mode;
	}
	
	function defineMIME(mime, spec) {
	  mimeModes[mime] = spec;
	}
	
	// Given a MIME type, a {name, ...options} config object, or a name
	// string, return a mode config object.
	function resolveMode(spec) {
	  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	    spec = mimeModes[spec];
	  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	    var found = mimeModes[spec.name];
	    if (typeof found == "string") { found = {name: found}; }
	    spec = createObj(found, spec);
	    spec.name = found.name;
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	    return resolveMode("application/xml")
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	    return resolveMode("application/json")
	  }
	  if (typeof spec == "string") { return {name: spec} }
	  else { return spec || {name: "null"} }
	}
	
	// Given a mode spec (anything that resolveMode accepts), find and
	// initialize an actual mode object.
	function getMode(options, spec) {
	  spec = resolveMode(spec);
	  var mfactory = modes[spec.name];
	  if (!mfactory) { return getMode(options, "text/plain") }
	  var modeObj = mfactory(options, spec);
	  if (modeExtensions.hasOwnProperty(spec.name)) {
	    var exts = modeExtensions[spec.name];
	    for (var prop in exts) {
	      if (!exts.hasOwnProperty(prop)) { continue }
	      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
	      modeObj[prop] = exts[prop];
	    }
	  }
	  modeObj.name = spec.name;
	  if (spec.helperType) { modeObj.helperType = spec.helperType; }
	  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
	    { modeObj[prop$1] = spec.modeProps[prop$1]; } }
	
	  return modeObj
	}
	
	// This can be used to attach properties to mode objects from
	// outside the actual mode definition.
	var modeExtensions = {};
	function extendMode(mode, properties) {
	  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	  copyObj(properties, exts);
	}
	
	function copyState(mode, state) {
	  if (state === true) { return state }
	  if (mode.copyState) { return mode.copyState(state) }
	  var nstate = {};
	  for (var n in state) {
	    var val = state[n];
	    if (val instanceof Array) { val = val.concat([]); }
	    nstate[n] = val;
	  }
	  return nstate
	}
	
	// Given a mode and a state (for that mode), find the inner mode and
	// state at the position that the state refers to.
	function innerMode(mode, state) {
	  var info;
	  while (mode.innerMode) {
	    info = mode.innerMode(state);
	    if (!info || info.mode == mode) { break }
	    state = info.state;
	    mode = info.mode;
	  }
	  return info || {mode: mode, state: state}
	}
	
	function startState(mode, a1, a2) {
	  return mode.startState ? mode.startState(a1, a2) : true
	}
	
	// STRING STREAM
	
	// Fed to the mode parsers, provides helper functions to make
	// parsers more succinct.
	
	var StringStream = function(string, tabSize, lineOracle) {
	  this.pos = this.start = 0;
	  this.string = string;
	  this.tabSize = tabSize || 8;
	  this.lastColumnPos = this.lastColumnValue = 0;
	  this.lineStart = 0;
	  this.lineOracle = lineOracle;
	};
	
	StringStream.prototype.eol = function () {return this.pos >= this.string.length};
	StringStream.prototype.sol = function () {return this.pos == this.lineStart};
	StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
	StringStream.prototype.next = function () {
	  if (this.pos < this.string.length)
	    { return this.string.charAt(this.pos++) }
	};
	StringStream.prototype.eat = function (match) {
	  var ch = this.string.charAt(this.pos);
	  var ok;
	  if (typeof match == "string") { ok = ch == match; }
	  else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
	  if (ok) {++this.pos; return ch}
	};
	StringStream.prototype.eatWhile = function (match) {
	  var start = this.pos;
	  while (this.eat(match)){}
	  return this.pos > start
	};
	StringStream.prototype.eatSpace = function () {
	    var this$1 = this;
	
	  var start = this.pos;
	  while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos; }
	  return this.pos > start
	};
	StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
	StringStream.prototype.skipTo = function (ch) {
	  var found = this.string.indexOf(ch, this.pos);
	  if (found > -1) {this.pos = found; return true}
	};
	StringStream.prototype.backUp = function (n) {this.pos -= n;};
	StringStream.prototype.column = function () {
	  if (this.lastColumnPos < this.start) {
	    this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	    this.lastColumnPos = this.start;
	  }
	  return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	};
	StringStream.prototype.indentation = function () {
	  return countColumn(this.string, null, this.tabSize) -
	    (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	};
	StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
	  if (typeof pattern == "string") {
	    var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
	    var substr = this.string.substr(this.pos, pattern.length);
	    if (cased(substr) == cased(pattern)) {
	      if (consume !== false) { this.pos += pattern.length; }
	      return true
	    }
	  } else {
	    var match = this.string.slice(this.pos).match(pattern);
	    if (match && match.index > 0) { return null }
	    if (match && consume !== false) { this.pos += match[0].length; }
	    return match
	  }
	};
	StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
	StringStream.prototype.hideFirstChars = function (n, inner) {
	  this.lineStart += n;
	  try { return inner() }
	  finally { this.lineStart -= n; }
	};
	StringStream.prototype.lookAhead = function (n) {
	  var oracle = this.lineOracle;
	  return oracle && oracle.lookAhead(n)
	};
	
	var SavedContext = function(state, lookAhead) {
	  this.state = state;
	  this.lookAhead = lookAhead;
	};
	
	var Context = function(doc, state, line, lookAhead) {
	  this.state = state;
	  this.doc = doc;
	  this.line = line;
	  this.maxLookAhead = lookAhead || 0;
	};
	
	Context.prototype.lookAhead = function (n) {
	  var line = this.doc.getLine(this.line + n);
	  if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
	  return line
	};
	
	Context.prototype.nextLine = function () {
	  this.line++;
	  if (this.maxLookAhead > 0) { this.maxLookAhead--; }
	};
	
	Context.fromSaved = function (doc, saved, line) {
	  if (saved instanceof SavedContext)
	    { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
	  else
	    { return new Context(doc, copyState(doc.mode, saved), line) }
	};
	
	Context.prototype.save = function (copy) {
	  var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
	  return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
	};
	
	
	// Compute a style array (an array starting with a mode generation
	// -- for invalidation -- followed by pairs of end positions and
	// style strings), which is used to highlight the tokens on the
	// line.
	function highlightLine(cm, line, context, forceToEnd) {
	  // A styles array always starts with a number identifying the
	  // mode/overlays that it is based on (for easy invalidation).
	  var st = [cm.state.modeGen], lineClasses = {};
	  // Compute the base array of styles
	  runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
	          lineClasses, forceToEnd);
	  var state = context.state;
	
	  // Run overlays, adjust style array.
	  var loop = function ( o ) {
	    var overlay = cm.state.overlays[o], i = 1, at = 0;
	    context.state = true;
	    runMode(cm, line.text, overlay.mode, context, function (end, style) {
	      var start = i;
	      // Ensure there's a token end at the current position, and that i points at it
	      while (at < end) {
	        var i_end = st[i];
	        if (i_end > end)
	          { st.splice(i, 1, end, st[i+1], i_end); }
	        i += 2;
	        at = Math.min(end, i_end);
	      }
	      if (!style) { return }
	      if (overlay.opaque) {
	        st.splice(start, i - start, end, "overlay " + style);
	        i = start + 2;
	      } else {
	        for (; start < i; start += 2) {
	          var cur = st[start+1];
	          st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
	        }
	      }
	    }, lineClasses);
	  };
	
	  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );
	  context.state = state;
	
	  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
	}
	
	function getLineStyles(cm, line, updateFrontier) {
	  if (!line.styles || line.styles[0] != cm.state.modeGen) {
	    var context = getContextBefore(cm, lineNo(line));
	    var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
	    var result = highlightLine(cm, line, context);
	    if (resetState) { context.state = resetState; }
	    line.stateAfter = context.save(!resetState);
	    line.styles = result.styles;
	    if (result.classes) { line.styleClasses = result.classes; }
	    else if (line.styleClasses) { line.styleClasses = null; }
	    if (updateFrontier === cm.doc.highlightFrontier)
	      { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
	  }
	  return line.styles
	}
	
	function getContextBefore(cm, n, precise) {
	  var doc = cm.doc, display = cm.display;
	  if (!doc.mode.startState) { return new Context(doc, true, n) }
	  var start = findStartLine(cm, n, precise);
	  var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
	  var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);
	
	  doc.iter(start, n, function (line) {
	    processLine(cm, line.text, context);
	    var pos = context.line;
	    line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
	    context.nextLine();
	  });
	  if (precise) { doc.modeFrontier = context.line; }
	  return context
	}
	
	// Lightweight form of highlight -- proceed over this line and
	// update state, but don't save a style array. Used for lines that
	// aren't currently visible.
	function processLine(cm, text, context, startAt) {
	  var mode = cm.doc.mode;
	  var stream = new StringStream(text, cm.options.tabSize, context);
	  stream.start = stream.pos = startAt || 0;
	  if (text == "") { callBlankLine(mode, context.state); }
	  while (!stream.eol()) {
	    readToken(mode, stream, context.state);
	    stream.start = stream.pos;
	  }
	}
	
	function callBlankLine(mode, state) {
	  if (mode.blankLine) { return mode.blankLine(state) }
	  if (!mode.innerMode) { return }
	  var inner = innerMode(mode, state);
	  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
	}
	
	function readToken(mode, stream, state, inner) {
	  for (var i = 0; i < 10; i++) {
	    if (inner) { inner[0] = innerMode(mode, state).mode; }
	    var style = mode.token(stream, state);
	    if (stream.pos > stream.start) { return style }
	  }
	  throw new Error("Mode " + mode.name + " failed to advance stream.")
	}
	
	var Token = function(stream, type, state) {
	  this.start = stream.start; this.end = stream.pos;
	  this.string = stream.current();
	  this.type = type || null;
	  this.state = state;
	};
	
	// Utility for getTokenAt and getLineTokens
	function takeToken(cm, pos, precise, asArray) {
	  var doc = cm.doc, mode = doc.mode, style;
	  pos = clipPos(doc, pos);
	  var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
	  var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
	  if (asArray) { tokens = []; }
	  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	    stream.start = stream.pos;
	    style = readToken(mode, stream, context.state);
	    if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
	  }
	  return asArray ? tokens : new Token(stream, style, context.state)
	}
	
	function extractLineClasses(type, output) {
	  if (type) { for (;;) {
	    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	    if (!lineClass) { break }
	    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	    var prop = lineClass[1] ? "bgClass" : "textClass";
	    if (output[prop] == null)
	      { output[prop] = lineClass[2]; }
	    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	      { output[prop] += " " + lineClass[2]; }
	  } }
	  return type
	}
	
	// Run the given mode's parser over a line, calling f for each token.
	function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
	  var flattenSpans = mode.flattenSpans;
	  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
	  var curStart = 0, curStyle = null;
	  var stream = new StringStream(text, cm.options.tabSize, context), style;
	  var inner = cm.options.addModeClass && [null];
	  if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
	  while (!stream.eol()) {
	    if (stream.pos > cm.options.maxHighlightLength) {
	      flattenSpans = false;
	      if (forceToEnd) { processLine(cm, text, context, stream.pos); }
	      stream.pos = text.length;
	      style = null;
	    } else {
	      style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
	    }
	    if (inner) {
	      var mName = inner[0].name;
	      if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
	    }
	    if (!flattenSpans || curStyle != style) {
	      while (curStart < stream.start) {
	        curStart = Math.min(stream.start, curStart + 5000);
	        f(curStart, curStyle);
	      }
	      curStyle = style;
	    }
	    stream.start = stream.pos;
	  }
	  while (curStart < stream.pos) {
	    // Webkit seems to refuse to render text nodes longer than 57444
	    // characters, and returns inaccurate measurements in nodes
	    // starting around 5000 chars.
	    var pos = Math.min(stream.pos, curStart + 5000);
	    f(pos, curStyle);
	    curStart = pos;
	  }
	}
	
	// Finds the line to start with when starting a parse. Tries to
	// find a line with a stateAfter, so that it can start with a
	// valid state. If that fails, it returns the line with the
	// smallest indentation, which tends to need the least context to
	// parse correctly.
	function findStartLine(cm, n, precise) {
	  var minindent, minline, doc = cm.doc;
	  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	  for (var search = n; search > lim; --search) {
	    if (search <= doc.first) { return doc.first }
	    var line = getLine(doc, search - 1), after = line.stateAfter;
	    if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
	      { return search }
	    var indented = countColumn(line.text, null, cm.options.tabSize);
	    if (minline == null || minindent > indented) {
	      minline = search - 1;
	      minindent = indented;
	    }
	  }
	  return minline
	}
	
	function retreatFrontier(doc, n) {
	  doc.modeFrontier = Math.min(doc.modeFrontier, n);
	  if (doc.highlightFrontier < n - 10) { return }
	  var start = doc.first;
	  for (var line = n - 1; line > start; line--) {
	    var saved = getLine(doc, line).stateAfter;
	    // change is on 3
	    // state on line 1 looked ahead 2 -- so saw 3
	    // test 1 + 2 < 3 should cover this
	    if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
	      start = line + 1;
	      break
	    }
	  }
	  doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
	}
	
	// LINE DATA STRUCTURE
	
	// Line objects. These hold state related to a line, including
	// highlighting info (the styles array).
	var Line = function(text, markedSpans, estimateHeight) {
	  this.text = text;
	  attachMarkedSpans(this, markedSpans);
	  this.height = estimateHeight ? estimateHeight(this) : 1;
	};
	
	Line.prototype.lineNo = function () { return lineNo(this) };
	eventMixin(Line);
	
	// Change the content (text, markers) of a line. Automatically
	// invalidates cached information and tries to re-estimate the
	// line's height.
	function updateLine(line, text, markedSpans, estimateHeight) {
	  line.text = text;
	  if (line.stateAfter) { line.stateAfter = null; }
	  if (line.styles) { line.styles = null; }
	  if (line.order != null) { line.order = null; }
	  detachMarkedSpans(line);
	  attachMarkedSpans(line, markedSpans);
	  var estHeight = estimateHeight ? estimateHeight(line) : 1;
	  if (estHeight != line.height) { updateLineHeight(line, estHeight); }
	}
	
	// Detach a line from the document tree and its markers.
	function cleanUpLine(line) {
	  line.parent = null;
	  detachMarkedSpans(line);
	}
	
	// Convert a style as returned by a mode (either null, or a string
	// containing one or more styles) to a CSS style. This is cached,
	// and also looks for line-wide styles.
	var styleToClassCache = {};
	var styleToClassCacheWithMode = {};
	function interpretTokenStyle(style, options) {
	  if (!style || /^\s*$/.test(style)) { return null }
	  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	  return cache[style] ||
	    (cache[style] = style.replace(/\S+/g, "cm-$&"))
	}
	
	// Render the DOM representation of the text of a line. Also builds
	// up a 'line map', which points at the DOM nodes that represent
	// specific stretches of text, and is used by the measuring code.
	// The returned object contains the DOM node, this map, and
	// information about line-wide styles that were set by the mode.
	function buildLineContent(cm, lineView) {
	  // The padding-right forces the element to have a 'border', which
	  // is needed on Webkit to be able to get line-level bounding
	  // rectangles for it (in measureChar).
	  var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
	  var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
	                 col: 0, pos: 0, cm: cm,
	                 trailingSpace: false,
	                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	  lineView.measure = {};
	
	  // Iterate over the logical lines that make up this visual line.
	  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
	    builder.pos = 0;
	    builder.addToken = buildToken;
	    // Optionally wire in some hacks into the token-rendering
	    // algorithm, to deal with browser quirks.
	    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
	      { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
	    builder.map = [];
	    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	    if (line.styleClasses) {
	      if (line.styleClasses.bgClass)
	        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
	      if (line.styleClasses.textClass)
	        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
	    }
	
	    // Ensure at least a single node is present, for measuring.
	    if (builder.map.length == 0)
	      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }
	
	    // Store the map and a cache object for the current logical line
	    if (i == 0) {
	      lineView.measure.map = builder.map;
	      lineView.measure.cache = {};
	    } else {
	      (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
	      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
	    }
	  }
	
	  // See issue #2901
	  if (webkit) {
	    var last = builder.content.lastChild;
	    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	      { builder.content.className = "cm-tab-wrap-hack"; }
	  }
	
	  signal(cm, "renderLine", cm, lineView.line, builder.pre);
	  if (builder.pre.className)
	    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }
	
	  return builder
	}
	
	function defaultSpecialCharPlaceholder(ch) {
	  var token = elt("span", "\u2022", "cm-invalidchar");
	  token.title = "\\u" + ch.charCodeAt(0).toString(16);
	  token.setAttribute("aria-label", token.title);
	  return token
	}
	
	// Build up the DOM representation for a single token, and add it to
	// the line map. Takes care to render special characters separately.
	function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	  if (!text) { return }
	  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
	  var special = builder.cm.state.specialChars, mustWrap = false;
	  var content;
	  if (!special.test(text)) {
	    builder.col += text.length;
	    content = document.createTextNode(displayText);
	    builder.map.push(builder.pos, builder.pos + text.length, content);
	    if (ie && ie_version < 9) { mustWrap = true; }
	    builder.pos += text.length;
	  } else {
	    content = document.createDocumentFragment();
	    var pos = 0;
	    while (true) {
	      special.lastIndex = pos;
	      var m = special.exec(text);
	      var skipped = m ? m.index - pos : text.length - pos;
	      if (skipped) {
	        var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
	        else { content.appendChild(txt); }
	        builder.map.push(builder.pos, builder.pos + skipped, txt);
	        builder.col += skipped;
	        builder.pos += skipped;
	      }
	      if (!m) { break }
	      pos += skipped + 1;
	      var txt$1 = (void 0);
	      if (m[0] == "\t") {
	        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	        txt$1.setAttribute("role", "presentation");
	        txt$1.setAttribute("cm-text", "\t");
	        builder.col += tabWidth;
	      } else if (m[0] == "\r" || m[0] == "\n") {
	        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	        txt$1.setAttribute("cm-text", m[0]);
	        builder.col += 1;
	      } else {
	        txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
	        txt$1.setAttribute("cm-text", m[0]);
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
	        else { content.appendChild(txt$1); }
	        builder.col += 1;
	      }
	      builder.map.push(builder.pos, builder.pos + 1, txt$1);
	      builder.pos++;
	    }
	  }
	  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
	  if (style || startStyle || endStyle || mustWrap || css) {
	    var fullStyle = style || "";
	    if (startStyle) { fullStyle += startStyle; }
	    if (endStyle) { fullStyle += endStyle; }
	    var token = elt("span", [content], fullStyle, css);
	    if (title) { token.title = title; }
	    return builder.content.appendChild(token)
	  }
	  builder.content.appendChild(content);
	}
	
	function splitSpaces(text, trailingBefore) {
	  if (text.length > 1 && !/  /.test(text)) { return text }
	  var spaceBefore = trailingBefore, result = "";
	  for (var i = 0; i < text.length; i++) {
	    var ch = text.charAt(i);
	    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	      { ch = "\u00a0"; }
	    result += ch;
	    spaceBefore = ch == " ";
	  }
	  return result
	}
	
	// Work around nonsense dimensions being reported for stretches of
	// right-to-left text.
	function buildTokenBadBidi(inner, order) {
	  return function (builder, text, style, startStyle, endStyle, title, css) {
	    style = style ? style + " cm-force-border" : "cm-force-border";
	    var start = builder.pos, end = start + text.length;
	    for (;;) {
	      // Find the part that overlaps with the start of this text
	      var part = (void 0);
	      for (var i = 0; i < order.length; i++) {
	        part = order[i];
	        if (part.to > start && part.from <= start) { break }
	      }
	      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
	      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	      startStyle = null;
	      text = text.slice(part.to - start);
	      start = part.to;
	    }
	  }
	}
	
	function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	  var widget = !ignoreWidget && marker.widgetNode;
	  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
	  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	    if (!widget)
	      { widget = builder.content.appendChild(document.createElement("span")); }
	    widget.setAttribute("cm-marker", marker.id);
	  }
	  if (widget) {
	    builder.cm.display.input.setUneditable(widget);
	    builder.content.appendChild(widget);
	  }
	  builder.pos += size;
	  builder.trailingSpace = false;
	}
	
	// Outputs a number of spans to make up a line, taking highlighting
	// and marked text into account.
	function insertLineContent(line, builder, styles) {
	  var spans = line.markedSpans, allText = line.text, at = 0;
	  if (!spans) {
	    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
	      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
	    return
	  }
	
	  var len = allText.length, pos = 0, i = 1, text = "", style, css;
	  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	  for (;;) {
	    if (nextChange == pos) { // Update current marker set
	      spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	      collapsed = null; nextChange = Infinity;
	      var foundBookmarks = [], endStyles = (void 0);
	      for (var j = 0; j < spans.length; ++j) {
	        var sp = spans[j], m = sp.marker;
	        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	          foundBookmarks.push(m);
	        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	            nextChange = sp.to;
	            spanEndStyle = "";
	          }
	          if (m.className) { spanStyle += " " + m.className; }
	          if (m.css) { css = (css ? css + ";" : "") + m.css; }
	          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
	          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
	          if (m.title && !title) { title = m.title; }
	          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	            { collapsed = sp; }
	        } else if (sp.from > pos && nextChange > sp.from) {
	          nextChange = sp.from;
	        }
	      }
	      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
	        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }
	
	      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
	        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
	      if (collapsed && (collapsed.from || 0) == pos) {
	        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                           collapsed.marker, collapsed.from == null);
	        if (collapsed.to == null) { return }
	        if (collapsed.to == pos) { collapsed = false; }
	      }
	    }
	    if (pos >= len) { break }
	
	    var upto = Math.min(len, nextChange);
	    while (true) {
	      if (text) {
	        var end = pos + text.length;
	        if (!collapsed) {
	          var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	        }
	        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
	        pos = end;
	        spanStartStyle = "";
	      }
	      text = allText.slice(at, at = styles[i++]);
	      style = interpretTokenStyle(styles[i++], builder.cm.options);
	    }
	  }
	}
	
	
	// These objects are used to represent the visible (currently drawn)
	// part of the document. A LineView may correspond to multiple
	// logical lines, if those are connected by collapsed ranges.
	function LineView(doc, line, lineN) {
	  // The starting line
	  this.line = line;
	  // Continuing lines, if any
	  this.rest = visualLineContinued(line);
	  // Number of logical lines in this visual line
	  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	  this.node = this.text = null;
	  this.hidden = lineIsHidden(doc, line);
	}
	
	// Create a range of LineView objects for the given lines.
	function buildViewArray(cm, from, to) {
	  var array = [], nextPos;
	  for (var pos = from; pos < to; pos = nextPos) {
	    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	    nextPos = pos + view.size;
	    array.push(view);
	  }
	  return array
	}
	
	var operationGroup = null;
	
	function pushOperation(op) {
	  if (operationGroup) {
	    operationGroup.ops.push(op);
	  } else {
	    op.ownsGroup = operationGroup = {
	      ops: [op],
	      delayedCallbacks: []
	    };
	  }
	}
	
	function fireCallbacksForOps(group) {
	  // Calls delayed callbacks and cursorActivity handlers until no
	  // new ones appear
	  var callbacks = group.delayedCallbacks, i = 0;
	  do {
	    for (; i < callbacks.length; i++)
	      { callbacks[i].call(null); }
	    for (var j = 0; j < group.ops.length; j++) {
	      var op = group.ops[j];
	      if (op.cursorActivityHandlers)
	        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
	    }
	  } while (i < callbacks.length)
	}
	
	function finishOperation(op, endCb) {
	  var group = op.ownsGroup;
	  if (!group) { return }
	
	  try { fireCallbacksForOps(group); }
	  finally {
	    operationGroup = null;
	    endCb(group);
	  }
	}
	
	var orphanDelayedCallbacks = null;
	
	// Often, we want to signal events at a point where we are in the
	// middle of some work, but don't want the handler to start calling
	// other methods on the editor, which might be in an inconsistent
	// state or simply not expect any other events to happen.
	// signalLater looks whether there are any handlers, and schedules
	// them to be executed when the last operation ends, or, if no
	// operation is active, when a timeout fires.
	function signalLater(emitter, type /*, values...*/) {
	  var arr = getHandlers(emitter, type);
	  if (!arr.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2), list;
	  if (operationGroup) {
	    list = operationGroup.delayedCallbacks;
	  } else if (orphanDelayedCallbacks) {
	    list = orphanDelayedCallbacks;
	  } else {
	    list = orphanDelayedCallbacks = [];
	    setTimeout(fireOrphanDelayed, 0);
	  }
	  var loop = function ( i ) {
	    list.push(function () { return arr[i].apply(null, args); });
	  };
	
	  for (var i = 0; i < arr.length; ++i)
	    loop( i );
	}
	
	function fireOrphanDelayed() {
	  var delayed = orphanDelayedCallbacks;
	  orphanDelayedCallbacks = null;
	  for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
	}
	
	// When an aspect of a line changes, a string is added to
	// lineView.changes. This updates the relevant part of the line's
	// DOM structure.
	function updateLineForChanges(cm, lineView, lineN, dims) {
	  for (var j = 0; j < lineView.changes.length; j++) {
	    var type = lineView.changes[j];
	    if (type == "text") { updateLineText(cm, lineView); }
	    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
	    else if (type == "class") { updateLineClasses(cm, lineView); }
	    else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
	  }
	  lineView.changes = null;
	}
	
	// Lines with gutter elements, widgets or a background class need to
	// be wrapped, and have the extra elements added to the wrapper div
	function ensureLineWrapped(lineView) {
	  if (lineView.node == lineView.text) {
	    lineView.node = elt("div", null, null, "position: relative");
	    if (lineView.text.parentNode)
	      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
	    lineView.node.appendChild(lineView.text);
	    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
	  }
	  return lineView.node
	}
	
	function updateLineBackground(cm, lineView) {
	  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	  if (cls) { cls += " CodeMirror-linebackground"; }
	  if (lineView.background) {
	    if (cls) { lineView.background.className = cls; }
	    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	  } else if (cls) {
	    var wrap = ensureLineWrapped(lineView);
	    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    cm.display.input.setUneditable(lineView.background);
	  }
	}
	
	// Wrapper around buildLineContent which will reuse the structure
	// in display.externalMeasured when possible.
	function getLineContent(cm, lineView) {
	  var ext = cm.display.externalMeasured;
	  if (ext && ext.line == lineView.line) {
	    cm.display.externalMeasured = null;
	    lineView.measure = ext.measure;
	    return ext.built
	  }
	  return buildLineContent(cm, lineView)
	}
	
	// Redraw the line's text. Interacts with the background and text
	// classes because the mode may output tokens that influence these
	// classes.
	function updateLineText(cm, lineView) {
	  var cls = lineView.text.className;
	  var built = getLineContent(cm, lineView);
	  if (lineView.text == lineView.node) { lineView.node = built.pre; }
	  lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	  lineView.text = built.pre;
	  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	    lineView.bgClass = built.bgClass;
	    lineView.textClass = built.textClass;
	    updateLineClasses(cm, lineView);
	  } else if (cls) {
	    lineView.text.className = cls;
	  }
	}
	
	function updateLineClasses(cm, lineView) {
	  updateLineBackground(cm, lineView);
	  if (lineView.line.wrapClass)
	    { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
	  else if (lineView.node != lineView.text)
	    { lineView.node.className = ""; }
	  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	  lineView.text.className = textClass || "";
	}
	
	function updateLineGutter(cm, lineView, lineN, dims) {
	  if (lineView.gutter) {
	    lineView.node.removeChild(lineView.gutter);
	    lineView.gutter = null;
	  }
	  if (lineView.gutterBackground) {
	    lineView.node.removeChild(lineView.gutterBackground);
	    lineView.gutterBackground = null;
	  }
	  if (lineView.line.gutterClass) {
	    var wrap = ensureLineWrapped(lineView);
	    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
	    cm.display.input.setUneditable(lineView.gutterBackground);
	    wrap.insertBefore(lineView.gutterBackground, lineView.text);
	  }
	  var markers = lineView.line.gutterMarkers;
	  if (cm.options.lineNumbers || markers) {
	    var wrap$1 = ensureLineWrapped(lineView);
	    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
	    cm.display.input.setUneditable(gutterWrap);
	    wrap$1.insertBefore(gutterWrap, lineView.text);
	    if (lineView.line.gutterClass)
	      { gutterWrap.className += " " + lineView.line.gutterClass; }
	    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	      { lineView.lineNumber = gutterWrap.appendChild(
	        elt("div", lineNumberFor(cm.options, lineN),
	            "CodeMirror-linenumber CodeMirror-gutter-elt",
	            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
	    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
	      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	      if (found)
	        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
	                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
	    } }
	  }
	}
	
	function updateLineWidgets(cm, lineView, dims) {
	  if (lineView.alignable) { lineView.alignable = null; }
	  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
	    next = node.nextSibling;
	    if (node.className == "CodeMirror-linewidget")
	      { lineView.node.removeChild(node); }
	  }
	  insertLineWidgets(cm, lineView, dims);
	}
	
	// Build a line's DOM representation from scratch
	function buildLineElement(cm, lineView, lineN, dims) {
	  var built = getLineContent(cm, lineView);
	  lineView.text = lineView.node = built.pre;
	  if (built.bgClass) { lineView.bgClass = built.bgClass; }
	  if (built.textClass) { lineView.textClass = built.textClass; }
	
	  updateLineClasses(cm, lineView);
	  updateLineGutter(cm, lineView, lineN, dims);
	  insertLineWidgets(cm, lineView, dims);
	  return lineView.node
	}
	
	// A lineView may contain multiple logical lines (when merged by
	// collapsed spans). The widgets for all of them need to be drawn.
	function insertLineWidgets(cm, lineView, dims) {
	  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
	}
	
	function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	  if (!line.widgets) { return }
	  var wrap = ensureLineWrapped(lineView);
	  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
	    positionLineWidget(widget, node, lineView, dims);
	    cm.display.input.setUneditable(node);
	    if (allowAbove && widget.above)
	      { wrap.insertBefore(node, lineView.gutter || lineView.text); }
	    else
	      { wrap.appendChild(node); }
	    signalLater(widget, "redraw");
	  }
	}
	
	function positionLineWidget(widget, node, lineView, dims) {
	  if (widget.noHScroll) {
	    (lineView.alignable || (lineView.alignable = [])).push(node);
	    var width = dims.wrapperWidth;
	    node.style.left = dims.fixedPos + "px";
	    if (!widget.coverGutter) {
	      width -= dims.gutterTotalWidth;
	      node.style.paddingLeft = dims.gutterTotalWidth + "px";
	    }
	    node.style.width = width + "px";
	  }
	  if (widget.coverGutter) {
	    node.style.zIndex = 5;
	    node.style.position = "relative";
	    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
	  }
	}
	
	function widgetHeight(widget) {
	  if (widget.height != null) { return widget.height }
	  var cm = widget.doc.cm;
	  if (!cm) { return 0 }
	  if (!contains(document.body, widget.node)) {
	    var parentStyle = "position: relative;";
	    if (widget.coverGutter)
	      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
	    if (widget.noHScroll)
	      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
	    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	  }
	  return widget.height = widget.node.parentNode.offsetHeight
	}
	
	// Return true when the given mouse event happened in a widget
	function eventInWidget(display, e) {
	  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	        (n.parentNode == display.sizer && n != display.mover))
	      { return true }
	  }
	}
	
	// POSITION MEASUREMENT
	
	function paddingTop(display) {return display.lineSpace.offsetTop}
	function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
	function paddingH(display) {
	  if (display.cachedPaddingH) { return display.cachedPaddingH }
	  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
	  return data
	}
	
	function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
	function displayWidth(cm) {
	  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
	}
	function displayHeight(cm) {
	  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
	}
	
	// Ensure the lineView.wrapping.heights array is populated. This is
	// an array of bottom offsets for the lines that make up a drawn
	// line. When lineWrapping is on, there might be more than one
	// height.
	function ensureLineHeights(cm, lineView, rect) {
	  var wrapping = cm.options.lineWrapping;
	  var curWidth = wrapping && displayWidth(cm);
	  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	    var heights = lineView.measure.heights = [];
	    if (wrapping) {
	      lineView.measure.width = curWidth;
	      var rects = lineView.text.firstChild.getClientRects();
	      for (var i = 0; i < rects.length - 1; i++) {
	        var cur = rects[i], next = rects[i + 1];
	        if (Math.abs(cur.bottom - next.bottom) > 2)
	          { heights.push((cur.bottom + next.top) / 2 - rect.top); }
	      }
	    }
	    heights.push(rect.bottom - rect.top);
	  }
	}
	
	// Find a line map (mapping character offsets to text nodes) and a
	// measurement cache for the given line number. (A line view might
	// contain multiple lines when collapsed ranges are present.)
	function mapFromLineView(lineView, line, lineN) {
	  if (lineView.line == line)
	    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
	  for (var i = 0; i < lineView.rest.length; i++)
	    { if (lineView.rest[i] == line)
	      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
	  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
	    { if (lineNo(lineView.rest[i$1]) > lineN)
	      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
	}
	
	// Render a line into the hidden node display.externalMeasured. Used
	// when measurement is needed for a line that's not in the viewport.
	function updateExternalMeasurement(cm, line) {
	  line = visualLine(line);
	  var lineN = lineNo(line);
	  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	  view.lineN = lineN;
	  var built = view.built = buildLineContent(cm, view);
	  view.text = built.pre;
	  removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	  return view
	}
	
	// Get a {top, bottom, left, right} box (in line-local coordinates)
	// for a given character.
	function measureChar(cm, line, ch, bias) {
	  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
	}
	
	// Find a line view that corresponds to the given line number.
	function findViewForLine(cm, lineN) {
	  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	    { return cm.display.view[findViewIndex(cm, lineN)] }
	  var ext = cm.display.externalMeasured;
	  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	    { return ext }
	}
	
	// Measurement can be split in two steps, the set-up work that
	// applies to the whole line, and the measurement of the actual
	// character. Functions like coordsChar, that need to do a lot of
	// measurements in a row, can thus ensure that the set-up work is
	// only done once.
	function prepareMeasureForLine(cm, line) {
	  var lineN = lineNo(line);
	  var view = findViewForLine(cm, lineN);
	  if (view && !view.text) {
	    view = null;
	  } else if (view && view.changes) {
	    updateLineForChanges(cm, view, lineN, getDimensions(cm));
	    cm.curOp.forceUpdate = true;
	  }
	  if (!view)
	    { view = updateExternalMeasurement(cm, line); }
	
	  var info = mapFromLineView(view, line, lineN);
	  return {
	    line: line, view: view, rect: null,
	    map: info.map, cache: info.cache, before: info.before,
	    hasHeights: false
	  }
	}
	
	// Given a prepared measurement object, measures the position of an
	// actual character (or fetches it from the cache).
	function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	  if (prepared.before) { ch = -1; }
	  var key = ch + (bias || ""), found;
	  if (prepared.cache.hasOwnProperty(key)) {
	    found = prepared.cache[key];
	  } else {
	    if (!prepared.rect)
	      { prepared.rect = prepared.view.text.getBoundingClientRect(); }
	    if (!prepared.hasHeights) {
	      ensureLineHeights(cm, prepared.view, prepared.rect);
	      prepared.hasHeights = true;
	    }
	    found = measureCharInner(cm, prepared, ch, bias);
	    if (!found.bogus) { prepared.cache[key] = found; }
	  }
	  return {left: found.left, right: found.right,
	          top: varHeight ? found.rtop : found.top,
	          bottom: varHeight ? found.rbottom : found.bottom}
	}
	
	var nullRect = {left: 0, right: 0, top: 0, bottom: 0};
	
	function nodeAndOffsetInLineMap(map$$1, ch, bias) {
	  var node, start, end, collapse, mStart, mEnd;
	  // First, search the line map for the text node corresponding to,
	  // or closest to, the target character.
	  for (var i = 0; i < map$$1.length; i += 3) {
	    mStart = map$$1[i];
	    mEnd = map$$1[i + 1];
	    if (ch < mStart) {
	      start = 0; end = 1;
	      collapse = "left";
	    } else if (ch < mEnd) {
	      start = ch - mStart;
	      end = start + 1;
	    } else if (i == map$$1.length - 3 || ch == mEnd && map$$1[i + 3] > ch) {
	      end = mEnd - mStart;
	      start = end - 1;
	      if (ch >= mEnd) { collapse = "right"; }
	    }
	    if (start != null) {
	      node = map$$1[i + 2];
	      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	        { collapse = bias; }
	      if (bias == "left" && start == 0)
	        { while (i && map$$1[i - 2] == map$$1[i - 3] && map$$1[i - 1].insertLeft) {
	          node = map$$1[(i -= 3) + 2];
	          collapse = "left";
	        } }
	      if (bias == "right" && start == mEnd - mStart)
	        { while (i < map$$1.length - 3 && map$$1[i + 3] == map$$1[i + 4] && !map$$1[i + 5].insertLeft) {
	          node = map$$1[(i += 3) + 2];
	          collapse = "right";
	        } }
	      break
	    }
	  }
	  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
	}
	
	function getUsefulRect(rects, bias) {
	  var rect = nullRect;
	  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
	    if ((rect = rects[i]).left != rect.right) { break }
	  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
	    if ((rect = rects[i$1]).left != rect.right) { break }
	  } }
	  return rect
	}
	
	function measureCharInner(cm, prepared, ch, bias) {
	  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	  var node = place.node, start = place.start, end = place.end, collapse = place.collapse;
	
	  var rect;
	  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
	      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
	      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	        { rect = node.parentNode.getBoundingClientRect(); }
	      else
	        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
	      if (rect.left || rect.right || start == 0) { break }
	      end = start;
	      start = start - 1;
	      collapse = "right";
	    }
	    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
	  } else { // If it is a widget, simply get the box for the whole widget.
	    if (start > 0) { collapse = bias = "right"; }
	    var rects;
	    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	      { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
	    else
	      { rect = node.getBoundingClientRect(); }
	  }
	  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	    var rSpan = node.parentNode.getClientRects()[0];
	    if (rSpan)
	      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
	    else
	      { rect = nullRect; }
	  }
	
	  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	  var mid = (rtop + rbot) / 2;
	  var heights = prepared.view.measure.heights;
	  var i = 0;
	  for (; i < heights.length - 1; i++)
	    { if (mid < heights[i]) { break } }
	  var top = i ? heights[i - 1] : 0, bot = heights[i];
	  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                top: top, bottom: bot};
	  if (!rect.left && !rect.right) { result.bogus = true; }
	  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }
	
	  return result
	}
	
	// Work around problem with bounding client rects on ranges being
	// returned incorrectly when zoomed on IE10 and below.
	function maybeUpdateRectForZooming(measure, rect) {
	  if (!window.screen || screen.logicalXDPI == null ||
	      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	    { return rect }
	  var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	  var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	  return {left: rect.left * scaleX, right: rect.right * scaleX,
	          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
	}
	
	function clearLineMeasurementCacheFor(lineView) {
	  if (lineView.measure) {
	    lineView.measure.cache = {};
	    lineView.measure.heights = null;
	    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	      { lineView.measure.caches[i] = {}; } }
	  }
	}
	
	function clearLineMeasurementCache(cm) {
	  cm.display.externalMeasure = null;
	  removeChildren(cm.display.lineMeasure);
	  for (var i = 0; i < cm.display.view.length; i++)
	    { clearLineMeasurementCacheFor(cm.display.view[i]); }
	}
	
	function clearCaches(cm) {
	  clearLineMeasurementCache(cm);
	  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
	  cm.display.lineNumChars = null;
	}
	
	function pageScrollX() {
	  // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
	  // which causes page_Offset and bounding client rects to use
	  // different reference viewports and invalidate our calculations.
	  if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
	  return window.pageXOffset || (document.documentElement || document.body).scrollLeft
	}
	function pageScrollY() {
	  if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
	  return window.pageYOffset || (document.documentElement || document.body).scrollTop
	}
	
	// Converts a {top, bottom, left, right} box from line-local
	// coordinates into another coordinate system. Context may be one of
	// "line", "div" (display.lineDiv), "local"./null (editor), "window",
	// or "page".
	function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
	  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
	    var size = widgetHeight(lineObj.widgets[i]);
	    rect.top += size; rect.bottom += size;
	  } } }
	  if (context == "line") { return rect }
	  if (!context) { context = "local"; }
	  var yOff = heightAtLine(lineObj);
	  if (context == "local") { yOff += paddingTop(cm.display); }
	  else { yOff -= cm.display.viewOffset; }
	  if (context == "page" || context == "window") {
	    var lOff = cm.display.lineSpace.getBoundingClientRect();
	    yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	    rect.left += xOff; rect.right += xOff;
	  }
	  rect.top += yOff; rect.bottom += yOff;
	  return rect
	}
	
	// Coverts a box from "div" coords to another coordinate system.
	// Context may be "window", "page", "div", or "local"./null.
	function fromCoordSystem(cm, coords, context) {
	  if (context == "div") { return coords }
	  var left = coords.left, top = coords.top;
	  // First move into "page" coordinate system
	  if (context == "page") {
	    left -= pageScrollX();
	    top -= pageScrollY();
	  } else if (context == "local" || !context) {
	    var localBox = cm.display.sizer.getBoundingClientRect();
	    left += localBox.left;
	    top += localBox.top;
	  }
	
	  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
	}
	
	function charCoords(cm, pos, context, lineObj, bias) {
	  if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
	  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
	}
	
	// Returns a box for a given cursor position, which may have an
	// 'other' property containing the position of the secondary cursor
	// on a bidi boundary.
	// A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
	// and after `char - 1` in writing order of `char - 1`
	// A cursor Pos(line, char, "after") is on the same visual line as `char`
	// and before `char` in writing order of `char`
	// Examples (upper-case letters are RTL, lower-case are LTR):
	//     Pos(0, 1, ...)
	//     before   after
	// ab     a|b     a|b
	// aB     a|B     aB|
	// Ab     |Ab     A|b
	// AB     B|A     B|A
	// Every position after the last character on a line is considered to stick
	// to the last character on the line.
	function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	  lineObj = lineObj || getLine(cm.doc, pos.line);
	  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
	  function get(ch, right) {
	    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	    if (right) { m.left = m.right; } else { m.right = m.left; }
	    return intoCoordSystem(cm, lineObj, m, context)
	  }
	  var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
	  if (ch >= lineObj.text.length) {
	    ch = lineObj.text.length;
	    sticky = "before";
	  } else if (ch <= 0) {
	    ch = 0;
	    sticky = "after";
	  }
	  if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }
	
	  function getBidi(ch, partPos, invert) {
	    var part = order[partPos], right = (part.level % 2) != 0;
	    return get(invert ? ch - 1 : ch, right != invert)
	  }
	  var partPos = getBidiPartAt(order, ch, sticky);
	  var other = bidiOther;
	  var val = getBidi(ch, partPos, sticky == "before");
	  if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
	  return val
	}
	
	// Used to cheaply estimate the coordinates for a position. Used for
	// intermediate scroll updates.
	function estimateCoords(cm, pos) {
	  var left = 0;
	  pos = clipPos(cm.doc, pos);
	  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
	  var lineObj = getLine(cm.doc, pos.line);
	  var top = heightAtLine(lineObj) + paddingTop(cm.display);
	  return {left: left, right: left, top: top, bottom: top + lineObj.height}
	}
	
	// Positions returned by coordsChar contain some extra information.
	// xRel is the relative x position of the input coordinates compared
	// to the found position (so xRel > 0 means the coordinates are to
	// the right of the character position, for example). When outside
	// is true, that means the coordinates lie outside the line's
	// vertical range.
	function PosWithInfo(line, ch, sticky, outside, xRel) {
	  var pos = Pos(line, ch, sticky);
	  pos.xRel = xRel;
	  if (outside) { pos.outside = true; }
	  return pos
	}
	
	// Compute the character position closest to the given coordinates.
	// Input must be lineSpace-local ("div" coordinate system).
	function coordsChar(cm, x, y) {
	  var doc = cm.doc;
	  y += cm.display.viewOffset;
	  if (y < 0) { return PosWithInfo(doc.first, 0, null, true, -1) }
	  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	  if (lineN > last)
	    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, true, 1) }
	  if (x < 0) { x = 0; }
	
	  var lineObj = getLine(doc, lineN);
	  for (;;) {
	    var found = coordsCharInner(cm, lineObj, lineN, x, y);
	    var merged = collapsedSpanAtEnd(lineObj);
	    var mergedPos = merged && merged.find(0, true);
	    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	      { lineN = lineNo(lineObj = mergedPos.to.line); }
	    else
	      { return found }
	  }
	}
	
	function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
	  var measure = function (ch) { return intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, ch), "line"); };
	  var end = lineObj.text.length;
	  var begin = findFirst(function (ch) { return measure(ch - 1).bottom <= y; }, end, 0);
	  end = findFirst(function (ch) { return measure(ch).top > y; }, begin, end);
	  return {begin: begin, end: end}
	}
	
	function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
	  var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
	  return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
	}
	
	function coordsCharInner(cm, lineObj, lineNo$$1, x, y) {
	  y -= heightAtLine(lineObj);
	  var begin = 0, end = lineObj.text.length;
	  var preparedMeasure = prepareMeasureForLine(cm, lineObj);
	  var pos;
	  var order = getOrder(lineObj, cm.doc.direction);
	  if (order) {
	    if (cm.options.lineWrapping) {
	      var assign;
	      ((assign = wrappedLineExtent(cm, lineObj, preparedMeasure, y), begin = assign.begin, end = assign.end, assign));
	    }
	    pos = new Pos(lineNo$$1, Math.floor(begin + (end - begin) / 2));
	    var beginLeft = cursorCoords(cm, pos, "line", lineObj, preparedMeasure).left;
	    var dir = beginLeft < x ? 1 : -1;
	    var prevDiff, diff = beginLeft - x, prevPos;
	    var steps = Math.ceil((end - begin) / 4);
	    outer: do {
	      prevDiff = diff;
	      prevPos = pos;
	      var i = 0;
	      for (; i < steps; ++i) {
	        var prevPos$1 = pos;
	        pos = moveVisually(cm, lineObj, pos, dir);
	        if (pos == null || pos.ch < begin || end <= (pos.sticky == "before" ? pos.ch - 1 : pos.ch)) {
	          pos = prevPos$1;
	          break outer
	        }
	      }
	      diff = cursorCoords(cm, pos, "line", lineObj, preparedMeasure).left - x;
	      if (steps > 1) {
	        var diff_change_per_step = Math.abs(diff - prevDiff) / steps;
	        steps = Math.min(steps, Math.ceil(Math.abs(diff) / diff_change_per_step));
	        dir = diff < 0 ? 1 : -1;
	      }
	    } while (diff != 0 && (steps > 1 || ((dir < 0) != (diff < 0) && (Math.abs(diff) <= Math.abs(prevDiff)))))
	    if (Math.abs(diff) > Math.abs(prevDiff)) {
	      if ((diff < 0) == (prevDiff < 0)) { throw new Error("Broke out of infinite loop in coordsCharInner") }
	      pos = prevPos;
	    }
	  } else {
	    var ch = findFirst(function (ch) {
	      var box = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, ch), "line");
	      if (box.top > y) {
	        // For the cursor stickiness
	        end = Math.min(ch, end);
	        return true
	      }
	      else if (box.bottom <= y) { return false }
	      else if (box.left > x) { return true }
	      else if (box.right < x) { return false }
	      else { return (x - box.left < box.right - x) }
	    }, begin, end);
	    ch = skipExtendingChars(lineObj.text, ch, 1);
	    pos = new Pos(lineNo$$1, ch, ch == end ? "before" : "after");
	  }
	  var coords = cursorCoords(cm, pos, "line", lineObj, preparedMeasure);
	  if (y < coords.top || coords.bottom < y) { pos.outside = true; }
	  pos.xRel = x < coords.left ? -1 : (x > coords.right ? 1 : 0);
	  return pos
	}
	
	var measureText;
	// Compute the default text height.
	function textHeight(display) {
	  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
	  if (measureText == null) {
	    measureText = elt("pre");
	    // Measure a bunch of lines, for browsers that compute
	    // fractional heights.
	    for (var i = 0; i < 49; ++i) {
	      measureText.appendChild(document.createTextNode("x"));
	      measureText.appendChild(elt("br"));
	    }
	    measureText.appendChild(document.createTextNode("x"));
	  }
	  removeChildrenAndAdd(display.measure, measureText);
	  var height = measureText.offsetHeight / 50;
	  if (height > 3) { display.cachedTextHeight = height; }
	  removeChildren(display.measure);
	  return height || 1
	}
	
	// Compute the default character width.
	function charWidth(display) {
	  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
	  var anchor = elt("span", "xxxxxxxxxx");
	  var pre = elt("pre", [anchor]);
	  removeChildrenAndAdd(display.measure, pre);
	  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	  if (width > 2) { display.cachedCharWidth = width; }
	  return width || 10
	}
	
	// Do a bulk-read of the DOM positions and sizes needed to draw the
	// view, so that we don't interleave reading and writing to the DOM.
	function getDimensions(cm) {
	  var d = cm.display, left = {}, width = {};
	  var gutterLeft = d.gutters.clientLeft;
	  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	    width[cm.options.gutters[i]] = n.clientWidth;
	  }
	  return {fixedPos: compensateForHScroll(d),
	          gutterTotalWidth: d.gutters.offsetWidth,
	          gutterLeft: left,
	          gutterWidth: width,
	          wrapperWidth: d.wrapper.clientWidth}
	}
	
	// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	// but using getBoundingClientRect to get a sub-pixel-accurate
	// result.
	function compensateForHScroll(display) {
	  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
	}
	
	// Returns a function that estimates the height of a line, to use as
	// first approximation until the line becomes visible (and is thus
	// properly measurable).
	function estimateHeight(cm) {
	  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	  return function (line) {
	    if (lineIsHidden(cm.doc, line)) { return 0 }
	
	    var widgetsHeight = 0;
	    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
	      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
	    } }
	
	    if (wrapping)
	      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
	    else
	      { return widgetsHeight + th }
	  }
	}
	
	function estimateLineHeights(cm) {
	  var doc = cm.doc, est = estimateHeight(cm);
	  doc.iter(function (line) {
	    var estHeight = est(line);
	    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
	  });
	}
	
	// Given a mouse event, find the corresponding position. If liberal
	// is false, it checks whether a gutter or scrollbar was clicked,
	// and returns null if it was. forRect is used by rectangular
	// selections, and tries to estimate a character position even for
	// coordinates beyond the right of the text.
	function posFromMouse(cm, e, liberal, forRect) {
	  var display = cm.display;
	  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }
	
	  var x, y, space = display.lineSpace.getBoundingClientRect();
	  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	  try { x = e.clientX - space.left; y = e.clientY - space.top; }
	  catch (e) { return null }
	  var coords = coordsChar(cm, x, y), line;
	  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	  }
	  return coords
	}
	
	// Find the view element corresponding to a given line. Return null
	// when the line isn't visible.
	function findViewIndex(cm, n) {
	  if (n >= cm.display.viewTo) { return null }
	  n -= cm.display.viewFrom;
	  if (n < 0) { return null }
	  var view = cm.display.view;
	  for (var i = 0; i < view.length; i++) {
	    n -= view[i].size;
	    if (n < 0) { return i }
	  }
	}
	
	function updateSelection(cm) {
	  cm.display.input.showSelection(cm.display.input.prepareSelection());
	}
	
	function prepareSelection(cm, primary) {
	  var doc = cm.doc, result = {};
	  var curFragment = result.cursors = document.createDocumentFragment();
	  var selFragment = result.selection = document.createDocumentFragment();
	
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    if (primary === false && i == doc.sel.primIndex) { continue }
	    var range$$1 = doc.sel.ranges[i];
	    if (range$$1.from().line >= cm.display.viewTo || range$$1.to().line < cm.display.viewFrom) { continue }
	    var collapsed = range$$1.empty();
	    if (collapsed || cm.options.showCursorWhenSelecting)
	      { drawSelectionCursor(cm, range$$1.head, curFragment); }
	    if (!collapsed)
	      { drawSelectionRange(cm, range$$1, selFragment); }
	  }
	  return result
	}
	
	// Draws a cursor for the given range
	function drawSelectionCursor(cm, head, output) {
	  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);
	
	  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	  cursor.style.left = pos.left + "px";
	  cursor.style.top = pos.top + "px";
	  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
	
	  if (pos.other) {
	    // Secondary cursor, shown when on a 'jump' in bi-directional text
	    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	    otherCursor.style.display = "";
	    otherCursor.style.left = pos.other.left + "px";
	    otherCursor.style.top = pos.other.top + "px";
	    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	  }
	}
	
	// Draws the given range as a highlighted selection
	function drawSelectionRange(cm, range$$1, output) {
	  var display = cm.display, doc = cm.doc;
	  var fragment = document.createDocumentFragment();
	  var padding = paddingH(cm.display), leftSide = padding.left;
	  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
	
	  function add(left, top, width, bottom) {
	    if (top < 0) { top = 0; }
	    top = Math.round(top);
	    bottom = Math.round(bottom);
	    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
	  }
	
	  function drawForLine(line, fromArg, toArg) {
	    var lineObj = getLine(doc, line);
	    var lineLen = lineObj.text.length;
	    var start, end;
	    function coords(ch, bias) {
	      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
	    }
	
	    iterateBidiSections(getOrder(lineObj, doc.direction), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
	      var leftPos = coords(from, "left"), rightPos, left, right;
	      if (from == to) {
	        rightPos = leftPos;
	        left = right = leftPos.left;
	      } else {
	        rightPos = coords(to - 1, "right");
	        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	        left = leftPos.left;
	        right = rightPos.right;
	      }
	      if (fromArg == null && from == 0) { left = leftSide; }
	      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	        add(left, leftPos.top, null, leftPos.bottom);
	        left = leftSide;
	        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top); }
	      }
	      if (toArg == null && to == lineLen) { right = rightSide; }
	      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	        { start = leftPos; }
	      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	        { end = rightPos; }
	      if (left < leftSide + 1) { left = leftSide; }
	      add(left, rightPos.top, right - left, rightPos.bottom);
	    });
	    return {start: start, end: end}
	  }
	
	  var sFrom = range$$1.from(), sTo = range$$1.to();
	  if (sFrom.line == sTo.line) {
	    drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	  } else {
	    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	    var singleVLine = visualLine(fromLine) == visualLine(toLine);
	    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	    if (singleVLine) {
	      if (leftEnd.top < rightStart.top - 2) {
	        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	      } else {
	        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	      }
	    }
	    if (leftEnd.bottom < rightStart.top)
	      { add(leftSide, leftEnd.bottom, null, rightStart.top); }
	  }
	
	  output.appendChild(fragment);
	}
	
	// Cursor-blinking
	function restartBlink(cm) {
	  if (!cm.state.focused) { return }
	  var display = cm.display;
	  clearInterval(display.blinker);
	  var on = true;
	  display.cursorDiv.style.visibility = "";
	  if (cm.options.cursorBlinkRate > 0)
	    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
	      cm.options.cursorBlinkRate); }
	  else if (cm.options.cursorBlinkRate < 0)
	    { display.cursorDiv.style.visibility = "hidden"; }
	}
	
	function ensureFocus(cm) {
	  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	}
	
	function delayBlurEvent(cm) {
	  cm.state.delayingBlurEvent = true;
	  setTimeout(function () { if (cm.state.delayingBlurEvent) {
	    cm.state.delayingBlurEvent = false;
	    onBlur(cm);
	  } }, 100);
	}
	
	function onFocus(cm, e) {
	  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false; }
	
	  if (cm.options.readOnly == "nocursor") { return }
	  if (!cm.state.focused) {
	    signal(cm, "focus", cm, e);
	    cm.state.focused = true;
	    addClass(cm.display.wrapper, "CodeMirror-focused");
	    // This test prevents this from firing when a context
	    // menu is closed (since the input reset would kill the
	    // select-all detection hack)
	    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	      cm.display.input.reset();
	      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
	    }
	    cm.display.input.receivedFocus();
	  }
	  restartBlink(cm);
	}
	function onBlur(cm, e) {
	  if (cm.state.delayingBlurEvent) { return }
	
	  if (cm.state.focused) {
	    signal(cm, "blur", cm, e);
	    cm.state.focused = false;
	    rmClass(cm.display.wrapper, "CodeMirror-focused");
	  }
	  clearInterval(cm.display.blinker);
	  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
	}
	
	// Read the actual heights of the rendered lines, and update their
	// stored heights to match.
	function updateHeightsInViewport(cm) {
	  var display = cm.display;
	  var prevBottom = display.lineDiv.offsetTop;
	  for (var i = 0; i < display.view.length; i++) {
	    var cur = display.view[i], height = (void 0);
	    if (cur.hidden) { continue }
	    if (ie && ie_version < 8) {
	      var bot = cur.node.offsetTop + cur.node.offsetHeight;
	      height = bot - prevBottom;
	      prevBottom = bot;
	    } else {
	      var box = cur.node.getBoundingClientRect();
	      height = box.bottom - box.top;
	    }
	    var diff = cur.line.height - height;
	    if (height < 2) { height = textHeight(display); }
	    if (diff > .005 || diff < -.005) {
	      updateLineHeight(cur.line, height);
	      updateWidgetHeight(cur.line);
	      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
	        { updateWidgetHeight(cur.rest[j]); } }
	    }
	  }
	}
	
	// Read and store the height of line widgets associated with the
	// given line.
	function updateWidgetHeight(line) {
	  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
	    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight; } }
	}
	
	// Compute the lines that are visible in a given viewport (defaults
	// the the current scroll position). viewport may contain top,
	// height, and ensure (see op.scrollToPos) properties.
	function visibleLines(display, doc, viewport) {
	  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	  top = Math.floor(top - paddingTop(display));
	  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;
	
	  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	  // forces those lines into the viewport (if possible).
	  if (viewport && viewport.ensure) {
	    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	    if (ensureFrom < from) {
	      from = ensureFrom;
	      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	      to = ensureTo;
	    }
	  }
	  return {from: from, to: Math.max(to, from + 1)}
	}
	
	// Re-align line numbers and gutter marks to compensate for
	// horizontal scrolling.
	function alignHorizontally(cm) {
	  var display = cm.display, view = display.view;
	  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
	  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	  var gutterW = display.gutters.offsetWidth, left = comp + "px";
	  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
	    if (cm.options.fixedGutter) {
	      if (view[i].gutter)
	        { view[i].gutter.style.left = left; }
	      if (view[i].gutterBackground)
	        { view[i].gutterBackground.style.left = left; }
	    }
	    var align = view[i].alignable;
	    if (align) { for (var j = 0; j < align.length; j++)
	      { align[j].style.left = left; } }
	  } }
	  if (cm.options.fixedGutter)
	    { display.gutters.style.left = (comp + gutterW) + "px"; }
	}
	
	// Used to ensure that the line number gutter is still the right
	// size for the current document size. Returns true when an update
	// is needed.
	function maybeUpdateLineNumberWidth(cm) {
	  if (!cm.options.lineNumbers) { return false }
	  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	  if (last.length != display.lineNumChars) {
	    var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                               "CodeMirror-linenumber CodeMirror-gutter-elt"));
	    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	    display.lineGutter.style.width = "";
	    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	    display.lineNumWidth = display.lineNumInnerWidth + padding;
	    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	    display.lineGutter.style.width = display.lineNumWidth + "px";
	    updateGutterSpace(cm);
	    return true
	  }
	  return false
	}
	
	// SCROLLING THINGS INTO VIEW
	
	// If an editor sits on the top or bottom of the window, partially
	// scrolled out of view, this ensures that the cursor is visible.
	function maybeScrollWindow(cm, rect) {
	  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }
	
	  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	  if (rect.top + box.top < 0) { doScroll = true; }
	  else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
	  if (doScroll != null && !phantom) {
	    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
	    cm.display.lineSpace.appendChild(scrollNode);
	    scrollNode.scrollIntoView(doScroll);
	    cm.display.lineSpace.removeChild(scrollNode);
	  }
	}
	
	// Scroll a given position into view (immediately), verifying that
	// it actually became visible (as line heights are accurately
	// measured, the position of something may 'drift' during drawing).
	function scrollPosIntoView(cm, pos, end, margin) {
	  if (margin == null) { margin = 0; }
	  var rect;
	  if (!cm.options.lineWrapping && pos == end) {
	    // Set pos and end to the cursor positions around the character pos sticks to
	    // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
	    // If pos == Pos(_, 0, "before"), pos and end are unchanged
	    pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
	    end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
	  }
	  for (var limit = 0; limit < 5; limit++) {
	    var changed = false;
	    var coords = cursorCoords(cm, pos);
	    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	    rect = {left: Math.min(coords.left, endCoords.left),
	            top: Math.min(coords.top, endCoords.top) - margin,
	            right: Math.max(coords.left, endCoords.left),
	            bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
	    var scrollPos = calculateScrollPos(cm, rect);
	    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	    if (scrollPos.scrollTop != null) {
	      updateScrollTop(cm, scrollPos.scrollTop);
	      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
	    }
	    if (scrollPos.scrollLeft != null) {
	      setScrollLeft(cm, scrollPos.scrollLeft);
	      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
	    }
	    if (!changed) { break }
	  }
	  return rect
	}
	
	// Scroll a given set of coordinates into view (immediately).
	function scrollIntoView(cm, rect) {
	  var scrollPos = calculateScrollPos(cm, rect);
	  if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
	  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
	}
	
	// Calculate a new scroll position needed to scroll the given
	// rectangle into view. Returns an object with scrollTop and
	// scrollLeft properties. When these are undefined, the
	// vertical/horizontal position does not need to be adjusted.
	function calculateScrollPos(cm, rect) {
	  var display = cm.display, snapMargin = textHeight(cm.display);
	  if (rect.top < 0) { rect.top = 0; }
	  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	  var screen = displayHeight(cm), result = {};
	  if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
	  var docBottom = cm.doc.height + paddingVert(display);
	  var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
	  if (rect.top < screentop) {
	    result.scrollTop = atTop ? 0 : rect.top;
	  } else if (rect.bottom > screentop + screen) {
	    var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
	    if (newTop != screentop) { result.scrollTop = newTop; }
	  }
	
	  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	  var tooWide = rect.right - rect.left > screenw;
	  if (tooWide) { rect.right = rect.left + screenw; }
	  if (rect.left < 10)
	    { result.scrollLeft = 0; }
	  else if (rect.left < screenleft)
	    { result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10)); }
	  else if (rect.right > screenw + screenleft - 3)
	    { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
	  return result
	}
	
	// Store a relative adjustment to the scroll position in the current
	// operation (to be applied when the operation finishes).
	function addToScrollTop(cm, top) {
	  if (top == null) { return }
	  resolveScrollToPos(cm);
	  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	}
	
	// Make sure that at the end of the operation the current cursor is
	// shown.
	function ensureCursorVisible(cm) {
	  resolveScrollToPos(cm);
	  var cur = cm.getCursor();
	  cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
	}
	
	function scrollToCoords(cm, x, y) {
	  if (x != null || y != null) { resolveScrollToPos(cm); }
	  if (x != null) { cm.curOp.scrollLeft = x; }
	  if (y != null) { cm.curOp.scrollTop = y; }
	}
	
	function scrollToRange(cm, range$$1) {
	  resolveScrollToPos(cm);
	  cm.curOp.scrollToPos = range$$1;
	}
	
	// When an operation has its scrollToPos property set, and another
	// scroll action is applied before the end of the operation, this
	// 'simulates' scrolling that position into view in a cheap way, so
	// that the effect of intermediate scroll commands is not ignored.
	function resolveScrollToPos(cm) {
	  var range$$1 = cm.curOp.scrollToPos;
	  if (range$$1) {
	    cm.curOp.scrollToPos = null;
	    var from = estimateCoords(cm, range$$1.from), to = estimateCoords(cm, range$$1.to);
	    scrollToCoordsRange(cm, from, to, range$$1.margin);
	  }
	}
	
	function scrollToCoordsRange(cm, from, to, margin) {
	  var sPos = calculateScrollPos(cm, {
	    left: Math.min(from.left, to.left),
	    top: Math.min(from.top, to.top) - margin,
	    right: Math.max(from.right, to.right),
	    bottom: Math.max(from.bottom, to.bottom) + margin
	  });
	  scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
	}
	
	// Sync the scrollable area and scrollbars, ensure the viewport
	// covers the visible area.
	function updateScrollTop(cm, val) {
	  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
	  if (!gecko) { updateDisplaySimple(cm, {top: val}); }
	  setScrollTop(cm, val, true);
	  if (gecko) { updateDisplaySimple(cm); }
	  startWorker(cm, 100);
	}
	
	function setScrollTop(cm, val, forceScroll) {
	  val = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val);
	  if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
	  cm.doc.scrollTop = val;
	  cm.display.scrollbars.setScrollTop(val);
	  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
	}
	
	// Sync scroller and scrollbar, ensure the gutter elements are
	// aligned.
	function setScrollLeft(cm, val, isScroller, forceScroll) {
	  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	  if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
	  cm.doc.scrollLeft = val;
	  alignHorizontally(cm);
	  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
	  cm.display.scrollbars.setScrollLeft(val);
	}
	
	// SCROLLBARS
	
	// Prepare DOM reads needed to update the scrollbars. Done in one
	// shot to minimize update/measure roundtrips.
	function measureForScrollbars(cm) {
	  var d = cm.display, gutterW = d.gutters.offsetWidth;
	  var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	  return {
	    clientHeight: d.scroller.clientHeight,
	    viewHeight: d.wrapper.clientHeight,
	    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	    viewWidth: d.wrapper.clientWidth,
	    barLeft: cm.options.fixedGutter ? gutterW : 0,
	    docHeight: docH,
	    scrollHeight: docH + scrollGap(cm) + d.barHeight,
	    nativeBarWidth: d.nativeBarWidth,
	    gutterWidth: gutterW
	  }
	}
	
	var NativeScrollbars = function(place, scroll, cm) {
	  this.cm = cm;
	  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	  place(vert); place(horiz);
	
	  on(vert, "scroll", function () {
	    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
	  });
	  on(horiz, "scroll", function () {
	    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
	  });
	
	  this.checkedZeroWidth = false;
	  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
	};
	
	NativeScrollbars.prototype.update = function (measure) {
	  var needsH = measure.scrollWidth > measure.clientWidth + 1;
	  var needsV = measure.scrollHeight > measure.clientHeight + 1;
	  var sWidth = measure.nativeBarWidth;
	
	  if (needsV) {
	    this.vert.style.display = "block";
	    this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	    // A bug in IE8 can cause this value to be negative, so guard it.
	    this.vert.firstChild.style.height =
	      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	  } else {
	    this.vert.style.display = "";
	    this.vert.firstChild.style.height = "0";
	  }
	
	  if (needsH) {
	    this.horiz.style.display = "block";
	    this.horiz.style.right = needsV ? sWidth + "px" : "0";
	    this.horiz.style.left = measure.barLeft + "px";
	    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	    this.horiz.firstChild.style.width =
	      Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	  } else {
	    this.horiz.style.display = "";
	    this.horiz.firstChild.style.width = "0";
	  }
	
	  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	    if (sWidth == 0) { this.zeroWidthHack(); }
	    this.checkedZeroWidth = true;
	  }
	
	  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
	};
	
	NativeScrollbars.prototype.setScrollLeft = function (pos) {
	  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
	  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
	};
	
	NativeScrollbars.prototype.setScrollTop = function (pos) {
	  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
	  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
	};
	
	NativeScrollbars.prototype.zeroWidthHack = function () {
	  var w = mac && !mac_geMountainLion ? "12px" : "18px";
	  this.horiz.style.height = this.vert.style.width = w;
	  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	  this.disableHoriz = new Delayed;
	  this.disableVert = new Delayed;
	};
	
	NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
	  bar.style.pointerEvents = "auto";
	  function maybeDisable() {
	    // To find out whether the scrollbar is still visible, we
	    // check whether the element under the pixel in the bottom
	    // right corner of the scrollbar box is the scrollbar box
	    // itself (when the bar is still visible) or its filler child
	    // (when the bar is hidden). If it is still visible, we keep
	    // it enabled, if it's hidden, we disable pointer events.
	    var box = bar.getBoundingClientRect();
	    var elt$$1 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
	        : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
	    if (elt$$1 != bar) { bar.style.pointerEvents = "none"; }
	    else { delay.set(1000, maybeDisable); }
	  }
	  delay.set(1000, maybeDisable);
	};
	
	NativeScrollbars.prototype.clear = function () {
	  var parent = this.horiz.parentNode;
	  parent.removeChild(this.horiz);
	  parent.removeChild(this.vert);
	};
	
	var NullScrollbars = function () {};
	
	NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
	NullScrollbars.prototype.setScrollLeft = function () {};
	NullScrollbars.prototype.setScrollTop = function () {};
	NullScrollbars.prototype.clear = function () {};
	
	function updateScrollbars(cm, measure) {
	  if (!measure) { measure = measureForScrollbars(cm); }
	  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	  updateScrollbarsInner(cm, measure);
	  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	      { updateHeightsInViewport(cm); }
	    updateScrollbarsInner(cm, measureForScrollbars(cm));
	    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	  }
	}
	
	// Re-synchronize the fake scrollbars with the actual size of the
	// content.
	function updateScrollbarsInner(cm, measure) {
	  var d = cm.display;
	  var sizes = d.scrollbars.update(measure);
	
	  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";
	
	  if (sizes.right && sizes.bottom) {
	    d.scrollbarFiller.style.display = "block";
	    d.scrollbarFiller.style.height = sizes.bottom + "px";
	    d.scrollbarFiller.style.width = sizes.right + "px";
	  } else { d.scrollbarFiller.style.display = ""; }
	  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	    d.gutterFiller.style.display = "block";
	    d.gutterFiller.style.height = sizes.bottom + "px";
	    d.gutterFiller.style.width = measure.gutterWidth + "px";
	  } else { d.gutterFiller.style.display = ""; }
	}
	
	var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};
	
	function initScrollbars(cm) {
	  if (cm.display.scrollbars) {
	    cm.display.scrollbars.clear();
	    if (cm.display.scrollbars.addClass)
	      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
	  }
	
	  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
	    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	    // Prevent clicks in the scrollbars from killing focus
	    on(node, "mousedown", function () {
	      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
	    });
	    node.setAttribute("cm-not-content", "true");
	  }, function (pos, axis) {
	    if (axis == "horizontal") { setScrollLeft(cm, pos); }
	    else { updateScrollTop(cm, pos); }
	  }, cm);
	  if (cm.display.scrollbars.addClass)
	    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
	}
	
	// Operations are used to wrap a series of changes to the editor
	// state in such a way that each change won't have to update the
	// cursor and display (which would be awkward, slow, and
	// error-prone). Instead, display updates are batched and then all
	// combined and executed at once.
	
	var nextOpId = 0;
	// Start a new operation.
	function startOperation(cm) {
	  cm.curOp = {
	    cm: cm,
	    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	    startHeight: cm.doc.height, // Used to detect need to update scrollbar
	    forceUpdate: false,      // Used to force a redraw
	    updateInput: null,       // Whether to reset the input textarea
	    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	    changeObjs: null,        // Accumulated changes, for firing change events
	    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	    selectionChanged: false, // Whether the selection needs to be redrawn
	    updateMaxLine: false,    // Set when the widest line needs to be determined anew
	    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	    scrollToPos: null,       // Used to scroll to a specific position
	    focus: false,
	    id: ++nextOpId           // Unique ID
	  };
	  pushOperation(cm.curOp);
	}
	
	// Finish an operation, updating the display and signalling delayed events
	function endOperation(cm) {
	  var op = cm.curOp;
	  finishOperation(op, function (group) {
	    for (var i = 0; i < group.ops.length; i++)
	      { group.ops[i].cm.curOp = null; }
	    endOperations(group);
	  });
	}
	
	// The DOM updates done when an operation finishes are batched so
	// that the minimum number of relayouts are required.
	function endOperations(group) {
	  var ops = group.ops;
	  for (var i = 0; i < ops.length; i++) // Read DOM
	    { endOperation_R1(ops[i]); }
	  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
	    { endOperation_W1(ops[i$1]); }
	  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
	    { endOperation_R2(ops[i$2]); }
	  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
	    { endOperation_W2(ops[i$3]); }
	  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
	    { endOperation_finish(ops[i$4]); }
	}
	
	function endOperation_R1(op) {
	  var cm = op.cm, display = cm.display;
	  maybeClipScrollbars(cm);
	  if (op.updateMaxLine) { findMaxLine(cm); }
	
	  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                       op.scrollToPos.to.line >= display.viewTo) ||
	    display.maxLineChanged && cm.options.lineWrapping;
	  op.update = op.mustUpdate &&
	    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	}
	
	function endOperation_W1(op) {
	  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	}
	
	function endOperation_R2(op) {
	  var cm = op.cm, display = cm.display;
	  if (op.updatedDisplay) { updateHeightsInViewport(cm); }
	
	  op.barMeasure = measureForScrollbars(cm);
	
	  // If the max line changed since it was last measured, measure it,
	  // and ensure the document's width matches it.
	  // updateDisplay_W2 will use these properties to do the actual resizing
	  if (display.maxLineChanged && !cm.options.lineWrapping) {
	    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	    cm.display.sizerWidth = op.adjustWidthTo;
	    op.barMeasure.scrollWidth =
	      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	  }
	
	  if (op.updatedDisplay || op.selectionChanged)
	    { op.preparedSelection = display.input.prepareSelection(op.focus); }
	}
	
	function endOperation_W2(op) {
	  var cm = op.cm;
	
	  if (op.adjustWidthTo != null) {
	    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	    if (op.maxScrollLeft < cm.doc.scrollLeft)
	      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
	    cm.display.maxLineChanged = false;
	  }
	
	  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus());
	  if (op.preparedSelection)
	    { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
	  if (op.updatedDisplay || op.startHeight != cm.doc.height)
	    { updateScrollbars(cm, op.barMeasure); }
	  if (op.updatedDisplay)
	    { setDocumentHeight(cm, op.barMeasure); }
	
	  if (op.selectionChanged) { restartBlink(cm); }
	
	  if (cm.state.focused && op.updateInput)
	    { cm.display.input.reset(op.typing); }
	  if (takeFocus) { ensureFocus(op.cm); }
	}
	
	function endOperation_finish(op) {
	  var cm = op.cm, display = cm.display, doc = cm.doc;
	
	  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }
	
	  // Abort mouse wheel delta measurement, when scrolling explicitly
	  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	    { display.wheelStartX = display.wheelStartY = null; }
	
	  // Propagate the scroll position to the actual DOM scroller
	  if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }
	
	  if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
	  // If we need to scroll a specific position into view, do so.
	  if (op.scrollToPos) {
	    var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                 clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	    maybeScrollWindow(cm, rect);
	  }
	
	  // Fire events for markers that are hidden/unidden by editing or
	  // undoing
	  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	  if (hidden) { for (var i = 0; i < hidden.length; ++i)
	    { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
	  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
	    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }
	
	  if (display.wrapper.offsetHeight)
	    { doc.scrollTop = cm.display.scroller.scrollTop; }
	
	  // Fire change events, and delayed event handlers
	  if (op.changeObjs)
	    { signal(cm, "changes", cm, op.changeObjs); }
	  if (op.update)
	    { op.update.finish(); }
	}
	
	// Run the given function in an operation
	function runInOp(cm, f) {
	  if (cm.curOp) { return f() }
	  startOperation(cm);
	  try { return f() }
	  finally { endOperation(cm); }
	}
	// Wraps a function in an operation. Returns the wrapped function.
	function operation(cm, f) {
	  return function() {
	    if (cm.curOp) { return f.apply(cm, arguments) }
	    startOperation(cm);
	    try { return f.apply(cm, arguments) }
	    finally { endOperation(cm); }
	  }
	}
	// Used to add methods to editor and doc instances, wrapping them in
	// operations.
	function methodOp(f) {
	  return function() {
	    if (this.curOp) { return f.apply(this, arguments) }
	    startOperation(this);
	    try { return f.apply(this, arguments) }
	    finally { endOperation(this); }
	  }
	}
	function docMethodOp(f) {
	  return function() {
	    var cm = this.cm;
	    if (!cm || cm.curOp) { return f.apply(this, arguments) }
	    startOperation(cm);
	    try { return f.apply(this, arguments) }
	    finally { endOperation(cm); }
	  }
	}
	
	// Updates the display.view data structure for a given change to the
	// document. From and to are in pre-change coordinates. Lendiff is
	// the amount of lines added or subtracted by the change. This is
	// used for changes that span multiple lines, or change the way
	// lines are divided into visual lines. regLineChange (below)
	// registers single-line changes.
	function regChange(cm, from, to, lendiff) {
	  if (from == null) { from = cm.doc.first; }
	  if (to == null) { to = cm.doc.first + cm.doc.size; }
	  if (!lendiff) { lendiff = 0; }
	
	  var display = cm.display;
	  if (lendiff && to < display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers > from))
	    { display.updateLineNumbers = from; }
	
	  cm.curOp.viewChanged = true;
	
	  if (from >= display.viewTo) { // Change after
	    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	      { resetView(cm); }
	  } else if (to <= display.viewFrom) { // Change before
	    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	      resetView(cm);
	    } else {
	      display.viewFrom += lendiff;
	      display.viewTo += lendiff;
	    }
	  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	    resetView(cm);
	  } else if (from <= display.viewFrom) { // Top overlap
	    var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	    if (cut) {
	      display.view = display.view.slice(cut.index);
	      display.viewFrom = cut.lineN;
	      display.viewTo += lendiff;
	    } else {
	      resetView(cm);
	    }
	  } else if (to >= display.viewTo) { // Bottom overlap
	    var cut$1 = viewCuttingPoint(cm, from, from, -1);
	    if (cut$1) {
	      display.view = display.view.slice(0, cut$1.index);
	      display.viewTo = cut$1.lineN;
	    } else {
	      resetView(cm);
	    }
	  } else { // Gap in the middle
	    var cutTop = viewCuttingPoint(cm, from, from, -1);
	    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	    if (cutTop && cutBot) {
	      display.view = display.view.slice(0, cutTop.index)
	        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	        .concat(display.view.slice(cutBot.index));
	      display.viewTo += lendiff;
	    } else {
	      resetView(cm);
	    }
	  }
	
	  var ext = display.externalMeasured;
	  if (ext) {
	    if (to < ext.lineN)
	      { ext.lineN += lendiff; }
	    else if (from < ext.lineN + ext.size)
	      { display.externalMeasured = null; }
	  }
	}
	
	// Register a change to a single line. Type must be one of "text",
	// "gutter", "class", "widget"
	function regLineChange(cm, line, type) {
	  cm.curOp.viewChanged = true;
	  var display = cm.display, ext = cm.display.externalMeasured;
	  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	    { display.externalMeasured = null; }
	
	  if (line < display.viewFrom || line >= display.viewTo) { return }
	  var lineView = display.view[findViewIndex(cm, line)];
	  if (lineView.node == null) { return }
	  var arr = lineView.changes || (lineView.changes = []);
	  if (indexOf(arr, type) == -1) { arr.push(type); }
	}
	
	// Clear the view.
	function resetView(cm) {
	  cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	  cm.display.view = [];
	  cm.display.viewOffset = 0;
	}
	
	function viewCuttingPoint(cm, oldN, newN, dir) {
	  var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	    { return {index: index, lineN: newN} }
	  var n = cm.display.viewFrom;
	  for (var i = 0; i < index; i++)
	    { n += view[i].size; }
	  if (n != oldN) {
	    if (dir > 0) {
	      if (index == view.length - 1) { return null }
	      diff = (n + view[index].size) - oldN;
	      index++;
	    } else {
	      diff = n - oldN;
	    }
	    oldN += diff; newN += diff;
	  }
	  while (visualLineNo(cm.doc, newN) != newN) {
	    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
	    newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	    index += dir;
	  }
	  return {index: index, lineN: newN}
	}
	
	// Force the view to cover a given range, adding empty view element
	// or clipping off existing ones as needed.
	function adjustView(cm, from, to) {
	  var display = cm.display, view = display.view;
	  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	    display.view = buildViewArray(cm, from, to);
	    display.viewFrom = from;
	  } else {
	    if (display.viewFrom > from)
	      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
	    else if (display.viewFrom < from)
	      { display.view = display.view.slice(findViewIndex(cm, from)); }
	    display.viewFrom = from;
	    if (display.viewTo < to)
	      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
	    else if (display.viewTo > to)
	      { display.view = display.view.slice(0, findViewIndex(cm, to)); }
	  }
	  display.viewTo = to;
	}
	
	// Count the number of lines in the view whose DOM representation is
	// out of date (or nonexistent).
	function countDirtyView(cm) {
	  var view = cm.display.view, dirty = 0;
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i];
	    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
	  }
	  return dirty
	}
	
	// HIGHLIGHT WORKER
	
	function startWorker(cm, time) {
	  if (cm.doc.highlightFrontier < cm.display.viewTo)
	    { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
	}
	
	function highlightWorker(cm) {
	  var doc = cm.doc;
	  if (doc.highlightFrontier >= cm.display.viewTo) { return }
	  var end = +new Date + cm.options.workTime;
	  var context = getContextBefore(cm, doc.highlightFrontier);
	  var changedLines = [];
	
	  doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
	    if (context.line >= cm.display.viewFrom) { // Visible
	      var oldStyles = line.styles;
	      var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
	      var highlighted = highlightLine(cm, line, context, true);
	      if (resetState) { context.state = resetState; }
	      line.styles = highlighted.styles;
	      var oldCls = line.styleClasses, newCls = highlighted.classes;
	      if (newCls) { line.styleClasses = newCls; }
	      else if (oldCls) { line.styleClasses = null; }
	      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
	      if (ischange) { changedLines.push(context.line); }
	      line.stateAfter = context.save();
	      context.nextLine();
	    } else {
	      if (line.text.length <= cm.options.maxHighlightLength)
	        { processLine(cm, line.text, context); }
	      line.stateAfter = context.line % 5 == 0 ? context.save() : null;
	      context.nextLine();
	    }
	    if (+new Date > end) {
	      startWorker(cm, cm.options.workDelay);
	      return true
	    }
	  });
	  doc.highlightFrontier = context.line;
	  doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
	  if (changedLines.length) { runInOp(cm, function () {
	    for (var i = 0; i < changedLines.length; i++)
	      { regLineChange(cm, changedLines[i], "text"); }
	  }); }
	}
	
	// DISPLAY DRAWING
	
	var DisplayUpdate = function(cm, viewport, force) {
	  var display = cm.display;
	
	  this.viewport = viewport;
	  // Store some values that we'll need later (but don't want to force a relayout for)
	  this.visible = visibleLines(display, cm.doc, viewport);
	  this.editorIsHidden = !display.wrapper.offsetWidth;
	  this.wrapperHeight = display.wrapper.clientHeight;
	  this.wrapperWidth = display.wrapper.clientWidth;
	  this.oldDisplayWidth = displayWidth(cm);
	  this.force = force;
	  this.dims = getDimensions(cm);
	  this.events = [];
	};
	
	DisplayUpdate.prototype.signal = function (emitter, type) {
	  if (hasHandler(emitter, type))
	    { this.events.push(arguments); }
	};
	DisplayUpdate.prototype.finish = function () {
	    var this$1 = this;
	
	  for (var i = 0; i < this.events.length; i++)
	    { signal.apply(null, this$1.events[i]); }
	};
	
	function maybeClipScrollbars(cm) {
	  var display = cm.display;
	  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	    display.heightForcer.style.height = scrollGap(cm) + "px";
	    display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	    display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	    display.scrollbarsClipped = true;
	  }
	}
	
	function selectionSnapshot(cm) {
	  if (cm.hasFocus()) { return null }
	  var active = activeElt();
	  if (!active || !contains(cm.display.lineDiv, active)) { return null }
	  var result = {activeElt: active};
	  if (window.getSelection) {
	    var sel = window.getSelection();
	    if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
	      result.anchorNode = sel.anchorNode;
	      result.anchorOffset = sel.anchorOffset;
	      result.focusNode = sel.focusNode;
	      result.focusOffset = sel.focusOffset;
	    }
	  }
	  return result
	}
	
	function restoreSelection(snapshot) {
	  if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
	  snapshot.activeElt.focus();
	  if (snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
	    var sel = window.getSelection(), range$$1 = document.createRange();
	    range$$1.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
	    range$$1.collapse(false);
	    sel.removeAllRanges();
	    sel.addRange(range$$1);
	    sel.extend(snapshot.focusNode, snapshot.focusOffset);
	  }
	}
	
	// Does the actual updating of the line display. Bails out
	// (returning false) when there is nothing to be done and forced is
	// false.
	function updateDisplayIfNeeded(cm, update) {
	  var display = cm.display, doc = cm.doc;
	
	  if (update.editorIsHidden) {
	    resetView(cm);
	    return false
	  }
	
	  // Bail out if the visible area is already rendered and nothing changed.
	  if (!update.force &&
	      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	      display.renderedView == display.view && countDirtyView(cm) == 0)
	    { return false }
	
	  if (maybeUpdateLineNumberWidth(cm)) {
	    resetView(cm);
	    update.dims = getDimensions(cm);
	  }
	
	  // Compute a suitable new viewport (from & to)
	  var end = doc.first + doc.size;
	  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	  var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
	  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
	  if (sawCollapsedSpans) {
	    from = visualLineNo(cm.doc, from);
	    to = visualLineEndNo(cm.doc, to);
	  }
	
	  var different = from != display.viewFrom || to != display.viewTo ||
	    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	  adjustView(cm, from, to);
	
	  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	  // Position the mover div to align with the current scroll position
	  cm.display.mover.style.top = display.viewOffset + "px";
	
	  var toUpdate = countDirtyView(cm);
	  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	    { return false }
	
	  // For big changes, we hide the enclosing element during the
	  // update, since that speeds up the operations on most browsers.
	  var selSnapshot = selectionSnapshot(cm);
	  if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
	  patchDisplay(cm, display.updateLineNumbers, update.dims);
	  if (toUpdate > 4) { display.lineDiv.style.display = ""; }
	  display.renderedView = display.view;
	  // There might have been a widget with a focused element that got
	  // hidden or updated, if so re-focus it.
	  restoreSelection(selSnapshot);
	
	  // Prevent selection and cursors from interfering with the scroll
	  // width and height.
	  removeChildren(display.cursorDiv);
	  removeChildren(display.selectionDiv);
	  display.gutters.style.height = display.sizer.style.minHeight = 0;
	
	  if (different) {
	    display.lastWrapHeight = update.wrapperHeight;
	    display.lastWrapWidth = update.wrapperWidth;
	    startWorker(cm, 400);
	  }
	
	  display.updateLineNumbers = null;
	
	  return true
	}
	
	function postUpdateDisplay(cm, update) {
	  var viewport = update.viewport;
	
	  for (var first = true;; first = false) {
	    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	      // Clip forced viewport to actual scrollable area.
	      if (viewport && viewport.top != null)
	        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
	      // Updated line heights might result in the drawn area not
	      // actually covering the viewport. Keep looping until it does.
	      update.visible = visibleLines(cm.display, cm.doc, viewport);
	      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	        { break }
	    }
	    if (!updateDisplayIfNeeded(cm, update)) { break }
	    updateHeightsInViewport(cm);
	    var barMeasure = measureForScrollbars(cm);
	    updateSelection(cm);
	    updateScrollbars(cm, barMeasure);
	    setDocumentHeight(cm, barMeasure);
	    update.force = false;
	  }
	
	  update.signal(cm, "update", cm);
	  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	  }
	}
	
	function updateDisplaySimple(cm, viewport) {
	  var update = new DisplayUpdate(cm, viewport);
	  if (updateDisplayIfNeeded(cm, update)) {
	    updateHeightsInViewport(cm);
	    postUpdateDisplay(cm, update);
	    var barMeasure = measureForScrollbars(cm);
	    updateSelection(cm);
	    updateScrollbars(cm, barMeasure);
	    setDocumentHeight(cm, barMeasure);
	    update.finish();
	  }
	}
	
	// Sync the actual display DOM structure with display.view, removing
	// nodes for lines that are no longer in view, and creating the ones
	// that are not there yet, and updating the ones that are out of
	// date.
	function patchDisplay(cm, updateNumbersFrom, dims) {
	  var display = cm.display, lineNumbers = cm.options.lineNumbers;
	  var container = display.lineDiv, cur = container.firstChild;
	
	  function rm(node) {
	    var next = node.nextSibling;
	    // Works around a throw-scroll bug in OS X Webkit
	    if (webkit && mac && cm.display.currentWheelTarget == node)
	      { node.style.display = "none"; }
	    else
	      { node.parentNode.removeChild(node); }
	    return next
	  }
	
	  var view = display.view, lineN = display.viewFrom;
	  // Loop over the elements in the view, syncing cur (the DOM nodes
	  // in display.lineDiv) with the view as we go.
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i];
	    if (lineView.hidden) {
	    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	      var node = buildLineElement(cm, lineView, lineN, dims);
	      container.insertBefore(node, cur);
	    } else { // Already drawn
	      while (cur != lineView.node) { cur = rm(cur); }
	      var updateNumber = lineNumbers && updateNumbersFrom != null &&
	        updateNumbersFrom <= lineN && lineView.lineNumber;
	      if (lineView.changes) {
	        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
	        updateLineForChanges(cm, lineView, lineN, dims);
	      }
	      if (updateNumber) {
	        removeChildren(lineView.lineNumber);
	        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	      }
	      cur = lineView.node.nextSibling;
	    }
	    lineN += lineView.size;
	  }
	  while (cur) { cur = rm(cur); }
	}
	
	function updateGutterSpace(cm) {
	  var width = cm.display.gutters.offsetWidth;
	  cm.display.sizer.style.marginLeft = width + "px";
	}
	
	function setDocumentHeight(cm, measure) {
	  cm.display.sizer.style.minHeight = measure.docHeight + "px";
	  cm.display.heightForcer.style.top = measure.docHeight + "px";
	  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
	}
	
	// Rebuild the gutter elements, ensure the margin to the left of the
	// code matches their width.
	function updateGutters(cm) {
	  var gutters = cm.display.gutters, specs = cm.options.gutters;
	  removeChildren(gutters);
	  var i = 0;
	  for (; i < specs.length; ++i) {
	    var gutterClass = specs[i];
	    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	    if (gutterClass == "CodeMirror-linenumbers") {
	      cm.display.lineGutter = gElt;
	      gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	    }
	  }
	  gutters.style.display = i ? "" : "none";
	  updateGutterSpace(cm);
	}
	
	// Make sure the gutters options contains the element
	// "CodeMirror-linenumbers" when the lineNumbers option is true.
	function setGuttersForLineNumbers(options) {
	  var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	  if (found == -1 && options.lineNumbers) {
	    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	  } else if (found > -1 && !options.lineNumbers) {
	    options.gutters = options.gutters.slice(0);
	    options.gutters.splice(found, 1);
	  }
	}
	
	// Since the delta values reported on mouse wheel events are
	// unstandardized between browsers and even browser versions, and
	// generally horribly unpredictable, this code starts by measuring
	// the scroll effect that the first few mouse wheel events have,
	// and, from that, detects the way it can convert deltas to pixel
	// offsets afterwards.
	//
	// The reason we want to know the amount a wheel event will scroll
	// is that it gives us a chance to update the display before the
	// actual scrolling happens, reducing flickering.
	
	var wheelSamples = 0;
	var wheelPixelsPerUnit = null;
	// Fill in a browser-detected starting value on browsers where we
	// know one. These don't have to be accurate -- the result of them
	// being wrong would just be a slight flicker on the first wheel
	// scroll (if it is large enough).
	if (ie) { wheelPixelsPerUnit = -.53; }
	else if (gecko) { wheelPixelsPerUnit = 15; }
	else if (chrome) { wheelPixelsPerUnit = -.7; }
	else if (safari) { wheelPixelsPerUnit = -1/3; }
	
	function wheelEventDelta(e) {
	  var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
	  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
	  else if (dy == null) { dy = e.wheelDelta; }
	  return {x: dx, y: dy}
	}
	function wheelEventPixels(e) {
	  var delta = wheelEventDelta(e);
	  delta.x *= wheelPixelsPerUnit;
	  delta.y *= wheelPixelsPerUnit;
	  return delta
	}
	
	function onScrollWheel(cm, e) {
	  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
	
	  var display = cm.display, scroll = display.scroller;
	  // Quit if there's nothing to scroll here
	  var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	  var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	  if (!(dx && canScrollX || dy && canScrollY)) { return }
	
	  // Webkit browsers on OS X abort momentum scrolls when the target
	  // of the scroll event is removed from the scrollable element.
	  // This hack (see related code in patchDisplay) makes sure the
	  // element is kept around.
	  if (dy && mac && webkit) {
	    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	      for (var i = 0; i < view.length; i++) {
	        if (view[i].node == cur) {
	          cm.display.currentWheelTarget = cur;
	          break outer
	        }
	      }
	    }
	  }
	
	  // On some browsers, horizontal scrolling will cause redraws to
	  // happen before the gutter has been realigned, causing it to
	  // wriggle around in a most unseemly way. When we have an
	  // estimated pixels/delta value, we just handle horizontal
	  // scrolling entirely here. It'll be slightly off from native, but
	  // better than glitching out.
	  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	    if (dy && canScrollY)
	      { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
	    setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
	    // Only prevent default scrolling if vertical scrolling is
	    // actually possible. Otherwise, it causes vertical scroll
	    // jitter on OSX trackpads when deltaX is small and deltaY
	    // is large (issue #3579)
	    if (!dy || (dy && canScrollY))
	      { e_preventDefault(e); }
	    display.wheelStartX = null; // Abort measurement, if in progress
	    return
	  }
	
	  // 'Project' the visible viewport to cover the area that is being
	  // scrolled into view (if we know enough to estimate it).
	  if (dy && wheelPixelsPerUnit != null) {
	    var pixels = dy * wheelPixelsPerUnit;
	    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	    if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
	    else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
	    updateDisplaySimple(cm, {top: top, bottom: bot});
	  }
	
	  if (wheelSamples < 20) {
	    if (display.wheelStartX == null) {
	      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	      display.wheelDX = dx; display.wheelDY = dy;
	      setTimeout(function () {
	        if (display.wheelStartX == null) { return }
	        var movedX = scroll.scrollLeft - display.wheelStartX;
	        var movedY = scroll.scrollTop - display.wheelStartY;
	        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	          (movedX && display.wheelDX && movedX / display.wheelDX);
	        display.wheelStartX = display.wheelStartY = null;
	        if (!sample) { return }
	        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	        ++wheelSamples;
	      }, 200);
	    } else {
	      display.wheelDX += dx; display.wheelDY += dy;
	    }
	  }
	}
	
	// Selection objects are immutable. A new one is created every time
	// the selection changes. A selection is one or more non-overlapping
	// (and non-touching) ranges, sorted, and an integer that indicates
	// which one is the primary selection (the one that's scrolled into
	// view, that getCursor returns, etc).
	var Selection = function(ranges, primIndex) {
	  this.ranges = ranges;
	  this.primIndex = primIndex;
	};
	
	Selection.prototype.primary = function () { return this.ranges[this.primIndex] };
	
	Selection.prototype.equals = function (other) {
	    var this$1 = this;
	
	  if (other == this) { return true }
	  if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
	  for (var i = 0; i < this.ranges.length; i++) {
	    var here = this$1.ranges[i], there = other.ranges[i];
	    if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
	  }
	  return true
	};
	
	Selection.prototype.deepCopy = function () {
	    var this$1 = this;
	
	  var out = [];
	  for (var i = 0; i < this.ranges.length; i++)
	    { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)); }
	  return new Selection(out, this.primIndex)
	};
	
	Selection.prototype.somethingSelected = function () {
	    var this$1 = this;
	
	  for (var i = 0; i < this.ranges.length; i++)
	    { if (!this$1.ranges[i].empty()) { return true } }
	  return false
	};
	
	Selection.prototype.contains = function (pos, end) {
	    var this$1 = this;
	
	  if (!end) { end = pos; }
	  for (var i = 0; i < this.ranges.length; i++) {
	    var range = this$1.ranges[i];
	    if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	      { return i }
	  }
	  return -1
	};
	
	var Range = function(anchor, head) {
	  this.anchor = anchor; this.head = head;
	};
	
	Range.prototype.from = function () { return minPos(this.anchor, this.head) };
	Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
	Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };
	
	// Take an unsorted, potentially overlapping set of ranges, and
	// build a selection out of it. 'Consumes' ranges array (modifying
	// it).
	function normalizeSelection(ranges, primIndex) {
	  var prim = ranges[primIndex];
	  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
	  primIndex = indexOf(ranges, prim);
	  for (var i = 1; i < ranges.length; i++) {
	    var cur = ranges[i], prev = ranges[i - 1];
	    if (cmp(prev.to(), cur.from()) >= 0) {
	      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	      if (i <= primIndex) { --primIndex; }
	      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	    }
	  }
	  return new Selection(ranges, primIndex)
	}
	
	function simpleSelection(anchor, head) {
	  return new Selection([new Range(anchor, head || anchor)], 0)
	}
	
	// Compute the position of the end of a change (its 'to' property
	// refers to the pre-change end).
	function changeEnd(change) {
	  if (!change.text) { return change.to }
	  return Pos(change.from.line + change.text.length - 1,
	             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
	}
	
	// Adjust a position to refer to the post-change position of the
	// same text, or the end of the change if the change covers it.
	function adjustForChange(pos, change) {
	  if (cmp(pos, change.from) < 0) { return pos }
	  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }
	
	  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
	  return Pos(line, ch)
	}
	
	function computeSelAfterChange(doc, change) {
	  var out = [];
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    var range = doc.sel.ranges[i];
	    out.push(new Range(adjustForChange(range.anchor, change),
	                       adjustForChange(range.head, change)));
	  }
	  return normalizeSelection(out, doc.sel.primIndex)
	}
	
	function offsetPos(pos, old, nw) {
	  if (pos.line == old.line)
	    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
	  else
	    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
	}
	
	// Used by replaceSelections to allow moving the selection to the
	// start or around the replaced test. Hint may be "start" or "around".
	function computeReplacedSel(doc, changes, hint) {
	  var out = [];
	  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i];
	    var from = offsetPos(change.from, oldPrev, newPrev);
	    var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	    oldPrev = change.to;
	    newPrev = to;
	    if (hint == "around") {
	      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	      out[i] = new Range(inv ? to : from, inv ? from : to);
	    } else {
	      out[i] = new Range(from, from);
	    }
	  }
	  return new Selection(out, doc.sel.primIndex)
	}
	
	// Used to get the editor into a consistent state again when options change.
	
	function loadMode(cm) {
	  cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
	  resetModeState(cm);
	}
	
	function resetModeState(cm) {
	  cm.doc.iter(function (line) {
	    if (line.stateAfter) { line.stateAfter = null; }
	    if (line.styles) { line.styles = null; }
	  });
	  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
	  startWorker(cm, 100);
	  cm.state.modeGen++;
	  if (cm.curOp) { regChange(cm); }
	}
	
	// DOCUMENT DATA STRUCTURE
	
	// By default, updates that start and end at the beginning of a line
	// are treated specially, in order to make the association of line
	// widgets and marker elements with the text behave more intuitive.
	function isWholeLineUpdate(doc, change) {
	  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
	}
	
	// Perform a change on the document data structure.
	function updateDoc(doc, change, markedSpans, estimateHeight$$1) {
	  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
	  function update(line, text, spans) {
	    updateLine(line, text, spans, estimateHeight$$1);
	    signalLater(line, "change", line, change);
	  }
	  function linesFor(start, end) {
	    var result = [];
	    for (var i = start; i < end; ++i)
	      { result.push(new Line(text[i], spansFor(i), estimateHeight$$1)); }
	    return result
	  }
	
	  var from = change.from, to = change.to, text = change.text;
	  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
	
	  // Adjust the line structure
	  if (change.full) {
	    doc.insert(0, linesFor(0, text.length));
	    doc.remove(text.length, doc.size - text.length);
	  } else if (isWholeLineUpdate(doc, change)) {
	    // This is a whole-line replace. Treated specially to make
	    // sure line objects move the way they are supposed to.
	    var added = linesFor(0, text.length - 1);
	    update(lastLine, lastLine.text, lastSpans);
	    if (nlines) { doc.remove(from.line, nlines); }
	    if (added.length) { doc.insert(from.line, added); }
	  } else if (firstLine == lastLine) {
	    if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	    } else {
	      var added$1 = linesFor(1, text.length - 1);
	      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight$$1));
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      doc.insert(from.line + 1, added$1);
	    }
	  } else if (text.length == 1) {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	    doc.remove(from.line + 1, nlines);
	  } else {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	    var added$2 = linesFor(1, text.length - 1);
	    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
	    doc.insert(from.line + 1, added$2);
	  }
	
	  signalLater(doc, "change", doc, change);
	}
	
	// Call f for all linked documents.
	function linkedDocs(doc, f, sharedHistOnly) {
	  function propagate(doc, skip, sharedHist) {
	    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
	      var rel = doc.linked[i];
	      if (rel.doc == skip) { continue }
	      var shared = sharedHist && rel.sharedHist;
	      if (sharedHistOnly && !shared) { continue }
	      f(rel.doc, shared);
	      propagate(rel.doc, doc, shared);
	    } }
	  }
	  propagate(doc, null, true);
	}
	
	// Attach a document to an editor.
	function attachDoc(cm, doc) {
	  if (doc.cm) { throw new Error("This document is already in use.") }
	  cm.doc = doc;
	  doc.cm = cm;
	  estimateLineHeights(cm);
	  loadMode(cm);
	  setDirectionClass(cm);
	  if (!cm.options.lineWrapping) { findMaxLine(cm); }
	  cm.options.mode = doc.modeOption;
	  regChange(cm);
	}
	
	function setDirectionClass(cm) {
	  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
	}
	
	function directionChanged(cm) {
	  runInOp(cm, function () {
	    setDirectionClass(cm);
	    regChange(cm);
	  });
	}
	
	function History(startGen) {
	  // Arrays of change events and selections. Doing something adds an
	  // event to done and clears undo. Undoing moves events from done
	  // to undone, redoing moves them in the other direction.
	  this.done = []; this.undone = [];
	  this.undoDepth = Infinity;
	  // Used to track when changes can be merged into a single undo
	  // event
	  this.lastModTime = this.lastSelTime = 0;
	  this.lastOp = this.lastSelOp = null;
	  this.lastOrigin = this.lastSelOrigin = null;
	  // Used by the isClean() method
	  this.generation = this.maxGeneration = startGen || 1;
	}
	
	// Create a history change event from an updateDoc-style change
	// object.
	function historyChangeFromChange(doc, change) {
	  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
	  return histChange
	}
	
	// Pop all selection events off the end of a history array. Stop at
	// a change event.
	function clearSelectionEvents(array) {
	  while (array.length) {
	    var last = lst(array);
	    if (last.ranges) { array.pop(); }
	    else { break }
	  }
	}
	
	// Find the top change event in the history. Pop off selection
	// events that are in the way.
	function lastChangeEvent(hist, force) {
	  if (force) {
	    clearSelectionEvents(hist.done);
	    return lst(hist.done)
	  } else if (hist.done.length && !lst(hist.done).ranges) {
	    return lst(hist.done)
	  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	    hist.done.pop();
	    return lst(hist.done)
	  }
	}
	
	// Register a change in the history. Merges changes that are within
	// a single operation, or are close together with an origin that
	// allows merging (starting with "+") into a single event.
	function addChangeToHistory(doc, change, selAfter, opId) {
	  var hist = doc.history;
	  hist.undone.length = 0;
	  var time = +new Date, cur;
	  var last;
	
	  if ((hist.lastOp == opId ||
	       hist.lastOrigin == change.origin && change.origin &&
	       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	        change.origin.charAt(0) == "*")) &&
	      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	    // Merge this change into the last event
	    last = lst(cur.changes);
	    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	      // Optimized case for simple insertion -- don't want to add
	      // new changesets for every character typed
	      last.to = changeEnd(change);
	    } else {
	      // Add new sub-event
	      cur.changes.push(historyChangeFromChange(doc, change));
	    }
	  } else {
	    // Can not be merged, start a new event.
	    var before = lst(hist.done);
	    if (!before || !before.ranges)
	      { pushSelectionToHistory(doc.sel, hist.done); }
	    cur = {changes: [historyChangeFromChange(doc, change)],
	           generation: hist.generation};
	    hist.done.push(cur);
	    while (hist.done.length > hist.undoDepth) {
	      hist.done.shift();
	      if (!hist.done[0].ranges) { hist.done.shift(); }
	    }
	  }
	  hist.done.push(selAfter);
	  hist.generation = ++hist.maxGeneration;
	  hist.lastModTime = hist.lastSelTime = time;
	  hist.lastOp = hist.lastSelOp = opId;
	  hist.lastOrigin = hist.lastSelOrigin = change.origin;
	
	  if (!last) { signal(doc, "historyAdded"); }
	}
	
	function selectionEventCanBeMerged(doc, origin, prev, sel) {
	  var ch = origin.charAt(0);
	  return ch == "*" ||
	    ch == "+" &&
	    prev.ranges.length == sel.ranges.length &&
	    prev.somethingSelected() == sel.somethingSelected() &&
	    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
	}
	
	// Called whenever the selection changes, sets the new selection as
	// the pending selection in the history, and pushes the old pending
	// selection into the 'done' array when it was significantly
	// different (in number of selected ranges, emptiness, or time).
	function addSelectionToHistory(doc, sel, opId, options) {
	  var hist = doc.history, origin = options && options.origin;
	
	  // A new event is started when the previous origin does not match
	  // the current, or the origins don't allow matching. Origins
	  // starting with * are always merged, those starting with + are
	  // merged when similar and close together in time.
	  if (opId == hist.lastSelOp ||
	      (origin && hist.lastSelOrigin == origin &&
	       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	    { hist.done[hist.done.length - 1] = sel; }
	  else
	    { pushSelectionToHistory(sel, hist.done); }
	
	  hist.lastSelTime = +new Date;
	  hist.lastSelOrigin = origin;
	  hist.lastSelOp = opId;
	  if (options && options.clearRedo !== false)
	    { clearSelectionEvents(hist.undone); }
	}
	
	function pushSelectionToHistory(sel, dest) {
	  var top = lst(dest);
	  if (!(top && top.ranges && top.equals(sel)))
	    { dest.push(sel); }
	}
	
	// Used to store marked span information in the history.
	function attachLocalSpans(doc, change, from, to) {
	  var existing = change["spans_" + doc.id], n = 0;
	  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
	    if (line.markedSpans)
	      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
	    ++n;
	  });
	}
	
	// When un/re-doing restores text containing marked spans, those
	// that have been explicitly cleared should not be restored.
	function removeClearedSpans(spans) {
	  if (!spans) { return null }
	  var out;
	  for (var i = 0; i < spans.length; ++i) {
	    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
	    else if (out) { out.push(spans[i]); }
	  }
	  return !out ? spans : out.length ? out : null
	}
	
	// Retrieve and filter the old marked spans stored in a change event.
	function getOldSpans(doc, change) {
	  var found = change["spans_" + doc.id];
	  if (!found) { return null }
	  var nw = [];
	  for (var i = 0; i < change.text.length; ++i)
	    { nw.push(removeClearedSpans(found[i])); }
	  return nw
	}
	
	// Used for un/re-doing changes from the history. Combines the
	// result of computing the existing spans with the set of spans that
	// existed in the history (so that deleting around a span and then
	// undoing brings back the span).
	function mergeOldSpans(doc, change) {
	  var old = getOldSpans(doc, change);
	  var stretched = stretchSpansOverChange(doc, change);
	  if (!old) { return stretched }
	  if (!stretched) { return old }
	
	  for (var i = 0; i < old.length; ++i) {
	    var oldCur = old[i], stretchCur = stretched[i];
	    if (oldCur && stretchCur) {
	      spans: for (var j = 0; j < stretchCur.length; ++j) {
	        var span = stretchCur[j];
	        for (var k = 0; k < oldCur.length; ++k)
	          { if (oldCur[k].marker == span.marker) { continue spans } }
	        oldCur.push(span);
	      }
	    } else if (stretchCur) {
	      old[i] = stretchCur;
	    }
	  }
	  return old
	}
	
	// Used both to provide a JSON-safe object in .getHistory, and, when
	// detaching a document, to split the history in two
	function copyHistoryArray(events, newGroup, instantiateSel) {
	  var copy = [];
	  for (var i = 0; i < events.length; ++i) {
	    var event = events[i];
	    if (event.ranges) {
	      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	      continue
	    }
	    var changes = event.changes, newChanges = [];
	    copy.push({changes: newChanges});
	    for (var j = 0; j < changes.length; ++j) {
	      var change = changes[j], m = (void 0);
	      newChanges.push({from: change.from, to: change.to, text: change.text});
	      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
	        if (indexOf(newGroup, Number(m[1])) > -1) {
	          lst(newChanges)[prop] = change[prop];
	          delete change[prop];
	        }
	      } } }
	    }
	  }
	  return copy
	}
	
	// The 'scroll' parameter given to many of these indicated whether
	// the new cursor position should be scrolled into view after
	// modifying the selection.
	
	// If shift is held or the extend flag is set, extends a range to
	// include a given position (and optionally a second position).
	// Otherwise, simply returns the range between the given positions.
	// Used for cursor motion and such.
	function extendRange(range, head, other, extend) {
	  if (extend) {
	    var anchor = range.anchor;
	    if (other) {
	      var posBefore = cmp(head, anchor) < 0;
	      if (posBefore != (cmp(other, anchor) < 0)) {
	        anchor = head;
	        head = other;
	      } else if (posBefore != (cmp(head, other) < 0)) {
	        head = other;
	      }
	    }
	    return new Range(anchor, head)
	  } else {
	    return new Range(other || head, head)
	  }
	}
	
	// Extend the primary selection range, discard the rest.
	function extendSelection(doc, head, other, options, extend) {
	  if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
	  setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
	}
	
	// Extend all selections (pos is an array of selections with length
	// equal the number of selections)
	function extendSelections(doc, heads, options) {
	  var out = [];
	  var extend = doc.cm && (doc.cm.display.shift || doc.extend);
	  for (var i = 0; i < doc.sel.ranges.length; i++)
	    { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
	  var newSel = normalizeSelection(out, doc.sel.primIndex);
	  setSelection(doc, newSel, options);
	}
	
	// Updates a single range in the selection.
	function replaceOneSelection(doc, i, range, options) {
	  var ranges = doc.sel.ranges.slice(0);
	  ranges[i] = range;
	  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	}
	
	// Reset the selection to a single range.
	function setSimpleSelection(doc, anchor, head, options) {
	  setSelection(doc, simpleSelection(anchor, head), options);
	}
	
	// Give beforeSelectionChange handlers a change to influence a
	// selection update.
	function filterSelectionChange(doc, sel, options) {
	  var obj = {
	    ranges: sel.ranges,
	    update: function(ranges) {
	      var this$1 = this;
	
	      this.ranges = [];
	      for (var i = 0; i < ranges.length; i++)
	        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                   clipPos(doc, ranges[i].head)); }
	    },
	    origin: options && options.origin
	  };
	  signal(doc, "beforeSelectionChange", doc, obj);
	  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
	  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
	  else { return sel }
	}
	
	function setSelectionReplaceHistory(doc, sel, options) {
	  var done = doc.history.done, last = lst(done);
	  if (last && last.ranges) {
	    done[done.length - 1] = sel;
	    setSelectionNoUndo(doc, sel, options);
	  } else {
	    setSelection(doc, sel, options);
	  }
	}
	
	// Set a new selection.
	function setSelection(doc, sel, options) {
	  setSelectionNoUndo(doc, sel, options);
	  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	}
	
	function setSelectionNoUndo(doc, sel, options) {
	  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	    { sel = filterSelectionChange(doc, sel, options); }
	
	  var bias = options && options.bias ||
	    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));
	
	  if (!(options && options.scroll === false) && doc.cm)
	    { ensureCursorVisible(doc.cm); }
	}
	
	function setSelectionInner(doc, sel) {
	  if (sel.equals(doc.sel)) { return }
	
	  doc.sel = sel;
	
	  if (doc.cm) {
	    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	    signalCursorActivity(doc.cm);
	  }
	  signalLater(doc, "cursorActivity", doc);
	}
	
	// Verify that the selection does not partially select any atomic
	// marked ranges.
	function reCheckSelection(doc) {
	  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
	}
	
	// Return a selection that does not partially select any atomic
	// ranges.
	function skipAtomicInSelection(doc, sel, bias, mayClear) {
	  var out;
	  for (var i = 0; i < sel.ranges.length; i++) {
	    var range = sel.ranges[i];
	    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	    if (out || newAnchor != range.anchor || newHead != range.head) {
	      if (!out) { out = sel.ranges.slice(0, i); }
	      out[i] = new Range(newAnchor, newHead);
	    }
	  }
	  return out ? normalizeSelection(out, sel.primIndex) : sel
	}
	
	function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	  var line = getLine(doc, pos.line);
	  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	    var sp = line.markedSpans[i], m = sp.marker;
	    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	      if (mayClear) {
	        signal(m, "beforeCursorEnter");
	        if (m.explicitlyCleared) {
	          if (!line.markedSpans) { break }
	          else {--i; continue}
	        }
	      }
	      if (!m.atomic) { continue }
	
	      if (oldPos) {
	        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
	        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
	        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
	      }
	
	      var far = m.find(dir < 0 ? -1 : 1);
	      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	        { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
	      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
	    }
	  } }
	  return pos
	}
	
	// Ensure a given position is not inside an atomic range.
	function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	  var dir = bias || 1;
	  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	  if (!found) {
	    doc.cantEdit = true;
	    return Pos(doc.first, 0)
	  }
	  return found
	}
	
	function movePos(doc, pos, dir, line) {
	  if (dir < 0 && pos.ch == 0) {
	    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
	    else { return null }
	  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
	    else { return null }
	  } else {
	    return new Pos(pos.line, pos.ch + dir)
	  }
	}
	
	function selectAll(cm) {
	  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
	}
	
	// UPDATING
	
	// Allow "beforeChange" event handlers to influence a change
	function filterChange(doc, change, update) {
	  var obj = {
	    canceled: false,
	    from: change.from,
	    to: change.to,
	    text: change.text,
	    origin: change.origin,
	    cancel: function () { return obj.canceled = true; }
	  };
	  if (update) { obj.update = function (from, to, text, origin) {
	    if (from) { obj.from = clipPos(doc, from); }
	    if (to) { obj.to = clipPos(doc, to); }
	    if (text) { obj.text = text; }
	    if (origin !== undefined) { obj.origin = origin; }
	  }; }
	  signal(doc, "beforeChange", doc, obj);
	  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }
	
	  if (obj.canceled) { return null }
	  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
	}
	
	// Apply a change to a document, and add it to the document's
	// history, and propagating it to all linked documents.
	function makeChange(doc, change, ignoreReadOnly) {
	  if (doc.cm) {
	    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
	    if (doc.cm.state.suppressEdits) { return }
	  }
	
	  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	    change = filterChange(doc, change, true);
	    if (!change) { return }
	  }
	
	  // Possibly split or suppress the update based on the presence
	  // of read-only spans in its range.
	  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	  if (split) {
	    for (var i = split.length - 1; i >= 0; --i)
	      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}); }
	  } else {
	    makeChangeInner(doc, change);
	  }
	}
	
	function makeChangeInner(doc, change) {
	  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
	  var selAfter = computeSelAfterChange(doc, change);
	  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
	
	  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	  var rebased = [];
	
	  linkedDocs(doc, function (doc, sharedHist) {
	    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	      rebaseHist(doc.history, change);
	      rebased.push(doc.history);
	    }
	    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	  });
	}
	
	// Revert a change stored in a document's history.
	function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }
	
	  var hist = doc.history, event, selAfter = doc.sel;
	  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;
	
	  // Verify that there is a useable event (so that ctrl-z won't
	  // needlessly clear selection events)
	  var i = 0;
	  for (; i < source.length; i++) {
	    event = source[i];
	    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	      { break }
	  }
	  if (i == source.length) { return }
	  hist.lastOrigin = hist.lastSelOrigin = null;
	
	  for (;;) {
	    event = source.pop();
	    if (event.ranges) {
	      pushSelectionToHistory(event, dest);
	      if (allowSelectionOnly && !event.equals(doc.sel)) {
	        setSelection(doc, event, {clearRedo: false});
	        return
	      }
	      selAfter = event;
	    }
	    else { break }
	  }
	
	  // Build up a reverse change object to add to the opposite history
	  // stack (redo when undoing, and vice versa).
	  var antiChanges = [];
	  pushSelectionToHistory(selAfter, dest);
	  dest.push({changes: antiChanges, generation: hist.generation});
	  hist.generation = event.generation || ++hist.maxGeneration;
	
	  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");
	
	  var loop = function ( i ) {
	    var change = event.changes[i];
	    change.origin = type;
	    if (filter && !filterChange(doc, change, false)) {
	      source.length = 0;
	      return {}
	    }
	
	    antiChanges.push(historyChangeFromChange(doc, change));
	
	    var after = i ? computeSelAfterChange(doc, change) : lst(source);
	    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
	    var rebased = [];
	
	    // Propagate to the linked documents
	    linkedDocs(doc, function (doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	    });
	  };
	
	  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
	    var returned = loop( i$1 );
	
	    if ( returned ) return returned.v;
	  }
	}
	
	// Sub-views need their line numbers shifted when text is added
	// above or below them in the parent document.
	function shiftDoc(doc, distance) {
	  if (distance == 0) { return }
	  doc.first += distance;
	  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
	    Pos(range.anchor.line + distance, range.anchor.ch),
	    Pos(range.head.line + distance, range.head.ch)
	  ); }), doc.sel.primIndex);
	  if (doc.cm) {
	    regChange(doc.cm, doc.first, doc.first - distance, distance);
	    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	      { regLineChange(doc.cm, l, "gutter"); }
	  }
	}
	
	// More lower-level change function, handling only a single document
	// (not linked ones).
	function makeChangeSingleDoc(doc, change, selAfter, spans) {
	  if (doc.cm && !doc.cm.curOp)
	    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }
	
	  if (change.to.line < doc.first) {
	    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	    return
	  }
	  if (change.from.line > doc.lastLine()) { return }
	
	  // Clip the change to the size of this doc
	  if (change.from.line < doc.first) {
	    var shift = change.text.length - 1 - (doc.first - change.from.line);
	    shiftDoc(doc, shift);
	    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	              text: [lst(change.text)], origin: change.origin};
	  }
	  var last = doc.lastLine();
	  if (change.to.line > last) {
	    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	              text: [change.text[0]], origin: change.origin};
	  }
	
	  change.removed = getBetween(doc, change.from, change.to);
	
	  if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
	  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
	  else { updateDoc(doc, change, spans); }
	  setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	}
	
	// Handle the interaction of a change to a document with the editor
	// that this document is part of.
	function makeChangeSingleDocInEditor(cm, change, spans) {
	  var doc = cm.doc, display = cm.display, from = change.from, to = change.to;
	
	  var recomputeMaxLength = false, checkWidthStart = from.line;
	  if (!cm.options.lineWrapping) {
	    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	    doc.iter(checkWidthStart, to.line + 1, function (line) {
	      if (line == display.maxLine) {
	        recomputeMaxLength = true;
	        return true
	      }
	    });
	  }
	
	  if (doc.sel.contains(change.from, change.to) > -1)
	    { signalCursorActivity(cm); }
	
	  updateDoc(doc, change, spans, estimateHeight(cm));
	
	  if (!cm.options.lineWrapping) {
	    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
	      var len = lineLength(line);
	      if (len > display.maxLineLength) {
	        display.maxLine = line;
	        display.maxLineLength = len;
	        display.maxLineChanged = true;
	        recomputeMaxLength = false;
	      }
	    });
	    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
	  }
	
	  retreatFrontier(doc, from.line);
	  startWorker(cm, 400);
	
	  var lendiff = change.text.length - (to.line - from.line) - 1;
	  // Remember that these lines changed, for updating the display
	  if (change.full)
	    { regChange(cm); }
	  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	    { regLineChange(cm, from.line, "text"); }
	  else
	    { regChange(cm, from.line, to.line + 1, lendiff); }
	
	  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	  if (changeHandler || changesHandler) {
	    var obj = {
	      from: from, to: to,
	      text: change.text,
	      removed: change.removed,
	      origin: change.origin
	    };
	    if (changeHandler) { signalLater(cm, "change", cm, obj); }
	    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
	  }
	  cm.display.selForContextMenu = null;
	}
	
	function replaceRange(doc, code, from, to, origin) {
	  if (!to) { to = from; }
	  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	  if (typeof code == "string") { code = doc.splitLines(code); }
	  makeChange(doc, {from: from, to: to, text: code, origin: origin});
	}
	
	// Rebasing/resetting history to deal with externally-sourced changes
	
	function rebaseHistSelSingle(pos, from, to, diff) {
	  if (to < pos.line) {
	    pos.line += diff;
	  } else if (from < pos.line) {
	    pos.line = from;
	    pos.ch = 0;
	  }
	}
	
	// Tries to rebase an array of history events given a change in the
	// document. If the change touches the same lines as the event, the
	// event, and everything 'behind' it, is discarded. If the change is
	// before the event, the event's positions are updated. Uses a
	// copy-on-write scheme for the positions, to avoid having to
	// reallocate them all on every rebase, but also avoid problems with
	// shared position objects being unsafely updated.
	function rebaseHistArray(array, from, to, diff) {
	  for (var i = 0; i < array.length; ++i) {
	    var sub = array[i], ok = true;
	    if (sub.ranges) {
	      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	      for (var j = 0; j < sub.ranges.length; j++) {
	        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	      }
	      continue
	    }
	    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
	      var cur = sub.changes[j$1];
	      if (to < cur.from.line) {
	        cur.from = Pos(cur.from.line + diff, cur.from.ch);
	        cur.to = Pos(cur.to.line + diff, cur.to.ch);
	      } else if (from <= cur.to.line) {
	        ok = false;
	        break
	      }
	    }
	    if (!ok) {
	      array.splice(0, i + 1);
	      i = 0;
	    }
	  }
	}
	
	function rebaseHist(hist, change) {
	  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	  rebaseHistArray(hist.done, from, to, diff);
	  rebaseHistArray(hist.undone, from, to, diff);
	}
	
	// Utility for applying a change to a line by handle or number,
	// returning the number and optionally registering the line as
	// changed.
	function changeLine(doc, handle, changeType, op) {
	  var no = handle, line = handle;
	  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
	  else { no = lineNo(handle); }
	  if (no == null) { return null }
	  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
	  return line
	}
	
	// The document is represented as a BTree consisting of leaves, with
	// chunk of lines in them, and branches, with up to ten leaves or
	// other branch nodes below them. The top node is always a branch
	// node, and is the document object itself (meaning it has
	// additional methods and properties).
	//
	// All nodes have parent links. The tree is used both to go from
	// line numbers to line objects, and to go from objects to numbers.
	// It also indexes by height, and is used to convert between height
	// and line object, and to find the total height of the document.
	//
	// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html
	
	function LeafChunk(lines) {
	  var this$1 = this;
	
	  this.lines = lines;
	  this.parent = null;
	  var height = 0;
	  for (var i = 0; i < lines.length; ++i) {
	    lines[i].parent = this$1;
	    height += lines[i].height;
	  }
	  this.height = height;
	}
	
	LeafChunk.prototype = {
	  chunkSize: function chunkSize() { return this.lines.length },
	
	  // Remove the n lines at offset 'at'.
	  removeInner: function removeInner(at, n) {
	    var this$1 = this;
	
	    for (var i = at, e = at + n; i < e; ++i) {
	      var line = this$1.lines[i];
	      this$1.height -= line.height;
	      cleanUpLine(line);
	      signalLater(line, "delete");
	    }
	    this.lines.splice(at, n);
	  },
	
	  // Helper used to collapse a small branch into a single leaf.
	  collapse: function collapse(lines) {
	    lines.push.apply(lines, this.lines);
	  },
	
	  // Insert the given array of lines at offset 'at', count them as
	  // having the given height.
	  insertInner: function insertInner(at, lines, height) {
	    var this$1 = this;
	
	    this.height += height;
	    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1; }
	  },
	
	  // Used to iterate over a part of the tree.
	  iterN: function iterN(at, n, op) {
	    var this$1 = this;
	
	    for (var e = at + n; at < e; ++at)
	      { if (op(this$1.lines[at])) { return true } }
	  }
	};
	
	function BranchChunk(children) {
	  var this$1 = this;
	
	  this.children = children;
	  var size = 0, height = 0;
	  for (var i = 0; i < children.length; ++i) {
	    var ch = children[i];
	    size += ch.chunkSize(); height += ch.height;
	    ch.parent = this$1;
	  }
	  this.size = size;
	  this.height = height;
	  this.parent = null;
	}
	
	BranchChunk.prototype = {
	  chunkSize: function chunkSize() { return this.size },
	
	  removeInner: function removeInner(at, n) {
	    var this$1 = this;
	
	    this.size -= n;
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize();
	      if (at < sz) {
	        var rm = Math.min(n, sz - at), oldHeight = child.height;
	        child.removeInner(at, rm);
	        this$1.height -= oldHeight - child.height;
	        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null; }
	        if ((n -= rm) == 0) { break }
	        at = 0;
	      } else { at -= sz; }
	    }
	    // If the result is smaller than 25 lines, ensure that it is a
	    // single leaf node.
	    if (this.size - n < 25 &&
	        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	      var lines = [];
	      this.collapse(lines);
	      this.children = [new LeafChunk(lines)];
	      this.children[0].parent = this;
	    }
	  },
	
	  collapse: function collapse(lines) {
	    var this$1 = this;
	
	    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines); }
	  },
	
	  insertInner: function insertInner(at, lines, height) {
	    var this$1 = this;
	
	    this.size += lines.length;
	    this.height += height;
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize();
	      if (at <= sz) {
	        child.insertInner(at, lines, height);
	        if (child.lines && child.lines.length > 50) {
	          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	          var remaining = child.lines.length % 25 + 25;
	          for (var pos = remaining; pos < child.lines.length;) {
	            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
	            child.height -= leaf.height;
	            this$1.children.splice(++i, 0, leaf);
	            leaf.parent = this$1;
	          }
	          child.lines = child.lines.slice(0, remaining);
	          this$1.maybeSpill();
	        }
	        break
	      }
	      at -= sz;
	    }
	  },
	
	  // When a node has grown, check whether it should be split.
	  maybeSpill: function maybeSpill() {
	    if (this.children.length <= 10) { return }
	    var me = this;
	    do {
	      var spilled = me.children.splice(me.children.length - 5, 5);
	      var sibling = new BranchChunk(spilled);
	      if (!me.parent) { // Become the parent node
	        var copy = new BranchChunk(me.children);
	        copy.parent = me;
	        me.children = [copy, sibling];
	        me = copy;
	     } else {
	        me.size -= sibling.size;
	        me.height -= sibling.height;
	        var myIndex = indexOf(me.parent.children, me);
	        me.parent.children.splice(myIndex + 1, 0, sibling);
	      }
	      sibling.parent = me.parent;
	    } while (me.children.length > 10)
	    me.parent.maybeSpill();
	  },
	
	  iterN: function iterN(at, n, op) {
	    var this$1 = this;
	
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize();
	      if (at < sz) {
	        var used = Math.min(n, sz - at);
	        if (child.iterN(at, used, op)) { return true }
	        if ((n -= used) == 0) { break }
	        at = 0;
	      } else { at -= sz; }
	    }
	  }
	};
	
	// Line widgets are block elements displayed above or below a line.
	
	var LineWidget = function(doc, node, options) {
	  var this$1 = this;
	
	  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
	    { this$1[opt] = options[opt]; } } }
	  this.doc = doc;
	  this.node = node;
	};
	
	LineWidget.prototype.clear = function () {
	    var this$1 = this;
	
	  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	  if (no == null || !ws) { return }
	  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1); } }
	  if (!ws.length) { line.widgets = null; }
	  var height = widgetHeight(this);
	  updateLineHeight(line, Math.max(0, line.height - height));
	  if (cm) {
	    runInOp(cm, function () {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	    signalLater(cm, "lineWidgetCleared", cm, this, no);
	  }
	};
	
	LineWidget.prototype.changed = function () {
	    var this$1 = this;
	
	  var oldH = this.height, cm = this.doc.cm, line = this.line;
	  this.height = null;
	  var diff = widgetHeight(this) - oldH;
	  if (!diff) { return }
	  updateLineHeight(line, line.height + diff);
	  if (cm) {
	    runInOp(cm, function () {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	      signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
	    });
	  }
	};
	eventMixin(LineWidget);
	
	function adjustScrollWhenAboveVisible(cm, line, diff) {
	  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	    { addToScrollTop(cm, diff); }
	}
	
	function addLineWidget(doc, handle, node, options) {
	  var widget = new LineWidget(doc, node, options);
	  var cm = doc.cm;
	  if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
	  changeLine(doc, handle, "widget", function (line) {
	    var widgets = line.widgets || (line.widgets = []);
	    if (widget.insertAt == null) { widgets.push(widget); }
	    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget); }
	    widget.line = line;
	    if (cm && !lineIsHidden(doc, line)) {
	      var aboveVisible = heightAtLine(line) < doc.scrollTop;
	      updateLineHeight(line, line.height + widgetHeight(widget));
	      if (aboveVisible) { addToScrollTop(cm, widget.height); }
	      cm.curOp.forceUpdate = true;
	    }
	    return true
	  });
	  signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
	  return widget
	}
	
	// TEXTMARKERS
	
	// Created with markText and setBookmark methods. A TextMarker is a
	// handle that can be used to clear or find a marked position in the
	// document. Line objects hold arrays (markedSpans) containing
	// {from, to, marker} object pointing to such marker objects, and
	// indicating that such a marker is present on that line. Multiple
	// lines may point to the same marker when it spans across lines.
	// The spans will have null for their from/to properties when the
	// marker continues beyond the start/end of the line. Markers have
	// links back to the lines they currently touch.
	
	// Collapsed markers have unique ids, in order to be able to order
	// them, which is needed for uniquely determining an outer marker
	// when they overlap (they may nest, but not partially overlap).
	var nextMarkerId = 0;
	
	var TextMarker = function(doc, type) {
	  this.lines = [];
	  this.type = type;
	  this.doc = doc;
	  this.id = ++nextMarkerId;
	};
	
	// Clear the marker.
	TextMarker.prototype.clear = function () {
	    var this$1 = this;
	
	  if (this.explicitlyCleared) { return }
	  var cm = this.doc.cm, withOp = cm && !cm.curOp;
	  if (withOp) { startOperation(cm); }
	  if (hasHandler(this, "clear")) {
	    var found = this.find();
	    if (found) { signalLater(this, "clear", found.from, found.to); }
	  }
	  var min = null, max = null;
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i];
	    var span = getMarkedSpanFor(line.markedSpans, this$1);
	    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text"); }
	    else if (cm) {
	      if (span.to != null) { max = lineNo(line); }
	      if (span.from != null) { min = lineNo(line); }
	    }
	    line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
	      { updateLineHeight(line, textHeight(cm.display)); }
	  }
	  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
	    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual);
	    if (len > cm.display.maxLineLength) {
	      cm.display.maxLine = visual;
	      cm.display.maxLineLength = len;
	      cm.display.maxLineChanged = true;
	    }
	  } }
	
	  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
	  this.lines.length = 0;
	  this.explicitlyCleared = true;
	  if (this.atomic && this.doc.cantEdit) {
	    this.doc.cantEdit = false;
	    if (cm) { reCheckSelection(cm.doc); }
	  }
	  if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
	  if (withOp) { endOperation(cm); }
	  if (this.parent) { this.parent.clear(); }
	};
	
	// Find the position of the marker in the document. Returns a {from,
	// to} object by default. Side can be passed to get a specific side
	// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	// Pos objects returned contain a line object, rather than a line
	// number (used to prevent looking up the same line twice).
	TextMarker.prototype.find = function (side, lineObj) {
	    var this$1 = this;
	
	  if (side == null && this.type == "bookmark") { side = 1; }
	  var from, to;
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i];
	    var span = getMarkedSpanFor(line.markedSpans, this$1);
	    if (span.from != null) {
	      from = Pos(lineObj ? line : lineNo(line), span.from);
	      if (side == -1) { return from }
	    }
	    if (span.to != null) {
	      to = Pos(lineObj ? line : lineNo(line), span.to);
	      if (side == 1) { return to }
	    }
	  }
	  return from && {from: from, to: to}
	};
	
	// Signals that the marker's widget changed, and surrounding layout
	// should be recomputed.
	TextMarker.prototype.changed = function () {
	    var this$1 = this;
	
	  var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	  if (!pos || !cm) { return }
	  runInOp(cm, function () {
	    var line = pos.line, lineN = lineNo(pos.line);
	    var view = findViewForLine(cm, lineN);
	    if (view) {
	      clearLineMeasurementCacheFor(view);
	      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	    }
	    cm.curOp.updateMaxLine = true;
	    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	      var oldHeight = widget.height;
	      widget.height = null;
	      var dHeight = widgetHeight(widget) - oldHeight;
	      if (dHeight)
	        { updateLineHeight(line, line.height + dHeight); }
	    }
	    signalLater(cm, "markerChanged", cm, this$1);
	  });
	};
	
	TextMarker.prototype.attachLine = function (line) {
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp;
	    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
	  }
	  this.lines.push(line);
	};
	
	TextMarker.prototype.detachLine = function (line) {
	  this.lines.splice(indexOf(this.lines, line), 1);
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	  }
	};
	eventMixin(TextMarker);
	
	// Create a marker, wire it up to the right lines, and
	function markText(doc, from, to, options, type) {
	  // Shared markers (across linked documents) are handled separately
	  // (markTextShared will call out to this again, once per
	  // document).
	  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
	  // Ensure we are in an operation.
	  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }
	
	  var marker = new TextMarker(doc, type), diff = cmp(from, to);
	  if (options) { copyObj(options, marker, false); }
	  // Don't connect empty markers unless clearWhenEmpty is false
	  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	    { return marker }
	  if (marker.replacedWith) {
	    // Showing up as a widget implies collapsed (widget replaces text)
	    marker.collapsed = true;
	    marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
	    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
	    if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
	  }
	  if (marker.collapsed) {
	    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
	    seeCollapsedSpans();
	  }
	
	  if (marker.addToHistory)
	    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }
	
	  var curLine = from.line, cm = doc.cm, updateMaxLine;
	  doc.iter(curLine, to.line + 1, function (line) {
	    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	      { updateMaxLine = true; }
	    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
	    addMarkedSpan(line, new MarkedSpan(marker,
	                                       curLine == from.line ? from.ch : null,
	                                       curLine == to.line ? to.ch : null));
	    ++curLine;
	  });
	  // lineIsHidden depends on the presence of the spans, so needs a second pass
	  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
	    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
	  }); }
	
	  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }
	
	  if (marker.readOnly) {
	    seeReadOnlySpans();
	    if (doc.history.done.length || doc.history.undone.length)
	      { doc.clearHistory(); }
	  }
	  if (marker.collapsed) {
	    marker.id = ++nextMarkerId;
	    marker.atomic = true;
	  }
	  if (cm) {
	    // Sync editor state
	    if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
	    if (marker.collapsed)
	      { regChange(cm, from.line, to.line + 1); }
	    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
	    if (marker.atomic) { reCheckSelection(cm.doc); }
	    signalLater(cm, "markerAdded", cm, marker);
	  }
	  return marker
	}
	
	// SHARED TEXTMARKERS
	
	// A shared marker spans multiple linked documents. It is
	// implemented as a meta-marker-object controlling multiple normal
	// markers.
	var SharedTextMarker = function(markers, primary) {
	  var this$1 = this;
	
	  this.markers = markers;
	  this.primary = primary;
	  for (var i = 0; i < markers.length; ++i)
	    { markers[i].parent = this$1; }
	};
	
	SharedTextMarker.prototype.clear = function () {
	    var this$1 = this;
	
	  if (this.explicitlyCleared) { return }
	  this.explicitlyCleared = true;
	  for (var i = 0; i < this.markers.length; ++i)
	    { this$1.markers[i].clear(); }
	  signalLater(this, "clear");
	};
	
	SharedTextMarker.prototype.find = function (side, lineObj) {
	  return this.primary.find(side, lineObj)
	};
	eventMixin(SharedTextMarker);
	
	function markTextShared(doc, from, to, options, type) {
	  options = copyObj(options);
	  options.shared = false;
	  var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	  var widget = options.widgetNode;
	  linkedDocs(doc, function (doc) {
	    if (widget) { options.widgetNode = widget.cloneNode(true); }
	    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	    for (var i = 0; i < doc.linked.length; ++i)
	      { if (doc.linked[i].isParent) { return } }
	    primary = lst(markers);
	  });
	  return new SharedTextMarker(markers, primary)
	}
	
	function findSharedMarkers(doc) {
	  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
	}
	
	function copySharedMarkers(doc, markers) {
	  for (var i = 0; i < markers.length; i++) {
	    var marker = markers[i], pos = marker.find();
	    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	    if (cmp(mFrom, mTo)) {
	      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	      marker.markers.push(subMark);
	      subMark.parent = marker;
	    }
	  }
	}
	
	function detachSharedMarkers(markers) {
	  var loop = function ( i ) {
	    var marker = markers[i], linked = [marker.primary.doc];
	    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
	    for (var j = 0; j < marker.markers.length; j++) {
	      var subMarker = marker.markers[j];
	      if (indexOf(linked, subMarker.doc) == -1) {
	        subMarker.parent = null;
	        marker.markers.splice(j--, 1);
	      }
	    }
	  };
	
	  for (var i = 0; i < markers.length; i++) loop( i );
	}
	
	var nextDocId = 0;
	var Doc = function(text, mode, firstLine, lineSep, direction) {
	  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
	  if (firstLine == null) { firstLine = 0; }
	
	  BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	  this.first = firstLine;
	  this.scrollTop = this.scrollLeft = 0;
	  this.cantEdit = false;
	  this.cleanGeneration = 1;
	  this.modeFrontier = this.highlightFrontier = firstLine;
	  var start = Pos(firstLine, 0);
	  this.sel = simpleSelection(start);
	  this.history = new History(null);
	  this.id = ++nextDocId;
	  this.modeOption = mode;
	  this.lineSep = lineSep;
	  this.direction = (direction == "rtl") ? "rtl" : "ltr";
	  this.extend = false;
	
	  if (typeof text == "string") { text = this.splitLines(text); }
	  updateDoc(this, {from: start, to: start, text: text});
	  setSelection(this, simpleSelection(start), sel_dontScroll);
	};
	
	Doc.prototype = createObj(BranchChunk.prototype, {
	  constructor: Doc,
	  // Iterate over the document. Supports two forms -- with only one
	  // argument, it calls that for each line in the document. With
	  // three, it iterates over the range given by the first two (with
	  // the second being non-inclusive).
	  iter: function(from, to, op) {
	    if (op) { this.iterN(from - this.first, to - from, op); }
	    else { this.iterN(this.first, this.first + this.size, from); }
	  },
	
	  // Non-public interface for adding and removing lines.
	  insert: function(at, lines) {
	    var height = 0;
	    for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
	    this.insertInner(at - this.first, lines, height);
	  },
	  remove: function(at, n) { this.removeInner(at - this.first, n); },
	
	  // From here, the methods are part of the public interface. Most
	  // are also available from CodeMirror (editor) instances.
	
	  getValue: function(lineSep) {
	    var lines = getLines(this, this.first, this.first + this.size);
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },
	  setValue: docMethodOp(function(code) {
	    var top = Pos(this.first, 0), last = this.first + this.size - 1;
	    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                      text: this.splitLines(code), origin: "setValue", full: true}, true);
	    if (this.cm) { scrollToCoords(this.cm, 0, 0); }
	    setSelection(this, simpleSelection(top), sel_dontScroll);
	  }),
	  replaceRange: function(code, from, to, origin) {
	    from = clipPos(this, from);
	    to = to ? clipPos(this, to) : from;
	    replaceRange(this, code, from, to, origin);
	  },
	  getRange: function(from, to, lineSep) {
	    var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },
	
	  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},
	
	  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
	  getLineNumber: function(line) {return lineNo(line)},
	
	  getLineHandleVisualStart: function(line) {
	    if (typeof line == "number") { line = getLine(this, line); }
	    return visualLine(line)
	  },
	
	  lineCount: function() {return this.size},
	  firstLine: function() {return this.first},
	  lastLine: function() {return this.first + this.size - 1},
	
	  clipPos: function(pos) {return clipPos(this, pos)},
	
	  getCursor: function(start) {
	    var range$$1 = this.sel.primary(), pos;
	    if (start == null || start == "head") { pos = range$$1.head; }
	    else if (start == "anchor") { pos = range$$1.anchor; }
	    else if (start == "end" || start == "to" || start === false) { pos = range$$1.to(); }
	    else { pos = range$$1.from(); }
	    return pos
	  },
	  listSelections: function() { return this.sel.ranges },
	  somethingSelected: function() {return this.sel.somethingSelected()},
	
	  setCursor: docMethodOp(function(line, ch, options) {
	    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	  }),
	  setSelection: docMethodOp(function(anchor, head, options) {
	    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	  }),
	  extendSelection: docMethodOp(function(head, other, options) {
	    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	  }),
	  extendSelections: docMethodOp(function(heads, options) {
	    extendSelections(this, clipPosArray(this, heads), options);
	  }),
	  extendSelectionsBy: docMethodOp(function(f, options) {
	    var heads = map(this.sel.ranges, f);
	    extendSelections(this, clipPosArray(this, heads), options);
	  }),
	  setSelections: docMethodOp(function(ranges, primary, options) {
	    var this$1 = this;
	
	    if (!ranges.length) { return }
	    var out = [];
	    for (var i = 0; i < ranges.length; i++)
	      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
	                         clipPos(this$1, ranges[i].head)); }
	    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
	    setSelection(this, normalizeSelection(out, primary), options);
	  }),
	  addSelection: docMethodOp(function(anchor, head, options) {
	    var ranges = this.sel.ranges.slice(0);
	    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	  }),
	
	  getSelection: function(lineSep) {
	    var this$1 = this;
	
	    var ranges = this.sel.ranges, lines;
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
	      lines = lines ? lines.concat(sel) : sel;
	    }
	    if (lineSep === false) { return lines }
	    else { return lines.join(lineSep || this.lineSeparator()) }
	  },
	  getSelections: function(lineSep) {
	    var this$1 = this;
	
	    var parts = [], ranges = this.sel.ranges;
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
	      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()); }
	      parts[i] = sel;
	    }
	    return parts
	  },
	  replaceSelection: function(code, collapse, origin) {
	    var dup = [];
	    for (var i = 0; i < this.sel.ranges.length; i++)
	      { dup[i] = code; }
	    this.replaceSelections(dup, collapse, origin || "+input");
	  },
	  replaceSelections: docMethodOp(function(code, collapse, origin) {
	    var this$1 = this;
	
	    var changes = [], sel = this.sel;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range$$1 = sel.ranges[i];
	      changes[i] = {from: range$$1.from(), to: range$$1.to(), text: this$1.splitLines(code[i]), origin: origin};
	    }
	    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
	      { makeChange(this$1, changes[i$1]); }
	    if (newSel) { setSelectionReplaceHistory(this, newSel); }
	    else if (this.cm) { ensureCursorVisible(this.cm); }
	  }),
	  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),
	
	  setExtending: function(val) {this.extend = val;},
	  getExtending: function() {return this.extend},
	
	  historySize: function() {
	    var hist = this.history, done = 0, undone = 0;
	    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
	    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
	    return {undo: done, redo: undone}
	  },
	  clearHistory: function() {this.history = new History(this.history.maxGeneration);},
	
	  markClean: function() {
	    this.cleanGeneration = this.changeGeneration(true);
	  },
	  changeGeneration: function(forceSplit) {
	    if (forceSplit)
	      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
	    return this.history.generation
	  },
	  isClean: function (gen) {
	    return this.history.generation == (gen || this.cleanGeneration)
	  },
	
	  getHistory: function() {
	    return {done: copyHistoryArray(this.history.done),
	            undone: copyHistoryArray(this.history.undone)}
	  },
	  setHistory: function(histData) {
	    var hist = this.history = new History(this.history.maxGeneration);
	    hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	  },
	
	  setGutterMarker: docMethodOp(function(line, gutterID, value) {
	    return changeLine(this, line, "gutter", function (line) {
	      var markers = line.gutterMarkers || (line.gutterMarkers = {});
	      markers[gutterID] = value;
	      if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
	      return true
	    })
	  }),
	
	  clearGutter: docMethodOp(function(gutterID) {
	    var this$1 = this;
	
	    this.iter(function (line) {
	      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	        changeLine(this$1, line, "gutter", function () {
	          line.gutterMarkers[gutterID] = null;
	          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
	          return true
	        });
	      }
	    });
	  }),
	
	  lineInfo: function(line) {
	    var n;
	    if (typeof line == "number") {
	      if (!isLine(this, line)) { return null }
	      n = line;
	      line = getLine(this, line);
	      if (!line) { return null }
	    } else {
	      n = lineNo(line);
	      if (n == null) { return null }
	    }
	    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	            widgets: line.widgets}
	  },
	
	  addLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass";
	      if (!line[prop]) { line[prop] = cls; }
	      else if (classTest(cls).test(line[prop])) { return false }
	      else { line[prop] += " " + cls; }
	      return true
	    })
	  }),
	  removeLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass";
	      var cur = line[prop];
	      if (!cur) { return false }
	      else if (cls == null) { line[prop] = null; }
	      else {
	        var found = cur.match(classTest(cls));
	        if (!found) { return false }
	        var end = found.index + found[0].length;
	        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	      }
	      return true
	    })
	  }),
	
	  addLineWidget: docMethodOp(function(handle, node, options) {
	    return addLineWidget(this, handle, node, options)
	  }),
	  removeLineWidget: function(widget) { widget.clear(); },
	
	  markText: function(from, to, options) {
	    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
	  },
	  setBookmark: function(pos, options) {
	    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                    insertLeft: options && options.insertLeft,
	                    clearWhenEmpty: false, shared: options && options.shared,
	                    handleMouseEvents: options && options.handleMouseEvents};
	    pos = clipPos(this, pos);
	    return markText(this, pos, pos, realOpts, "bookmark")
	  },
	  findMarksAt: function(pos) {
	    pos = clipPos(this, pos);
	    var markers = [], spans = getLine(this, pos.line).markedSpans;
	    if (spans) { for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if ((span.from == null || span.from <= pos.ch) &&
	          (span.to == null || span.to >= pos.ch))
	        { markers.push(span.marker.parent || span.marker); }
	    } }
	    return markers
	  },
	  findMarks: function(from, to, filter) {
	    from = clipPos(this, from); to = clipPos(this, to);
	    var found = [], lineNo$$1 = from.line;
	    this.iter(from.line, to.line + 1, function (line) {
	      var spans = line.markedSpans;
	      if (spans) { for (var i = 0; i < spans.length; i++) {
	        var span = spans[i];
	        if (!(span.to != null && lineNo$$1 == from.line && from.ch >= span.to ||
	              span.from == null && lineNo$$1 != from.line ||
	              span.from != null && lineNo$$1 == to.line && span.from >= to.ch) &&
	            (!filter || filter(span.marker)))
	          { found.push(span.marker.parent || span.marker); }
	      } }
	      ++lineNo$$1;
	    });
	    return found
	  },
	  getAllMarks: function() {
	    var markers = [];
	    this.iter(function (line) {
	      var sps = line.markedSpans;
	      if (sps) { for (var i = 0; i < sps.length; ++i)
	        { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
	    });
	    return markers
	  },
	
	  posFromIndex: function(off) {
	    var ch, lineNo$$1 = this.first, sepSize = this.lineSeparator().length;
	    this.iter(function (line) {
	      var sz = line.text.length + sepSize;
	      if (sz > off) { ch = off; return true }
	      off -= sz;
	      ++lineNo$$1;
	    });
	    return clipPos(this, Pos(lineNo$$1, ch))
	  },
	  indexFromPos: function (coords) {
	    coords = clipPos(this, coords);
	    var index = coords.ch;
	    if (coords.line < this.first || coords.ch < 0) { return 0 }
	    var sepSize = this.lineSeparator().length;
	    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
	      index += line.text.length + sepSize;
	    });
	    return index
	  },
	
	  copy: function(copyHistory) {
	    var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                      this.modeOption, this.first, this.lineSep, this.direction);
	    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	    doc.sel = this.sel;
	    doc.extend = false;
	    if (copyHistory) {
	      doc.history.undoDepth = this.history.undoDepth;
	      doc.setHistory(this.getHistory());
	    }
	    return doc
	  },
	
	  linkedDoc: function(options) {
	    if (!options) { options = {}; }
	    var from = this.first, to = this.first + this.size;
	    if (options.from != null && options.from > from) { from = options.from; }
	    if (options.to != null && options.to < to) { to = options.to; }
	    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
	    if (options.sharedHist) { copy.history = this.history
	    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	    copySharedMarkers(copy, findSharedMarkers(this));
	    return copy
	  },
	  unlinkDoc: function(other) {
	    var this$1 = this;
	
	    if (other instanceof CodeMirror$1) { other = other.doc; }
	    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
	      var link = this$1.linked[i];
	      if (link.doc != other) { continue }
	      this$1.linked.splice(i, 1);
	      other.unlinkDoc(this$1);
	      detachSharedMarkers(findSharedMarkers(this$1));
	      break
	    } }
	    // If the histories were shared, split them again
	    if (other.history == this.history) {
	      var splitIds = [other.id];
	      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
	      other.history = new History(null);
	      other.history.done = copyHistoryArray(this.history.done, splitIds);
	      other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	    }
	  },
	  iterLinkedDocs: function(f) {linkedDocs(this, f);},
	
	  getMode: function() {return this.mode},
	  getEditor: function() {return this.cm},
	
	  splitLines: function(str) {
	    if (this.lineSep) { return str.split(this.lineSep) }
	    return splitLinesAuto(str)
	  },
	  lineSeparator: function() { return this.lineSep || "\n" },
	
	  setDirection: docMethodOp(function (dir) {
	    if (dir != "rtl") { dir = "ltr"; }
	    if (dir == this.direction) { return }
	    this.direction = dir;
	    this.iter(function (line) { return line.order = null; });
	    if (this.cm) { directionChanged(this.cm); }
	  })
	});
	
	// Public alias.
	Doc.prototype.eachLine = Doc.prototype.iter;
	
	// Kludge to work around strange IE behavior where it'll sometimes
	// re-fire a series of drag-related events right after the drop (#1551)
	var lastDrop = 0;
	
	function onDrop(e) {
	  var cm = this;
	  clearDragCursor(cm);
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	    { return }
	  e_preventDefault(e);
	  if (ie) { lastDrop = +new Date; }
	  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	  if (!pos || cm.isReadOnly()) { return }
	  // Might be a file drop, in which case we simply extract the text
	  // and insert it.
	  if (files && files.length && window.FileReader && window.File) {
	    var n = files.length, text = Array(n), read = 0;
	    var loadFile = function (file, i) {
	      if (cm.options.allowDropFileTypes &&
	          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	        { return }
	
	      var reader = new FileReader;
	      reader.onload = operation(cm, function () {
	        var content = reader.result;
	        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = ""; }
	        text[i] = content;
	        if (++read == n) {
	          pos = clipPos(cm.doc, pos);
	          var change = {from: pos, to: pos,
	                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                        origin: "paste"};
	          makeChange(cm.doc, change);
	          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	        }
	      });
	      reader.readAsText(file);
	    };
	    for (var i = 0; i < n; ++i) { loadFile(files[i], i); }
	  } else { // Normal drop
	    // Don't do a replace if the drop happened inside of the selected text.
	    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	      cm.state.draggingText(e);
	      // Ensure the editor is re-focused
	      setTimeout(function () { return cm.display.input.focus(); }, 20);
	      return
	    }
	    try {
	      var text$1 = e.dataTransfer.getData("Text");
	      if (text$1) {
	        var selected;
	        if (cm.state.draggingText && !cm.state.draggingText.copy)
	          { selected = cm.listSelections(); }
	        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
	          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
	        cm.replaceSelection(text$1, "around", "paste");
	        cm.display.input.focus();
	      }
	    }
	    catch(e){}
	  }
	}
	
	function onDragStart(cm, e) {
	  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }
	
	  e.dataTransfer.setData("Text", cm.getSelection());
	  e.dataTransfer.effectAllowed = "copyMove";
	
	  // Use dummy image instead of default browsers image.
	  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	  if (e.dataTransfer.setDragImage && !safari) {
	    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	    if (presto) {
	      img.width = img.height = 1;
	      cm.display.wrapper.appendChild(img);
	      // Force a relayout, or Opera won't use our image for some obscure reason
	      img._top = img.offsetTop;
	    }
	    e.dataTransfer.setDragImage(img, 0, 0);
	    if (presto) { img.parentNode.removeChild(img); }
	  }
	}
	
	function onDragOver(cm, e) {
	  var pos = posFromMouse(cm, e);
	  if (!pos) { return }
	  var frag = document.createDocumentFragment();
	  drawSelectionCursor(cm, pos, frag);
	  if (!cm.display.dragCursor) {
	    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	  }
	  removeChildrenAndAdd(cm.display.dragCursor, frag);
	}
	
	function clearDragCursor(cm) {
	  if (cm.display.dragCursor) {
	    cm.display.lineSpace.removeChild(cm.display.dragCursor);
	    cm.display.dragCursor = null;
	  }
	}
	
	// These must be handled carefully, because naively registering a
	// handler for each editor will cause the editors to never be
	// garbage collected.
	
	function forEachCodeMirror(f) {
	  if (!document.getElementsByClassName) { return }
	  var byClass = document.getElementsByClassName("CodeMirror");
	  for (var i = 0; i < byClass.length; i++) {
	    var cm = byClass[i].CodeMirror;
	    if (cm) { f(cm); }
	  }
	}
	
	var globalsRegistered = false;
	function ensureGlobalHandlers() {
	  if (globalsRegistered) { return }
	  registerGlobalHandlers();
	  globalsRegistered = true;
	}
	function registerGlobalHandlers() {
	  // When the window resizes, we need to refresh active editors.
	  var resizeTimer;
	  on(window, "resize", function () {
	    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
	      resizeTimer = null;
	      forEachCodeMirror(onResize);
	    }, 100); }
	  });
	  // When the window loses focus, we want to show the editor as blurred
	  on(window, "blur", function () { return forEachCodeMirror(onBlur); });
	}
	// Called when the window resizes
	function onResize(cm) {
	  var d = cm.display;
	  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	    { return }
	  // Might be a text scaling operation, clear size caches.
	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	  d.scrollbarsClipped = false;
	  cm.setSize();
	}
	
	var keyNames = {
	  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	};
	
	// Number keys
	for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
	// Alphabetic keys
	for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
	// Function keys
	for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }
	
	var keyMap = {};
	
	keyMap.basic = {
	  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	  "Esc": "singleSelection"
	};
	// Note that the save and find-related commands aren't defined by
	// default. User code or addons can define them. Unknown commands
	// are simply ignored.
	keyMap.pcDefault = {
	  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	  fallthrough: "basic"
	};
	// Very basic readline/emacs-style bindings, which are standard on Mac.
	keyMap.emacsy = {
	  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	  "Ctrl-O": "openLine"
	};
	keyMap.macDefault = {
	  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	  fallthrough: ["basic", "emacsy"]
	};
	keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
	
	// KEYMAP DISPATCH
	
	function normalizeKeyName(name) {
	  var parts = name.split(/-(?!$)/);
	  name = parts[parts.length - 1];
	  var alt, ctrl, shift, cmd;
	  for (var i = 0; i < parts.length - 1; i++) {
	    var mod = parts[i];
	    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
	    else if (/^a(lt)?$/i.test(mod)) { alt = true; }
	    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
	    else if (/^s(hift)?$/i.test(mod)) { shift = true; }
	    else { throw new Error("Unrecognized modifier name: " + mod) }
	  }
	  if (alt) { name = "Alt-" + name; }
	  if (ctrl) { name = "Ctrl-" + name; }
	  if (cmd) { name = "Cmd-" + name; }
	  if (shift) { name = "Shift-" + name; }
	  return name
	}
	
	// This is a kludge to keep keymaps mostly working as raw objects
	// (backwards compatibility) while at the same time support features
	// like normalization and multi-stroke key bindings. It compiles a
	// new normalized keymap, and then updates the old object to reflect
	// this.
	function normalizeKeyMap(keymap) {
	  var copy = {};
	  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
	    var value = keymap[keyname];
	    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
	    if (value == "...") { delete keymap[keyname]; continue }
	
	    var keys = map(keyname.split(" "), normalizeKeyName);
	    for (var i = 0; i < keys.length; i++) {
	      var val = (void 0), name = (void 0);
	      if (i == keys.length - 1) {
	        name = keys.join(" ");
	        val = value;
	      } else {
	        name = keys.slice(0, i + 1).join(" ");
	        val = "...";
	      }
	      var prev = copy[name];
	      if (!prev) { copy[name] = val; }
	      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
	    }
	    delete keymap[keyname];
	  } }
	  for (var prop in copy) { keymap[prop] = copy[prop]; }
	  return keymap
	}
	
	function lookupKey(key, map$$1, handle, context) {
	  map$$1 = getKeyMap(map$$1);
	  var found = map$$1.call ? map$$1.call(key, context) : map$$1[key];
	  if (found === false) { return "nothing" }
	  if (found === "...") { return "multi" }
	  if (found != null && handle(found)) { return "handled" }
	
	  if (map$$1.fallthrough) {
	    if (Object.prototype.toString.call(map$$1.fallthrough) != "[object Array]")
	      { return lookupKey(key, map$$1.fallthrough, handle, context) }
	    for (var i = 0; i < map$$1.fallthrough.length; i++) {
	      var result = lookupKey(key, map$$1.fallthrough[i], handle, context);
	      if (result) { return result }
	    }
	  }
	}
	
	// Modifier key presses don't count as 'real' key presses for the
	// purpose of keymap fallthrough.
	function isModifierKey(value) {
	  var name = typeof value == "string" ? value : keyNames[value.keyCode];
	  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
	}
	
	function addModifierNames(name, event, noShift) {
	  var base = name;
	  if (event.altKey && base != "Alt") { name = "Alt-" + name; }
	  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
	  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name; }
	  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
	  return name
	}
	
	// Look up the name of a key as indicated by an event object.
	function keyName(event, noShift) {
	  if (presto && event.keyCode == 34 && event["char"]) { return false }
	  var name = keyNames[event.keyCode];
	  if (name == null || event.altGraphKey) { return false }
	  return addModifierNames(name, event, noShift)
	}
	
	function getKeyMap(val) {
	  return typeof val == "string" ? keyMap[val] : val
	}
	
	// Helper for deleting text near the selection(s), used to implement
	// backspace, delete, and similar functionality.
	function deleteNearSelection(cm, compute) {
	  var ranges = cm.doc.sel.ranges, kill = [];
	  // Build up a set of ranges to kill first, merging overlapping
	  // ranges.
	  for (var i = 0; i < ranges.length; i++) {
	    var toKill = compute(ranges[i]);
	    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	      var replaced = kill.pop();
	      if (cmp(replaced.from, toKill.from) < 0) {
	        toKill.from = replaced.from;
	        break
	      }
	    }
	    kill.push(toKill);
	  }
	  // Next, remove those actual ranges.
	  runInOp(cm, function () {
	    for (var i = kill.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
	    ensureCursorVisible(cm);
	  });
	}
	
	// Commands are parameter-less actions that can be performed on an
	// editor, mostly used for keybindings.
	var commands = {
	  selectAll: selectAll,
	  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
	  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
	    if (range.empty()) {
	      var len = getLine(cm.doc, range.head.line).text.length;
	      if (range.head.ch == len && range.head.line < cm.lastLine())
	        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
	      else
	        { return {from: range.head, to: Pos(range.head.line, len)} }
	    } else {
	      return {from: range.from(), to: range.to()}
	    }
	  }); },
	  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0),
	    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
	  }); }); },
	  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0), to: range.from()
	  }); }); },
	  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5;
	    var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	    return {from: leftPos, to: range.from()}
	  }); },
	  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5;
	    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	    return {from: range.from(), to: rightPos }
	  }); },
	  undo: function (cm) { return cm.undo(); },
	  redo: function (cm) { return cm.redo(); },
	  undoSelection: function (cm) { return cm.undoSelection(); },
	  redoSelection: function (cm) { return cm.redoSelection(); },
	  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
	  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
	  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
	    {origin: "+move", bias: -1}
	  ); },
	  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.cursorCoords(range.head, "div").top + 5;
	    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	  }, sel_move); },
	  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.cursorCoords(range.head, "div").top + 5;
	    return cm.coordsChar({left: 0, top: top}, "div")
	  }, sel_move); },
	  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.cursorCoords(range.head, "div").top + 5;
	    var pos = cm.coordsChar({left: 0, top: top}, "div");
	    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
	    return pos
	  }, sel_move); },
	  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
	  goLineDown: function (cm) { return cm.moveV(1, "line"); },
	  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
	  goPageDown: function (cm) { return cm.moveV(1, "page"); },
	  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
	  goCharRight: function (cm) { return cm.moveH(1, "char"); },
	  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
	  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
	  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
	  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
	  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
	  goWordRight: function (cm) { return cm.moveH(1, "word"); },
	  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
	  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
	  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
	  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
	  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
	  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
	  indentAuto: function (cm) { return cm.indentSelection("smart"); },
	  indentMore: function (cm) { return cm.indentSelection("add"); },
	  indentLess: function (cm) { return cm.indentSelection("subtract"); },
	  insertTab: function (cm) { return cm.replaceSelection("\t"); },
	  insertSoftTab: function (cm) {
	    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	    for (var i = 0; i < ranges.length; i++) {
	      var pos = ranges[i].from();
	      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	      spaces.push(spaceStr(tabSize - col % tabSize));
	    }
	    cm.replaceSelections(spaces);
	  },
	  defaultTab: function (cm) {
	    if (cm.somethingSelected()) { cm.indentSelection("add"); }
	    else { cm.execCommand("insertTab"); }
	  },
	  // Swap the two chars left and right of each selection's head.
	  // Move cursor behind the two swapped characters afterwards.
	  //
	  // Doesn't consider line feeds a character.
	  // Doesn't scan more than one line above to find a character.
	  // Doesn't do anything on an empty line.
	  // Doesn't do anything with non-empty selections.
	  transposeChars: function (cm) { return runInOp(cm, function () {
	    var ranges = cm.listSelections(), newSel = [];
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) { continue }
	      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	      if (line) {
	        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
	        if (cur.ch > 0) {
	          cur = new Pos(cur.line, cur.ch + 1);
	          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                          Pos(cur.line, cur.ch - 2), cur, "+transpose");
	        } else if (cur.line > cm.doc.first) {
	          var prev = getLine(cm.doc, cur.line - 1).text;
	          if (prev) {
	            cur = new Pos(cur.line, 1);
	            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                            prev.charAt(prev.length - 1),
	                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
	          }
	        }
	      }
	      newSel.push(new Range(cur, cur));
	    }
	    cm.setSelections(newSel);
	  }); },
	  newlineAndIndent: function (cm) { return runInOp(cm, function () {
	    var sels = cm.listSelections();
	    for (var i = sels.length - 1; i >= 0; i--)
	      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
	    sels = cm.listSelections();
	    for (var i$1 = 0; i$1 < sels.length; i$1++)
	      { cm.indentLine(sels[i$1].from().line, null, true); }
	    ensureCursorVisible(cm);
	  }); },
	  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
	  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
	};
	
	
	function lineStart(cm, lineN) {
	  var line = getLine(cm.doc, lineN);
	  var visual = visualLine(line);
	  if (visual != line) { lineN = lineNo(visual); }
	  return endOfLine(true, cm, visual, lineN, 1)
	}
	function lineEnd(cm, lineN) {
	  var line = getLine(cm.doc, lineN);
	  var visual = visualLineEnd(line);
	  if (visual != line) { lineN = lineNo(visual); }
	  return endOfLine(true, cm, line, lineN, -1)
	}
	function lineStartSmart(cm, pos) {
	  var start = lineStart(cm, pos.line);
	  var line = getLine(cm.doc, start.line);
	  var order = getOrder(line, cm.doc.direction);
	  if (!order || order[0].level == 0) {
	    var firstNonWS = Math.max(0, line.text.search(/\S/));
	    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	    return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
	  }
	  return start
	}
	
	// Run a handler that was bound to a key.
	function doHandleBinding(cm, bound, dropShift) {
	  if (typeof bound == "string") {
	    bound = commands[bound];
	    if (!bound) { return false }
	  }
	  // Ensure previous input has been read, so that the handler sees a
	  // consistent view of the document
	  cm.display.input.ensurePolled();
	  var prevShift = cm.display.shift, done = false;
	  try {
	    if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
	    if (dropShift) { cm.display.shift = false; }
	    done = bound(cm) != Pass;
	  } finally {
	    cm.display.shift = prevShift;
	    cm.state.suppressEdits = false;
	  }
	  return done
	}
	
	function lookupKeyForEditor(cm, name, handle) {
	  for (var i = 0; i < cm.state.keyMaps.length; i++) {
	    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	    if (result) { return result }
	  }
	  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	    || lookupKey(name, cm.options.keyMap, handle, cm)
	}
	
	// Note that, despite the name, this function is also used to check
	// for bound mouse clicks.
	
	var stopSeq = new Delayed;
	function dispatchKey(cm, name, e, handle) {
	  var seq = cm.state.keySeq;
	  if (seq) {
	    if (isModifierKey(name)) { return "handled" }
	    stopSeq.set(50, function () {
	      if (cm.state.keySeq == seq) {
	        cm.state.keySeq = null;
	        cm.display.input.reset();
	      }
	    });
	    name = seq + " " + name;
	  }
	  var result = lookupKeyForEditor(cm, name, handle);
	
	  if (result == "multi")
	    { cm.state.keySeq = name; }
	  if (result == "handled")
	    { signalLater(cm, "keyHandled", cm, name, e); }
	
	  if (result == "handled" || result == "multi") {
	    e_preventDefault(e);
	    restartBlink(cm);
	  }
	
	  if (seq && !result && /\'$/.test(name)) {
	    e_preventDefault(e);
	    return true
	  }
	  return !!result
	}
	
	// Handle a key from the keydown event.
	function handleKeyBinding(cm, e) {
	  var name = keyName(e, true);
	  if (!name) { return false }
	
	  if (e.shiftKey && !cm.state.keySeq) {
	    // First try to resolve full name (including 'Shift-'). Failing
	    // that, see if there is a cursor-motion command (starting with
	    // 'go') bound to the keyname without 'Shift-'.
	    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
	        || dispatchKey(cm, name, e, function (b) {
	             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	               { return doHandleBinding(cm, b) }
	           })
	  } else {
	    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
	  }
	}
	
	// Handle a key from the keypress event
	function handleCharBinding(cm, e, ch) {
	  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
	}
	
	var lastStoppedKey = null;
	function onKeyDown(e) {
	  var cm = this;
	  cm.curOp.focus = activeElt();
	  if (signalDOMEvent(cm, e)) { return }
	  // IE does strange things with escape.
	  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
	  var code = e.keyCode;
	  cm.display.shift = code == 16 || e.shiftKey;
	  var handled = handleKeyBinding(cm, e);
	  if (presto) {
	    lastStoppedKey = handled ? code : null;
	    // Opera has no cut event... we try to at least catch the key combo
	    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	      { cm.replaceSelection("", null, "cut"); }
	  }
	
	  // Turn mouse into crosshair when Alt is held on Mac.
	  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	    { showCrossHair(cm); }
	}
	
	function showCrossHair(cm) {
	  var lineDiv = cm.display.lineDiv;
	  addClass(lineDiv, "CodeMirror-crosshair");
	
	  function up(e) {
	    if (e.keyCode == 18 || !e.altKey) {
	      rmClass(lineDiv, "CodeMirror-crosshair");
	      off(document, "keyup", up);
	      off(document, "mouseover", up);
	    }
	  }
	  on(document, "keyup", up);
	  on(document, "mouseover", up);
	}
	
	function onKeyUp(e) {
	  if (e.keyCode == 16) { this.doc.sel.shift = false; }
	  signalDOMEvent(this, e);
	}
	
	function onKeyPress(e) {
	  var cm = this;
	  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
	  var keyCode = e.keyCode, charCode = e.charCode;
	  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
	  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
	  var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	  // Some browsers fire keypress events for backspace
	  if (ch == "\x08") { return }
	  if (handleCharBinding(cm, e, ch)) { return }
	  cm.display.input.onKeyPress(e);
	}
	
	var DOUBLECLICK_DELAY = 400;
	
	var PastClick = function(time, pos, button) {
	  this.time = time;
	  this.pos = pos;
	  this.button = button;
	};
	
	PastClick.prototype.compare = function (time, pos, button) {
	  return this.time + DOUBLECLICK_DELAY > time &&
	    cmp(pos, this.pos) == 0 && button == this.button
	};
	
	var lastClick;
	var lastDoubleClick;
	function clickRepeat(pos, button) {
	  var now = +new Date;
	  if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
	    lastClick = lastDoubleClick = null;
	    return "triple"
	  } else if (lastClick && lastClick.compare(now, pos, button)) {
	    lastDoubleClick = new PastClick(now, pos, button);
	    lastClick = null;
	    return "double"
	  } else {
	    lastClick = new PastClick(now, pos, button);
	    lastDoubleClick = null;
	    return "single"
	  }
	}
	
	// A mouse down can be a single click, double click, triple click,
	// start of selection drag, start of text drag, new cursor
	// (ctrl-click), rectangle drag (alt-drag), or xwin
	// middle-click-paste. Or it might be a click on something we should
	// not interfere with, such as a scrollbar or widget.
	function onMouseDown(e) {
	  var cm = this, display = cm.display;
	  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
	  display.input.ensurePolled();
	  display.shift = e.shiftKey;
	
	  if (eventInWidget(display, e)) {
	    if (!webkit) {
	      // Briefly turn off draggability, to allow widgets to do
	      // normal dragging things.
	      display.scroller.draggable = false;
	      setTimeout(function () { return display.scroller.draggable = true; }, 100);
	    }
	    return
	  }
	  if (clickInGutter(cm, e)) { return }
	  var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
	  window.focus();
	
	  // #3261: make sure, that we're not starting a second selection
	  if (button == 1 && cm.state.selectingText)
	    { cm.state.selectingText(e); }
	
	  if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }
	
	  if (button == 1) {
	    if (pos) { leftButtonDown(cm, pos, repeat, e); }
	    else if (e_target(e) == display.scroller) { e_preventDefault(e); }
	  } else if (button == 2) {
	    if (pos) { extendSelection(cm.doc, pos); }
	    setTimeout(function () { return display.input.focus(); }, 20);
	  } else if (button == 3) {
	    if (captureRightClick) { onContextMenu(cm, e); }
	    else { delayBlurEvent(cm); }
	  }
	}
	
	function handleMappedButton(cm, button, pos, repeat, event) {
	  var name = "Click";
	  if (repeat == "double") { name = "Double" + name; }
	  else if (repeat == "triple") { name = "Triple" + name; }
	  name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
	
	  return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
	    if (typeof bound == "string") { bound = commands[bound]; }
	    if (!bound) { return false }
	    var done = false;
	    try {
	      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
	      done = bound(cm, pos) != Pass;
	    } finally {
	      cm.state.suppressEdits = false;
	    }
	    return done
	  })
	}
	
	function configureMouse(cm, repeat, event) {
	  var option = cm.getOption("configureMouse");
	  var value = option ? option(cm, repeat, event) : {};
	  if (value.unit == null) {
	    var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
	    value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
	  }
	  if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
	  if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
	  if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
	  return value
	}
	
	function leftButtonDown(cm, pos, repeat, event) {
	  if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
	  else { cm.curOp.focus = activeElt(); }
	
	  var behavior = configureMouse(cm, repeat, event);
	
	  var sel = cm.doc.sel, contained;
	  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	      repeat == "single" && (contained = sel.contains(pos)) > -1 &&
	      (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
	      (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
	    { leftButtonStartDrag(cm, event, pos, behavior); }
	  else
	    { leftButtonSelect(cm, event, pos, behavior); }
	}
	
	// Start a text drag. When it ends, see if any dragging actually
	// happen, and treat as a click if it didn't.
	function leftButtonStartDrag(cm, event, pos, behavior) {
	  var display = cm.display, moved = false;
	  var dragEnd = operation(cm, function (e) {
	    if (webkit) { display.scroller.draggable = false; }
	    cm.state.draggingText = false;
	    off(document, "mouseup", dragEnd);
	    off(document, "mousemove", mouseMove);
	    off(display.scroller, "dragstart", dragStart);
	    off(display.scroller, "drop", dragEnd);
	    if (!moved) {
	      e_preventDefault(e);
	      if (!behavior.addNew)
	        { extendSelection(cm.doc, pos, null, null, behavior.extend); }
	      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	      if (webkit || ie && ie_version == 9)
	        { setTimeout(function () {document.body.focus(); display.input.focus();}, 20); }
	      else
	        { display.input.focus(); }
	    }
	  });
	  var mouseMove = function(e2) {
	    moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
	  };
	  var dragStart = function () { return moved = true; };
	  // Let the drag handler handle this.
	  if (webkit) { display.scroller.draggable = true; }
	  cm.state.draggingText = dragEnd;
	  dragEnd.copy = !behavior.moveOnDrag;
	  // IE's approach to draggable
	  if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
	  on(document, "mouseup", dragEnd);
	  on(document, "mousemove", mouseMove);
	  on(display.scroller, "dragstart", dragStart);
	  on(display.scroller, "drop", dragEnd);
	
	  delayBlurEvent(cm);
	  setTimeout(function () { return display.input.focus(); }, 20);
	}
	
	function rangeForUnit(cm, pos, unit) {
	  if (unit == "char") { return new Range(pos, pos) }
	  if (unit == "word") { return cm.findWordAt(pos) }
	  if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
	  var result = unit(cm, pos);
	  return new Range(result.from, result.to)
	}
	
	// Normal selection, as opposed to text dragging.
	function leftButtonSelect(cm, event, start, behavior) {
	  var display = cm.display, doc = cm.doc;
	  e_preventDefault(event);
	
	  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	  if (behavior.addNew && !behavior.extend) {
	    ourIndex = doc.sel.contains(start);
	    if (ourIndex > -1)
	      { ourRange = ranges[ourIndex]; }
	    else
	      { ourRange = new Range(start, start); }
	  } else {
	    ourRange = doc.sel.primary();
	    ourIndex = doc.sel.primIndex;
	  }
	
	  if (behavior.unit == "rectangle") {
	    if (!behavior.addNew) { ourRange = new Range(start, start); }
	    start = posFromMouse(cm, event, true, true);
	    ourIndex = -1;
	  } else {
	    var range$$1 = rangeForUnit(cm, start, behavior.unit);
	    if (behavior.extend)
	      { ourRange = extendRange(ourRange, range$$1.anchor, range$$1.head, behavior.extend); }
	    else
	      { ourRange = range$$1; }
	  }
	
	  if (!behavior.addNew) {
	    ourIndex = 0;
	    setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	    startSel = doc.sel;
	  } else if (ourIndex == -1) {
	    ourIndex = ranges.length;
	    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                 {scroll: false, origin: "*mouse"});
	  } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
	    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                 {scroll: false, origin: "*mouse"});
	    startSel = doc.sel;
	  } else {
	    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	  }
	
	  var lastPos = start;
	  function extendTo(pos) {
	    if (cmp(lastPos, pos) == 0) { return }
	    lastPos = pos;
	
	    if (behavior.unit == "rectangle") {
	      var ranges = [], tabSize = cm.options.tabSize;
	      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	           line <= end; line++) {
	        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	        if (left == right)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
	        else if (text.length > leftPos)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
	      }
	      if (!ranges.length) { ranges.push(new Range(start, start)); }
	      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                   {origin: "*mouse", scroll: false});
	      cm.scrollIntoView(pos);
	    } else {
	      var oldRange = ourRange;
	      var range$$1 = rangeForUnit(cm, pos, behavior.unit);
	      var anchor = oldRange.anchor, head;
	      if (cmp(range$$1.anchor, anchor) > 0) {
	        head = range$$1.head;
	        anchor = minPos(oldRange.from(), range$$1.anchor);
	      } else {
	        head = range$$1.anchor;
	        anchor = maxPos(oldRange.to(), range$$1.head);
	      }
	      var ranges$1 = startSel.ranges.slice(0);
	      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head);
	      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse);
	    }
	  }
	
	  var editorSize = display.wrapper.getBoundingClientRect();
	  // Used to ensure timeout re-tries don't fire when another extend
	  // happened in the meantime (clearTimeout isn't reliable -- at
	  // least on Chrome, the timeouts still happen even when cleared,
	  // if the clear happens after their scheduled firing time).
	  var counter = 0;
	
	  function extend(e) {
	    var curCount = ++counter;
	    var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
	    if (!cur) { return }
	    if (cmp(cur, lastPos) != 0) {
	      cm.curOp.focus = activeElt();
	      extendTo(cur);
	      var visible = visibleLines(display, doc);
	      if (cur.line >= visible.to || cur.line < visible.from)
	        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
	    } else {
	      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	      if (outside) { setTimeout(operation(cm, function () {
	        if (counter != curCount) { return }
	        display.scroller.scrollTop += outside;
	        extend(e);
	      }), 50); }
	    }
	  }
	
	  function done(e) {
	    cm.state.selectingText = false;
	    counter = Infinity;
	    e_preventDefault(e);
	    display.input.focus();
	    off(document, "mousemove", move);
	    off(document, "mouseup", up);
	    doc.history.lastSelOrigin = null;
	  }
	
	  var move = operation(cm, function (e) {
	    if (!e_button(e)) { done(e); }
	    else { extend(e); }
	  });
	  var up = operation(cm, done);
	  cm.state.selectingText = up;
	  on(document, "mousemove", move);
	  on(document, "mouseup", up);
	}
	
	
	// Determines whether an event happened in the gutter, and fires the
	// handlers for the corresponding event.
	function gutterEvent(cm, e, type, prevent) {
	  var mX, mY;
	  try { mX = e.clientX; mY = e.clientY; }
	  catch(e) { return false }
	  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
	  if (prevent) { e_preventDefault(e); }
	
	  var display = cm.display;
	  var lineBox = display.lineDiv.getBoundingClientRect();
	
	  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
	  mY -= lineBox.top - display.viewOffset;
	
	  for (var i = 0; i < cm.options.gutters.length; ++i) {
	    var g = display.gutters.childNodes[i];
	    if (g && g.getBoundingClientRect().right >= mX) {
	      var line = lineAtHeight(cm.doc, mY);
	      var gutter = cm.options.gutters[i];
	      signal(cm, type, cm, line, gutter, e);
	      return e_defaultPrevented(e)
	    }
	  }
	}
	
	function clickInGutter(cm, e) {
	  return gutterEvent(cm, e, "gutterClick", true)
	}
	
	// CONTEXT MENU HANDLING
	
	// To make the context menu work, we need to briefly unhide the
	// textarea (making it as unobtrusive as possible) to let the
	// right-click take effect on it.
	function onContextMenu(cm, e) {
	  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
	  if (signalDOMEvent(cm, e, "contextmenu")) { return }
	  cm.display.input.onContextMenu(e);
	}
	
	function contextMenuInGutter(cm, e) {
	  if (!hasHandler(cm, "gutterContextMenu")) { return false }
	  return gutterEvent(cm, e, "gutterContextMenu", false)
	}
	
	function themeChanged(cm) {
	  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	  clearCaches(cm);
	}
	
	var Init = {toString: function(){return "CodeMirror.Init"}};
	
	var defaults = {};
	var optionHandlers = {};
	
	function defineOptions(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers;
	
	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) { optionHandlers[name] =
	      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
	  }
	
	  CodeMirror.defineOption = option;
	
	  // Passed to option handlers when there is no old value.
	  CodeMirror.Init = Init;
	
	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function (cm, val) { return cm.setValue(val); }, true);
	  option("mode", null, function (cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);
	
	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function (cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function (cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) { return }
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function (line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) { break }
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
	  });
	  option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != Init) { cm.refresh(); }
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
	    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
	  }, true);
	  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);
	
	  option("theme", "default", function (cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function (cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != Init && getKeyMap(old);
	    if (prev && prev.detach) { prev.detach(cm, next); }
	    if (next.attach) { next.attach(cm, prev || null); }
	  });
	  option("extraKeys", null);
	  option("configureMouse", null);
	
	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function (cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function (cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
	  option("scrollbarStyle", "native", function (cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function (cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);
	
	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);
	  option("pasteLinesPerSelection", true);
	
	  option("readOnly", false, function (cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	    }
	    cm.display.input.readOnlyChanged(val);
	  });
	  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);
	
	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function (cm, val) {
	    if (!val) { cm.display.input.resetPosition(); }
	  });
	
	  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
	  option("autofocus", null);
	  option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
	}
	
	function guttersChanged(cm) {
	  updateGutters(cm);
	  regChange(cm);
	  alignHorizontally(cm);
	}
	
	function dragDropChanged(cm, value, old) {
	  var wasOn = old && old != Init;
	  if (!value != !wasOn) {
	    var funcs = cm.display.dragFunctions;
	    var toggle = value ? on : off;
	    toggle(cm.display.scroller, "dragstart", funcs.start);
	    toggle(cm.display.scroller, "dragenter", funcs.enter);
	    toggle(cm.display.scroller, "dragover", funcs.over);
	    toggle(cm.display.scroller, "dragleave", funcs.leave);
	    toggle(cm.display.scroller, "drop", funcs.drop);
	  }
	}
	
	function wrappingChanged(cm) {
	  if (cm.options.lineWrapping) {
	    addClass(cm.display.wrapper, "CodeMirror-wrap");
	    cm.display.sizer.style.minWidth = "";
	    cm.display.sizerWidth = null;
	  } else {
	    rmClass(cm.display.wrapper, "CodeMirror-wrap");
	    findMaxLine(cm);
	  }
	  estimateLineHeights(cm);
	  regChange(cm);
	  clearCaches(cm);
	  setTimeout(function () { return updateScrollbars(cm); }, 100);
	}
	
	// A CodeMirror instance represents an editor. This is the object
	// that user code is usually dealing with.
	
	function CodeMirror$1(place, options) {
	  var this$1 = this;
	
	  if (!(this instanceof CodeMirror$1)) { return new CodeMirror$1(place, options) }
	
	  this.options = options = options ? copyObj(options) : {};
	  // Determine effective options based on given values and defaults.
	  copyObj(defaults, options, false);
	  setGuttersForLineNumbers(options);
	
	  var doc = options.value;
	  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
	  this.doc = doc;
	
	  var input = new CodeMirror$1.inputStyles[options.inputStyle](this);
	  var display = this.display = new Display(place, doc, input);
	  display.wrapper.CodeMirror = this;
	  updateGutters(this);
	  themeChanged(this);
	  if (options.lineWrapping)
	    { this.display.wrapper.className += " CodeMirror-wrap"; }
	  initScrollbars(this);
	
	  this.state = {
	    keyMaps: [],  // stores maps added by addKeyMap
	    overlays: [], // highlighting overlays, as added by addOverlay
	    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	    overwrite: false,
	    delayingBlurEvent: false,
	    focused: false,
	    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	    selectingText: false,
	    draggingText: false,
	    highlight: new Delayed(), // stores highlight worker timeout
	    keySeq: null,  // Unfinished key sequence
	    specialChars: null
	  };
	
	  if (options.autofocus && !mobile) { display.input.focus(); }
	
	  // Override magic textarea content restore that IE sometimes does
	  // on our hidden textarea on reload
	  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }
	
	  registerEventHandlers(this);
	  ensureGlobalHandlers();
	
	  startOperation(this);
	  this.curOp.forceUpdate = true;
	  attachDoc(this, doc);
	
	  if ((options.autofocus && !mobile) || this.hasFocus())
	    { setTimeout(bind(onFocus, this), 20); }
	  else
	    { onBlur(this); }
	
	  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
	    { optionHandlers[opt](this$1, options[opt], Init); } }
	  maybeUpdateLineNumberWidth(this);
	  if (options.finishInit) { options.finishInit(this); }
	  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1); }
	  endOperation(this);
	  // Suppress optimizelegibility in Webkit, since it breaks text
	  // measuring on line wrapping boundaries.
	  if (webkit && options.lineWrapping &&
	      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	    { display.lineDiv.style.textRendering = "auto"; }
	}
	
	// The default configuration options.
	CodeMirror$1.defaults = defaults;
	// Functions to run when options are changed.
	CodeMirror$1.optionHandlers = optionHandlers;
	
	// Attach the necessary event handlers when initializing the editor
	function registerEventHandlers(cm) {
	  var d = cm.display;
	  on(d.scroller, "mousedown", operation(cm, onMouseDown));
	  // Older IE's will not fire a second mousedown for a double click
	  if (ie && ie_version < 11)
	    { on(d.scroller, "dblclick", operation(cm, function (e) {
	      if (signalDOMEvent(cm, e)) { return }
	      var pos = posFromMouse(cm, e);
	      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
	      e_preventDefault(e);
	      var word = cm.findWordAt(pos);
	      extendSelection(cm.doc, word.anchor, word.head);
	    })); }
	  else
	    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
	  // Some browsers fire contextmenu *after* opening the menu, at
	  // which point we can't mess with it anymore. Context menu is
	  // handled in onMouseDown for these browsers.
	  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }); }
	
	  // Used to suppress mouse event handling when a touch happens
	  var touchFinished, prevTouch = {end: 0};
	  function finishTouch() {
	    if (d.activeTouch) {
	      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
	      prevTouch = d.activeTouch;
	      prevTouch.end = +new Date;
	    }
	  }
	  function isMouseLikeTouchEvent(e) {
	    if (e.touches.length != 1) { return false }
	    var touch = e.touches[0];
	    return touch.radiusX <= 1 && touch.radiusY <= 1
	  }
	  function farAway(touch, other) {
	    if (other.left == null) { return true }
	    var dx = other.left - touch.left, dy = other.top - touch.top;
	    return dx * dx + dy * dy > 20 * 20
	  }
	  on(d.scroller, "touchstart", function (e) {
	    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	      d.input.ensurePolled();
	      clearTimeout(touchFinished);
	      var now = +new Date;
	      d.activeTouch = {start: now, moved: false,
	                       prev: now - prevTouch.end <= 300 ? prevTouch : null};
	      if (e.touches.length == 1) {
	        d.activeTouch.left = e.touches[0].pageX;
	        d.activeTouch.top = e.touches[0].pageY;
	      }
	    }
	  });
	  on(d.scroller, "touchmove", function () {
	    if (d.activeTouch) { d.activeTouch.moved = true; }
	  });
	  on(d.scroller, "touchend", function (e) {
	    var touch = d.activeTouch;
	    if (touch && !eventInWidget(d, e) && touch.left != null &&
	        !touch.moved && new Date - touch.start < 300) {
	      var pos = cm.coordsChar(d.activeTouch, "page"), range;
	      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	        { range = new Range(pos, pos); }
	      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	        { range = cm.findWordAt(pos); }
	      else // Triple tap
	        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
	      cm.setSelection(range.anchor, range.head);
	      cm.focus();
	      e_preventDefault(e);
	    }
	    finishTouch();
	  });
	  on(d.scroller, "touchcancel", finishTouch);
	
	  // Sync scrolling between fake scrollbars and real scrollable
	  // area, ensure viewport is updated when scrolling.
	  on(d.scroller, "scroll", function () {
	    if (d.scroller.clientHeight) {
	      updateScrollTop(cm, d.scroller.scrollTop);
	      setScrollLeft(cm, d.scroller.scrollLeft, true);
	      signal(cm, "scroll", cm);
	    }
	  });
	
	  // Listen to wheel events in order to try and update the viewport on time.
	  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
	  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });
	
	  // Prevent wrapper from ever scrolling
	  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });
	
	  d.dragFunctions = {
	    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
	    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	    start: function (e) { return onDragStart(cm, e); },
	    drop: operation(cm, onDrop),
	    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
	  };
	
	  var inp = d.input.getField();
	  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
	  on(inp, "keydown", operation(cm, onKeyDown));
	  on(inp, "keypress", operation(cm, onKeyPress));
	  on(inp, "focus", function (e) { return onFocus(cm, e); });
	  on(inp, "blur", function (e) { return onBlur(cm, e); });
	}
	
	var initHooks = [];
	CodeMirror$1.defineInitHook = function (f) { return initHooks.push(f); };
	
	// Indent the given line. The how parameter can be "smart",
	// "add"/null, "subtract", or "prev". When aggressive is false
	// (typically set to true for forced single-line indents), empty
	// lines are not indented, and places where the mode returns Pass
	// are left alone.
	function indentLine(cm, n, how, aggressive) {
	  var doc = cm.doc, state;
	  if (how == null) { how = "add"; }
	  if (how == "smart") {
	    // Fall back to "prev" when the mode doesn't have an indentation
	    // method.
	    if (!doc.mode.indent) { how = "prev"; }
	    else { state = getContextBefore(cm, n).state; }
	  }
	
	  var tabSize = cm.options.tabSize;
	  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	  if (line.stateAfter) { line.stateAfter = null; }
	  var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	  if (!aggressive && !/\S/.test(line.text)) {
	    indentation = 0;
	    how = "not";
	  } else if (how == "smart") {
	    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	    if (indentation == Pass || indentation > 150) {
	      if (!aggressive) { return }
	      how = "prev";
	    }
	  }
	  if (how == "prev") {
	    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
	    else { indentation = 0; }
	  } else if (how == "add") {
	    indentation = curSpace + cm.options.indentUnit;
	  } else if (how == "subtract") {
	    indentation = curSpace - cm.options.indentUnit;
	  } else if (typeof how == "number") {
	    indentation = curSpace + how;
	  }
	  indentation = Math.max(0, indentation);
	
	  var indentString = "", pos = 0;
	  if (cm.options.indentWithTabs)
	    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
	  if (pos < indentation) { indentString += spaceStr(indentation - pos); }
	
	  if (indentString != curSpaceString) {
	    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	    line.stateAfter = null;
	    return true
	  } else {
	    // Ensure that, if the cursor was in the whitespace at the start
	    // of the line, it is moved to the end of that space.
	    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
	      var range = doc.sel.ranges[i$1];
	      if (range.head.line == n && range.head.ch < curSpaceString.length) {
	        var pos$1 = Pos(n, curSpaceString.length);
	        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
	        break
	      }
	    }
	  }
	}
	
	// This will be set to a {lineWise: bool, text: [string]} object, so
	// that, when pasting, we know what kind of selections the copied
	// text was made out of.
	var lastCopied = null;
	
	function setLastCopied(newLastCopied) {
	  lastCopied = newLastCopied;
	}
	
	function applyTextInput(cm, inserted, deleted, sel, origin) {
	  var doc = cm.doc;
	  cm.display.shift = false;
	  if (!sel) { sel = doc.sel; }
	
	  var paste = cm.state.pasteIncoming || origin == "paste";
	  var textLines = splitLinesAuto(inserted), multiPaste = null;
	  // When pasing N lines into N selections, insert one line per selection
	  if (paste && sel.ranges.length > 1) {
	    if (lastCopied && lastCopied.text.join("\n") == inserted) {
	      if (sel.ranges.length % lastCopied.text.length == 0) {
	        multiPaste = [];
	        for (var i = 0; i < lastCopied.text.length; i++)
	          { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
	      }
	    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
	      multiPaste = map(textLines, function (l) { return [l]; });
	    }
	  }
	
	  var updateInput;
	  // Normal behavior is to insert the new text into every selection
	  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
	    var range$$1 = sel.ranges[i$1];
	    var from = range$$1.from(), to = range$$1.to();
	    if (range$$1.empty()) {
	      if (deleted && deleted > 0) // Handle deletion
	        { from = Pos(from.line, from.ch - deleted); }
	      else if (cm.state.overwrite && !paste) // Handle overwrite
	        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
	      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	        { from = to = Pos(from.line, 0); }
	    }
	    updateInput = cm.curOp.updateInput;
	    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
	                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	    makeChange(cm.doc, changeEvent);
	    signalLater(cm, "inputRead", cm, changeEvent);
	  }
	  if (inserted && !paste)
	    { triggerElectric(cm, inserted); }
	
	  ensureCursorVisible(cm);
	  cm.curOp.updateInput = updateInput;
	  cm.curOp.typing = true;
	  cm.state.pasteIncoming = cm.state.cutIncoming = false;
	}
	
	function handlePaste(e, cm) {
	  var pasted = e.clipboardData && e.clipboardData.getData("Text");
	  if (pasted) {
	    e.preventDefault();
	    if (!cm.isReadOnly() && !cm.options.disableInput)
	      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
	    return true
	  }
	}
	
	function triggerElectric(cm, inserted) {
	  // When an 'electric' character is inserted, immediately trigger a reindent
	  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
	  var sel = cm.doc.sel;
	
	  for (var i = sel.ranges.length - 1; i >= 0; i--) {
	    var range$$1 = sel.ranges[i];
	    if (range$$1.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range$$1.head.line)) { continue }
	    var mode = cm.getModeAt(range$$1.head);
	    var indented = false;
	    if (mode.electricChars) {
	      for (var j = 0; j < mode.electricChars.length; j++)
	        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	          indented = indentLine(cm, range$$1.head.line, "smart");
	          break
	        } }
	    } else if (mode.electricInput) {
	      if (mode.electricInput.test(getLine(cm.doc, range$$1.head.line).text.slice(0, range$$1.head.ch)))
	        { indented = indentLine(cm, range$$1.head.line, "smart"); }
	    }
	    if (indented) { signalLater(cm, "electricInput", cm, range$$1.head.line); }
	  }
	}
	
	function copyableRanges(cm) {
	  var text = [], ranges = [];
	  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	    var line = cm.doc.sel.ranges[i].head.line;
	    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	    ranges.push(lineRange);
	    text.push(cm.getRange(lineRange.anchor, lineRange.head));
	  }
	  return {text: text, ranges: ranges}
	}
	
	function disableBrowserMagic(field, spellcheck) {
	  field.setAttribute("autocorrect", "off");
	  field.setAttribute("autocapitalize", "off");
	  field.setAttribute("spellcheck", !!spellcheck);
	}
	
	function hiddenTextarea() {
	  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
	  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	  // The textarea is kept positioned near the cursor to prevent the
	  // fact that it'll be scrolled into view on input from scrolling
	  // our fake cursor out of view. On webkit, when wrap=off, paste is
	  // very slow. So make the area wide instead.
	  if (webkit) { te.style.width = "1000px"; }
	  else { te.setAttribute("wrap", "off"); }
	  // If border: 0; -- iOS fails to open keyboard (issue #1287)
	  if (ios) { te.style.border = "1px solid black"; }
	  disableBrowserMagic(te);
	  return div
	}
	
	// The publicly visible API. Note that methodOp(f) means
	// 'wrap f in an operation, performed on its `this` parameter'.
	
	// This is not the complete set of editor methods. Most of the
	// methods defined on the Doc type are also injected into
	// CodeMirror.prototype, for backwards compatibility and
	// convenience.
	
	var addEditorMethods = function(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers;
	
	  var helpers = CodeMirror.helpers = {};
	
	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},
	
	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") { return }
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        { operation(this, optionHandlers[option])(this, value, old); }
	      signal(this, "optionChange", this, option);
	    },
	
	    getOption: function(option) {return this.options[option]},
	    getDoc: function() {return this.doc},
	
	    addKeyMap: function(map$$1, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map$$1));
	    },
	    removeKeyMap: function(map$$1) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        { if (maps[i] == map$$1 || maps[i].name == map$$1) {
	          maps.splice(i, 1);
	          return true
	        } }
	    },
	
	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function (overlay) { return overlay.priority; });
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var this$1 = this;
	
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this$1.state.modeGen++;
	          regChange(this$1);
	          return
	        }
	      }
	    }),
	
	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
	        else { dir = dir ? "add" : "subtract"; }
	      }
	      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
	    }),
	    indentSelection: methodOp(function(how) {
	      var this$1 = this;
	
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range$$1 = ranges[i];
	        if (!range$$1.empty()) {
	          var from = range$$1.from(), to = range$$1.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            { indentLine(this$1, j, how); }
	          var newRanges = this$1.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
	        } else if (range$$1.head.line > end) {
	          indentLine(this$1, range$$1.head.line, how, true);
	          end = range$$1.head.line;
	          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1); }
	        }
	      }
	    }),
	
	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise)
	    },
	
	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true)
	    },
	
	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) { type = styles[2]; }
	      else { for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
	        else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
	        else { type = styles[mid * 2 + 2]; break }
	      } }
	      var cut = type ? type.indexOf("overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
	    },
	
	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) { return mode }
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
	    },
	
	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0]
	    },
	
	    getHelpers: function(pos, type) {
	      var this$1 = this;
	
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) { return found }
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) { found.push(help[mode[type]]); }
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) { found.push(val); }
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
	        var cur = help._global[i$1];
	        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
	          { found.push(cur.val); }
	      }
	      return found
	    },
	
	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getContextBefore(this, line + 1, precise).state
	    },
	
	    cursorCoords: function(start, mode) {
	      var pos, range$$1 = this.doc.sel.primary();
	      if (start == null) { pos = range$$1.head; }
	      else if (typeof start == "object") { pos = clipPos(this.doc, start); }
	      else { pos = start ? range$$1.from() : range$$1.to(); }
	      return cursorCoords(this, pos, mode || "page")
	    },
	
	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page")
	    },
	
	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top)
	    },
	
	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset)
	    },
	    heightAtLine: function(line, mode, includeWidgets) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) { line = this.doc.first; }
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0)
	    },
	
	    defaultTextHeight: function() { return textHeight(this.display) },
	    defaultCharWidth: function() { return charWidth(this.display) },
	
	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},
	
	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          { top = pos.top - node.offsetHeight; }
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          { top = pos.bottom; }
	        if (left + node.offsetWidth > hspace)
	          { left = hspace - node.offsetWidth; }
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") { left = 0; }
	        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
	    },
	
	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,
	    triggerOnMouseDown: methodOp(onMouseDown),
	
	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        { return commands[cmd].call(null, this) }
	    },
	
	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),
	
	    findPosH: function(from, amount, unit, visually) {
	      var this$1 = this;
	
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      var cur = clipPos(this.doc, from);
	      for (var i = 0; i < amount; ++i) {
	        cur = findPosH(this$1.doc, cur, dir, unit, visually);
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },
	
	    moveH: methodOp(function(dir, unit) {
	      var this$1 = this;
	
	      this.extendSelectionsBy(function (range$$1) {
	        if (this$1.display.shift || this$1.doc.extend || range$$1.empty())
	          { return findPosH(this$1.doc, range$$1.head, dir, unit, this$1.options.rtlMoveVisually) }
	        else
	          { return dir < 0 ? range$$1.from() : range$$1.to() }
	      }, sel_move);
	    }),
	
	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        { doc.replaceSelection("", null, "+delete"); }
	      else
	        { deleteNearSelection(this, function (range$$1) {
	          var other = findPosH(doc, range$$1.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range$$1.head} : {from: range$$1.head, to: other}
	        }); }
	    }),
	
	    findPosV: function(from, amount, unit, goalColumn) {
	      var this$1 = this;
	
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      var cur = clipPos(this.doc, from);
	      for (var i = 0; i < amount; ++i) {
	        var coords = cursorCoords(this$1, cur, "div");
	        if (x == null) { x = coords.left; }
	        else { coords.left = x; }
	        cur = findPosV(this$1, coords, dir, unit);
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },
	
	    moveV: methodOp(function(dir, unit) {
	      var this$1 = this;
	
	      var doc = this.doc, goals = [];
	      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function (range$$1) {
	        if (collapse)
	          { return dir < 0 ? range$$1.from() : range$$1.to() }
	        var headPos = cursorCoords(this$1, range$$1.head, "div");
	        if (range$$1.goalColumn != null) { headPos.left = range$$1.goalColumn; }
	        goals.push(headPos.left);
	        var pos = findPosV(this$1, headPos, dir, unit);
	        if (unit == "page" && range$$1 == doc.sel.primary())
	          { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
	        return pos
	      }, sel_move);
	      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
	        { doc.sel.ranges[i].goalColumn = goals[i]; } }
	    }),
	
	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function (ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
	          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
	        while (start > 0 && check(line.charAt(start - 1))) { --start; }
	        while (end < line.length && check(line.charAt(end))) { ++end; }
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end))
	    },
	
	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) { return }
	      if (this.state.overwrite = !this.state.overwrite)
	        { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
	      else
	        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
	
	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt() },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },
	
	    scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
	    },
	
	    scrollIntoView: methodOp(function(range$$1, margin) {
	      if (range$$1 == null) {
	        range$$1 = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) { margin = this.options.cursorScrollMargin; }
	      } else if (typeof range$$1 == "number") {
	        range$$1 = {from: Pos(range$$1, 0), to: null};
	      } else if (range$$1.from == null) {
	        range$$1 = {from: range$$1, to: null};
	      }
	      if (!range$$1.to) { range$$1.to = range$$1.from; }
	      range$$1.margin = margin || 0;
	
	      if (range$$1.from.line != null) {
	        scrollToRange(this, range$$1);
	      } else {
	        scrollToCoordsRange(this, range$$1.from, range$$1.to, range$$1.margin);
	      }
	    }),
	
	    setSize: methodOp(function(width, height) {
	      var this$1 = this;
	
	      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
	      if (width != null) { this.display.wrapper.style.width = interpret(width); }
	      if (height != null) { this.display.wrapper.style.height = interpret(height); }
	      if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
	      var lineNo$$1 = this.display.viewFrom;
	      this.doc.iter(lineNo$$1, this.display.viewTo, function (line) {
	        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
	          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo$$1, "widget"); break } } }
	        ++lineNo$$1;
	      });
	      this.curOp.forceUpdate = true;
	      signal(this, "refresh", this);
	    }),
	
	    operation: function(f){return runInOp(this, f)},
	    startOperation: function(){return startOperation(this)},
	    endOperation: function(){return endOperation(this)},
	
	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        { estimateLineHeights(this); }
	      signal(this, "refresh", this);
	    }),
	
	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old
	    }),
	
	    getInputField: function(){return this.display.input.getField()},
	    getWrapperElement: function(){return this.display.wrapper},
	    getScrollerElement: function(){return this.display.scroller},
	    getGutterElement: function(){return this.display.gutters}
	  };
	  eventMixin(CodeMirror);
	
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };
	};
	
	// Used for horizontal relative motion. Dir is -1 or 1 (left or
	// right), unit can be "char", "column" (like char, but doesn't
	// cross line boundaries), "word" (across next word), or "group" (to
	// the start of next group of word or non-word-non-whitespace
	// chars). The visually param controls whether, in right-to-left
	// text, direction 1 means to move towards the next index in the
	// string, or towards the character to the right of the current
	// position. The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosH(doc, pos, dir, unit, visually) {
	  var oldPos = pos;
	  var origDir = dir;
	  var lineObj = getLine(doc, pos.line);
	  function findNextLine() {
	    var l = pos.line + dir;
	    if (l < doc.first || l >= doc.first + doc.size) { return false }
	    pos = new Pos(l, pos.ch, pos.sticky);
	    return lineObj = getLine(doc, l)
	  }
	  function moveOnce(boundToLine) {
	    var next;
	    if (visually) {
	      next = moveVisually(doc.cm, lineObj, pos, dir);
	    } else {
	      next = moveLogically(lineObj, pos, dir);
	    }
	    if (next == null) {
	      if (!boundToLine && findNextLine())
	        { pos = endOfLine(visually, doc.cm, lineObj, pos.line, dir); }
	      else
	        { return false }
	    } else {
	      pos = next;
	    }
	    return true
	  }
	
	  if (unit == "char") {
	    moveOnce();
	  } else if (unit == "column") {
	    moveOnce(true);
	  } else if (unit == "word" || unit == "group") {
	    var sawType = null, group = unit == "group";
	    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	    for (var first = true;; first = false) {
	      if (dir < 0 && !moveOnce(!first)) { break }
	      var cur = lineObj.text.charAt(pos.ch) || "\n";
	      var type = isWordChar(cur, helper) ? "w"
	        : group && cur == "\n" ? "n"
	        : !group || /\s/.test(cur) ? null
	        : "p";
	      if (group && !first && !type) { type = "s"; }
	      if (sawType && sawType != type) {
	        if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
	        break
	      }
	
	      if (type) { sawType = type; }
	      if (dir > 0 && !moveOnce(!first)) { break }
	    }
	  }
	  var result = skipAtomic(doc, pos, oldPos, origDir, true);
	  if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
	  return result
	}
	
	// For relative vertical movement. Dir may be -1 or 1. Unit can be
	// "page" or "line". The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosV(cm, pos, dir, unit) {
	  var doc = cm.doc, x = pos.left, y;
	  if (unit == "page") {
	    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
	    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
	
	  } else if (unit == "line") {
	    y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	  }
	  var target;
	  for (;;) {
	    target = coordsChar(cm, x, y);
	    if (!target.outside) { break }
	    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
	    y += dir * 5;
	  }
	  return target
	}
	
	// CONTENTEDITABLE INPUT STYLE
	
	var ContentEditableInput = function(cm) {
	  this.cm = cm;
	  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	  this.polling = new Delayed();
	  this.composing = null;
	  this.gracePeriod = false;
	  this.readDOMTimeout = null;
	};
	
	ContentEditableInput.prototype.init = function (display) {
	    var this$1 = this;
	
	  var input = this, cm = input.cm;
	  var div = input.div = display.lineDiv;
	  disableBrowserMagic(div, cm.options.spellcheck);
	
	  on(div, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
	    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	    if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
	  });
	
	  on(div, "compositionstart", function (e) {
	    this$1.composing = {data: e.data, done: false};
	  });
	  on(div, "compositionupdate", function (e) {
	    if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
	  });
	  on(div, "compositionend", function (e) {
	    if (this$1.composing) {
	      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
	      this$1.composing.done = true;
	    }
	  });
	
	  on(div, "touchstart", function () { return input.forceCompositionEnd(); });
	
	  on(div, "input", function () {
	    if (!this$1.composing) { this$1.readFromDOMSoon(); }
	  });
	
	  function onCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()});
	      if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm);
	      setLastCopied({lineWise: true, text: ranges.text});
	      if (e.type == "cut") {
	        cm.operation(function () {
	          cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	          cm.replaceSelection("", null, "cut");
	        });
	      }
	    }
	    if (e.clipboardData) {
	      e.clipboardData.clearData();
	      var content = lastCopied.text.join("\n");
	      // iOS exposes the clipboard API, but seems to discard content inserted into it
	      e.clipboardData.setData("Text", content);
	      if (e.clipboardData.getData("Text") == content) {
	        e.preventDefault();
	        return
	      }
	    }
	    // Old-fashioned briefly-focus-a-textarea hack
	    var kludge = hiddenTextarea(), te = kludge.firstChild;
	    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	    te.value = lastCopied.text.join("\n");
	    var hadFocus = document.activeElement;
	    selectInput(te);
	    setTimeout(function () {
	      cm.display.lineSpace.removeChild(kludge);
	      hadFocus.focus();
	      if (hadFocus == div) { input.showPrimarySelection(); }
	    }, 50);
	  }
	  on(div, "copy", onCopyCut);
	  on(div, "cut", onCopyCut);
	};
	
	ContentEditableInput.prototype.prepareSelection = function () {
	  var result = prepareSelection(this.cm, false);
	  result.focus = this.cm.state.focused;
	  return result
	};
	
	ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
	  if (!info || !this.cm.display.view.length) { return }
	  if (info.focus || takeFocus) { this.showPrimarySelection(); }
	  this.showMultipleSelections(info);
	};
	
	ContentEditableInput.prototype.showPrimarySelection = function () {
	  var sel = window.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
	  var from = prim.from(), to = prim.to();
	
	  if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
	    sel.removeAllRanges();
	    return
	  }
	
	  var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	  var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
	  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	      cmp(minPos(curAnchor, curFocus), from) == 0 &&
	      cmp(maxPos(curAnchor, curFocus), to) == 0)
	    { return }
	
	  var view = cm.display.view;
	  var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
	      {node: view[0].measure.map[2], offset: 0};
	  var end = to.line < cm.display.viewTo && posToDOM(cm, to);
	  if (!end) {
	    var measure = view[view.length - 1].measure;
	    var map$$1 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	    end = {node: map$$1[map$$1.length - 1], offset: map$$1[map$$1.length - 2] - map$$1[map$$1.length - 3]};
	  }
	
	  if (!start || !end) {
	    sel.removeAllRanges();
	    return
	  }
	
	  var old = sel.rangeCount && sel.getRangeAt(0), rng;
	  try { rng = range(start.node, start.offset, end.offset, end.node); }
	  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	  if (rng) {
	    if (!gecko && cm.state.focused) {
	      sel.collapse(start.node, start.offset);
	      if (!rng.collapsed) {
	        sel.removeAllRanges();
	        sel.addRange(rng);
	      }
	    } else {
	      sel.removeAllRanges();
	      sel.addRange(rng);
	    }
	    if (old && sel.anchorNode == null) { sel.addRange(old); }
	    else if (gecko) { this.startGracePeriod(); }
	  }
	  this.rememberSelection();
	};
	
	ContentEditableInput.prototype.startGracePeriod = function () {
	    var this$1 = this;
	
	  clearTimeout(this.gracePeriod);
	  this.gracePeriod = setTimeout(function () {
	    this$1.gracePeriod = false;
	    if (this$1.selectionChanged())
	      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
	  }, 20);
	};
	
	ContentEditableInput.prototype.showMultipleSelections = function (info) {
	  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	};
	
	ContentEditableInput.prototype.rememberSelection = function () {
	  var sel = window.getSelection();
	  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	};
	
	ContentEditableInput.prototype.selectionInEditor = function () {
	  var sel = window.getSelection();
	  if (!sel.rangeCount) { return false }
	  var node = sel.getRangeAt(0).commonAncestorContainer;
	  return contains(this.div, node)
	};
	
	ContentEditableInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor") {
	    if (!this.selectionInEditor())
	      { this.showSelection(this.prepareSelection(), true); }
	    this.div.focus();
	  }
	};
	ContentEditableInput.prototype.blur = function () { this.div.blur(); };
	ContentEditableInput.prototype.getField = function () { return this.div };
	
	ContentEditableInput.prototype.supportsTouch = function () { return true };
	
	ContentEditableInput.prototype.receivedFocus = function () {
	  var input = this;
	  if (this.selectionInEditor())
	    { this.pollSelection(); }
	  else
	    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }
	
	  function poll() {
	    if (input.cm.state.focused) {
	      input.pollSelection();
	      input.polling.set(input.cm.options.pollInterval, poll);
	    }
	  }
	  this.polling.set(this.cm.options.pollInterval, poll);
	};
	
	ContentEditableInput.prototype.selectionChanged = function () {
	  var sel = window.getSelection();
	  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
	};
	
	ContentEditableInput.prototype.pollSelection = function () {
	  if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
	  var sel = window.getSelection(), cm = this.cm;
	  // On Android Chrome (version 56, at least), backspacing into an
	  // uneditable block element will put the cursor in that element,
	  // and then, because it's not editable, hide the virtual keyboard.
	  // Because Android doesn't allow us to actually detect backspace
	  // presses in a sane way, this code checks for when that happens
	  // and simulates a backspace press in this case.
	  if (android && chrome && this.cm.options.gutters.length && isInGutter(sel.anchorNode)) {
	    this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
	    this.blur();
	    this.focus();
	    return
	  }
	  if (this.composing) { return }
	  this.rememberSelection();
	  var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	  var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	  if (anchor && head) { runInOp(cm, function () {
	    setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	    if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
	  }); }
	};
	
	ContentEditableInput.prototype.pollContent = function () {
	  if (this.readDOMTimeout != null) {
	    clearTimeout(this.readDOMTimeout);
	    this.readDOMTimeout = null;
	  }
	
	  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	  var from = sel.from(), to = sel.to();
	  if (from.ch == 0 && from.line > cm.firstLine())
	    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
	  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
	    { to = Pos(to.line + 1, 0); }
	  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }
	
	  var fromIndex, fromLine, fromNode;
	  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	    fromLine = lineNo(display.view[0].line);
	    fromNode = display.view[0].node;
	  } else {
	    fromLine = lineNo(display.view[fromIndex].line);
	    fromNode = display.view[fromIndex - 1].node.nextSibling;
	  }
	  var toIndex = findViewIndex(cm, to.line);
	  var toLine, toNode;
	  if (toIndex == display.view.length - 1) {
	    toLine = display.viewTo - 1;
	    toNode = display.lineDiv.lastChild;
	  } else {
	    toLine = lineNo(display.view[toIndex + 1].line) - 1;
	    toNode = display.view[toIndex + 1].node.previousSibling;
	  }
	
	  if (!fromNode) { return false }
	  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	  while (newText.length > 1 && oldText.length > 1) {
	    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	    else { break }
	  }
	
	  var cutFront = 0, cutEnd = 0;
	  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	    { ++cutFront; }
	  var newBot = lst(newText), oldBot = lst(oldText);
	  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                           oldBot.length - (oldText.length == 1 ? cutFront : 0));
	  while (cutEnd < maxCutEnd &&
	         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	    { ++cutEnd; }
	  // Try to move start of change to start of selection if ambiguous
	  if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
	    while (cutFront && cutFront > from.ch &&
	           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
	      cutFront--;
	      cutEnd++;
	    }
	  }
	
	  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
	  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
	
	  var chFrom = Pos(fromLine, cutFront);
	  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	    replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	    return true
	  }
	};
	
	ContentEditableInput.prototype.ensurePolled = function () {
	  this.forceCompositionEnd();
	};
	ContentEditableInput.prototype.reset = function () {
	  this.forceCompositionEnd();
	};
	ContentEditableInput.prototype.forceCompositionEnd = function () {
	  if (!this.composing) { return }
	  clearTimeout(this.readDOMTimeout);
	  this.composing = null;
	  this.updateFromDOM();
	  this.div.blur();
	  this.div.focus();
	};
	ContentEditableInput.prototype.readFromDOMSoon = function () {
	    var this$1 = this;
	
	  if (this.readDOMTimeout != null) { return }
	  this.readDOMTimeout = setTimeout(function () {
	    this$1.readDOMTimeout = null;
	    if (this$1.composing) {
	      if (this$1.composing.done) { this$1.composing = null; }
	      else { return }
	    }
	    this$1.updateFromDOM();
	  }, 80);
	};
	
	ContentEditableInput.prototype.updateFromDOM = function () {
	    var this$1 = this;
	
	  if (this.cm.isReadOnly() || !this.pollContent())
	    { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
	};
	
	ContentEditableInput.prototype.setUneditable = function (node) {
	  node.contentEditable = "false";
	};
	
	ContentEditableInput.prototype.onKeyPress = function (e) {
	  if (e.charCode == 0) { return }
	  e.preventDefault();
	  if (!this.cm.isReadOnly())
	    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
	};
	
	ContentEditableInput.prototype.readOnlyChanged = function (val) {
	  this.div.contentEditable = String(val != "nocursor");
	};
	
	ContentEditableInput.prototype.onContextMenu = function () {};
	ContentEditableInput.prototype.resetPosition = function () {};
	
	ContentEditableInput.prototype.needsContentAttribute = true;
	
	function posToDOM(cm, pos) {
	  var view = findViewForLine(cm, pos.line);
	  if (!view || view.hidden) { return null }
	  var line = getLine(cm.doc, pos.line);
	  var info = mapFromLineView(view, line, pos.line);
	
	  var order = getOrder(line, cm.doc.direction), side = "left";
	  if (order) {
	    var partPos = getBidiPartAt(order, pos.ch);
	    side = partPos % 2 ? "right" : "left";
	  }
	  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	  result.offset = result.collapse == "right" ? result.end : result.start;
	  return result
	}
	
	function isInGutter(node) {
	  for (var scan = node; scan; scan = scan.parentNode)
	    { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
	  return false
	}
	
	function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }
	
	function domTextBetween(cm, from, to, fromLine, toLine) {
	  var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
	  function close() {
	    if (closing) {
	      text += lineSep;
	      closing = false;
	    }
	  }
	  function addText(str) {
	    if (str) {
	      close();
	      text += str;
	    }
	  }
	  function walk(node) {
	    if (node.nodeType == 1) {
	      var cmText = node.getAttribute("cm-text");
	      if (cmText != null) {
	        addText(cmText || node.textContent.replace(/\u200b/g, ""));
	        return
	      }
	      var markerID = node.getAttribute("cm-marker"), range$$1;
	      if (markerID) {
	        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	        if (found.length && (range$$1 = found[0].find()))
	          { addText(getBetween(cm.doc, range$$1.from, range$$1.to).join(lineSep)); }
	        return
	      }
	      if (node.getAttribute("contenteditable") == "false") { return }
	      var isBlock = /^(pre|div|p)$/i.test(node.nodeName);
	      if (isBlock) { close(); }
	      for (var i = 0; i < node.childNodes.length; i++)
	        { walk(node.childNodes[i]); }
	      if (isBlock) { closing = true; }
	    } else if (node.nodeType == 3) {
	      addText(node.nodeValue);
	    }
	  }
	  for (;;) {
	    walk(from);
	    if (from == to) { break }
	    from = from.nextSibling;
	  }
	  return text
	}
	
	function domToPos(cm, node, offset) {
	  var lineNode;
	  if (node == cm.display.lineDiv) {
	    lineNode = cm.display.lineDiv.childNodes[offset];
	    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
	    node = null; offset = 0;
	  } else {
	    for (lineNode = node;; lineNode = lineNode.parentNode) {
	      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
	      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
	    }
	  }
	  for (var i = 0; i < cm.display.view.length; i++) {
	    var lineView = cm.display.view[i];
	    if (lineView.node == lineNode)
	      { return locateNodeInLineView(lineView, node, offset) }
	  }
	}
	
	function locateNodeInLineView(lineView, node, offset) {
	  var wrapper = lineView.text.firstChild, bad = false;
	  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
	  if (node == wrapper) {
	    bad = true;
	    node = wrapper.childNodes[offset];
	    offset = 0;
	    if (!node) {
	      var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	      return badPos(Pos(lineNo(line), line.text.length), bad)
	    }
	  }
	
	  var textNode = node.nodeType == 3 ? node : null, topNode = node;
	  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	    textNode = node.firstChild;
	    if (offset) { offset = textNode.nodeValue.length; }
	  }
	  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
	  var measure = lineView.measure, maps = measure.maps;
	
	  function find(textNode, topNode, offset) {
	    for (var i = -1; i < (maps ? maps.length : 0); i++) {
	      var map$$1 = i < 0 ? measure.map : maps[i];
	      for (var j = 0; j < map$$1.length; j += 3) {
	        var curNode = map$$1[j + 2];
	        if (curNode == textNode || curNode == topNode) {
	          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	          var ch = map$$1[j] + offset;
	          if (offset < 0 || curNode != textNode) { ch = map$$1[j + (offset ? 1 : 0)]; }
	          return Pos(line, ch)
	        }
	      }
	    }
	  }
	  var found = find(textNode, topNode, offset);
	  if (found) { return badPos(found, bad) }
	
	  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	    found = find(after, after.firstChild, 0);
	    if (found)
	      { return badPos(Pos(found.line, found.ch - dist), bad) }
	    else
	      { dist += after.textContent.length; }
	  }
	  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
	    found = find(before, before.firstChild, -1);
	    if (found)
	      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
	    else
	      { dist$1 += before.textContent.length; }
	  }
	}
	
	// TEXTAREA INPUT STYLE
	
	var TextareaInput = function(cm) {
	  this.cm = cm;
	  // See input.poll and input.reset
	  this.prevInput = "";
	
	  // Flag that indicates whether we expect input to appear real soon
	  // now (after some event like 'keypress' or 'input') and are
	  // polling intensively.
	  this.pollingFast = false;
	  // Self-resetting timeout for the poller
	  this.polling = new Delayed();
	  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	  this.hasSelection = false;
	  this.composing = null;
	};
	
	TextareaInput.prototype.init = function (display) {
	    var this$1 = this;
	
	  var input = this, cm = this.cm;
	
	  // Wraps and hides input textarea
	  var div = this.wrapper = hiddenTextarea();
	  // The semihidden textarea that is focused when the editor is
	  // focused, and receives input.
	  var te = this.textarea = div.firstChild;
	  display.wrapper.insertBefore(div, display.wrapper.firstChild);
	
	  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	  if (ios) { te.style.width = "0px"; }
	
	  on(te, "input", function () {
	    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
	    input.poll();
	  });
	
	  on(te, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
	
	    cm.state.pasteIncoming = true;
	    input.fastPoll();
	  });
	
	  function prepareCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()});
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm);
	      setLastCopied({lineWise: true, text: ranges.text});
	      if (e.type == "cut") {
	        cm.setSelections(ranges.ranges, null, sel_dontScroll);
	      } else {
	        input.prevInput = "";
	        te.value = ranges.text.join("\n");
	        selectInput(te);
	      }
	    }
	    if (e.type == "cut") { cm.state.cutIncoming = true; }
	  }
	  on(te, "cut", prepareCopyCut);
	  on(te, "copy", prepareCopyCut);
	
	  on(display.scroller, "paste", function (e) {
	    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
	    cm.state.pasteIncoming = true;
	    input.focus();
	  });
	
	  // Prevent normal selection in the editor (we handle our own)
	  on(display.lineSpace, "selectstart", function (e) {
	    if (!eventInWidget(display, e)) { e_preventDefault(e); }
	  });
	
	  on(te, "compositionstart", function () {
	    var start = cm.getCursor("from");
	    if (input.composing) { input.composing.range.clear(); }
	    input.composing = {
	      start: start,
	      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	    };
	  });
	  on(te, "compositionend", function () {
	    if (input.composing) {
	      input.poll();
	      input.composing.range.clear();
	      input.composing = null;
	    }
	  });
	};
	
	TextareaInput.prototype.prepareSelection = function () {
	  // Redraw the selection and/or cursor
	  var cm = this.cm, display = cm.display, doc = cm.doc;
	  var result = prepareSelection(cm);
	
	  // Move the hidden textarea near the cursor to prevent scrolling artifacts
	  if (cm.options.moveInputWithCursor) {
	    var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                        headPos.top + lineOff.top - wrapOff.top));
	    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                         headPos.left + lineOff.left - wrapOff.left));
	  }
	
	  return result
	};
	
	TextareaInput.prototype.showSelection = function (drawn) {
	  var cm = this.cm, display = cm.display;
	  removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	  removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	  if (drawn.teTop != null) {
	    this.wrapper.style.top = drawn.teTop + "px";
	    this.wrapper.style.left = drawn.teLeft + "px";
	  }
	};
	
	// Reset the input to correspond to the selection (or to be empty,
	// when not typing and nothing is selected)
	TextareaInput.prototype.reset = function (typing) {
	  if (this.contextMenuPending || this.composing) { return }
	  var cm = this.cm;
	  if (cm.somethingSelected()) {
	    this.prevInput = "";
	    var content = cm.getSelection();
	    this.textarea.value = content;
	    if (cm.state.focused) { selectInput(this.textarea); }
	    if (ie && ie_version >= 9) { this.hasSelection = content; }
	  } else if (!typing) {
	    this.prevInput = this.textarea.value = "";
	    if (ie && ie_version >= 9) { this.hasSelection = null; }
	  }
	};
	
	TextareaInput.prototype.getField = function () { return this.textarea };
	
	TextareaInput.prototype.supportsTouch = function () { return false };
	
	TextareaInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	    try { this.textarea.focus(); }
	    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	  }
	};
	
	TextareaInput.prototype.blur = function () { this.textarea.blur(); };
	
	TextareaInput.prototype.resetPosition = function () {
	  this.wrapper.style.top = this.wrapper.style.left = 0;
	};
	
	TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };
	
	// Poll for input changes, using the normal rate of polling. This
	// runs as long as the editor is focused.
	TextareaInput.prototype.slowPoll = function () {
	    var this$1 = this;
	
	  if (this.pollingFast) { return }
	  this.polling.set(this.cm.options.pollInterval, function () {
	    this$1.poll();
	    if (this$1.cm.state.focused) { this$1.slowPoll(); }
	  });
	};
	
	// When an event has just come in that is likely to add or change
	// something in the input textarea, we poll faster, to ensure that
	// the change appears on the screen quickly.
	TextareaInput.prototype.fastPoll = function () {
	  var missed = false, input = this;
	  input.pollingFast = true;
	  function p() {
	    var changed = input.poll();
	    if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	    else {input.pollingFast = false; input.slowPoll();}
	  }
	  input.polling.set(20, p);
	};
	
	// Read input from the textarea, and update the document to match.
	// When something is selected, it is present in the textarea, and
	// selected (unless it is huge, in which case a placeholder is
	// used). When nothing is selected, the cursor sits after previously
	// seen text (can be empty), which is stored in prevInput (we must
	// not reset the textarea when typing, because that breaks IME).
	TextareaInput.prototype.poll = function () {
	    var this$1 = this;
	
	  var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	  // Since this is called a *lot*, try to bail out as cheaply as
	  // possible when it is clear that nothing happened. hasSelection
	  // will be the case when there is a lot of text in the textarea,
	  // in which case reading its value would be expensive.
	  if (this.contextMenuPending || !cm.state.focused ||
	      (hasSelection(input) && !prevInput && !this.composing) ||
	      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	    { return false }
	
	  var text = input.value;
	  // If nothing changed, bail.
	  if (text == prevInput && !cm.somethingSelected()) { return false }
	  // Work around nonsensical selection resetting in IE9/10, and
	  // inexplicable appearance of private area unicode characters on
	  // some key combos in Mac (#2689).
	  if (ie && ie_version >= 9 && this.hasSelection === text ||
	      mac && /[\uf700-\uf7ff]/.test(text)) {
	    cm.display.input.reset();
	    return false
	  }
	
	  if (cm.doc.sel == cm.display.selForContextMenu) {
	    var first = text.charCodeAt(0);
	    if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
	    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
	  }
	  // Find the part of the input that is actually new
	  var same = 0, l = Math.min(prevInput.length, text.length);
	  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }
	
	  runInOp(cm, function () {
	    applyTextInput(cm, text.slice(same), prevInput.length - same,
	                   null, this$1.composing ? "*compose" : null);
	
	    // Don't leave long text in the textarea, since it makes further polling slow
	    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
	    else { this$1.prevInput = text; }
	
	    if (this$1.composing) {
	      this$1.composing.range.clear();
	      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
	                                         {className: "CodeMirror-composing"});
	    }
	  });
	  return true
	};
	
	TextareaInput.prototype.ensurePolled = function () {
	  if (this.pollingFast && this.poll()) { this.pollingFast = false; }
	};
	
	TextareaInput.prototype.onKeyPress = function () {
	  if (ie && ie_version >= 9) { this.hasSelection = null; }
	  this.fastPoll();
	};
	
	TextareaInput.prototype.onContextMenu = function (e) {
	  var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	  if (!pos || presto) { return } // Opera is difficult.
	
	  // Reset the current text selection only if the click is done outside of the selection
	  // and 'resetSelectionOnContextMenu' option is true.
	  var reset = cm.options.resetSelectionOnContextMenu;
	  if (reset && cm.doc.sel.contains(pos) == -1)
	    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }
	
	  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	  input.wrapper.style.cssText = "position: absolute";
	  var wrapperBox = input.wrapper.getBoundingClientRect();
	  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	  var oldScrollY;
	  if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
	  display.input.focus();
	  if (webkit) { window.scrollTo(null, oldScrollY); }
	  display.input.reset();
	  // Adds "Select all" to context menu in FF
	  if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
	  input.contextMenuPending = true;
	  display.selForContextMenu = cm.doc.sel;
	  clearTimeout(display.detectingSelectAll);
	
	  // Select-all will be greyed out if there's nothing to select, so
	  // this adds a zero-width space so that we can later check whether
	  // it got selected.
	  function prepareSelectAllHack() {
	    if (te.selectionStart != null) {
	      var selected = cm.somethingSelected();
	      var extval = "\u200b" + (selected ? te.value : "");
	      te.value = "\u21da"; // Used to catch context-menu undo
	      te.value = extval;
	      input.prevInput = selected ? "" : "\u200b";
	      te.selectionStart = 1; te.selectionEnd = extval.length;
	      // Re-set this, in case some other handler touched the
	      // selection in the meantime.
	      display.selForContextMenu = cm.doc.sel;
	    }
	  }
	  function rehide() {
	    input.contextMenuPending = false;
	    input.wrapper.style.cssText = oldWrapperCSS;
	    te.style.cssText = oldCSS;
	    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }
	
	    // Try to detect the user choosing select-all
	    if (te.selectionStart != null) {
	      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
	      var i = 0, poll = function () {
	        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	            te.selectionEnd > 0 && input.prevInput == "\u200b") {
	          operation(cm, selectAll)(cm);
	        } else if (i++ < 10) {
	          display.detectingSelectAll = setTimeout(poll, 500);
	        } else {
	          display.selForContextMenu = null;
	          display.input.reset();
	        }
	      };
	      display.detectingSelectAll = setTimeout(poll, 200);
	    }
	  }
	
	  if (ie && ie_version >= 9) { prepareSelectAllHack(); }
	  if (captureRightClick) {
	    e_stop(e);
	    var mouseup = function () {
	      off(window, "mouseup", mouseup);
	      setTimeout(rehide, 20);
	    };
	    on(window, "mouseup", mouseup);
	  } else {
	    setTimeout(rehide, 50);
	  }
	};
	
	TextareaInput.prototype.readOnlyChanged = function (val) {
	  if (!val) { this.reset(); }
	  this.textarea.disabled = val == "nocursor";
	};
	
	TextareaInput.prototype.setUneditable = function () {};
	
	TextareaInput.prototype.needsContentAttribute = false;
	
	function fromTextArea(textarea, options) {
	  options = options ? copyObj(options) : {};
	  options.value = textarea.value;
	  if (!options.tabindex && textarea.tabIndex)
	    { options.tabindex = textarea.tabIndex; }
	  if (!options.placeholder && textarea.placeholder)
	    { options.placeholder = textarea.placeholder; }
	  // Set autofocus to true if this textarea is focused, or if it has
	  // autofocus and no other element is focused.
	  if (options.autofocus == null) {
	    var hasFocus = activeElt();
	    options.autofocus = hasFocus == textarea ||
	      textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	  }
	
	  function save() {textarea.value = cm.getValue();}
	
	  var realSubmit;
	  if (textarea.form) {
	    on(textarea.form, "submit", save);
	    // Deplorable hack to make the submit method do the right thing.
	    if (!options.leaveSubmitMethodAlone) {
	      var form = textarea.form;
	      realSubmit = form.submit;
	      try {
	        var wrappedSubmit = form.submit = function () {
	          save();
	          form.submit = realSubmit;
	          form.submit();
	          form.submit = wrappedSubmit;
	        };
	      } catch(e) {}
	    }
	  }
	
	  options.finishInit = function (cm) {
	    cm.save = save;
	    cm.getTextArea = function () { return textarea; };
	    cm.toTextArea = function () {
	      cm.toTextArea = isNaN; // Prevent this from being ran twice
	      save();
	      textarea.parentNode.removeChild(cm.getWrapperElement());
	      textarea.style.display = "";
	      if (textarea.form) {
	        off(textarea.form, "submit", save);
	        if (typeof textarea.form.submit == "function")
	          { textarea.form.submit = realSubmit; }
	      }
	    };
	  };
	
	  textarea.style.display = "none";
	  var cm = CodeMirror$1(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
	    options);
	  return cm
	}
	
	function addLegacyProps(CodeMirror) {
	  CodeMirror.off = off;
	  CodeMirror.on = on;
	  CodeMirror.wheelEventPixels = wheelEventPixels;
	  CodeMirror.Doc = Doc;
	  CodeMirror.splitLines = splitLinesAuto;
	  CodeMirror.countColumn = countColumn;
	  CodeMirror.findColumn = findColumn;
	  CodeMirror.isWordChar = isWordCharBasic;
	  CodeMirror.Pass = Pass;
	  CodeMirror.signal = signal;
	  CodeMirror.Line = Line;
	  CodeMirror.changeEnd = changeEnd;
	  CodeMirror.scrollbarModel = scrollbarModel;
	  CodeMirror.Pos = Pos;
	  CodeMirror.cmpPos = cmp;
	  CodeMirror.modes = modes;
	  CodeMirror.mimeModes = mimeModes;
	  CodeMirror.resolveMode = resolveMode;
	  CodeMirror.getMode = getMode;
	  CodeMirror.modeExtensions = modeExtensions;
	  CodeMirror.extendMode = extendMode;
	  CodeMirror.copyState = copyState;
	  CodeMirror.startState = startState;
	  CodeMirror.innerMode = innerMode;
	  CodeMirror.commands = commands;
	  CodeMirror.keyMap = keyMap;
	  CodeMirror.keyName = keyName;
	  CodeMirror.isModifierKey = isModifierKey;
	  CodeMirror.lookupKey = lookupKey;
	  CodeMirror.normalizeKeyMap = normalizeKeyMap;
	  CodeMirror.StringStream = StringStream;
	  CodeMirror.SharedTextMarker = SharedTextMarker;
	  CodeMirror.TextMarker = TextMarker;
	  CodeMirror.LineWidget = LineWidget;
	  CodeMirror.e_preventDefault = e_preventDefault;
	  CodeMirror.e_stopPropagation = e_stopPropagation;
	  CodeMirror.e_stop = e_stop;
	  CodeMirror.addClass = addClass;
	  CodeMirror.contains = contains;
	  CodeMirror.rmClass = rmClass;
	  CodeMirror.keyNames = keyNames;
	}
	
	// EDITOR CONSTRUCTOR
	
	defineOptions(CodeMirror$1);
	
	addEditorMethods(CodeMirror$1);
	
	// Set up methods on CodeMirror's prototype to redirect to the editor's document.
	var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	  { CodeMirror$1.prototype[prop] = (function(method) {
	    return function() {return method.apply(this.doc, arguments)}
	  })(Doc.prototype[prop]); } }
	
	eventMixin(Doc);
	
	// INPUT HANDLING
	
	CodeMirror$1.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};
	
	// MODE DEFINITION AND QUERYING
	
	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	CodeMirror$1.defineMode = function(name/*, mode, …*/) {
	  if (!CodeMirror$1.defaults.mode && name != "null") { CodeMirror$1.defaults.mode = name; }
	  defineMode.apply(this, arguments);
	};
	
	CodeMirror$1.defineMIME = defineMIME;
	
	// Minimal default mode.
	CodeMirror$1.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
	CodeMirror$1.defineMIME("text/plain", "null");
	
	// EXTENSIONS
	
	CodeMirror$1.defineExtension = function (name, func) {
	  CodeMirror$1.prototype[name] = func;
	};
	CodeMirror$1.defineDocExtension = function (name, func) {
	  Doc.prototype[name] = func;
	};
	
	CodeMirror$1.fromTextArea = fromTextArea;
	
	addLegacyProps(CodeMirror$1);
	
	CodeMirror$1.version = "5.28.0";
	
	return CodeMirror$1;
	
	})));


/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(682);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(445)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(682, function() {
				var newContent = __webpack_require__(682);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(444)();
	// imports
	
	
	// module
	exports.push([module.id, ".CodeMirror{font-family:monospace;height:300px;color:#000}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-animate-fat-cursor{width:auto;border:0;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:\"\"}span.CodeMirror-selectedtext{background:none}.cm-s-monokai.CodeMirror{background:#272822;color:#f8f8f2}.cm-s-monokai div.CodeMirror-selected{background:#49483e}.cm-s-monokai .CodeMirror-line::selection,.cm-s-monokai .CodeMirror-line>span::selection,.cm-s-monokai .CodeMirror-line>span>span::selection{background:rgba(73,72,62,.99)}.cm-s-monokai .CodeMirror-line::-moz-selection,.cm-s-monokai .CodeMirror-line>span::-moz-selection,.cm-s-monokai .CodeMirror-line>span>span::-moz-selection{background:rgba(73,72,62,.99)}.cm-s-monokai .CodeMirror-gutters{background:#272822;border-right:0}.cm-s-monokai .CodeMirror-guttermarker{color:#fff}.cm-s-monokai .CodeMirror-guttermarker-subtle,.cm-s-monokai .CodeMirror-linenumber{color:#d0d0d0}.cm-s-monokai .CodeMirror-cursor{border-left:1px solid #f8f8f0}.cm-s-monokai span.cm-comment{color:#75715e}.cm-s-monokai span.cm-atom,.cm-s-monokai span.cm-number{color:#ae81ff}.cm-s-monokai span.cm-attribute,.cm-s-monokai span.cm-property{color:#a6e22e}.cm-s-monokai span.cm-keyword{color:#f92672}.cm-s-monokai span.cm-builtin{color:#66d9ef}.cm-s-monokai span.cm-string{color:#e6db74}.cm-s-monokai span.cm-variable{color:#f8f8f2}.cm-s-monokai span.cm-variable-2{color:#9effff}.cm-s-monokai span.cm-type,.cm-s-monokai span.cm-variable-3{color:#66d9ef}.cm-s-monokai span.cm-def{color:#fd971f}.cm-s-monokai span.cm-bracket{color:#f8f8f2}.cm-s-monokai span.cm-tag{color:#f92672}.cm-s-monokai span.cm-header,.cm-s-monokai span.cm-link{color:#ae81ff}.cm-s-monokai span.cm-error{background:#f92672;color:#f8f8f0}.cm-s-monokai .CodeMirror-activeline-background{background:#373831}.cm-s-monokai .CodeMirror-matchingbracket{text-decoration:underline;color:#fff!important}.CodeMirror{height:auto}", "", {"version":3,"sources":["/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/Leaf/leaves/node_modules/codemirror/lib/codemirror.css","/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/Leaf/leaves/node_modules/codemirror/theme/monokai.css","/home/isaac/git/LeafletServer/LeafletClient/src/routes/Leaflet/components/Leaf/leaves/src/routes/Leaflet/components/Leaf/leaves/codeLeaf.scss"],"names":[],"mappings":"AAEA,YAEE,sBAAsB,aACT,UACD,CACb,kBAKC,aAAc,CACf,gBAEC,aAAc,CACf,uDAGC,qBAAuB,CACxB,oBAKC,4BAA4B,yBACH,kBACN,CACpB,uBAGC,oBAAoB,eACL,iBACE,WACN,kBACQ,CACpB,yBAE0B,UAAY,CAAK,gCACV,UAAW,CAAK,mBAKhD,2BAA4B,kBACV,OACV,CACT,2CAGC,4BAA6B,CAC9B,kCAEC,WAAW,mBACS,eACJ,CACjB,sCAEC,SAAU,CACX,uBAGC,WAAW,SACF,wCAG+B,qBAClB,CACvB,iBAaC,IAAM,4BAA6B,CAAA,CAC/B,QAMI,qBAAqB,uBAA2B,CAAK,mBAG7D,kBAAkB,OACX,QAAW,UAAa,aAAgB,eAC/B,CACjB,kBAEC,2BAA2B,MACrB,SAAY,iBACA,CACnB,yBAIyB,UAAW,CAAI,wBAChB,UAAW,CAAI,aAC1B,UAAW,CAAI,aACf,UAAW,CAAI,sBACL,eAAiB,CAAI,OACrC,iBAAkB,CAAI,SACpB,yBAA0B,CAAI,kBACrB,4BAA6B,CAAI,0BAEzB,UAAW,CAAI,uBAClB,UAAW,CAAI,yBACb,UAAW,CAAI,sBAClB,UAAW,CAAI,6BAKR,UAAW,CAAI,oDACS,UAAW,CAAI,0BAC1C,UAAW,CAAI,yBAChB,UAAW,CAAI,2BACb,UAAW,CAAI,mDAEd,UAAW,CAAI,0BACjB,UAAW,CAAI,0BACf,UAAW,CAAI,sBACnB,UAAW,CAAI,4BACT,UAAW,CAAI,qBACtB,UAAW,CAAI,uBACb,UAAW,CAAI,wCAGtB,SAAW,CAAI,sBAER,uBAAwB,CAAK,+CAIL,UAAW,CAAI,kDACZ,UAAW,CAAI,wBACxC,6BAAiC,CAAI,kCAC5B,kBAAmB,CAAI,YAQxD,kBAAkB,gBACF,eACC,CAClB,mBAGC,0BAA2B,oBAGP,mBAAsB,oBACtB,YACR,aACC,iBACK,CACnB,kBAEC,kBAAkB,mCACkB,CACrC,qGAMC,kBAAkB,UACR,YACG,CACd,uBAEC,QAAQ,MAAS,kBACC,iBACA,CACnB,uBAEC,SAAS,OAAU,kBACD,iBACA,CACnB,6BAEC,QAAQ,QAAY,CACrB,0BAEC,OAAO,QAAY,CACpB,oBAGC,kBAAkB,OAAU,MAAS,gBACrB,SACN,CACX,mBAEC,mBAAmB,YACP,qBACS,mBACF,mBACC,CACrB,2BAEC,kBAAkB,UACR,0BACiB,qBACJ,CACxB,8BAEC,kBAAkB,MACZ,SAAY,SACR,CACX,uBAEC,kBAAkB,eACH,SACL,CACX,uCACwC,4BAA8B,CAAG,4CAC5B,4BAA8B,CAAG,kBAG7E,YAAY,cACG,CAChB,gBAGoD,gBAAgB,eACpD,uBACQ,oBACH,kBACF,SACT,gBACO,iBACC,oBACG,cACN,UACJ,kBACQ,iBACD,wCACuB,iCAEN,CACnC,qBAEC,qBAAqB,qBACA,iBACH,CACnB,2BAGC,kBAAkB,OACX,QAAW,MAAS,SAAY,SAC7B,CACX,uBAGC,kBAAkB,UACR,aACI,CACf,oBAIqB,aAAc,CAAK,iBAGvC,YAAa,CACd,mGASC,sBAAuB,CACxB,oBAGC,kBAAkB,WACP,SACF,gBACO,iBACE,CACnB,mBAGC,kBAAkB,mBACE,CACrB,wBACyB,eAAgB,CAAK,uBAG7C,kBAAkB,kBACA,SACR,CACX,sEAMC,kBAAmB,CACpB,qBAEsB,kBAAmB,CAAK,yCACJ,kBAAmB,CAAK,sBAC3C,gBAAiB,CAAK,mGAC+D,kBAAmB,CAAK,kHACT,kBAAmB,CAAK,cAGlJ,gBAAgB,6BACiB,CAClC,iBAGkB,kBAAmB,CAAK,aAIzC,mCACE,iBAAkB,CACnB,CAAA,wBAIuB,UAAW,CAAK,6BAGX,eAAgB,CAAK,yBCjVzB,mBAAmB,aAAiB,CAAK,sCAC5B,kBAAmB,CAAK,6IACuF,6BAAiC,CAAI,4JACtB,6BAAiC,CAAI,kCACvK,mBAAmB,cAAoB,CAAK,uCACvC,UAAY,CAAK,mFAEnB,aAAc,CAAK,iCACvB,6BAA8B,CAAK,8BAEtC,aAAc,CAAK,wDAEpB,aAAc,CAAK,+DAEgB,aAAc,CAAK,8BACrD,aAAc,CAAK,8BACnB,aAAc,CAAK,6BACpB,aAAc,CAAK,+BAEjB,aAAc,CAAK,iCACjB,aAAc,CAAK,4DACS,aAAc,CAAK,0BACtD,aAAc,CAAK,8BACf,aAAc,CAAK,0BACvB,aAAc,CAAK,wDAElB,aAAc,CAAK,4BAClB,mBAAmB,aAAiB,CAAK,gDAErB,kBAAmB,CAAK,0CAExE,0BAA0B,oBACH,CACxB,YC/BC,WAAY,CACb","file":"codeLeaf.scss","sourcesContent":["/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n","/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","@import '../../../../../../node_modules/codemirror/lib/codemirror';\n@import '../../../../../../node_modules/codemirror/theme/monokai';\n\n.CodeMirror {\n  height: auto;\n}\n"],"sourceRoot":""}]);
	
	// exports


/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(680));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";
	
	function expressionAllowed(stream, state, backUp) {
	  return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
	    (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
	}
	
	CodeMirror.defineMode("javascript", function(config, parserConfig) {
	  var indentUnit = config.indentUnit;
	  var statementIndent = parserConfig.statementIndent;
	  var jsonldMode = parserConfig.jsonld;
	  var jsonMode = parserConfig.json || jsonldMode;
	  var isTS = parserConfig.typescript;
	  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
	
	  // Tokenizer
	
	  var keywords = function(){
	    function kw(type) {return {type: type, style: "keyword"};}
	    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
	    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
	
	    var jsKeywords = {
	      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
	      "return": C, "break": C, "continue": C, "new": kw("new"), "delete": C, "throw": C, "debugger": C,
	      "var": kw("var"), "const": kw("var"), "let": kw("var"),
	      "function": kw("function"), "catch": kw("catch"),
	      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
	      "in": operator, "typeof": operator, "instanceof": operator,
	      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
	      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
	      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
	      "await": C
	    };
	
	    // Extend the 'normal' keywords with the TypeScript language extensions
	    if (isTS) {
	      var type = {type: "variable", style: "type"};
	      var tsKeywords = {
	        // object-like things
	        "interface": kw("class"),
	        "implements": C,
	        "namespace": C,
	        "module": kw("module"),
	        "enum": kw("module"),
	
	        // scope modifiers
	        "public": kw("modifier"),
	        "private": kw("modifier"),
	        "protected": kw("modifier"),
	        "abstract": kw("modifier"),
	
	        // types
	        "string": type, "number": type, "boolean": type, "any": type
	      };
	
	      for (var attr in tsKeywords) {
	        jsKeywords[attr] = tsKeywords[attr];
	      }
	    }
	
	    return jsKeywords;
	  }();
	
	  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
	  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
	
	  function readRegexp(stream) {
	    var escaped = false, next, inSet = false;
	    while ((next = stream.next()) != null) {
	      if (!escaped) {
	        if (next == "/" && !inSet) return;
	        if (next == "[") inSet = true;
	        else if (inSet && next == "]") inSet = false;
	      }
	      escaped = !escaped && next == "\\";
	    }
	  }
	
	  // Used as scratch variables to communicate multiple values without
	  // consing up tons of objects.
	  var type, content;
	  function ret(tp, style, cont) {
	    type = tp; content = cont;
	    return style;
	  }
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
	      return ret("number", "number");
	    } else if (ch == "." && stream.match("..")) {
	      return ret("spread", "meta");
	    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
	      return ret(ch);
	    } else if (ch == "=" && stream.eat(">")) {
	      return ret("=>", "operator");
	    } else if (ch == "0" && stream.eat(/x/i)) {
	      stream.eatWhile(/[\da-f]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/o/i)) {
	      stream.eatWhile(/[0-7]/i);
	      return ret("number", "number");
	    } else if (ch == "0" && stream.eat(/b/i)) {
	      stream.eatWhile(/[01]/i);
	      return ret("number", "number");
	    } else if (/\d/.test(ch)) {
	      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
	      return ret("number", "number");
	    } else if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      } else if (stream.eat("/")) {
	        stream.skipToEnd();
	        return ret("comment", "comment");
	      } else if (expressionAllowed(stream, state, 1)) {
	        readRegexp(stream);
	        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
	        return ret("regexp", "string-2");
	      } else {
	        stream.eatWhile(isOperatorChar);
	        return ret("operator", "operator", stream.current());
	      }
	    } else if (ch == "`") {
	      state.tokenize = tokenQuasi;
	      return tokenQuasi(stream, state);
	    } else if (ch == "#") {
	      stream.skipToEnd();
	      return ret("error", "error");
	    } else if (isOperatorChar.test(ch)) {
	      if (ch != ">" || !state.lexical || state.lexical.type != ">")
	        stream.eatWhile(isOperatorChar);
	      return ret("operator", "operator", stream.current());
	    } else if (wordRE.test(ch)) {
	      stream.eatWhile(wordRE);
	      var word = stream.current()
	      if (state.lastType != ".") {
	        if (keywords.propertyIsEnumerable(word)) {
	          var kw = keywords[word]
	          return ret(kw.type, kw.style, word)
	        }
	        if (word == "async" && stream.match(/^\s*[\(\w]/, false))
	          return ret("async", "keyword", word)
	      }
	      return ret("variable", "variable", word)
	    }
	  }
	
	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next;
	      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
	        state.tokenize = tokenBase;
	        return ret("jsonld-keyword", "meta");
	      }
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) break;
	        escaped = !escaped && next == "\\";
	      }
	      if (!escaped) state.tokenize = tokenBase;
	      return ret("string", "string");
	    };
	  }
	
	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return ret("comment", "comment");
	  }
	
	  function tokenQuasi(stream, state) {
	    var escaped = false, next;
	    while ((next = stream.next()) != null) {
	      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
	        state.tokenize = tokenBase;
	        break;
	      }
	      escaped = !escaped && next == "\\";
	    }
	    return ret("quasi", "string-2", stream.current());
	  }
	
	  var brackets = "([{}])";
	  // This is a crude lookahead trick to try and notice that we're
	  // parsing the argument patterns for a fat-arrow function before we
	  // actually hit the arrow token. It only works if the arrow is on
	  // the same line as the arguments and there's no strange noise
	  // (comments) in between. Fallback is to only notice when we hit the
	  // arrow, and not declare the arguments as locals for the arrow
	  // body.
	  function findFatArrow(stream, state) {
	    if (state.fatArrowAt) state.fatArrowAt = null;
	    var arrow = stream.string.indexOf("=>", stream.start);
	    if (arrow < 0) return;
	
	    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
	      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
	      if (m) arrow = m.index
	    }
	
	    var depth = 0, sawSomething = false;
	    for (var pos = arrow - 1; pos >= 0; --pos) {
	      var ch = stream.string.charAt(pos);
	      var bracket = brackets.indexOf(ch);
	      if (bracket >= 0 && bracket < 3) {
	        if (!depth) { ++pos; break; }
	        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
	      } else if (bracket >= 3 && bracket < 6) {
	        ++depth;
	      } else if (wordRE.test(ch)) {
	        sawSomething = true;
	      } else if (/["'\/]/.test(ch)) {
	        return;
	      } else if (sawSomething && !depth) {
	        ++pos;
	        break;
	      }
	    }
	    if (sawSomething && !depth) state.fatArrowAt = pos;
	  }
	
	  // Parser
	
	  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};
	
	  function JSLexical(indented, column, type, align, prev, info) {
	    this.indented = indented;
	    this.column = column;
	    this.type = type;
	    this.prev = prev;
	    this.info = info;
	    if (align != null) this.align = align;
	  }
	
	  function inScope(state, varname) {
	    for (var v = state.localVars; v; v = v.next)
	      if (v.name == varname) return true;
	    for (var cx = state.context; cx; cx = cx.prev) {
	      for (var v = cx.vars; v; v = v.next)
	        if (v.name == varname) return true;
	    }
	  }
	
	  function parseJS(state, style, type, content, stream) {
	    var cc = state.cc;
	    // Communicate our context to the combinators.
	    // (Less wasteful than consing up a hundred closures on every call.)
	    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;
	
	    if (!state.lexical.hasOwnProperty("align"))
	      state.lexical.align = true;
	
	    while(true) {
	      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
	      if (combinator(type, content)) {
	        while(cc.length && cc[cc.length - 1].lex)
	          cc.pop()();
	        if (cx.marked) return cx.marked;
	        if (type == "variable" && inScope(state, content)) return "variable-2";
	        return style;
	      }
	    }
	  }
	
	  // Combinator utils
	
	  var cx = {state: null, column: null, marked: null, cc: null};
	  function pass() {
	    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
	  }
	  function cont() {
	    pass.apply(null, arguments);
	    return true;
	  }
	  function register(varname) {
	    function inList(list) {
	      for (var v = list; v; v = v.next)
	        if (v.name == varname) return true;
	      return false;
	    }
	    var state = cx.state;
	    cx.marked = "def";
	    if (state.context) {
	      if (inList(state.localVars)) return;
	      state.localVars = {name: varname, next: state.localVars};
	    } else {
	      if (inList(state.globalVars)) return;
	      if (parserConfig.globalVars)
	        state.globalVars = {name: varname, next: state.globalVars};
	    }
	  }
	
	  // Combinators
	
	  var defaultVars = {name: "this", next: {name: "arguments"}};
	  function pushcontext() {
	    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
	    cx.state.localVars = defaultVars;
	  }
	  function popcontext() {
	    cx.state.localVars = cx.state.context.vars;
	    cx.state.context = cx.state.context.prev;
	  }
	  function pushlex(type, info) {
	    var result = function() {
	      var state = cx.state, indent = state.indented;
	      if (state.lexical.type == "stat") indent = state.lexical.indented;
	      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
	        indent = outer.indented;
	      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
	    };
	    result.lex = true;
	    return result;
	  }
	  function poplex() {
	    var state = cx.state;
	    if (state.lexical.prev) {
	      if (state.lexical.type == ")")
	        state.indented = state.lexical.indented;
	      state.lexical = state.lexical.prev;
	    }
	  }
	  poplex.lex = true;
	
	  function expect(wanted) {
	    function exp(type) {
	      if (type == wanted) return cont();
	      else if (wanted == ";") return pass();
	      else return cont(exp);
	    };
	    return exp;
	  }
	
	  function statement(type, value) {
	    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
	    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
	    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
	    if (type == "{") return cont(pushlex("}"), block, poplex);
	    if (type == ";") return cont();
	    if (type == "if") {
	      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
	        cx.state.cc.pop()();
	      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
	    }
	    if (type == "function") return cont(functiondef);
	    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
	    if (type == "variable") {
	      if (isTS && value == "type") {
	        cx.marked = "keyword"
	        return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
	      } else {
	        return cont(pushlex("stat"), maybelabel);
	      }
	    }
	    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"),
	                                      block, poplex, poplex);
	    if (type == "case") return cont(expression, expect(":"));
	    if (type == "default") return cont(expect(":"));
	    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
	                                     statement, poplex, popcontext);
	    if (type == "class") return cont(pushlex("form"), className, poplex);
	    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
	    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
	    if (type == "module") return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
	    if (type == "async") return cont(statement)
	    if (value == "@") return cont(expression, statement)
	    return pass(pushlex("stat"), expression, expect(";"), poplex);
	  }
	  function expression(type) {
	    return expressionInner(type, false);
	  }
	  function expressionNoComma(type) {
	    return expressionInner(type, true);
	  }
	  function parenExpr(type) {
	    if (type != "(") return pass()
	    return cont(pushlex(")"), expression, expect(")"), poplex)
	  }
	  function expressionInner(type, noComma) {
	    if (cx.state.fatArrowAt == cx.stream.start) {
	      var body = noComma ? arrowBodyNoComma : arrowBody;
	      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(pattern, ")"), poplex, expect("=>"), body, popcontext);
	      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
	    }
	
	    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
	    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
	    if (type == "function") return cont(functiondef, maybeop);
	    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
	    if (type == "keyword c" || type == "async") return cont(noComma ? maybeexpressionNoComma : maybeexpression);
	    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
	    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
	    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
	    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
	    if (type == "quasi") return pass(quasi, maybeop);
	    if (type == "new") return cont(maybeTarget(noComma));
	    return cont();
	  }
	  function maybeexpression(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expression);
	  }
	  function maybeexpressionNoComma(type) {
	    if (type.match(/[;\}\)\],]/)) return pass();
	    return pass(expressionNoComma);
	  }
	
	  function maybeoperatorComma(type, value) {
	    if (type == ",") return cont(expression);
	    return maybeoperatorNoComma(type, value, false);
	  }
	  function maybeoperatorNoComma(type, value, noComma) {
	    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
	    var expr = noComma == false ? expression : expressionNoComma;
	    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
	    if (type == "operator") {
	      if (/\+\+|--/.test(value)) return cont(me);
	      if (value == "?") return cont(expression, expect(":"), expr);
	      return cont(expr);
	    }
	    if (type == "quasi") { return pass(quasi, me); }
	    if (type == ";") return;
	    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
	    if (type == ".") return cont(property, me);
	    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
	    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
	  }
	  function quasi(type, value) {
	    if (type != "quasi") return pass();
	    if (value.slice(value.length - 2) != "${") return cont(quasi);
	    return cont(expression, continueQuasi);
	  }
	  function continueQuasi(type) {
	    if (type == "}") {
	      cx.marked = "string-2";
	      cx.state.tokenize = tokenQuasi;
	      return cont(quasi);
	    }
	  }
	  function arrowBody(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expression);
	  }
	  function arrowBodyNoComma(type) {
	    findFatArrow(cx.stream, cx.state);
	    return pass(type == "{" ? statement : expressionNoComma);
	  }
	  function maybeTarget(noComma) {
	    return function(type) {
	      if (type == ".") return cont(noComma ? targetNoComma : target);
	      else return pass(noComma ? expressionNoComma : expression);
	    };
	  }
	  function target(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
	  }
	  function targetNoComma(_, value) {
	    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
	  }
	  function maybelabel(type) {
	    if (type == ":") return cont(poplex, statement);
	    return pass(maybeoperatorComma, expect(";"), poplex);
	  }
	  function property(type) {
	    if (type == "variable") {cx.marked = "property"; return cont();}
	  }
	  function objprop(type, value) {
	    if (type == "async") {
	      cx.marked = "property";
	      return cont(objprop);
	    } else if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property";
	      if (value == "get" || value == "set") return cont(getterSetter);
	      return cont(afterprop);
	    } else if (type == "number" || type == "string") {
	      cx.marked = jsonldMode ? "property" : (cx.style + " property");
	      return cont(afterprop);
	    } else if (type == "jsonld-keyword") {
	      return cont(afterprop);
	    } else if (type == "modifier") {
	      return cont(objprop)
	    } else if (type == "[") {
	      return cont(expression, expect("]"), afterprop);
	    } else if (type == "spread") {
	      return cont(expression, afterprop);
	    } else if (type == ":") {
	      return pass(afterprop)
	    }
	  }
	  function getterSetter(type) {
	    if (type != "variable") return pass(afterprop);
	    cx.marked = "property";
	    return cont(functiondef);
	  }
	  function afterprop(type) {
	    if (type == ":") return cont(expressionNoComma);
	    if (type == "(") return pass(functiondef);
	  }
	  function commasep(what, end, sep) {
	    function proceed(type, value) {
	      if (sep ? sep.indexOf(type) > -1 : type == ",") {
	        var lex = cx.state.lexical;
	        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
	        return cont(function(type, value) {
	          if (type == end || value == end) return pass()
	          return pass(what)
	        }, proceed);
	      }
	      if (type == end || value == end) return cont();
	      return cont(expect(end));
	    }
	    return function(type, value) {
	      if (type == end || value == end) return cont();
	      return pass(what, proceed);
	    };
	  }
	  function contCommasep(what, end, info) {
	    for (var i = 3; i < arguments.length; i++)
	      cx.cc.push(arguments[i]);
	    return cont(pushlex(end, info), commasep(what, end), poplex);
	  }
	  function block(type) {
	    if (type == "}") return cont();
	    return pass(statement, block);
	  }
	  function maybetype(type, value) {
	    if (isTS) {
	      if (type == ":") return cont(typeexpr);
	      if (value == "?") return cont(maybetype);
	    }
	  }
	  function typeexpr(type) {
	    if (type == "variable") {cx.marked = "type"; return cont(afterType);}
	    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
	    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
	    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
	  }
	  function maybeReturnType(type) {
	    if (type == "=>") return cont(typeexpr)
	  }
	  function typeprop(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      cx.marked = "property"
	      return cont(typeprop)
	    } else if (value == "?") {
	      return cont(typeprop)
	    } else if (type == ":") {
	      return cont(typeexpr)
	    } else if (type == "[") {
	      return cont(expression, maybetype, expect("]"), typeprop)
	    }
	  }
	  function typearg(type) {
	    if (type == "variable") return cont(typearg)
	    else if (type == ":") return cont(typeexpr)
	  }
	  function afterType(type, value) {
	    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
	    if (value == "|" || type == ".") return cont(typeexpr)
	    if (type == "[") return cont(expect("]"), afterType)
	    if (value == "extends") return cont(typeexpr)
	  }
	  function vardef() {
	    return pass(pattern, maybetype, maybeAssign, vardefCont);
	  }
	  function pattern(type, value) {
	    if (type == "modifier") return cont(pattern)
	    if (type == "variable") { register(value); return cont(); }
	    if (type == "spread") return cont(pattern);
	    if (type == "[") return contCommasep(pattern, "]");
	    if (type == "{") return contCommasep(proppattern, "}");
	  }
	  function proppattern(type, value) {
	    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
	      register(value);
	      return cont(maybeAssign);
	    }
	    if (type == "variable") cx.marked = "property";
	    if (type == "spread") return cont(pattern);
	    if (type == "}") return pass();
	    return cont(expect(":"), pattern, maybeAssign);
	  }
	  function maybeAssign(_type, value) {
	    if (value == "=") return cont(expressionNoComma);
	  }
	  function vardefCont(type) {
	    if (type == ",") return cont(vardef);
	  }
	  function maybeelse(type, value) {
	    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
	  }
	  function forspec(type) {
	    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
	  }
	  function forspec1(type) {
	    if (type == "var") return cont(vardef, expect(";"), forspec2);
	    if (type == ";") return cont(forspec2);
	    if (type == "variable") return cont(formaybeinof);
	    return pass(expression, expect(";"), forspec2);
	  }
	  function formaybeinof(_type, value) {
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return cont(maybeoperatorComma, forspec2);
	  }
	  function forspec2(type, value) {
	    if (type == ";") return cont(forspec3);
	    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
	    return pass(expression, expect(";"), forspec3);
	  }
	  function forspec3(type) {
	    if (type != ")") cont(expression);
	  }
	  function functiondef(type, value) {
	    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
	    if (type == "variable") {register(value); return cont(functiondef);}
	    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
	    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, functiondef)
	  }
	  function funarg(type) {
	    if (type == "spread") return cont(funarg);
	    return pass(pattern, maybetype, maybeAssign);
	  }
	  function classExpression(type, value) {
	    // Class expressions may have an optional name.
	    if (type == "variable") return className(type, value);
	    return classNameAfter(type, value);
	  }
	  function className(type, value) {
	    if (type == "variable") {register(value); return cont(classNameAfter);}
	  }
	  function classNameAfter(type, value) {
	    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, classNameAfter)
	    if (value == "extends" || value == "implements" || (isTS && type == ","))
	      return cont(isTS ? typeexpr : expression, classNameAfter);
	    if (type == "{") return cont(pushlex("}"), classBody, poplex);
	  }
	  function classBody(type, value) {
	    if (type == "variable" || cx.style == "keyword") {
	      if ((value == "async" || value == "static" || value == "get" || value == "set" ||
	           (isTS && (value == "public" || value == "private" || value == "protected" || value == "readonly" || value == "abstract"))) &&
	          cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
	        cx.marked = "keyword";
	        return cont(classBody);
	      }
	      cx.marked = "property";
	      return cont(isTS ? classfield : functiondef, classBody);
	    }
	    if (type == "[")
	      return cont(expression, expect("]"), isTS ? classfield : functiondef, classBody)
	    if (value == "*") {
	      cx.marked = "keyword";
	      return cont(classBody);
	    }
	    if (type == ";") return cont(classBody);
	    if (type == "}") return cont();
	    if (value == "@") return cont(expression, classBody)
	  }
	  function classfield(type, value) {
	    if (value == "?") return cont(classfield)
	    if (type == ":") return cont(typeexpr, maybeAssign)
	    if (value == "=") return cont(expressionNoComma)
	    return pass(functiondef)
	  }
	  function afterExport(type, value) {
	    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
	    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
	    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
	    return pass(statement);
	  }
	  function exportField(type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
	    if (type == "variable") return pass(expressionNoComma, exportField);
	  }
	  function afterImport(type) {
	    if (type == "string") return cont();
	    return pass(importSpec, maybeMoreImports, maybeFrom);
	  }
	  function importSpec(type, value) {
	    if (type == "{") return contCommasep(importSpec, "}");
	    if (type == "variable") register(value);
	    if (value == "*") cx.marked = "keyword";
	    return cont(maybeAs);
	  }
	  function maybeMoreImports(type) {
	    if (type == ",") return cont(importSpec, maybeMoreImports)
	  }
	  function maybeAs(_type, value) {
	    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
	  }
	  function maybeFrom(_type, value) {
	    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
	  }
	  function arrayLiteral(type) {
	    if (type == "]") return cont();
	    return pass(commasep(expressionNoComma, "]"));
	  }
	
	  function isContinuedStatement(state, textAfter) {
	    return state.lastType == "operator" || state.lastType == "," ||
	      isOperatorChar.test(textAfter.charAt(0)) ||
	      /[,.]/.test(textAfter.charAt(0));
	  }
	
	  // Interface
	
	  return {
	    startState: function(basecolumn) {
	      var state = {
	        tokenize: tokenBase,
	        lastType: "sof",
	        cc: [],
	        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
	        localVars: parserConfig.localVars,
	        context: parserConfig.localVars && {vars: parserConfig.localVars},
	        indented: basecolumn || 0
	      };
	      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
	        state.globalVars = parserConfig.globalVars;
	      return state;
	    },
	
	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (!state.lexical.hasOwnProperty("align"))
	          state.lexical.align = false;
	        state.indented = stream.indentation();
	        findFatArrow(stream, state);
	      }
	      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
	      var style = state.tokenize(stream, state);
	      if (type == "comment") return style;
	      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
	      return parseJS(state, style, type, content, stream);
	    },
	
	    indent: function(state, textAfter) {
	      if (state.tokenize == tokenComment) return CodeMirror.Pass;
	      if (state.tokenize != tokenBase) return 0;
	      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
	      // Kludge to prevent 'maybelse' from blocking lexical scope pops
	      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
	        var c = state.cc[i];
	        if (c == poplex) lexical = lexical.prev;
	        else if (c != maybeelse) break;
	      }
	      while ((lexical.type == "stat" || lexical.type == "form") &&
	             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
	                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
	                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
	        lexical = lexical.prev;
	      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
	        lexical = lexical.prev;
	      var type = lexical.type, closing = firstChar == type;
	
	      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
	      else if (type == "form" && firstChar == "{") return lexical.indented;
	      else if (type == "form") return lexical.indented + indentUnit;
	      else if (type == "stat")
	        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
	      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
	        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
	      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
	      else return lexical.indented + (closing ? 0 : indentUnit);
	    },
	
	    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
	    blockCommentStart: jsonMode ? null : "/*",
	    blockCommentEnd: jsonMode ? null : "*/",
	    lineComment: jsonMode ? null : "//",
	    fold: "brace",
	    closeBrackets: "()[]{}''\"\"``",
	
	    helperType: jsonMode ? "json" : "javascript",
	    jsonldMode: jsonldMode,
	    jsonMode: jsonMode,
	
	    expressionAllowed: expressionAllowed,
	    skipExpression: function(state) {
	      var top = state.cc[state.cc.length - 1]
	      if (top == expression || top == expressionNoComma) state.cc.pop()
	    }
	  };
	});
	
	CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);
	
	CodeMirror.defineMIME("text/javascript", "javascript");
	CodeMirror.defineMIME("text/ecmascript", "javascript");
	CodeMirror.defineMIME("application/javascript", "javascript");
	CodeMirror.defineMIME("application/x-javascript", "javascript");
	CodeMirror.defineMIME("application/ecmascript", "javascript");
	CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
	CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
	CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
	CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });
	
	});


/***/ }),
/* 684 */
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTZweCIgaGVpZ2h0PSIxMDlweCIgdmlld0JveD0iMCAwIDk2IDEwOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDIgKDM2NzgxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5MZWFmPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImxlYWYtaWNvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wMDAwMDAsIC02LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iTGVhZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTg1LjYwNTA5NTUsNC4yODY1MTY4NSBDODUuNjA1MDk1NSw0LjI4NjUxNjg1IDQ5LjUyODY2MjQsMTMuNDcxOTEwMSAzNi42ODc4OTgxLDM2Ljc0MTU3MyBDMjMuODQ3MTMzOCw2MC4wMTEyMzYgNy4zMzc1Nzk2MiwxMDguMzg3NjQgNy4zMzc1Nzk2MiwxMDguMzg3NjQgQzcuMzM3NTc5NjIsMTA4LjM4NzY0IC0zLjUyMjAzODIyLDgyLjY2ODUzOTMgMS4zNjk2ODE1Myw2MC4wMTEyMzYgQzYuMjYxNDAxMjcsMzcuMzUzOTMyNiAyMC45MzY1NjA1LDIwLjgyMDIyNDcgNDIuMzM3ODM0NCwxMS4wMjI0NzE5IEM2My43MzkxMDgzLDEuMjI0NzE5MSA5NS41MzUyODY2LDAgOTUuNTM1Mjg2NiwwIEM5NS41MzUyODY2LDAgNzcuNTA5Mjk5NCwxMi44NTk1NTA2IDc5LjQ5MDQ0NTksMzAuMDA1NjE4IEM4MS40NzE1OTI0LDQ3LjE1MTY4NTQgNjUuNTUxODgyNCw3Ni41NDQ5NDM4IDQ3LjgxOTM5ODMsODkuNDA0NDk0NCBDMzAuMDg2OTE0MiwxMDIuMjY0MDQ1IDcuOTQ5MDQ0NTksMTA5IDcuOTQ5MDQ0NTksMTA5IEM3Ljk0OTA0NDU5LDEwOSAzMy4wMTkxMDgzLDU0LjUwMjMxNTIgNDcuNjk0MjY3NSwzNi43NDE1NzMgQzYyLjM2OTQyNjgsMTguOTgwODMwOSA4NS42MDUwOTU1LDQuMjg2NTE2ODUgODUuNjA1MDk1NSw0LjI4NjUxNjg1IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ })
]));
//# sourceMappingURL=3.leaflet.a4a2926fb419d5954a5a.js.map