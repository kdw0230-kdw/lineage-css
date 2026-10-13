
console.log("custom02.js 실행 시작");

$(document).ready(function () {
    console.log("document.ready 실행 성공");

    var vds = document.getElementById('vds');
    var vd = document.getElementById('vd');

    console.log("source 요소:", vds);
    console.log("video 요소:", vd);

    if (vds && vd) {
        vds.src = 'https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';

        vd.load();

        console.log("동영상 주소 설정 성공:", vds.src);

        vd.addEventListener('playing', function () {
            console.log("동영상 재생 성공");
        });

        vd.addEventListener('error', function () {
            console.error("동영상 오류:", vd.error);
        });
    } else {
        console.error("동영상 태그를 찾지 못했습니다.");
    }
});
