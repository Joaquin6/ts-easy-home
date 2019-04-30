import { IsNumber, IsString } from 'class-validator';

class CreateUnitDto {
  @IsNumber()
  public id?: number;

  @IsString()
  public name?: string;

  @IsString()
  public type?: string;
}

export default CreateUnitDto;
