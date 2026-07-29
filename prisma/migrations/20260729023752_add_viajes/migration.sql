-- CreateEnum
CREATE TYPE "EstadoViaje" AS ENUM ('en_curso', 'finalizado', 'pendiente_sync');

-- CreateTable
CREATE TABLE "PuntoGps" (
    "id" SERIAL NOT NULL,
    "viajeId" TEXT NOT NULL,
    "ubicacion" geography(Point, 4326) NOT NULL,
    "velocidad" DOUBLE PRECISION,
    "precision" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PuntoGps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viaje" (
    "id" TEXT NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "conductorId" INTEGER NOT NULL,
    "preoperacionalId" INTEGER,
    "horaInicio" TIMESTAMP(3) NOT NULL,
    "horaFin" TIMESTAMP(3),
    "distanciaTotalKm" DOUBLE PRECISION,
    "velocidadPromedio" DOUBLE PRECISION,
    "velocidadMaxima" DOUBLE PRECISION,
    "estado" "EstadoViaje" NOT NULL DEFAULT 'en_curso',
    "archivoRutaUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Viaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PuntoGps_viajeId_idx" ON "PuntoGps"("viajeId");

-- AddForeignKey
ALTER TABLE "PuntoGps" ADD CONSTRAINT "PuntoGps_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_conductorId_fkey" FOREIGN KEY ("conductorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_preoperacionalId_fkey" FOREIGN KEY ("preoperacionalId") REFERENCES "Preoperacional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
