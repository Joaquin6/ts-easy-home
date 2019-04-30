import { IsDate, IsNumber, IsString } from 'class-validator';

class CreateUnitDto {
  @IsNumber()
  public id?: number;

  @IsString()
  public name?: string;

  @IsString()
  public type?: string;

  @IsDate()
  public createdAt?: Date;

  @IsDate()
  public updatedAt?: Date;

  @IsNumber()
  public buildingId?: number;

  @IsNumber()
  public housingComplexId?: number;
}

export default CreateUnitDto;
