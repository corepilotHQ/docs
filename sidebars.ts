import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  apiSidebar: [
    "api/api",
    {
      type: "category",
      collapsed: true,
      label: "Corepilot API",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Auth",
          items: ["api/auth/sign-in-sign-up", "api/auth/refresh-token"],
        },
        {
          type: "category",
          collapsed: true,
          label: "API Key",
          items: ["api/api-key/create-api-key", "api/api-key/get-api-key-list"],
        },
        {
          type: "category",
          collapsed: true,
          label: "Subscription",
          items: [
            "api/subscription/get-subscription-plans",
            "api/subscription/subscribe",
            "api/subscription/get-user-plan",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "APY",
          items: ["api/apy/get-current-round-apy", "api/apy/get-next-round-apy", "api/apy/optimize-staking-distribution"],
        },
        {
          type: "category",
          collapsed: true,
          label: "History",
          items: ["api/history/get-apr-history-statistics", "api/history/get-apr-history-statistics-by-validator-address"],
        },
      ],
    },
  ],
};

export default sidebars;
