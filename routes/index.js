const router = require(`express`).Router();
const apiroutes = require(`./api/`)
const htmlroutes = require(`./html-routes`)


router.use(`/`, htmlroutes)
router.use(`/api`,apiroutes)


module.exports = router;


