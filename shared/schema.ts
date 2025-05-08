import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (kept from original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact submissions table
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").default(false),
});

export const contactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  message: true,
});

export type InsertContact = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Update storage interface to include contact methods
declare module "../server/storage" {
  interface IStorage {
    createContact(contact: InsertContact): Promise<Contact>;
    getContactById(id: number): Promise<Contact | undefined>;
    getAllContacts(): Promise<Contact[]>;
    markContactAsRead(id: number): Promise<boolean>;
  }
  
  interface MemStorage {
    createContact(contact: InsertContact): Promise<Contact>;
    getContactById(id: number): Promise<Contact | undefined>;
    getAllContacts(): Promise<Contact[]>;
    markContactAsRead(id: number): Promise<boolean>;
  }
}
