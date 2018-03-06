function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
console.log(ev)
ev.target.appendChild(document.getElementById(data));
}

var dragEl = null;
function domdrugstart(e) {
    e.target.style.opacity = '0.5';
    dragEl = e.target;
    console.log(dragEl)
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html",e.target.innerHTML);
  }
  function domdrugenter(e) {
    e.target.classList.add('over');
  }
  function domdrugover(e) {
    if (e.preventDefault) {
      e.preventDefault(); 
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }
  function domdrugleave(e) {
    e.target.classList.remove('over'); 
  }   
  function domdrop(e) {
    console.log("第五步",e)
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    console.log(dragEl)
    if (dragEl != e.target) {
      dragEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }    
    
    return false;
  }
  function domdrapend(e) {
      e.target.classList.remove('over');
      e.target.style.opacity = '1';
  }     