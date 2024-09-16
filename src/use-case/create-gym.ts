import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gyms-repository";

interface CreateGymUseCaseRequest {
    title: string
    description: string | null
    phone: string | null
    latitude: number
    longitude: number
}

interface CreateGymUseCaseResponse {
    gym: Gym
}


export class CreateGymUseCase {
    // Dependency Inversion Principle
    constructor(private gymsRepository: GymRepository) { }

    async execute({
        title,
        description,
        phone,
        latitude,
        longitude
    }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
        const gym = await this.gymsRepository.create({
            title,
            description,
            phone,
            latitude,
            longitude
        })
        return { gym }
    }
}