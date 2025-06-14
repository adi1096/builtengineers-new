import {
  contacts,
  testimonials,
  users,
  type User,
  type InsertUser,
  type Contact,
  type InsertContact,
  type Testimonial,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;

    // Initialize with sample testimonials
    this.initializeTestimonials();
  }

  private initializeTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        clientName: "Sarah Davidson",
        clientCompany: "Project Manager, Stallion Projects",
        rating: 5,
        testimonialText:
          "Built Engineers delivered exceptional structural design services for our home renovation. Their attention to detail and compliance expertise saved us both time and money.",
        initials: "SD",
      },
      {
        clientName: "Michael Chen",
        clientCompany: "Homeowner",
        rating: 5,
        testimonialText:
          "The team provided excellent structural certification for our home renovation. Professional, timely, and very professional.",
        initials: "MC",
      },
      {
        clientName: "David Rodriguez",
        clientCompany: "Construction Manager, Premium Builds",
        rating: 5,
        testimonialText:
          "Outstanding site inspection services. Their detailed reports and quick turnaround helped keep our project on schedule. Highly recommended!",
        initials: "DR",
      },
      {
        clientName: "Moira Thompson",
        clientCompany: "Architect, Design Solutions Studio",
        rating: 5,
        testimonialText:
          "We've worked with Built Engineers on multiple projects. Their structural design solutions are always innovative and cost-effective",
        initials: "MT",
      },
      {
        clientName: "Mo Wa",
        clientCompany: "Developer, Urban Properties",
        rating: 5,
        testimonialText:
          "Excellent service by the team. Well priced, responsive, and punctual with commitment.",
        initials: "MW",
      },
      {
        clientName: "Graham Barber",
        clientCompany: "Homeowner",
        rating: 5,
        testimonialText: "Very professional and really knew their stuff.",
        initials: "GB",
      },
    ];

    sampleTestimonials.forEach((testimonial) => {
      this.createTestimonial(testimonial);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      projectType: insertContact.projectType || null,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(
    insertTestimonial: InsertTestimonial,
  ): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      rating: insertTestimonial.rating || 5,
      id,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
