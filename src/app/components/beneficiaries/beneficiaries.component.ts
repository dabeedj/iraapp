import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Beneficiar {
  name: string;
  date: string | Date;
  type: string;
  optional: string;
  relationShip: boolean;
  amount: number;
}

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

  public total = 0;
  public form: FormGroup;

  get beneficiariesArray(): FormArray {
    return this.form.controls['beneficiaries'] as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe(() => {
      this.calcTotal();
    });
  }

  addBeneficiary(): void {
    if (this.total !== 100) {
      this.beneficiariesArray.push(this.createBeneficiary());
    }
  }

  removeBeneficiary(beneficiarIndex: number): void {
    if (!(this.beneficiariesArray.value.length === 1)) {
      this.beneficiariesArray.removeAt(beneficiarIndex);
    }
  }

  calcTotal(): void {
    this.total = 0;
    this.beneficiariesArray.value.forEach(beneficiar => {
      this.total += parseFloat(beneficiar.amount);
    });
  }

  private createForm(): void {
    this.form = this.fb.group({
      beneficiaries: this.fb.array([this.createBeneficiary()])
    });
  }

  private createBeneficiary(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      type: ['', []],
      optional: ['', []],
      relationShip: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

}
