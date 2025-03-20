import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsInt()
  @Min(0)
  @Max(150)  // Assuming age range limit
  age: number;

  @IsInt()
  @Min(0)  // Prevent negative values
  sum: number;
}
