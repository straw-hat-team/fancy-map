# @straw-hat/fancy-map

## Usage

```ts
import { fs } from 'fs';
import { FancyMap } from '@straw-hat/fancy-map';

// It has all the functionalities of a Map
const map = new FancyMap<string, string>();

function readTemplate(key: string)=> {
  // The callback will be trigger only when `key` is not found in the map.
  // It could be useful to do some caching.
  return fs.readFileSync('some/path/to/file', { encoding: 'utf8' });
}

map.getOrSet('template', readTemplate);
```
