import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/subscription/corepilot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/subscription/get-subscription-plans",
          label: "Get Subscription Plans",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/subscription/get-user-plan",
          label: "Get User Plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/subscription/subscribe",
          label: "Subscribe",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
