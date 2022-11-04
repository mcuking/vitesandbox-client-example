const packageJson =  {
  name: 'demo',
  private: true,
  dependencies: {
    react: '17.0.2',
    'react-dom': '17.0.2'
  },
};

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/ico;base64,aWNv">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root" />
    <script type="module" src="/src/index.js"></script>
  </body>
</html>`.trim();

const entryCode = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.less';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
`.trim();

const lessCode = `
body {
  background: #eee;
}
`.trim();

const appCode = `
import React from 'react';

function App() {
  return (
    <div>Hello World, ViteSandbox!</div>
  );
}

export default App;
`.trim();

const files = {
  '/package.json': JSON.stringify(packageJson),
  '/index.html': htmlCode,
  '/src/index.js': entryCode,
  '/src/index.less': lessCode,
  '/src/App.js': appCode,
};

export default files;
