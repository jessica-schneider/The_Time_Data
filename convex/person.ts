import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createPerson = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const personResponse = await ctx.db.insert("person", { name: args.text });
    console.log("personResponse from backend", personResponse);
  },
});
