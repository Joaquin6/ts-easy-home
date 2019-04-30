import { IsArray, IsString } from 'class-validator';

class CreatePropertyDto {
  @IsString()
  public type?: string;

  @IsString()
  public city?: string;

  @IsString()
  public name?: string;

  @IsArray()
  public units?: object[];
}

export default CreatePropertyDto;
