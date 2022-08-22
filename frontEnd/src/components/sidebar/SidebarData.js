import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Basic-entities",
    path: "/BasicEntities",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Person Based",
        path: "/basicEntities/PersonBased",
      },
      {
        title: "Network Based",
        path: "/BasicEntities/NetworkBased",
      },
      {
        title: "Location Based",
        path: "/BasicEntities/LocationBased",
      },
      {
        title: "Device Based",
        path: "/BasicEntities/DeviceBased",
      },
      {
        title: "Group Based",
        path: "/BasicEntities/GroupBased",
      },
    ],
  },

  {
    title: "Tools",
    path: "/Tools",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Tool usage",
        path: "/Tolls/toolUsage",
      },
    ],
  },

  {
    title: "Transform",
    path: "/transform",
  },

  {
    title: "faq",
    path: "/frequentlyAskedQuestion",
  },
  {
    title: "blogs",
    path: "/PostArticles",
  },
];
