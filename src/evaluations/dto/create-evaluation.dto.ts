import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateEvaluationDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(10)
    score: number;
    @ApiProperty()
    @IsOptional()
    @IsString()
    comment?: string;
}
