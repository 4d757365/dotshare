import { Post, User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};

export type SafePost = Omit<
    Post,
    "createdAt" | "updatedAt" 

> & {
    createdAt: string;
    updatedAt: string;
}