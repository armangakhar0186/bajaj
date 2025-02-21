const request = require("supertest");
const app = require("../server");

describe("BFHL API Tests", () => {
    it("GET /bfhl should return operation code", async () => {
        const response = await request(app).get("/bfhl");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("operation_code", 1);
    });

    it("POST /bfhl should process data correctly", async () => {
        const response = await request(app)
            .post("/bfhl")
            .send({ data: ["A", "1", "B", "3", "C"] })
            .set("Accept", "application/json");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("is_success", true);
    });
});
