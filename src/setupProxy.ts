import { createProxyMiddleware } from "http-proxy-middleware";
import { Express } from "express";
import { API_KEY } from "./consts/Consts";

const setupProxy = (app: Express) => {
  app.use(
    "/api/weather",
    createProxyMiddleware({
      target: "https://api.weather.yandex.ru",
      changeOrigin: true,
      headers: {
        "X-Yandex-API-Key": "6e620186-7fce-4d43-8b55-aaf748a73b88",
      },
      pathRewrite: {
        "^/api/weather": "/v2/forecast",
      },
    })
  );
};

export default setupProxy;
