# MultiLangLogger

A simple, colourful logger for several different languages.

## Installation

```bash
# Make sure to run both
git submodule add https://github.com/anotherpillow/MultiLangLogger.git <path/to/directory>
git submodule update --init --recursive
```

## Usage

### Python

```python

from mod.MultiLangLogger.python import Logger

logger = Logger('Example Python Logger')

logger.success('This is a success message')
logger.info('This is an info message')
logger.warn('This is a warning message')
logger.error('This is an error message')

```

### Typescript

```typescript

import Logger from './mod/MultiLangLogger/typescript'

const logger = new Logger('Example Typescript Logger')

logger.success('This is a success message')
logger.info('This is an info message')
logger.warn('This is a warning message')
logger.error('This is an error message')

```

### Javascript

```javascript

const Logger = require('./mod/MultiLangLogger/javascript')

const logger = new Logger('Example Javascript Logger')

logger.success('This is a success message')
logger.info('This is an info message')
logger.warn('This is a warning message')
logger.error('This is an error message')

```
