import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../views/layouts/AuthLayout.vue";
import DefaultLayout from "../views/layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
      meta: { layout: AuthLayout },
    },
    {
      path: "/patient",
      name: "patient-information",
      meta: { layout: DefaultLayout },
      component: () => import("../views/PatientInfo/index.vue"),
    },
    {
      path: "/patient/form",
      name: "patient-form",
      meta: { layout: DefaultLayout },
      component: () => import("../views/PatientInfo/Form.vue"),
    },
    {
      path: "/patient/view-dicom",
      name: "patient-dicom",
      meta: { layout: DefaultLayout },
      component: () => import("../views/PatientInfo/Dicom.vue"),
    },
    {
      path: "/appointment",
      name: "appointment",
      meta: { layout: DefaultLayout },
      component: () => import("../views/Appointment/index.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      meta: { layout: DefaultLayout },
      component: () => import("../views/Payment/index.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      meta: { layout: DefaultLayout },
      component: () => import("../views/Settings/index.vue"),
    },
  ],
});

export default router;
