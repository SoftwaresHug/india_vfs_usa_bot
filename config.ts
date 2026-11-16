// Auto-generated configuration for VFS USA India AutoBot

export const config = {
  botName: "VFS USA India",
  country: "India",
  provider: "VFS Global",
  destination: "USA",
  loginUrl: "https://visa.vfsglobal.com/ind/en/login",
  centers: [
  "Delhi",
  "Mumbai",
  "Chennai",
  "Hyderabad",
  "Kolkata"
],
  visaCategories: [
  "B1/B2",
  "F1",
  "H1B",
  "L1",
  "J1",
  "C1/D",
  "O1",
  "Dropbox"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
