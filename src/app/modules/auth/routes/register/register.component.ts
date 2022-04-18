import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  public confirmPasswordInputType = "password";
  public passwordInputType = "password";
  public isSubmitted = false;

  public regionList = [
    {name: "Aragatsotn"},
    {name: "Armavir"},
    {name: "Ararat"},
    {name: "Yerevan"},
    {name: "Lori"},
    {name: "Shirak"},
    {name: "Tavush"},
    {name: "Gegharkunik"},
    {name: "Syunik"},
    {name: "Vayots Dzor"},
    {name: "Kotayk"},
  ];

  public gradeList = [
    {name: "1"},
    {name: "2"},
    {name: "3"},
    {name: "4"},
    {name: "5"},
    {name: "6"},
    {name: "7"},
    {name: "8"},
    {name: "9"},
    {name: "10"},
  ];

  public cityList = [
    {name: "Yerevan"},
    {name: "Gyumri"},
    {name: "Vanadzor"},
    {name: "Armavir"},
    {name: "Goris"},
    {name: "Ashtarak"},
    {name: "Artashat"},
    {name: "Gavar"},
    {name: "Kapan"},
    {name: "Dilijan"},
  ];

  public schoolList = [
    {name: "Yerevan"},
    {name: "Gyumri"},
    {name: "Vanadzor"},
    {name: "Armavir"},
    {name: "Goris"},
    {name: "Ashtarak"},
    {name: "Artashat"},
    {name: "Gavar"},
    {name: "Kapan"},
    {name: "Dilijan"},
  ];

  public addForm: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public showPassword(): void {
    if (this.passwordInputType === "password") {
      this.passwordInputType = "text";
    } else this.passwordInputType = "password";
  }

  public showPasswordConfirm(): void {
    if (this.confirmPasswordInputType === "password") {
      this.confirmPasswordInputType = "text";
    } else this.confirmPasswordInputType = "password";
  }

  private createForm(): void {
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
      region: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      school: new FormControl("", Validators.required),
      subject: new FormControl("", Validators.required),
      grade: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    });
  }

  public onSubmit(addForm: FormGroup): void {
    this.isSubmitted = true;
  }

}

