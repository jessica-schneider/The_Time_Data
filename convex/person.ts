import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPerson = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const personResponse = await ctx.db.insert("person", {
      personName: args.text,
    });
    return personResponse;
  },
});

export const getAllPeople = query({
  handler: async (ctx) => {
    return await ctx.db.query("person").collect();
  },
});

export const getPerson = query({
  args: { personId: v.id("person") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.personId);
  },
});
