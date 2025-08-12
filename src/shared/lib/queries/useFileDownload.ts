import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { downloadFile } from '../api/fileApi';

// 파일 다운로드
export const useFileDownload = () => {
  return useMutation({
    mutationFn: (fileId: string) => downloadFile(fileId) as Promise<AxiosResponse<ArrayBuffer>>,
    onSuccess: (data: AxiosResponse<ArrayBuffer>, fileId: string) => {
      // 다운로드 성공 시 브라우저에서 파일 다운로드 처리
      try {
        const blob = new Blob([data.data], {
          type: data.headers['content-type'] || 'application/octet-stream',
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        // Content-Disposition 헤더에서 파일명 추출
        const contentDisposition = data.headers['content-disposition'];
        let filename = `file_${fileId}`;

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          if (filenameMatch) {
            filename = filenameMatch[1].replace(/['"]/g, '');
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log('파일 다운로드 성공:', filename);
      } catch (error) {
        console.error('파일 다운로드 처리 실패:', error);
      }
    },
    onError: (error) => {
      console.error('파일 다운로드 실패:', error);
    },
  });
};
