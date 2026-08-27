# 우신고등학교 교직원 성폭력 예방교육 웹앱

## 포함 기능
- 이름만 입력
- 교육 영상 재생
- 핵심 교육내용
- 객관식 10문항
- 80점 이상 이수
- 미이수 재응시
- 만족도 조사
- 브라우저 내 이수 기록 저장

## 동영상 넣는 방법
업로드한 동영상은 약 363MB로 GitHub 일반 파일 업로드 제한(파일당 100MB)을 넘을 수 있습니다.
따라서 다음 폴더에 동영상 파일을 `training.mp4` 이름으로 넣으면 로컬 웹앱에서는 바로 재생됩니다.

video/training.mp4

웹 배포 시에는 다음 중 하나를 권장합니다.
1. 동영상을 별도 동영상 호스팅 서비스에 업로드한 후 app.js/index.html의 video source URL 변경
2. 영상을 압축하여 100MB 이하로 만든 뒤 GitHub에 업로드
3. Git LFS 또는 별도 스토리지 사용

## GitHub Pages 배포
1. GitHub에서 새 Repository 생성
2. 이 ZIP의 압축을 풀어 모든 파일 업로드
3. Settings → Pages → Deploy from a branch → main / root 선택
4. 생성된 주소를 QR 코드로 배포

주의: 현재 버전의 이수 기록은 각 사용자 브라우저에 저장됩니다.
여러 교직원의 기록을 중앙에서 관리자 명단으로 모으려면 Supabase 또는 Google Sheets 연동이 추가로 필요합니다.
