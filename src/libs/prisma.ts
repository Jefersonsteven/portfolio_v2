// /* eslint-disable no-var */
// /* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { PrismaClient } from '@prisma/client'

// declare global {
//   var prisma: PrismaClient
// }

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

// export default prisma

import { PrismaClient } from '@prisma/client'

export default new PrismaClient()
