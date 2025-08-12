// 파일 업로드 응답 타입
export interface FileUploadResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: FileInfo;
}

// 파일 정보 타입
export interface FileInfo {
  fileId: string;
  originalFilename: string;
}
