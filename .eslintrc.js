module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "__DEV__": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react", "import"],
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {"extensions": [".js", ".jsx"]}
        ],
        "import/prefer-default-export": "off"
    },
    "settings": {
        "import/resolver": {
            "babel-plugin-root-import": {"rootPathSuffix": "src"}
        }
    }
};
