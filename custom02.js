
console.log("[custom02] JS 파일 실행됨");

$(document).ready(function () {
    console.log("[custom02] document.ready 실행됨");

    var vds = document.getElementById('vds');
    var vd = document.getElementById('vd');

    console.log("[custom02] source:", vds);
    console.log("[custom02] video:", vd);

    if (vds && vd) {
        vds.src = 'https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';
        vd.load();

        console.log("[custom02] 동영상 주소:", vds.src);
    } else {
        console.error("[custom02] 동영상 요소를 찾지 못했습니다.");
    }
});
