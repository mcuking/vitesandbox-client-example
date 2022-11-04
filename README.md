# ViteSandbox Client Example

This repo is used to show the usage of [ViteSandbox](https://github.com/mcuking/vitesandbox-client).

You can try ViteSandbox in the page:

https://mcuking.github.io/vitesandbox-client-example/

![image](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/21563423527/5b7e/3c08/04c9/43ccb28711508866358d16ecbf537db2.png)

### Usage

Usage Example Code:

```js
import Sandbox from './sandbox';

const files = {
  '/package.json': JSON.stringify(packageJson),
  '/index.html': htmlCode,
  '/src/index.js': entryCode,
  '/src/index.less': lessCode,
  '/src/App.js': appCode,
};

<Sandbox
  bundlerURL="https://mcuking.github.io/vitesandbox-client/"
  files={files} />
```

For more details, please check this repo code.

### Related Projects

ViteSandbox Client Repo:

https://github.com/mcuking/vitesandbox-client
