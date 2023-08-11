import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    const certificates = await prisma.certificate.findMany()

    return NextResponse.json(certificates)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message
        },
        {
          status: 500
        }
      )
    }
  }
}

export async function POST (request: Request) {
  try {
    const body = await request.json()

    const certificates = await prisma.certificate.createMany({
      data: body.data
    })
    return NextResponse.json({
      data: certificates
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message
        },
        {
          status: 500
        }
      )
    }
  }
}
