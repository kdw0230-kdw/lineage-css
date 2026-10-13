
$(document).ready(function(){
    // HTML 화면 정상 표시
    document.documentElement.style.display = 'block';

    // 동영상이 존재할 경우에만 실행
    var vds = document.getElementById('vds');
    var vd = document.getElementById('vd');

    if (vds && vd) {
        vds.src = 'https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';
        vd.load();
    }
});
