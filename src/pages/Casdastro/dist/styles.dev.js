"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  Container: {
    backgroundColor: '#1F2421',
    flex: 1
  },
  LogoContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  Body: {
    flex: 3,
    paddingHorizontal: 40,
    paddingTop: 0,
    justifyContent: 'center'
  },
  Input: {
    backgroundColor: '#dce1de',
    color: '#1F2421',
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  Button: {
    paddingVertical: 15,
    backgroundColor: '#dce1de',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  goBackButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  goBackButtonText: {
    color: '#dce1de',
    fontSize: 15
  }
});

var _default = styles;
exports["default"] = _default;