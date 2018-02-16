# Nodeverse-db

## Usage

``` js
const setUpDatabase = require('Nodeverse-db')

setUpDatabase(config).then(db => {
  const { Agent, Metric } = db
//  const Agent = db.Agent
//  const Metric = db.Metric


}).catch(err => console.console.error(err))

```
