import bcrypt from "bcrypt";
import { prisma } from "../config/prisma.js";

const main = async () => {
  const passwordHash = await bcrypt.hash("Admin1234!", 10);

  const admin = await prisma.usuario.upsert({
    where: { email: "admin@sevicol.com" },
    update: {},
    create: {
      nombre: "Administrador Principal",
      cedula: "0000000000",
      email: "admin@sevicol.com",
      passwordHash,
      rol: "administrador",
      origen: "manual",
      activo: true,
    },
  });

  console.log("Usuario admin creado/verificado:", admin.email);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });