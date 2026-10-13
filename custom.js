$(document).ready(function(){
  if(!window.location.hostname.startsWith("poongwol")){
    document.documentElement.style.display="none";
    return;
  }
  if($(".video-container").length>0||$(".video-wrapper").length>0||$(".video-section").length>0){
    $("html").css("display","none");
    return;
  }
  const tabs=document.querySelectorAll(".article-video .video-card");
  const contents=document.querySelectorAll(".content-box");
  tabs.forEach(tab=>{
    tab.addEventListener("click",function(e){
      e.preventDefault();
      tabs.forEach(t=>t.classList.remove("active"));
      this.classList.add("active");
      const target=this.getAttribute("data-target");
      contents.forEach(c=>{
        if(c.id===target){
          c.style.display="block";
          c.classList.add("active");
        }else{
          c.style.display="none";
          c.classList.remove("active");
        }
      });
    });
  });
});
