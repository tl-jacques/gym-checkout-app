import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeCreateGymUseCase } from "@/use-case/factories/make-create-gym-use-case"
import { makeCheckInUseCase } from "@/use-case/factories/make-check-in-use-case"
import { makeValidateCheckInUseCase } from "@/use-case/factories/make-validate-check-in-use-case"

export async function validate(request: FastifyRequest, reply: FastifyReply) {
    const validateCheckInParamsSchema = z.object({
        checkInId: z.string().uuid()
    })


    const { checkInId } = validateCheckInParamsSchema.parse(request.params)

    const validateCheckInUseCase = makeValidateCheckInUseCase()

    await validateCheckInUseCase.execute({
        checkInId
    })

    return reply.status(204).send()

}