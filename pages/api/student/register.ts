import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
NextRequest;
const prisma = new PrismaClient();

export default async function handler(req: NextRequest, res: NextResponse) {
	switch (req.method) {
		case 'POST': {
			await registerNewStudent(req, res);
		}
		default: {
		}
	}
}

const registerNewStudent = async (req: NextRequest, res: NextResponse) => {
	try {
	} catch (error) {}
};

const checkIfStudentRegistered = async (
	req: NextRequest,
	res: NextResponse
) => {};
