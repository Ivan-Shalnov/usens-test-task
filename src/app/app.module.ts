import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordCheckerComponent } from './components/passwordChecker/passwordChecker.component';
import { ComplexityLevel } from './components/complexityLevel/complexityLevel.component';

@NgModule({
  declarations: [AppComponent, PasswordCheckerComponent, ComplexityLevel],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
