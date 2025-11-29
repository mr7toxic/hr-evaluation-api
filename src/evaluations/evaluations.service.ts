import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './evaluation.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';

@Injectable()
export class EvaluationsService {
    constructor(
        @InjectRepository(Evaluation)
        private repo: Repository<Evaluation>,
    ) { }

    async create(dto: CreateEvaluationDto) {
        try {
            const evalEntity = this.repo.create(dto);
            return this.repo.save(evalEntity);
        } catch (error) {
            throw error;
        }
    }

    async findOne(id: number) {
        try {
            const evaluation = await this.repo.findOne({ where: { id } });
            if (!evaluation) throw new NotFoundException('Evaluation not found ❌');
            return evaluation;
        } catch (error) {
            throw error;
        }
    }

    async findAll(page = 1, limit = 10) {
        try {
            const [items, total] = await this.repo.findAndCount({
                skip: (page - 1) * limit,
                take: limit,
                order: { id: 'DESC' },
            });

            return {
                items,
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            };
        } catch (error) {
            throw error;
        }
    }

    async update(id: number, dto: UpdateEvaluationDto) {
        try {
            await this.repo.update(id, dto);
            return this.findOne(id);
        } catch (error) {
            throw error;
        }
    }

    async remove(id: number) {
        try {
            const result = await this.repo.delete(id);
            if (!result.affected)
                throw new NotFoundException('Evaluation not found ❌');
            return { deleted: true };
        } catch (error) {
            throw error;
        }
    }
}
