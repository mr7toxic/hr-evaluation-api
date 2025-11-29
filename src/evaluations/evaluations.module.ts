import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './evaluation.entity';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Evaluation])],
    providers: [EvaluationsService],
    controllers: [EvaluationsController],
})
export class EvaluationsModule { }
