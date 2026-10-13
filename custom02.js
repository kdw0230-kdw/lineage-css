$(document).ready(function(){
  if(!window.location.hostname.startsWith('poongwol')){
    document.documentElement.style.display='none';
    return;
  }
  if($('.video-container').length>0||$('.video-wrapper').length>0||$('.video-section').length>0){
    $('html').css('display','none');
  }
  var vds=document.getElementById('vds');
  if(vds){
    vds.src='https://vod.plaync.com/LineageW/Introduction/2_2_bloodpledge_03.mp4';
    document.getElementById('vd').load();
  }
});
