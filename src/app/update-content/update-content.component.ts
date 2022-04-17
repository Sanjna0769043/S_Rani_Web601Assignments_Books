import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Content } from '../helper-files/content';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.scss'],
})
export class UpdateContentComponent implements OnInit {
  public updateContentForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateContentComponent>,
    @Inject(MAT_DIALOG_DATA) public contentData: Content
  ) {
    this.createUpdateContentForm();
  }

  ngOnInit(): void {
    let tags = '';
    if (this.contentData.tags) {
      tags = this.contentData.tags.join(',');
    }
    this.updateContentForm.setValue({
      title: this.contentData.title,
      description: this.contentData.description,
      prize: this.contentData.prize,
      imgURL: this.contentData.imgURL,
      type: this.contentData.type,
      tags: tags,
    });
  }

  createUpdateContentForm() {
    this.updateContentForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      prize: ['', Validators.required],
      imgURL: [''],
      type: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  updateContent(formValues: any): void {
    let newContent = {
      id: this.contentData.id,
      title: formValues.title,
      description: formValues.description,
      prize: formValues.prize,
      imgURL: formValues.imgURL,
      type: formValues.type,
      tags: formValues.tags.split(','),
    };
    this.dialogRef.close({ data: newContent, event: 'Update' });
    this.resetForm();
  }

  resetForm() {
    this.updateContentForm.reset();
  }

  onCloseClickHandler(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
