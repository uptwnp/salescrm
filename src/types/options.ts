// Define base types and options in a single source of truth
export type Priority = {
  value: number;
  label: string;
};

// User credentials type
export type UserCredentials = {
  username: string;
  password: string;
  isAdmin: boolean;
};

// Define user credentials
export const USER_CREDENTIALS: UserCredentials[] = [
  { username: "Yogesh", password: "yogesh123", isAdmin: true },
  { username: "Mohit", password: "mohit123", isAdmin: true },
  { username: "Sharvan", password: "sharvan123", isAdmin: false },
  { username: "Parmod", password: "parmod123", isAdmin: false },
  { username: "Telecaller", password: "telecaller123", isAdmin: false },
  { username: "Other", password: "other123", isAdmin: false },
];

// Define default values for new leads
export const DEFAULT_LEAD_VALUES = {
  stage: "Init - General Enquiry",
  priority: 1, // Low
  next_action: "Take All Details",
  intent: 5,
  segment: "Panipat",
  source: "Instagram Organic",
  medium: "Call",
} as const;

// Define all options as const arrays
export const LEAD_OPTIONS = {
  STAGES: [
  "Init - Fresh",
  "Init - Not Connected Yet",
  "Init - General Enquiry",
  "Mid - Waiting for Match",
  "Mid - Options Ready",
  "Mature - Selected Options",
  "Mature - Awaiting Decision",
  "Mature - Exploring Other Options",
  "Mature - May Finalize",
  "Deal - In Negotiation",
  "Deal - Finalized",
  "Deal - Token Received",
  "Deal - Registry Pending",
  "Deal - Deal Closed",
  "Deal - Commission Pending",
  "Negative - Low Bids",
  "Negative - Budget Issue",
  "Negative - Unrealistic Requirement",
  "Negative - Requirement Closed",
  "Negative - Invalid",
  "Negative - Lost",
  "Other"
  ],

  DEAL_STATUS: [
    "May Finalize",
    "Finalized",
    "Low Bids",
    "In Negotiation",
    "Token Received",
    "Budget Issue",
    "Registry Pending",
    "Deal Closed",
    "Commission Pending",
  ],

  VISIT_STATUS: [
    "Want Option First",
    "Want Visit",
    "Visit Scheduled",
    "Meeting Done",
    "Met Multiple Times",
  ],

  PURCHASE_TIMELINE: [
    "Within 15 Days",
    "Within 1 Month",
    "Within 3 Month",
    "After Sale",
    "Within 1 Year",
    "Not Specified",
    "ASAP",
    "After Some Event",
    "Instantly",
  ],

  NEXT_ACTIONS: [
    "Take All Details",
    "Find Match",
    "Follow-up",
    "Schedule Meeting",
    "Exercise Visit",
    "Finalize",
    "Get Meeting Feedback",
    "Take Token",
    "Share Details to Partner",
    "Send Details",
    "Get Status from Partner",
    "Nothing",
    "-",
  ],

  PROPERTY_TYPES: [
    "Plot Residential",
    "House",
    "Shop",
    "Colony",
    "Flats",
    "Agriculture Land",
    "Free Zone Land",
    "Godown",
    "Factory",
    "Big Commercial",
    "Plot Industrial",
    "Other",
    "Any",
  ],

  SIZES: [
    "Below 50 Gaj",
    "50 to 70 Gaj",
    "70 to 90 Gaj",
    "90 to 110 Gaj",
    "110 to 140 Gaj",
    "140 to 180 Gaj",
    "180 to 210 Gaj",
    "210 to 250 Gaj",
    "250 to 300 Gaj",
    "300 Gaj+",
  ],

  PURPOSES: [
    "Living",
    "Investment",
    "Rental Income",
    "Farming",
    "Business",
    "Development",
    "Other",
  ],
    INTENT: [
    "Hot",
    "Cold",
    "Warm",
  ],

  PRIORITIES: [
    { value: 1, label: "Low" },
    { value: 2, label: "Medium" },
    { value: 3, label: "High" },
  ],

  SEGMENTS: ["Panipat", "Panipat Premium", "Other", "Rohtak", "Projects"],

  // New suggestion lists
  TAGS: [
    "Meeting Done",
    "Need Loan",
    "Hot Lead",
    "VIP",
    "Urgent",
    "Follow Up",
    "Premium",
    "Budget Sensitive",
    "Ready to Move",
    "Investment",
    "End User",
  ],

  SOURCES: [
    "ManyChats",
    "M3M Website Ads",
    "M3M Website Organic",
    "Instagram Ads",
    "Instagram Organic",
    "Facebook",
    "Youtube",
    "Other Internet",
    "Personal Network",
    "Random Person",
    "Broker Network",
    "Other",
  ],

  MEDIUMS: [
    "Call",
    "Whatsapp",
    "Instagram Dm",
    "Website Lead",
    "Facebook DM",
    "In Market",
    "Other",
  ],

  LISTS: [
    "Primary",
    "Secondary",
    "Premium",
    "VIP",
    "General",
    "Follow Up",
    "Cold",
    "Archive",
  ],

  PLACEMENTS: [
    "Homepage",
    "Landing Page",
    "Search Results",
    "Property Page",
    "Blog Post",
    "Social Media Ad",
    "Google Ad",
    "Email Campaign",
  ],

  ASSIGNEES: [
    "Yogesh",
    "Mohit",
    "Sharvan",
    "Parmod",
    "Telecaller",
    "Other",
    "Rinku Modal Town",
    "Narender",
    "Uptown Team",
    "Deepak",
    "Komal",
    "Ygs",
  ],
} as const;

// Export individual arrays for backward compatibility
export const LEAD_STAGES = LEAD_OPTIONS.STAGES;
export const NEXT_ACTIONS = LEAD_OPTIONS.NEXT_ACTIONS;
export const PROPERTY_TYPES = LEAD_OPTIONS.PROPERTY_TYPES;
export const PURPOSES = LEAD_OPTIONS.PURPOSES;
export const INTENT = LEAD_OPTIONS.INTENT;
export const PRIORITIES = LEAD_OPTIONS.PRIORITIES;
export const SEGMENTS = LEAD_OPTIONS.SEGMENTS;
export const TAGS = LEAD_OPTIONS.TAGS;
export const SOURCES = LEAD_OPTIONS.SOURCES;
export const MEDIUMS = LEAD_OPTIONS.MEDIUMS;
export const LISTS = LEAD_OPTIONS.LISTS;
export const PLACEMENTS = LEAD_OPTIONS.PLACEMENTS;
export const ASSIGNEES = LEAD_OPTIONS.ASSIGNEES;
export const SIZES = LEAD_OPTIONS.SIZES;
export const DEAL_STATUS = LEAD_OPTIONS.DEAL_STATUS;
export const VISIT_STATUS = LEAD_OPTIONS.VISIT_STATUS;
export const PURCHASE_TIMELINE = LEAD_OPTIONS.PURCHASE_TIMELINE;

// Derive types from the const arrays
export type LeadStage = (typeof LEAD_OPTIONS.STAGES)[number] | null;
export type NextAction = (typeof LEAD_OPTIONS.NEXT_ACTIONS)[number] | null;
export type PropertyType = string | null; // Changed to string to support comma-separated values
export type Purpose = (typeof LEAD_OPTIONS.PURPOSES)[number];
export type Segment = (typeof LEAD_OPTIONS.SEGMENTS)[number];
export type Size = (typeof LEAD_OPTIONS.SIZES)[number];
export type DealStatus = (typeof LEAD_OPTIONS.DEAL_STATUS)[number] | null;
export type VisitStatus = (typeof LEAD_OPTIONS.VISIT_STATUS)[number] | null;
export type PurchaseTimeline = (typeof LEAD_OPTIONS.PURCHASE_TIMELINE)[number] | null;

// Export the Lead interface here since it's closely related to the options
export interface Lead {
  id: number;
  name: string;
  phone: string;
  alternative_contact_details: string | null;
  address: string | null;
  about_him: string | null;
  requirement_description: string | null;
  note: string | null;
  budget: number | null;
  preferred_area: string | null;
  preferred_type: string | null;
  size: string | null;
  purposes: string | null;
  stage: LeadStage;
  priority: number | null;
  next_action: NextAction;
  next_action_time: string | null;
  next_action_note: string | null;
  interested_in: string | null;
  intent: number | null;
  not_interested_in: string | null;
  assigned_to: string | null;
  source: string | null;
  medium: string | null;
  placement: string | null;
  list_name: string | null;
  tags: string | null;
  data_1: string | null;
  data_2: string | null;
  data_3: string | null;
  segment: Segment | null;
  created_at: string;
  updated_at: string;
  hidden?: boolean;
  deal_status: DealStatus;
  visit_status: VisitStatus;
  purchase_timeline: PurchaseTimeline;
}

// Export filter interface
export interface LeadFilters {
  search: string;
  stage: LeadStage[];
  propertyTypes: PropertyType[];
  purposes: Purpose[];
  budget: {
    min: number | null;
    max: number | null;
  };
  showHidden: boolean;
  segment: string[];
  assignedTo: string[];
}