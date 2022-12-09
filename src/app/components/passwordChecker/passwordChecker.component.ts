import { Component } from '@angular/core';
import { PASSWORD_STRENGTH } from 'src/app/data/consts';

@Component({
  selector: 'passwordChecker',
  templateUrl: './passwordChecker.component.html',
  styleUrls: ['./passwordChecker.component.scss'],
})
export class PasswordCheckerComponent {
  static REG_EXP = {
    EASY: /^([a-z]+|[@$!%*#?&_]+|\d+)$/i,
    MEDIUM:
      /^(?:(?=.*[0-9])(?=.*[a-z])(?!.*\W)|(?=.*[0-9])(?!.*[a-z])(?=.*\W)|(?!.*[0-9])(?=.*[a-z])(?=.*\W)).{8,}$/i,
    STRONG: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/i,
  };
  password: string;
  passwordStrength: string;
  message: string;
  textClass = 'text--empty';
  inputType = 'password';
  constructor() {
    this.password = '';
    this.message = 'Type something';
    this.passwordStrength = PASSWORD_STRENGTH.EMPTY;
  }
  showPassword() {
    this.inputType = 'text';
  }
  hidePassword() {
    this.inputType = 'password';
  }
  onValueChange(value: string) {
    this.password = value;
    const currentStrength = this.determineStrength(this.password);
    switch (currentStrength) {
      case PASSWORD_STRENGTH.EMPTY:
        this.message = 'Type something';
        this.textClass = 'text--empty';
        this.passwordStrength = PASSWORD_STRENGTH.EMPTY;
        break;
      case PASSWORD_STRENGTH.WEAK:
        this.message = 'At least 8 symbols';
        this.textClass = 'text--weak';
        this.passwordStrength = PASSWORD_STRENGTH.WEAK;

        break;
      case PASSWORD_STRENGTH.EASY:
        this.message = 'Only letters/digits/symbols - the password is easy';
        this.textClass = 'text--easy';
        this.passwordStrength = PASSWORD_STRENGTH.EASY;

        break;
      case PASSWORD_STRENGTH.MEDIUM:
        this.message =
          'Combination of letters-symbols/letters-digits/digits-symbols - the password is medium';
        this.textClass = 'text--medium';
        this.passwordStrength = PASSWORD_STRENGTH.MEDIUM;
        break;
      case PASSWORD_STRENGTH.STRONG:
        this.message =
          'Has letters, symbols and numbers - the password is strong';
        this.textClass = 'text--strong';
        this.passwordStrength = PASSWORD_STRENGTH.STRONG;

        break;
      default:
        this.message = "Doesn't match pattern";
        this.textClass = 'text--empty';
    }
  }
  determineStrength(password: string): string {
    const { REG_EXP } = PasswordCheckerComponent;

    if (password.length === 0) return PASSWORD_STRENGTH.EMPTY;
    if (password.length < 8) return PASSWORD_STRENGTH.WEAK;
    if (REG_EXP.EASY.test(password)) return PASSWORD_STRENGTH.EASY;
    if (REG_EXP.MEDIUM.test(password)) return PASSWORD_STRENGTH.MEDIUM;
    if (REG_EXP.STRONG.test(password)) return PASSWORD_STRENGTH.STRONG;

    return PASSWORD_STRENGTH.NOT_MATCH_PATTERN;
  }
}
