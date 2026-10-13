$(document).ready(function () {
    var vds = document.getElementById('vds');
    var vd = document.getElementById('vd');

    if (vds && vd && typeof vd.load === 'function') {
        vds.src = 'https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';
        vd.load();
    }
});
