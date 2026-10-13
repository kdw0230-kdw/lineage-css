
$(document).ready(function () {
    console.log("[1] JS 실행 성공");
    console.log("[2] 현재 주소:", window.location.hostname);

    var vds = document.getElementById('vds');
    var vd = document.getElementById('vd');

    console.log("[3] source 요소:", vds);
    console.log("[4] video 요소:", vd);

    if (vds && vd) {
        console.log("[5] 동영상 요소 찾기 성공");

        vds.src = 'https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';

        console.log("[6] source에 설정된 주소:", vds.src);

        vd.load();

        console.log("[7] video.load() 호출 완료");
        console.log("[8] video.currentSrc:", vd.currentSrc);

        vd.addEventListener('loadedmetadata', function () {
            console.log("[성공] 동영상 메타데이터 로딩 완료");
        });

        vd.addEventListener('playing', function () {
            console.log("[성공] 동영상 재생 중");
        });

        vd.addEventListener('error', function () {
            console.error("[오류] 동영상 로딩 실패:", vd.error);
        });

        vd.play().then(function () {
            console.log("[성공] play() 실행 성공");
        }).catch(function (err) {
            console.error("[오류] play() 실행 실패:", err);
        });

    } else {
        console.error("[오류] vds 또는 vd 요소를 찾지 못했습니다.");
    }
});
