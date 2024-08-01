const router = require(`express`).Router();
const noteroutes = require(`./api-routes`)
router.use(`/notes`, noteroutes)

module.exports = router;