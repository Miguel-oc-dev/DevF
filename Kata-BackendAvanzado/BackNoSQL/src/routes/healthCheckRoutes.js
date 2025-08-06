import express from 'express'

const router = express.Router();

// Funcion callback que responde con un OK

const healthCheck = (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server ruinning"
    })
}

// Endpoint de tipo GET
router.get('/healthcheck', healthCheck)

export default router;