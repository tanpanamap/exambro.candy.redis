var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var el=document.documentElement;
btn1.addEventListener("click", () =>{
  if (el.requestFullscreen) {
    el.requestFullscreen ()
  }
})

btn2.addEventListener("click", () => {
  if(document.exitFullscreen)
  document.exitFullscreen()
})

// lainya
const goToTop = () => {
    return (location.href = '#home');
  };
  const home = () => {
    return (location.href = '#home');
  };
  const about = () => {
    return (location.href = '#about');
  };
  const contact = () => {
    return (location.href = '#contact');
  };