import * as Yup from 'yup';

export const editProfileValidationSchema = Yup.object().shape({
  userName: Yup.string().required('This field is mandatory'),
  name: Yup.string().required('This field is madatory'),
  skills: Yup.array()
    .of(Yup.string())
    .min(1, ' Min One skills need to be added.')
    .max(6, 'Only Six skills can be added.'),
  gender: Yup.object().shape({
    value: Yup.string().required('This field is madatory'),
  }).nullable().required('This field is madatory'),
  describeInfo: Yup.string()
    .required('This field is mandatory')
    // .matches(/^[0-9]+$/, "Must be only Text")
    .max(300, 'Must be max 300 Text'),
  websiteLink: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .required('This field is mandatory'),
  addCollege: Yup.string().required('This field is madatory'),
  addHighSchool: Yup.string().required('This field is madatory'),
  country: Yup.string().required('This field is madatory'),
  city: Yup.string().required('This field is madatory'),
  // instagramUrl: Yup.string().required('This field is madatory'),
  // facebookUrl: Yup.string().required('This field is madatory'),
  // pinterestUrl: Yup.string().required('This field is madatory'),
  // youtubeUrl: Yup.string().required('This field is madatory'),
});
