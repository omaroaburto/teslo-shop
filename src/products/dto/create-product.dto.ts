import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {

  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  @MinLength(1)
  description?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  slug?: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @Min(0)
  stock?: number;

  @IsString({
    each: true,
  })
  @IsArray()
  sizes: string[];
  
  @IsIn(['men', 'woman', 'kid', 'unisex'])
  gender: string;

  @IsString()
  @IsOptional()
  @IsArray()
  tags?: string[]; 
}
