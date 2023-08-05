import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

interface Params {
  params: { id: string }
}

export async function DELETE (request: Request, { params }: Params) {
  try {
    const view = await prisma.view.delete({
      where: {
        id: params.id
      }
    })
    return NextResponse.json(view)
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
