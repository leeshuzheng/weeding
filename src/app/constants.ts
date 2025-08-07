export const SHEETS_API_URL = process.env.NEXT_PUBLIC_SHEETS_API_URL || "";
export const RSVP_API_URL = "/api/rsvp";

export const TABS = [
  {
    label: "Home",
    value: 0,
  },
  {
    label: "Details",
    value: 1,
  },
  // {
  //   label: "RSVP",
  //   value: 2,
  // },
  {
    label: "Outfit",
    value: 3,
  },
  {
    label: "FAQ",
    value: 4,
  },
];

export const rsvpValues = [
  {
    label: "🎉 Yes",
    value: "Yes",
  },
  {
    label: "💔 No",
    value: "No",
  },
];
