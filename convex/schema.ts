import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  person: defineTable({
    name: v.string(),
  }),
});
