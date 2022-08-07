import { Type } from "class-transformer";
import { IsNumber, IsPositive, Min, IsOptional } from "class-validator";

export class PaginationDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type( () => Number )
    limit?: number;

    @IsOptional()
    @IsNumber() 
    @Min(0)
    @Type( () => Number )
    offset?: number;
}