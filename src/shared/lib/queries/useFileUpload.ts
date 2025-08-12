import { useMutation, useQueryClient } from '@tanstack/react-query';

import { uploadFile } from '../api/fileApi';
import { fileKeys } from '../queryKeys/fileKeys';

export const useFileUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      // 파일 목록 캐시 무효화하여 새로운 파일이 목록에 반영되도록 함
      queryClient.invalidateQueries({
        queryKey: fileKeys.lists().queryKey,
      });

      console.log('파일 업로드 성공:', data);
    },
    onError: (error) => {
      console.error('파일 업로드 실패:', error);
    },
  });
};
