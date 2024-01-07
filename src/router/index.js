import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/patient",
      name: "patient-information",
      component: () => import("../views/PatientInfo.vue"),
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("../views/Appointment.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
    },
  ],
});

export default router;
