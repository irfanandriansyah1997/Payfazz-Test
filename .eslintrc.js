module.exports = {
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true
    },
    plugins: [],
    extends: ['airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        }
    },
    rules: {
        'arrow-parens': [0],
        'class-methods-use-this': [
            0,
            {
                exceptMethods: ['render']
            }
        ],
        'comma-dangle': [2, 'never'],
        'generator-star-spacing': 'off',
        indent: [2, 4],
        'import/no-extraneous-dependencies': [0],
        'import/no-unresolved': [0],
        'import/prefer-default-export': [0],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6']
            }
        },
        'linebreak-style': [2, 'unix'],
        'max-len': [
            2,
            {
                code: 100
            }
        ],
        'no-bitwise': [
            1,
            {
                allow: ['~', '>>>', '>>', '<<', '|', '&'],
                int32Hint: true
            }
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["+", "-", "*", "/", "%", "**"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],
        'no-underscore-dangle': [0],
        'no-unused-vars': [
            0,
            {
                argsIgnorePattern: 'next'
            }
        ],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'space-before-function-paren': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-unescaped-entities': 0,
        'react/require-default-props': 2,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-max-props-per-line': [1, { maximum: 0, when: 'multiline' }],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        ],
        'react/jsx-indent': [1, 4],
        "space-infix-ops": [0]
    },
    globals: {
        document: false,
        window: true,
        Image: true
    }
};
