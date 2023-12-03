import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Marketing from "@/pages/Marketing.vue";
import ContentGenerator from "@/pages/ContentGenerator.vue";
import CommunityTools from "@/pages/CommunityTools.vue";
import PricingPlans from "@/pages/PricingPlans.vue";
import AccountSettings from "@/pages/AccountSettings.vue";
import Progress from "@/pages/Progress.vue";

import Competition from "@/pages/Competition.vue";
import KeywordResearch from "@/pages/KeywordResearch.vue";
import Optimzation from "@/pages/Optimization.vue";
import Landing from "@/pages/landingPage.vue";
import AdminDashboard from "@/pages/AdminPanel/AdminDashboard.vue";
import AdminSettings from "@/pages/AdminPanel/AdminSettings.vue";
import AdminTransaction from "@/pages/AdminPanel/AdminTransaction.vue";
import AdminUsers from "@/pages/AdminPanel/AdminUsers.vue";
import AdminMail from "@/pages/AdminPanel/AdminMail.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/dashboard",
      name: "home",
      component: Home,
    },
    {
      path: "/marketing",
      name: "marketing",
      component: Marketing,
    },
    {
      path: "/content-generator",
      name: "contentgenerator",
      component: ContentGenerator,
    },
    {
      path: "/community-tools",
      name: "communitytools",
      component: CommunityTools,
    },
    {
      path: "/competition",
      name: "competition",
      component: Competition,
    },
    {
      path: "/pricing-plans",
      name: "pricingplans",
      component: PricingPlans,
    },
    {
      path: "/keyword-research",
      name: "keywordresearch",
      component: KeywordResearch,
    },
    {
      path: "/optimization",
      name: "optimization",
      component: Optimzation,
    },
    {
      path: "/account-Settings",
      name: "accountsettings",
      component: AccountSettings,
    },
    {
      path: "/Progress",
      name: "pro",
      component: Progress,
    },
    {
      path: "/Admindashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
    },
    {
      path: "/Adminsettings",
      name: "AdminSettings",
      component: AdminSettings,
    },
    {
      path: "/Admintransaction",
      name: "AdminTransaction",
      component: AdminTransaction,
    },
    {
      path: "/Adminusers",
      name: "AdminUsers",
      component: AdminUsers,
    },
    {
      path: "/Adminmail",
      name: "AdminMail",
      component: AdminMail,
    },
  ],
});

export default router;
