const test = require("node:test");
const assert = require("node:assert");
const app = require("./app");

test("GET / returns Hello CI/CD World!", async () => {
    const server = app.listen(0);
    const port = server.address().port;

    try {
        const response = await fetch(`http://localhost:${port}/`);
        const text = await response.text();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(text, "Hello CI/CD World!");
    } finally {
        server.close();
    }
});

test("GET /add?a=5&b=3 returns 8", async () => {
    const server = app.listen(0);
    const port = server.address().port;

    try {
        const response = await fetch(`http://localhost:${port}/add?a=5&b=3`);
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.result, 8);
    } finally {
        server.close();
    }
});