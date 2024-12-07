import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  image: Yup.string()
    .url('Invalid URL format')
    .required('Image URL is required'),
});

export default schema;
