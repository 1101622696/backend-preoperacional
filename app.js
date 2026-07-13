import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import { apiLimiter } from "./middlewares/rateLimiters.js";
import auth from "./modules/auth/auth.routes.js"
import usuarios from "./modules/usuarios/usuarios.routes.js";
import vehiculos from "./modules/vehiculos/vehiculos.routes.js";
import preoperacionales from "./modules/preoperacionales/preoperacionales.routes.js";

const app = express();

const whitelist = [
  'https://localhost',
  'http://localhost:9000',
  'http://localhost',
  'http://localhost:3000',
  'capacitor://localhost',
  'ionic://localhost'
];

const corsOptions = {
  origin: function (origin, callback) {

    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }

  },
  credentials:true
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api", apiLimiter);
app.use("/api/auth", auth);
app.use("/api/usuarios", usuarios);
app.use("/api/vehiculos", vehiculos);
app.use("/api/preoperacionales", preoperacionales);

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "preoperacionales-api" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{

 console.log(
   `Servidor escuchando en el puerto ${PORT}`
 );

});

export default app;