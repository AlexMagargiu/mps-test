export const FORM_FIELDS = [
  { id: "lineName", label: "Name", type: "text", required: true },
  {
    id: "lineCapacity",
    label: "Line Capacity",
    type: "number",
    required: true,
    min: 0,
  },
  {
    id: "maintenanceDay",
    label: "Maintenance Day",
    type: "select",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    required: false,
  },
  {
    id: "maintenancePeriod",
    label: "Maintenance Period (hours)",
    type: "number",
    required: false,
    min: 0,
  },
  {
    id: "specialEventDay",
    label: "Special Event Day",
    type: "select",
    options: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    required: false,
  },
  {
    id: "specialEventPeriod",
    label: "Special Event Period (hours)",
    type: "number",
    required: false,
    min: 0,
  },
  {
    id: "specialEventReason",
    label: "Special Event Reason",
    type: "text",
    required: false,
  },
  {
    id: "shiftPattern",
    label: "Shift Pattern",
    type: "number",
    required: true,
    min: 0,
  },
  {
    id: "operators",
    label: "Operators",
    type: "number",
    required: true,
    min: 0,
  },
  {
    id: "extraTime",
    label: "Extra Time",
    type: "number",
    required: false,
    min: 0,
  },
  {
    id: "assignedToProductionSubarea",
    label: "Production Subarea",
    type: "text",
    required: false,
  },
];