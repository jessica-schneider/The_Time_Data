import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

time_clock_data: defineTable({
    datein: v.string(),
    dateout: v.string(),
    guestid: v.float64(),
    name: v.string(),
}),
});