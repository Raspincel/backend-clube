import prisma from '../../database/db';

export default async function updateReadingsService(bookId, userId) {
  prisma.readingTracking.update({
    where: {
      userId_bookId: {
        bookId,
        userId
      }
    },
    data: {
      lastRead: new Date()
    }
  });
}