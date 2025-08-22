//example data
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "sayantan",
        email: "sayan@example.com",
        age: 10,
        nationality: "indian",
      },
      {
        name: "Bob",
        email: "saya12n@example.com",
        age: 30,
        nationality: "indian",
      },
      {
        name: "sayantansen",
        email: "saadyan@example.com",
        age: 15,
        nationality: "europe",
      },
      {
        name: "sayan",
        email: "sayaadwn@example.com",
        age: 12,
        nationality: "iran",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect);
