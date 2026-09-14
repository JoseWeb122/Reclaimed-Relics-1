import { pgTable, serial, text, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  categoryId: integer("category_id").references(() => categories.id),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
  imageUrl: text("image_url").notNull(),
  galleryImages: text("gallery_images").array(),
  availability: text("availability").default("in_stock"),
  isCustom: boolean("is_custom").default(false),
  details: text("details"),
  dimensions: text("dimensions"),
  materials: text("materials"),
  featured: boolean("featured").default(false),
  bestseller: boolean("bestseller").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name"),
  customerEmail: text("customer_email").notNull(),
  status: text("status").default("pending"),
  total: decimal("total", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").default(1),
  price: decimal("price", { precision: 10, scale: 2 }),
});

export type Category = typeof categories.$inferSelect;
export type Product = typeof products.$inferSelect;
