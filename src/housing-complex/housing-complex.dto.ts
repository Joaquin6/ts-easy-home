import { IsDate, IsNumber, IsString } from 'class-validator';

class CreateHousingComplexDto {
  @IsNumber()
  public id?: number;

  @IsString()
  public name?: string;

  @IsString()
  public city?: string;

  @IsDate()
  public createdAt?: Date;

  @IsDate()
  public updatedAt?: Date;

  @IsDate()
  public constructionDate?: Date;
}

export default CreateHousingComplexDto;
