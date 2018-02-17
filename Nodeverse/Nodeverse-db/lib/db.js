'use strict'

const Sequelize = require('sequelize')
// una especie de singleton  (solo una instancia)
let sequelize = null

module.exports = function setUpDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
