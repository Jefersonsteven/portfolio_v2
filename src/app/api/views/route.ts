import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    const views = await prisma.view.findMany()

    return NextResponse.json(views.length)
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

    const newView = await prisma.view.create({
      data: body.data
    })
    return NextResponse.json({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      message: `view id: ${newView.id}`
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
