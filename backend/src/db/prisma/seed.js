import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { studiesMock } from "./mock.data.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.habitDone.deleteMany();
  await prisma.habit.deleteMany();
  await prisma.emojis.deleteMany();
  await prisma.study.deleteMany();

  const passwordHash = await bcrypt.hash("1234", 10);

  for (const studySeed of studiesMock) {
    await prisma.study.create({
      data: {
        nickName: studySeed.nickName,
        title: studySeed.title,
        description: studySeed.description,
        point: studySeed.point,
        encryptedPassword: passwordHash,
        background: studySeed.background,
        emojis: {
          create: studySeed.emojis.map((emoji) => ({
            emojiContent: emoji.emojiContent,
            count: emoji.count,
          })),
        },
        habits: {
          create: studySeed.habits.map((habit) => ({
            title: habit.title,
            HabitDone: {
              create: habit.doneDates.map((dateStr) => ({
                createdAt: new Date(dateStr),
              })),
            },
          })),
        },
      },
    });
  }

  console.log(`Seed complete. Studies: ${studiesMock.length}`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
