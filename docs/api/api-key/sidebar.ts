import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/api-key/corepilot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/api-key/create-api-key",
          label: "Create API Key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/api-key/get-api-key-list",
          label: "Get API Key List",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
