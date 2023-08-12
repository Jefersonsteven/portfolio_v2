import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  try {
    const url = new URL(request.url)
    const pageNumber = Number(url.searchParams.get('page'))
    const page = pageNumber === 0 || pageNumber === null ? 1 : pageNumber
    const pageSize = 10 // Cantidad de resultados por página

    const totalCertificates = await prisma.certificate.count()

    const certificates = await prisma.certificate.findMany({
      orderBy: {
        date: 'desc'
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const totalPages = Math.ceil(totalCertificates / pageSize)

    const response = {
      page: pageNumber,
      pageSize,
      totalPages,
      certificates
    }

    return NextResponse.json(response)
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
