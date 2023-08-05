import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    const views = await prisma.view.findMany()
    return NextResponse.json(views)
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
    return NextResponse.json(newView)
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
