const GREETING = 'Bienvenue à HESTIM, promotion 2026 !';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
