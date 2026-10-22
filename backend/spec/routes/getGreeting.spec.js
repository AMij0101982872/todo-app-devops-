const getGreeting = require('../../src/routes/getGreeting');

test('it returns the HESTIM greeting', async () => {
    const res = { send: jest.fn() };

    await getGreeting({}, res);

    expect(res.send.mock.calls.length).toBe(1);
    expect(res.send.mock.calls[0][0]).toEqual({
        greeting: 'Bienvenue à HESTIM, promotion 2026 !',
    });
});
