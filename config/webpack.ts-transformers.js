// 1. import default from the plugin module
const tsImportPluginFactory = require('ts-import-plugin')


// 2. create a transformer;
// the factory additionally accepts an options object which described below

// 3. create getCustomTransformer function
const getCustomTransformers = () => ({ before: [tsImportPluginFactory({
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        })] });

// 4. export getCustomTransformers
module.exports = getCustomTransformers;
