import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    response: true,
    message: "Cihuy, Halow Semua 👋 ~ Selamat datang di API Kerja Praktik! 🎉",
    timezone:
      "Asia/Jakarta ~ " +
      new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
  });
});

export default app;
