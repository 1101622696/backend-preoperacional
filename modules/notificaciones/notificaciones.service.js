import admin from "../../config/firebase.js";

export const enviarNotificacion = async (fcmToken, { titulo, cuerpo, data = {} }) => {
  if (!fcmToken) return;
  try {
    await admin.messaging().send({
      token: fcmToken,
      notification: { title: titulo, body: cuerpo },
      data,
    });
  } catch (error) {
    // Nunca debe tumbar el flujo principal (crear/aprobar solicitud) por un push fallido
    console.error("Error enviando notificación FCM:", error.message);
  }
};