//example data
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "sayantan", email: "sayan@example.com" },
      { name: "Bob", email: "saya12n@example.com" },
      { name: "sayantansen", email: "saadyan@example.com" },
      { name: "sayan", email: "sayaadwn@example.com" },
    ],
  });
}

seed().then(() => prisma.$disconnect);
