import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Mock Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin/agent" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Mock authorization
                if (credentials?.username === "admin" && credentials?.password === "admin") {
                    return { id: "1", name: "Admin User", email: "admin@travel.com", role: "ADMIN" };
                }
                if (credentials?.username === "agent" && credentials?.password === "agent") {
                    return { id: "2", name: "Agent User", email: "agent@travel.com", role: "AGENT" };
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as string;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
};
