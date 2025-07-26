import Button from '@/shared/components/Button/Button';

import Delete from '../../Icons/Delete/Delete';
import Kebab from '../../Icons/Kebab/Kebab';

interface FormActionsProps {
  createAction: () => void;
  editAction: () => void;
  deleteAction: () => void;
}

/**
 * 메모 작성 모달에 이용합니다.
 * `createAction`은 완료하기 버튼 클릭 시 실행되는 함수,
 * `editAction`은 수정하기 버튼 클릭 시 실행되는 함수입니다.
 */
const FormActions = ({ createAction, editAction, deleteAction }: FormActionsProps) => {
  return (
    <>
      <button
        onClick={deleteAction}
        className='hidden tb:flex items-center gap-1 font-body2-medium-tight text-[var(--color-gray-500)] cursor-pointer mb-6'
        type='submit'
      >
        <Delete />
        <span className='font-body2-medium-tight'>삭제하기</span>
      </button>
      <div className='flex justify-end gap-4'>
        <Kebab className='block tb:hidden cursor-pointer' />
        <Button onClick={editAction} variant='secondary' className='hidden tb:flex' type='submit'>
          수정하기
        </Button>
        <Button onClick={createAction} variant='primary' type='submit'>
          완료하기
        </Button>
      </div>
    </>
  );
};

export default FormActions;
