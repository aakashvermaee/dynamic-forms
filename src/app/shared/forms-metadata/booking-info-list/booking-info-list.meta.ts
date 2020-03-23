import { Validators, FormControl, FormGroup } from "@angular/forms";

/* export default {
  id: [
    {
      id: ""
    }
  ],
  firstName: [{ value: "" }, [Validators.required]],
  lastName: [{ value: "" }, [Validators.required]],
  dateOfBirth: [{ value: "" }, [Validators.required]],
  email: [
    { value: "" },
    [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
    ]
  ],
  password: [
    { value: "" },
    [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9]*$")]
  ]
}; */

export default new FormGroup({
  id: new FormControl('', [Validators.required]),
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl("", [Validators.required]),
  dateOfBirth: new FormControl("", [Validators.required]),
  email: new FormControl("", [
    Validators.required,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
  ]),
  password: new FormControl("", [
    Validators.required,
    Validators.pattern("^[A-Za-z][A-Za-z0-9]*$")
  ])
});
