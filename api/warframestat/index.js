const utils = require('../../utils/utils')
const { getJson,getText } = require('../../utils/superagent')
const config = require("../../config/myConfig");
const logger = require('../../utils/logger')(__filename)

// const WARFRAMESTAT_HOST = "https://api.warframestat.us/pc"
const WARFRAMESTAT_HOST = "https://api.warframestat.us/pc?language=zh"
let queryWorldState = () => getJson(WARFRAMESTAT_HOST)
module.exports = { queryWorldState }
