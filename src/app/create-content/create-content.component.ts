import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  public contentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateContentComponent>
  ) {
    this.createContentForm();
  }

  ngOnInit(): void {}

  createContentForm() {
    this.contentForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      prize: ['', Validators.required],
      imgURL: [''],
      type: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  createContent(formValues: any): void {
    let newContent = {
      title: formValues.title,
      description: formValues.description,
      prize: formValues.prize,
      imgURL: formValues.imgURL,
      type: formValues.type,
      tags: formValues.tags.split(','),
    };
    this.dialogRef.close({ data: newContent, event: 'Add' });
    this.resetForm();
  }

  resetForm() {
    this.contentForm.reset();
  }

  onCloseClick(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
