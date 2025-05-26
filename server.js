import Hapi from "@hapi/hapi";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // allow all origin
      },
    },
  });

  server.route(authRoutes);

  await server.start();
  console.log(`🚀 Server running at: ${server.info.uri}`);
};

init();
