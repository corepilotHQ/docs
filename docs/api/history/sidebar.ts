import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/history/corepilot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/history/get-apr-history",
          label: "Get APR history.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/history/get-apr-history-by-validator-address",
          label: "Get APR history by validator address.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
