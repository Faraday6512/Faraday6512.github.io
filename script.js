// 버튼 터치 시 파티클 효과나 애니메이션을 추가할 수 있습니다.
// 현재는 정적 페이지로 충분하지만 확장성을 위해 남겨둡니다.
document.addEventListener('DOMContentLoaded', () => {
    // 모든 링크 버튼 요소 선택
    const links = document.querySelectorAll('.link-btn');
    
    // 모바일 기기에서의 터치 반응성 개선 (터치 피드백)
    links.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.transform = 'scale(0.98)';
        });
        
        link.addEventListener('touchend', () => {
            link.style.transform = 'translateY(-2px)'; // 호버 효과 복구
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });
});
