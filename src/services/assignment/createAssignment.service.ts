import prisma from "../../database/db";

type CreateAssignmentInput = {
  content: string;
  professorId: string;
  link?: string;
};

export default async function createAssignmentService({
  content,
  professorId,
  link,
}: CreateAssignmentInput) {
  await prisma.assignment.create({
    data: { content, professorId, link },
    select: { id: true },
  });
}
