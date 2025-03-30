import { type DBFields } from "./common.type";

export type Announcement = {
  headline: string;
  body: string;
  image?: string;
  isPublished: boolean;
} & DBFields;

export type Forum = {
  name: string;
  logo: string;
  posts?: ForumPost[];
} & DBFields;

export type ForumPost = {
  content: string;
  forumId: number;
  userId: number;
  user: {
    userRoleId: any;
    studentId: string;
    studentCourse: any;
    studentYearLevel: any;
    firstName: string;
    middleName: any;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isEnabled: boolean;
  } & DBFields;
} & DBFields;

export type Event = {} & DBFields;
