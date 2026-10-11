const GREETING = 'Bienvenue à HESTIM !';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
