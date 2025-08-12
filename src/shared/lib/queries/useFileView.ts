import { useQuery } from '@tanstack/react-query';

import { viewFile } from '../api/fileApi';
import { fileKeys } from '../queryKeys/fileKeys';

// 특정 파일 정보 조회
export const useFileInfo = (fileId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: fileKeys.detail(fileId).queryKey,
    queryFn: () => viewFile(fileId),
    enabled: enabled && !!fileId,
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
    gcTime: 1000 * 60 * 10, // 10분간 가비지 컬렉션 보관
    retry: 2,
    retryDelay: 1000,
  });
};

// 파일 뷰 (이미지 바이너리) 조회 - view API 사용
export const useFileView = (fileId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['fileView', fileId],
    queryFn: async () => {
      console.log('파일 다운로드 시작:', fileId);
      try {
        const response = await viewFile(fileId); // AxiosResponse 응답
        const blob = response.data as Blob; // Blob 추출
        const blobUrl = URL.createObjectURL(blob); // 브라우저에서 쓸 수 있는 임시 URL
        console.log('파일 다운로드 성공, blob URL:', blobUrl);
        return blobUrl;
      } catch (error) {
        console.error('파일 다운로드 실패:', error);
        throw error;
      }
    },
    enabled: enabled && !!fileId,
    staleTime: 1000 * 60 * 10, // 10분간 캐시 유지 (이미지는 변경이 적으므로)
    gcTime: 1000 * 60 * 15, // 15분간 가비지 컬렉션 보관
    retry: 2,
    retryDelay: 1000,
  });
};
