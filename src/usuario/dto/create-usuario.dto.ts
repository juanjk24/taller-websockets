import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  usu_nombreUsuario: string;

  @IsEmail()
  usu_email: string;

  @IsNotEmpty()
  usu_password: string;
}
