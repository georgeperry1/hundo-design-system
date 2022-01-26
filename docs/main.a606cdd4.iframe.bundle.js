(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    1005: function (module, exports) {},
    1007: function (module, exports) {},
    1017: function (module, exports) {},
    1019: function (module, exports) {},
    1044: function (module, exports) {},
    1046: function (module, exports) {},
    1047: function (module, exports) {},
    1052: function (module, exports) {},
    1054: function (module, exports) {},
    1060: function (module, exports) {},
    1062: function (module, exports) {},
    1081: function (module, exports) {},
    1093: function (module, exports) {},
    1096: function (module, exports) {},
    1145: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(254).configure)([__webpack_require__(1146), __webpack_require__(1153)], module, !1);
      }.call(this, __webpack_require__(76)(module)));
    },
    1146: function (module, exports, __webpack_require__) {
      var map = {
        './components/Button/Button.stories.tsx': 1147,
        './components/Header/Header.stories.tsx': 1160,
        './components/atoms/Container/Container.stories.tsx': 1150,
        './components/atoms/Icon/Icon.stories.tsx': 1151,
        './components/atoms/Title/Title.stories.tsx': 1152,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1146);
    },
    1147: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Danger', function () {
          return Danger;
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large;
        }),
        __webpack_require__.d(__webpack_exports__, 'Medium', function () {
          return Medium;
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small;
        }),
        __webpack_require__.d(__webpack_exports__, 'Rad2', function () {
          return Rad2;
        }),
        __webpack_require__.d(__webpack_exports__, 'Rad4', function () {
          return Rad4;
        }),
        __webpack_require__.d(__webpack_exports__, 'Rad8', function () {
          return Rad8;
        });
      __webpack_require__(9), __webpack_require__(204), __webpack_require__(0);
      var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(141),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
      __webpack_exports__.default = {
        title: 'Components/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          backgroundColor: { control: 'color' },
          size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
          borderRadius: { control: { type: 'select', options: [2, 4, 8] } },
        },
      };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      };
      Template.displayName = 'Template';
      var Primary = Template.bind({});
      Primary.args = { variant: 'primary', label: 'Button' };
      var Secondary = Template.bind({});
      Secondary.args = { variant: 'secondary', label: 'Button' };
      var Danger = Template.bind({});
      Danger.args = { variant: 'danger', label: 'Button' };
      var Large = Template.bind({});
      Large.args = { size: 'large', label: 'Button' };
      var Medium = Template.bind({});
      Medium.args = { size: 'medium', label: 'Button' };
      var Small = Template.bind({});
      Small.args = { size: 'small', label: 'Button' };
      var Rad2 = Template.bind({});
      Rad2.args = { borderRadius: 2, label: 'Button' };
      var Rad4 = Template.bind({});
      Rad4.args = { borderRadius: 4, label: 'Button' };
      var Rad8 = Template.bind({});
      (Rad8.args = { borderRadius: 8, label: 'Button' }),
        (Primary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Primary.parameters,
        )),
        (Secondary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Secondary.parameters,
        )),
        (Danger.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Danger.parameters,
        )),
        (Large.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Large.parameters,
        )),
        (Medium.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Medium.parameters,
        )),
        (Small.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Small.parameters,
        )),
        (Rad2.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Rad2.parameters,
        )),
        (Rad4.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Rad4.parameters,
        )),
        (Rad8.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Rad8.parameters,
        ));
    },
    1150: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      __webpack_require__(9), __webpack_require__(204), __webpack_require__(0);
      var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(211),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
      __webpack_exports__.default = { title: 'Atoms/Container', component: _Container__WEBPACK_IMPORTED_MODULE_3__.a };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Container__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('span', { children: 'Welcome' }),
      }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Container {...args} />' } },
          Default.parameters,
        ));
    },
    1151: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      __webpack_require__(9), __webpack_require__(204), __webpack_require__(0);
      var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
      __webpack_exports__.default = { title: 'Atoms/Icon', component: _Icon__WEBPACK_IMPORTED_MODULE_3__.a };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Icon__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {}),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Icon {...args} />' } },
          Default.parameters,
        ));
    },
    1152: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, 'small', function () {
          return small;
        }),
        __webpack_require__.d(__webpack_exports__, 'Colorful', function () {
          return Colorful;
        }),
        __webpack_require__.d(__webpack_exports__, 'MonoText', function () {
          return MonoText;
        });
      __webpack_require__(9), __webpack_require__(204), __webpack_require__(0);
      var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(212),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
      __webpack_exports__.default = { title: 'Atoms/Title', component: _Title__WEBPACK_IMPORTED_MODULE_3__.a };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Title__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { children: 'Welcome' };
      var small = Template.bind({});
      small.args = { children: 'Welcome', fontSize: 25 };
      var Colorful = Template.bind({});
      Colorful.args = { children: 'Welcome', color: 'tomato' };
      var MonoText = Template.bind({});
      (MonoText.args = { children: 'Welcome', color: 'tomato', fontFamily: 'monospace' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Title {...args} />' } },
          Default.parameters,
        )),
        (small.parameters = Object.assign(
          { storySource: { source: '(args) => <Title {...args} />' } },
          small.parameters,
        )),
        (Colorful.parameters = Object.assign(
          { storySource: { source: '(args) => <Title {...args} />' } },
          Colorful.parameters,
        )),
        (MonoText.parameters = Object.assign(
          { storySource: { source: '(args) => <Title {...args} />' } },
          MonoText.parameters,
        ));
    },
    1153: function (module, exports, __webpack_require__) {
      var map = { './Introduction.stories.mdx': 1154 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1153);
    },
    1154: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(9),
        __webpack_require__(16),
        __webpack_require__(26),
        __webpack_require__(36),
        __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(271),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(618),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(619),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(620),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__,
        ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__,
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(622),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__,
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__,
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(624),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__,
        ),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(625),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
          _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: 'Docs/Welcome', mdxType: 'Meta' },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', { parentName: 'p' }, 'stories'),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('inlineCode', { parentName: 'p' }, 'src/stories'),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', { parentName: 'a' }, 'component-driven'),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('div', { className: 'subheading' }, 'Configure'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Presets for popular tools'),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Build configuration'),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Styling'),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Data'),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('div', { className: 'subheading' }, 'Learn'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Storybook documentation'),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/tutorials/', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'In-depth guides'),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              { className: 'link-item', href: 'https://github.com/storybookjs/storybook', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'GitHub project'),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              { className: 'link-item', href: 'https://discord.gg/storybook', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('strong', null, 'Discord chat'),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('span', { className: 'tip' }, 'Tip'),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('code', null, 'src/stories/Introduction.stories.mdx'),
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = { title: 'Docs/Welcome', includeStories: ['__page'] },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1159: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        });
      __webpack_require__(16),
        __webpack_require__(36),
        __webpack_require__(53),
        __webpack_require__(1100),
        __webpack_require__(42),
        __webpack_require__(43),
        __webpack_require__(1101),
        __webpack_require__(370),
        __webpack_require__(1102);
      var client_api = __webpack_require__(104),
        esm = __webpack_require__(5),
        client = __webpack_require__(254),
        dist = __webpack_require__(614),
        styled_components_browser_esm = __webpack_require__(68),
        baseTheme =
          (__webpack_require__(9),
          {
            space: [0, 2, 4, 8, 16, 32],
            colors: {
              blue: '#07c',
              tomato: 'tomato',
              purple: 'purple',
              primary: '#025D92',
              secondary: 'green',
              warning: '#025D92',
              danger: 'red',
            },
            fonts: ['sans-serif', 'Roboto'],
            fontSizes: [12, 14, 16, 18, 24, 32],
            radii: [0, 2, 4, 8],
          }),
        lightTheme = Object.assign({}, baseTheme, {
          name: 'Light Theme',
          buttons: {
            primary: { color: 'white', backgroundColor: baseTheme.colors.blue },
            secondary: { color: 'white', backgroundColor: baseTheme.colors.purple },
            danger: { color: 'white', backgroundColor: baseTheme.colors.tomato },
          },
          buttonSizes: {
            small: { fontSize: baseTheme.fontSizes[0], padding: '10px 16px' },
            medium: { fontSize: baseTheme.fontSizes[1], padding: '11px 20px' },
            large: { fontSize: baseTheme.fontSizes[2], padding: '12px 24px' },
          },
        }),
        themes = [
          Object.assign({}, baseTheme, {
            name: 'Dark Theme',
            buttons: {
              primary: { color: 'white', backgroundColor: baseTheme.colors.primary },
              secondary: { color: 'white', backgroundColor: baseTheme.colors.secondary },
              danger: { color: 'white', backgroundColor: baseTheme.colors.danger },
            },
            buttonSizes: {
              small: { fontSize: baseTheme.fontSizes[0], padding: '10px 16px' },
              medium: { fontSize: baseTheme.fontSizes[1], padding: '11px 20px' },
              large: { fontSize: baseTheme.fontSizes[2], padding: '12px 24px' },
            },
          }),
          lightTheme,
        ];
      Object(client.addDecorator)(Object(dist.withThemesProvider)(themes), styled_components_browser_esm.ThemeProvider);
      var parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
        options: { storySort: { order: ['Docs', 'Components'] } },
      };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.b)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.c)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.d)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.d)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    1160: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn;
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut;
        });
      __webpack_require__(9), __webpack_require__(204), __webpack_require__(0);
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        Button = __webpack_require__(141),
        Icon = __webpack_require__(210),
        Container = __webpack_require__(211),
        Title = __webpack_require__(212),
        jsx_runtime = __webpack_require__(20),
        Header_Header = function Header(_ref) {
          var user = _ref.user,
            onLogin = _ref.onLogin,
            onLogout = _ref.onLogout,
            onCreateAccount = _ref.onCreateAccount;
          return Object(jsx_runtime.jsx)('header', {
            children: Object(jsx_runtime.jsxs)(Container.a, {
              children: [
                Object(jsx_runtime.jsxs)('div', {
                  children: [
                    Object(jsx_runtime.jsx)(Icon.a, {}),
                    Object(jsx_runtime.jsx)(Title.a, {
                      fontWeight: 800,
                      fontSize: 20,
                      lineHeight: 1,
                      margin: '6px 0 6px 10px',
                      verticalAlign: 'top',
                      children: 'Acme',
                    }),
                  ],
                }),
                Object(jsx_runtime.jsx)('div', {
                  children: user
                    ? Object(jsx_runtime.jsx)(Button.a, { size: 'small', onClick: onLogout, label: 'Log out' })
                    : Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                          Object(jsx_runtime.jsx)(Button.a, { size: 'small', onClick: onLogin, label: 'Log in' }),
                          Object(jsx_runtime.jsx)(Button.a, {
                            variant: 'primary',
                            size: 'small',
                            marginLeft: 10,
                            onClick: onCreateAccount,
                            label: 'Sign up',
                          }),
                        ],
                      }),
                }),
              ],
            }),
          });
        };
      (Header_Header.displayName = 'Header'),
        (Header_Header.propTypes = {
          user: prop_types_default.a.objectOf(prop_types.string),
          onLogin: prop_types_default.a.func.isRequired,
          onLogout: prop_types_default.a.func.isRequired,
          onCreateAccount: prop_types_default.a.func.isRequired,
        });
      var components_Header_Header = Header_Header;
      try {
        (Header_Header.displayName = 'Header'),
          (Header_Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              user: {
                defaultValue: null,
                description: '',
                name: 'user',
                required: !1,
                type: { name: 'Record<string, unknown>' },
              },
              onLogin: {
                defaultValue: null,
                description: '',
                name: 'onLogin',
                required: !0,
                type: { name: '() => void' },
              },
              onLogout: {
                defaultValue: null,
                description: '',
                name: 'onLogout',
                required: !0,
                type: { name: '() => void' },
              },
              onCreateAccount: {
                defaultValue: null,
                description: '',
                name: 'onCreateAccount',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Header/Header.tsx#Header'] = {
              docgenInfo: Header_Header.__docgenInfo,
              name: 'Header',
              path: 'src/components/Header/Header.tsx#Header',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'Components/Header', component: components_Header_Header };
      var Header_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(components_Header_Header, Object.assign({}, args));
      };
      Header_stories_Template.displayName = 'Template';
      var LoggedIn = Header_stories_Template.bind({});
      LoggedIn.args = { user: {} };
      var LoggedOut = Header_stories_Template.bind({});
      (LoggedOut.args = {}),
        (LoggedIn.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedIn.parameters,
        )),
        (LoggedOut.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          LoggedOut.parameters,
        ));
    },
    141: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(9),
        __webpack_require__(16),
        __webpack_require__(26),
        __webpack_require__(36),
        __webpack_require__(0);
      var styled_components_browser_esm = __webpack_require__(68),
        index_esm = __webpack_require__(81),
        buttonSize = Object(index_esm.g)({ prop: 'size', key: 'buttonSizes' }),
        ThemedButton = Object(styled_components_browser_esm.default)('button')(
          { appearance: 'button', border: 0, outline: 0 },
          index_esm.a,
          buttonSize,
          index_esm.b,
          index_esm.c,
          index_esm.e,
          index_esm.d,
        );
      try {
        (ThemedButton.displayName = 'ThemedButton'),
          (ThemedButton.__docgenInfo = {
            description: '',
            displayName: 'ThemedButton',
            props: {
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: 'undefined' }, { value: '0' }, { value: '2' }, { value: '4' }, { value: '8' }],
                },
              },
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: 'undefined' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"warning"' },
                    { value: '"danger"' },
                    { value: '"white"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: 'undefined' }, { value: '"small"' }, { value: '"medium"' }, { value: '"large"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null' },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Button/Button.styled.tsx#ThemedButton'] = {
              docgenInfo: ThemedButton.__docgenInfo,
              name: 'ThemedButton',
              path: 'src/components/Button/Button.styled.tsx#ThemedButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        jsx_runtime = __webpack_require__(20);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Button_Button = function Button(_ref) {
        var variant = _ref.variant,
          size = _ref.size,
          label = _ref.label,
          props = _objectWithoutProperties(_ref, ['variant', 'size', 'label']);
        return Object(jsx_runtime.jsx)(
          ThemedButton,
          Object.assign({ variant: variant, size: size }, props, { children: label }),
        );
      };
      (Button_Button.displayName = 'Button'),
        (Button_Button.defaultProps = { variant: 'primary', size: 'small', borderRadius: 2 }),
        (Button_Button.propTypes = {
          borderRadius: prop_types_default.a.oneOf([0, 2, 4, 8]),
          variant: prop_types_default.a.oneOf(['primary', 'secondary', 'warning', 'danger', 'white']),
          backgroundColor: prop_types_default.a.string,
          size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
          label: prop_types_default.a.string.isRequired,
          onClick: prop_types_default.a.func,
        });
      __webpack_exports__.a = Button_Button;
      try {
        (Button_Button.displayName = 'Button'),
          (Button_Button.__docgenInfo = {
            description: 'Button UI component for user interaction',
            displayName: 'Button',
            props: {
              borderRadius: {
                defaultValue: { value: '2' },
                description: 'Is this the principal call to action on the page?',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: 'undefined' }, { value: '0' }, { value: '2' }, { value: '4' }, { value: '8' }],
                },
              },
              variant: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: 'undefined' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"warning"' },
                    { value: '"danger"' },
                    { value: '"white"' },
                  ],
                },
              },
              backgroundColor: {
                defaultValue: null,
                description: 'What background color to use',
                name: 'backgroundColor',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'small' },
                description: 'How large should the button be?',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: 'undefined' }, { value: '"small"' }, { value: '"medium"' }, { value: '"large"' }],
                },
              },
              label: {
                defaultValue: null,
                description: 'Button contents',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: 'Optional click handler',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Button/Button.tsx#Button'] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: 'Button',
              path: 'src/components/Button/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    210: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _templateObject;
      __webpack_require__(0), __webpack_require__(62), __webpack_require__(588), __webpack_require__(370);
      var StyledSvg = __webpack_require__(68).default.svg(
        _templateObject ||
          (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
            return (
              raw || (raw = strings.slice(0)),
              Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
            );
          })(['\n    display: inline-block;\n    vertical-align: top;\n'])),
      );
      try {
        (StyledSvg.displayName = 'StyledSvg'),
          (StyledSvg.__docgenInfo = {
            description: '',
            displayName: 'StyledSvg',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null' },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Icon/Icon.styled.tsx#StyledSvg'] = {
              docgenInfo: StyledSvg.__docgenInfo,
              name: 'StyledSvg',
              path: 'src/components/atoms/Icon/Icon.styled.tsx#StyledSvg',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(20),
        Icon_Icon = function Icon() {
          return Object(jsx_runtime.jsx)(StyledSvg, {
            width: '32',
            height: '32',
            viewBox: '0 0 32 32',
            xmlns: 'http://www.w3.org/2000/svg',
            children: Object(jsx_runtime.jsxs)('g', {
              fill: 'none',
              fillRule: 'evenodd',
              children: [
                Object(jsx_runtime.jsx)('path', {
                  d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                  fill: '#FFF',
                }),
                Object(jsx_runtime.jsx)('path', {
                  d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                  fill: '#555AB9',
                }),
                Object(jsx_runtime.jsx)('path', {
                  d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                  fill: '#91BAF8',
                }),
              ],
            }),
          });
        };
      Icon_Icon.displayName = 'Icon';
      __webpack_exports__.a = Icon_Icon;
      try {
        (Icon_Icon.displayName = 'Icon'),
          (Icon_Icon.__docgenInfo = { description: '', displayName: 'Icon', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Icon/Icon.tsx#Icon'] = {
              docgenInfo: Icon_Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/components/atoms/Icon/Icon.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    211: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(0);
      var _templateObject,
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types);
      __webpack_require__(62), __webpack_require__(588), __webpack_require__(370);
      var StyledDiv = __webpack_require__(68).default.div(
        _templateObject ||
          (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
            return (
              raw || (raw = strings.slice(0)),
              Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
            );
          })([
            "\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: 15px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n",
          ])),
      );
      try {
        (StyledDiv.displayName = 'StyledDiv'),
          (StyledDiv.__docgenInfo = {
            description: '',
            displayName: 'StyledDiv',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null' },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Container/Container.styled.tsx#StyledDiv'] = {
              docgenInfo: StyledDiv.__docgenInfo,
              name: 'StyledDiv',
              path: 'src/components/atoms/Container/Container.styled.tsx#StyledDiv',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(20),
        Container_Container = function Container(_ref) {
          var children = _ref.children;
          return Object(jsx_runtime.jsx)(StyledDiv, { children: children });
        };
      Container_Container.displayName = 'Container';
      __webpack_exports__.a = Container_Container;
      Container_Container.propTypes = { children: prop_types_default.a.node.isRequired };
      try {
        (Container_Container.displayName = 'Container'),
          (Container_Container.__docgenInfo = { description: '', displayName: 'Container', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Container/Container.tsx#Container'] = {
              docgenInfo: Container_Container.__docgenInfo,
              name: 'Container',
              path: 'src/components/atoms/Container/Container.tsx#Container',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    212: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(9),
        __webpack_require__(16),
        __webpack_require__(26),
        __webpack_require__(36),
        __webpack_require__(0);
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_esm = __webpack_require__(68),
        index_esm = __webpack_require__(81),
        StyledTitle = Object(styled_components_browser_esm.default)('h1')(
          { display: 'inline-block' },
          index_esm.c,
          index_esm.e,
          index_esm.d,
          index_esm.f,
        );
      try {
        (StyledTitle.displayName = 'StyledTitle'),
          (StyledTitle.__docgenInfo = {
            description: '',
            displayName: 'StyledTitle',
            props: {
              verticalAlign: {
                defaultValue: null,
                description: '',
                name: 'verticalAlign',
                required: !1,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null',
                },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Title/Title.styled.tsx#StyledTitle'] = {
              docgenInfo: StyledTitle.__docgenInfo,
              name: 'StyledTitle',
              path: 'src/components/atoms/Title/Title.styled.tsx#StyledTitle',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(20);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Title_Title = function Title(_ref) {
        var children = _ref.children,
          props = _objectWithoutProperties(_ref, ['children']);
        return Object(jsx_runtime.jsx)(StyledTitle, Object.assign({}, props, { children: children }));
      };
      (Title_Title.displayName = 'Title'), (Title_Title.propTypes = { children: prop_types_default.a.node.isRequired });
      __webpack_exports__.a = Title_Title;
      try {
        (Title_Title.displayName = 'Title'),
          (Title_Title.__docgenInfo = {
            description: '',
            displayName: 'Title',
            props: {
              verticalAlign: {
                defaultValue: null,
                description: '',
                name: 'verticalAlign',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/atoms/Title/Title.tsx#Title'] = {
              docgenInfo: Title_Title.__docgenInfo,
              name: 'Title',
              path: 'src/components/atoms/Title/Title.tsx#Title',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    618: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg';
    },
    619: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/colors.a4bd0486.svg';
    },
    620: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/comments.a3859089.svg';
    },
    621: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/direction.b770f9af.svg';
    },
    622: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg';
    },
    623: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/plugin.d494b228.svg';
    },
    624: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg';
    },
    625: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg';
    },
    645: function (module, exports, __webpack_require__) {
      __webpack_require__(646),
        __webpack_require__(802),
        __webpack_require__(803),
        __webpack_require__(1157),
        __webpack_require__(1155),
        __webpack_require__(1161),
        __webpack_require__(1162),
        __webpack_require__(1158),
        __webpack_require__(1156),
        __webpack_require__(1163),
        __webpack_require__(999),
        __webpack_require__(1099),
        __webpack_require__(1159),
        (module.exports = __webpack_require__(1145));
    },
    713: function (module, exports) {},
    803: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(254);
    },
  },
  [[645, 2, 3]],
]);
