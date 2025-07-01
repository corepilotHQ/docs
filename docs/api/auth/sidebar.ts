import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/auth/corepilot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/auth/sign-in",
          label: "Sign in",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
