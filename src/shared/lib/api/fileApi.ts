import APIBuilder from './apiBuilder';

/*
 * 파일 관련 API를 정의합니다.
 * 각 API는 APIBuilder를 사용하여 생성됩니다.
 */

// 파일 업로드 API
export const uploadFile = (file: File) => {
  console.log('uploadFile 함수 호출됨');
  console.log('받은 파일:', file);
  console.log('파일 정보:', {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
  });

  const formData = new FormData();
  formData.append('file', file);

  // FormData 내용 확인
  console.log('FormData 생성 완료');
  console.log('FormData에서 file 가져오기:', formData.get('file'));

  // FormData의 모든 항목 출력
  for (const [key, value] of formData.entries()) {
    console.log(`FormData - ${key}:`, value);
  }

  return APIBuilder.post(process.env.NODE_ENV === 'development' ? '/api/file/upload' : '/file/upload', formData)
    .withCredentials(true)
    .build()
    .call();
};

// 파일 조회 API (이미지 뷰)
export const viewFile = (fileId: string) =>
  APIBuilder.get(process.env.NODE_ENV === 'development' ? `/api/file/view/${fileId}` : `/file/view/${fileId}`)
    .withCredentials(true)
    .responseType('blob') // ✅ Blob으로 받도록 설정
    .build()
    .call();

// 파일 다운로드 API
export const downloadFile = (fileId: string) =>
  APIBuilder.get(process.env.NODE_ENV === 'development' ? `/api/file/download/${fileId}` : `/file/download/${fileId}`)
    .withCredentials(true)
    .build()
    .call();
