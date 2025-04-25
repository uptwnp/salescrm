import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  LEAD_STAGES,
  INTENT,
  SOURCES,
  NEXT_ACTIONS,
  PROPERTY_TYPES,
  PRIORITIES,
  SEGMENTS,
  PURPOSES,
  ASSIGNEES,
  SIZES,
  TAGS,
  VISIT_STATUS,
  PURCHASE_TIMELINE,
} from "../types/options";
import { FilterState } from "../types/filters";
import { TagInput } from "./TagInput";

interface LeadFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFiltersChange: (filters: Record<string, string>) => void;
  onTagsChange: (tags: string[]) => void;
  currentFilters: FilterState;
  currentTags: string[];
  isAdmin: boolean;
}

const NEXT_ACTION_TIME_OPTIONS = [
  { value: "", label: "All" },
  { value: "set", label: "Set" },
  { value: "not_set", label: "Not Set" },
  { value: "today", label: "Today" },
  { value: "upcoming_3_days", label: "Within 3 Days" },
  { value: "upcoming_7_days", label: "Within 7 Days" },
  { value: "this_month", label: "This Month" },
  { value: "custom", label: "Custom Date" },
];

export const LeadFiltersModal: React.FC<LeadFiltersModalProps> = ({
  isOpen,
  onClose,
  onFiltersChange,
  onTagsChange,
  currentFilters,
  currentTags,
  isAdmin,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    stage: currentFilters.stage || "",
    priority: currentFilters.priority || "",
    intent: currentFilters.intent || "",

    next_action: currentFilters.next_action || "",
    preferred_type: currentFilters.preferred_type || "",
    budget_min: currentFilters.budget_min || "",
    budget_max: currentFilters.budget_max || "",
    source: currentFilters.source || "",
    segment: currentFilters.segment || "",
    purposes: currentFilters.purposes || "",
    next_action_time: currentFilters.next_action_time || "",
    custom_date: currentFilters.custom_date || "",
    assigned_to: currentFilters.assigned_to || "",
    show_all: currentFilters.show_all || "",
    size: currentFilters.size || "",
    visit_status: currentFilters.visit_status || "",
    purchase_timeline: currentFilters.purchase_timeline || "",
    tags: currentTags,
  });

  useEffect(() => {
    setFilters({
      ...currentFilters,
      tags: currentTags,
    });
  }, [currentFilters, currentTags]);

  const handleApplyFilters = () => {
    const newFilters: Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== "tags") {
        if (
          key === "next_action_time" &&
          value === "custom" &&
          filters.custom_date
        ) {
          newFilters[key] = filters.custom_date;
        } else {
          newFilters[key] = value;
        }
      }
    });

    onFiltersChange(newFilters);
    onTagsChange(filters.tags || []);
    onClose();
  };

  const handleClearFilters = () => {
    const emptyFilters: FilterState = {
      stage: "",
      priority: "",
      intent: "",
      next_action: "",
      pbjhreferred_type: "",
      budget_min: "",
      budget_max: "",
      source: "",
      segment: "",
      purposes: "",
      next_action_time: "",
      custom_date: "",
      assigned_to: "",
      show_all: "",
      size: "",
      visit_status: "",
      purchase_timeline: "",
      tags: [],
    };
    setFilters(emptyFilters);
    onFiltersChange(isAdmin ? {} : { assigned_to: filters.assigned_to });
    onTagsChange([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:max-w-2xl md:rounded-lg max-h-[90vh] flex flex-col rounded-t-[20px]">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scroll-container">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Action Time
              </label>
              <div className="space-y-2">
                <select
                  className="w-full p-2 border rounded-lg"
                  value={filters.next_action_time}
                  onChange={(e) =>
                    setFilters({ ...filters, next_action_time: e.target.value })
                  }
                >
                  {NEXT_ACTION_TIME_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {filters.next_action_time === "custom" && (
                  <input
                    type="date"
                    className="w-full p-2 border rounded-lg mt-2"
                    value={filters.custom_date}
                    onChange={(e) =>
                      setFilters({ ...filters, custom_date: e.target.value })
                    }
                  />
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stage
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.stage}
                onChange={(e) =>
                  setFilters({ ...filters, stage: e.target.value })
                }
              >
                <option value="">All Stages</option>
                {LEAD_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.priority}
                onChange={(e) =>
                  setFilters({ ...filters, priority: e.target.value })
                }
              >
                <option value="">All Priorities</option>
                {PRIORITIES.map((priority) => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intent
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.intent}
                onChange={(e) =>
                  setFilters({ ...filters, intent: e.target.value })
                }
              >
                <option value="">All Intents</option>
                {INTENT.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Action
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.next_action}
                onChange={(e) =>
                  setFilters({ ...filters, next_action: e.target.value })
                }
              >
                <option value="">All Actions</option>
                {NEXT_ACTIONS.map((action) => (
                  <option key={action} value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <TagInput
                value={(filters.preferred_type || "")
                  .split(",")
                  .filter(Boolean)}
                onChange={(values) =>
                  setFilters({ ...filters, preferred_type: values.join(",") })
                }
                suggestions={PROPERTY_TYPES}
                allowCustom={false}
                placeholder="Select property types..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <TagInput
                value={(filters.size || "").split(",").filter(Boolean)}
                onChange={(values) =>
                  setFilters({ ...filters, size: values.join(",") })
                }
                suggestions={SIZES}
                allowCustom={false}
                placeholder="Select sizes..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purpose
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.purposes}
                onChange={(e) =>
                  setFilters({ ...filters, purposes: e.target.value })
                }
              >
                <option value="">All Purposes</option>
                {PURPOSES.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range (Lakhs)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-2 border rounded-lg"
                  value={filters.budget_min}
                  onChange={(e) =>
                    setFilters({ ...filters, budget_min: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-2 border rounded-lg"
                  value={filters.budget_max}
                  onChange={(e) =>
                    setFilters({ ...filters, budget_max: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Source
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={filters.source}
                onChange={(e) =>
                  setFilters({ ...filters, source: e.target.value })
                }
                placeholder="Enter source"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Segment
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.segment}
                onChange={(e) =>
                  setFilters({ ...filters, segment: e.target.value })
                }
              >
                <option value="">All Segments</option>
                {SEGMENTS.map((segment) => (
                  <option key={segment} value={segment}>
                    {segment}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Status
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.visit_status}
                onChange={(e) =>
                  setFilters({ ...filters, visit_status: e.target.value })
                }
              >
                <option value="">All Visit Status</option>
                {VISIT_STATUS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                When Buy
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={filters.purchase_timeline}
                onChange={(e) =>
                  setFilters({ ...filters, purchase_timeline: e.target.value })
                }
              >
                <option value="">All Purchase Timelines</option>
                {PURCHASE_TIMELINE.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assigned To
              </label>
              <TagInput
                value={(filters.assigned_to || "").split(",").filter(Boolean)}
                onChange={(values) =>
                  setFilters({ ...filters, assigned_to: values.join(",") })
                }
                suggestions={ASSIGNEES}
                allowCustom={false}
                placeholder="Select assignees..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <TagInput
                value={filters.tags || []}
                onChange={(values) => setFilters({ ...filters, tags: values })}
                suggestions={TAGS}
                allowCustom={true}
                placeholder="Enter tags (comma separated)"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="show_all"
                checked={filters.show_all === "1"}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    show_all: e.target.checked ? "1" : "",
                  })
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="show_all"
                className="text-sm font-medium text-gray-700"
              >
                Show all leads (including Lost, Requirement Closed, and Invalid)
              </label>
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex justify-end gap-2">
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Clear Filters
          </button>
          <button
            onClick={handleApplyFilters}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
