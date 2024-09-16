import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new CreateGymUseCase(gymsRepository)
    })
    it('should be able to create gym ', async () => {
        const { gym } = await sut.execute({
            title: 'Gold Gym',
            description: null,
            phone: null,
            latitude: -3.6798464,
            longitude: -40.3198585,

        })

        expect(gym.id).toEqual(expect.any(String))
    })


})

