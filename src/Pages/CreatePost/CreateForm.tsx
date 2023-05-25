import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom'
interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required('You must add a title'),
    description: yup.string().min(5).max(50).required('You must add a description'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, 'posts');

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title.." {...register('title')} />
      {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}

      <textarea placeholder="Description" {...register('description')}></textarea>
      {errors.description && (
        <p style={{ color: 'red' }}>{errors.description.message}</p>
      )}

      <button type="submit"  className="submitForm">Submit</button>
    </form>
  );
};
