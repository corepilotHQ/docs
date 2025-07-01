import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/apy/corepilot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/apy/get-next-round-apy",
          label: "Get Next Round APY",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
