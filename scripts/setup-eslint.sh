#!/bin/bash

# TODO Optional plugin: 'cypress'
# TODO Optional plugin: 'react' & 'react-hooks'

# Install packages
npm i -D \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin

# Create ESLint config
env="{es2021: true, node: true}";
parser="'@typescript-eslint/parser'";
parserOptions="{\n\tecmaVersion: 12,\n\tsourceType: 'module',\n\tproject: './tsconfig.json' }";
plugins="['@typescript-eslint', 'react', 'react-hooks', 'cypress']";
extends="['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended']";
rules="{}";
settings="{'react': {version: 'detect'}}";
config="{\n \
  \troot: true,\n \
  \tenv:$env,\n \
  \tparser: $parser,\n \
  \tparserOptions:$parserOptions,\n \
  \tplugins:$plugins,\n \
  \textends:$extends,\n \
  \trules:$rules,\n \
  \tsettings:$settings\n \
}";
echo "module.exports = $config" >> .eslintrc.cjs

# Done
exit 0;
