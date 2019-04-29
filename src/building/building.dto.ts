import { IsDate, IsNumber, IsString } from 'class-validator';

class CreateBuildingDto {
  @IsNumber()
  public id?: number;

  @IsString()
  public name?: string;

  @IsDate()
  public createdAt?: Date;

  @IsDate()
  public updatedAt?: Date;
}

export default CreateBuildingDto;
